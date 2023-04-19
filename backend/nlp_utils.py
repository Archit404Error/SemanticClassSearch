import json
import re

import faiss
import numpy as np
from gensim.models import Doc2Vec
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sentence_transformers import SentenceTransformer

course_data = json.load(open("./prediction/parsed_courses.json", "r"))
vec_model = Doc2Vec.load("./prediction/course_embeddings.model")
engl_stops = set(stopwords.words("english"))

tuned_model = SentenceTransformer("prediction/course-embeddings")
index = faiss.read_index("prediction/courses.index")
norm_index = faiss.read_index("prediction/courses-normalized.index")


class GeneratedCourse:
    def __init__(self, parsed_data, sim_pct):
        self.dept = parsed_data[0]
        self.number = parsed_data[1]
        self.title = parsed_data[2]
        self.desc = parsed_data[3]
        self.sim_pct = sim_pct

    def serialize(self):
        return {
            "dept": self.dept,
            "number": self.number,
            "title": self.title,
            "desc": self.desc,
            "similarity": self.sim_pct,
        }


def clean(text):
    text = re.sub(r"\|\|\|", r" ", text)
    text = text.replace("„", "")
    text = text.replace("“", "")
    text = text.replace('"', "")
    text = text.replace("'", "")
    text = text.replace("-", "")
    text = text.lower()
    return text


def remove_stopwords(text):
    return " ".join([word for word in text.split() if word not in engl_stops])


def tokenize(text):
    return list(filter(lambda word: len(word) > 3, word_tokenize(text)))


def preprocess(text):
    return tokenize(remove_stopwords(clean(text)))


def recommend_courses(inp, num_recs, dep, level):
    inf = vec_model.infer_vector(preprocess(inp))
    sims = vec_model.dv.most_similar([inf], topn=100)
    gen_courses = []
    titles = set()
    for i, pct in sims:
        course = GeneratedCourse(course_data[i], pct)
        if (
            (dep != "None" and course.dept != dep)
            or int(course.number) > level
            or course.title in titles
        ):
            continue

        titles.add(course.title)
        gen_courses.append(course.serialize())

        if len(titles) == num_recs:
            break
    return gen_courses


def recommend_courses_improved(query, num_recs, dep, level):
    scores, indexes = index.search(tuned_model.encode([query]), 200)
    indexes = list(indexes)[0]
    scores = list(scores)[0]
    gen_courses = []
    titles = set()
    for i, idx in enumerate(indexes):
        course = GeneratedCourse(course_data[idx], float(scores[i]))
        if (
            (dep != "None" and course.dept != dep)
            or int(course.number) > level
            or course.title in titles
        ):
            continue

        titles.add(course.title)
        gen_courses.append(course.serialize())

        if len(titles) == num_recs:
            break
    return gen_courses


def recommend_courses_norm(query, num_recs, dep, level):
    norm_query = (emb := tuned_model.encode([query])) / np.linalg.norm(emb)
    scores, indexes = norm_index.search(norm_query, 200)
    indexes = list(indexes)[0]
    scores = list(scores)[0]
    gen_courses = []
    titles = set()
    for i, idx in enumerate(indexes):
        course = GeneratedCourse(course_data[idx], float(scores[i]))
        if (
            (dep != "None" and course.dept != dep)
            or int(course.number) > level
            or course.title in titles
        ):
            continue

        titles.add(course.title)
        gen_courses.append(course.serialize())

        if len(titles) == num_recs:
            break
    return gen_courses

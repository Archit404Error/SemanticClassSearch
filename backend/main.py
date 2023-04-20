import json
import urllib.parse

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from nlp_utils import recommend_courses, recommend_courses_norm

# from flask_talisman import Talisman


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
# Talisman(app, content_security_policy=None)


@app.route("/search", methods=["GET"])
@cross_origin()
def search():
    query = urllib.parse.unquote_plus(request.args.get("query"))
    amt = int(request.args.get("amt"))
    dep = request.args.get("dep")
    level = int(request.args.get("level"))
    return jsonify(recommend_courses(query, amt, dep, level))


"""
@app.route("/search-improved", methods=["GET"])
@cross_origin()
def search_improved():
    query = urllib.parse.unquote_plus(request.args.get("query"))
    amt = int(request.args.get("amt"))
    dep = request.args.get("dep")
    level = int(request.args.get("level"))
    return jsonify(recommend_courses_improved(query, amt, dep, level))
"""


@app.route("/search-norm", methods=["GET"])
@cross_origin()
def search_norm():
    query = urllib.parse.unquote_plus(request.args.get("query"))
    amt = int(request.args.get("amt"))
    dep = request.args.get("dep")
    level = int(request.args.get("level"))
    return jsonify(recommend_courses_norm(query, amt, dep, level))


@app.route("/course-info", methods=["GET"])
@cross_origin()
def info():
    course = urllib.parse.unquote_plus(request.args.get("course"))
    return jsonify(json.load(open("prediction/search_cls.json", "r"))[course])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

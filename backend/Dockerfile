FROM python:3.9

RUN mkdir /usr/app
WORKDIR /usr/app
COPY . .
RUN pip3 install -r requirements.txt
RUN python -m nltk.downloader stopwords
RUN python -m nltk.downloader punkt
EXPOSE 8000
CMD ["python3", "main.py"]

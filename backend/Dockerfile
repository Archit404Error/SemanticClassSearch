FROM python:3.9

RUN mkdir /usr/app
WORKDIR /usr/app
COPY . .
RUN pip3 install -r requirements.txt
RUN python -m nltk.downloader stopwords
RUN python -m nltk.downloader punkt
EXPOSE 8000
CMD ["python3", "-m", "gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "--certfile", "/etc/letsencrypt/live/backend.cornellcourses.org/fullchain.pem", "--keyfile", "/etc/letsencrypt/live/backend.cornellcourses.org/privkey.pem", "main:app", "--timeout", "120"]

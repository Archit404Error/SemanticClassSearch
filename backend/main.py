import urllib.parse

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_talisman import Talisman
from nlp_utils import recommend_courses

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
Talisman(app, content_security_policy=None)


@app.route("/search")
@cross_origin()
def search():
    query = urllib.parse.unquote_plus(request.args.get("query"))
    amt = int(request.args.get("amt"))
    dep = request.args.get("dep")
    level = int(request.args.get("level"))
    return jsonify(recommend_courses(query, amt, dep, level))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

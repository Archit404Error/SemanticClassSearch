from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from nlp_utils import recommend_courses

app = Flask(__name__)
cors = CORS(app, resources={r"/search": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/search")
@cross_origin()
def search():
    query = request.args.get("query")
    amt = int(request.args.get("amt"))
    response = jsonify(recommend_courses(query, amt))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

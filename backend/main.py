from flask import Flask, jsonify, request

from nlp_utils import recommend_courses

app = Flask(__name__)


@app.route("/search")
def search():
    query = request.args.get("query")
    amt = int(request.args.get("amt"))
    return jsonify(recommend_courses(query, amt))


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

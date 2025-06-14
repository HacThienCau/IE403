from flask import Flask, request, jsonify
from flask_cors import CORS
from predict import load_model, predict_comment

app = Flask(__name__)
CORS(app)

# Load model 1 lần khi server khởi động
tokenizer, model = load_model()

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        comment = data.get("comment", "")
        labels = predict_comment(comment, tokenizer, model)
        return jsonify({
            "status": "success",
            "data": { "label": labels }
        })
    except Exception as e:
        return jsonify({ "status": "error", "message": str(e) }), 500

if __name__ == "__main__":
    app.run(debug=True)

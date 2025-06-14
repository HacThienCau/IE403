from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Cho phép truy cập từ frontend React

# Load model (nên dùng absolute path nếu cần)
model = joblib.load('model.pkl')  # hoặc pickle.load()

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        comment = data.get('comment', '').strip()

        if not comment:
            return jsonify({
                "status": "error",
                "message": "Comment is missing."
            }), 400

        # Dự đoán với mô hình (giả sử model hỗ trợ dự đoán văn bản)
        prediction = model.predict([comment])

        # Nếu model trả ra 1 label (string), ta bọc vào array
        if not isinstance(prediction, list):
            prediction = prediction.tolist()

        return jsonify({
            "status": "success",
            "data": {
                "label": prediction  # luôn trả array về
            }
        })

    except Exception as e:
        print("Prediction error:", e)
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True)

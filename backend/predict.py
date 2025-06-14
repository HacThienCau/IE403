# backend/predict.py

import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration

MODEL_NAME = "google/flan-t5-base"
MODEL_PATH = "model/vithsd_finetuned"  # Đường dẫn thư mục chứa mô hình fine-tune
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

# Load model + tokenizer 1 lần
def load_model():
    tokenizer = T5Tokenizer.from_pretrained(MODEL_NAME)
    model = T5ForConditionalGeneration.from_pretrained(MODEL_PATH).to(DEVICE)
    model.eval()
    return tokenizer, model

# Hàm dự đoán
def predict_comment(comment: str, tokenizer, model, max_input_len=512, max_output_len=128):
    input_text = f"text: {comment}"
    inputs = tokenizer(input_text, return_tensors="pt", truncation=True, padding=True, max_length=max_input_len).to(DEVICE)

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_length=max_output_len,
            num_beams=4,
            early_stopping=True
        )

    decoded = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Parse output nếu là multi-label (vd: "HATE; INDIVIDUAL; NORMAL")
    labels = [label.strip() for label in decoded.split(";") if label.strip()]
    return labels

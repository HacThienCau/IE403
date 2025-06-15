import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState([]);

  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setResult(["Đang xử lý..."]);
  //   try {
  //     const res = await fetch("http://localhost:5000/predict", {
  //       method: "POST",
  //       maxBodyLength: Infinity,
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ comment }),
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //     setResult(data.data.label);
  //   } catch (error) {
  //     console.log(error);
  //     setResult(["Có lỗi xảy ra, vui lòng thử lại sau."]);
  //   }   
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(["Đang xử lý..."]);

    const mockResponses = {
      "Tôi ghét bọn đó, toàn là lũ ăn hại": [
        "individual#NORMAL groups#HATE religion/creed#NORMAL race/ethnicity#NORMAL politics#NORMAL",
      ],
      "Tôi không thích chính trị gia nào cả": [
        "individual#NORMAL groups#NORMAL religion/creed#NORMAL race/ethnicity#NORMAL politics#HATE",
      ],
      "Người đạo Hồi rất nguy hiểm": [
        "individual#NORMAL groups#NORMAL religion/creed#HATE race/ethnicity#NORMAL politics#NORMAL",
      ],
      "Bọn Trung kia lúc nào cũng gây rắc rối": [
        "individual#NORMAL groups#NORMAL religion/creed#NORMAL race/ethnicity#HATE politics#NORMAL",
      ],
    };

    const prediction = mockResponses[comment.trim()];
    if (prediction) {
      setResult(prediction);
    } else {
      setResult(["Không nhận dạng được, vui lòng thử câu khác."]);
    }
  };

  return (
    <div className="min-h-screen flex-1 bg-white dark:bg-gray-900 py-10 px-6">
    {/* Header */}
<div className="bg-gradient-to-r from-[#00ADB5] via-[#00959C] to-[#007D84] text-white rounded-xl px-8 py-6 flex flex-col items-center mb-10 shadow-lg">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-snug drop-shadow-sm">
    Leveraging Large Language Models for Real-Time Detection of Implicit Hate Speech Towards Multiple Targets in Vietnamese Social Media
  </h1>
  
</div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          📝 Nhập văn bản để phân tích
        </h2>

        {/* Textarea */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ví dụ: Tôi ghét bọn đó, toàn là lũ ăn hại..."
          className="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg resize-none dark:bg-gray-700 dark:text-white"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="mt-4 bg-[#00ADB5] text-white py-2 px-6 rounded-xl font-semibold hover:bg-[#268c92] transition-all flex items-center gap-2"
        >
          <Sparkles size={18} /> Phân tích
        </button>
      </form>

      {/* Kết quả */}
      {result.length > 0 && (
        <div className="w-full mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            🔍 Kết quả dự đoán:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {result.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

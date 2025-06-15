import { useState } from "react";


export default function Home() {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(["Đang xử lý..."]);
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        maxBodyLength: Infinity,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      });
      const data = await res.json();
      console.log(data);
      setResult(data.data.label);
    } catch (error) {
      console.log(error);
      setResult(["Có lỗi xảy ra, vui lòng thử lại sau."]);
    }   
  };

  return (
    <div className="w-full">
      <p className="text-4xl font-bold w-full text-center text-theme-light-text dark:text-theme-dark-text mb-10">Nhận diện phát ngôn thù ghét nhắm vào đối tượng cụ thể trên MXH</p>        <form onSubmit={handleSubmit} className="flex flex-col relative gap-2">
        <label className="text-theme-light-text dark:text-theme-dark-text font-semibold mb-2 text-xl">Nhập văn bản:</label>
        <textarea
          placeholder="Điền văn bản của bạn tại đây"
          className="w-full h-40 p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit" className="self-end text-theme-dark-text bg-theme-light-active w-20 h-10 flex items-center justify-center rounded-xl font-semibold">
          Dự đoán
        </button>
      </form>
      {result.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <label className="text-theme-light-text dark:text-theme-dark-text font-semibold text-lg">Kết quả dự đoán:</label>
          {result?.map((item, index) => (
            <p key={index} className="text-theme-light-text dark:text-theme-dark-text m-5">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export default function Analysis() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // fetch something here
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const targets = ["Target", "Count"];
  const labels = [
    { name: "Individuals", color: "#3366CC" },
    { name: "Groups", color: "#DC3912" },
    { name: "Religion/Creed", color: "#FF9900" },
    { name: "Race/Ethnicity", color: "#109618" },
    { name: "Politics", color: "#990099" },
  ];
  const trainData = [
    targets,
    ["Individuals", 5480],
    ["Groups", 2977],
    ["Religion/Creed", 24],
    ["Race/Ethnicity", 502],
    ["Politics", 363],
  ];

  const devData = [
    targets,
    ["Individuals", 938],
    ["Groups", 517],
    ["Religion/Creed", 8],
    ["Race/Ethnicity", 74],
    ["Politics", 57],
  ];

  const testData = [
    targets,
    ["Individuals", 1398],
    ["Groups", 769],
    ["Religion/Creed", 6],
    ["Race/Ethnicity", 129],
    ["Politics", 89],
  ];
  const options = (title) => ({
    title,
    legend: "none",
    slices: {
      0: { color: "#3366CC" },
      1: { color: "#DC3912" },
      2: { color: "#FF9900" },
      3: { color: "#109618" },
      4: { color: "#990099" },
    },
    pieSliceText: "percentage",
    chartArea: { width: "90%", height: "80%" },
  });
  return (
    <div>
      {isLoading ? (
        <div>
          <p className="text-4xl font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-10">
            Đang tải dữ liệu...
          </p>
        </div>
      ) : (
        <div className="w-full h-full min-h-screen flex flex-col mb-10">
          {/*Bộ dữ liệu ViHSD*/}
          <p className="text-xl font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
            Bộ dữ liệu:
          </p>
          <ul className="mb-5 list-disc marker:text-theme-dark-active pl-5 text-theme-light-text dark:text-theme-dark-text">
            <li>
              <strong>Nguồn:</strong> Dữ liệu từ{" "}
              <a
                className="hover:text-theme-dark-active cursor-pointer"
                href="https://github.com/sonlam1102/vihsd"
                target="_blank"
                rel="noreferrer"
              >
                ViHSD
              </a>
              , được làm sạch và gán nhãn thủ công.
            </li>
            <li>
              <strong>Quy mô:</strong> 10.000 bình luận mạng xã hội, gán nhãn
              bởi nhiều annotator.
            </li>
            <li>
              <strong>Target phổ biến:</strong> Cá nhân & nhóm chiếm đa số; tôn
              giáo ít nhất.
            </li>
            <li>
              <strong>Mức độ thù ghét:</strong> Clean nhiều hơn ở cá nhân &
              nhóm; Politics & Race/Ethnicity nghiêng về Hate.
            </li>
          </ul>
          <div className="flex flex-col items-center gap-6">
            {/* Pie charts row */}
            <div className="flex flex-wrap justify-center gap-4">
              <Chart
                chartType="PieChart"
                data={trainData}
                options={options("Train")}
                width="300px"
                height="300px"
              />
              <Chart
                chartType="PieChart"
                data={devData}
                options={options("Dev")}
                width="300px"
                height="300px"
              />
              <Chart
                chartType="PieChart"
                data={testData}
                options={options("Test")}
                width="300px"
                height="300px"
              />
            </div>

            {/* Custom Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {labels.map((label) => (
                <div key={label.name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: label.color }}
                  />
                  <span className="text-sm text-theme-light-text dark:text-theme-dark-text">
                    {label.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/*Bài báo gốc*/}
          <p className="text-xl font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
            Bài báo gốc:
          </p>
          <a
            className="text-lg w-full text-theme-light-text dark:text-theme-dark-text hover:text-theme-dark-active hover:dark:text-theme-dark-active cursor-pointer"
            href="https://arxiv.org/abs/2404.19252"
            rel="noreferrer"
            target="_blank"
          >
            ViTHSD: Exploiting Hatred by Targets for Hate Speech Detection on
            Vietnamese Social Media Texts
          </a>
          <p className="w-full text-theme-light-text dark:text-theme-dark-text py-5">
            Bài báo này tập trung vào một vấn đề cấp thiết trong thời đại số:
            phát hiện và xử lý phát ngôn thù ghét trên mạng xã hội. Trước bối
            cảnh nội dung độc hại ngày càng lan rộng nhanh chóng qua các nền
            tảng trực tuyến, nhóm tác giả đã xây dựng và giới thiệu ViTHSD — một
            tập dữ liệu được chú thích thủ công nhằm phục vụ cho bài toán phát
            hiện phát ngôn thù ghét có chủ đích trong tiếng Việt. Tập dữ liệu
            gồm 10.000 bình luận, được phân loại theo 5 nhóm đối tượng và ba mức
            độ nghiêm trọng (CLEAN, OFFENSIVE, HATE), kèm theo quy trình chú
            thích chặt chẽ nhằm đảm bảo chất lượng. <br />
            Ngoài ra, bài báo còn trình bày một mô hình cơ sở kết hợp các kiến
            trúc mạng nơ-ron (Bi-GRU, LSTM, CNN) cùng mô hình ngôn ngữ tiền huấn
            luyện nhằm tận dụng khả năng biểu diễn ngữ nghĩa của văn bản. Đặc
            biệt, nhóm tác giả đề xuất một phương pháp tích hợp mô hình này vào
            hệ thống xử lý văn bản trực tuyến, mở ra tiềm năng ứng dụng thực
            tiễn trong việc phát hiện và kiểm soát phát ngôn độc hại trên mạng
            xã hội.
          </p>
          {/*Vấn đề nghiên cứu*/}
          <p className="text-xl font-bold w-full text-theme-light-text dark:text-theme-dark-text">
            Vấn đề nghiên cứu:
          </p>
          <p className="w-full text-theme-light-text dark:text-theme-dark-text py-5">
            Trong bài báo, nhóm tác giả đã chỉ ra một hạn chế là khả năng phân
            loại còn chưa hiệu quả đối với các câu mang tính chất ẩn ý
            (implicitness). Do đó, nghiên cứu của chúng tôi sẽ tập trung khắc
            phục và cải thiện vấn đề này.
          </p>
          {/*Hướng giải quyết*/}
          <p className="text-xl font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
            Hướng giải quyết:
          </p>
          <div className="flex gap-10 items-center">
            <div>
              <p className="text-lg font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
                A. Related Works:
              </p>
              <p className="w-full text-theme-light-text dark:text-theme-dark-text">
                <a
                  className="font-bold cursor-pointer hover:text-theme-light-active"
                  target="_blank"
                  rel="noreferrer"
                  href="https://arxiv.org/abs/2311.00321"
                >
                  HARE – Explainable Hate Speech Detection with Step-by-Step
                  Reasoning
                </a>
                <br />
                Một điểm hạn chế nổi bật trong các nghiên cứu hiện tại về phát
                hiện phát ngôn thù ghét là thiếu các chú thích kèm theo lập luận
                logic rõ ràng, dẫn đến những “khoảng trống lý luận” (critical
                gaps in reasoning). Điều này gây khó khăn cho mô hình trong việc
                học được mối liên hệ sâu sắc giữa văn bản và hàm ý ngữ nghĩa, từ
                đó làm giảm hiệu quả của hệ thống giám sát và phát hiện phát
                ngôn thù ghét.
                <br />
                Để khắc phục vấn đề này, framework HARE đã được đề xuất, tận
                dụng khả năng suy luận mạnh mẽ của các mô hình ngôn ngữ lớn
                (LLMs), đặc biệt thông qua kỹ thuật chain-of-thought reasoning
                (CoT). Phương pháp của HARE bao gồm:
              </p>
              <ul className="list-disc marker:text-theme-dark-active pl-5 text-theme-light-text dark:text-theme-dark-text">
                <li>
                  Sinh lập luận từng bước (rationale) bằng cách sử dụng CoT
                  prompt, giúp lấp đầy khoảng trống lý luận trong các chú thích
                  hiện có.
                </li>
                <li>
                  Tích hợp chú thích của con người (ví dụ: nhóm đối tượng bị
                  nhắm đến và phát ngôn hàm ý) vào CoT prompt để hướng dẫn mô
                  hình tạo ra lời giải thích logic sát với thực tế.
                </li>
                <li>
                  Sinh output gồm cả C (category) và R (rationale), với lập luận
                  logic phù hợp hơn với cấu trúc dữ liệu ban đầu.
                </li>
              </ul>
              <p className="w-full text-theme-light-text dark:text-theme-dark-text mb-5">
                <strong>Ưu điểm nổi bật</strong> của HARE là giúp mô hình sinh
                lập luận bám sát tiêu chí đánh giá của con người, từ đó nâng cao
                độ chính xác và tính nhất quán trong phát hiện phát ngôn thù
                ghét.
              </p>
            </div>
            <img
              src="/images/hare.png"
              alt=" HARE uses large language models (LLMs) to generate hate speech explanations step-by-step."
              className="w-[250px] lg:w-[500px] h-[200px] lg:h-[400px]"
            />
          </div>
          <p className="text-lg font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
            B. Pipeline:
            <br />
            GIAI ĐOẠN 01: TẠO TARGET + IMPLIED TỪ DATASET VITHSD
          </p>
          <img
            src="/images/gd1.png"
            alt="GIAI ĐOẠN 01:  TẠO TARGET + IMPLIED TỪ DATASET VITHSD"
            className="w-[600px] self-center mb-5"
          />
          <ul className="list-disc marker:text-theme-dark-active pl-5 text-theme-light-text dark:text-theme-dark-text mb-5">
            <li>
              Sử dụng Gemini Flash 2.5 preview để gán target và implied ⟹ 4
              thành viên trong nhóm check lại
            </li>
            <li>
              Thiết kế lại prompt của nghiên cứu gốc ⟹ phù hợp với dataset và
              bài toán của nhóm
            </li>
            <li>Dùng GPT o3-mini để tạo rationale</li>
          </ul>
          <p className="text-lg font-bold w-full text-theme-light-text dark:text-theme-dark-text mb-5">
            GIAI ĐOẠN 02:  LOẠI BỎ RATIONALE GÂY NHIỄU (DOUBLE CHECK)
          </p>
          <img
            src="/images/gd2.png"
            alt="GIAI ĐOẠN 02:  LOẠI BỎ RATIONALE GÂY NHIỄU (DOUBLE CHECK)"
            className="w-[500px] self-center mb-5"
          />
          <ul className="list-disc marker:text-theme-dark-active pl-5 text-theme-light-text dark:text-theme-dark-text">
            <li>
            Nếu dự đoán nhãn C đúng với nhãn thật của bài đăng, thì lấy luôn cả nhãn C và rationale ⟹  train model
            </li>
            <li>
            Nếu dự đoán nhãn C sai, thì chỉ dùng nhãn C để huấn luyện (không dùng rationale vì nó có thể sai lệch hoặc gây nhiễu).
            </li>
          </ul>
          <p className="w-full text-theme-light-text dark:text-theme-dark-text pb-10">⟹ Mục đích là đảm bảo mô hình chỉ học các lời giải thích phù hợp với nhãn đúng, tránh nhiễu do rationale “lạc đề”.</p>
        </div>
      )}
    </div>
  );
}

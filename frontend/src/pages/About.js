export default function About() {
  return (
    <div>
      {/* Team Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-theme-light-text dark:text-theme-dark-text text-center mb-12">Thành viên nhóm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Phạm Ngọc Trí",
                mssv: "22521526",
                image: "/images/nt.png",
              },
              {
                name: "Trần Đại Hiển",
                mssv: "22520426",
               image: "/images/dh.png",
              },
              {
                name: "Nguyễn Đăng Hương Uyên",
                mssv: "22521641",
                image: "/images/hu.jpg",
              },
              {
                name: "Lê Nguyễn Thùy Dương",
                mssv: "22520298",
              image: "/images/td.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-blue-100">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-theme-dark-active">{member.name}</h3>
                <p className="font-semibold">{member.mssv}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

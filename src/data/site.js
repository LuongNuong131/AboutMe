export const person = {
  name: "Trần Quang Lương",
  email: "tranquangluong06@gmail.com",
  github: "https://github.com/LuongNuong131",
};

export const siteUrl = "https://lunuportfolio.vercel.app";
export const homeTitle = `${person.name} — Full-Stack Developer`;
export const homeDescription = "Portfolio của Trần Quang Lương, Full-Stack Developer tại TP. Hồ Chí Minh. Khám phá AF_Booking, FCDBB, LuNu Music và các dự án khác.";
export const projectTitle = (project) => `${project.title} | ${person.name}`;
export const publicAsset = (filename) => import.meta.env.BASE_URL + filename;

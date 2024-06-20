// File: middlewares/isAdmin.js

export default function isLoggedIn(req: any, res: any, next: any) {
  // Pemeriksaan token di local storage atau sesuai kebutuhan Anda
  const token = localStorage.getItem("token");
  if (!token) {
    return res.push("/login");
  }

  // Lakukan pemeriksaan tambahan sesuai kebutuhan, misalnya memeriksa peran pengguna
  // Jika pengguna bukan admin, arahkan ke halaman lain atau lakukan sesuai kebutuhan Anda
  // if (!isAdminUser(token)) {
  //   return res.redirect("/unauthorized");
  // }

  // Jika token ada dan pengguna adalah admin, lanjutkan ke rute berikutnya
  next();
}

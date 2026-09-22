import { dataUser, User } from "./data .ts";

console.log("=== DAFTAR USER ===");

dataUser.forEach((user: User) => {
  console.log("--------------------");
  console.log("ID:", user.id);
  console.log("Nama:", user.name);
  console.log("Email:", user.email);
  console.log("Kota:", user.address.city);
});
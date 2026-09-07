

const siswa = {
  nama: "Annisa",
  umur: 17,
  kelas: "XI RPL"
};

const { nama, umur, kelas } = siswa;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Kelas:", kelas);


const buah = ["Apel", "Jeruk", "Mangga"];

const [buah1, buah2, buah3] = buah;

console.log(buah1);
console.log(buah2);
console.log(buah3);




const angka1 = [1, 2, 3];
const angka2 = [4, 5, 6];

const semuaAngka = [...angka1, ...angka2];

console.log("Semua angka:", semuaAngka);
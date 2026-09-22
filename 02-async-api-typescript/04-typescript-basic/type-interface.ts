type Siswa = {
    nama: string;
    kelas: string;
    nilai: number;
};

 const siswa1: Siswa  = {
    nama: "Annisa",
    kelas: "12 PPLG 3",
    nilai: 85,
 };



 
 interface Perusahaan {
    Nama: string;
    lokasi: string;

 };
  const perusahaan1: Perusahaan = {
    Nama: "PT. Paragon",
    lokasi: "tanggerang",
  };
  
  console.log("=== MENGGUNAKAN TYPE ===");
  console.log ("Nama:", siswa1.nama);
  console.log("kelas:", siswa1.kelas);
  console.log("nilai:", siswa1.nilai);

  console.log("=== MENGGUNAKAN INTERFACE ===");
  console.log("Nama perusahaan:", perusahaan1.Nama);
  console.log("Lokasi perusahaan:", perusahaan1.lokasi);
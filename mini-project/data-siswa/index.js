// DATA PRODUK

const produk = [
    {
        nama: "Nasi Goreng",
        harga: 15000,
        kategori: "Makanan"
    },
    {
        nama: "Es Teh",
        harga: 5000,
        kategori: "Minuman"
    },
    {
        nama: "Hoodie",
        harga: 85000,
        kategori: "Fashion"
    },
    {
        nama: "Keyboard",
        harga: 200000,
        kategori: "Elektronik"
    }
];


// MENAMPILKAN DATA PRODUK

console.log("===== DATA PRODUK =====");

produk.forEach(function (data) {
    console.log("Nama     :", data.nama);
    console.log("Harga    : Rp" + data.harga);
    console.log("Kategori :", data.kategori);
    console.log("----------------------");
});
import { products } from "./data.js";



function tampilkanProduk(products) {
    console.log("===== DAFTAR PRODUK =====");

    products.forEach((product) => {
        console.log(
            `${product.id}. ${product.nama} - Rp${product.harga.toLocaleString("id-ID")} - Stok: ${product.stok}`
        );
    });
}

tampilkanProduk(products);




function cariBerdasarkanKategori(kategori) {
    return products.filter(
        (product) => product.kategori === kategori
    );
}

const produkElektronik = cariBerdasarkanKategori("Elektronik");

console.log("\n===== PRODUK ELEKTRONIK =====");

produkElektronik.forEach((product) => {
    console.log(product.nama);
});




const produkTersedia = products.filter(
    (product) => product.stok > 0
);

console.log("\n===== PRODUK TERSEDIA =====");

produkTersedia.forEach((product) => {
    console.log(`${product.nama} - Stok: ${product.stok}`);
});




const daftarNamaProduk = products.map(
    (product) => product.nama
);

console.log("\n===== NAMA PRODUK =====");
console.log(daftarNamaProduk);



const produkPertama = products[0];

const { nama, harga, kategori } = produkPertama;

console.log("\n===== PRODUK PERTAMA =====");
console.log("Nama:", nama);
console.log("Harga:", `Rp${harga.toLocaleString("id-ID")}`);
console.log("Kategori:", kategori);




const produkBaru = {
    id: 6,
    nama: "Webcam",
    harga: 800000,
    kategori: "Elektronik",
    stok: 4
};

const semuaProduk = [...products, produkBaru];

console.log("\n===== SETELAH PRODUK BARU DITAMBAHKAN =====");
console.log("Jumlah produk:", semuaProduk.length); 
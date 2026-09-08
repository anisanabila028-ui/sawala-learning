

const products = [
    {
        id: 1,
        nama: "Nasi Goreng",
        harga: 15000,
        kategori: "Makanan"
    },

    {
        id: 2,
        nama: "Es Teh",
        harga: 5000,
        kategori: "Minuman"
    },

    {
        id: 3,
        nama: "Hoodie Hitam",
        harga: 85000,
        kategori: "Fashion"
    },

    {
        id: 4,
        nama: "Headphone",
        harga: 150000,
        kategori: "Elektronik"
    },

    {
        id: 5,
        nama: "Mie Goreng",
        harga: 12000,
        kategori: "Makanan"
    },

    {
        id: 6,
        nama: "Kopi Susu",
        harga: 18000,
        kategori: "Minuman"
    },

    {
        id: 7,
        nama: "Kaos Putih",
        harga: 50000,
        kategori: "Fashion"
    },

    {
        id: 8,
        nama: "Keyboard",
        harga: 200000,
        kategori: "Elektronik"
    }
];




let produkSaatIni = products;




const productContainer =
    document.getElementById("productContainer");

const searchInput =
    document.getElementById("searchInput");

const sortHarga =
    document.getElementById("sortHarga");




function tampilkanProduk(data) {

    productContainer.innerHTML = "";

    if (data.length === 0) {

        productContainer.innerHTML = `
            <div class="not-found">
                <h2>Produk tidak ditemukan</h2>
                <p>Coba cari produk lainnya.</p>
            </div>
        `;

        return;
    }

    data.map(function (product) {

        productContainer.innerHTML += `
            <div class="product-card">

                <h3>${product.nama}</h3>

                <p class="category">
                    ${product.kategori}
                </p>

                <p class="price">
                    Rp ${product.harga.toLocaleString("id-ID")}
                </p>

            </div>
        `;

    });
}




function filterProduk(kategori) {

    if (kategori === "Semua") {

        produkSaatIni = products;

    } else {

        produkSaatIni = products.filter(function (product) {

            return product.kategori === kategori;

        });

    }

    tampilkanProduk(produkSaatIni);
}



searchInput.addEventListener("input", function () {

    const keyword =
        searchInput.value.toLowerCase();

    const hasilSearch =
        produkSaatIni.filter(function (product) {

            return product.nama
                .toLowerCase()
                .includes(keyword);

        });

    tampilkanProduk(hasilSearch);

});




sortHarga.addEventListener("change", function () {

    let hasil = [...produkSaatIni];

    if (sortHarga.value === "termurah") {

        hasil.sort(function (a, b) {

            return a.harga - b.harga;

        });

    }

    if (sortHarga.value === "termahal") {

        hasil.sort(function (a, b) {

            return b.harga - a.harga;

        });

    }

    tampilkanProduk(hasil);

});




tampilkanProduk(products);
console.log("=== PRODUCT HUB ===");

products.forEach(function (product) {
    console.log(product.nama);
    console.log(product.kategori);
    console.log("Rp " + product.harga);
    console.log("----------------");
});
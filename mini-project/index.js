function pesanDkriuk(jumlah, alamat) {
    return new Promise((resolve, reject) => {
        console.log(`pesanan sudah disiapkan ${jumlah} menuju alamat ${alamat}`);
        setTimeout(() => {
            const jumlahPesanan = 5;
            if (jumlah <= jumlahPesanan) {
                resolve(`pesanan ${jumlah} sudah sampai di ${alamat}`);

            } else {
                reject(new Error(`maaf pesanan ${jumlah} tidak bisa diantar, stok tidak mencukupi!`))
            }
        }, 3000);
    })
}

async function pesananDijalankan() {
    try {
        const hasil = await pesanDkriuk(7, "Paseh");
        console.log(hasil);
    } catch (error) {
        console.log(error);

    } finally {
        console.log("selesai");
    }
}
pesananDijalankan();
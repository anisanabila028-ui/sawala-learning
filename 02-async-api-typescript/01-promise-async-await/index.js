// promise biasam
const pinjaman= new Promise((resolve, reject) => {
    const pinjamanDikembalikan= true;

    if(pinjamanDikembalikan) {
        resolve("pinjaman sudah dikembalikan");
    } else {
        reject( new  Error ("pinjaman belum dikembalikan"));
    }
});

console.log(pinjaman);


//promise sama setTimeout

const janji=new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("janji terpernuhi");
    }, 2000);
});
 janji.then((hasil)=>{
    console.log(hasil);
 })

 const ambilData= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("berhasil diambil");
    }, 2000);
 });
 async function tampilkan() {
    const hasil= await ambilData;
    console.log(hasil);

 }
 tampilkan();
 
 //promise async await

 function pinjamanasync() {
    return new Promise((resolve, reject) => {
        console.log("meminjam uang");
        setTimeout(() =>{
        const pinjamanDikembalikan= true;

        if(pinjamanDikembalikan) {
            const data= {
                nama : "annisa",
                jumlah : 200000,
                status: "lunas"
            };

            resolve(data);
        } else {
            reject(new Error("pinjaman belum dikembalikan"));
        }

        }, 2000);
    });
} 
// asynchronous function
async function main() {
    try {
        console.log("meminjam uang");
        const hasil= await pinjamanasync();
        console.log ("pinjaman sudah dkembalikan");
        console.log("nama :" , hasil.nama);
        console.log("jumlah :" , hasil.jumlah);
        console.log("status :" , hasil.status);

    }catch (error){
        console.log(error.message);
    } finally {
        console.log("selesai");
    }
}
     main();

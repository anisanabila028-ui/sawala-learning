async function ambilPengguna() {
    try{
        const response = await fetch 
        ('htts://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log("nama user ketiga:", data[2].name);
    } catch(error){
        console.log("terjadi kesalahan",error.message);
     } finally {
        console.log("selesai");
     }
    }
ambilPengguna();
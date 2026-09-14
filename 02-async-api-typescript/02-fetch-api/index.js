fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then((data) => {
    console.log("semua data user");
    console.log(data);
    console.log("data user pertama");
    console.log(data[0].name);
})
.catch((error) => {
    console.log( "terjadi kesalahan ", error.message)
});
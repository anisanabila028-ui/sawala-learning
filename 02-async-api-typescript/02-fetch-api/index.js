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

//get
const response = await fetch ("https://jsonplacholder.typicode.com/users");
const data = await response.json();
console.log(data);

//POST
const postData = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "annisa nabila",
        email: "annisa.nb@example.com"
    })
});
const newData = await postData.json();
console.log(newData);

//PUT 
const putData = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "annisa",
        email: "annisa.nb@example.com"
    })
});
const Data = await putData.json();
console.log(Data);

//DELETE
const deleteData = await fetch ("https://jsonplacholder.typicode.com/users", {
    method: "DELETE"
});
console.log("berhasil dihapus");
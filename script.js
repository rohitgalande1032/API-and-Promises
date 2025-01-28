

let url1 = "https://dummyjson.com/posts";
let url2 = "https://dummyjson.com/products";
let url3 = "https://dummyjson.com/todos";

let tables = document.getElementById("tables");


// Function to fetch data from API-1 and display in table
function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            fetch(url1)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                tables.innerHTML = `
                <h1 class="text-center">Table 1</h1>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Reactions</th>
                        <th scope="col">Viws</th>
                        <th scope="col">UserId</th>
                        
                    </tr>
                    </thead>
                    <tbody id="table1Body">
                    
                    </tbody>
                </table>
                `
                data.posts.map((item) => {
                    let table1Body = document.getElementById("table1Body");
                    table1Body.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.body}</td>
                        <td>${item.tags}</td>
                        <td>Likes- ${item.reactions.likes} Dislikes- ${item.reactions.dislikes}</td>
                        <td>${item.views}</td>
                        <td>${item.userId}</td>
                    </tr>
                    `
                })
                resolve(true)
            }).catch((err) => console.log("Errror", err))
        }, 1000)
    })
}

// Function to fetch data from API-2 and display in table
function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url2)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                tables.innerHTML = `
                <h1 class="text-center">Table 2</h1>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Categoty</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Description</th>
                        <th scope="col">Availability</th>
                        <th scope="col">Shipping Info</th>
                        <th scope="col">Tags</th>
                        <th scope="col">returnPolicy</th>
                        
                    </tr>
                    </thead>
                    <tbody id="table1Body">
                    
                    </tbody>
                </table>
                `
                data.products.map((item) => {
                    table1Body.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td><img width="100px" height="100px" src="${item.thumbnail}"></td>
                        <td>${item.brand}</td>
                        <td>${item.category}</td>
                        <td>${item.price}</td>
                        <td>${item.rating}</td>
                        <td>${item.description}</td>
                        <td>${item.availabilityStatus}</td>
                        <td>${item.shippingInformation}</td>
                        <td>${item.tags}</td>
                        <td>${item.returnPolicy}</td>
                    </tr>
                    `
                })
                
            })
            resolve(true)
        }, 2000)
    })
}

// Function to fetch data from API-3 and display in table
function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            fetch(url3)
            .then(response => response.json())
            .then(data=> {
                console.log(data)
                tables.innerHTML = `
                <h1 class="text-center">Table 3</h1>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Todo</th>
                        <th scope="col">Completed</th>
                        <th scope="col">userId</th>                     
                    </tr>
                    </thead>
                    <tbody id="table1Body">
                    
                    </tbody>
                </table>
                `

                data.todos.map((item) => {
                    table1Body.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.todo}</td>
                        <td>${item.completed}</td>
                        <td>${item.userId}</td>
                      
                    </tr>
                    `
                })
            })
            resolve(true)
        }, 3000)
    })
}

//Promise Chain

function PromiseChain() {
    tables.innerHTML = ""
    PromiseAPI1().then((data1) => PromiseAPI2())
    .then((data2)=> PromiseAPI3())
    .catch((err) => console.log(err))
}

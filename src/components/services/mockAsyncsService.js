const databaseItems = [
    {
        id:1,
        title: "The flash",
        category:"Comics",
        stock:1,
        imgurl:"",
        price:7894,
        detail:"lorem"
    },
    {
        id:2,
        title: "Daredevil",
        category:"Comics",
        stock:1,
        imgurl:"",
        price:7344,
        detail:"lorem"
    },
    {
        id:3,
        title: "Batman",
        category:"Comics",
        stock:1,
        imgurl:"",
        price:9794,
        detail:"lorem"
    }
     
]

function getItems() {
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
            resolve({databaseItems})
        }, 5000)
    })
}

export default getItems
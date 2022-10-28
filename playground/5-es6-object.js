//object property shorthand

const name='Andrew'
const userage=27

const user={
    name,
    age:userage,
    location:'Philadelphia'
}

console.log(user) 

//onject destructuring

const product={
    label:'red notebook',
    price:30,
    stock:301,
    salesprice:undefined
}

// const label=product.label

// const {label:productlabel,stock}=product
// console.log(productlabel)
// console.log(stock)

const transaction=(type,{label,stock,price})=>{
    console.log(type,price,label,stock)
}
transaction('product 1',product)

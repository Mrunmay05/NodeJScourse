const fs=require('fs')
// const book={
//     title:'wings of fire',
//     author:'APJ Abdul Kalam'
// }

// const book_json=JSON.stringify(book)//rtkes array or any value and returns json string representation
// fs.writeFileSync('1-json.json',book_json)

// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJSON=dataBuffer.toString()
// console.log(dataBuffer)// will return buffer value
// console.log(dataBuffer.toString())//returns value in string format
// const data=JSON.parse(dataJSON)
// console.log(data.title)

//challenege

const chdata=fs.readFileSync('1-json.json')
const dataJSON=chdata.toString()
const user=JSON.parse(dataJSON)

user.name='Mrunmay'
user.age=20

const changed_json=JSON.stringify(user)
fs.writeFileSync('1-json.json',changed_json)
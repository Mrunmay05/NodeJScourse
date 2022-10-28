// const square=function(x){
//     return x*x
// }

// console.log(square(3))

// const square = (x)=>{
//      return x*x
// }

// console.log(square(9 ))

const event={
    name:'Birthday event',
    guestlist:['Andrew','Jen',"Mike"],
    printguestlist(){
        console.log('guess list for '+this.name),
        this.guestlist.forEach((guest)=>{//arrow function used here bcoz arrow functions don't bind their own this value
            console.log(guest + ' is attending '+ this.name)
        })
    }
}

event.printguestlist()

// function fatherFn() {
//   let a = 1;
//   return function child() {
//     a++;
//     console.log(a);
//   };
// }

// const newWorker = new Worker()


// const child1 = fatherFn()
// child1()
// child1()
// child1()

// let obj = {
//     name: 'ali',
//     address: {
//         city:'toshkent',
//         cvartel: {
//             street: [1, {
//                 home: '49-uy'
//             }]
//         }
//     }
// }


// const {address: {cvartel: {street: [,{home: myHome}]}}} = obj





// console.log(myHome);

'use strict'
function fn() {
    
    console.log(this);
}

fn()
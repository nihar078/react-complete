// const obj = {
//   a: 1,
//   b: 2,
// };

// // const obj2 = obj

// // obj.a = 10
// // obj2.a = 10

// // console.log(obj2)
// // console.log(obj)

// const obj2 = {...obj}
// obj.a = 25
// console.log(obj2)

const obj = {
  items: ["ball"],
  b: 2,
  addItems: function addItems(newItem) {
    // addItems : is refe
    this.items.push(newItem);
  },
};

const obj2 = { ...obj };
obj.a = 25;
obj2.addItems("goat");
console.log(obj2);
console.log(obj);


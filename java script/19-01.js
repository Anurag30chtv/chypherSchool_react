// Rest and Spread Operator are applicable in Arrays and Objects in JS
// For Object
let object = {
    name: "John",
    age: 24,
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
    },
  };
  
  let object2 = JSON.parse(JSON.stringify(object));
  object2.address.city = "Newark";
  console.log(object2);
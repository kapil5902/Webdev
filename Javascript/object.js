let persons = ["Ram", "Hari", "Shyam", "Sita"]
console.log("Names:", persons);
console.log("1st index",persons[1]);
persons[1] = "Gita"
console.log("after", persons);

let projector1 = {
  color: "white",
  price: 50000,
  brand: "LG"
}

let projector2 = {
  color: "Black",
  price: 40000,
  brand: "Benq"
}


console.log("projector1", projector1);
console.log("projector2 ", projector2);

let color1 = {
  name: "Red",
  hex: "ff000",
  rgb: "255,0,0"
}
let color2 = {
  name: "Black",
  hex: "ff111",
  rgb: "0,0,0"
}
let color3 = {
  name: "white",
  hex: "11111",
  rgb: "11,10,0"
}




// let colors = ["red", "black", "white"]
// console.log("colors  -prev", colors);

let colors = [color1, color2, color3]
console.log("colors", colors);
color3.name = "Cyan"





let brand1 = {
  name: "Apple",
  website: "apple.com",
  CEO: "Steve Jobs"
}
let brand2 = {
  name: "Samsung",
  website: "Samsung.com",
  CEO: "Karl Urban"
}
let brand3 = {
  name: "Sony",
  website: "sony.com",
  CEO: "Mickey Might"
}

let brands = [brand1, brand2, brand3]
console.log("Brands:", brands);
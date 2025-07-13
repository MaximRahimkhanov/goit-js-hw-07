const numberElems = document.querySelectorAll("#categories .item")
console.log(`Number of categories: ${numberElems.length}`);

for(const category of numberElems) {
 const title = category.querySelector("h2").textContent;
 const totalElements = category.querySelectorAll("ul li").length

  console.log(`Category: ${title}`);
  console.log(`Elements: ${totalElements}`);
  
}

// const categories = document.querySelectorAll("#categories .item");

// console.log("Number of categories:", categories.length);



// categories.forEach(item => {
//   const title = item.querySelector("h2").textContent;
//   const elementsCount = item.querySelectorAll("ul li").length;

//   console.log(`Category: ${title}`);
//   console.log(`Elements: ${elementsCount}`);
// });
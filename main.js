var mockData = ["banana", "ovos", "carne", "pao", "de", "lo"];
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
button2.addEventListener("click", () => {
  addToList(prepositionsLogic(mockData)); /* getData() */
});
button3.addEventListener("click", () => {
  prepositionsLogic(mockData);
});

function firstCapital(str) {
  const arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  console.log(str2);
}

function prepositionsLogic(listOfData) {
    console.log(listOfData);
    console.log("prepositionsLogic");
    listOfData.map((e, i) => {
        if (e == "de" || e == "da") {
            let newItemOfList = listOfData[(i - 1)] +" "+ listOfData[i] +" "+ listOfData[(i + 1)];
            console.log(newItemOfList);
            listOfData.splice(i - 1, 3);
            listOfData.push(newItemOfList);
            
        }
    });
    console.log(listOfData);
    return listOfData
}

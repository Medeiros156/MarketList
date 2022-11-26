import { insertDataFromList, deleteAllData } from "./Database.js";
import { recognition } from "./script.js";
import { addToList } from "./createList.js";



var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var mockData = ['banana','ovo','maça']
button.addEventListener('click', ()=>{addToList(mockData)})

/* button.addEventListener("click", insertDataFromList); */
button2.addEventListener("click", deleteAllData);



export function firstCapital(str) {
        
    const arr = str.split(" ");
    
    //loop through each element of the array and capitalize the first letter.
    
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    console.log(str2);
}


var mockData = ['banana','ovo','maça']
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
button2.addEventListener("click", ()=>{/* addToList(mockData) */getData()});
button3.addEventListener("click", ()=>{setData()});



function firstCapital(str) {
        
    const arr = str.split(" ");
             
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    }
    const str2 = arr.join(" ");
    console.log(str2);
}


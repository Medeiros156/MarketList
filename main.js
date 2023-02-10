var mockData = ["banana", "ovos", "carne", "pao", "de", "lo"];
var button = document.getElementById("button");

var listSpeech = [];
var ls = localStorage;
var box = document.querySelector(".listBox");

/* -------------------------------------------------------------- */

async function update() {
  console.log('update');
  // ls.clear("ListItems")
  let getd = await getData();
  refreshList(getd)
  
}

/* -------------------------------------------------------------- */

function fakeData() {
  addToList(prepositionsLogic(mockData))
}


/* -------------------------------------------------------------- */

async function refreshList(dbData){

  dbData.forEach(async function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);

    

    // var url = await getDataImg(str);
    let url = 'https://conteudo.imguol.com.br/c/entretenimento/52/2020/07/06/ovo-1594070430431_v2_1x1.jpg'
    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item 
      style=background-color:#fafafa> 
      <img src= '${url}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });
}

async function addToList(speech) {
  speech.forEach(async function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);

   

    var url = await getDataImg(str);

    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item 
      style=background-color:#fafafa> 
      <img src= '${url}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });

  listSpeech = [...listSpeech, ...speech];
  ls.setItem("ListItems", JSON.stringify(listSpeech));
  setData(listSpeech);
  console.log(listSpeech);
}

function deleteSelf(el) {
  console.log(el);

  var listLs = ls.getItem("ListItems");

  var item = el.childNodes[3].innerHTML.toLowerCase();
  var parseList = JSON.parse(listLs);

  removeItem(item);

  console.log(item);
  console.log(parseList);
  parseList.forEach(function (e, i) {
    console.log(e);
    if (e == item) {
      console.log(item);
      parseList.splice(i, 1);
    }
  });
  ls.removeItem("ListItems");
  ls.setItem("ListItems", JSON.stringify(parseList));

  console.log(parseList);
  listSpeech = parseList;
  el.remove();
}

/* -------------------------------------------------------------- */
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
    if (e == "de" || e == "da"|| e == "sem") {
      let newItemOfList =
        listOfData[i - 1] + " " + listOfData[i] + " " + listOfData[i + 1];
      console.log(newItemOfList);
      listOfData.splice(i - 1, 3);
      listOfData.push(newItemOfList);
    }
  });
  console.log(listOfData);
  return listOfData;
}
/* function createImage(keyWord) {
  ls.getItem();
  let listaUrl = [];
  for (let n = 0; n < data.length; n++) {
    let url = data[n].urls.raw;
    listaUrl.push(url);
  }

  ls.setItem(`imagesUrl-${keyWord}`, JSON.stringify(listaUrl));
} */

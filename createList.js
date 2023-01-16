var listSpeech = [];
var ls = localStorage;
var box = document.querySelector(".listBox");

function addToList(speech) {
  speech.forEach(async function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);
    let random = Math.round(Math.random() * 5);
    console.log(random);
    /* insertData(e, i) */
    
    if (!ls.getItem(`ListUrl-${str}`)) {
      await getDataImg(str);
    }
    
    var url = (ls.getItem(`ListUrl-${str}`)).split(',')
    /* console.log(Array.of(listUrls))
    let url = listUrls[random] */
    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item 
      style=background-color:#fafafa> 
      <img src= '${url[0]}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });

  listSpeech = [...listSpeech, ...speech];
  ls.setItem("ListItems", JSON.stringify(listSpeech));

  console.log(listSpeech);
}

function deleteSelf(el) {
  console.log(el);

  var listLs = ls.getItem("ListItems");
  
  var item = (el.childNodes[3].innerHTML).toLowerCase();
  var parseList = JSON.parse(listLs);
  console.log(parseList);
  console.log(item);
  console.log(parseList);
  parseList.forEach(function (e, i) {
    console.log(e);
    if (e == item) {
      console.log(item);
      parseList.splice(i, 1);
    }
  });
  ls.removeItem("ListItems")
  ls.setItem("ListItems", JSON.stringify(parseList));

  console.log(parseList);
  listSpeech = parseList
  el.remove();
}

function createImage(keyWord) {
  ls.getItem()
  let listaUrl = [];
  for (let n = 0; n < data.length; n++) {
    let url = data[n].urls.raw;
    listaUrl.push(url);
  }

  ls.setItem(`imagesUrl-${keyWord}`, JSON.stringify(listaUrl));
}

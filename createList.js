var listSpeech = [];
var ls = localStorage;
var box = document.querySelector(".listBox");

function addToList(speech) {
  speech.forEach(function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);
    let random = Math.round(Math.random() * 10);
    console.log(random);

    if (!ls.getItem(`imagesUrl-${str}`)) {
      catchImage(str);
    }
    var url = JSON.parse(ls.getItem(`imagesUrl-${str}`))[random];

    box.innerHTML += `
    <div 
      onclick="deleteSelf(this)" 
      class=item 
      style=background-color:#fafafa> 
      <img src= '${url}' width='150px' height='150px'/>
      <h3 id="listItem" class="listItemTitle">${str}`;
  });

  listSpeech = [...listSpeech, ...speech];
  ls.setItem("List", JSON.stringify(listSpeech));
  /* insertDataFromList(); */

  console.log(listSpeech);
}

function deleteSelf(el) {
  console.log(el);

  var listLs = ls.getItem("List");
  var item = el.childNodes[1].innerHTML;
  var parseList = JSON.parse(listLs);
  console.log(parseList);
  parseList.forEach(function (e, i) {
    if (e == item) {
      parseList.splice(i, 1);
      insertDataFromList();
    }
  });

  ls.setItem("List", JSON.stringify(parseList));

  console.log(parseList);

  var element = el;
  element.remove();
}

function createImage(data, keyWord) {
  let listaUrl = [];
  console.log(data);
  for (let n = 0; n < data.length; n++) {
    let url = data[n].urls.raw;
    listaUrl.push(url);
  }

  ls.setItem(`imagesUrl-${keyWord}`, JSON.stringify(listaUrl));
}

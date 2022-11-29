

/* import * as jquery3 from "./node_modules/jquery/dist/jquery.js"; */
/* import * as jquery3 from "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"; */
// export for others scripts to use
/* window.$ = $;
window.jQuery = jQuery; */

var listSpeech = [];
var ls = localStorage;
var box = document.querySelector(".listBox");

function addToList(speech) {
  speech.forEach(function (e, i) {
    let str = e.charAt(0).toUpperCase() + e.slice(1);
    let random = Math.round(Math.random() * 10 - 1);
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
  insertDataFromList();

  console.log(listSpeech);
}

function deleteSelf(el) {
  console.log("e");
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

async function catchImage(keyWord) {
  console.log(keyWord);
  const settingsImage = {
    async: true,
    crossDomain: true,
    url: `https://api.unsplash.com/search/photos?page=1&query=${
      keyWord + " eat"
    }`,
    method: "GET",
    headers: {
      Authorization: "Client-ID lt01JJdVhTVWIrFUryd22BhAf7x99UZtMfWpPFt_joU",
    },
  };

  await $.ajax(settingsImage).done(function (response) {
    console.log(response);

    const data = response.results;
    console.log(data);
    createImage(data, keyWord);

    return data;
  });
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

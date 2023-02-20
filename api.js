const Auth = process.env.AUTH
async function getData() {
  let settingsData = {
    async: true,
    crossDomain: true,
    url: `https://marketlistapi.onrender.com/market/list`,
    // url: `http://localhost:5000/market/list`,
    method: "GET",
    headers: {"authorization": Auth},
  };
  let data = [];

  await $.ajax(settingsData).done(function (response) {
    console.log(response);
    response.forEach((element) => {
      data.push(element.items);
    });
    console.log(data);
    /* addToList(data); */
  });
    
    ls.setItem("ListItems", JSON.stringify(data));
  return data;
}

function removeItem(item) {
  console.log("REMOVE: " + item);
  let settingsData = {
    async: true,
    crossDomain: true,
    url: `https://marketlistapi.onrender.com/market/del?q=${item}`,
    // url: `http://localhost:5000/market/del?q=${item}`,
    method: "DELETE",
    headers: {"authorization": Auth},
  };

  $.ajax(settingsData).done(function (response) {
    console.log(response);
  });
}

function setData(data) {
  /* let data = JSON.parse(localStorage.getItem("ListItems")); */
  console.log("setdata");

  let listJson = data.map((e, i) => ({ items: e }));
  console.log(listJson);
  listJson.forEach((element) => {
    let setting = {
      /* async: true, */
      /* crossDomain: true, */
      url: `https://marketlistapi.onrender.com/market/list`,
      // url: `http://localhost:5000/market/list`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": Auth
      },
      data: JSON.stringify(element),
    };

    $.ajax(setting)
      .done(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

async function getDataImg(key) {
  /* url: /* `https://back-fqrl.onrender.com/ai/openai?q=${key}`  `http://localhost:5000/img/imgsea?q=${key}`, */
  try {
    let settingsData = {
      async: true,
      crossDomain: true,
      url: `https://back-fqrl.onrender.com/ai/openai?q=${key}`,
      // url: `http://localhost:5000/ai/openai?q=${key}`,
      method: "POST",
      headers: {},
    };

    let url = await $.ajax(settingsData)
      .catch((error) => {
        console.log(error);
      })
      .done(function (response) {
        console.log(response);
        /* return response */
        const urls = response.data;
        console.log(urls);
        return urls;
      });
    console.log('list',url.data);
    return url.data;
  } catch (error) {
    console.log(error);
  }
}

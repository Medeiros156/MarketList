const apiKey = "rnd_M40Gorhe1RDeBKOz4xYwm2AwxHiDs";
/*  */
async function getData() {
  let settingsData = {
    async: true,
    crossDomain: true,
    url: `https://back-fqrl.onrender.com/market/list`,
    method: "GET",
    headers: {},
  };

  await $.ajax(settingsData).done(function (response) {
    console.log(response);
  });
}
function setData() {
  let data = JSON.parse(localStorage.getItem("ListItems"));
  console.log(data);

  let listJson = data.map((e, i) => ({ id: i, items: e }));
  console.log(listJson);
  listJson.forEach((element) => {
    let setting = {
      /* async: true, */
      /* crossDomain: true, */
      url: `https://back-fqrl.onrender.com/market/list`,
      method: "POST",
      headers: {
        "Content-Type": "application/json" ,
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

async function catchDataLocal() {
  const settingsImage = {
    async: true,
    crossDomain: true,
    url: `http://localhost:5000/market/list`,
    method: "GET",
    headers: {
      Accept: "application/json",
      /* 'Authorization': `Bearer {${apiKey}}` */
    },
  };

  await $.ajax(settingsImage).done(function (response) {
    console.log(response);
  });
}
async function getDataImg(key) {
  /* url: /* `https://back-fqrl.onrender.com/ai/openai?q=${key}`  `http://localhost:5000/img/imgsea?q=${key}`, */
  let settingsData = {
    async: true,
    crossDomain: true,
    url: `https://back-fqrl.onrender.com/ai/openai?q=${key}`,
    method: "POST",
    headers: {},
  };

  let listUrl = await $.ajax(settingsData)
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

  console.log(listUrl);
  ls.setItem(`ListUrl-${key}`, listUrl.data);
  return listUrl;
}

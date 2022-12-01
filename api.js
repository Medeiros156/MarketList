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
  let setting = {
    /* async: true, */
    /* crossDomain: true, */
    url: `https://back-fqrl.onrender.com/market/list`,
    method: "POST",
    headers: {
      'Content-Type': 'application/json' /*'Content-Lenght': '65' */
    },
    data: JSON.stringify({
      id: "12",
      items: "TESTE12",
    }),
  };

  $.ajax(setting)
    .done(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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

const Auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJtYXJrZXQxcTJ3M2U0ciIsImlhdCI6MTY3NjkxOTk5N30.vPiJROZA9yxQqgLOA7YQ2MKkCvDlV5ZU4nqPtQIM-P8";
const apiUrl = "https://market-list-api.vercel.app/market";
// const apiUrl = "http://localhost:5000/market";


async function getData() {
  let settingsData = {
    async: true,
    crossDomain: true,
    url: `${apiUrl}/list`,
    method: "GET",
    headers: { authorization: Auth },
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
    url: `${apiUrl}/del?q=${item}`,
    method: "DELETE",
    headers: { authorization: Auth },
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
      url: `${apiUrl}/list`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: Auth,
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
  let type = localStorage.getItem("type") || 1;
  try {
    let settingsData = {
      async: true,
      crossDomain: true,
      url: `${apiUrl}/image?q=${key}&type=${type}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: Auth,
      },
    };

    let url = await $.ajax(settingsData).catch((error) => {
      console.log(error);
    });
    
    if (type == 1) {
      let random = Math.floor(Math.random() * 10);
      return url[random];
    } else if (type == 2) {
      return url;
    }
  } catch (error) {
    console.log(error);
  }
}

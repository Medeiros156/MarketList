var listSpeech = []

function addToList(speech) {
    console.log(speech[0]);
    var url = catchImage(speech[0])

    speech.forEach(e => {
        listBox.innerHTML += `<div style=background-image:url(${url})> ${e} </div>`
    });

    listSpeech = [...listSpeech, ...speech]
    
    console.log(listSpeech);
}

function catchImage(keyWord) {
    const settingsImage = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.unsplash.com/search/photos?page=10&query=${keyWord}`,
        "method": "GET",
        "headers": {
            "Authorization": "Client-ID lt01JJdVhTVWIrFUryd22BhAf7x99UZtMfWpPFt_joU"
        }
    }


    $.ajax(settingsImage).done(function (response) {
        console.log(response);

        const data = response.results;
        console.log(data);
        createImage(data, keyWord)
        

        return data
    });
}

function createImage(data, keyWord) {
    const listaUrl = []
    console.log(data);
    for (let n = 0; n < data.length; n++) {
        let url = data[n].urls.raw
        listaUrl.push(url);
        
    }
    

    localStorage.setItem(`imagesUrl-${keyWord}`, JSON.stringify(listaUrl))
     
}


const imageSearch = require('image-search-google');

const client = new imageSearch('a766eea30a4554967', 'AIzaSyDNRv5pAERhAFHqrKGuNtuD6uSWvvNcRJQ');
const options = {page:1};
function sea(){


    client.search('banana', options)
        .then(images => {
            console.log(images);
            /*
            [{
                'url': item.link,
                'thumbnail':item.image.thumbnailLink,
                'snippet':item.title,
                'context': item.image.contextLink
            }]
             */
        })
        .catch(error => console.log(error));
}

sea()
// search for certain size
console.log(client.search('Mahatma Gandhi', {size: 'large'})
);
 
// search for certain type
client.search('Indira Gandhi', {type: 'face'});

/* ______________________________________________________________________________________ */

{/* <script src="https://apis.google.com/js/api.js"></script> */}

  /**
   * Sample JavaScript code for search.cse.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/code-samples#javascript
   */

  function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.search.cse.list({
      /* "c2coff": "s",
      "cr": "s",
      "cx": "s",
      "dateRestrict": "s",
      "exactTerms": "s",
      "excludeTerms": "s",
      "fileType": "s",
      "filter": "s",
      "gl": "s",
      "googlehost": "s",
      "highRange": "s",
      "hl": "s",
      "hq": "s",
      "imgColorType": "color",
      "imgDominantColor": "blue",
      "imgSize": "SMALL",
      "imgType": "lineart",
      "linkSite": "s",
      "lowRange": "s",
      "lr": "s",
      "num": 1,
      "orTerms": "s",
      "q": "s",
      "relatedSite": "s",
      "rights": "s",
      "safe": "active",
      "searchType": "image",
      "siteSearch": "s",
      "siteSearchFilter": "e",
      "sort": "s",
      "start": 1 */
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  /* gapi.load("client"); */

/* loadClient()
execute() */
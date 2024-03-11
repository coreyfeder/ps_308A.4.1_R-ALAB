const catApiKey =
    "live_bSaZ5P0Jc5kNjAjmInbRtPCynvXjPOsAVEJmgionxPwcJe168FKyRQpDpInaqFJG";
const catHeaders = new Headers({
    "Content-Type": "application/json",
    "x-api-key": `${catApiKey}`,
});
const catRequestOptions = {
    method: "GET",
    headers: catHeaders,
    redirect: "follow",
};
const catEndpoints = {
    images: {
        random1: "v1/images/search",
        randomN: "v1/images/search?limit=",
    },
    breeds: {
        list: "v1/breeds",
        search: "v1/images/search?breed_ids=",
    },
};
const catHost = "https://api.thecatapi.com/";

/* 
fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));        
 */

const fetchBreeds = async () => {
    let response = await fetch(
        `${catHost}${catEndpoints.breeds.list}`,
        catRequestOptions,
    ).then((response) => response.json())
    return response;
        // .catch((error) => console.error("error", error));
    // let response = {};
    // response_json.forEach((breed) => {
        // response[breed.id] = breed.name;
    // });
    // return response;
};

let f0 = fetchBreeds()

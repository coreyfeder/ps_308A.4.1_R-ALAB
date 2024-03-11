// The breed list destinations
const breedElDiv = document.getElementById("breedDiv");
// console.debug(`breedElDiv: ${breedElDiv}`);  // HTMLDivElement
const breedElText = document.getElementById("breedText");
// console.debug(`breedElText: ${breedElText}`);  // HTMLTextAreaElement
const breedElList = document.getElementById("breedList");
// console.debug(`breedElList: ${breedElList}`);  // HTMLUListElement
const breedElSelect = document.getElementById("breedSelect");
// console.debug(`breedElSelect: ${breedElSelect}`);  // HTMLSelectElement

const catApiKey =
    "live_bSaZ5P0Jc5kNjAjmInbRtPCynvXjPOsAVEJmgionxPwcJe168FKyRQpDpInaqFJG";
const catHost = "https://api.thecatapi.com/";
const catHeaders = new Headers({
    "Content-Type": "application/json",
    "x-api-key": `${catApiKey}`,
});
const catRequestOptions = {
    method: "GET",
    headers: catHeaders,
    redirect: "follow",
    // credentials: "include",  // NO!!
};

const catCall = async (
    catEndpoint,
) => {
    // let response = fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0", catRequestOptions)
    let response = fetch(`${catHost}${catEndpoint}`, catRequestOptions)
    .then(response => response.json())
    .then(result => console.debug(result))
    .catch(error => console.error('error', error));
    return response
};

/* 
const catCall = (
    catEndpoint,
    // size="med",
    // page=0,
    // limit=1,
) => {
    // let result, error
    let result = fetch(
        catHost + catEndpoint,
        // + "?"
        // + [
        // + `ssize=${size}`,
        // + `mime_types=jpg`,
        // + `format=json`,
        // + `has_breeds=true`,
        // + `order=RANDOM`,
        // + `page=${page}`,
        // + `limit=${limit}`,
        // ].join("&")
        catRequestOptions,
    )
        // debug(result)
        .then((response) => console.log(response))
        .catch((error) => console.log("error", error));
    return result;
};
 */

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

let breeds = catCall(catEndpoints.breeds.list).then();
console.debug(`breeds: ${breeds}`);
console.debug(breeds);

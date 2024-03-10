// The breed list destinations
const breedDiv = document.getElementById("breedDiv");
// console.debug(`breedDiv: ${breedDiv}`);  // HTMLDivElement
const breedText = document.getElementById("breedText");
// console.debug(`breedText: ${breedText}`);  // HTMLTextAreaElement
const breedList = document.getElementById("breedList");
// console.debug(`breedList: ${breedList}`);  // HTMLUListElement
const breedSelect = document.getElementById("breedSelect");
// console.debug(`breedSelect: ${breedSelect}`);  // HTMLSelectElement

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
    // credentials: "include",
};

const flatCatCall = async (
    catEndpoint,
) => {
    // let result, error
    let response = await fetch(
        catHost + catEndpoint,
        catRequestOptions,
        );
    console.debug(`flatCatCall > response: ${response}`);  // Promise
    let result = response.json();
    console.debug(`flatCatCall > result: ${result}`);  // Promise
    // .catch((error) => console.log("error", error));  // for chaining
    return result;
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

let breeds = flatCatCall(catEndpoints.breeds.list).then((resp) => console.log(resp));
console.debug(`breeds: ${breeds}`);
console.debug(breeds);

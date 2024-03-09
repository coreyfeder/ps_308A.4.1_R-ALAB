const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_bSaZ5P0Jc5kNjAjmInbRtPCynvXjPOsAVEJmgionxPwcJe168FKyRQpDpInaqFJG"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

/* 
$ node src/cat-one.js | jq
[
  {
    "breeds": [
      {
        "weight": {
          "imperial": "5 - 10",
          "metric": "2 - 5"
        },
        "id": "tang",
        "name": "Turkish Angora",
        "cfa_url": "http://cfa.org/Breeds/BreedsSthruT/TurkishAngora.aspx",
        "vetstreet_url": "http://www.vetstreet.com/cats/turkish-angora",
        "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/turkish-angora",
        "temperament": "Affectionate, Agile, Clever, Gentle, Intelligent, Playful, Social",
        "origin": "Turkey",
        "country_codes": "TR",
        "country_code": "TR",
        "description": "This is a smart and intelligent cat which bonds well with humans. With its affectionate and playful personality the Angora is a top choice for families. The Angora gets along great with other pets in the home, but it will make clear who is in charge, and who the house belongs to",
        "life_span": "15 - 18",
        "indoor": 0,
        "alt_names": "Ankara",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 5,
        "grooming": 2,
        "health_issues": 2,
        "intelligence": 5,
        "shedding_level": 2,
        "social_needs": 5,
        "stranger_friendly": 5,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 1,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Turkish_Angora",
        "hypoallergenic": 0,
        "reference_image_id": "7CGV6WVXq"
      }
    ],
    "id": "Yx3nQTUHu",
    "url": "https://cdn2.thecatapi.com/images/Yx3nQTUHu.jpg",
    "width": 1400,
    "height": 1050
  }
]
 */
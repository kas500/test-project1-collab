//Hooks
var section1Div = document.querySelector(".section-1");
var section2Div = document.querySelector(".section-2");
var api_key = "api_key=krIy1i5fL7pkviggfyuAli8fyRvpj4yejHKSRxSK"
var searchField = document.querySelector("#searchActivitiesField");
var stateField = document.querySelector("#stateField");
var dataListEl = document.querySelector("#activitiesList");
var dataListEl1 = document.querySelector("#statesList");
var displayCardEl = document.getElementsByClassName("section-1")
var parkNameDisplay = document.getElementById("card1parkTitle")
var parkImageDisplay = document.getElementById("parkImage")
var parkDescription = document.querySelector("#descriptionPark");
var allStatesDropdown = document.querySelector("#dropdown1");
var parkURL = document.getElementById("URlinfo");
var mainparkDescription = document.getElementById("descriptionPark");
var randomBookLink = document.querySelector("#randomBook");

var divCO = document.querySelector("#CO");
var divNO = document.querySelector("#NO");
var divNO2 = document.querySelector("#NO2");
var divO3 = document.querySelector("#O3");
var divSO2 = document.querySelector("#SO2");
var divPM2_5 = document.querySelector("#PM2_5");
var divPM10 = document.querySelector("#PM10");
var divNH3 = document.querySelector("#NH3");
var spanAQI = document.querySelector("#aqi");



//var arrays
var dataArr = [];
var parksArr = [];
var airQualityArr = [" (Good)"," (Fair)"," (Moderate)"," (Poor)", " (Very poor)"];

//Anton - var hashMap for parks
var parksHashMap = {};

// Anton - dropdownMenuDefault title
const dropdown1MenuDefaultTitle = selectStateMenu.textContent;
const dropdown2MenuDefaultTitle = selectParksMenu.textContent;

//Anton - all states array
var allStates = [
    {
        stateName: "Alabama",
        abbreviation: "AL"
    },
    {
        stateName: "Alaska",
        abbreviation: "AK"
    },
    {
        stateName: "American Samoa",
        abbreviation: "AS"
    },
    {
        stateName: "Arizona",
        abbreviation: "AZ"
    },
    {
        stateName: "Arkansas",
        abbreviation: "AR"
    },
    {
        stateName: "California",
        abbreviation: "CA"
    },
    {
        stateName: "Colorado",
        abbreviation: "CO"
    },
    {
        stateName: "Connecticut",
        abbreviation: "CT"
    },
    {
        stateName: "Delaware",
        abbreviation: "DE"
    },
    {
        stateName: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        stateName: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        stateName: "Florida",
        abbreviation: "FL"
    },
    {
        stateName: "Georgia",
        abbreviation: "GA"
    },
    {
        stateName: "Guam",
        abbreviation: "GU"
    },
    {
        stateName: "Hawaii",
        abbreviation: "HI"
    },
    {
        stateName: "Idaho",
        abbreviation: "ID"
    },
    {
        stateName: "Illinois",
        abbreviation: "IL"
    },
    {
        stateName: "Indiana",
        abbreviation: "IN"
    },
    {
        stateName: "Iowa",
        abbreviation: "IA"
    },
    {
        stateName: "Kansas",
        abbreviation: "KS"
    },
    {
        stateName: "Kentucky",
        abbreviation: "KY"
    },
    {
        stateName: "Louisiana",
        abbreviation: "LA"
    },
    {
        stateName: "Maine",
        abbreviation: "ME"
    },
    {
        stateName: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        stateName: "Maryland",
        abbreviation: "MD"
    },
    {
        stateName: "Massachusetts",
        abbreviation: "MA"
    },
    {
        stateName: "Michigan",
        abbreviation: "MI"
    },
    {
        stateName: "Minnesota",
        abbreviation: "MN"
    },
    {
        stateName: "Mississippi",
        abbreviation: "MS"
    },
    {
        stateName: "Missouri",
        abbreviation: "MO"
    },
    {
        stateName: "Montana",
        abbreviation: "MT"
    },
    {
        stateName: "Nebraska",
        abbreviation: "NE"
    },
    {
        stateName: "Nevada",
        abbreviation: "NV"
    },
    {
        stateName: "New Hampshire",
        abbreviation: "NH"
    },
    {
        stateName: "New Jersey",
        abbreviation: "NJ"
    },
    {
        stateName: "New Mexico",
        abbreviation: "NM"
    },
    {
        stateName: "New York",
        abbreviation: "NY"
    },
    {
        stateName: "North Carolina",
        abbreviation: "NC"
    },
    {
        stateName: "North Dakota",
        abbreviation: "ND"
    },
    {
        stateName: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        stateName: "Ohio",
        abbreviation: "OH"
    },
    {
        stateName: "Oklahoma",
        abbreviation: "OK"
    },
    {
        stateName: "Oregon",
        abbreviation: "OR"
    },
    {
        stateName: "Palau",
        abbreviation: "PW"
    },
    {
        stateName: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        stateName: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        stateName: "Rhode Island",
        abbreviation: "RI"
    },
    {
        stateName: "South Carolina",
        abbreviation: "SC"
    },
    {
        stateName: "South Dakota",
        abbreviation: "SD"
    },
    {
        stateName: "Tennessee",
        abbreviation: "TN"
    },
    {
        stateName: "Texas",
        abbreviation: "TX"
    },
    {
        stateName: "Utah",
        abbreviation: "UT"
    },
    {
        stateName: "Vermont",
        abbreviation: "VT"
    },
    {
        stateName: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        stateName: "Virginia",
        abbreviation: "VA"
    },
    {
        stateName: "Washington",
        abbreviation: "WA"
    },
    {
        stateName: "West Virginia",
        abbreviation: "WV"
    },
    {
        stateName: "Wisconsin",
        abbreviation: "WI"
    },
    {
        stateName: "Wyoming",
        abbreviation: "WY"
    }
];

//init ()
function init(){
    if (localStorage.getItem("parkName") 
    && localStorage.getItem("parkImage") 
    && localStorage.getItem("parkDescription")
    && localStorage.getItem("parkUrl")
    && localStorage.getItem("parkCoordinates")) {
        section1Div.removeAttribute("style");
        section2Div.removeAttribute("style");
        //park name display
        parkNameDisplay.textContent = localStorage.getItem("parkName");
        //park image display
        parkImageDisplay.setAttribute("src", localStorage.getItem("parkImage"));
        //park description display
        parkDescription.textContent = localStorage.getItem("parkDescription");
        //park Url display
        parkURL.setAttribute("href", localStorage.getItem("parkUrl"));
        //park coordinates
        coordinates = localStorage.getItem("parkCoordinates");
        getRandomBook(openlibraryBaseAPIUrl+localStorage.getItem("parkName"));
        getAirQuality(coordinates);
    }
    }

//Anton - set local storage
localStorage.setItem("allStates", JSON.stringify(allStates));

//base string variables for nps API
var npsBaseAPIUrl = "https://developer.nps.gov/api/v1"
var npsAPI_data = ["/activities?","/activities/parks?","/topics?","/parks?","/places?"]
var npsAPIkey = "api_key=jFUiLTrcoquzkLV62lQbZqbdBOHbJVMRKkHy3F2Y";


//Anton - base string variables for Open library API
var openlibraryBaseAPIUrl = "https://openlibrary.org/search.json?q=";

//Anton - base string vars for openWeather API
var openWeatherAirQualityAPI  = "https://api.openweathermap.org/data/2.5/air_pollution?";
var openWeatherAPIkey = "&appid=81400ac056ac2215ad92e79b9c4185bb";

 //Anton - getRandomBook(openlibraryBaseAPIUrl+parkName);
 async function getRandomBook(requestUrl) {
    const responce = await fetch(requestUrl);
    return await responce.json()
    .then(function (data) {
        var randomBook = data.docs[Math.floor(Math.random() * data.docs.length)];
        randomBookLink.setAttribute("href", "https://openlibrary.org"+ randomBook.key);
        randomBookLink.textContent = "Suggested book: "+randomBook.title;
        });
}

//Anton - fetch Air quality
async function getAirQuality(coordinates) {
    const responce = await fetch(openWeatherAirQualityAPI+coordinates+openWeatherAPIkey);
    return await responce.json()
    .then(function (data) {
       divCO.textContent = data.list[0].components.co;
       divNH3.textContent = data.list[0].components.nh3;
       divNO.textContent = data.list[0].components.no;
       divNO2.textContent = data.list[0].components.no2;
       divO3.textContent = data.list[0].components.o3;
       divPM10.textContent = data.list[0].components.pm10;
       divPM2_5.textContent = data.list[0].components.pm2_5;
       divSO2.textContent = data.list[0].components.so2;
       spanAQI.textContent = data.list[0].main.aqi+airQualityArr[data.list[0].main.aqi-1];
        });
}

//Anton - function generate data list with All states
function getAllStates() {
	allStates = JSON.parse(localStorage.getItem("allStates"));
    allStates.forEach(element => {
        var liEl = document.createElement("li");
        liEl.innerHTML=element.stateName;
        liEl.setAttribute("id",element.abbreviation);
        allStatesDropdown.appendChild(liEl);
    });

}
//Anton - call the function
getAllStates();

function getAPI(userChoice) {
    var NPAPI = "https://developer.nps.gov/api/v1/parks?&statecode="+userChoice+"&api_key=krIy1i5fL7pkviggfyuAli8fyRvpj4yejHKSRxSK"

   fetch(NPAPI)
        .then(async function (response) {

        return response.json();
        })

    .then(function (data) {
        var parkNum = data.data.length;
        for (let i =0; i < parkNum; i++){
            var parkNameList = data.data[i].name;
            var dropDown2 = document.getElementById("dropdown2");
            var newli = document.createElement("li");
            newli.textContent = parkNameList;
            dropDown2.append(newli);
            var h2El = document.createElement('h2');
            h2El.textContent=parkNameList;
            parksHashMap[parkNameList] = data.data[i];
        }

    })
}

//Anton - dropdown trigger
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});
// modal init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

//Anton - dropdown all states and parks by state event listener
document.addEventListener("click",function (ev) {
    
    if(ev.target.parentNode.id === "dropdown1"){
        stateUserChoice = ev.target.id;
        var currentStateName = ev.target.textContent;
        selectStateMenu.textContent = dropdown1MenuDefaultTitle;
        selectStateMenu.innerHTML = selectStateMenu.innerHTML +" "+currentStateName;
        getAPI(stateUserChoice);
    }
    if(ev.target.parentNode.id === "dropdown2"){
        parkName = ev.target.textContent;
        selectParksMenu.textContent = dropdown2MenuDefaultTitle;
        selectParksMenu.innerHTML = selectParksMenu.innerHTML+" "+parkName;
        var parkInfo = parksHashMap[parkName];
        section1Div.removeAttribute("style");
        section2Div.removeAttribute("style");
        //park name display
        parkNameDisplay.textContent = parkInfo.fullName;
        localStorage.setItem("parkName", parkInfo.fullName);
        //park image display
        parkImageDisplay.setAttribute("src", parkInfo.images[0].url);
        localStorage.setItem("parkImage", parkInfo.images[0].url);
        //park description display
        parkDescription.textContent = parkInfo.description;
        localStorage.setItem("parkDescription", parkInfo.description);
        //park Url display
        parkURL.setAttribute("href", parkInfo.url);
        localStorage.setItem("parkUrl", parkInfo.url);
        //park coordinates
        coordinates = "&lat=" + parkInfo.latitude + "&lon=" + parkInfo.longitude;
        localStorage.setItem("parkCoordinates", coordinates);
        getRandomBook(openlibraryBaseAPIUrl+parkName);
        getAirQuality(coordinates);
    }
})


init();
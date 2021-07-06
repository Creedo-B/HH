console.log("test");

// Open and close the About div
let clickFunAbout = () => {
    if (document.getElementById("about").style.display == "none") {
        document.getElementById("about").style.display = "initial";
        console.log("test1");
    } else {
        document.getElementById("about").style.display = "none";
        console.log("test2");
    }
}

// Open and close the Forecast div
let clickFunForecast = () => {
    if (document.getElementById("forecast").style.display == "none") {
        document.getElementById("forecast").style.display = "initial";
    } else {
        document.getElementById("forecast").style.display = "none";
    }
}

// Open and close the Events div
let clickFunEvents = () => {
    if (document.getElementById("events").style.display == "none") {
        document.getElementById("events").style.display = "initial";
    } else {
        document.getElementById("events").style.display = "none";
    }
}

// Open and close the Join div
let clickFunJoin = () => {
    if (document.getElementById("join").style.display == "none") {
        document.getElementById("join").style.display = "initial";
    } else {
        document.getElementById("join").style.display = "none";
    }
}

// Open and close the Contact div
let clickFunContact = () => {
    if (document.getElementById("contact").style.display == "none") {
        document.getElementById("contact").style.display = "initial";
    } else {
        document.getElementById("contact").style.display = "none";
    }
}

// Open and close the Links div
let clickFunLinks = () => {
    if (document.getElementById("links").style.display == "none") {
        document.getElementById("links").style.display = "initial";
    } else {
        document.getElementById("links").style.display = "none";
    }
}

// let clickFunAbout = () => {
//     document.getElementById("about").innerHTML = "<h2>What's it all About?</h2><p>We meet every Wednesday in the Sett Valley car park at 7.30 pm for the mountain bike club ride in the dark Peak District.</p><p>In addition to the MTB ride on a Wednesday night, Hayfield Hub also has regular on- and off-road rides over the weekend.</p>";
//     console.log("test2");
// }


// let clickFunAbout = () => {
//     document.getElementById("about").style.display = "initial";
//     console.log("test2");
// }


// let clickFunAbout = () => {
//     document.getElementById("about").innerHTML = "<h2>What's it all About?</h2><p>We meet every Wednesday in the Sett Valley car park at 7.30 pm for the mountain bike club ride in the dark Peak District.</p><p>In addition to the MTB ride on a Wednesday night, Hayfield Hub also has regular on- and off-road rides over the weekend.</p>";
//     console.log("test2");
// }

// let clickFunAbout = () => {
//     document.getElementById("about").style.display = "initial";
//     console.log("test2");
// }


// let autocomplete;
// function initAutocomplete() {
//     autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),
//     {
//         types: ['address'],
//         componentRestrictions: { 'country': ['uk']},
//         fields: ["address_components"]
//     });
//     autocomplete.addListener('place_changed', onPlaceChanged);
// }

// function onPlaceChanged() {

// }
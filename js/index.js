const APIKEY = '3f383c040c7b5ec93dcb29543f47c85d';

/*let defaultVille = Rouen;
let valide = false;
let ville = "Rouen"; */
let apicall = function(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((reponse) => 
        reponse.json().then((data) => 
        {console.log(data);
        document.querySelector('#city').innerHTML ='<i class="fa-solid fa-house"></i>' + data.name;
        document.querySelector('#temp').innerHTML ='<i class="fa-solid fa-temperature-high"></i>' + data.main.temp + "°";
        document.querySelector('#humidity').innerHTML ='<i class="fa-sharp fa-solid fa-droplet"></i>' + data.main.humidity + "%";
        document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>' + data.wind.speed + "Km/h";
    })).catch((err) => console.log('Erreur: ' + err));
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    console.log(ville);
    apicall(ville);
})
apicall("Rouen");
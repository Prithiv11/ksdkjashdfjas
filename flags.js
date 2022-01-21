const getcountries = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;

        for(country of countries){
            const block1 = document.createElement("selector");
        block1.innerHTML = `
        <div>
        <img class="img" src="${country.flags.png}" <br>
        <p>
        Country Name : ${country.name.common} <br>
        Flag : ${country.flag}<br>
        Region : ${country.region}<br>
        Capital : ${country.capital}<br>
        Population : ${country.population}<br>
        </p>
        </selector>`;
        document.body.append(block1);
        }
    };
  };
  getcountries();
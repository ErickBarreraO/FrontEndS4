const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((resp) => {
        if (resp.status != "200"){
            console.log(resp);
            pokeImage("./error.jpg")
            poketype("error")
            pokestat1("error")
            pokestat2("error")
            pokestat3("error")
            pokestat4("error")
            pokestat5("error")
            pokestat6("error")
        }
        else {
            return resp.json();
        }    
    }).then((data) => {
        console.log(data)
        let pokeImg = data.sprites.front_default;
        let poketyp = data.types[0].type.name;
        let pokstat1 = data.stats[0].base_stat;
        let pokstat2 = data.stats[1].base_stat;
        let pokstat3 = data.stats[2].base_stat;
        let pokstat4 = data.stats[3].base_stat;
        let pokstat5 = data.stats[4].base_stat;
        let pokstat6 = data.stats[5].base_stat;

        console.log(pokeImg)
        pokeImage(pokeImg);
        console.log(poketyp);
        poketype(poketyp)
        console.log(pokstat1)
        pokestat1(pokstat1)
        console.log(pokstat2)
        pokestat2(pokstat2)
        console.log(pokstat3)
        pokestat3(pokstat3)
        console.log(pokstat4)
        pokestat4(pokstat4)
        console.log(pokstat5)
        pokestat5(pokstat5)
        console.log(pokstat6)
        pokestat6(pokstat6)
    })
}


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}

const poketype = (url) => {
    const pokeTyp = document.getElementById("pokeType")
    pokeTyp.textContent = url;
}

const pokestat1 = (url) => {
    const pokstat1 = document.getElementById("pokestat1")
    pokstat1.textContent = url;
}

const pokestat2 = (url) => {
    const pokstat2 = document.getElementById("pokestat2")
    pokstat2.textContent = url;
}

const pokestat3 = (url) => {
    const pokstat3 = document.getElementById("pokestat3")
    pokstat3.textContent = url;
}

const pokestat4 = (url) => {
    const pokstat4 = document.getElementById("pokestat4")
    pokstat4.textContent = url;
}

const pokestat5 = (url) => {
    const pokstat5 = document.getElementById("pokestat5")
    pokstat5.textContent = url;
}

const pokestat6 = (url) => {
    const pokstat6 = document.getElementById("pokestat6")
    pokstat6.textContent = url;
}
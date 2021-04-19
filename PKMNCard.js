const mainContainer = document.querySelector(".main-container");

const fetchPKMNData = async (search) => {
    let response = await(await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${encodeURIComponent(search)}`)).json();
    console.log(response)

    
    const { data } = response
    const PKMN = data.filter(({ name }) => name.toLowerCase().includes(search))

    PKMN.forEach(pokemon => 
    {
        const PKMNcontainer = document.createElement("div")
        PKMNcontainer.className = "container"
        
        //price link
        let price = 0; // edit this !!!!!!!!!
        if (pokemon.tcgplayer) {
            price = pokemon.tcgplayer.url
        }
        

        // image
        const {images: {small: smallimage}} = pokemon
        const img = document.createElement("img")
        img.src = smallimage
        img.onclick = () => {window.open(`${price}`)} 
        const pokeDiv = document.createElement("div")
        
        PKMNcontainer.append(pokeDiv)
        pokeDiv.append(img)
        mainContainer.append(PKMNcontainer)
    });
}

const searchPKMN = () => {
    const newSearch = document.getElementById('search2').value;
    fetchPKMNData(newSearch);

}

const input = document.getElementById("search2");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        mainContainer.innerHTML = ""
        document.querySelector(".btn1").click();
    }
});

window.onload = function () {
    const url = document.location.href;
    let params = url.split("name=")[1];
    let result = params.split("%20").join(" ");
    console.log(result);
    fetchPKMNData(result);
};
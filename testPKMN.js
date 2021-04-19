function searchPKMN() {
    const getUrl = window.location;
    const gatherInfo = document.querySelector("#search").value;
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    const url =
        baseUrl + "PKMNWebsite/pkmnIndex.html" + "?name=" + encodeURIComponent(gatherInfo);
    document.location.href = url;
}

const input = document.getElementById("search");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        document.querySelector(".btn1").click();
    }
});
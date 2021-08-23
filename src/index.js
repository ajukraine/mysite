import SiteData from './site.json'
import Banner from './banner.png'

function renderDataJson(json) {
    let text = document.createElement("pre");
    text.innerText = JSON.stringify(json, null, 2);

    document.querySelector("main").appendChild(text);
}

document.querySelector("img#banner").src = Banner;
renderDataJson(SiteData);
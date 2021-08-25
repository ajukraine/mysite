import SiteData from './site.json'

function renderDataJson(json) {
    let section = document.createElement("section");
    let text = document.createElement("pre");
    text.innerText = JSON.stringify(json, null, 2);

    section.append(text);
    document.querySelector("main").prepend(section);
}

renderDataJson(SiteData);
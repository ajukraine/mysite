function renderDataJson(json) {
    let text = document.createElement("pre");
    text.innerText = JSON.stringify(json, null, 2);
    
    document.querySelector("main").appendChild(text);
}

fetch('./data/site.json')
    .then(response => response.json())
    .then(renderDataJson);

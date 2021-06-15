let inpVal = document.getElementById("inpVal");
inpVal.onchange = () => {
    let imgSrc = document.getElementById("sourceImage");
    let inputText = inpVal.value;
    console.log(inputText);
    inputText = inputText.replace(/ /g, "%20");
    console.log(inputText);
    let baseurl = "https://source.boringavatars.com/beam/240/"
    let trailurl = "?colors=f1ebeb,eee8e8,cacaca,24c0eb,5cceee"
    imgSrc.src = baseurl + inputText + trailurl
}
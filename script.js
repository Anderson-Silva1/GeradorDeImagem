const imagemConteinerEl = document.querySelector(".image-conteiner");
const btnEl = document.querySelector(".btn");
const qtdImage = document.getElementById("qtd");

console.log(parseInt(qtdImage.value))

btnEl.addEventListener("click", () => {
    imgNumber = qtdImage.value;
    addNewImages()
})

function addNewImages(){
    for(let index = 0; index < imgNumber; index++) {
        const newImageEl = document.createElement("img");
        newImageEl.src = "https://picsum.photos/300?random=" + Math.floor(Math.random()*2000)

        imagemConteinerEl.appendChild(newImageEl)
    }
}
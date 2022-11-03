const eleGrid = document.querySelector(".grid");
const eleButton = document.querySelector("button");
let arrBomb = [];
let difficultySelect = parseInt(document.querySelector("select").value);


eleButton.addEventListener("click", function(){
    
    difficultySelect = parseInt(document.querySelector("select").value);

    arrBomb = []
    do {
        let randomNumber = getRandomIntInclusive(1, difficultySelect);
        if (!arrBomb.includes(randomNumber)){
           arrBomb.push(randomNumber)
        }
        } while (arrBomb.length < 16) 

    eleGrid.innerHTML = "";
    for (let i = 1; i <= difficultySelect; i++) {
        eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        if (difficultySelect === 81) {
            eleCell.classList.add("medium")
        } else if (difficultySelect === 49) {
            eleCell.classList.add("big")
        }
        eleCell.addEventListener('click', function () {
            this.classList.toggle('active')
            console.log("hai selezionato la cella: " + i)
        });
        eleCell.innerHTML = i
        eleGrid.append(eleCell)

        if (arrBomb.includes(i)) {
            eleCell.addEventListener("click", function () {
                this.style.background = "red"
            })}

    } 

    

    
    

})










function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
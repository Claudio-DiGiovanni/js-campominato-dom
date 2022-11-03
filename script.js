const eleGrid = document.querySelector(".grid");
const eleButton = document.querySelector("button");
let arrBomb = [];
let difficultySelect;

eleButton.addEventListener("click", function () {

    difficultySelect = parseInt(document.querySelector("select").value);

    arrBomb = [];

    do {
        let randomNumber = getRandomIntInclusive(1, difficultySelect);
        if (!arrBomb.includes(randomNumber)) {
            arrBomb.push(randomNumber)
        }
    } while (arrBomb.length < 16)

    console.log("Psst, le bombe sono: " + arrBomb)

    eleGrid.innerHTML = "";
    let arrayCell = [];

    for (let i = 1; i <= difficultySelect; i++) {
        eleCell = document.createElement("div");
        eleCell.classList.add("cell");

        if (difficultySelect === 81) {
            eleCell.classList.add("medium")

        } else if (difficultySelect === 49) {
            eleCell.classList.add("big")
        }

        eleCell.innerHTML = i
        eleCell.id = i

        eleCell.addEventListener('click', function () {
            this.classList.toggle('active');
            if (arrBomb.includes(parseInt(this.id))) {
                console.log('ciao');
                explode(arrayCell);
            }
        });

        
        eleGrid.append(eleCell)
        arrayCell.push(eleCell)
    }
})


function explode(array) {
    for(let i = 0; i < arrBomb.length; i++) {
        console.log('oooh')
        let valore = arrBomb[i] - 1;
        let cell = array[valore];
        cell.style.background = "red";
    }
}




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
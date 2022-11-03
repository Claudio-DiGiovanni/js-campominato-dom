const eleGrid = document.querySelector(".grid");
const eleButton = document.querySelector("button");

eleButton.addEventListener("click", function(){
    const difficultySelect = document.querySelector("select").value;

    if (eleGrid.innerHTML === "") {
        if (difficultySelect === "easy") {
            for (let i = 1; i <= 100; i++) {
                eleCell = document.createElement("div");
                eleCell.classList.add("cell");
                eleCell.innerHTML = i
                eleGrid.append(eleCell)
                eleCell.addEventListener('click', function () {
                    this.classList.toggle('active')
                    console.log("hai selezionato la cella: " + i)
                });
        } 
        } else if (difficultySelect === "medium") {
            for (let i = 1; i <= 81; i++) {
                eleCell = document.createElement("div");
                eleCell.classList.add("cell");
                eleCell.classList.add("medium")
                eleCell.innerHTML = i
                eleGrid.append(eleCell)
                eleCell.addEventListener('click', function () {
                    this.classList.toggle('active')
                    console.log("hai selezionato la cella: " + i)
                });
            }
        } else if (difficultySelect === "hard") {
            for (let i = 1; i <= 49; i++) {
                eleCell = document.createElement("div");
                eleCell.classList.add("cell");
                eleCell.classList.add("big")
                eleCell.innerHTML = i
                eleGrid.append(eleCell) 
                eleCell.addEventListener('click', function () {
                    this.classList.toggle('active')
                    console.log("hai selezionato la cella: " + i)
                });
                
            }
        }
    } else {
        console.log("Smetti di premere. Vuoi mica rompere tutto?")
    }

    
})

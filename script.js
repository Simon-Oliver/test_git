const BUTTON = document.querySelector(".addBtn");
const TODOLIST = document.querySelector(".toDoList");
const INFIELD = document.querySelector("#myInput");
const PopUpBox = document.querySelector("#myDIV");
const ClosePop = document.querySelector(".popUp-close");

function add(element){
    const INPUT = element;
    const DIV = document.createElement("div");

    DIV.className = "list-container";

    const LI = document.createElement("li");

    LI.textContent = INPUT;
    TODOLIST.appendChild(DIV);
    DIV.appendChild(LI);


    const CLOSE = document.createElement("SPAN");

    CLOSE.textContent = "\u00D7";
    CLOSE.className = "close";
   // DIV.classList(CLOSE);
    DIV.appendChild(CLOSE);

    //Clear input field
    document.querySelector("#myInput").value = "";

    CLOSE.onclick = function() {
        this.parentNode.remove(this);
    }

    // Strike out list item
    DIV.onclick = function() {
        LI.classList.toggle("checked");
        DIV.classList.toggle("background-checked");
    }

}

function popUp(){
    const INPUT = document.querySelector("#myInput").value;
    PopUpBox.classList.toggle("open");
    PopUpBox.classList.toggle("closed");
    if(INPUT){
    add(INPUT);
    }

}

function popUpClose(){
    PopUpBox.classList.toggle("open");
    PopUpBox.classList.toggle("closed");
}

ClosePop.addEventListener("click", popUpClose, false);
BUTTON.addEventListener("click", popUp, false);
//BUTTON.addEventListener("click", add, false);


// Enter Key will add new Item
INFIELD.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        BUTTON.click();
  }  
},false);

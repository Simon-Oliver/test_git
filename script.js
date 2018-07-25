const BUTTON = document.querySelector(".addBtn");
const TODOLIST = document.querySelector(".toDoList");
const INFIELD = document.querySelector("#myInput");

function add(){
    const INPUT = document.querySelector("#myInput").value;
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


BUTTON.addEventListener("click", add, false);


// Enter Key will add new Item
INFIELD.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        BUTTON.click();
  }  
},false);

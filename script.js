const Input= document.getElementById("Input");
const addButton= document.getElementById("add-button");
const todoList=document.getElementById("todoList");

function addToDo() {
    if(Input.value!=null){
        const li=document.createElement("li");
        const delBtn=document.createElement("button");
        const span =document.createElement("span");
        delBtn.innerText="x";
        span.value=Input.value;
        li.appendChild(span);
        li.appendChild(delBtn);
        todoList.appendChild(li);
        Input.value="";

    }
}

function delToDO(event) {
    var delList = event.target.parentNode;
    delList.remove();
}

function toggle(event){
    if (event.target.style.textDecoration !=="line-through"){
        event.target.style.textDecoration ="line-through";
    }else{
        event.target.style.textDecoration ="none";
    }
}

 const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

 const TODOS_LS = "toDos";

let toDos = [];

 function deleteToDos(event){
  const btn = event.target;
  console.log(btn);
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  } );
  toDos = cleanToDos;
  saveToDos();
 } 
 function saveToDos(){
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
 }
 function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerHTML ="❌";
   delBtn.addEventListener("click",deleteToDos);
   const span = document.createElement("span");
   const newId = toDos.length + 1;
  
   span.innerText = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObject = {
      text : text ,
      id : newId
   };
   toDos.push(toDoObject);
  
   saveToDos();
 }
 function handleSubmit(event){
     const currentValue = toDoInput.value;
     paintToDo(currentValue);
     toDoInput.value ="";
 }
 function loadToDos(){
     const lodedToDos = localStorage.getItem(TODOS_LS);
     if(lodedToDos !== null){
        const parsedToDos = JSON.parse(lodedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
     }
 }
 function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
 }
 init();
 
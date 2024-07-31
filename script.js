let button = document.querySelector('button');
let input = document.querySelector('input');
let taskEle = document.querySelector('.list-item');
button.addEventListener('click',() => {
  if(!input.value==""){
  let li=document.createElement('li');
  li.textContent= input.value;
  taskEle.appendChild(li);
  let spanEle = document.createElement("span");
        spanEle.textContent = "\u00d7";
        spanEle.setAttribute("class","spn");
        li.appendChild(spanEle);
  }
  else{
    alert("Task Can't be Empty");
  }
  input.value= "";  
  SaveEle();
});
taskEle.addEventListener('click',(e) => {
  if(e.target.tagName== "LI"){
    e.target.classList.toggle("check");
    SaveEle();
  }
  else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    SaveEle();
  }
});
function SaveEle(){
  localStorage.setItem("task",taskEle.innerHTML);
}
function getEle(){
  taskEle.innerHTML = localStorage.getItem("task");
}
getEle();

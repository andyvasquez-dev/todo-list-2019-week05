const inputButt= document.querySelector('#input');
const addToList = document.querySelector('#addToList');
const ul = document.querySelector('#list');
const status = document.querySelector('#status');
const clearList = document.querySelector('#clearList');
const clearCompleted = document.querySelector('#clearCompleted');
let li; // to be assigned to li after creation;


let textNode;
let task;
let taskList;
let todoCount=0;


addToList.addEventListener('click',function(){
  task=inputButt.value;

  if(task.trim()===""){
    return;
  }
  else{
    let textNode= document.createTextNode(task);  // creates text
    var newElement= document.createElement('li'); //creates li

    newElement.appendChild(textNode); //adds text node li

    ul.appendChild(newElement); // adds li to list
    console.log(todoCount);
    todoCount++;
    updateStatus();


  }
});

clearList.addEventListener('click',function(){
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);

  }
  if (todoCount>0) {
    todoCount=0;
    updateStatus();
  }
});

clearCompleted.addEventListener('click', function(){
  let completed = ul.querySelectorAll(".completed"); //within ul with a class of complete
  completed.forEach((listItem) => {
    ul.removeChild(listItem);
  });
})

ul.addEventListener("click", (item) => {
  if (item.target.tagName === "LI"){
    item.target.classList.toggle("completed")
    todoCount--;
    // let completedTodos = document.querySelectorAll("completed").length;
    // todoCount -= completedTodos
    updateStatus();

  }

})
// li=document.querySelectorAll('li');
// li.forEach(function (eachLi){
//   eachLi.addEventListener('click',function(){
//   //   if ((eachLi.classList.contains('completed'))===false){
//   //   eachLi.classList.toggle('completed')
//   // }
//
//       eachLi.classList.toggle('completed');
//   })
// })

function updateStatus(){
  let statusText=`You have ${todoCount} todos left.`;
  status.textContent=statusText;
}

// function liDocument(){
//
// }

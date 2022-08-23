document.addEventListener("DOMContentLoaded", function() {
  //console.log("The DOM has loaded");
document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  createMyTodo(e.target.task.value);
  console.log
})


});
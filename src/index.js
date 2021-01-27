document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelectorAll("input")[1].addEventListener("click", function(event){
    event.preventDefault()
    
    let button = document.createElement('button')
    button.innerHTML = 'X'
    button.addEventListener("click", (e)=>{
      e.target.parentElement.remove();
    });

    let parent =document.querySelector('ul')
    let task = document.createElement('li')
    
    task.innerHTML = document.querySelectorAll("input")[0].value
    task.append(button)
    parent.append(task)
  });
});

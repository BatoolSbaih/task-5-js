let tolist = document.querySelector(".tolist");
tolist.onsubmit= function(e){
    e.preventDefault();
    let elements = e.target.elements;
    let tasks = {
        task: elements["text"].value,
      };
      let result= document.createElement('div');
      result.innerHTML = `<input type="checkbox" class="checkbox"><span>${tasks.task}</span>`;
      result.classList.add("check")
      document.querySelector(".tasks").appendChild(result);
      let x = result.querySelector('input[type="checkbox"]');
      x.onclick = function() {
          if (x.checked) {
              result.classList.add("checkd");
              result.classList.remove("check");
          } else {
            result.classList.remove("checkd");
            result.classList.add("check");
          }
      };}
      
      
      
      


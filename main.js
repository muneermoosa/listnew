let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList= document.getElementById("kitchen-items-list");

let kitchenInputData;
let kitchenInputDataArray=[];
function setLocalStorage (){
    localStorage.setItem("KitchenInput", JSON.stringify(kitchenInputDataArray));
}
function getLocalStorage(){
    if(localStorage.getItem("KitchenInput")){
        
        kitchenInputDataArray = JSON.parse(localStorage.getItem("KitchenInput"));
        
        buildUI();
    
}
}

function buildUI(){
    kitchenItemsList.textContent="";
    kitchenInputDataArray.forEach((item)=>{
        //Create Dom Element now       
    
            let li = document.createElement('li');
            let spanEI = document.createElement('span');
            li.appendChild(spanEI);
           spanEI.innerText =item;
            li.style.cssText='animation-name:slideIn';
            kitchenItemsList.appendChild(li);
            kitchenInput.value='';
            kitchenInput.focus();
            // create Trash button
            let trashBtn = document.createElement('i');
            trashBtn.classList.add("fas","fa-trash");
            li.appendChild(trashBtn);
            // create Edit button
            let editBtn =document.createElement('i');
            editBtn.classList.add('fas','fa-edit');
            li.appendChild(editBtn);
        
        });
    }

    


// Add kichen item
function addKitchenItems(event){
     kitchenInputData = kitchenInput.value;
     kitchenInputDataArray.push(kitchenInputData);
     console.log(kitchenInputDataArray);

    // Set locatl storage

    setLocalStorage();
     

    //  get from local storage
    getLocalStorage();

  

   
  

    
}
// delete item for kichen list
function deletekichenitem(event){
   
console.log(event.target.classList[1]);
if(event.target.classList[1]==="fa-trash"){
   let item = event.target.parentElement;
   console.log(item);
   item.classList.add('slideOut');
   item.addEventListener('transitionend',function(){
    console.log("Animation has been competed,");
    item.remove();
   })
//    item.remove();
}
}
// Edit kitchn item
function editkitchenitem(event){
    // console.log(event.target.classList);
     if(event.target.classList[1] === 'fa-edit'){
        // alert("edit enable mode")
        let editedValue = prompt ("plz add new value");
        // console.log(editedValue);
        let item = event.target.parentElement;
      //   item.innerText = editedValue;
      let spanEI= item.querySelector('span');
      spanEI.innerText=editedValue;
     }

}




addBtn.addEventListener("click",addKitchenItems);
kitchenItemsList.addEventListener("click",deletekichenitem);
kitchenItemsList.addEventListener("click",editkitchenitem);
getLocalStorage();
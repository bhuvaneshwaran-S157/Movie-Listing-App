// const list = document.getElementsByTagName("li");

// for (let item of list) {
//     item.classList.add("text-blue-800");
// }const bodyTag = document.getElementById("body");
// const toggleBtn = document.getElementById("btn");
// const isToggled = true;
// // function deleteBtnAddingFun(){

// for(let item of list){
//     let deleteBtn=document.createElement("button");
//     deleteBtn.textContent="Delete";
//     deleteBtn.classList.add(
//     "w-fit",
//     "h-fit",
//     "bg-white",
//     "p-1",
//     "m-1",
//     "bg-blue-200",
//     "rounded-md",
//     "font-semibold")

//     deleteBtn.addEventListener("click",()=>{
//         item.remove()
//     });
// item.appendChild(deleteBtn);
// }
// // }

// toggleBtn.addEventListener("click", () => {
//     bodyTag.classList.toggle("bg-black");
//     // isToggled=false;
// })
// for (let item of list) {
//     item.addEventListener("click", () => {
//         item.textContent += "⭐";
//     });
// }

// let movieInput=document.getElementById("input");
// let addButton=document.getElementById("addBtn");
// const unorderedList = document.getElementById("unor");

// addButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     const value = movieInput.value.trim();
  
//     if (value) {
//       // Create new list item
//       let newList2 = document.createElement("li");
//       newList2.textContent = value;
//       newList2.classList.add(
//         "w-full",
//         "h-full",
//         "bg-white",
//         "p-2",
//         "m-3",
//         "text-blue-800",
//         "rounded-md",
//         "font-semibold",
//         "cursor-pointer",
//         "flex",
//         "justify-between"
//       );
  
//       // Create delete button
//       let deleteBtn = document.createElement("button");
//       deleteBtn.textContent = "Delete";
//       deleteBtn.classList.add(
//         "bg-blue-200",
//         "p-1",
//         "m-1",
//         "rounded-md",
//         "font-semibold"
//       );
  
//       // Append delete button to list item
//       newList2.appendChild(deleteBtn);
  
//       // Delete logic
//       deleteBtn.addEventListener("click", () => {
//         newList2.remove();
//       });
  
//       // Add to list
//       unorderedList.appendChild(newList2);
//       movieInput.value = "";
//       updateCount();
//     }
//   });
  
//   console.log(unorderedList.children.length);
//   const count=document.getElementById("count-display");
//   function updateCount(){
//       count.textContent="The total movies "+`${unorderedList.children.length}`;
//   }
// const unorderedList = document.getElementById("unor");
// let newList = document.createElement("li");
// newList.textContent = "Inception";
// newList.classList.add(
//     "w-full",
//     "h-full",
//     "bg-white",
//     "p-2",
//     "m-2",
//     "text-blue-800",
//     "rounded-md",
//     "font-semibold",
//     "cursor-pointer", "flex", "justify-between",
// );

// unorderedList.appendChild(newList);

const list = document.getElementsByTagName("li");
for (let item of list) {
    item.classList.add("text-blue-800");
}

const bodyTag = document.getElementById("body");
const toggleBtn = document.getElementById("btn");

// Add delete buttons to existing items
for (let item of list) {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add(
        "w-fit",
        "h-fit",
        "bg-white",
        "p-1",
        "m-1",
        "bg-blue-200",
        "rounded-md",
        "font-semibold"
    );

    deleteBtn.addEventListener("click", () => {
        item.remove();
    });
    item.appendChild(deleteBtn);
}

// Theme toggle
toggleBtn.addEventListener("click", () => {
    bodyTag.classList.toggle("bg-white");
});

// Add click stars to items
for (let item of list) {
    item.addEventListener("click", () => {
        item.textContent += "⭐";
    });
}

// Add movies to the list
let movieInput = document.getElementById("input");
let addButton = document.getElementById("addBtn");
const unorderedList = document.getElementById("unor");

addButton.addEventListener("click", (e) => {
        e.preventDefault();
        emptyState();
    const value = movieInput.value.trim();

    if (value) {
        // Create new list item
        let newList2 = document.createElement("li");
        newList2.textContent = value;
        newList2.classList.add(
            "bg-white",
            "p-2",
            "m-3",
            "text-blue-800",
            "rounded-md",
            "font-semibold",
            "cursor-pointer",
            "flex",
            "justify-between"
        );

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add(
            "bg-blue-200",
            "p-1",
            "m-1",
            "rounded-md",
            "font-semibold"
        );

        // Append delete button to list item
        newList2.appendChild(deleteBtn);

        // Delete logic
        deleteBtn.addEventListener("click", () => {
            newList2.remove();
            updateCount();
        });

        // Add to list
        unorderedList.appendChild(newList2);
        movieInput.value = "";
        updateCount();
    }
});

function emptyState(){
    let empt=document.getElementById("empty-state");
    empt.style.display='none';
}

// Counter display
const count = document.getElementById("count-display");
function updateCount() {
    count.textContent = "The total movies " + `${unorderedList.children.length}`;
}

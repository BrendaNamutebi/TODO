const todoArray = [];

// simple form processing
//const lists =document.querySelector("todos");
const form = document.querySelector("form");
// let list1 = lists.list1;
// let list2 = lists.list2;
// let list3 = lists.list3;
let list1 = form.list1;

// Create a new list item when clicking on the "Add" button
function addElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("id1").value;
    console.log(inputValue);
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("id1").value = "";
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();  // stop operations until i say so


    let todo = {
        list1: list1.value,
          
    }

    // console.log('submited', posts)
    const todoArray = [todo]
    console.log('submitted', todoArray);
})


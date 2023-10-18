const container = document.querySelector(".container");
      // Add item to the list
      function addItem() {
        const value = document.getElementById("input").value;
        if (value) {
          const li = document.createElement("li");
          li.innerHTML =
            value +
            "<button onclick='delet(event)' class='btn' style='margin-left:5px'>Remove</button>";
          document.getElementById("list").appendChild(li);
          document.getElementById("input").value = "";
        } else {
          alert("Please Enter Game Name!");
        }
      }

      function delet(event) {
        event.target.parentElement.remove();
      }
      document.querySelector("button").addEventListener("click", addItem);
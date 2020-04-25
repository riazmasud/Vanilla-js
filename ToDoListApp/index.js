window.onload = function () {
  const addButton = document.getElementById("add-button");
  const addInput = document.getElementById("add-input");
  const listHead = document.getElementById("list");

  const finishTask = (e) => {
    if (e.target.checked) {
      e.target.setAttribute("class", "strike");
    } else {
      e.target.removeAttribute("class");
    }
  };
  const addItem = (e) => {
    let inputVal = addInput.value;

    if (!inputVal) {
      return;
    }

    const template = document.getElementById("template");
    const clone = document.importNode(template.content, true);
    clone.querySelector("span").textContent = inputVal;
    clone.querySelector("input").addEventListener("click", finishTask);
    listHead.appendChild(clone);

    addInput.value = "";
    this.document.getElementById("add-item").focus;
  };

  addItemOnEnter = (e) => {
    if (e.key == "Enter") {
      addItem();
    }
  };

  addButton.addEventListener("click", addItem);
  addInput.addEventListener("keypress", addItemOnEnter);
};

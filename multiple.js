// const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

// Select checkboxes with holding shift key
const checkboxes = document.querySelectorAll(".checkbox");
const unCheckBtn = document.querySelector(".btn-uncheckbox");
const checkBtn = document.querySelector(".btn-checkbox");

let lastChecked;
function handleCheckbox(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckbox);
});

// uncheck all checkboxes
function removeCheckboxes() {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  });
}
unCheckBtn.addEventListener("click", removeCheckboxes);

// check all checkboxes
function addCheckBoxes() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}
checkBtn.addEventListener("click", addCheckBoxes);

let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}
function decrement() {
  count -= 1;
  countEl.textContent = count;
}
///Save btn

function save() {
  let savingEntry = (saveEl.textContent.length > 0 ? " , " : "") + count;
  saveEl.textContent += savingEntry;
  console.log(count);
  countEl.textContent = 0;
}

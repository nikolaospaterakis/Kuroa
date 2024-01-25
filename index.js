
const caretDownEl = document.getElementById("fa-caret-down")
const caretLeftEl = document.getElementById("fa-caret-left")

caretDownEl.addEventListener("click", function(){
    caretLeftEl.classList.remove("hidden")
    caretDownEl.classList.add("hidden")
})

caretLeftEl.addEventListener("click", function(){
    caretLeftEl.classList.add("hidden")
    caretDownEl.classList.remove("hidden")
})
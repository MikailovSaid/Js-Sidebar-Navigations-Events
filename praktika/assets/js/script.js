let num = document.getElementById("num");
let list = document.getElementById("list");

num.addEventListener("keyup", function (e) {
    list.innerHTML = ""
    if (e.keyCode == 13) { 
        for (let i = 1; i <= this.value; i++) {
            let li = document.createElement("li");
            let icon = document.createElement("i");
            li.classList = "list-group-item";
            li.innerText = i;
            icon.className = "fas fa-times pt-1";
            icon.style.float = "right"
            icon.style.cursor = "pointer"
            li.append(icon)
            list.append(li)
            icon.onclick = function(){
                li.remove();
            }
        }
        this.value = "";
    }
})
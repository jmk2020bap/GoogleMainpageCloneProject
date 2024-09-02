const arrows = document.querySelectorAll(".arrow");
const lists = document.querySelectorAll("li");
let index = 0;
arrows.forEach(arrow => {
    arrow.onclick = function () {
        lists[index].classList.remove("show");
        if (arrow.classList.contains("right")) {
            index = (index + 1) % lists.length;
        } else {
            index = (index - 1 + lists.length) % lists.length;
        }
        lists[index].classList.add("show");
    };
});
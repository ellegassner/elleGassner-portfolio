const parentMenu = document.querySelector(".dropdown");
const subMenu = Array.from(parentMenu.querySelectorAll("li"));

function toggleDropdown() {
    for (let i = 0; i < subMenu.length; i++) {
        let listItem = subMenu[i];
        console.log(listItem);

        if (listItem.style.visibility == "visible") {
            listItem.style.visibility = "hidden";
        } else {
            listItem.style.visibility = "visible";
        }
    }
};
import { itemsNotBorrowed } from "../api/getItens.js";
const selectItems = document.getElementById("item-loan");
const token = localStorage.getItem("TOKEN")

document.addEventListener("DOMContentLoaded", async () => {
    const item = await itemsNotBorrowed(token);

    item.forEach(items => {
        const option = document.createElement("option");
        
        option.value = items.id;
        option.textContent = items.name;

        selectItems.appendChild(option);
    });
})

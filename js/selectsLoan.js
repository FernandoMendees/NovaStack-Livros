import { itemsNotBorrowed } from "../api/getItens.js";
import { clientNotBanned } from "../api/getClients.js";

const selectItems = document.getElementById("item-loan");
const selectClients = document.getElementById("client-loan");

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

document.addEventListener("DOMContentLoaded", async () => {
    const client = await clientNotBanned(token);

    client.forEach(clients => {
        const option = document.createElement("option");

        option.value = clients.id;
        option.textContent = clients.name;

        selectClients.appendChild(option);
    })
})

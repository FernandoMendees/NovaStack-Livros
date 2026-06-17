import { selectReservation } from "../api/getReservation.js"
import { clientNotBanned } from "../api/getClients.js";

const selectItems = document.getElementById("itemReservation");
const selectClients = document.getElementById("clientReservation");

const token = localStorage.getItem("TOKEN")

document.addEventListener("DOMContentLoaded", async () => {
    const item = await selectReservation(token);

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
});
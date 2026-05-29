import { buildClientItem } from "../components/itemClient.js";
import { showError } from "../utils/showError.js";
import { registerClient } from "../API/clients.js";

const formClient = document.getElementById("form-client");
const listClient = document.getElementById("clients-list");
const message = document.getElementById("message");

formClient.addEventListener("submit", async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("TOKEN");

    let client;
    const typeClient = document.getElementById("type-client");
    const nameClient = document.getElementById("name-client").value.trim();
    const accessCode = document.getElementById("access-code").value.trim();

    try {
        await registerClient(nameClient, typeClient.value, accessCode, token);
        let typeText = typeClient.options[typeClient.selectedIndex].textContent;

        client = buildClientItem(nameClient, typeText, accessCode);
    } catch (error) {
        showError(error.message);
        return;
    }
    
    listClient.append(client);
    formClient.reset();
})
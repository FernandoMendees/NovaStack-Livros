import { buildClientItem } from "../components/itemClient.js";
import { showError } from "../utils/showError.js";
import { registerClient } from "../api/clients.js";
import { getClients } from "../api/getClients.js";

const formClient = document.getElementById("form-client");
const listClient = document.getElementById("clients-list");
const typeClient = document.getElementById("type-client");
const token = localStorage.getItem("TOKEN");
const message = document.getElementById("message");

function renderClients(clients) {
    listClient.innerHTML = '';
    
    if (!clients || clients.length === 0) {
        listClient.innerHTML = '<p class="message">Nenhum cliente encontrado</p>';
        return;
    }

    let typeText;
    clients.forEach(client => {
        if (client.typeClient === 'COMMON') typeText = 'Comum';
        else typeText = 'Especial';
        
        const item = buildClientItem(
            client.id,
            client.name,
            typeText,
            client.limit,
            client.accessCode,
            token
        );

        listClient.appendChild(item);
    });
}

export async function loadClients() {
    try {
        const clients = await getClients(token);
        renderClients(clients);
    } catch (error) {
        showError(message, error.message);
    }
}

formClient.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nameClient = document.getElementById("name-client").value.trim();
    const accessCode = document.getElementById("access-code").value.trim();

    try {
        await registerClient(nameClient, typeClient.value, accessCode, token);

        await loadClients();

        formClient.reset();
    } catch (error) {
        showError(message, error.message);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (!token) {
        window.location.replace("../login.html");
        return;
    }
    loadClients();
});
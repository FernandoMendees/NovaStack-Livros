import { getClients } from "../api/clients.js";

document.addEventListener("DOMContentLoaded", async () => {

    const token = localStorage.getItem("TOKEN");
    const container = document.getElementById("clients-list");

    // if (!token) {
    //     window.location.href = "../login.html";
    //     return;
    // }

    try {
        const clients = await getClients(token);

        if (!clients || clients.length === 0) {
            container.innerHTML = "<p>Nenhum cliente encontrado</p>";
            return;
        }

        container.innerHTML = clients.map(client => `
            <div class="client-card">
                <h3>${client.name}</h3>
                <p>cliente tipo ${client.typeClient} com limite de ${client.limit} reservas</p>
            </div>
        `).join("");

    } catch (error) {
        container.innerHTML = "<p>Erro ao carregar clientes</p>";
        console.error(error);
    }
});
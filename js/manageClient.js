import { buildClientItem } from "../components/itemClient.js";

const formClient = document.getElementById("form-client");
const listClient = document.getElementById("clients-list");

formClient.addEventListener("submit", (event)=> {
    event.preventDefault();

    const nameClient = document.getElementById("name-client").value.trim();
    let typeClient = document.getElementById("type-client");
    const acessCode = document.getElementById("acess-code").value.trim();

    typeClient = typeClient.options[typeClient.selectedIndex].textContent;
    
    let client = buildClientItem(nameClient, typeClient, acessCode)

    listClient.appendChild(client);

    formClient.reset();
    return
})
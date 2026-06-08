import { getItens } from "../api/getItens.js";
import { itemBook, itemMagazine, itemMedia, itemMonograph } from "../components/createItem.js";

const token = localStorage.getItem("TOKEN");
const listCatalog = document.getElementById("list-catalog");

function renderItems(items) {
    listCatalog.innerHTML = "";

    if (!items || items.length === 0) {
        listCatalog.innerHTML = '<p class="message"> Nenhum item registrado. </p>'
        return;
    }

    items.forEach(item => {
        let cardItem = document.createElement("div");
        cardItem.classList.add("item");

        switch (item.typeItem) {
            case 'book': cardItem.innerHTML = itemBook(item.name, item.author, item.releaseDate);break;
            
            case 'media': cardItem.innerHTML = itemMedia(item.name, item.author, item.releaseDate);break;

            case 'magazine': cardItem.innerHTML = itemMagazine(item.name, item.author, item.releaseDate);break;
            
            case 'monograph': cardItem.innerHTML = itemMonograph(item.name, item.author, item.releaseDate);break;
            
            default: break;    
        };
        listCatalog.append(cardItem);
    });
}

async function loadItem() {
    try{
        const item = await getItens(token);
        renderItems(item);
    } catch (erro){
        listCatalog.innerHTML = `<p class"message">${erro.message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (!token) {
        window.location.replace("../pages/login.html")
    }
    loadItem();
})
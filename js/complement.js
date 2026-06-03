import { complementBook, complementMagazine, complementMedia, complementMonograph } from "../components/complementItens.js";
import { showError } from "../utils/showError.js"

const confirmButton = document.getElementById("confirm-item");
const formComplement = document.getElementById("form-complement");
const sectionForm = document.getElementById("section-form");
const message = document.getElementById("message");

const complementRenders = {
    'book': complementBook,
    'magazine': complementMagazine,
    'media': complementMedia,
    'monograph': complementMonograph
};

confirmButton.addEventListener("click", ()=> {
    const selectValue = document.getElementById("select-item").value;

    const renderTemplate = complementRenders[selectValue];

    if(!renderTemplate) {
        showError(message, "Item inválido.");
        return;
    }

    formComplement.innerHTML = renderTemplate();

    sectionForm.classList.remove("hidden");
})

import { complementBook, complementMagazine, complementMedia, complementMonograph } from "../components/complementItens.js";

const btnConfirm = document.getElementById("confirm-item");
const complement = document.getElementById("form-complement");
const sectionForm = document.getElementById("section-form");

btnConfirm.addEventListener("click", () => {
    const selectValue = document.getElementById("select-item").value;

    //teste!!!
    switch(selectValue){
        case 'book':
            complement.innerHTML = complementBook();
            sectionForm.classList.remove("hidden");
            return;

        case 'media':
            complement.innerHTML = complementMedia();
            sectionForm.classList.remove("hidden");
            return;

        case 'magazine':
            complement.innerHTML = complementMagazine();
            sectionForm.classList.remove("hidden");
            return;
        
        case 'monograph':
            complement.innerHTML = complementMonograph();
            sectionForm.classList.remove("hidden");
            return;

        default:
            break
    };

})
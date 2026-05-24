import { complementBook, complementMagazine, complementMedia, complementMonograph } from "../components/complementItens.js";
import { registerBook, registerMagazine, registerMedia, registerMonograph } from "../API/itens.js";

const btnConfirm = document.getElementById("confirm-item");
const complement = document.getElementById("form-complement");
const sectionForm = document.getElementById("section-form");

btnConfirm.addEventListener("click", () => {
    const selectValue = document.getElementById("select-item").value;

    switch (selectValue) {
        case 'book': {
            complement.innerHTML = complementBook();
            sectionForm.classList.remove("hidden");
            return;
        }
            
        case 'media': {
            complement.innerHTML = complementMedia();
            sectionForm.classList.remove("hidden");
            return;
        }
            
        case 'magazine': {
            complement.innerHTML = complementMagazine();
            sectionForm.classList.remove("hidden");
            return;
        }
            
        case 'monograph': {
            complement.innerHTML = complementMonograph();
            sectionForm.classList.remove("hidden");
            return;
        }};
})

const formItens = document.getElementById("form-itens");

formItens.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selectValue = document.getElementById("select-item").value;

    const titleItem = document.getElementById("title").value.trim();
    const authorItem = document.getElementById("author").value.trim();
    const releaseDate = document.getElementById("date-publi").value.trim();

    const token = localStorage.getItem("TOKEN")
    if(!token) {
        window.location.replace("../login.html");
        return;
    }

    try {
        switch (selectValue) {
            case 'book': {
                const category = document.getElementById("category").value;
                await registerBook(token, titleItem, authorItem, releaseDate, category);
                return;
            }

            case 'media': {
                const format = document.getElementById("mediaFormat").value;
                const duration = document.getElementById("duration").value;
                await registerMedia(token, titleItem, authorItem, releaseDate, format, Number(duration));
                return;
            }
                

            case 'magazine': {
                const edition = document.getElementById("editionNumber").value;
                await registerMagazine(token, titleItem, authorItem, releaseDate, Number(edition));
                return;
            }
                

            case 'monograph': {
                const institution = document.getElementById("institution").value;
                const course = document.getElementById("course").value;
                await registerMonograph(token, titleItem, authorItem, releaseDate, institution, course);
                return;
            }
        };
    } catch (error) {
        console.log("Erro ao cadastrar" + error.message);
    }
});
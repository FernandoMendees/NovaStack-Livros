import { registerBook, registerMagazine, registerMedia, registerMonograph } from "../api/itens.js";

const formItens = document.getElementById("form-itens");
const sectionForm = document.getElementById("section-form");
const message = document.getElementById("message");

const getInputValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

const registrationHandlers = {
    'book': async ({ token, titleItem, authorItem, releaseDate }) => {
        const category = getInputValue("category");
        await registerBook(token, titleItem, authorItem, releaseDate, category);
    },

    'media': async ({ token, titleItem, authorItem, releaseDate }) => {
        const mediaFormat = getInputValue("mediaFormat");
        const duration = Number(getInputValue("duration"));
        await registerMedia(token, titleItem, authorItem, releaseDate, mediaFormat, duration);
    },

    'magazine': async ({ token, titleItem, authorItem, releaseDate }) => {
        const editionNumber = Number(getInputValue("editionNumber"));
        await registerMagazine(token, titleItem, authorItem, releaseDate, editionNumber);
    },

    'monograph': async ({ token, titleItem, authorItem, releaseDate }) => {
        const institution = getInputValue("institution");
        const course = getInputValue("course");
        await registerMonograph(token, titleItem, authorItem, releaseDate, institution, course);
    }
};

const handleRegistration = async (selectValue, commomData) => {
    const action = registrationHandlers[selectValue];

    if (!action) {
        console.log(`Elemento inválido: ${selectValue}`);
        return;
    }

    try {
        await action(commomData);
    } catch (error) {
        console.log("Erro ao registrar item" + error);
    }
}

formItens.addEventListener("submit", async (event) => {
    event.preventDefault();
    const selectValue = getInputValue("select-item");
    const token = localStorage.getItem("TOKEN");

    const titleItem = getInputValue("title");
    const authorItem = getInputValue("author");
    const releaseDate = getInputValue("release-date");

    const commonData = { token, titleItem, authorItem, releaseDate };

    await handleRegistration(selectValue, commonData);
    sectionForm.classList.add("hidden");
})
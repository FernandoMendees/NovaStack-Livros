const btnConfirm = document.getElementById("confirm-item");
const complement = document.getElementById("form-complement");
const sectionForm = document.getElementById("section-form");

btnConfirm.addEventListener("click", () => {
    const selectValue = document.getElementById("select-item").value;

    //teste!!!
    switch(selectValue){
        case 'book':
            complement.innerHTML = "<p>Livro</p>";
            sectionForm.classList.remove("hidden");
            return;

        case 'media':
            complement.innerHTML = "<p>Mídia</p>";
            sectionForm.classList.remove("hidden");
            return;

        case 'magazine':
            complement.innerHTML = "<p>Periódicos</p>";
            sectionForm.classList.remove("hidden");
            return;
        
        case 'monograph':
            complement.innerHTML = "<p>Monografia</p>";
            sectionForm.classList.remove("hidden");
            return;

        default:
            break
    };

})
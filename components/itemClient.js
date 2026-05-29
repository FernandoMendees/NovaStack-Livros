export function buildClientItem(name, type, code) {
    let editMode = false;
    
    const itemClient = document.createElement("li");
    itemClient.classList.add("client-item");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const img = document.createElement("img");
    img.src = "../../assets/iconUser.png";
    img.alt = "Icone de usuário";

    const dataDiv = document.createElement("div");
    dataDiv.classList.add("data");

    //Nome
    const spanName = document.createElement("span");
    spanName.classList.add("name");
    spanName.textContent = name;

        const inputName = document.createElement("input");
        inputName.classList.add("input-name", "hidden");
        inputName.type = 'text';
        inputName.placeholder = 'Nome';

    //Tipo
    const spanType = document.createElement("span");
    spanType.classList.add("type");
    spanType.textContent = type;

        const inputType = document.createElement("select");
        inputType.classList.add("input-type", "hidden");

            const defaultOption = document.createElement("option");
            defaultOption.textContent = "Tipo do Cliente";
            defaultOption.value = ""; defaultOption.disabled = true; defaultOption.selected = true;
            const commomType = document.createElement("option"); 
            const specialType = document.createElement("option");
            commomType.value = 'common';
            commomType.textContent = 'common';
            specialType.value = 'special';
            specialType.textContent = 'special';

            inputType.append(defaultOption, commomType, specialType);
            inputType.value = '';
            
    
    //Código
    const spanCode = document.createElement("span");
    spanCode.classList.add("acess-code");
    spanCode.textContent = code;

        const inputCode = document.createElement("input");
        inputCode.classList.add("input-code", "hidden");
        inputCode.type = 'text';
        inputCode.placeholder = 'Código de acesso';

    //Botão
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn-edit");

        const buttonEdit = document.createElement("button");
            buttonEdit.classList.add("btn");
            buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`;
        
        const buttonCancel = document.createElement("button");
            buttonCancel.classList.add("btn");
            buttonCancel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`

    buttonEdit.addEventListener("click", () => {
        if (!editMode) {
            inputName.value = spanName.textContent;
            inputType.value = spanType.textContent.toLowerCase();
            inputCode.value = spanCode.textContent;

            buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height"20px"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
            buttonCancel.classList.remove("hidden");

            editMode = true;
        } else {
            spanName.textContent = inputName.value;
            spanType.textContent = inputType.value;
            spanCode.textContent = inputCode.value;

            //Requisição

            buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`
            buttonCancel.classList.add("hidden");

            editMode = false;
        }
        spanName.classList.toggle('hidden');
        inputName.classList.toggle('hidden');
        spanType.classList.toggle('hidden');
        inputType.classList.toggle('hidden');
        spanCode.classList.toggle('hidden');
        inputCode.classList.toggle('hidden');
    })

    buttonCancel.addEventListener("click", () => {
        spanName.classList.remove('hidden');
        inputName.classList.add('hidden');
        spanType.classList.remove('hidden');
        inputType.classList.add('hidden');
        spanCode.classList.remove('hidden');
        inputCode.classList.add('hidden');

        buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`
        buttonCancel.classList.add("hidden");

        editMode = false;
    })

    imageDiv.append(img);
    dataDiv.append(spanName, inputName, spanType, inputType, spanCode, inputCode);
    buttonDiv.append(buttonEdit, buttonCancel);

    itemClient.append(imageDiv, dataDiv, buttonDiv);

    return itemClient;
}
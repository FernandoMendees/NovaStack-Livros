import { loadClients } from "../js/manageClient.js";
export function buildClientItem(id, name, typeClient, limit, accessCode, token) {
    let editMode = false;

    const itemClient = document.createElement("li");
    itemClient.classList.add("client-item");
    itemClient.dataset.type = typeClient;

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
    spanType.textContent = typeClient;

    const inputType = document.createElement("select");
    inputType.classList.add("input-type", "hidden");
    inputType.required = true;

    const commomType = document.createElement("option");
    const specialType = document.createElement("option");
    commomType.value = 'COMMON';
    commomType.textContent = 'Comum';
    specialType.value = 'SPECIAL';
    specialType.textContent = 'Especial';

    inputType.append(commomType, specialType);


    //limite
    const spanLimit = document.createElement("span");
    spanLimit.classList.add("limit");
    spanLimit.textContent = limit;

    //Código
    const inputCode = document.createElement("input");
    inputCode.classList.add("input-code", "hidden");
    inputCode.type = 'number';
    inputCode.placeholder = 'Código de acesso'

    //Botão
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn-edit");

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("btn");
    buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`;

    const buttonCancel = document.createElement("button");
    buttonCancel.classList.add("btn", "hidden");
    buttonCancel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "hidden");
    buttonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`

    buttonEdit.addEventListener("click", async () => {
        if (!editMode) {

            inputName.value = spanName.textContent;
            inputCode.value = accessCode;
            let type = itemClient.dataset.type.trim();

            if (type.toLowerCase() === "comum") {
                inputType.value = "COMMON";
            } else {
                inputType.value = "SPECIAL";
            }

            buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
            buttonCancel.classList.remove("hidden");
            buttonDelete.classList.remove("hidden");

            editMode = true;
        } else {
            const value = inputType.value;
            const text = inputType.options[inputType.selectedIndex].textContent;

            const client = {
                id: id,
                name: inputName.value.trim(),
                typeClient: value,
                accessCode: inputCode.value.trim()
            }

            try {
                const response = await fetch(`http://localhost:8080/client/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(client)
                })

                if (!response.ok) throw new Error(`Erro ao editar o cliente. Erro [${response.status}]. `)

                spanName.textContent = inputName.value;
                spanType.textContent = text;

                loadClients();
            } catch (erro) {
                throw erro;
            }

            buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`
            buttonCancel.classList.add("hidden");
            buttonDelete.classList.add("hidden");

            editMode = false;
        }

        spanName.classList.toggle('hidden');
        inputName.classList.toggle('hidden');
        spanType.classList.toggle('hidden');
        inputType.classList.toggle('hidden');
        spanLimit.classList.toggle('hidden');
        inputCode.classList.toggle('hidden')
    });

    buttonCancel.addEventListener("click", () => {
        spanName.classList.remove('hidden');
        inputName.classList.add('hidden');
        spanType.classList.remove('hidden');
        inputType.classList.add('hidden');
        spanLimit.classList.remove('hidden');
        inputCode.classList.add('hidden')

        buttonEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`
        buttonCancel.classList.add("hidden");

        editMode = false;
    })

    buttonDelete.addEventListener("click", async () => {
        const client = {
                id: id
            }

            try {
                const response = await fetch(`http://localhost:8080/client/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(client)
                })

                if (!response.ok) throw new Error(`Erro ao editar o cliente. Erro [${response.status}]. `)

                loadClients();
            } catch (erro) {
                throw erro;
            }
            editMode = false;
    })

    imageDiv.append(img);
    dataDiv.append(spanName, inputName, spanType, inputType, spanLimit, inputCode);
    buttonDiv.append(buttonEdit, buttonDelete, buttonCancel);

    itemClient.append(imageDiv, dataDiv, buttonDiv);

    return itemClient;
}
import { loadLoans } from "../js/emprestimo.js";

export function buildLoanItem(id, titleItem, client, status, loanDate, dueDate, token) {
    let confirmMode = false;

    const loanItem = document.createElement("li");
    loanItem.classList.add("item-loan");

    //Div da imagem========================

    const divImage = document.createElement("div");
    divImage.classList.add("image");

    const img = document.createElement("img");
    img.src = "../../assets/iconLoan.png";
    img.alt = "Icone de emprestimo";

    //Div de dados=========================

    const divData = document.createElement("div");
    divData.classList.add("data");

    const h2Title = document.createElement("h2");
    h2Title.classList.add("title-item");
    h2Title.textContent = titleItem;

    const spanClient = document.createElement("span");
    spanClient.classList.add("client");
    spanClient.textContent = client;

    const spanStatus = document.createElement("span");
    spanStatus.classList.add("status");
    spanStatus.textContent = status;

    //Div de datas===========================

    const divDates = document.createElement("div");
    divDates.classList.add("dates");

    const spanLoanDate = document.createElement("span");
    spanLoanDate.textContent = `Início: ${loanDate}`;

    const spanDueDate = document.createElement("span");
    spanDueDate.textContent = `Previsão: ${dueDate}`;

    const labelEndDate = document.createElement("label");
    labelEndDate.classList.add("hidden");
    labelEndDate.textContent = "Entregue em: "

    const inputEndDate = document.createElement("input");
    inputEndDate.type = "date";
    inputEndDate.classList.add("hidden");

    //Div botões===========================
    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons");

    const buttonConfirm = document.createElement("button");
    buttonConfirm.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></svg>`

    const buttonCancel = document.createElement("button");
    buttonCancel.classList.add("hidden");
    buttonCancel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`

    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round"d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>`

    buttonConfirm.addEventListener("click", async () => {
        if (!confirmMode) {
            labelEndDate.classList.remove("hidden");
            inputEndDate.classList.remove("hidden");
            spanLoanDate.classList.add("hidden");
            spanDueDate.classList.add("hidden");
            buttonCancel.classList.remove("hidden");

            confirmMode = true;
        } else {
            const returnDateValue = inputEndDate.value

            const loan = {
                id: id,
                returnDate: returnDateValue
            };

            try {
                const response = await fetch(`http://localhost:8080/loan/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(loan)
                })

                if (!response.ok) throw new Error("Não foi possível completar o emprestimo.");

                labelEndDate.classList.add("hidden");
                inputEndDate.classList.add("hidden");
                buttonCancel.classList.add("hidden");
                
                spanLoanDate.classList.remove("hidden");
                spanDueDate.classList.remove("hidden");
                loadLoans();
            } catch (error) {
                throw error;
            }

            confirmMode = false
        }
    });

    buttonCancel.addEventListener("click", () => {
        spanLoanDate.classList.remove("hidden");
        spanDueDate.classList.remove("hidden");
        labelEndDate.classList.add("hidden");
        inputEndDate.classList.add("hidden");
        buttonCancel.classList.add("hidden");

        confirmMode = false;
    })

    buttonDelete.addEventListener("click", async () => {
        const loan = {
            id: id
        };

        try {
            const response = await fetch(`http://localhost:8080/loan/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(loan)
            });

            if (!response.ok) throw new Error("Não foi possível excluir o cliente.");


        } catch (error) {
            throw error;
        }

        loadLoans()
        confirmMode = false;

    });

    divImage.append(img);
    divDates.append(spanLoanDate, spanDueDate, labelEndDate, inputEndDate);
    divData.append(h2Title, spanClient, spanStatus, divDates);
    divButtons.append(buttonConfirm, buttonCancel, buttonDelete);

    loanItem.append(divImage, divData, divButtons);

    return loanItem;
}
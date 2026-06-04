import { registerLoan } from "../api/registerLoan.js";
import { showError } from "../utils/showError.js"

const formLoan = document.getElementById("loan");
const message = document.getElementById("message")

const getInputValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

formLoan.addEventListener("submit", async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("TOKEN")

    const libraryItemId = getInputValue("item-loan");
    const clientId = getInputValue("client-loan");
    const loanStatus = getInputValue("status");
    const loanDate = getInputValue("startDate");
    const dueDate = getInputValue("endDate");
    
    try {
        await registerLoan(token, libraryItemId, clientId, loanStatus, loanDate, dueDate);

        message.classList.remove("hidden")
        message.innerHTML = `<p>Emprestimo feito com sucesso.</p>`;
        formLoan.reset();
        
    } catch (error) {
        message.classList.remove("hidden")
        message.innerHTML = `<p>Algo deu errado...${error.message}</p>`
    }
})
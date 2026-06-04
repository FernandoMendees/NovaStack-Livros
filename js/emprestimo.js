import { registerLoan } from "../api/registerLoan.js";
import { showError, hiddenError, showMessage } from "../utils/showError.js"

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

        showMessage(message, 'Emprestimo registrado com sucesso!')
        formLoan.reset();
        
    } catch (error) {
        showError(message, error.message);

    } finally {
        hiddenError(message);
    }
})
import { registerLoan } from "../api/registerLoan.js";
import { getLoan } from "../api/getLoan.js";
import { buildLoanItem } from "../components/itemLoan.js";
import { showError, hiddenError, showMessage } from "../utils/showError.js"

const formLoan = document.getElementById("loan");
const message = document.getElementById("message");
const loanList = document.getElementById("loan-list");
const token = localStorage.getItem("TOKEN")

const getInputValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
}

function renderLoan(loans) {
    loanList.innerHTML = '';

    if (!loans || loans.length === 0) {
        showMessage(message, "Nenhum emprestimo encontrado.")
        return;
    }

    let statusText = "";
    loans.forEach(loan => {
        if (loan.loanStatus === "IN_PROGRESS"){
            statusText = "Em progresso";
        } else {
            statusText = "Finalizado";
        }

        const itemLoan = buildLoanItem(
            loan.id,
            loan.libraryItemName,
            loan.clientName,
            statusText,
            loan.loanDate,
            loan.dueDate,
            token
        );
        loanList.appendChild(itemLoan);
    });
}

export async function loadLoans() {
    try {
        const loans = await getLoan(token);
        renderLoan(loans);

    } catch (error) {
        showError(message, error.message);
    }
}

formLoan.addEventListener("submit", async (event) => {
    event.preventDefault();

    const libraryItemId = getInputValue("item-loan");
    const clientId = getInputValue("client-loan");
    const loanStatus = getInputValue("status");
    const loanDate = getInputValue("startDate");
    const dueDate = getInputValue("endDate");

    try {
        await registerLoan(token, libraryItemId, clientId, loanStatus, loanDate, dueDate);
        await loadLoans();

        showMessage(message, 'Emprestimo registrado com sucesso!')
        formLoan.reset();

    } catch (error) {
        showError(message, error.message);

    } finally {
        hiddenError(message);
    }
})

document.addEventListener("DOMContentLoaded", () => {
    if (!token) {
        window.location.replace("../pages/login.html");
        return;
    }
    loadLoans();
});
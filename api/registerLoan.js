export async function registerLoan(token, libraryItemId, clientId, loanStatus, loanDate, dueDate) {
    const loan = {
        libraryItemId,
        clientId,
        loanStatus,
        loanDate,
        dueDate
    };

    try {
        const response = await fetch("http://localhost:8080/loan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(loan)
        });

        if (!response.ok) throw new Error(`Erro ao cadastrar emprestimo. Status [${response.status}]`);

    } catch (error) {
        throw error;
    }
}
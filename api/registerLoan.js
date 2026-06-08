export async function registerLoan(token, libraryItemId, clientId, loanStatus, loanDate, dueDate) {
    const loan = {
        libraryItemId,
        clientId,
        loanStatus,
        loanDate,
        dueDate
    };
    const response = await fetch("http://localhost:8080/loan", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(loan)
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }
}
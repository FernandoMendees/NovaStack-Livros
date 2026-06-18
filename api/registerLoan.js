export async function registerLoan(token, libraryItemId, clientId, loanStatus, loanDate, dueDate, returnDate) {
    const loan = {
        libraryItemId,
        clientId,
        loanStatus,
        loanDate,
        dueDate,
        returnDate
    };
    const response = await fetch("https://library-api-1-1.onrender.com/loan", {
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
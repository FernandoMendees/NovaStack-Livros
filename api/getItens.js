export async function getItens(token) {

    const response = await fetch("https://library-api-1-1.onrender.com/libraryItems/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }
    const data = await response.json();

    return await data;
}

export async function itemsNotBorrowed(token) {
    const response = await fetch("https://library-api-1-1.onrender.com/select?isBorrowed=false", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }

    const data = await response.json();

    return await data;
}
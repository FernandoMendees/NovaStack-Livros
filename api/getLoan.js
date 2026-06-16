export async function getLoan(token) {
    const response = await fetch("http://localhost:8080/libraryItems/select?isBorrowed=false", {
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
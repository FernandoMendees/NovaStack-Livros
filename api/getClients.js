export async function getClients(token) {
    const response = await fetch("https://library-api-1-1.onrender.com/client", {
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
    const data = await response.json()

    return await data;
};

export async function clientNotBanned(token) {

    const response = await fetch("https://library-api-1-1.onrender.com/client/notBanned", {
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
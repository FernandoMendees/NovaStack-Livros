export async function getReservation(token) { //Reservas já cadastradas
    const response = await fetch("https://library-api-1-1.onrender.com/reservation", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if(!response.ok) {
        const errorData = response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();

    return await data;
};


export async function selectReservation(token) { // Seleção para criação de novas reservas
    const response = await fetch("https://library-api-1-1.onrender.com/libraryItems/select?isBorrowed=true", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        const errorData = response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json()

    return await data;
}
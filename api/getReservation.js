export async function getReservation(token) { //Reservas já cadastradas
    const response = await fetch("http://localhost:8080/reservation", {
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
    const response = await fetch("http://localhost:8080/libraryItems/select?isBorrowed=true", {
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
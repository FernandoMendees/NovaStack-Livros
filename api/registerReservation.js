export async function registerReservation(libraryItemId, clientId, reservationDate, reservationStatus, token) {
    const reservation = {
            libraryItemId,
            clientId,
            reservationDate,
            reservationStatus
    };

    const response = await fetch("http://localhost:8080/reservation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(reservation)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json();

    return await data;
};
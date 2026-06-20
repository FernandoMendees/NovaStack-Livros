import { loadReservation } from "../js/reservation.js";

export function buildReservationItem(id, libraryItem, client, reservationStatus, reservationDate) {
    let completeReservation = false;

    const reservationItem = document.createElement("li");
    reservationItem.classList.add("item-reservation");

    const divImage = document.createElement("div");
    divImage.classList.add("image");

    const img = document.createElement("img");
    img.src = "../../assets/iconReservation.png";
    img.alt = "Icone de reserva";

    const divData = document.createElement("div");
    divData.classList.add("data");

    const h2tilte = document.createElement("h2");
    h2tilte.textContent = libraryItem;
    h2tilte.classList.add("reservation-title");

    const spanClient = document.createElement("span")
    spanClient.textContent = client;
    spanClient.classList.add("client");

    const spanStatus = document.createElement("span");
    spanStatus.textContent = reservationStatus;
    spanStatus.classList.add("satus");

    const pReturnDate = document.createElement("p");
    pReturnDate.textContent = reservationDate;
    pReturnDate.classList.add("return-date");

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons");

    const buttonConfirm = document.createElement("button");
    buttonConfirm.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20px" height="20px"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></svg>`

    buttonConfirm.addEventListener("click", async () => {
        const reservation = {
            completeReservation: true
        };

        const response = await fetch(`https://library-api-1-1.onrender.com/reservation/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(reservation)
        })

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }  
        loadReservation();
    })

    divImage.append(img);
    divData.append(h2tilte, spanClient, spanStatus, pReturnDate);
    divButtons.append(buttonConfirm);

    reservationItem.append(divImage, divData, divButtons);

    return reservationItem;
}
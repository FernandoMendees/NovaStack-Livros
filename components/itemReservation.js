export function buildReservationItem(id, libraryItem, client, reservationStatus, reservationDate) {
    let editMode = false;

    const reservationItem = document.createElement("li");
    reservationItem.classList.add("item-reservation");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    const img = document.createElement("img");
    img.src = "../assets/iconReservation.png"

}
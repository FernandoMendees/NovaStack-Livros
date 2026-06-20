import { registerReservation } from "../api/registerReservation.js";
import { getReservation } from "../api/getReservation.js";
import { showError, hiddenError, showMessage } from "../utils/showError.js";
import { buildReservationItem } from "../components/itemReservation.js";

const formReservation = document.getElementById("form-reservation");
const selectStatus = document.getElementById("reservationStatus");
const message = document.getElementById("message");
const listReservation = document.getElementById("list-reservation");
const token = localStorage.getItem("TOKEN");

const getInputValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
};

function renderReservation(reservation) {
    listReservation.innerHTML = '';

    if (!reservation || reservation.length === 0) {
        showMessage(message, "Nenhuma reserva encontrada.");
        return;
    }

    reservation.forEach(reserve => {
        let statusText;

        if (reserve.reservationStatus === "PENDING") {
            statusText = "Pendente";
        } else if (reserve.reservationStatus === "CANCELLED") {
            statusText = "Cancelado";
        } else {
            statusText = "Completado";
        }

        const itemReservation = buildReservationItem(
            reserve.id,
            reserve.libraryItemName,
            reserve.clientName,
            statusText,
            reserve.reservationDate,
            token
        );

        listReservation.appendChild(itemReservation);
    });
}

export async function loadReservation() {
    try {
        const response = await getReservation(token);
        
        const disponiveis = response.isAvailable || [];
        const indisponiveis = response.notAvailable || [];
        const todasAsReservas = [...disponiveis, ...indisponiveis];

        renderReservation(todasAsReservas);

    } catch (error) {
        showError(message, error.message);
    }
}

formReservation.addEventListener("submit", async (event) => {
    event.preventDefault();

    const itemReservation = getInputValue("itemReservation");
    const clientReservation = getInputValue("clientReservation");
    const reservationDate = getInputValue("reservationDate");
    const reservationStatus = getInputValue("reservationStatus");

    try {
        await registerReservation(itemReservation, clientReservation, reservationDate, reservationStatus, token);
        await loadReservation();

        showMessage(message, 'Reserva registrada com sucesso!');
    } catch (e) {
        showError(message, e.message);
    } finally {
        hiddenError(message);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (!token) {
        window.location.replace("../pages/login.html");
        return;
    }
    loadReservation();
});
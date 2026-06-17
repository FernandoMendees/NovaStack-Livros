import { registerReservation } from "../api/registerReservation.js";
import { getReservation } from "../api/getReservation.js";
import { showError, hiddenError, showMessage } from "../utils/showError.js";

const formReservation = document.getElementById("form-reservation");
const selectStatus = document.getElementById("reservationStatus");
const message = document.getElementById("message");
const listReservation = document.getElementById("list-reservation");
const token = localStorage.getItem("TOKEN")

const getInputValue = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
}



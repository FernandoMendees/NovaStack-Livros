export function showError(elemnt, msg) {
    elemnt.classList.add("error");
    elemnt.classList.remove("hidden");
    elemnt.textContent = msg;
}
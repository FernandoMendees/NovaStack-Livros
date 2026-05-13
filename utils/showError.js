export function showError(msg) {
    message.classList.add("error");
    message.classList.remove("hidden");
    message.textContent = msg;
}
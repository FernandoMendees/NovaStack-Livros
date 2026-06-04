export function showError(elemnt, msg) {
    elemnt.classList.add("error");
    elemnt.classList.remove("hidden");
    elemnt.textContent = msg;
};

export const showMessage = (element, msg) => {
    element.classList.add("message")
    element.classList.remove("hidden");
    element.textContent = msg;
}

export const hiddenError = (element) => {
    setTimeout(() => {
        element.classList.add("hidden");
    }, 3000);
}
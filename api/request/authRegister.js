import { showError } from "../../utils/showError.js";
import { resetButton } from "../../utils/resetButton.js";
import { saveAuthToken } from "../token.js";
import { registerUser } from "../auth.js";

const message = document.getElementById("message");
const formRegister = document.getElementById("form-register");

formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = formRegister.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.textContent = "Cadastrando...";

    const nameUser = document.getElementById("name-register").value.trim();
    const emailUser = document.getElementById("email-register").value.trim();
    const passwordUser = document.getElementById("password-register").value.trim();

    if (!nameUser || !emailUser || !passwordUser) {
        showError(message, "Preencha todos os campos.");
        resetButton(submitBtn, "Cadastrar")
        return;
    }
    try {
        const data = await registerUser(nameUser, emailUser, passwordUser);

        if (!data.token) {
            showError("Não foi possivel fazer o cadastro.")
            return;
        }

        saveAuthToken(data.token);
        window.location.replace("../pages/dashboard/itens.html")

    } catch (error) {
        showError(message, "Não foi possivel cadastrar. Verifique o email e senha");
        return;

    } finally {
        resetButton(submitBtn, "Cadastrar")
    }
});

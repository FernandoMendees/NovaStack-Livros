import { showError } from "../utils/showError.js";
import { resetButton } from "../utils/resetButton.js";
import { saveAuthToken } from "../API/token.js";
import { loginUser } from "../API/auth.js";

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
        showError("Preencha todos os campos.");
        resetButton(submitBtn, "Cadastrar")
        return;
    }
    try {
        const data = await registerUser(nameUser, emailUser, passwordUser);

        if (!data.token) {
            showError("Não foi possivel fazer o cadastro.")
            formRegister.reset();
            return;
        }

        saveAuthToken(data.token);
        window.location.replace("../index.html")

    } catch (error) {
        showError(error.message);
        formRegister.reset();
        return;

    } finally {
        resetButton(submitBtn, "Cadastrar")
    }
    
});

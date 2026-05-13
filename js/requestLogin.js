import { showError } from "../utils/showError.js";
import { resetButton } from "../utils/resetButton.js";
import { saveAuthToken } from "../API/token.js";
import { loginUser } from "../API/auth.js";

const message = document.getElementById("message");
const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = formLogin.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.textContent = "Entrando...";

    const emailLogin = document.getElementById("email-login").value.trim()
    const passwordLogin = document.getElementById("password-login").value.trim();

    if (!emailLogin || !passwordLogin) {
        showError("Preencha todos os campos.");
        resetButton(submitBtn, "Login");
        return;
    }

    try {
        const data = await loginUser(emailLogin, passwordLogin);

        if (!data.token) {
            showError("Não foi possível fazer login.");
            formLogin.reset();
            return;
        }

        saveAuthToken(data.token);
        window.location.replace("../index.html")

    } catch (error) {
        showError(error.message);
        formLogin.reset();
        
        return;

    } finally {
        resetButton(submitBtn, "Login");
    }
    
});
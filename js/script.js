import { toggleMenu } from "../utils/menu.js";
import { showError } from "../utils/showError.js";
import { resetButton } from "../utils/resetButton.js";
import { saveAuthToken } from "../API/token.js";
import { registerUser, loginUser } from "../API/auth.js";

const btnMenu = document.getElementById("btn-menu");
const message = document.getElementById("message");

btnMenu.addEventListener("click", toggleMenu);

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
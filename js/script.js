import { toggleMenu } from "../utils/menu.js";
import { saveAuthToken } from "../API/token.js";
import { registerUser, loginUser } from "../API/auth.js";

const btnMenu = document.getElementById("btn-menu");
const formRegister = document.getElementById("form-register");

btnMenu.addEventListener("click", toggleMenu);

formRegister.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = formRegister.querySelector("button");

    submitBtn.disabled = true;
    submitBtn.textContent = "Cadastrando...";

    const nameUser = document.getElementById("name-register").value.trim();
    const emailUser = document.getElementById("email-register").value.trim();
    const passwordUser = document.getElementById("password-register").value.trim();

    if (!nameUser || !emailUser || !passwordUser) {
        alert("Preencha todos os campos.");
        return;
    }
    try {
        const data = await registerUser(nameUser, emailUser, passwordUser);

        if (!data.token) {
            alert("Erro ao fazer o cadastro.")
            return;
        }

        saveAuthToken(data.token);
        window.location.replace("../index.html")

    } catch (erro) {
        alert(`Erro: ${erro.message}`);
        return;
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Cadastrar";
    }
});
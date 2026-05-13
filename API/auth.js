export async function registerUser(name, email, password) {
    const user = {
        name,
        email,
        password
    };

    try {
        const response = await fetch("api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const data = await response.json();

        return data;

    } catch (erro) {
        console.error(`Erro ${erro}`);
    }

};

export async function loginUser(email, password) {
    const user = {
        email,
        password
    };

    try {
        const response = await fetch("api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const data = await response.json();

        return data;
        
    } catch (erro){
        console.error(`Erro ${erro}`);
    }
}
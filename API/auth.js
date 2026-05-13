export async function registerUser(name, email, password) {
    const user = {
        name,
        email,
        password
    };

    try {
        const response = await fetch("#", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) throw new Error("Algo deu errado.. Tente novamente.");

        const data = await response.json();

        return data;

    } catch (error) {
        throw error
        console.log(response.status);
    }

};

export async function loginUser(email, password) {
    const user = {
        email,
        password
    };

    try {
        const response = await fetch("#", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) throw new Error(`Erro: ${response.status}`);

        const data = await response.json();

        return data;
        
    } catch (error){
        throw error;
    }
}
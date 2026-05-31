export async function registerUser(name, email, password) {
    const user = {
        name,
        email,
        password
    };

    try {
        const response = await fetch("http://localhost:8080/auth/register", {
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
        throw error;
    }

};

export async function loginUser(email, password) {
    const user = {
        email,
        password
    };

    try {
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) throw new Error("Algo deu errado.. Tente novamente.");

        const data = await response.json();

        return data;
        
    } catch (error){
        throw error;
    }
}
export async function registerUser(name, email, password) {
    const user = {
        name,
        email,
        password
    };
    const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    };

    const data = await response.json();

    return data;
};

export async function loginUser(email, password) {
    const user = {
        email,
        password
    };
    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    };
    const data = await response.json();

    return data;
};
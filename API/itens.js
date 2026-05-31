export async function registerBook(token, name, author, releaseDate, category) {
    const book = {
        name,
        author,
        releaseDate,
        category
    };

    try {
        const response = await fetch("http://localhost:8080/book/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(book)
        });

        if (!response.ok) throw new Error("Não foi possível registrar o livro. " + response.status);

    } catch (error) {
        throw error;

    };
    
}

export async function registerMedia(token, name, author, releaseDate, mediaFormat, durationTime) {
    const media = {
        name,
        author,
        releaseDate,
        mediaFormat,
        durationTime
    };

    try {
        const response = await fetch("http://localhost:8080/media/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(media)
        });

        if (!response.ok) throw new Error("Não foi possível registrar a mídia.");

    } catch (error) {
        throw error;    
    };
    
}

export async function registerMagazine(token, name, author, releaseDate, editionNumber) {
    const magazine = {
        name,
        author,
        releaseDate,
        editionNumber
    };

    try {
        const response = await fetch("http://localhost:8080/magazine/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(magazine)
        });

        if (!response.ok) throw new Error("Não foi possível registrar o periódico.");

    } catch (error) {
        throw error;    
    };
    
}

export async function registerMonograph(token, name, author, releaseDate, institution, course) {
    const monograph = {
        name,
        author,
        releaseDate,
        institution,
        course
    };

    try {
        const response = await fetch("http://localhost:8080/monograph/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(monograph)
        });

        if (!response.ok) throw new Error("Não foi possível registrar a monografia.");

    } catch (error) {
        throw error;    
    };
    
}
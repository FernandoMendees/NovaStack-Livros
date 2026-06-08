export async function registerBook(token, name, author, releaseDate, category) {
    const book = {
        name,
        author,
        releaseDate,
        category
    };

    const response = await fetch("http://localhost:8080/book/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(book)
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }

}

export async function registerMedia(token, name, author, releaseDate, mediaFormat, durationTime) {
    const media = {
        name,
        author,
        releaseDate,
        mediaFormat,
        durationTime
    };

    const response = await fetch("http://localhost:8080/media/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(media)
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }
}

export async function registerMagazine(token, name, author, releaseDate, editionNumber) {
    const magazine = {
        name,
        author,
        releaseDate,
        editionNumber
    };

    const response = await fetch("http://localhost:8080/magazine/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(magazine)
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }
}

export async function registerMonograph(token, name, author, releaseDate, institution, course) {
    const monograph = {
        name,
        author,
        releaseDate,
        institution,
        course
    };

    const response = await fetch("http://localhost:8080/monograph/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(monograph)
    });

    if (!response.ok) {
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    }

}
export function createClient(name, type, limit) {
    return `
    <li class="client-item">
        <div class="image">
            <img src="../../assets/iconUser.png" alt="Icone de usuário">
        </div>
        <div class="data">
            <h3>${name}</h3>
            <span class="type">${type}</span>
            <p>Limite: ${limit} </p>
        </div>
    </li>
    `
}
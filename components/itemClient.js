export function createClient(name, type, code) {
    return `
    <li class="client-item">
        <div class="image">
            <img src="../../assets/iconUser.png" alt="Icone de usuário">
        </div>
        <div class="data">
            <h3 class="name">${name}</h3>
            <input type="text" class="input-name hidden" placeholder="Nome">

            <span class="type">${type}</span>
            <select type="text" class="input-type hidden" placeholder="Tipe">
                <option value="commom">Comun</option>
                <option value="special">Especial</option>
            </select>
            <span class="acess-code">${code}</span>
            <input type="number" class="input-code hidden" placeholder="Code">
        </div>
        <div class="btn-edit">
            <button class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" width="20px" heigth="20px">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                
            </button>
        </div>
    </li>
    `
}
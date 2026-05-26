export function complementBook() {
    return `
    <label for="category">Categoria</label>
    <select id="category">
        <option value="">-- Selecione --</option>
        <option value="fiction">Ficção</option>
        <option value="romance">Romance</option>
        <option value="action">Ação</option>
        <option value="academy">Academico</option>
    </select>
    `
}

export function complementMagazine() {
    return `
    <label for="editionNumber">Numero de edição</label>
    <input type="number" id="editionNumber" placeholder = "Edição">
    `
}

export function complementMedia() {
    return `
    <label for="mediaFormat">Formato da mídia</label>
    <select id="mediaFormat" required>
        <option value="">-- Selecione --</option>
        <option value="dvd">DVD</option>
        <option value="blu-ray">Blu-ray</option>
        <option value="cd">CD</option>
        <option value="ebook">eBook</option>
        <option value="audiobook">Audiobook</option>
    </select>
    <label for="duration">Duração</label>
    <input type="number" id="duration" placeholder="Ex: 5 (minutos)" required>
    `
}

export function complementMonograph() {
    return `
    <label for="institution">Insituição</label>
    <input type="text" id="institution" required placeholder="Instituição">
    <label for="course">Curso</label>
    <input type="text" id="course" placeholder="Ex: Ciências da Computção" required>
    `
}
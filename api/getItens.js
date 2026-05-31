export async function getItens(token) {
    try{
       const response = await fetch("http://localhost:8080/libraryItems/all", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
       });

       if (!response.ok) throw new Error(`Não foi possivel carregar os itens. Status [${response.status}]`);

       const data = await response.json();

       return await data;
       
    } catch (error) {
        throw error;
    }
}
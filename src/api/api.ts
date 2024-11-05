const BASE_URL = 'http://localhost:8080/veiculos';

export async function fetchVeiculos() {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar veículos');
    const contentType = response.headers.get("content-type");
    return contentType && contentType.includes("application/json")
        ? response.json()
        : response.text();
}

export async function createVeiculo(veiculo: object) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(veiculo),
        });
        const contentType = response.headers.get("content-type");
        return contentType && contentType.includes("application/json")
            ? response.json()
            : response.text();
    } catch (error) {
        console.error('Erro inesperado ao cadastrar veículo:', error);
        throw error;
    }
}


export async function updateVeiculo(id: number, veiculo: object) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(veiculo),
    });
    if (!response.ok) throw new Error('Erro ao atualizar veículo');
    const contentType = response.headers.get("content-type");
    return contentType && contentType.includes("application/json")
        ? response.json()
        : response.text();
}

export async function deleteVeiculo(id: number) {
    const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Erro ao deletar veículo');
    const contentType = response.headers.get("content-type");
    return contentType && contentType.includes("application/json")
        ? response.json()
        : response.text();
}

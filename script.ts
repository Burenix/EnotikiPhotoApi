interface Enot {
    name: string;
    weight?: number;
    year?: number;
    photo?: string;
}

function clickEnotik() {
    const name = (document.getElementById('enotik') as HTMLInputElement).value;
    const weight = Math.floor(Math.random() * 10);
    const year = Math.floor(Math.random() * 10);

    let enot: Enot = {
        name: name,
        weight: weight,
        year: year,
    }

    let infoEnot = document.getElementById('photoenot') as HTMLDivElement;
    infoEnot.innerHTML = `Вашего енота зовут ${enot.name}, он весит ${enot.weight}кг, его возраст - ${enot.year}`
}
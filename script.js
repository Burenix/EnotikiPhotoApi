function clickEnotik() {
    let name = document.getElementById('enotik').value;
    let weight = Math.floor(Math.random() * 10);
    let year = Math.floor(Math.random() * 10);
    let enot = {
        name: name,
        weight: weight,
        year: year,
    };
    let infoEnot = document.getElementById('photoenot');
    infoEnot.innerHTML = `Вашего енота зовут ${enot.name}, он весит ${enot.weight}кг, его возраст - ${enot.year}`;
}

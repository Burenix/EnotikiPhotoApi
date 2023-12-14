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
    infoEnot.innerHTML = "\u0412\u0430\u0448\u0435\u0433\u043E \u0435\u043D\u043E\u0442\u0430 \u0437\u043E\u0432\u0443\u0442 ".concat(enot.name, ", \u043E\u043D \u0432\u0435\u0441\u0438\u0442 ").concat(enot.weight, "\u043A\u0433, \u0435\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442 - ").concat(enot.year);
}

function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}


let nomeDoHeroi = "Batman";
let xpDoHeroi = 7500;


if (typeof nomeDoHeroi !== 'string' || isNaN(xpDoHeroi)) {
    console.log("Por favor, forneça uma entrada válida.");
} else {
    let nivelDoHeroi = determinarNivel(xpDoHeroi);

    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
}

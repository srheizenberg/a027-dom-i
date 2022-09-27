const frutas = ["laranja", "limão", "uva"];

for (let i = 0; i < frutas.length; i++) {
    const listadeFrutas = document.getElementById(`fruta-${[i + 1]}`)
    listadeFrutas.innerHTML = frutas[i];
}

function lista() {
    const fruta04 = document.getElementById("fruta4");
    const fruta05 = document.getElementById("fruta-4");
    frutas.push(fruta04.value);
    const fruta4 = fruta04.value;
    console.log("Você digitou", fruta4);
    fruta05.innerHTML = fruta4;
}

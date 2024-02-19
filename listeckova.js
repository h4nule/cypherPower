function listeckova(text, pocetListecku) {
    var pole = text.split(" ");
    var resPole = inicializaceTab2D(pocetListecku, 0);

    var index = 0;
    while (pole[index] != undefined) {
        for (var i = 0; i < pocetListecku; i++) {
            if (pole[index] == undefined) {
                resPole[i].push(' ');
            } else {
                resPole[i].push(pole[index]);
            }
            index++;
            vypisTabulkuPodle1Dimenze(resPole);
        }
    }
    console.log(resPole);
    vypisTabulkuPodle1Dimenze(resPole);

    // TODO: Co se píše na zadní stranu lístečků.
    var zada = new Array(pocetListecku);
    zada.forEach(element => {
        element = ''
    });
}
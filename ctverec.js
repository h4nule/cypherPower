//TODO: Je interpunkce počítaná jako znak? Nebo se tam vůbec nepíše? K předchozímu písmenu?

function ctverec(text) {
    
    text = text.replace(/ /g, '')

    //velikost tabulky
    var delka = text.length;
    var x = 1;
    while (x * x < delka) {
        x++;
    }
    if (delka < x * x) {
        for (i = 0; i < x * x - delka; i++) {
            text += "x"
        }
    }

    console.log(text);
    console.log(text.length);
    console.log(x);

    // inicializace tabulky
    var tab = inicializaceTab2D(x)

    vypisTabulkuPodle2Dimenze(tab, x)

    // vyplnění tabulky
       var curs = 0;
       for (offset = 0; offset < x / 2; offset++) {
        for (j = 0; j < x - (offset * 2) - 1; j++) {
            console.log("offset: " + offset + ", j: " + j)
            tab[offset][offset + j] += text[curs];
            curs++;
            tab[offset + j][x - 1 - offset] += text[curs];
            curs++;
            tab[x - 1 - offset][x - 1 - offset - j] += text[curs];
            curs++;
            tab[x - 1 - offset - j][offset] += text[curs];
            curs++;
        }
    }

    if (x % 2 == 1) {
        tab[Math.floor(x / 2)][Math.floor(x / 2)] = text[curs];
    }

    vypisTabulkuPodle2Dimenze(tab, x)
    
    var res = tabulDoTextu(tab, x);

    console.log(res);
    return res;
}
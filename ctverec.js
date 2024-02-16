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
    var tab = new Array(x).fill('');
    for (var i = 0; i < x; i++) {
        tab[i] = new Array(x).fill('');
    }

    vypisTabulku(tab, x)

    var curs = 0;

    // vyplnění tabulky
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
    vypisTabulku(tab, x)

    // přepsání zpět do textu
    console.log(tab);
    var res = "";
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            res += tab[i][j];
        }
    }

    console.log(res);
    return res;
}

function vypisTabulku(tab, vel) {
    for (let i = 0; i < vel; i++) {
        res = ''
        for (let j = 0; j < vel; j++) {
            res += tab[i][j] + '\t'
        }
        console.log(res)
    }
}
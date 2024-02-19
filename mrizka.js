function mrizka(text) {
    text = text.replace(/ /g, '');

    var delka = text.length;
    var x = 1;
    while (true) {
        if(x*x > delka){
            break;
        }
        if(x%2==0 && x*x == delka){
            break;
        }
        x++;
    }
    if (delka < x * x) {
        for (i = 0; i < x * x - delka; i++) {
            text += "x";
        }
    }

    var tabText = inicializaceTab2D(x);
    var tabMrizka = vytvoreniMrizky(x);

    var curs = 0
    for (let i = 0; i < 4; i++) {
        tabText = propsaniMrizky(text, tabText, tabMrizka, x, curs);
        tabMrizka = rotaceTabulky(tabMrizka, x);
        curs += x + 1;
        vypisTabulkuPodle1Dimenze(tabText);
    }

    if(x%2==1){
        var n = Math.floor(x/2);
        tabText[n][n] = 'x';
    }

    console.log(tabText);
    vypisTabulkuPodle1Dimenze(tabText);
    vypisTabulkuPodle1Dimenze(tabMrizka);

}

function vytvoreniMrizky(x) {
    var tab = inicializaceTab2D(x);
    for (offset = 0; offset < x / 2; offset++) {
        for (j = 0; j < x - (offset * 2) - 1; j++) {
            var rand = Math.floor(Math.random() * 4);
            switch (rand) {
                case 0:
                    tab[offset][offset + j] = 'X';
                    break;
                case 1:
                    tab[offset + j][x - 1 - offset] = 'X';
                    break;
                case 2:
                    tab[x - 1 - offset][x - 1 - offset - j] = 'X';
                    break;
                case 3:
                    tab[x - 1 - offset - j][offset] = 'X';
                    break;
            }
        }
    }
    return tab;
}

function propsaniMrizky(text, tabText, tabMrizka, x, curs) {
    for (i = 0; i < x; i++) {
        for (j = 0; j < x; j++) {
            if (tabMrizka[j][i] == 'X') {
                tabText[j][i] = text[curs];
                curs++;
            }
        }
    }
    return tabText;
}

function rotaceTabulky(tab, x) {
    for (var i = 0; i < x / 2; i++) {
        for (var j = i; j < x - i - 1; j++) {
            var tmp = tab[i][j];
            tab[i][j] = tab[j][x - i - 1];
            tab[j][x - i - 1] = tab[x - i - 1][x - j - 1];
            tab[x - i - 1][x - j - 1] = tab[x - j - 1][i];
            tab[x - j - 1][i] = tmp;
        }
    }
    vypisTabulkuPodle1Dimenze(tab)
    return tab;
}

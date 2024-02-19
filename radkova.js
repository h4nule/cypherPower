function radkova(text, x, y, vzor) {
    // vroz je ve formě [0,1,2,3,4] který symbolizuje pořadí řádků.
    var tab = inicializaceTab2D(x, y);

    // TODO: Doplňování x? Asi spíš přímo na stránce podle potřeby uživatele...

    text = text.replace(/ /g, '')

    var tab = vyplnTab(text, tab, x, y);

    console.log(tab);
    vypisTabulkuPodle1Dimenze(tab, x, y);

    var resTab = inicializaceTab2D(x, y);
    for (i = 0; i < x; i++) {
        resTab[i] = tab[vzor[i]];
    }

    console.log(resTab);
    vypisTabulkuPodle1Dimenze(resTab, x, y);

    var res = tabulDoTextuPodle1D(resTab, x, y);
    console.log(res);
}

function vyplnTab(text, tab, x, y) {
    curs = 0;
    for (i = 0; i < y; i++) {
        for (j = 0; j < x; j++) {
            tab[j][i] = text[curs];
            curs++;
        }
    }
    return tab;
}

function prohodElementy(tab, index1, index2) {
    var save = tab[index1];
    tab[index1] = tab[index2];
    tab[index2] = tab[save];
    return tab;
}
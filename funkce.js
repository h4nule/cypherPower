const small_abc = 'abcdefghijklmnopqrstuvwxyz';
const big_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const diakritika = 'áčďéěíňóřšťúůýž';
const bezDiakritiky = 'acdeeinorstuuyz';
const iakritikaVelka = 'ÁČĎÉĚÍŇŠŤÚŮÝŽ';
const bezDiakritikyVelka = 'ACDEEINSTUUYZ';

function dediakritizace(text) {
    var delka = text.length;
    for (let i = 0; i < delka; i++) {
        if(diakritika.includes(text[i])){
            text = replaceAt(text, i, bezDiakritiky[diakritika.search(text[i])])
            console.log(text[i]);
        }

        if(diakritikaVelka.includes(text[i])){
            text = replaceAt(text, i, bezDiakritikyVelka[diakritikaVelka.search(text[i])])
            console.log(text[i]);
        }
    }
    console.log(text);

    return text;
}

function replaceAt(text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + 1);
}

function vypisTabulku(tab, x, y) {
    if(y==undefined){
        y = x;
    }
    for (let i = 0; i < x; i++) {
        res = ''
        for (let j = 0; j < y; j++) {
            res += tab[i][j] + '\t'
        }
        console.log(res)
    }
}

function tabulDoTextu(tab, x, y){
    if(y==undefined){
        y = x;
    }
    var res = "";
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            res += tab[i][j];
        }
    }

    return res;
}

function inicializaceTab2D(x, y) {
    if(y==undefined){
        y = x;
    }

    var tab = new Array(x).fill('');
    for (var i = 0; i < x; i++) {
        tab[i] = new Array(x).fill('');
    }

    return tab;
}
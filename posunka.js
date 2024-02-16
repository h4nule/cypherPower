small_abc = 'abcdefghijklmnopqrstuvwxyz';
big_abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
diakritika = 'áčďéěíňóřšťúůýž';
bezDiakritiky = 'acdeeinorstuuyz';
diakritikaVelka = 'ÁČĎÉĚÍŇŠŤÚŮÝŽ';
bezDiakritikyVelka = 'ACDEEINSTUUYZ';

function posunka(text, posun, smerVpravo) {
    var delka = text.length;
    res = '';

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

    if (smerVpravo) {
        res = posunVpravo(text, posun, delka);
    } else {
        res = posunVlevo(text, posun, delka);
    }

    console.log(res);
}

function posunVpravo(text, posun, delka){
    for (var i = 0; i < delka; i++) {
        element = text[i];
        if (small_abc.includes(element)) {
            index = small_abc.search(element);
            if (index + posun < 26) {
                res += small_abc[index + posun];
            } else {
                res += small_abc[0 + (posun - (26 - index))];
            }
        } else if (big_abc.includes(element)) {
            index = big_abc.search(element);
            if (index + posun < 26) {
                res += big_abc[index + posun];
            } else {
                res += big_abc[0 + (posun - (26 - index))];
            }
        } else {
            res += element;
        }
    }

    return res;
}

function posunVlevo(text, posun, delka){
    for (var i = 0; i < delka; i++) {
        element = text[i];
        if (small_abc.includes(element)) {
            index = small_abc.search(element);
            if (index - posun > -1) {
                res += small_abc[index - posun];
            } else {
                res += small_abc[26 - (posun - index)];
            }
        } else if (big_abc.includes(element)) {
            index = big_abc.search(element);
            if (index - posun > -1) {
                res += big_abc[index - posun];
            } else {
                res += big_abc[26 - (posun - index)];
            }
        } else {
            res += element;
        }
    }

    return res;
}

function replaceAt(text, index, replacement) {
    return text.substr(0, index) + replacement + text.substr(index + 1);
}
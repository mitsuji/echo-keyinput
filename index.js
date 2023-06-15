
window.addEventListener("load",function(e){
    let keyBuff = [];
    let currentKeyTimeout;
    let currentKanaTimeout;
    
    let elemShowKana = document.getElementsByName("showKana")[0];
    document.getElementById("currentKana").style.visibility =
        elemShowKana.checked ? "visible" : "hidden";
    elemShowKana.addEventListener("change",function(event){
        document.getElementById("currentKana").style.visibility
            = event.target.checked ? "visible" : "hidden";
    });

    document.addEventListener("keypress",function(event){
        let key = event.key;
        if (key.length == 1) {
            setCurrentKey(key);
            let kcp = key.codePointAt(0);
            if ('a'.codePointAt(0) <= kcp && kcp <= 'z'.codePointAt(0)) {
                visitKeyBuff(key);
            } else {
                keyBuff = [];
            }
        }
    });

    function visitKeyBuff(key) {
        keyBuff.push(key);
        let kana = keyToKana(keyBuff);
        if (typeof kana !== "undefined") {
            setCurrentKana(kana);
            keyBuff = [];
        }
    }

    function setCurrentKey(key) {
        let elem = document.getElementById("currentKey");
        if (typeof currentKeyTimeout !== "undefined") {
            window.clearTimeout(currentKeyTimeout);
        }
        currentKeyTimeout = window.setTimeout(function(){
	    elem.innerText = "\u00A0";
        },500);
        elem.innerText = key;
    }

    function setCurrentKana(kana) {
        let elem = document.getElementById("currentKana");
        if (typeof currentKanaTimeout !== "undefined") {
            window.clearTimeout(currentKanaTimeout);
        }
        currentKanaTimeout = window.setTimeout(function(){
	    elem.innerText = "\u00A0";
        },500);
        elem.innerText = kana;
    }
});

function keyToKana (keyBuff) {

    let kana;
    if(keyBuff.length >= 4) {
        let c1 = keyBuff [keyBuff.length-4];
        let c2 = keyBuff [keyBuff.length-3];
        let c3 = keyBuff [keyBuff.length-2];
        let c4 = keyBuff [keyBuff.length-1];
        if (c1 == c2) {
            let k = kana3(c2,c3,c4);
            if(typeof k !== "undefined"){
                if (c2 == 'v') {
                    kana = "ッ" + k;
                } else {
                    kana = "っ" + k;
                }
            }
        }
    }
    if(typeof kana === "undefined" && keyBuff.length >= 3) {
        let c1 = keyBuff [keyBuff.length-3];
        let c2 = keyBuff [keyBuff.length-2];
        let c3 = keyBuff [keyBuff.length-1];
        kana = kana3(c1,c2,c3);
        if (c1 == c2) {
            let k = kana2(c2,c3);
            if(typeof k !== "undefined"){
                if (c2 == 'v') {
                    kana = "ッ" + k;
                } else {
                    kana = "っ" + k;
                }
            }
        }
    } 
    if(typeof kana === "undefined" && keyBuff.length >= 2) {
        let c1 = keyBuff [keyBuff.length-2];
        let c2 = keyBuff [keyBuff.length-1];
        kana = kana2(c1,c2);
    }
    if(typeof kana === "undefined" && keyBuff.length >= 1) {
        let c = keyBuff [keyBuff.length-1];
        kana = csnToKana(c,'あ','い','う','え','お');
    }
    return kana;


    function kana3(c1,c2,c3) {
        let kana;
        if(c2 == 'h') {
            if (c1 == 'c') kana = csnToKana(c3,'ちゃ','ち','ちゅ','ちぇ','ちょ');
            if (c1 == 'd') kana = csnToKana(c3,'でゃ','でぃ','でゅ','でぇ','でょ');
            if (c1 == 's') kana = csnToKana(c3,'しゃ','し','しゅ','しぇ','しょ');
            if (c1 == 't') kana = csnToKana(c3,'てゃ','てぃ','てゅ','てぇ','てょ');
            if (c1 == 'w') kana = csnToKana(c3,'うぁ','うぃ','う','うぇ','うぉ');
        }
        if (c2 == 's') {
            if (c1 == 't' && c3 == 'u') kana = 'つ';
        }
        if (c2 == 'w') {
            if (c1 == 'k' && c3 == 'a') kana = 'くぁ';
            if (c1 == 'g') kana = csnToKana(c3,'ぐぁ','ぐぃ','ぐぅ','ぐぇ','ぐぉ');
        }
        if (c2 == 'y') {
            if (c1 == 'b') kana = csnToKana(c3,'びゃ','びぃ','びゅ','びぇ','びょ');
            if (c1 == 'c') kana = csnToKana(c3,'ちゃ','ちぃ','ちゅ','ちぇ','ちょ');
            if (c1 == 'd') kana = csnToKana(c3,'ぢゃ','ぢぃ','ぢゅ','ぢぇ','ぢょ');
            if (c1 == 'f') kana = csnToKana(c3,'ふゃ','ふぃ','ふゅ','ふぇ','ふょ');
            if (c1 == 'g') kana = csnToKana(c3,'ぎゃ','ぎぃ','ぎゅ','ぎぇ','ぎょ');
            if (c1 == 'h') kana = csnToKana(c3,'ひゃ','ひぃ','ひゅ','ひぇ','ひょ');
            if (c1 == 'j') kana = csnToKana(c3,'じゃ','じぃ','じゅ','じぇ','じょ');
            if (c1 == 'k') kana = csnToKana(c3,'きゃ','きぃ','きゅ','きぇ','きょ');
            if (c1 == 'l') kana = csnToKana(c3,'ゃ','ぃ','ゅ','ぇ','ょ');
            if (c1 == 'm') kana = csnToKana(c3,'みゃ','みぃ','みゅ','みぇ','みょ');
            if (c1 == 'n') kana = csnToKana(c3,'にゃ','にぃ','にゅ','にぇ','にょ');
            if (c1 == 'p') kana = csnToKana(c3,'ぴゃ','ぴぃ','ぴゅ','ぴぇ','ぴょ');
            if (c1 == 'q') kana = csnToKana(c3,'くゃ','くぃ','くゅ','くぇ','くょ');
            if (c1 == 'r') kana = csnToKana(c3,'りゃ','りぃ','りゅ','りぇ','りょ');
            if (c1 == 's') kana = csnToKana(c3,'しゃ','しぃ','しゅ','しぇ','しょ');
            if (c1 == 't') kana = csnToKana(c3,'ちゃ','ちぃ','ちゅ','ちぇ','ちょ');
            if (c1 == 'v') kana = csnToKana(c3,'ヴャ','ヴィ','ヴュ','ヴェ','ヴョ');
            if (c1 == 'w') {
                if (c3 == 'i') kana = 'ゐ';
                if (c3 == 'e') kana = 'ゑ';
            }
            if (c1 == 'x') kana = csnToKana(c3,'ゃ','ぃ','ゅ','ぇ','ょ');
            if (c1 == 'z') kana = csnToKana(c3,'じゃ','じぃ','じゅ','じぇ','じょ');
        }
        return kana;
    }

    function kana2(c1,c2) {
        let kana;
        if (c1 == 'b') kana = csnToKana(c2,'ば','び','ぶ','べ','ぼ');
        if (c1 == 'c') kana = csnToKana(c2,'か','し','く','せ','こ');
        if (c1 == 'd') kana = csnToKana(c2,'だ','ぢ','づ','で','ど');
        if (c1 == 'f') kana = csnToKana(c2,'ふぁ','ふぃ','ふ','ふぇ','ふぉ');
        if (c1 == 'g') kana = csnToKana(c2,'が','ぎ','ぐ','げ','ご');
        if (c1 == 'h') kana = csnToKana(c2,'は','ひ','ふ','へ','ほ');
        if (c1 == 'j') kana = csnToKana(c2,'じゃ','じ','じゅ','じぇ','じょ');
        if (c1 == 'k') kana = csnToKana(c2,'か','き','く','け','こ');
        if (c1 == 'l') kana = csnToKana(c2,'ぁ','ぃ','ぅ','ぇ','ぉ');
        if (c1 == 'm') kana = csnToKana(c2,'ま','み','む','め','も');
        if (c1 == 'n') {
            kana = csnToKana(c2,'な','に','ぬ','ね','の');
            if (c2 == 'n') kana = 'ん';
        }
        if (c1 == 'p') kana = csnToKana(c2,'ぱ','ぴ','ぷ','ぺ','ぽ');
        if (c1 == 'q') kana = csnToKana(c2,'くぁ','くぃ','く','くぇ','くぉ');
        if (c1 == 'r') kana = csnToKana(c2,'ら','り','る','れ','ろ');
        if (c1 == 's') kana = csnToKana(c2,'さ','し','す','せ','そ');
        if (c1 == 't') kana = csnToKana(c2,'た','ち','つ','て','と');
        if (c1 == 'v') kana = csnToKana(c2,'ヴァ','ヴィ','ヴ','ヴェ','ヴォ');
        if (c1 == 'w') kana = csnToKana(c2,'わ','うぃ','う','うぇ','を');
//        if (c1 == 'w') kana = csnToKana(c2,'わ','ゐ','う','ゑ','を');
        if (c1 == 'x') kana = csnToKana(c2,'ぁ','ぃ','ぅ','ぇ','ぉ');
        if (c1 == 'y') kana = csnToKana(c2,'や','い','ゆ','いぇ','よ');
        if (c1 == 'z') kana = csnToKana(c2,'ざ','じ','ず','ぜ','ぞ');
        return kana;
    }

    function csnToKana (csn,ka,ki,ku,ke,ko) {
        let kana;
        if (csn == 'a') kana = ka;
        if (csn == 'i') kana = ki;
        if (csn == 'u') kana = ku;
        if (csn == 'e') kana = ke;
        if (csn == 'o') kana = ko;
        return kana;
    }

}


window.addEventListener("load",function(e){
    let keyBuff = [];
    let currentKeyTimeout;
    let currentKanaTimeout;

    document.addEventListener("keypress",function(event){
        setCurrentKey(event.key);
        visitKeyBuff(event);
    });

    function visitKeyBuff(event) {
        keyBuff.push(event.key);
        let kana = keyToKana(keyBuff);
        if (typeof kana !== "undefined") {
            setCurrentKana(kana);
            keyBuff = [];
        }
        console.log(keyBuff);
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

    function csnToKana (csn,ka,ki,ku,ke,ko) {
        let kana;
        if (csn == 'a') kana = ka;
        if (csn == 'i') kana = ki;
        if (csn == 'u') kana = ku;
        if (csn == 'e') kana = ke;
        if (csn == 'o') kana = ko;
        return kana;
    }

    let kana;
    if(keyBuff.length >= 3) {
        let c1 = keyBuff [keyBuff.length-3];
        let c2 = keyBuff [keyBuff.length-2];
        let c3 = keyBuff [keyBuff.length-1];
        if (c1 == 't' && c2 == 's' && c3 == 'u') {
            kana = 'つ';
        }

        if (c1 == 'c' && c2 == 'h') kana = csnToKana(c3,'ちゃ','ち','ちゅ','ちぇ','ちょ');
        if (c1 == 'd' && c2 == 'h') kana = csnToKana(c3,'でゃ','でぃ','でゅ','でぇ','でょ');
        if (c1 == 's' && c2 == 'h') kana = csnToKana(c3,'しゃ','し','しゅ','しぇ','しょ');
        if (c1 == 't' && c2 == 'h') kana = csnToKana(c3,'てゃ','てぃ','てゅ','てぇ','てょ');
        if (c1 == 'w' && c2 == 'h') kana = csnToKana(c3,'うぁ','うぃ','う','うぇ','うぉ');
        if (c1 == 'b' && c2 == 'y') kana = csnToKana(c3,'びゃ','びぃ','びゅ','びぇ','びょ');
        if (c1 == 'c' && c2 == 'y') kana = csnToKana(c3,'ちゃ','ちぃ','ちゅ','ちぇ','ちょ');
        if (c1 == 'd' && c2 == 'y') kana = csnToKana(c3,'ぢゃ','ぢぃ','ぢゅ','ぢぇ','ぢょ');
        if (c1 == 'f' && c2 == 'y') kana = csnToKana(c3,'ふゃ','ふぃ','ふゅ','ふぇ','ふょ');
        if (c1 == 'g' && c2 == 'y') kana = csnToKana(c3,'ぎゃ','ぎぃ','ぎゅ','ぎぇ','ぎょ');
        if (c1 == 'h' && c2 == 'y') kana = csnToKana(c3,'ひゃ','ひぃ','ひゅ','ひぇ','ひょ');
        if (c1 == 'j' && c2 == 'y') kana = csnToKana(c3,'じゃ','じぃ','じゅ','じぇ','じょ');
        if (c1 == 'k' && c2 == 'y') kana = csnToKana(c3,'きゃ','きぃ','きゅ','きぇ','きょ');
        if (c1 == 'l' && c2 == 'y') kana = csnToKana(c3,'ゃ','ぃ','ゅ','ぇ','ょ');
        if (c1 == 'm' && c2 == 'y') kana = csnToKana(c3,'みゃ','みぃ','みゅ','みぇ','みょ');
        if (c1 == 'n' && c2 == 'y') kana = csnToKana(c3,'にゃ','にぃ','にゅ','にぇ','にょ');
        if (c1 == 'p' && c2 == 'y') kana = csnToKana(c3,'ぴゃ','ぴぃ','ぴゅ','ぴぇ','ぴょ');
        if (c1 == 'r' && c2 == 'y') kana = csnToKana(c3,'りゃ','りぃ','りゅ','りぇ','りょ');
        if (c1 == 's' && c2 == 'y') kana = csnToKana(c3,'しゃ','しぃ','しゅ','しぇ','しょ');
        if (c1 == 't' && c2 == 'y') kana = csnToKana(c3,'ちゃ','ちぃ','ちゅ','ちぇ','ちょ');
        if (c1 == 'v' && c2 == 'y') kana = csnToKana(c3,'ヴャ','ヴィ','ヴュ','ヴェ','ヴョ');
        if (c1 == 'w' && c2 == 'y') {
            if (c3 == 'i') kana = 'ゐ';
            if (c3 == 'e') kana = 'ゑ';
        }
        if (c1 == 'x' && c2 == 'y') kana = csnToKana(c3,'ゃ','ぃ','ゅ','ぇ','ょ');
        if (c1 == 'z' && c2 == 'y') kana = csnToKana(c3,'じゃ','じぃ','じゅ','じぇ','じょ');

        if (c1 == 'b' && c2 == 'b') {
            if (c3 == 'a') kana = 'っば';
            if (c3 == 'i') kana = 'っび';
            if (c3 == 'u') kana = 'っぶ';
            if (c3 == 'e') kana = 'っべ';
            if (c3 == 'o') kana = 'っぼ';
        }
        if (c1 == 'c' && c2 == 'c') {
            if (c3 == 'a') kana = 'っか';
            if (c3 == 'i') kana = 'っし';
            if (c3 == 'u') kana = 'っく';
            if (c3 == 'e') kana = 'っせ';
            if (c3 == 'o') kana = 'っこ';
        }
        if (c1 == 'd' && c2 == 'd') {
            if (c3 == 'a') kana = 'っだ';
            if (c3 == 'i') kana = 'っぢ';
            if (c3 == 'u') kana = 'っづ';
            if (c3 == 'e') kana = 'っで';
            if (c3 == 'o') kana = 'っど';
        }
        if (c1 == 'f' && c2 == 'f') {
            if (c3 == 'a') kana = 'っふぁ';
            if (c3 == 'i') kana = 'っふぃ';
            if (c3 == 'u') kana = 'っふ';
            if (c3 == 'e') kana = 'っふぇ';
            if (c3 == 'o') kana = 'っふぉ';
        }
        if (c1 == 'g' && c2 == 'g') {
            if (c3 == 'a') kana = 'っが';
            if (c3 == 'i') kana = 'っぎ';
            if (c3 == 'u') kana = 'っぐ';
            if (c3 == 'e') kana = 'っげ';
            if (c3 == 'o') kana = 'っご';
        }
        if (c1 == 'h' && c2 == 'h') {
            if (c3 == 'a') kana = 'っは';
            if (c3 == 'i') kana = 'っひ';
            if (c3 == 'u') kana = 'っふ';
            if (c3 == 'e') kana = 'っへ';
            if (c3 == 'o') kana = 'っほ';
        }

        if (c1 == 'j' && c2 == 'j') {
            if (c3 == 'a') kana = 'っじゃ';
            if (c3 == 'i') kana = 'っじ';
            if (c3 == 'u') kana = 'っじゅ';
            if (c3 == 'e') kana = 'っじぇ';
            if (c3 == 'o') kana = 'っじょ';
        }
        if (c1 == 'k' && c2 == 'k') {
            if (c3 == 'a') kana = 'っか';
            if (c3 == 'i') kana = 'っき';
            if (c3 == 'u') kana = 'っく';
            if (c3 == 'e') kana = 'っけ';
            if (c3 == 'o') kana = 'っこ';
        }
        if (c1 == 'l' && c2 == 'l') {
            if (c3 == 'a') kana = 'っぁ';
            if (c3 == 'i') kana = 'っぃ';
            if (c3 == 'u') kana = 'っぅ';
            if (c3 == 'e') kana = 'っぇ';
            if (c3 == 'o') kana = 'っぉ';
        }
        if (c1 == 'm' && c2 == 'm') {
            if (c3 == 'a') kana = 'っま';
            if (c3 == 'i') kana = 'っみ';
            if (c3 == 'u') kana = 'っむ';
            if (c3 == 'e') kana = 'っめ';
            if (c3 == 'o') kana = 'っも';
        }
        if (c1 == 'p' && c2 == 'p') {
            if (c3 == 'a') kana = 'っぱ';
            if (c3 == 'i') kana = 'っぴ';
            if (c3 == 'u') kana = 'っぷ';
            if (c3 == 'e') kana = 'っぺ';
            if (c3 == 'o') kana = 'っぽ';
        }
        if (c1 == 'q' && c2 == 'q') {
            if (c3 == 'a') kana = 'っくぁ';
            if (c3 == 'i') kana = 'っくぃ';
            if (c3 == 'u') kana = 'っく';
            if (c3 == 'e') kana = 'っくぇ';
            if (c3 == 'o') kana = 'っくぉ';
        }
        if (c1 == 'r' && c2 == 'r') {
            if (c3 == 'a') kana = 'っら';
            if (c3 == 'i') kana = 'っり';
            if (c3 == 'u') kana = 'っる';
            if (c3 == 'e') kana = 'っれ';
            if (c3 == 'o') kana = 'っろ';
        }
        if (c1 == 's' && c2 == 's') {
            if (c3 == 'a') kana = 'っさ';
            if (c3 == 'i') kana = 'っし';
            if (c3 == 'u') kana = 'っす';
            if (c3 == 'e') kana = 'っせ';
            if (c3 == 'o') kana = 'っそ';
        }
        if (c1 == 't' && c2 == 't') {
            if (c3 == 'a') kana = 'った';
            if (c3 == 'i') kana = 'っち';
            if (c3 == 'u') kana = 'っつ';
            if (c3 == 'e') kana = 'って';
            if (c3 == 'o') kana = 'っと';
        }
        if (c1 == 'v' && c2 == 'v') {
            if (c3 == 'a') kana = 'ッヴァ';
            if (c3 == 'i') kana = 'ッヴィ';
            if (c3 == 'u') kana = 'ッヴ';
            if (c3 == 'e') kana = 'ッヴェ';
            if (c3 == 'o') kana = 'ッヴォ';
        }
        if (c1 == 'w' && c2 == 'w') {
            if (c3 == 'a') kana = 'っわ';
            if (c3 == 'i') kana = 'っうぃ';
            if (c3 == 'u') kana = 'っう';
            if (c3 == 'e') kana = 'っうぇ';
            if (c3 == 'o') kana = 'っを';
        }
        if (c1 == 'x' && c2 == 'x') {
            if (c3 == 'a') kana = 'っぁ';
            if (c3 == 'i') kana = 'っぃ';
            if (c3 == 'u') kana = 'っぅ';
            if (c3 == 'e') kana = 'っぇ';
            if (c3 == 'o') kana = 'っぉ';
        }
        if (c1 == 'y' && c2 == 'y') {
            if (c3 == 'a') kana = 'っや';
            if (c3 == 'i') kana = 'っい';
            if (c3 == 'u') kana = 'っゆ';
            if (c3 == 'e') kana = 'っいぇ';
            if (c3 == 'o') kana = 'っよ';
        }
        if (c1 == 'z' && c2 == 'z') {
            if (c3 == 'a') kana = 'っざ';
            if (c3 == 'i') kana = 'っじ';
            if (c3 == 'u') kana = 'っず';
            if (c3 == 'e') kana = 'っぜ';
            if (c3 == 'o') kana = 'っぞ';
        }
    } 
    if(typeof kana === "undefined" && keyBuff.length >= 2) {
        let c1 = keyBuff [keyBuff.length-2];
        let c2 = keyBuff [keyBuff.length-1];
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
    }
    if(typeof kana === "undefined" && keyBuff.length >= 1) {
        let c = keyBuff [keyBuff.length-1];
        kana = csnToKana(c,'あ','い','う','え','お');
    }
    return kana;
}

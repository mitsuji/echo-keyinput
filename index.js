
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
    let kana;
    if(keyBuff.length >= 3) {
        let c1 = keyBuff [keyBuff.length-3];
        let c2 = keyBuff [keyBuff.length-2];
        let c3 = keyBuff [keyBuff.length-1];
        if (c1 == 't' && c2 == 's' && c3 == 'u') {
            kana = 'つ';
        }
        if (c1 == 's' && c2 == 'h') {
            if (c3 == 'a') kana = 'しゃ';
            if (c3 == 'i') kana = 'し';
            if (c3 == 'u') kana = 'しゅ';
            if (c3 == 'e') kana = 'しぇ';
            if (c3 == 'o') kana = 'しょ';
        }
        if (c1 == 'c' && c2 == 'h') {
            if (c3 == 'a') kana = 'ちゃ';
            if (c3 == 'i') kana = 'ち';
            if (c3 == 'u') kana = 'ちゅ';
            if (c3 == 'e') kana = 'ちぇ';
            if (c3 == 'o') kana = 'ちょ';
        }
        if (c1 == 'k' && c2 == 'y') {
            if (c3 == 'a') kana = 'きゃ';
            if (c3 == 'i') kana = 'きぃ';
            if (c3 == 'u') kana = 'きゅ';
            if (c3 == 'e') kana = 'きぇ';
            if (c3 == 'o') kana = 'きょ';
        }
        if (c1 == 's' && c2 == 'y') {
            if (c3 == 'a') kana = 'しゃ';
            if (c3 == 'i') kana = 'しぃ';
            if (c3 == 'u') kana = 'しゅ';
            if (c3 == 'e') kana = 'しぇ';
            if (c3 == 'o') kana = 'しょ';
        }
        if ((c1 == 't' || c1 == 'c' ) && c2 == 'y') {
            if (c3 == 'a') kana = 'ちゃ';
            if (c3 == 'i') kana = 'ちぃ';
            if (c3 == 'u') kana = 'ちゅ';
            if (c3 == 'e') kana = 'ちぇ';
            if (c3 == 'o') kana = 'ちょ';
        }
        if (c1 == 'n' && c2 == 'y') {
            if (c3 == 'a') kana = 'にゃ';
            if (c3 == 'i') kana = 'にぃ';
            if (c3 == 'u') kana = 'にゅ';
            if (c3 == 'e') kana = 'にぇ';
            if (c3 == 'o') kana = 'にょ';
        }
        if (c1 == 'h' && c2 == 'y') {
            if (c3 == 'a') kana = 'ひゃ';
            if (c3 == 'i') kana = 'ひぃ';
            if (c3 == 'u') kana = 'ひゅ';
            if (c3 == 'e') kana = 'ひぇ';
            if (c3 == 'o') kana = 'ひょ';
        }
        if (c1 == 'm' && c2 == 'y') {
            if (c3 == 'a') kana = 'みゃ';
            if (c3 == 'i') kana = 'みぃ';
            if (c3 == 'u') kana = 'みゅ';
            if (c3 == 'e') kana = 'みぇ';
            if (c3 == 'o') kana = 'みょ';
        }
        if (c1 == 'r' && c2 == 'y') {
            if (c3 == 'a') kana = 'りゃ';
            if (c3 == 'i') kana = 'りぃ';
            if (c3 == 'u') kana = 'りゅ';
            if (c3 == 'e') kana = 'りぇ';
            if (c3 == 'o') kana = 'りょ';
        }
        if (c1 == 'g' && c2 == 'y') {
            if (c3 == 'a') kana = 'ぎゃ';
            if (c3 == 'i') kana = 'ぎぃ';
            if (c3 == 'u') kana = 'ぎゅ';
            if (c3 == 'e') kana = 'ぎぇ';
            if (c3 == 'o') kana = 'ぎょ';
        }
        if ((c1 == 'z' || c1 == 'j') && c2 == 'y') {
            if (c3 == 'a') kana = 'じゃ';
            if (c3 == 'i') kana = 'じぃ';
            if (c3 == 'u') kana = 'じゅ';
            if (c3 == 'e') kana = 'じぇ';
            if (c3 == 'o') kana = 'じょ';
        }
        if (c1 == 'd' && c2 == 'y') {
            if (c3 == 'a') kana = 'ぢゃ';
            if (c3 == 'i') kana = 'ぢぃ';
            if (c3 == 'u') kana = 'ぢゅ';
            if (c3 == 'e') kana = 'ぢぇ';
            if (c3 == 'o') kana = 'ぢょ';
        }
        if (c1 == 'b' && c2 == 'y') {
            if (c3 == 'a') kana = 'びゃ';
            if (c3 == 'i') kana = 'びぃ';
            if (c3 == 'u') kana = 'びゅ';
            if (c3 == 'e') kana = 'びぇ';
            if (c3 == 'o') kana = 'びょ';
        }
        if (c1 == 'p' && c2 == 'y') {
            if (c3 == 'a') kana = 'ぴゃ';
            if (c3 == 'i') kana = 'ぴぃ';
            if (c3 == 'u') kana = 'ぴゅ';
            if (c3 == 'e') kana = 'ぴぇ';
            if (c3 == 'o') kana = 'ぴょ';
        }
        if (c1 == 'k' && c2 == 'k') {
            if (c3 == 'a') kana = 'っか';
            if (c3 == 'i') kana = 'っき';
            if (c3 == 'u') kana = 'っく';
            if (c3 == 'e') kana = 'っけ';
            if (c3 == 'o') kana = 'っこ';
        }
        if (c1 == 'g' && c2 == 'g') {
            if (c3 == 'a') kana = 'っが';
            if (c3 == 'i') kana = 'っぎ';
            if (c3 == 'u') kana = 'っぐ';
            if (c3 == 'e') kana = 'っげ';
            if (c3 == 'o') kana = 'っご';
        }
        if (c1 == 's' && c2 == 's') {
            if (c3 == 'a') kana = 'っさ';
            if (c3 == 'i') kana = 'っし';
            if (c3 == 'u') kana = 'っす';
            if (c3 == 'e') kana = 'っせ';
            if (c3 == 'o') kana = 'っそ';
        }
        if (c1 == 'z' && c2 == 'z') {
            if (c3 == 'a') kana = 'っざ';
            if (c3 == 'i') kana = 'っじ';
            if (c3 == 'u') kana = 'っず';
            if (c3 == 'e') kana = 'っぜ';
            if (c3 == 'o') kana = 'っぞ';
        }
        if (c1 == 't' && c2 == 't') {
            if (c3 == 'a') kana = 'った';
            if (c3 == 'i') kana = 'っち';
            if (c3 == 'u') kana = 'っつ';
            if (c3 == 'e') kana = 'って';
            if (c3 == 'o') kana = 'っと';
        }
        if (c1 == 'd' && c2 == 'd') {
            if (c3 == 'a') kana = 'っだ';
            if (c3 == 'i') kana = 'っぢ';
            if (c3 == 'u') kana = 'っづ';
            if (c3 == 'e') kana = 'っで';
            if (c3 == 'o') kana = 'っど';
        }
        if (c1 == 'h' && c2 == 'h') {
            if (c3 == 'a') kana = 'っは';
            if (c3 == 'i') kana = 'っひ';
            if (c3 == 'u') kana = 'っふ';
            if (c3 == 'e') kana = 'っへ';
            if (c3 == 'o') kana = 'っほ';
        }
        if (c1 == 'b' && c2 == 'b') {
            if (c3 == 'a') kana = 'っば';
            if (c3 == 'i') kana = 'っび';
            if (c3 == 'u') kana = 'っぶ';
            if (c3 == 'e') kana = 'っべ';
            if (c3 == 'o') kana = 'っぼ';
        }
        if (c1 == 'p' && c2 == 'p') {
            if (c3 == 'a') kana = 'っぱ';
            if (c3 == 'i') kana = 'っぴ';
            if (c3 == 'u') kana = 'っぷ';
            if (c3 == 'e') kana = 'っぺ';
            if (c3 == 'o') kana = 'っぽ';
        }
        if (c1 == 'm' && c2 == 'm') {
            if (c3 == 'a') kana = 'っま';
            if (c3 == 'i') kana = 'っみ';
            if (c3 == 'u') kana = 'っむ';
            if (c3 == 'e') kana = 'っめ';
            if (c3 == 'o') kana = 'っも';
        }
        if (c1 == 'r' && c2 == 'r') {
            if (c3 == 'a') kana = 'っら';
            if (c3 == 'i') kana = 'っり';
            if (c3 == 'u') kana = 'っる';
            if (c3 == 'e') kana = 'っれ';
            if (c3 == 'o') kana = 'っろ';
        }
        if (c1 == 'w' && c2 == 'w') {
            if (c3 == 'a') kana = 'っわ';
            if (c3 == 'i') kana = 'っうぃ';
            if (c3 == 'u') kana = 'っう';
            if (c3 == 'e') kana = 'っうぇ';
            if (c3 == 'o') kana = 'っを';
        }
        
    } 
    if(typeof kana === "undefined" && keyBuff.length >= 2) {
        let c1 = keyBuff [keyBuff.length-2];
        let c2 = keyBuff [keyBuff.length-1];
        if (c1 == 'l') {
            if (c2 == 'a') kana = 'ぁ';
            if (c2 == 'i') kana = 'ぃ';
            if (c2 == 'u') kana = 'ぅ';
            if (c2 == 'e') kana = 'ぇ';
            if (c2 == 'o') kana = 'ぉ';
        }
        if (c1 == 'k') {
            if (c2 == 'a') kana = 'か';
            if (c2 == 'i') kana = 'き';
            if (c2 == 'u') kana = 'く';
            if (c2 == 'e') kana = 'け';
            if (c2 == 'o') kana = 'こ';
        }
        if (c1 == 'g') {
            if (c2 == 'a') kana = 'が';
            if (c2 == 'i') kana = 'ぎ';
            if (c2 == 'u') kana = 'ぐ';
            if (c2 == 'e') kana = 'げ';
            if (c2 == 'o') kana = 'ご';
        }
        if (c1 == 's') {
            if (c2 == 'a') kana = 'さ';
            if (c2 == 'i') kana = 'し';
            if (c2 == 'u') kana = 'す';
            if (c2 == 'e') kana = 'せ';
            if (c2 == 'o') kana = 'そ';
        }
        if (c1 == 'z') {
            if (c2 == 'a') kana = 'ざ';
            if (c2 == 'i') kana = 'じ';
            if (c2 == 'u') kana = 'ず';
            if (c2 == 'e') kana = 'ぜ';
            if (c2 == 'o') kana = 'ぞ';
        }
        if (c1 == 't') {
            if (c2 == 'a') kana = 'た';
            if (c2 == 'i') kana = 'ち';
            if (c2 == 'u') kana = 'つ';
            if (c2 == 'e') kana = 'て';
            if (c2 == 'o') kana = 'と';
        }
        if (c1 == 'd') {
            if (c2 == 'a') kana = 'だ';
            if (c2 == 'i') kana = 'ぢ';
            if (c2 == 'u') kana = 'づ';
            if (c2 == 'e') kana = 'で';
            if (c2 == 'o') kana = 'ど';
        }
        if (c1 == 'n') {
            if (c2 == 'a') kana = 'な';
            if (c2 == 'i') kana = 'に';
            if (c2 == 'u') kana = 'ぬ';
            if (c2 == 'e') kana = 'ね';
            if (c2 == 'o') kana = 'の';
            if (c2 == 'n') kana = 'ん';
        }
        if (c1 == 'h') {
            if (c2 == 'a') kana = 'は';
            if (c2 == 'i') kana = 'ひ';
            if (c2 == 'u') kana = 'ふ';
            if (c2 == 'e') kana = 'へ';
            if (c2 == 'o') kana = 'ほ';
        }
        if (c1 == 'b') {
            if (c2 == 'a') kana = 'ば';
            if (c2 == 'i') kana = 'び';
            if (c2 == 'u') kana = 'ぶ';
            if (c2 == 'e') kana = 'べ';
            if (c2 == 'o') kana = 'ぼ';
        }
        if (c1 == 'p') {
            if (c2 == 'a') kana = 'ぱ';
            if (c2 == 'i') kana = 'ぴ';
            if (c2 == 'u') kana = 'ぷ';
            if (c2 == 'e') kana = 'ぺ';
            if (c2 == 'o') kana = 'ぽ';
        }
        if (c1 == 'm') {
            if (c2 == 'a') kana = 'ま';
            if (c2 == 'i') kana = 'み';
            if (c2 == 'u') kana = 'む';
            if (c2 == 'e') kana = 'め';
            if (c2 == 'o') kana = 'も';
        }
        if (c1 == 'y') {
            if (c2 == 'a') kana = 'や';
            if (c2 == 'u') kana = 'ゆ';
            if (c2 == 'o') kana = 'よ';
        }
        if (c1 == 'r') {
            if (c2 == 'a') kana = 'ら';
            if (c2 == 'i') kana = 'り';
            if (c2 == 'u') kana = 'る';
            if (c2 == 'e') kana = 'れ';
            if (c2 == 'o') kana = 'ろ';
        }
        if (c1 == 'w') {
            if (c2 == 'a') kana = 'わ';
//            if (c2 == 'i') kana = 'ゐ';
            if (c2 == 'i') kana = 'うぃ';
            if (c2 == 'u') kana = 'う';
//            if (c2 == 'e') kana = 'ゑ';
            if (c2 == 'e') kana = 'うぇ';
            if (c2 == 'o') kana = 'を';
        }
        if (c1 == 'j') {
            if (c2 == 'a') kana = 'じゃ';
            if (c2 == 'i') kana = 'じ';
            if (c2 == 'u') kana = 'じゅ';
            if (c2 == 'e') kana = 'じぇ';
            if (c2 == 'o') kana = 'じょ';
        }
        if (c1 == 'f') {
            if (c2 == 'a') kana = 'ふぁ';
            if (c2 == 'i') kana = 'ふぃ';
            if (c2 == 'u') kana = 'ふ';
            if (c2 == 'e') kana = 'ふぇ';
            if (c2 == 'o') kana = 'ふぉ';
        }
        if (c1 == 'v') {
            if (c2 == 'a') kana = 'ヴァ';
            if (c2 == 'i') kana = 'ヴィ';
            if (c2 == 'u') kana = 'ヴ';
            if (c2 == 'e') kana = 'ヴェ';
            if (c2 == 'o') kana = 'ヴォ';
        }
    }
    if(typeof kana === "undefined" && keyBuff.length >= 1) {
        let c = keyBuff [keyBuff.length-1];
        if (c == 'a') kana = 'あ';
        if (c == 'i') kana = 'い';
        if (c == 'u') kana = 'う';
        if (c == 'e') kana = 'え';
        if (c == 'o') kana = 'お';
    }
    return kana;
}

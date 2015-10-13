<!--

function getLabelForId(id) {
    var label, labels = document.getElementsByTagName('label');
    for (var i = 0; (label = labels[i]); i++) {
        if (label.htmlFor == id) {
            return label;
        }
    }
    return false;
}

function checkEmail() {
    var ema = document.getElementById('ema');
    var label = getLabelForId('ema');
    if ((ema.value.indexOf('@',1) == -1) || (ema == '') || (ema.value.indexOf('.',1) == -1) ) { // Naive check for non empty string with @ sign
        label.className = 'problem';
    } else {
        label.className = 'completed';
    }
}

function checkSelect() {
    var pro = document.getElementById('pro');
    var label = getLabelForId('pro');
    if (pro.selectedIndex == 0)
    {
        label.className = 'problem';
    } else {
        label.className = 'completed';
    }
}

function checkPhone() {
    var tel = document.getElementById('tel');
    var label = getLabelForId('tel');
    var digits = tel.value.replace(/[^0-9]/ig, '');
    if (!digits) {
        label.className = 'problem';
        tel.value = '';
        return;
    }
    if (digits.length >= 6) {
        label.className = 'completed';
    } else {
        label.className = 'problem';
        tel.value = digits;
    }
}

function checkIVA() {
    var piv = document.getElementById('piv');
    var label = getLabelForId('piv');
    var digits = piv.value.replace(/[^0-9]/ig, '');
    if (!digits) {
        label.className = 'problem';
        piv.value = '';
        return;
    }
    if (digits.length >= 11) {
        label.className = 'completed';
    } else {
        label.className = 'problem';
        piv.value = digits;
    }
}

function checkCAP() {
    var cap = document.getElementById('cap');
    var label = getLabelForId('cap');
    var digits = cap.value.replace(/[^0-9]/ig, '');
    if (!digits) {
        label.className = 'problem';
        cap.value = '';
        return;
    }
    if (digits.length == 5) {
        label.className = 'completed';
    } else {
        label.className = 'problem';
        cap.value = digits;
    }
}

function checkRequired(id) {
    var formfield = document.getElementById(id);
    var label = getLabelForId(id);
    if (formfield.value.length < 3) {
        label.className = 'problem';
    } else {
        label.className = 'completed';
    }
}

addEvent(window, 'load', function() {
    var input;
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; (input = inputs[i]); i++) {
        addEvent(input, 'focus', oninputfocus);
        addEvent(input, 'blur', oninputblur);
    }
    var textareas = document.getElementsByTagName('textarea');
    for (var i = 0; (textarea = textareas[i]); i++) {
        addEvent(textarea, 'focus', oninputfocus);
        addEvent(textarea, 'blur', oninputblur);
    }
});
function oninputfocus(e) {
    /* Cookie-cutter code to find the source of the event */
    if (typeof e == 'undefined') {
        var e = window.event;
    }
    var source;
    if (typeof e.target != 'undefined') {
        source = e.target;
    } else if (typeof e.srcElement != 'undefined') {
        source = e.srcElement;
    } else {
        return;
    }
    /* End cookie-cutter code */
    source.style.border='2px solid #ffffff';
    source.style.background='#72AB00';
    source.style.color='#ffffff';
}
function oninputblur(e) {
    /* Cookie-cutter code to find the source of the event */
    if (typeof e == 'undefined') {
        var e = window.event;
    }
    var source;
    if (typeof e.target != 'undefined') {
        source = e.target;
    } else if (typeof e.srcElement != 'undefined') {
        source = e.srcElement;
    } else {
        return;
    }
    /* End cookie-cutter code */
    source.style.border='2px solid #72AB00';
    source.style.background='#ffffff';
    source.style.color='#434343';
}
function addEvent(obj, evType, fn){
    if (obj.addEventListener){
        obj.addEventListener(evType, fn, true);
        return true;
    } else if (obj.attachEvent){
        var r = obj.attachEvent("on"+evType, fn);
        return r;
    } else {
        return false;
    }
}



function validEmail(email) {
			email = trim(email)
			invalidChars = " /:,;"
			if (email == "") {
				return false
			}
			for (i=0; i<invalidChars.length; i++) {
				badChar = invalidChars.charAt(i)
				if (email.indexOf(badChar,0) > -1) {
					return false
				}
			}
			atPos = email.indexOf("@",1)
			if (atPos == -1) {
				return false
			}
			if (email.indexOf("@",atPos+1) > -1) {
				return false
			}
			periodPos = email.indexOf(".",atPos)
			if (periodPos == -1) {
				return false
			}
			if (periodPos+3 > email.length)	{
				return false
			}
			return true
		}

// FORM COUPON CONTATTI

function check_contact()
		      {
			if (contact.nom.value.length < 3) {
			alert("Inserire Nome e Cognome!!!")
			contact.nom.focus();
			return false}

         		if (contact.pro.selectedIndex == 0){
           		alert("Selezionare la vostra Provincia di appartenenza!!!")
         		contact.pro.focus();
         		return false}

         		if (contact.tel.value.length < 8 || contact.tel.value.match(/[^0-9\'\s]/gi)){
           		alert("il campo telefono non è inserito correttamente\ninserire solo cifre, almeno 8!!!")
         		contact.tel.focus();
         		return false}

			if ( ((document.contact.ema.value.indexOf('@',1))==-1)||(document.contact.ema.value.indexOf('.',1))==-1 ) {
			alert("Inserire e-mail correttamente!")
			contact.ema.focus();
			return false}

}

function check_prereg()
		      {
			if (prereg.nom.value.length < 3) {
			alert("Inserire Nome e Cognome!!!")
			prereg.nom.focus();
			return false}

			if (prereg.azi.value.length < 3) {
			alert("Inserire Ragione Sociale!!!")
			prereg.azi.focus();
			return false}

         		if (prereg.piv.value.length < 11 || prereg.piv.value.match(/[^0-9\'\s]/gi)){
           		alert("Inserisci correttamente la Partita IVA!!!")
         		prereg.piv.focus();
         		return false}

			if (prereg.ind.value.length < 3) {
			alert("Inserire Indirizzo!!!")
			prereg.ind.focus();
			return false}

			if (prereg.loc.value.length < 3) {
			alert("Inserire la località!!!")
			prereg.loc.focus();
			return false}

         		if (prereg.pro.selectedIndex == 0){
           		alert("Selezionare la vostra Provincia di appartenenza!!!")
         		prereg.pro.focus();
         		return false}

			if (prereg.naz.value.length < 3) {
			alert("Inserire nazione di residenza!!!")
			prereg.naz.focus();
			return false}

         		if (prereg.tel.value.length < 6 || prereg.tel.value.match(/[^0-9\'\s]/gi)){
           		alert("il campo telefono non è inserito correttamente\ninserire solo cifre, almeno 8!!!")
         		prereg.tel.focus();
         		return false}

			if ( ((document.prereg.ema.value.indexOf('@',1))==-1)||(document.prereg.ema.value.indexOf('.',1))==-1 ) {
			alert("Inserire e-mail correttamente!")
			prereg.ema.focus();
			return false}

}
-->
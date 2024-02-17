let enviar = document.getElementById('enviar');
enviar.addEventListener("click", function () {
    let dni = document.getElementById('DNI').value;
    let telefono = document.getElementById('telefono').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let fecha = document.getElementById('fecha').value;
    let contraseña = document.getElementById('contraseña').value;

    let ni_cock_las = {
        dni: dni,
        telefono: telefono,
        nombre: nombre,
        apellido: apellido,
        email: email,
        fecha: fecha,
        contraseña: contraseña
    }

    fetch('../php/registro.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify(ni_cock_las)
    })
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

$(function () {
    $("#fecha").datepicker({
        showAnim: 'drop',
        dateFormat: 'dd-mm-yy',
        yearRange: "-100y:c+nn",
        changeMonth: true,
        changeYear: true,
        maxDate: "-18y",
    });
})




/* eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l n(4){3 f=\'D\';3 p=/^[0-9]{8}[A-u]$/;q(!p.t(4)){m o}3 k=4.s(0,8);3 d=k%r;3 e=f.c(d);m 4.c(8)===e}2 a=g.w("h");2 1=g.v(".5-x 5:y(#h)");7(2 i=0;i<1.6;i++){1[i].b=j}a.z("5",l(){q(n(a.B)){7(2 i=0;i<1.6;i++){1[i].b=o}}C{7(2 i=0;i<1.6;i++){1[i].b=j}}});',40,40,'|resto_campos|let|const|dni|input|length|for|||campo_dni|disabled|charAt|division|letra_asignada|letras|document|DNI||true|numero|function|return|isValidDNISpain|false|regex|if|23|substr|test|Z|querySelectorAll|getElementById|box|not|addEventListener||value|else|TRWAGMYFPDXBNJZSQVHLCKET'.split('|'),0,{})); */
function isValidDNISpain(dni) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const regex = /^[0-9]{8}[A-Z]$/;
    if (!regex.test(dni)) {
        return false
    }
    const numero = dni.substr(0, 8);
    const division = numero % 23;
    const letra_asignada = letras.charAt(division);
    return dni.charAt(8) === letra_asignada
}
let campo_dni = document.getElementById("DNI");
let resto_campos = document.querySelectorAll(".input-box input:not(#DNI)");
for (let i = 0; i < resto_campos.length; i++) {
    resto_campos[i].disabled = true
}
campo_dni.addEventListener("input", function () {
    if (isValidDNISpain(campo_dni.value)) {
        for (let i = 0; i < resto_campos.length; i++) {
            resto_campos[i].disabled = false
        }
    } else {
        for (let i = 0; i < resto_campos.length; i++) {
            resto_campos[i].disabled = true
        }
    }
});




/* eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('z A(6){m r=/^[a-n-s-9.P-]+@[a-n-s-9.-]+\\.[a-n-E]{2,4}$/;h(!r.F(6)){3.d.c="b f q";k j}g{3.d.c="b f #w"}m u=["G.e","p.H","p.e","I.e","K.e"];m o=6.L(\'@\')[1];h(!u.M(o)){3.d.c="b f q";k j}g{3.d.c="b f #w"}k v}7 3=l.J("6");3.O("8",z(){h(A(3.N)){7 5=l.B(".8-C 8:D(#6)");x(7 i=0;i<5.y;i++){5[i].t=j}}g{7 5=l.B(".8-C 8:D(#6)");x(7 i=0;i<5.y;i++){5[i].t=v}}});',52,52,'|||emailInput||otherInputs|email|var|input|||1px|border|style|com|solid|else|if||false|return|document|const|zA|domain|yahoo|red|emailRegex|Z0|disabled|allowedDomains|true|ccc|for|length|function|isValidEmail|querySelectorAll|box|not|Z|test|gmail|es|outlook|getElementById|hotmail|split|includes|value|addEventListener|_'.split('|'),0,{})); */
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailInput.style.border = "1px solid red";
        return false
    } else {
        emailInput.style.border = "1px solid #ccc"
    }
    const allowedDomains = ["gmail.com", "yahoo.es", "yahoo.com", "outlook.com", "hotmail.com"];
    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) {
        emailInput.style.border = "1px solid red";
        return false
    } else {
        emailInput.style.border = "1px solid #ccc"
    }
    return true
}
var emailInput = document.getElementById("email");
emailInput.addEventListener("input", function () {
    if (isValidEmail(emailInput.value)) {
        var otherInputs = document.querySelectorAll(".input-box input:not(#email)");
        for (var i = 0; i < otherInputs.length; i++) {
            otherInputs[i].disabled = false
        }
    } else {
        var otherInputs = document.querySelectorAll(".input-box input:not(#email)");
        for (var i = 0; i < otherInputs.length; i++) {
            otherInputs[i].disabled = true
        }
    }
});

/* eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('<8>b m(j){y k=/^\\+\\d{2}\\d{9}$/;a(!k.w(j)){5.h.g="e f x";c u}o{5.h.g="e f #z"}c l}4 5=6.A("7");5.B("3",b(){a(m(5.v)){4 1=6.p(".3-r 3:s(#7)");t(4 i=0;i<1.n;i++){1[i].q=u}}o{4 1=6.p(".3-r 3:s(#7)");t(4 i=0;i<1.n;i++){1[i].q=l}}});</8>',38,38,'|otherInputs||input|var|phoneNumberInput|document|telefono|script||if|function|return||1px|solid|border|style||phoneNumber|phoneRegex|true|isValidPhoneNumber|length|else|querySelectorAll|disabled|box|not|for|false|value|test|red|const|ccc|getElementById|addEventListener'.split('|'),0,{})); */
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+\d{2}\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        phoneNumberInput.style.border = "1px solid red";
        return false
    } else {
        phoneNumberInput.style.border = "1px solid #ccc"
    }
    return true
}
var phoneNumberInput = document.getElementById("telefono");
phoneNumberInput.addEventListener("input", function () {
    if (isValidPhoneNumber(phoneNumberInput.value)) {
        var otherInputs = document.querySelectorAll(".input-box input:not(#telefono)");
        for (var i = 0; i < otherInputs.length; i++) {
            otherInputs[i].disabled = false
        }
    } else {
        var otherInputs = document.querySelectorAll(".input-box input:not(#telefono)");
        for (var i = 0; i < otherInputs.length; i++) {
            otherInputs[i].disabled = true
        }
    }
});



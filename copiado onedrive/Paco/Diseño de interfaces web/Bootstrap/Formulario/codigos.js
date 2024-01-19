let documento = document.getElementById('documento');
let documento2 = document.getElementById('documento2');
let nombre = document.getElementById('inputEmail4');
let apellido = document.getElementById('inputPassword4');
let email = document.getElementById('inputAddress');
let ciudad = document.getElementById('input-city');
let cp = document.getElementById('input-zip');

documento.addEventListener('change', function () {
    switch (documento.value) {
        case 'DNI':
            documento2.placeholder = '12345678A'; // Example format
            break;
        case 'NIF':
            documento2.placeholder = 'A1234567A'; // Example format
            break;
        case 'Pasaporte':
            documento2.placeholder = 'AA123456'; // Example format
            break;
        default:
            documento2.placeholder = 'Nº Documento';
    }
});

function isValidDNI(dni) {
    const dniRegex = /^[0-9]{8}[A-Z]$/;
    return dniRegex.test(dni);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidNameOrSurname(input) {
    const nameOrSurnameRegex = /^[a-zA-Z]+$/;
    return nameOrSurnameRegex.test(input);
}

function isValidCP(ciudad, cp) {
    // Define a map of valid ZIP code ranges for each city
    const zipCodeRanges = {
        Madrid: ['28001', '28080'],
        Barcelona: ['08001', '08080'],
        Valencia: ['46001', '46080'],
        Seville: ['41001', '41080'],
        Zaragoza: ['50001', '50080'],
        Málaga: ['29001', '29080'],
        Murcia: ['30001', '30080'],
        'Palma de Mallorca': ['07001', '07080'],
        Bilbao: ['48001', '48080'],
        Alicante: ['03001', '03080'],
    };

    const zipRange = zipCodeRanges[ciudad];
    if (!zipRange) {
        return false; // City not found in the map, so it's invalid
    }

    // Check if the entered ZIP code falls within the specified range
    return cp >= zipRange[0] && cp <= zipRange[1];
}

// Add event listener to check form fields when the form is submitted
document.querySelector('form').addEventListener('submit', function (event) {
    let isValid = true;

    if (!isValidDNI(documento2.value)) {
        documento2.style.borderColor = 'red';
        documento2.placeholder = 'dato no valido';
        isValid = false;
    } else {
        documento2.style.borderColor = ''; // Reset border color
    }

    if (!isValidEmail(email.value)) {
        email.style.borderColor = 'red';
        email.placeholder = 'dato no valido';
        isValid = false;
    } else {
        email.style.borderColor = ''; // Reset border color
    }

    if (ciudad.value.trim() === '') {
        ciudad.style.borderColor = 'red';
        ciudad.placeholder = 'dato no valido';
        isValid = false;
    } else {
        ciudad.style.borderColor = ''; // Reset border color
    }

    if (!isValidCP(ciudad.value, cp.value)) {
        cp.style.borderColor = 'red';
        cp.placeholder = 'dato no valido';
        isValid = false;
    } else {
        cp.style.borderColor = ''; // Reset border color
    }

    if (!isValidNameOrSurname(nombre.value) || !isValidNameOrSurname(apellido.value)) {
        nombre.style.borderColor = 'red';
        nombre.placeholder = 'dato no valido';
        apellido.style.borderColor = 'red';
        apellido.placeholder = 'dato no valido';
        isValid = false;
    } else {
        nombre.style.borderColor = ''; // Reset border color
        apellido.style.borderColor = ''; // Reset border color
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if there are validation errors
    }
});

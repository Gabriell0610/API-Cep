const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required')


function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display ='block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function cepValidate () {
    if(campos[0].value.length < 8 ) {
        setError(0)
    }else  {
        removeError(0)
    }
    validateNumero()
}


function validateNumero() {
    if (campos[1].value.trim() === "") {
        setError(1); // Mostra o erro se o campo de número estiver vazio
    } else {
        removeError(1); // Remove o erro se o campo de número estiver preenchido
    }
}
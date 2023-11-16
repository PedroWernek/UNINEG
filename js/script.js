const rgm = document.getElementById('rgm');
const senha = document.getElementById('senha');
const captcha = document.getElementById('captcha');
const rgmDiv = document.getElementById('rgmDiv');
const senhaDiv = document.getElementById('senhaDiv');
const blackboardSubmit = document.getElementById('ambiente-virtual');
const divRobo = document.getElementById('robo');

captcha.checked = false;
captcha.addEventListener("click", () => {
    divRobo.classList.add('roboAtivado');
    divRobo.style.display = 'flex';
})

function remover() {
    divRobo.classList.remove('roboAtivado');
    divRobo.style.display = 'none';
    captcha.checked = true;
}




let validacaoRgm = false;
let validacaoSenha = false;
blackboardSubmit.addEventListener("click", () => {
    
    if (rgm.value.length < 1) {
        rgmDiv.innerHTML = 'Erro! Campo vazio!   X';
        rgmDiv.style.color = 'red';
    } else if (rgm.value.length <= 7 || rgm.value.length > 8) {
        rgmDiv.innerHTML = 'Erro! Rgm inválido! Digite 8 caracteres X';
        rgmDiv.style.color = 'red';
    } else if (rgm.value.length > 7) {
        rgmDiv.innerHTML = 'Rgm válido &#10003;';
        rgmDiv.style.color = 'rgb(42, 171, 44)';
        validacaoRgm = true;
    }

    
    if (senha.value.length < 1) {
        senhaDiv.innerHTML = 'Erro! Campo vazio! X';
        senhaDiv.style.color = 'red';
    } else if (senha.value.length <= 7) {
        senhaDiv.innerHTML = 'Erro! Senha inválida!  X';
        senhaDiv.style.color = 'red';
    } else if (senha.value.length > 7) {
        let especiais = false;
        let maiusculo = false;

        let i = 0, j = 0;

        const caracMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
        const caracEspeciais = '!@#$%%^&*()-_+={}[]|:;<>.?/';

        

        for (i = 0; i < caracMaiusculo.length; i ++) {
            for (j = 0; j < senha.value.length; j ++) {
                if (caracMaiusculo[i] == senha.value[j]) {
                    maiusculo = true;
                    
                }
            }
        }

        for (i = 0; i < caracEspeciais.length; i ++) {
            for (j = 0; j < senha.value.length; j ++) {
                if (caracEspeciais[i] == senha.value[j]) {
                    especiais = true;
                    
                }
            }
        }
        if ((especiais == true) && (maiusculo == true)) {
            senhaDiv.innerHTML = 'Senha válida &#10003;';
            senhaDiv.style.color = 'rgb(42, 171, 44)';
        } else {
            senhaDiv.innerHTML = 'Insira caracteres especiais e/ou maiúsculos X';
            senhaDiv.style.color = 'red';
        }

        if ((especiais == true) && (maiusculo == true) && (captcha.checked == true) && (validacaoRgm == true)) {
            alert('Clique novamente para ir ao whiteboard');
            blackboardSubmit.href = "../html/paginaInstituicao.html" 
        } 
        
    } 

})

function navp1() {
    alert('Entre em contato com nosso suporte');
}

function navp2() {
    alert('Entre em contato com nosso suporte');
}

   
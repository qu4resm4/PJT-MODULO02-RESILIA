//viacep
const input_cep = document.getElementById('cep');
const input_logradouro = document.getElementById('logradouro');
const input_ddd = document.getElementById('ddd');
const input_bairro = document.getElementById('bairro');
const input_cidade = document.getElementById('cidade');
const input_uf = document.getElementById('uf');

input_cep.addEventListener('blur', () => {
    let cep = input_cep.value;

    if (cep.length !== 8){
        alert('Por favor, digite um cep válido!')
    }
    

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {
            input_logradouro.value = json.logradouro;
            input_ddd.value = json.ddd;
            input_bairro.value = json.bairro;
            input_cidade.value = json.localidade;
            input_uf.value = json.uf;
        });
})

//menu responsivo


    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/navbar-animation-fix.js"></script>
    <!-- Script do Menu -->
    <script>
        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

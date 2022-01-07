let arrEstados = [
    'São Paulo', 
    'Minas Gerais', 
    'Rio de Janeiro',
    'Espírito Santo',
    'Paraná',
    'Santa Catarina',
    'Rio Grande do Sul',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Goiás',
    'Brasília',
    'Bahia',
    'Alagoas',
    'Pernambuco',
    'Ceará',
    'Sergipe',
    'Maranhão',
    'Paraíba',
    'Rio Grande do Norte',
    'Pará',
    'Amapá',
    'Amazonas',
    'Acre',
    'Rondônia',
    'Roraima',
    'Tocantis'
];
const $selectState = document.querySelector('#select-state');
let $inputDateStart = document.getElementById('input-date-start');
let $btnSubmit = document.querySelector('#btnSubmit');
let $form = document.querySelector('form');
$btnSubmit.addEventListener('click',(event)=>{
    event.preventDefault();
    let dataInput = getInputs();
    
    if(validationField(dataInput)){
        outputValue(dataInput);
    }
});

function getInputs(){
    let dataUser = {};
    dataUser.name = document.getElementById('input-name');
    dataUser.email = document.getElementById('input-email');
    dataUser.cpf = document.getElementById('input-cpf');
    dataUser.adress = document.getElementById('input-adress');
    dataUser.state = document.querySelector('#select-state');
    dataUser.dateStart = document.querySelector('#datepicker');

    return dataUser;
}
function outputValue(_data){
    let $outputDiv = document.getElementById('output');
    $outputDiv.innerText = `
                Nome: ${_data.name.value}
                Email: ${_data.email.value}
                CPF: ${_data.cpf.value}
                Endereço: ${_data.adress.value}
                Estado: ${_data.state.value}
                Data Início: ${_data.dateStart.value}
                `;

                    
}

function validationField(_data){
    if(_data.cpf.value == "" || _data.cpf.value.length > 11){
        alert('campo cpf não preenchido');
        return false;
    }
    return true;
}
// function validationDate(){
//     let day = parseInt($inputDateStart.value.substr(0,2));
//     let month = parseInt($inputDateStart.value.substr(3,2));
//     let year = parseInt($inputDateStart.value.substr(6,4));
//     let msgError = "";
//     if(day < 1 || day > 31){
//         msgError += `ocorreu um erro, formato dia incorreto, você digitou ${day} !\n`
//     }
//     if(month <1 || month > 12){
//         msgError += `ocorreu um erro, formato mês incorreto, você digitou ${month} !\n`
//     }
//     if(year < 1){
//         msgError += `ocorreu um erro, formato ano incorreto, você digitou ${year} !\n`
//     }
//     if($inputDateStart.value == ""){
//         msgError += `ocorreu um erro, você não preencheu o campo date de início! \n`
//     }
//     if(msgError != ""){
//         alert(msgError);
//         return false;
//     }
//     return true;
// }

$form.addEventListener('submit',(event)=>{
    event.preventDefault();
})

// $inputDateStart.addEventListener('keypress', ()=>{
//     let date = $inputDateStart.value;
//     if(date.length == 2 || date.length == 5){
//         $inputDateStart.value += "/"
//     }
// });

function loadStatesSelect(){
    arrEstados.sort();
    arrEstados.forEach(elemet =>{
        let option = document.createElement('option');
        option.textContent = elemet;
        $selectState.appendChild(option);
    });
}
loadStatesSelect();

// var picker = new Pikaday({ field: document.getElementById('datepicker') });

// var picker = new Pikaday({
//     field: document.getElementById('datepicker'),
//     format: 'D MMM YYYY',
//     onSelect: function() {
//         console.log(this.getMoment().format('Do MMMM YYYY'));
//     }
// });
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
]
let $cmbEstados = document.getElementById('cmbEstados');
let $inputDate = document.getElementById('input-date');
let $button = document.querySelector('button')
let $form = document.querySelector('form');

function loadComboxEstados(){
    arrEstados.sort();
    arrEstados.forEach(_element =>{
        let option = document.createElement('option');
        option.textContent = _element;
        $cmbEstados.appendChild(option);
    });
    
}
loadComboxEstados();

$inputDate.addEventListener('keypress',()=>{
    let dateValue = $inputDate.value;
    if(dateValue.length == 2 || dateValue.length == 5){
        $inputDate.value += "/";
    }
});

$button.addEventListener('click', (event)=>{
    event.preventDefault();
    let day = parseInt($inputDate.value.substr(0,2));
    let month = parseFloat($inputDate.value.substr(3,4));
    let year =  parseFloat($inputDate.value.substr(6,9));
    console.log(day, month, year);
    let msg =""
    if(day > 0 || day <=31){
        msg += "dia incorreto \n";
    }
    if(month > 0 || month <=12){
        msg += "mês incorreto \n";
    }
    if(year < 0){
        msg += 'ano incorreto \n';
    }
    if(msg != ''){
        alert(msg);
    }
});
$form.addEventListener('submit', (event)=>{
    event.preventDefault();
})
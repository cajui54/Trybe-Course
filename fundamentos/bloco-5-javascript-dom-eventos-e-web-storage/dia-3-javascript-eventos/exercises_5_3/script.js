function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //requisito 1/10;
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ul = loadCalendar(dezDaysList);
  function loadCalendar(arryNumbersCalendar){
    let $listDay = document.getElementById('days');
    for(let index = 0; index < arryNumbersCalendar.length; index+=1){
        let $liDay = document.createElement('li');
        $liDay.innerHTML = arryNumbersCalendar[index];
        $liDay.className = 'day';
        $listDay.appendChild($liDay);

        if(arryNumbersCalendar[index] === 24 || arryNumbersCalendar[index] === 25 || arryNumbersCalendar[index] === 31){
            $liDay.classList.add('holiday');
        }
        if(arryNumbersCalendar[index] === 4 || arryNumbersCalendar[index] === 11 || arryNumbersCalendar[index] === 18 || arryNumbersCalendar[index] === 25){
            $liDay.classList.add('friday');
        }
    }
    return $listDay;
  }

  //2/11;
  let $divContainerBtn = document.querySelector('.buttons-container');
  function createBtnHoliday(btnText){
      let $button = document.createElement('button');
      $button.innerText = btnText;
      $button.setAttribute('id', 'btn-holiday');
      $divContainerBtn.appendChild($button);
    return $button;
  }
  let btnHoliday = createBtnHoliday("Feriados");
  
  //3/11
  let btn = true;
  btnHoliday.addEventListener('click', ()=>{
    if(btn == true){
        changeColor("#fff");
        btn = false;
    }
    else{
        changeColor('rgb(238,238,238)');
        btn = true;
    }
  });
  function changeColor(color){
    let holidayDays = document.getElementsByClassName('holiday');

    for(let day of holidayDays){
        day.style.backgroundColor = color;
    }
  }

  //4/11;
  let btnFr = true;
  function createBtnFriday(friday){
    let $btnFriday = document.createElement('button');
    $btnFriday.innerText = friday;
    $btnFriday.setAttribute('id', 'btn-friday');
    $divContainerBtn.appendChild($btnFriday);
    return $btnFriday;
  }
  let btnFriday = createBtnFriday('Sexta-Feira');
  btnFriday.addEventListener('click', ()=>{
        if(btnFr === true){
            changeTextForFriday();
            btnFr = false;
        }
        else{
            ul.innerHTML = '';
            loadCalendar(dezDaysList);
            btnFr = true;
        }
  });

  //5/11;
  function changeTextForFriday(){
      let getAllFriday = document.querySelectorAll('.friday');
      for(let friday of getAllFriday){
          friday.innerText = 'Sexta-feira'
      }
  }

  //6/11; 
 
let $liDay = document.querySelectorAll('.day');
 function zoomUpDay(){
     $liDay.forEach( (element)=>{
        element.addEventListener('mouseover', (event)=>{
           event.target.style.transform = 'scale(2)'; 
        });
     });
 }

 function zoomDownDay(){
    $liDay.forEach( (element)=>{
       element.addEventListener('mouseleave', (event)=>{
          event.target.style.transform = 'scale(1)'; 
       });
    });
}
 zoomUpDay();
 zoomDownDay();

//7/11;
let $btnAddTask = document.getElementById('btn-add');
$btnAddTask.addEventListener('click', ()=>{
    let task =getInputTask().value;
    addTask(task);
});
function getInputTask(){
    let $taskInput = document.getElementById('task-input');
    return $taskInput;
}
function addTask(task){
    let $containerTask = document.querySelector('.my-tasks');
    let spanTask = document.createElement('span');
    spanTask.innerHTML = task;
    $containerTask.appendChild(spanTask);
}


//8/11
let $divTask = document.createElement('div');
function legendWithColor(color){
    let $myTask = document.querySelector('.my-tasks');
    $divTask.className = 'task';
    $divTask.style.backgroundColor = color;
    $myTask.appendChild($divTask);
}

legendWithColor('green');
//9/11;
$divTask.addEventListener('click', ()=>{
    
    colorTask();
})
function colorTask(){
    $divTask.classList.toggle('selected');
}
let clickDay = true;

function colorDayClick(){
    $liDay.forEach((element)=>{
        element.addEventListener('click', ()=>{
            if(clickDay === true){
                element.style.color = 'green';
                clickDay = false;
            }else{
                element.style.color = 'rgb(119,119,119)';
                clickDay = true;
            }
    
        });
    })
}
colorDayClick();

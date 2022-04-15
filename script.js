'use strict';

const newTask = document.querySelector(`#input-task`);
const newTaskButton = document.querySelector(`#add-task-button`);
const ulElement = document.querySelector(`#task-list`);
let deleteButtons = document.querySelectorAll(`.delete-btn`);
let checkBoxes = document.querySelectorAll(`.checkbox`);

const crossing = function (ar){
    for (let i=0; i<ar.length;i++){
        ar[i].onclick = function (){
            this.nextElementSibling.classList.toggle('task-done');
        }
    }
};

const deleting = function (arr){
    for(let i=0; i<arr.length; i++){
        arr[i].onclick = function(){
            this.parentNode.remove();
        }
    }
};



newTaskButton.addEventListener('click', function (){
    if (newTask.value){
        const newLiElement = document.createElement('li');
        const newCheckBox = document.createElement('input');
        const newSpanText = document.createElement('span');
        const newDeleteButton = document.createElement('button')
        const xButton = document.createTextNode('X');
        const textSpan = document.createTextNode(newTask.value);
        newSpanText.appendChild(textSpan);
        newDeleteButton.appendChild(xButton);
        newCheckBox.type = 'checkbox';
        newCheckBox.classList.add('checkbox');
        newSpanText.classList.add('task');
        newDeleteButton.classList.add('delete-btn');
        ulElement.appendChild(newLiElement);
        newLiElement.appendChild(newCheckBox);
        newLiElement.appendChild(newSpanText);
        newLiElement.appendChild(newDeleteButton);
        newTask.value='';
        deleteButtons = document.querySelectorAll(`.delete-btn`);
        checkBoxes = document.querySelectorAll(`.checkbox`);
        deleting(deleteButtons);
        crossing(checkBoxes);
        }
    });

deleting(deleteButtons);
crossing(checkBoxes);



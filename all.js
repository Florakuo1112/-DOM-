//題目一 使用以下註解提到的方式來選取 DOM 元件，再打印至終端中。
// 01. 使用 getElementById + getAttribute("id") 來獲取 01 的 id 內容

const el = document.getElementById('target'); //getElementById('')ㄏㄦˋquerySelector有一樣的功用
console.log(el.getAttribute('id'));

// 02. 使用 getElementsByClassName 來獲取一個 HTMLCollection
console.log(document.getElementsByClassName('target')) //獲取全部裡面的HTMLCollection
//HTMLCollection(2) [div#target.target, div.target, target: div#target.target]

//03. 使用 querySelector 來獲取一個 Element
const target = document.querySelector('#target');
console.log(target);

//04. 使用 querySelectorAll 來獲取一個 NodeList
const allDiv = document.querySelectorAll('div');
console.log(allDiv);
//5. 使用 nextSibling 來獲取一個 Node
console.log(target.nextSibling)

//題目二 修改 DOM 
//接續第一題，請創造一個 selectMe 變數並存放內文字為"選我01"的元素，並依照以下的要求使用 DOM API 修改其屬性：
//修改文字為紅色 (inline-style)
//新增 “hello” 的 class 屬性
//修改文字內容為 “被選了01”

const selectMe = document.querySelector('#target');
console.log(selectMe);

selectMe.setAttribute("style","color:red");
//selectMe.setAttribute("class", "hello");
selectMe.classList.add("hello")
//selectMe.classList.add("hii");
//selectMe.setAttribute("class", "hell"); 
//用setAttribute不適用於有一個值以上的屬性,護被覆蓋
selectMe.textContent = "被選了01";

//題目三 監聽 DOM
selectMe.addEventListener('click', function(e){

    if(selectMe.innerText == '已被點擊'){
        selectMe.style.background = 'white'
        selectMe.textContent = '被選了01';
        return
    };
    if(selectMe.innerText = '被選了01'){
        selectMe.style.background = 'yellow';
        selectMe.textContent = '已被點擊';
        return
    }
});

//題目四：創造、插入 DOM
//請製作一個按鈕，當點擊時會在 HTML 文件中新增以下內容：
const helloWorldBtn = document.querySelector('.helloWorldBtn');

//console.log(helloWorldBtn)
helloWorldBtn.addEventListener("click", function(e){
   // console.log(helloWorldBtn.nextElementSibling);
    const content = helloWorldBtn.nextElementSibling;
    content.setAttribute("class", "d-block")
});

//題目五：監聽表單
//請監聽以下表單，當 submit 事件觸發時阻止預設事件發生，並打印事件至終端。
const form = document.querySelector('.data-form');
let name = form.querySelector('input')//抓到第一個input標籤
const submit = name.nextElementSibling
//console.log(submit);
//console.log(form.querySelectorAll('input'))//是抓html標籤

submit.addEventListener('click', function(e){
    e.preventDefault();
    console.log(name.value)
    
});

//題目六：加減計數器
//請製作一個計數器，具有增加、減少、重設按鈕以及顯示目前數字的功能。

//dom
const currentNum = document.querySelector('.currentNum');
const plus = document.querySelector('.plus');
const reset = document.querySelector('.reset');
const minus = document.querySelector('.minus');

let currentNumber = 0;

function add(num){
    currentNumber += num
    currentNum.textContent =  currentNumber;
};

function min(num){
    currentNumber -= num
    currentNum.textContent =  currentNumber;
};

function res(){
    currentNumber = 0;
    currentNum.textContent =  currentNumber;
};

plus.addEventListener('click', (e)=>{
    
    let num = plus.innerText.split('');
    num.shift();
    num = Number(num.join(''))
    console.log(num);
    add(num)
});

reset.addEventListener('click',(e)=>{
    res();
});

minus.addEventListener('click', (e)=>{
    let num = minus.innerText.split('');
    num.shift();
    num = Number(num.join(''))
    console.log(num);
    num = Number(num)
    min(num)
});

//題目七：加減計數器(進階)
//接續題目六，請製作並監聽一個表單，讓用戶可以修改一次增加與減少的數量。
//dom
const mulForm = document.querySelector('.mul-form')
let mulValue = mulForm.querySelector('input');
const mulSubmit = mulValue.nextElementSibling;

mulSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("click");
    plus.textContent = `+${mulValue.value}`;
    minus.textContent = `-${mulValue.value}`;
});

//題目八：手風琴
//請製作一個點擊按鈕可以切換文字顯示狀態的元件，有 n 多個這樣的元件，請一次選取起來並綁上監聽。
//dom
const sec = document.querySelector('.sec');
sec.addEventListener('click', (e)=>{
    e.preventDefault();
    //console.log(e.target.nodeName);
    if(e.target.nodeName !== "A"){
        return
    };
    if(e.target.nextElementSibling.getAttribute('class') == "d-none"){
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.setAttribute("class", "d-block");
        return
    };
    if(e.target.nextElementSibling.getAttribute('class' )== "d-block"){
        console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.setAttribute("class", "d-none");
        return
    };
    
});

//題目九：頁籤
//dom
const london = document.querySelector('.london');
london.dataset.country = 'UK'
const paris = document.querySelector('.paris');
paris.dataset.country = 'Frence'
const tokyo = document.querySelector('.tokyo');
tokyo.dataset.country = 'Japan'
const capital = document.querySelector('.capital');
const description = document.querySelector('.description');
const pagination = document.querySelector('.pagination')

pagination.addEventListener('click', (e)=>{
    if(e.target.nodeName !== 'H4'){
        return
    };
    console.log(e.target.innerText);
    let city = e.target.innerText;
    capital.textContent = city;
    console.log(e.target.getAttribute('data-country'));
    description.textContent = `${city} is the capital of ${e.target.getAttribute('data-country')}`
});

//題目十 
//請製作一個代辦事項，像上周的題目一樣，不過將內容呈現至網頁中。代辦事項
const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector('input');
const todoSubmit = todoInput.nextElementSibling;
const todoList = document.querySelector('.todoList')

let todoArr = [];
todoSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(todoInput.value == ""){
        return
    };
   // console.log(todoInput.value);
    todoArr.push(todoInput.value);
    console.log(todoArr);
   render(todoArr)
    
});


function render(data){
    todoList.innerHTML=data.map((item)=> ` <li class="d-flex align-items-center">
    <input type="checkbox">
    <p class="mb-0">${item}</p>
    <input type="button" value="delete">
    </li>`).join('')
}

todoList.addEventListener("click", (e)=>{
    //console.log(e.target.value)
    if(e.target.value !== "delete"){
        return
    };
    console.log(e.target.previousElementSibling.innerText);
    let todoContent = e.target.previousElementSibling.innerText;
   // let newTodoArr = [];
    todoArr.forEach((item, index)=>{
        if(item == todoContent){
            todoArr.splice(index, 1)
        }
    });
    console.log(todoArr);
    render(todoArr)
    return
})


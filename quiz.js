const data = [
    {
        question:'HTML Full form?',
        a:'Hyper Text Markup Language', 
        b:'High Text Markup Language', 
        c:'Hyper Tabular Markup Language',  
        d:'None of the above',
        correct:'a' 
    },

    {
        question:'Which of the following tag is used to mark a begining of paragraph?',
        a:'<td>', 
        b:'<br/>', 
        c:'<p>',  
        d:'<tr>',
        correct:'c' 

    },

    {
        question:'Correct HTML tag for the largest heading is',
        a:'<h3>', 
        b:'<h1>', 
        c:'<h4>',  
        d:'<h6>',
        correct:'b' 

    },

    {
        question:'The attribute of <form> tag',
        a:'method', 
        b:'action', 
        c:'both of the above',  
        d:'None of the above',
        correct:'c' 

    },

    {
        question:'The attribute, which define the relationship between current document and href\'ed URL is',
        a:'rel', 
        b:'URL', 
        c:'REV',  
        d:'All the above',
        correct:'a' 

    },

    {
        question:'Which tag is used to creates a number list?',
        a:'<li></li>', 
        b:'<ol></ol>', 
        c:'<li></li> and <ol></ol>',  
        d:'None of the above',
        correct:'b' 

    },

    {
        question:'The latest HTML standard is',
        a:'HTML 1.0', 
        b:'HTML 3.0', 
        c:'HTML 2.0',  
        d:'HTML 5.0',
        correct:'d' 

    },

    {
        question:'What is the correct HTML for adding a background color?',
        a:'<background>yellow<Background>', 
        b:'<body color = "yellow">', 
        c:'<body bg color = "yellow">',  
        d:'<body bg = "yellow">',
        correct:'c' 

    },

    {
        question:'Main container for <tr>, <td> and <th> is',
        a:'<table></table>', 
        b:'<group></group>', 
        c:'<data></data>',  
        d:'None of the above',
        correct:'a' 

    },

    {
        question:'How can you make an e-mail link?',
        a:'<mail href +"xxx@y.com">', 
        b:'<a href ="mail to: xxx@y.com">', 
        c:'<a href = "xxx@y.com">',  
        d:'Both (b) and (c)',
        correct:'b' 

    }


];

const answers = document.querySelectorAll('.answer');  
const question = document.getElementById('ques');
const a = document.getElementById('a_opt');
const b = document.getElementById('b_opt');
const c = document.getElementById('c_opt');
const d = document.getElementById('d_opt');
const button = document.getElementById('subbtn'); 
const res = document.getElementById('res'); 
let score = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    deselect();
   const currentData = data[currentQuiz];
   question.innerText = currentData.question;
   a.innerText = currentData.a;
   b.innerText = currentData.b;
   c.innerText = currentData.c;
   d.innerText = currentData.d;
}

function select(){
    let answer = undefined;

    answers.forEach((ans) => {
        if(ans.checked){
            answer =  ans.id;
        }
        
    });
    return answer;
}

function deselect(){
    answers.forEach((ans) => {
        ans.checked = false;       
});
}

button.addEventListener('click', () => {

const answer = select();
    if(answer){

        if(answer === data[currentQuiz].correct){
            score++;
        }
           currentQuiz++;
           if(currentQuiz < data.length){
                   loadQuiz();                   
                }
            else{
            res.innerHTML = `
                             <h5 class="question text-secondary text-center">Congratulations!!!</h5>
                             <h3>Your score is : ${score}/${data.length}</h3>
                             <button class="btn btn-block btn-danger" onclick="location.reload()">Retake Quiz</button>
                             </div>
                             `;
        }
    }
});
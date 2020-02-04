document.getElementById('login-btn').addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display ='flex';
}
);
document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = 'none';
}
);
// for quiz
document.getElementById('quizc').addEventListener('click',

function(){
    document.querySelector('.c-quiz').style.display ='flex';   
}
);
document.querySelector('.close-quiz').addEventListener('click', 
function(){
    document.querySelector('.c-quiz').style.display = 'none';
}
);

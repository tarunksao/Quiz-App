const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');

const score = localStorage.getItem('score');
finalScore.innerText = score;


username.addEventListener('keyup', () => {
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
    e.preventDefault();
    
};
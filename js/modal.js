// modal
const modal = document.getElementById('myModal');
const startLearningBtn = document.getElementById('startLearningBtn');
const closeModal = document.getElementById('closeModal');

startLearningBtn.onclick = function() {
    modal.style.display = 'flex';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
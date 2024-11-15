// Function to toggle display of learning resources
function showResource(id) {
  const element = document.getElementById(id);
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Function to start the quiz
function startQuiz() {
  document.getElementById('quiz').style.display = 'block';
}

// Function to submit the quiz
function submitQuiz() {
  const answer = document.querySelector('input[name="q1"]:checked');
  if (answer) {
    if (answer.value === 'b') {
      alert('Correct! Blockchain is a data structure for secure transactions.');
    } else {
      alert('Incorrect! Try again.');
    }
  } else {
    alert('Please select an answer.');
  }
}

// Function to display projects
function showProjects() {
  const element = document.getElementById('projects');
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Function to display support information
function showSupport() {
  const element = document.getElementById('support-resources');
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}
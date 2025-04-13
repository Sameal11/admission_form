function showStep(stepId) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
  // Remove active class from all tabs
  document.querySelectorAll('.step').forEach(tab => tab.classList.remove('active'));
  // Show the selected step
  document.getElementById(stepId).classList.add('active');
  // Highlight the selected tab
  document.querySelector(`.step[onclick="showStep('${stepId}')"]`).classList.add('active');
  }


function goToStudentInfo() {
  showStep('studentInfo', 0);
}

function goToParentInfo() {
  showStep('parentInfo', 1);
}

function goToAcademicInfo() {
  showStep('academicInfo', 2);
}
function goToDocumentUpload(){
  showStep('documentupload', 3);
}
function goToStatus(){
  showStep('statuses', 4);
}

//academic year
function setCurrentAcademicYear() {
  const input = document.getElementById("academicYear");
  const today = new Date();
  const currentMonth = today.getMonth(); // 0 = Jan, 11 = Dec
  let startYear;

  // Assuming academic year starts in April
  if (currentMonth >= 3) {
    startYear = today.getFullYear();
  } else {
    startYear = today.getFullYear() - 1;
  }

  const endYear = startYear + 1;
  input.value = `${startYear}-${endYear}`;
}

window.addEventListener("DOMContentLoaded", setCurrentAcademicYear);


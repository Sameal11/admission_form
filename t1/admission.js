function showStep(stepId, stepIndex) {
  const steps = document.querySelectorAll('.form-step');
  const indicators = document.querySelectorAll('.step');

  steps.forEach(step => step.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));

  document.getElementById(stepId).classList.add('active');
  indicators[stepIndex].classList.add('active');
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
  showStep('status', 4);
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


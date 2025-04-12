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

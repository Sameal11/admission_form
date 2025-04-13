function showStep(stepId) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
  // Remove active class from all tabs
  document.querySelectorAll('.step').forEach(tab => tab.classList.remove('active'));
  // Show the selected step
  document.getElementById(stepId)?.classList.add('active');
  // Highlight the selected tab (safely)
  const tab = document.querySelector(`.step[onclick="showStep('${stepId}')"]`);
  if (tab) tab.classList.add('active');
}


function addDocumentField() {
  const additionalDocuments = document.getElementById('additionalDocuments');
  const newField = document.createElement('div');
  newField.className = 'form-group';
  newField.innerHTML = `
    <label for="additionalDocument">Upload Additional Document</label>
    <input type="file" name="additionalDocument" accept="application/pdf,image/*">
  `;
  additionalDocuments.appendChild(newField);
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


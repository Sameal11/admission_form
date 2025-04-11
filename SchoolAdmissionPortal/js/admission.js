// Simple JavaScript for Admission Form
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const admissionForm = document.getElementById('admissionForm');
    const fullName = document.getElementById('fullName');
    const fatherName = document.getElementById('fatherName');
    const motherName = document.getElementById('motherName');
    const dateOfBirth = document.getElementById('dateOfBirth');
    const termsAgreement = document.getElementById('termsAgreement');
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        const requiredFields = document.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                
                // Add error message if it doesn't exist
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (!errorMsg) {
                    const msg = document.createElement('span');
                    msg.className = 'error-message';
                    msg.textContent = 'This field is required';
                    msg.style.color = 'red';
                    msg.style.fontSize = '0.8rem';
                    msg.style.display = 'block';
                    field.parentElement.appendChild(msg);
                }
            } else {
                field.classList.remove('error');
                // Remove error message if it exists
                const errorMsg = field.parentElement.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
        
        return isValid;
    }
    
    // Add event for file inputs to show filename
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileName = this.value.split('\\').pop();
            if (fileName) {
                const small = document.createElement('small');
                small.textContent = 'Selected file: ' + fileName;
                
                // Remove any existing file info
                const existingInfo = this.parentElement.querySelector('small:not(:first-child)');
                if (existingInfo) {
                    existingInfo.remove();
                }
                
                this.parentElement.appendChild(small);
            }
        });
    });
    
    // Add current date as min date for date fields
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    
    const nextPayDate = document.getElementById('nextPayDate');
    if (nextPayDate) {
        nextPayDate.min = currentDate;
    }
    
    // Form submission
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!termsAgreement.checked) {
                alert('Please agree to the terms');
                return;
            }
            
            alert('Admission form submitted successfully!');
            // In a real app, this would submit the form to the server
            // For demo, we're just showing an alert
            
            // Optionally reset the form after successful submission
            // admissionForm.reset();
        });
    }
    
    // Remove validation errors when input changes
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
});
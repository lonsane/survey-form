// script.js

// Function to validate and submit the form
function submitSurvey() {
    const form = document.getElementById('careerSurvey');
    const formData = new FormData(form);

    // Collecting and logging form data
    const surveyData = {
        fullName: formData.get('fullName'),
        ageDob: formData.get('ageDob'),
        gender: formData.get('gender'),
        location: formData.get('location'),
        qualification: formData.get('qualification') || formData.get('qualificationOther'),
        specialization: formData.get('specialization'),
        certifications: formData.get('certifications'),
        careerInterests: formData.getAll('careerInterests').filter(value => value !== 'other').concat(formData.get('careerInterestsOther') || []),
        shortTermGoals: formData.get('shortTermGoals'),
        longTermGoals: formData.get('longTermGoals'),
        learningStyle: formData.get('learningStyle'),
        timeCommitment: formData.get('timeCommitment'),
        skills: formData.get('skills'),
        salaryExpectation: formData.get('salaryExpectation')
    };

    // Simple validation
    if (!surveyData.ageDob || !surveyData.location || !surveyData.qualification) {
        alert('Please fill in all the required fields!');
        return;
    }

    // Simulate submission (you can replace this with an actual API call)
    console.log('Survey Submitted:', surveyData);
    alert('Thank you for completing the survey! Your responses have been recorded.');
    form.reset(); // Reset the form after submission
}

// Optional: Add real-time validation or interactivity
document.addEventListener('DOMContentLoaded', () => {
    const otherQualificationInput = document.querySelector('input[name="qualificationOther"]');
    const qualificationRadios = document.querySelectorAll('input[name="qualification"]');

    qualificationRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            otherQualificationInput.disabled = radio.value !== 'other';
            if (radio.value !== 'other') otherQualificationInput.value = '';
        });
    });

    const otherCareerInput = document.querySelector('input[name="careerInterestsOther"]');
    const careerCheckboxes = document.querySelectorAll('input[name="careerInterests"]');

    careerCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            otherCareerInput.disabled = !document.querySelector('input[name="careerInterests"][value="other"]').checked;
            if (!document.querySelector('input[name="careerInterests"][value="other"]').checked) {
                otherCareerInput.value = '';
            }
        });
    });
});

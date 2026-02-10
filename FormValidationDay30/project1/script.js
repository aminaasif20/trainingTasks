const form = document.getElementById('validationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const telephoneInput = document.getElementById('telephoneInput');
const bioInput = document.getElementById('bioInput');

const validations = {
  firstName: {
    validate: (value) => value.trim().length >= 3,
    errorElement: document.getElementById('firstNameError')
  },
  lastName: {
    validate: (value) => value.trim().length >= 3,
    errorElement: document.getElementById('lastNameError')
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorElement: document.getElementById('emailError')
  },
  password: {
    validate: (value) => {
      return value.length >= 8 &&
             /[A-Z]/.test(value) &&
             /[a-z]/.test(value) &&
             /[0-9]/.test(value) &&
             /[!@#$%^&*]/.test(value);
    },
    errorElement: document.getElementById('passwordError')
  },
  telephone: {
    validate: (value) => /^03\d{2}-\d{7}$/.test(value)
,
    errorElement: document.getElementById('telephoneError')
  },
  bio: {
    validate: (value) => value.trim().length >= 10 && value.trim().length <= 255,
    errorElement: document.getElementById('bioError')
  }
};
firstName.addEventListener('blur', () => validateField('firstName', firstName));
lastName.addEventListener('blur', () => validateField('lastName', lastName));
emailInput.addEventListener('blur', () => validateField('email', emailInput));
passwordInput.addEventListener('blur', () => validateField('password', passwordInput));
telephoneInput.addEventListener('blur', () => validateField('telephone', telephoneInput));
bioInput.addEventListener('blur', () => validateField('bio', bioInput));

function validateField(fieldName, inputElement) {
  const validation = validations[fieldName];
  const isValid = validation.validate(inputElement.value);

  if (isValid) {
    validation.errorElement.classList.add('hidden');
    inputElement.classList.remove('border-red-500');
    inputElement.classList.add('border-green-500');
  } else {
    validation.errorElement.classList.remove('hidden');
    inputElement.classList.add('border-red-500');
    inputElement.classList.remove('border-green-500');
  }

  return isValid;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isFirstNameValid = validateField('firstName', firstName);
  const isLastNameValid = validateField('lastName', lastName);
  const isEmailValid = validateField('email', emailInput);
  const isPasswordValid = validateField('password', passwordInput);
  const isTelephoneValid = validateField('telephone', telephoneInput);
  const isBioValid = validateField('bio', bioInput);

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isTelephoneValid && isBioValid) {
    alert('Form submitted successfully!');
    form.reset();
    [firstName, lastName, emailInput, passwordInput, telephoneInput, bioInput].forEach(input => {
      input.classList.remove('border-green-500');
      input.classList.add('border-gray-300');
    });
  } else {
    alert('Please fix the errors before submitting');
  }
});
const formData = {
    email: "",
    message: ""
}
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;


const keyLS = "feedback-form-state";

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(keyLS);
    if (savedData) {
        const parsedInfo = JSON.parse(savedData);
        emailInput.value = parsedInfo.email;
        messageTextarea.value = parsedInfo.message;
        formData.email = parsedInfo.email;
        formData.message = parsedInfo.message;
    }
});
form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(keyLS, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert('All fields should be filled');
        return;
    }
    console.log('Form Data', formData);

    localStorage.removeItem(keyLS);
    formData.email = "";
    formData.message = "";
    form.reset();
})


const style = document.createElement('style');
        style.textContent = `
            .feedback-form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                padding: 24px;
                width: 408px;
            }
            label {
                font-family: "Montserrat", sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: 0.04em;
                color: #2e2f42;
                display: flex;
                flex-direction: column;
            }

            button {
                color: #FFF;
                background-color: #4e75ff;
                border: none;
                border-radius: 8px;
                padding: 8px 16px;
                width: 95px;
                height: 40px;
                }
        `;
document.head.appendChild(style);
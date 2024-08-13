const scriptURL = 'https://script.google.com/macros/s/AKfycbydWSN5ADFgjel8tkfVWTT6O9_kjKRkOSc6m5lMvMJ5nvQJ7IJYycuEQcD4ldMD2yrX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Formulario enviado com sucesso!" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
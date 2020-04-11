$(document).ready(
    function handleFormSubmit(event) {
        event.preventDefault();

        const data = {};

        const formDataContainer = document.getElementsByClassName('form_results')[0];

        formDataContainer.textContent = JSON.stringify(data, null, "");
    } 

);
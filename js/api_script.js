/* 
 * OBSOLETE / DEVELOPMENT TEST * 
 * This script was used to test the contact form with the local *
 * Python backend running on localhost:8000. *
 * The contact form is now handled by the production Python API. *
 * This file is retained temporarily for reference and can be *
 * removed once no longer needed. 
 */

const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:8000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resultData = await response.json();

        result.textContent = resultData.message;

        console.log(resultData);

    } catch (error) {
        result.textContent = "Something went wrong.";
        console.error(error);
    }
});
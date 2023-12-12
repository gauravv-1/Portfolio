
// change changeBackground

function changeBackground() {
    var checkbox = document.getElementById("backgroundCheckbox");
    var body = document.body;

    if (checkbox.checked) {
        body.style.background = "linear-gradient(135deg, #3498db, #8e44ad)";
    } else {
        body.style.background = ""; // Reset to the default background when unchecked
    }
}

//sroll
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//contact
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a string with the form data
    var formData = "Name: " + name + "\n" +
                    "Email: " + email + "\n" +
                    "Contact Information: " + message;

    // Send the form data to the server for file update
    updateFile(formData);
}

function updateFile(formData) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/update-file", true);

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                alert("Form data updated successfully!");
            } else {
                alert("Error updating form data.");
            }
        }
    };
    xhr.send(JSON.stringify({ data: formData }));
}



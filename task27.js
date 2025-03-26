document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const tableBody = document.getElementById("userTableBody");

    // Function to load users from localStorage
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (tableBody) {
            tableBody.innerHTML = "";
            users.forEach(user => {
                const row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        }
    }

    // Function to store user details
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const newUser = { name, email, contact, address };
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    // Load users on the view page
    if (tableBody) {
        loadUsers();
    }
});

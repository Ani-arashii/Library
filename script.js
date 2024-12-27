document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Kiểm tra các tiêu chí mật khẩu
    const passwordCriteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        special: /[@$!%*?&#]/.test(password),
    };

    if (Object.values(passwordCriteria).includes(false)) {
        alert("Password does not meet the required criteria!");
        return;
    }

    // Gửi thông tin đến server (backend)
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert("Account created successfully!");
                window.location.href = "/login";
            } else {
                alert(data.message || "An error occurred!");
            }
        })
        .catch((error) => console.error("Error:", error));
});

const login = (event) => {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    let user = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

    let storedUser = users[email];

    if(storedUser && storedUser.password === password){
        alert("Đăng nhập thành công");
        window.location.href = "index.html";
    }else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}

document.getElementById('login-form').addEventListener('submit', login);
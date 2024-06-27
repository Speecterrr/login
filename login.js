function toggleForm() {
    const registro = document.getElementById('registro');
    const login = document.getElementById('login');
    
    if (registro.classList.contains('active')) {
        registro.classList.remove('active');
        setTimeout(() => {
            login.classList.add('active');
        }, 300);
    } else {
        login.classList.remove('active');
        setTimeout(() => {
            registro.classList.add('active');
        }, 300);
    }
}

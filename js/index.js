
    const user = document.getElementById("user");
    const password = document.getElementById("password");
    const boton = document.getElementById("iniciar");
    
    boton.addEventListener("click", function() {

        if(user.value === "" || password.value === ""){
        alert("Completa todos los campos");
        return;
    }
        const cuentas = JSON.parse(
            localStorage.getItem("cuentas")) || [];

        const cuenta = cuentas.find(function(usuario) {
            return (
                usuario.email === user.value &&
                usuario.password === password.value
            );
        });

    if(cuenta){
        localStorage.setItem(
                "usuarioActivo",
                JSON.stringify(cuenta)
            );
        if(cuenta.rol === "admin"){
            window.location.href = "pag/dashboard.html";
        }else if(cuenta.rol === "user"){
            window.location.href = "pag/tienda.html";
        }
    }else{
        alert("Cuenta incorrecta");
    }
    });

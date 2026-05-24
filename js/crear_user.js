
    const cuentas = JSON.parse(localStorage.getItem("cuentas")) || [];
    const boton = document.getElementById("registrar");

    boton.addEventListener("click", function() {

        const nombre = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const nuevaCuenta = {
            user: nombre,
            email: email,
            password: password,
            rol: "user"
        };
        cuentas.push(nuevaCuenta);

        localStorage.setItem(
            "cuentas",
            JSON.stringify(cuentas)
        );
        console.log(cuentas);
        alert("Cuenta creada con exito")
        window.location.href = "/index.html";
    });
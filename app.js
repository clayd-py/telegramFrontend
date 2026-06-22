console.log("JS cargado");

const formulario = document.getElementById("myForm");

// 2. Escuchamos cuando el usuario hace "submit" (clic en el botón)
formulario.addEventListener("submit", function(event) {
    
    // 3. ¡IMPORTANTE! Evita que la página se recargue y se borren los datos
    event.preventDefault();

// Captura el valor del campo de texto
    const textoUsuario = document.getElementById("message").value;
    const passUsuario = document.getElementById("password").value;
    const emailUsuario = document.getElementById("email").value;
    const dateUsuario = document.getElementById("date").value;

    // Envía el texto a tu archivo Python (servidor)
    fetch("https://telegram-message-handler.up.railway.app/guardar-usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            texto: textoUsuario,
            password: passUsuario,
            correo: emailUsuario,
            fecha: dateUsuario
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta de Python:", data.mensaje);
        alert("¡Datos enviados con éxito!"); // Opcional: avisa al usuario en la web
    })
    .catch(error => console.error("Error:", error));
});

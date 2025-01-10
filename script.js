
//SIN CSS

/*
function calcularColor() {
    var fechaNacimiento = document.getElementById('birthdate').value;
  
    // Asegurarse de que la fecha de nacimiento tiene 8 dígitos.
    if (fechaNacimiento.length !== 8 || isNaN(fechaNacimiento)) {
      document.getElementById('result').textContent = 'Ingresa una fecha válida (DDMMYYYY)';
      return;
    }
  
    // Asumiendo que la fecha de nacimiento se divide en tres partes: DD, MM, YYYY.
    var DD = parseInt(fechaNacimiento.slice(0, 2));
    var MM = parseInt(fechaNacimiento.slice(2, 4));
    var YYYY = parseInt(fechaNacimiento.slice(4, 8));
  
    // Introduce variabilidad adicional en los componentes antes de la conversión a hexadecimal.
    var nuevoDD = (DD * 123) % 256; // Aplicamos una operación a DD
    var nuevoMM = (MM * 456) % 256; // Aplicamos una operación a MM
    var nuevoYYYY = (YYYY * 789) % 256; // Aplicamos una operación a YYYY
  
    // Calcular un valor hexadecimal basado en los componentes de la fecha modificados.
    //var colorHexadecimal = '#' + nuevoDD.toString(16) + nuevoMM.toString(16) + nuevoYYYY.toString(16);
    var colorHexadecimal = '#';
      colorHexadecimal += nuevoYYYY.toString(16).padStart(2, '0');
      colorHexadecimal += nuevoMM.toString(16).padStart(2, '0');
      colorHexadecimal += nuevoDD.toString(16).padStart(2, '0');
  
  
    // Cambiar el color de fondo de toda la página (body).
    document.body.style.backgroundColor = colorHexadecimal;
  
    // Muestra el resultado en la página.
    document.getElementById('result').textContent = 'Tu color de fecha de nacimiento (hexadecimal) es: ' + colorHexadecimal;
  }
*/

// Con CSS

function calcularColor() {
    var fechaNacimiento = document.getElementById('birthdate').value;
  
    // Asegurarse de que la fecha de nacimiento tenga 8 dígitos.
    if (fechaNacimiento.length !== 8 || isNaN(fechaNacimiento)) {
      document.getElementById('result').textContent = 'Ingresa una fecha valida (DDMMYYYY)';
      return;
    }
  
    // Asumiendo que la fecha de nacimiento se divide en tres partes: DD, MM, YYYY.
    var DD = parseInt(fechaNacimiento.slice(0, 2));
    var MM = parseInt(fechaNacimiento.slice(2, 4));
    var YYYY = parseInt(fechaNacimiento.slice(4, 8));
  
    // Introduce variabilidad adicional en los componentes antes de la conversión a hexadecimal.
    var nuevoDD = (DD * 1) % 256; // Aplicamos una operación a DD
    var nuevoMM = (MM * 100) % 256; // Aplicamos una operación a MM
    var nuevoYYYY = (YYYY * 2) % 256; // Aplicamos una operación a YYYY
  
    // Calcular un valor hexadecimal basado en los componentes de la fecha modificados.
    var colorHexadecimal = '#' + nuevoYYYY.toString(16).padStart(2, '0') +
                               nuevoMM.toString(16).padStart(2, '0') +
                               nuevoDD.toString(16).padStart(2, '0');
  
    // Cambiar el color de fondo del cuerpo de la página directamente en JavaScript.
    document.body.style.backgroundColor = colorHexadecimal;
  
    // Muestra el resultado en la página.
    document.getElementById('result').textContent = 'Tu color de fecha de nacimiento (hexadecimal) es: ' + colorHexadecimal;
    
    // Limpia el campo de entrada después del cálculo
    document.getElementById('birthdate').value = '';
  }
  

  //Cambio
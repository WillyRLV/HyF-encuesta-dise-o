var form = document.forms['myform']

form.onsubmit = function(e){
    
    e.preventDefault();
    // if (e.target.value == '1111') {
    //     window.location.replace("/form.html")

    // }
    // else {
    //     e.preventDefault();
    //             alert("no existe esa identificacion")
    //         }
var dni = document.getElementById('DNI').value;
    console.log(dni);

    if (dni == '1111') {
                window.location.replace("../HyF-encuesta-dise-o/index.html")
        
            }
            else {
                alert("no existe esa identificacion")
            }
}

// function auth() {

//     const un = document.forms["myform"]["DNI"].value

//     if (un == '1111') {
//         window.location.replace("/form.html")

//     }
//     else {
//         alert("no existe esa identificacion")
//     }

// }
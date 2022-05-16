if (document.getElementById("idservicios")) {
    let cad =  //html
    `
    <p class="textos">Nuestro objetivo es lograr la mejor salud dental mediante la prevención de sus problemas. Le invitamos a que reserve su cita y venga a visitarnos. Estos son los tratamientos dentales que podemos ofrecerles en nuestra clínica dental.</p>
    `
    for (let i = 0; i < data.length; i++) {
        cad += //html
            `
            <div class="divisores">
            <h3>${data[i].nombre}</h3>
            `
        if (i==0 || i%2==0) {
            cad += //html
            `
            <div>
                <p class="serv-texto">${data[i].descripcion}</p>
                <div class="serv-img"><img src="${data[i].imagen}" class="galeria-der" alt="${data[i].nombre}"></div>
            </div>
            `
        } else {
            cad += //html
            `
            <div>
                <div class="serv-img"><img src="${data[i].imagen}" class="galeria-izq" alt="${data[i].nombre}"></div>
                <p class="serv-texto">${data[i].descripcion}</p>
            </div>
            `
        }
        cad+= //html
        `
        </div>
        `
    }
    document.getElementById("idservicios").innerHTML = cad;
}



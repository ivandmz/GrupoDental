//header
if (document.getElementById("idheader")) { //para validar
    
    let header = //html
    `
        <header>
            <a href="index.html"><img src="img/banner.png" alt="Grupo Dental"></a>
        </header>
        <nav>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="index.html#quienes-somos">quienes somos</a></li>
                    <!-- ENLACE LOCAL- INTERNO #QUIENES SOMOS -->
                <li><a href="servicios.html">servicios</a></li>
                <li><a href="contacto.html">contacto</a></li>
            </ul>
            <ul>
                <li><div class="social"><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-square fa-2xl social2"></i></a></div></li>
                <li><div class="social"><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram-square fa-2xl social2"></i></a></div></li>
                <li><div class="social"><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter-square fa-2xl social2"></i></a></div></li>
                <li><div class="social"><a href="https://wa.me/5492612155911?text=¡Estoy+interesado!" target="_blank"><i class="fa-brands fa-whatsapp-square fa-2xl social2"></i></a></div></li>
            </ul>
        </nav>
    `
    document.getElementById("idheader").innerHTML = header;
}



//------------------------------------
//footer
if (document.getElementById("idfooter")) { //para validar
    
    document.getElementById("idfooter").innerHTML = //html
    `
        <p>
            2022 - powered by <a href="mailto:ivandariomunioz@gmail.com?subject=Contacto-Diseno-Web">Champagne-Supernova</a> - All rights reserved
        </p>
    `
}
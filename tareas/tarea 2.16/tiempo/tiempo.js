$(window).on("load", function() {
    llamar();
});

function llamar() {
    const apiKey = 'zsEzXz44X4qycv1';
    const idLocalidad = '3489';
    const apiUrl = `https://api.tutiempo.net/json/?lan=es&apid=${apiKey}&lid=${idLocalidad}`;

    $.get(apiUrl, function(data, status) {
        console.log(status);
        console.log(data);

        let contenido = '<div class="jumbotron text-center">';
        contenido += '<h4><span class="cabe"> El tiempo en </span>';
        contenido += '<span class="local">' + data.locality.name + '</span></h4>';


        contenido += '<div class="col-sm-12 text-center">';
        contenido += '<div class="dia">';
        contenido += '<div class="dia-semana">Hoy</div>';
        contenido += '<div class="dia-semana">' + formatoFecha(data.day1.date) + '</div>';
        contenido += '<div class="col-sm-6 hoyicon text-right">';
        contenido += '<img src="https://v5i.tutiempo.net/wi/01/50/' + data.day1.icon + '.png">';
        contenido += '</div>';
        contenido += '<div class="col-sm-6 text-left dia">';
        contenido += '<div class="maxima">' + data.day1.temperature_max + '°</div>';
        contenido += '<div class="minima">' + data.day1.temperature_min + '°</div>';
        contenido += '</div>';
        contenido += '</div></div>';


        contenido += '<div class="row">';
        for (let i = 2; i <= 7; i++) {
            contenido += '<div class="col-sm-2 dia">';
            contenido += '<div class="dia-semana">' + diaSemana(data['day' + i].date) + '</div>';
            contenido += '<div class="dia-semana">' + formatoFecha(data['day' + i].date) + '</div>';
            contenido += '<div class="col-sm-2 icono"><img src="https://v5i.tutiempo.net/wi/01/50/' + data['day' + i].icon + '.png"></div>';
            contenido += '<div class="col-sm-2 dia">';
            contenido += '<div class="maxima">' + data['day' + i].temperature_max + '°</div>';
            contenido += '<div class="minima">' + data['day' + i].temperature_min + '°</div>';
            contenido += '</div>';
            contenido += '</div>';

        }
        contenido += '</div></div>';

        document.getElementById('tiempo').innerHTML = contenido;
    });
}

function formatoFecha(fecha) {
    let date = new Date(fecha);
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    return dia + "/" + mes;
}

function diaSemana(fecha) {
    let date = new Date(fecha);
    let dia = date.getDay();
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return diasSemana[dia];
}
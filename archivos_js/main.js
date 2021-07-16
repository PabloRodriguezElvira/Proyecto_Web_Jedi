$(window).on("load", async function() {
    try {
        //Llamada get() a base de datos JSON.
        const db = await axios.get("https://database-proyecto-web.herokuapp.com/info_main");

        //Declaración de variables
        const informacion = db.data[0];
        const edu = db.data[1];
        const prog = db.data[2];
        const idiomas = db.data[3];
        const juegos = db.data[4];
        const hobbies = db.data[5];

        //Funciones para insertar los elementos de la página principal.
        informacion.forEach(function(obj) {
            $("#lista_info").append(
                `<li class = "pb-2">${obj.info}</li>`
            )
        })

        $("#educ").append(
            `<div class = "row row-cols-2">
                <div class = "col-auto" id = "lista_edu"></div>  
                <div class = "col-2 ms-3 hide_movil">
                    <img src = ${edu.img} alt = ${edu.alt} width = "180px" height = "100px"> 
                </div>
            </div>`
        )

        function insertarEducacion() {
            edu.info_edu.forEach(function(obj) {
                $("#lista_edu").append(`<li class = "pb-2">${obj.inf}</li>`);
            })
        }

        insertarEducacion();


        prog.forEach(function(obj) {
            $("#programacion").append(
                `<li class = "pb-2 py-2">${obj.leng}</li>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${obj.nivel}%" aria-valuenow="${obj.nivel}" aria-valuemin="" aria-valuemax="100">${obj.nivel}%</div>
                </div>`
            )
        })

        idiomas.forEach(function(obj) {
            $("#idiomas").append(
                `<li class = "pb-2">${obj.idioma}
                    <span class = "px-3 estrellas" id = ${obj.id}></span>
                    <span class = "pe-2">${obj.nivel}</span>
                    <img src = ${obj.img} alt = ${obj.alt} class = "fotos_idiomas" style = "width: 10%;"> 
                </li>`
            )
        })
        
        function insertarEstrellas() {
            for (let i = 0; i < 5; ++i) {
                $("#esp").append(`<i class="${idiomas[0].estrella}"></i>`);
                $("#cat").append(`<i class="${idiomas[0].estrella}"></i>`);
            }
            for (let i = 0; i < 3; ++i) {
                $("#eng").append(`<i class="${idiomas[0].estrella}"></i>`);
            }
            $("#eng").append(`<i class="${idiomas[0].estrella_negra}"></i>`);
            $("#eng").append(`<i class="${idiomas[0].estrella_negra}"></i>`);
        }

        insertarEstrellas();  
        
        juegos.forEach(function(obj) {
            $("#juegos").append(
                `<div class = "col py-3">
                    <img src = ${obj.img} alt = ${obj.alt} class = "iconos_juegos"><h6 class = "px-2">${obj.name}</h6>
                </div>`
            )
        })

        $("#hobbies").append(
            `<div class = "row row-cols-2">
                <div class = "col-auto" id = "hobb"></div>
                <div class = "col-2 mx-5 hide_movil">
                    <img src = ${hobbies.img} alt = ${hobbies.alt} width = "120" height = "120"> 
                </div>
            </div>`
        )

        function insertarHobbies() {
            hobbies.info_hobbies.forEach(function(obj) {
                $("#hobb").append(`<li class = "py-2">${obj.inf}</li>`);
            })
        }

        insertarHobbies();
    } 
    catch (error) {
        console.log(error);
    }
})
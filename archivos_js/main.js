$(window).on("load", async function() {

    let db = await axios.get("https://database-proyecto-web.herokuapp.com/info_main");
    let info = db.data[0];
    let edu = db.data[1];
    let prog = db.data[2];
    let esp = db.data[3];
    let cat = db.data[4];
    let eng = db.data[5];

    $("#lista_info").append(
        `<li class = "pb-2">${info.campo1}</li>
        <li class = "py-2">${info.campo2}</li>
        <li class = "py-2">${info.campo3}</li>
        <li class = "py-2">${info.campo4}</li>`
    )
    $("#educ").append(
        `<li class = "pb-2">${edu.campo1}</li>
        <li class = "py-2">${edu.campo2}</li>
        <li class = "py-2">${edu.campo3}</li>`
    )
    $("#programacion").append(
        `<li class = "pb-2">${prog.leng1}</li>
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="" aria-valuemax="100">${prog.nivel1}</div>
        </div>
        <li class = "py-2">${prog.leng2}</li>
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 40%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${prog.nivel2}</div>
        </div>
        <li class = "py-2">${prog.leng3}</li>
        <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${prog.nivel3}</div>
        </div>`
    )

    function insertarEstrellas() {
        console.log($(".estrellas"));
        for (let i = 0; i < 5; ++i) {
            $(".estrellas").append(`<i class="${esp.estrella}"></i>`);
        }
    }
  
    $("#idiomas").append(
        `<li class = "pb-2 pepega">${esp.idioma}
            <span class = "estrellas px-3"></span>
            <span class = "pe-2">${esp.nivel}</span>
            <img src = ${esp.img} alt = ${esp.alt} class = "fotos_idiomas"> 
        </li>
        <li class = "pb-2 pepega">${cat.idioma}
            <span class = "estrellas px-3"></span>
            <span class = "pe-2">${cat.nivel}</span>
            <img src = ${cat.img} alt = ${cat.alt} class = "fotos_idiomas"> 
        </li>
        <li class = "pb-2 pepega">${eng.idioma}
            <span class = "estrellas px-3"></span>
            <span class = "pe-2">${eng.nivel}</span>
            <img src = ${eng.img} alt = ${eng.alt} class = "fotos_idiomas"> 
        </li>`
    )

    insertarEstrellas();  

    
    

})
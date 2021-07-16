$(window).on("load", async function() {
    try {
        //Llamada get() a base de datos JSON.
        const response = await axios.get("https://database-proyecto-web.herokuapp.com/info_iframes");

        //Se introducen todos los iframes en el main.
        response.data.forEach(function(obj) {
            $("#content").append(
                `<div class = "col ${obj.margin}" align = "center">
                    <p class = "subtitulo">${obj.title}</p>
                    <iframe title = ${obj.title} class = "iframe_settings" src = ${obj.url}></iframe>
                </div>`
            )
        })
    } 
    catch (error) {
        console.log(error);
    }
})
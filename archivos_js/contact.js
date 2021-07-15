$(window).on("load", async function() {

    $("#form").on("submit", function(evt) {
        evt.preventDefault();

        //Borra las alertas si ya han sido creadas.
        $("#miss_alert").remove();
        $("#hit_alert").remove();

        const array = evt.currentTarget; //array con el HTML del formulario. Con [i].value se sacan los inputs de cada campo.

        const email = array[0].value;
        const name = array[1].value;
        const phone_num = array[2].value;
        const message = array[3].value;

        if (!email || !name || !phone_num || !message) {
            $("#principal").append(
                `<div class="alert alert-dismissible alert-danger d-flex align-items-center style_alerta" role="alert" id = "miss_alert">
                    <i class="bi bi-exclamation-triangle-fill fs-3 me-3 mb-1"></i>
                    <div>All the fields are compulsory!</div>  
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        }
        else {
            $("#principal").append(
                `<div class="alert alert-dismissible alert-success d-flex align-items-center style_alerta hit" role="alert" id = "hit_alert">
                        <i class="bi bi-check-circle-fill fs-3 me-3 mb-1"></i>
                        <div>Your message was successfully sent!</div>  
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
            try {
                axios.post("https://database-proyecto-web.herokuapp.com/info_users", { email, name, phone_num, message }); 
            } 
            catch (error) {
                console.log(error);
            }
        }
    })
})
img = document.getElementById("img");

function getImg(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: "https://dog.ceo/api/breeds/image/random",
        async: false,
        crossDomain: true,

        complete: function(data){
            console.log(data.message)
        }


    });
}
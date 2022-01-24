$(document).ready(function(){
    $(".point-submit").click(function (e){
        e.preventDefault();
        const dataJson = JSON.stringify(getCoords());
        sendAjax(dataJson);
    })
})

function getCoords(){
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const r = document.getElementById("r").value;
    const data = {
        x:x,
        y:y,
        r:r
    }
    return data;
}

function sendAjax(data){
    $.ajax({
        url: '/api/v1/points',
        method: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: data,
        success: function(resp){
            alert(resp);
        }
    })
}
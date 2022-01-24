export const sendAjax = (data, method, url, contentType, callback) => {
    let ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.setRequestHeader("Content-Type", contentType);
    if (data && data!=""){
        ajax.send(data);
    } else {
        ajax.send();
    }
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status != 200){
            alert(ajax.response);
        } else if (ajax.readyState === 4){
            callback(ajax.response);
        } 
    }
}
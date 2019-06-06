let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> xhr = new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status !== 200){
                console.log('error');
            } else {
                cb(xhr.responseText);
            }
        }
    }
};
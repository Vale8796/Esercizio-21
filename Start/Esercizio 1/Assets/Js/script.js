var i = (sessionStorage.getItem("counter")) ? sessionStorage.getItem("counter") : 0;

setInterval(counter, 1000);

function counter() {
    i++

    document.getElementById('timer').innerHTML = i + ' secondi di sessione aperta';

    sessionStorage.setItem('counter', i);
    
}







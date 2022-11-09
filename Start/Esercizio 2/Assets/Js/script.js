class Utente {
    constructor(_nome) {
        this.nome = _nome;
    }
}

var btn = document.getElementById('log');
var btnDelete = document.getElementById('delete');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let newUtente = new Utente(nome);
    if(!nome) {
        return document.getElementById('testo').innerHTML = 'No Data';
        localStorage.clear();       
    }
    document.getElementById('testo').innerHTML = 'Ciao, ' + nome;
    localStorage.setItem('user', JSON.stringify(newUtente));
});

btnDelete.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('nome').value = '';
    document.getElementById('testo').innerHTML = '';
    localStorage.clear();

});

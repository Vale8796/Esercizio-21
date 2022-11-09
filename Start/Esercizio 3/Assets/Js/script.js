axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users/1').then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users/5').then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.post('https://jsonplaceholder.typicode.com/users/', {name: 'Valeria',username: 'Vale'}).then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.put('https://jsonplaceholder.typicode.com/users/1', {name: 'Valeria',username: 'Vale'}).then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.delete('https://jsonplaceholder.typicode.com/users/1').then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});


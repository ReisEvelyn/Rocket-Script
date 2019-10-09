var xhr = new XMLHttpRequest();
console.log('teste');

xhr.open('GET', 'https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.onreadystatechange === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}
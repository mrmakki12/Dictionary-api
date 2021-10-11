const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const submit = document.getElementById('word-search-submit');
const definition = document.getElementById('definition');

async function getDefinition(event) {
    event.preventDefault();
    let word = document.getElementById('word-search').value;
    let urlToFetch = `${api}${word}`;

    try {
        const response = await fetch(urlToFetch);
        const jsonResponse = await response.json();
        definition.innerText = jsonResponse[0].meanings[0].definitions[0].definition;
    } catch(error) {
        console.log(error);
        definition.innerText = `Sorry, we couldn't find the definition of ${word} :(`;
    }

    document.getElementById('word-search').value = '';
}

submit.addEventListener('click', getDefinition);
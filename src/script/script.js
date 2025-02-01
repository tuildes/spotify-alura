const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultsPlaylist = document.getElementById("result-playlists");

async function requestApi(searchTerm) {
    const url = `https://sturdy-zebra-j645wpxg97qcqpwq-3000.app.github.dev/artists?name_like=${searchTerm}`;

    await fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    resultsPlaylist.classList.add('hidden');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultsPlaylist.classList.remove('hidden');
        resultsArtist.classList.add('hidden');
    } else {
        await requestApi(searchTerm)
    }
})
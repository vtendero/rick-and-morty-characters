const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then (response => response.json())
        .then(data => {
            return data.results.map(character => {
                return {
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    type: character.type,
                    gender: character.gender,
                    origin: character.origin.name,
                    location: character.location.name,
                    image: character.image,
                    episodes: character.episode.length
                }
            });
        });
};

export default getDataFromApi;
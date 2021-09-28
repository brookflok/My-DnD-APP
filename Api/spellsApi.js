export const getSpellsFromApi = async () => {
    let response = await fetch(
      'https://www.dnd5eapi.co/api/spells/'
    );
    let spells = await response.json();
    return spells.results;
  }

export const getOneSpellFromApi = async (index) => {
    const url =  'https://www.dnd5eapi.co/api/spells/'+index
    let response = await fetch(
        url
    )
    let spell = await response.json()
    return spell
}

  export default getSpellsFromApi
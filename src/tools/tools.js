
export const firstUpperCase = (word) => {     
     return word.charAt(0).toUpperCase() + word.slice(1);     
}   

export const fixGeneration = (name) => {
    let word = name.split("-");
    word[1] = word[1].toUpperCase();
    word[0] = firstUpperCase(word[0]);
    return word.join(" ");
}

export const getGenerationNumber = (name) => {
    let word = name.split("-");
    let number = word[1];
    let result = 0;

    for (let t = 0; t < number.length; t++) {
        switch (number[t]) {
            case "i": result += number[t + 1] === 'v' ? -1 : 1; break;
            case "v": result += 5; break;
            case "x": result += 10; break;
            case "l": result += 50; break;
            case "c": result += 10; break;
            case "d": result += 500; break;
            case "m": result += 1000; break;
            default: result += 0;
        }
    }
    return result;
}


export const getPokemonID = (pokeURL) =>{
    let url = pokeURL.split('/');  
    return url[url.length -2]    
}

export const getFrontSprite = (pokeURL) =>{  
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonID(pokeURL)}.png`    
}

export const typeColor = {
    normal:'#aaaa99',
    fire:'#f08030',
    water:'#3399ff',
    electric:'#ffcc33',
    grass:'#5e9968',
    ice:'#98d8d8',
    fighting:'#b95443',
    poison:'#aa5599',
    ground:'#ddbb55',
    flying:'#8899ff',
    psychic:'#ff5599',
    bug:'#aabb22',
    rock:'#bbaa66',
    ghost:'#6666bb',
    dragon:'#7766ee',
    dark:'#775544',
    steel:'#aaaabb',
    fairy:'#ee99ac', 
    null: '#68a090 '  
}
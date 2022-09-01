import {useEffect, useState} from "react";

export default function PokeballImage({image}) {
    const [pokeballs, setPokeballs] = useState("");

    const newItems = image.url;

useEffect(() => {
    fetch(newItems)
    .then((response) => response.json())
    .then((data) => 
        setPokeballs(data.sprites.default));
    }, [newItems]); 
    
    return (
        <li>
            <img alt="" src={pokeballs} />
            {image.name}
        </li>
    )
}
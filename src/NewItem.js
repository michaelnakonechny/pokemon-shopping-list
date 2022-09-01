import {useEffect, useState} from 'react';
import PokeballImage from "./Image";

export default function NewItem() {
const [newItems, setNewItems] = useState([]);

const itemURL = 'https://pokeapi.co/api/v2/item/';

useEffect(() => {
    fetch(itemURL)
    .then((response) => response.json())
    .then((data) => {
      setNewItems(data.results);
      })
      .catch((error) => console.error(error));
    }, [itemURL]);

    return (
        <div>
            <h2>Buy some Pokeballs:</h2>
            <ul>
                {newItems.map((newItem) => {
                return <PokeballImage key={newItem.name} image={newItem} />
            })}
            </ul>
        </div>
    )
}

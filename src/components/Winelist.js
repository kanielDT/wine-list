
import { useState } from "react"
import WineCard from "./WineCard"

export default function Winelist() {
    const [ theWines, setTheWines ] = useState()
    const getWines = () => {
        fetch("https://api.sampleapis.com/wines/reds")
        .then(response => response.json())
        .then(data => setTheWines(data))
        .catch(alert)
    }
    return (
        <section className="wine-list">
            {(!theWines)
                ? <button onClick={getWines}>Get Wine List</button>
                : theWines.map(wine => (
                    <WineCard key={wine.id} wine={wine} />
                ))
            }
        </section>
    )
} 
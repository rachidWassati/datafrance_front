import React, { useEffect, useState } from "react";
import styles from './Search.module.scss';


interface SearchProps {
    selectedCity: string,
    onSelectedChange: Function
}


const Search: React.FC<SearchProps> = ({selectedCity, onSelectedChange}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const search = () => {
            fetch(`http://localhost:3000/api/cities/${term}`)
                .then(res => res.json())
                .then(
                    (data) => {
                        //case when city is outside France
                        if(!data.length) {
                            setOpen(false)
                            return;
                        }

                        setIsLoaded(true);
                        setResults(data);
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error)
                    })
        }

        const timeoutId = setTimeout(() => {
            if(term) {
                search();
            } else {
                setOpen(false);
            }
        }, 500)

        return () => {
            clearTimeout(timeoutId);
        }

        
    }, [term]);

    const resultsList = results.map(
        (result) => <li key={results.indexOf(result)} onClick= {() => {
            onSelectedChange(result);
            setOpen(false);
        }} >{result}</li>
    )

    return (
        <div className={styles.search}>
            <input 
                className=""
                placeholder="Entrer une ville"
                onChange={e => {
                    setOpen(true);
                    setTerm(e.target.value);
                    onSelectedChange(e.target.value)
                }}
                type="text" 
                name="search" 
                id="search"
                value={selectedCity}/>
            <ul className={`${styles.search_result} ${open ? '' : styles.hidden}`}>
                {resultsList}
            </ul>
        </div>
    )
}

export default Search;
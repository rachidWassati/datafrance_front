import { useState, useEffect, useMemo } from "react";
import {Dropdown} from "../bases/Dropdown";
import styles from "./TopBar.module.scss";


export default function TopBar() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [villes, setVilles] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3000/api/cities")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setVilles(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, []);

    useEffect(() => {
        fetch("http://localhost:3000/api/categories")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setCategories(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, []);
        
    const [selectedVille, setSelectedVille] = useState(villes[0]);
    const [selectedGraphe, setSelectedGraphe] = useState(categories[0]);

    return (
        <div className= { styles.container }>
            <Dropdown 
                label="Ville"
                options={villes} 
                selected= {selectedVille} 
                onSelectedChange= {setSelectedVille} 
            />
            <Dropdown
                label="Catégorie"
                options={categories} 
                selected= {selectedGraphe} 
                onSelectedChange= {setSelectedGraphe} 
            />
        </div>
    )
}
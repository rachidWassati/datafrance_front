import { useState, useEffect, useMemo } from "react";
import {Dropdown} from "../bases/Dropdown";
import Search from "../bases/Search";
import styles from "./TopBar.module.scss";

interface TopBarProps {
    selectedCity: string,
    onSelectedCityChange: Function,
    selectedCategory: string,
    onSelectedCategoryChange: Function
}


const TopBar: React.FC<TopBarProps> = ({
    selectedCity, onSelectedCityChange, 
    selectedCategory, onSelectedCategoryChange
}) =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [categories, setCategories] = useState([]);

    console.log(selectedCategory);


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
        
    return (
        <div className= { styles.container }>
            <Search 
                selectedCity= {selectedCity}
                onSelectedChange= {onSelectedCityChange}
                />
            <Dropdown
                options={['Choisissez une catégorie...', ...categories]} 
                onSelectedChange= {onSelectedCategoryChange} 
            />
        </div>
    )
}

export default TopBar
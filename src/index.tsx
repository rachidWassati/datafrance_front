import { useState } from "react";
import ReactDOM  from "react-dom";
import './assets/styles/index.scss';
import { Graphes } from "./components/layout/Graphes";
import MainData from "./components/layout/MainData";
import TopBar from "./components/layout/TopBar";
import styles from './index.module.scss';


const App = () => {
    const [selectedCity, setSelectedCity] = useState('Paris (75000)');
    const [selectedCategory, setSelectedCategory] = useState('Démographie');

    return (
        <div className={styles.container}>
            <TopBar 
                selectedCity= {selectedCity}
                selectedCategory= {selectedCategory}
                onSelectedCityChange = {setSelectedCity}
                onSelectedCategoryChange = {setSelectedCategory}
            />
            <div className={styles.wrapper}>
                <MainData 
                    city= {selectedCity}
                    category = {selectedCategory}
                />
                {/* <Graphes /> */}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
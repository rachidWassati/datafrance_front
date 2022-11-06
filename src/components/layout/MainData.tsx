import { useEffect, useState } from 'react';
import styles from './MainData.module.scss';

interface MainDataProps {
    city: string,
    category: string
}

interface infosProps {
    "ville": String,
    "lien": String,
    "Code Insee": String,
    "Région": String,
    "Département": String,
    "Etablissement public de coopération intercommunale (EPCI)": String,
    "Code postal (CP)": String,
    "Nom des habitants": String,
    "Population (2018)": String,
    "Population : rang national (2018)": String,
    "Densité de population (2018)": String,
    "Taux de chômage (2018)": String,
    "Pavillon bleu": String,
    "Ville d'art et d'histoire": String,
    "Ville fleurie": String,
    "Ville internet": String,
    "Superficie (surface)": String,
    "Altitude min": Object,
    "Altitude max": Object,
    "Latitude": String,
    "Longitude": String
}

const MainData: React.FC<MainDataProps> = ({city, category}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [infos, setInfos] = useState<infosProps>();
    
    useEffect(() => {
        fetch(`http://localhost:3000/api/info/${city}`)
        .then(res => res.json())
        .then(
            (result) => {
                    setIsLoaded(true);
                    setInfos(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [city]);

    return (
        <div className={styles.container}>
            <h1>{city.split('(')[0]}</h1>
            <h3>{category}</h3>
            <div className={styles.infos}>
                <div className={styles.infos_section}>
                    <i className="fas fa-user-friends"></i>
                    <p>{infos?.["Population (2018)"]}</p>
                    <i className="fas fa-map"></i>
                    <p>{infos?.["Superficie (surface)"]}</p>
                </div>
                <div className={styles.infos_section}>
                    <i className="fas fa-map-pin"></i>
                    <p>{infos?.['Latitude']} / {infos?.['Longitude']}</p>
                    <i className="fas fa-briefcase"></i>
                    <p>Chômage: {infos?.["Taux de chômage (2018)"]}</p>
                </div>
            </div>
        </div>
    )
}

export default MainData;
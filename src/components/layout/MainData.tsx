import styles from './MainData.module.scss';

interface MainDataProps {
    city: string,
    category: string
}

const MainData: React.FC<MainDataProps> = ({city, category}) => {
    return (
        <div className={styles.container}>
            <h1>{city.split('(')[0]}</h1>
            <h3>{category}</h3>
        </div>
    )
}

export default MainData;
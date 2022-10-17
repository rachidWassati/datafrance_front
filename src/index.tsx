import ReactDOM  from "react-dom";
import './assets/styles/index.scss';
import { Graphes } from "./components/layout/Graphes";
import { MainData } from "./components/layout/MainData";
import TopBar from "./components/layout/TopBar";
import styles from './index.module.scss';


const App = () => {
    return (
        <div className={styles.container}>
            <TopBar />
            <div className={styles.wrapper}>
                <MainData />
                <Graphes />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
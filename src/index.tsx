import ReactDOM  from "react-dom";
import './assets/styles/index.scss';
import TopBar from "./components/layout/TopBar";


const App = () => {
    return (
        <>
            <TopBar />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
import styles from './Dropdown.module.scss';

interface OptionsProps {
    options: string[];
    selected: string;
    onSelectedChange: Function;
}

export const Dropdown: React.FC<OptionsProps> = ({options, selected, onSelectedChange}) => {

    const renderedVilles = options.map(
        (option) => {
            return (
                <option 
                    onClick={() => onSelectedChange(option)}
                    key={option} 
                    value={option}>{option}</option>
            )
        }
    )

    return (
        <div className={styles.form}>
            <select name="villes" id="villes">
                {renderedVilles}
            </select>
        </div>
    )
}
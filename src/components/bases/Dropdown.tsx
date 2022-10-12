import styles from './Dropdown.module.scss';

interface OptionsProps {
    label: string;
    options: string[];
    selected: string;
    onSelectedChange: Function;
}

export const Dropdown: React.FC<OptionsProps> = ({label, options, selected, onSelectedChange}) => {

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
            <div className= {styles.form_field}>
                <label>{label} : </label>
                <select name="villes" id="villes">
                    {renderedVilles}
                </select>
            </div>
        </div>
    )
}
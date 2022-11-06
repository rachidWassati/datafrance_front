import styles from './Dropdown.module.scss';

interface OptionsProps {
    options: string[];
    onSelectedChange: Function;
}

export const Dropdown: React.FC<OptionsProps> = ({options, onSelectedChange}) => {

    const renderedOptions = options.map(
        (option) => {
            return (
                <option
                    key={option} 
                    value={option}>{option}</option>
            )
        }
    )

    return (
        <div className={styles.form}>
            <select name="categories" id="categories" onChange={
                (event) => {
                    console.log(event.target.value)
                    onSelectedChange(event.target.value)
                }
            }>
                {renderedOptions}
            </select>
        </div>
    )
}
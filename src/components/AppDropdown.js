import Dropdown from "react-bootstrap/Dropdown";
import './AppDropdown.scss';

const AppDropdown = ({ type = 'default', placeholder = 'Select a option', options, selectedOption, onChange }) => {
    const dropdownClassName = 'dropdown-' + type;
    return (
        <Dropdown className={dropdownClassName}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" className={dropdownClassName + '-toggle'}>
                <div className={dropdownClassName + '-toggle-label'}>{selectedOption ? selectedOption : placeholder}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option, index) => {
                    return <Dropdown.Item key={index} onClick={() => onChange(option)}>{option}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AppDropdown;
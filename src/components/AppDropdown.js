import Dropdown from "react-bootstrap/Dropdown";
import './AppDropdown.scss';

const AppDropdown = ({ type = 'default', placeholder = 'Select a option', options, selectedOption, onChange, isOptionObject = false, objectOptionValue }) => {
    const dropdownClassName = 'dropdown-' + type;
    return (
        <Dropdown className={dropdownClassName}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" className={dropdownClassName + '-toggle'}>
                <div className={dropdownClassName + '-toggle-label'}>
                    {selectedOption ?
                        (isOptionObject ? selectedOption[objectOptionValue] : selectedOption)
                        : placeholder}
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className={dropdownClassName + '-menu'}>
                {options.map((option, index) => {
                    if (isOptionObject)
                        return <Dropdown.Item className={dropdownClassName + '-menu-item'} key={index} onClick={() => onChange(option)}>{option[objectOptionValue]}</Dropdown.Item>
                    else
                        return <Dropdown.Item className={dropdownClassName + '-menu-item'} key={index} onClick={() => onChange(option)}>{option}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AppDropdown;
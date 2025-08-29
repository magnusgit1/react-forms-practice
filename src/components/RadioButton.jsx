
/* eslint-disable react/prop-types */

function RadioButton({type, name, value, checked, onChange}) {
    return (
        <>
        <input 
            type={type} 
            name={name}
            value={value} 
            checked={checked}
            onChange={onChange}
        />
        </>
    )
}

export default RadioButton
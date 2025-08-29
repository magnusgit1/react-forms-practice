
/* eslint-disable react/prop-types */

function CheckBox({type, name, id, value, onChange}) {
    return (
        <>
        <input 
            type={type}
            name={name} 
            id={id} 
            value={value}
            required
            onChange={onChange}
        />
        </>
    )
}

export default CheckBox
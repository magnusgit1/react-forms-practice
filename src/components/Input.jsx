
/* eslint-disable react/prop-types */

function Input({inputType, inputName, inputValue, onInputChange}) {
    return (
        <>
        <input 
              type={inputType}
              name={inputName}
              value={inputValue}
              onChange={onInputChange}
        />
        </>
    )
}

export default Input 
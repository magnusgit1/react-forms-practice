
/* eslint-disable react/prop-types */

function TextArea({name, rows, value, onChange, placeHolder}) {
    return (
        <>
        <textarea
            name={name}
            rows={rows}
            value={value}
            onChange={onChange}
            placeholder={placeHolder}
        ></textarea>
        </>
    )
}

export default TextArea
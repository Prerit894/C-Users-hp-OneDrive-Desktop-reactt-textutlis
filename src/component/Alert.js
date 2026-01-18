import React from 'react'

function Altert(props) {
    const captalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
            <strong>{captalize(props.alert.tp)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Altert
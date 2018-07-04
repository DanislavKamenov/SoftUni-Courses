import React from 'react';

const withSubmit = (WrappedComponent) => (props) => {
    const { redirect, payload, ...otherProps } = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit(payload)
            .then(() => {
                props.history.push(redirect);
            })
            .catch(err => {
                props.getErrors(err);
                console.log(err);
            });
    }

    console.log(props.payload);
    return <WrappedComponent handleSubmit={handleSubmit} {...otherProps} />

};

export default withSubmit;
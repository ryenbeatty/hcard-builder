// @flow
import React from 'react';
import styles from './styles';

const Input = (props) => {
	return (
		<div key={props.id} className={styles.base}>
			<label className={styles.label} htmlFor={props.id}>{props.data.label}</label>
			<input className={styles.input} type={props.type} id={props.id} value={props.data.value} onChange={props.handleChange} />
		</div>
	);
};

export default Input;

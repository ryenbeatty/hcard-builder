// @flow
import React from 'react';
import styles from './styles';

import FormHeader from '../../Form/FormHeader';
import FormFooter from '../../Form/FormFooter';
import Fieldset from '../../Form/Fieldset';
import Input from '../../Form/Input';

const Form = (props) => {
	return (
		<form className={styles.base}>
			<FormHeader title="hCard Builder" />
			<Fieldset title="Personal details">
				<Input id="givenName" data={props.givenName} handleChange={props.handleChange} />
				<Input id="surname" data={props.surname} handleChange={props.handleChange} />
				<Input id="email" data={props.email} handleChange={props.handleChange} />
				<Input id="phone" data={props.phone} handleChange={props.handleChange} />
			</Fieldset>
			<Fieldset title="Address">
				<Input id="houseNo" data={props.houseNo} handleChange={props.handleChange} />
				<Input id="street" data={props.street} handleChange={props.handleChange} />
				<Input id="suburb" data={props.suburb} handleChange={props.handleChange} />
				<Input id="state" data={props.state} handleChange={props.handleChange} />
				<Input id="postcode" data={props.postcode} handleChange={props.handleChange} />
				<Input id="country" data={props.country} handleChange={props.handleChange} />
			</Fieldset>
			<FormFooter handleSubmit={props.handleSubmit} handleAvatarUpload={props.handleAvatarUpload} />
		</form>
	);
};

export default Form;

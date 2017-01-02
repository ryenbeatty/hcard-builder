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
				<Input id="givenName" type="text" data={props.givenName} handleChange={props.handleChange} />
				<Input id="surname" type="text" data={props.surname} handleChange={props.handleChange} />
				<Input id="email" type="text" data={props.email} handleChange={props.handleChange} />
				<Input id="phone" type="number" data={props.phone} handleChange={props.handleChange} />
			</Fieldset>
			<Fieldset title="Address">
				<Input id="houseNo" type="number" data={props.houseNo} handleChange={props.handleChange} />
				<Input id="street" type="text" data={props.street} handleChange={props.handleChange} />
				<Input id="suburb" type="text" data={props.suburb} handleChange={props.handleChange} />
				<Input id="state" type="text" data={props.state} handleChange={props.handleChange} />
				<Input id="postcode" type="number" data={props.postcode} handleChange={props.handleChange} />
				<Input id="country" type="text" data={props.country} handleChange={props.handleChange} />
			</Fieldset>
			<FormFooter handleSubmit={props.handleSubmit} handleAvatarUpload={props.handleAvatarUpload} />
		</form>
	);
};

export default Form;

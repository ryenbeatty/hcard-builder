// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';

import FullName from '../../Preview/FullName';
import Avatar from '../../Preview/Avatar';
import Address from '../../Preview/Address';
import ContactDetails from '../../Preview/ContactDetails';

const HCardPreview = (props) => {
	const getID = () => {
		return 'hcard-' + props.givenName.value + '-' + props.surname.value;
	};

	return (
		<div id={getID()} className={classnames(styles.base, 'vcard')}>
			<div className={styles.cardTop}>
				<FullName givenName={props.givenName.value} surname={props.surname.value} />
				<Avatar avatar={props.avatar} givenName={props.givenName.value} surname={props.surname.value} />
			</div>
			<div className={styles.cardBody}>
				<ContactDetails email={props.email.value} phone={props.phone.value} />
				<Address houseNo={props.houseNo.value} street={props.street.value} suburb={props.suburb.value} state={props.state.value} postcode={props.postcode.value} country={props.country.value} />
			</div>
		</div>
	);
};

export default HCardPreview;

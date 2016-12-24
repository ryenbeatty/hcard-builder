// @flow
import React from 'react';

import classnames from 'classnames';
import styles from './styles';

import Row from '../Row';
import RowItem from '../RowItem';

const ContactDetails = (props) => {
	return (
		<div className="contact-details">
			<Row>
				<RowItem label="Email">
					<a href={'mailto:' + props.email} className={classnames('email', styles.value)}>{props.email}</a>
				</RowItem>
			</Row>
			<Row>
				<RowItem label="Phone">
					<a href={'tel:' + props.phone} className={classnames('phone', styles.value)}>{props.phone}</a>
				</RowItem>
			</Row>
		</div>
	);
};

export default ContactDetails;

// @flow
import React from 'react';

import Row from '../Row';
import RowItem from '../RowItem';

const Address = (props) => {
	return (
		<div className="adr">
			<Row>
				<RowItem label="Address">
					<span className="street-address">{props.houseNo} {props.street}</span>
				</RowItem>
			</Row>
			<Row>
				<RowItem label="Address Line 2" labelVisuallyHidden additionalClass="rowItem--indented">
					<span className="locality">{props.suburb}</span>,
					<span className="region">{props.state}</span>
				</RowItem>
			</Row>
			<Row>
				<RowItem label="Postcode">
					<span className="postal-code">{props.postcode}</span>
				</RowItem>
				<RowItem label="Country">
					<span className="country-name">{props.country}</span>
				</RowItem>
			</Row>
		</div>
	);
};

export default Address;

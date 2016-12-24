// @flow
import React, {Component} from 'react';
import styles from './styles';

import classnames from 'classnames';

import HCardEditor from '../Containers/HCardEditor';
import HCardPreview from '../Containers/HCardPreview';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			avatar: 'http://lorempixel.com/80/100/people/7',
			givenName: {
				label: 'Given name',
				value: 'Sam',
			},
			surname: {
				label: 'Surname',
				value: 'Fairfax',
			},
			email: {
				label: 'Email',
				value: 'sam.fairfax@fairfaxmail.com',
			},
			phone: {
				label: 'phone',
				value: '02 9282 2833',
			},
			houseNo: {
				label: 'House name or #',
				value: '1',
			},
			street: {
				label: 'Street',
				value: 'Darling island rd',
			},
			suburb: {
				label: 'Suburb',
				value: 'Pyrmont',
			},
			state: {
				label: 'State',
				value: 'NSW',
			},
			postcode: {
				label: 'Postcode',
				value: '2009',
			},
			country: {
				label: 'Country',
				value: 'Australia',
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
	}

	handleChange(e) {
		this.setState(Object.assign(this.state[e.target.id], {value: e.target.value}));
	}

	handleAvatarUpload(e) {
		this.setState({avatar: URL.createObjectURL(e.target.files[0])});
	}

	handleSubmit(e) {
		// Do something with submit!
	}

	render() {
		return (
			<div className="App">
				<div className={styles.grid}>
					<div className={styles.gridItem}>
						<HCardEditor {...this.state} handleChange={this.handleChange} handleAvatarUpload={this.handleAvatarUpload} handleSubmit={this.handleSubmit} />
					</div>
					<div className={classnames(styles.gridItem, styles.gridItemAltBg)}>
						<HCardPreview {...this.state} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

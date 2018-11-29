import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
	state = {
		value:'',
		errorMessage: '',
		loading: false
	};

	onSubmit = async event => {
		event.preventDefault();

		const campaign = Campaign(this.props.address);

		// start spinner and clear error message
		this.setState( {loading: true, errorMessage: ''} );

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.contribute().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, 'ether')
			});

			// using ES6 template string ... keep in minds the back quotes!!!
			Router.replaceRoute(`/campaigns/${this.props.address}`);

		}catch (err) {
			this.setState({ errorMessage: err.message});
		}

		// stop spinner
		this.setState( {loading: false, value: '' });
	};

	render() {
		return(
			<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
				<Form.Field>
					<label> Amount to Contribute</label>
					<Input
						value={this.state.value}
						onChange={event => this.setState({ value: event.target.value })}
						label="ether"
						labelPosition="right"
						placeholder='amount in [ether] ...'
					/>
				</Form.Field>
				<Message
					error header="Oops!"
					content={this.state.errorMessage}
				/>
				<Button
					loading={this.state.loading}
					floated="left"
					content="Donate!"
					primary={true}
				/>
			</Form>
		);
	}
}
export default ContributeForm;

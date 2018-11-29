import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
	static async getInitialProps(props){
		const { address } = props.query;
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestCount().call();
		const approversCount = await campaign.methods.approversCount().call();

		// promise helper
		const requests = await Promise.all(
			Array(parseInt(requestCount))
				.fill()
				.map((element, index) => {
					return campaign.methods.requests(index).call();
				})
		);

		console.log( await campaign.methods.requests(0).call());

		return { address, requests, requestCount, approversCount };
	}

	renderRow() {
		return this.props.requests.map((request, index) => {
			return (
				<RequestRow
					key={index}
					id={index}
					request={request}
					address={this.props.address}
					approversCount={this.props.approversCount}
				/>
			);
		});
	}

	render() {
		// destructoring ES6 capabilities
		const {Header, Row, HeaderCell, Body } = Table;

		return (
			<Layout>
				<Link route={`/campaigns/${this.props.address}`}>
					<a>
						Back
					</a>
				</Link>

				<h3>Request log of Campaign: {this.props.address}</h3>

				<Table>
					<Header>
						<Row>
							<HeaderCell>ID</HeaderCell>
							<HeaderCell>Description</HeaderCell>
							<HeaderCell>Amount</HeaderCell>
							<HeaderCell>Recipient</HeaderCell>
							<HeaderCell>Approval Count</HeaderCell>
							<HeaderCell>Approve</HeaderCell>
							<HeaderCell>Finalize</HeaderCell>
						</Row>
					</Header>
					<Body>
						{this.renderRow()}
					</Body>
				</Table>
				<div>Found {this.props.requestCount} requests.</div>
				<Link route={`/campaigns/${this.props.address}/requests/new`}>
					<a>
						<Button
							floated="right"
							content="Create new request"
							primary={true}
							style={{ marginBottom: 10}}
						/>
					</a>
				</Link>

			</Layout>
		);
	}
}

export default RequestIndex;

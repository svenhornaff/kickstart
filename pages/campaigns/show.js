import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {
	static async getInitialProps(props){
		const campaign = Campaign(props.query.address);

		// note the result is a summary object not a array or map!
		const summary = await campaign.methods.getCampaignSummary().call();

		return {
			minimumContribution: summary[0],
			balance: summary[1],
			requestsCount: summary[2],
			approversCount: summary[3],
			manager: summary[4],
			address: props.query.address
		};
	}

	renderCards() {
		const {
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;

		const items = [
			{
				header: manager,
				meta:'Address of the Campaign Manager',
				description:'The manager created this campaign and can request to withdraw money.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: minimumContribution,
				meta:'Contribution in [wei]',
				description:'You have to contribute at least this amout of "wei" to become a approver.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: requestsCount,
				meta:'Number of requests',
				description:'A reqquest tries to withdraw money from the contract. Requests must be approved by at least 50% of the approvers',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: approversCount,
				meta:'Number of Approvers',
				description:'Number of people who have already donated to this Campaign.',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(balance, 'ether'),
				meta:'Campaign balance in [ether]',
				description:'The Campaign balance is how much money this campaign has left to spend.',
				style: { overflowWrap: 'break-word' }
			}
		];

		return <Card.Group items={items} />;
	}

	render() {
		return (
			<Layout>
				<Link route={'/'}>
					<a>
						Back
					</a>
				</Link>
				<h3>Campaigns Details</h3>
				<Grid divided='vertically'>
					<Grid.Row>
						<Grid.Column width={11}>
							{this.renderCards()}
						</Grid.Column>

						<Grid.Column width={5}>

							<ContributeForm
								address={this.props.address}
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a>
									<Button
										floated="left"
										content="View requests!"
										primary={true}
									/>
								</a>
							</Link>
							<Link route={`/campaigns/${this.props.address}/details`}>
								<a>
									<Button
										floated="left"
										content="Campaign Details!"
										primary={true}
									/>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>
		);
	}
}

export default CampaignShow;

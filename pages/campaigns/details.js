// *--- JSON RPC: https://github.com/ethereum/wiki/wiki/JSON-RPC
import React, { Component } from 'react';
import { Divider, Table } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import etherscan_api from '../../ethereum/etherscan';
import RenderTx from '../../components/RenderTx';

class CampaignTransactionLog extends Component {
	static async getInitialProps(props){
		const { address } = props.query;
		const campaign = Campaign(address);

		const accounts = await web3.eth.getAccounts();
		const {status, message, result} = await etherscan_api.account.txlist(address);

		// promise helper
		const tx = await Promise.all(
			Array(parseInt(result.length))
				.fill()
				.map((element, index) => {
					return result[index];
				})
		);

		console.log(tx.length);

		return {
			campaign: campaign,
			address: address,
			accounts: accounts,
			txObject: tx,
			txCount: tx.length,
			message: message,
			status: status
		};
	}

	renderTxRow () {
		return this.props.txObject.map((tx, index) => {
			return (
				<RenderTx
					key={index}
					index={index}
					txItem={tx}
				/>
			);
		});
	}

	render() {
		const {Header, Row, HeaderCell, Body } = Table;

		return (
			<Layout>
				<Link route={`/campaigns/${this.props.address}/`}>
					<a>Back</a>
				</Link>
				<h3>Contract (Campaign) transaction log </h3>
				<Divider />
				<Table>
					<Header>
						<Row>
							<HeaderCell>Status</HeaderCell>
							<HeaderCell>TxHash</HeaderCell>
							<HeaderCell>Block</HeaderCell>
							<HeaderCell>Age</HeaderCell>
							<HeaderCell>From</HeaderCell>
							<HeaderCell>To</HeaderCell>
							<HeaderCell>Value</HeaderCell>
							<HeaderCell>TxFee in [Wei]</HeaderCell>
						</Row>
					</Header>
					<Body>
						{this.renderTxRow()}
					</Body>
				</Table>
			</Layout>
		);
	}
}

export default CampaignTransactionLog;

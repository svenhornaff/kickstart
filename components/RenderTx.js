import React, { Component } from 'react';
import { Table, Icon, Popup } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RenderTx extends Component {
	state = {
		status: 1
	}

	getTxLink(hash) {
		return (
			<Popup
				trigger={<a href={`/campaigns/${hash}/`}>{hash.substr(0,8)+'....'}</a>}
				content={hash}
				inverted
			>
			</Popup>
		);
	}

	setTxStatus(status) {
		if (status === '0') {
			return <Icon name='close' color='red'/>;
		} else {return <Icon name='checkmark' color='green'/>;}
	}

	setTime(timeStamp) {
		var time = new Date(timeStamp*1000);

		return (
			time.toUTCString().substr(4)
		);
	}

	render() {
		const {Row, Cell } = Table;
		const {txItem} = this.props;

		return (
			<Row>
				<Cell>{this.setTxStatus(txItem.txreceipt_status)}</Cell>
				<Cell>{this.getTxLink(txItem.hash)}</Cell>
				<Cell>{txItem.blockNumber}</Cell>
				<Cell>{this.setTime(txItem.timeStamp)}</Cell>
				<Cell>{txItem.from.substr(0,10)+'...'}</Cell>
				<Cell>{txItem.to.substr(0,10)+'...'}</Cell>
				<Cell textAlign='right'>{web3.utils.fromWei(txItem.value, 'ether')+' Ether'}</Cell>
				<Cell textAlign='right'>{txItem.gasUsed}</Cell>
			</Row>
		);
	}
}

export default RenderTx;

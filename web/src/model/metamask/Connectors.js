import {InjectedConnector} from '@web3-react/injected-connector'

export const injected = new InjectedConnector({supportedChainIds: [1, 137, 56, 80001]}) //ETH, POLYGON, BSC

var connector = {
    injected: injected,
};

export default connector
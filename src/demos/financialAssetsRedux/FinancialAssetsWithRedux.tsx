import { Provider } from 'react-redux';
import FinancialAssets from './FinancialAssets';
import { store } from './store/create-store';

export default function FinancialAssetsWithRedux() {
    return (
        <Provider store={store}>
            <FinancialAssets />
        </Provider>
    );
}

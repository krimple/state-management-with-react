import './App.css'
import FinancialAssetsContextWithReducer
  from './feature/financialAssetsContextWithReducer/FinancialAssetsContextWithReducer';
import FinancialAssetsContextDriven from './feature/financialAssetsContext/FinancialAssetsContextDriven.tsx';

function App() {
  return (
    <>
      <h1>Demos</h1>
      <h2>FA Using Context</h2>
      <FinancialAssetsContextDriven />

      <h2>FA Using Context+Reducer</h2>
      {/*<FinancialAssetsContextWithReducer />*/}
    </>
  )
}

export default App;

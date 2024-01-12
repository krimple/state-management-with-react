import { fireEvent, render } from '@testing-library/react';
import { spy } from 'sinon';
import { expect, test } from 'vitest';
import { saveAsset } from '../../../../apis';
import { BondAsset } from '../../../../types'; // Update this based on actual import paths
import EditBondForm from '../EditBondForm';

test('EditBondForm should initialize form inputs and call handlers on submit and cancel', async () => {
    const bond: BondAsset = {
        maturityInMonths: 50,
        bondSeries: 'EE',
        issuingAgency: 'US Government',
        targetValue: 200,
        id: 10,
        initialValue: 100,
        // ... Enter default bond data here
    };

    const onSave = spy();
    const onCancel = spy();
    spy(saveAsset);
    const { getByTestId } = render(<EditBondForm bond={bond} onSave={onSave} onCancel={onCancel} />);

    const issuingAgencyElement = getByTestId('issuingAgency') as HTMLInputElement;
    const bondSeriesElement = getByTestId('bondSeries') as HTMLInputElement;
    const initialValueElement = getByTestId('initialValue') as HTMLInputElement;
    const targetValueElement = getByTestId('targetValue') as HTMLInputElement;
    const maturityInMonthsElement = getByTestId('maturityInMonths') as HTMLInputElement;

    expect(issuingAgencyElement.value).toBe(bond.issuingAgency);
    expect(bondSeriesElement.value).toBe(bond.bondSeries);
    expect(initialValueElement.value).toBe(bond.initialValue.toString());
    expect(targetValueElement.value).toBe(bond.targetValue.toString());
    expect(maturityInMonthsElement.value).toBe(bond.maturityInMonths.toString());

    fireEvent.submit(getByTestId('form'));
    expect(onSave.called).toBe(true);
});

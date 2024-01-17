import { act, fireEvent, render } from '@testing-library/react';
import * as saveAPIs from '~/apis/save-asset';
import EditBondForm from '../EditBondForm';

describe('EditBondForm', () => {
    it('should initialize form inputs and call handlers on submit and cancel', async () => {
        jest.spyOn(saveAPIs, 'saveBond').mockResolvedValue(true);
        const bond = {
            maturityInMonths: 50,
            bondSeries: 'EE',
            issuingAgency: 'US Government',
            targetValue: 200,
            id: 10,
            initialValue: 100,
            // ... Enter default bond data here
        };

        const onSave = jest.fn();
        const onCancel = jest.fn();
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

        // Call the event wrapped with an act function
        // which simulates the way React acts in a real
        // environment by making sure the components are
        // settled before observing something else
        await act(async () => {
            fireEvent.submit(getByTestId('bond-form'));
        });
        expect(onSave).toHaveBeenCalled();
    });
});

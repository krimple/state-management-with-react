const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const numberFormatter = new Intl.NumberFormat('en-US');

interface NumberFormatterProps {
    value: number;
    currency?: boolean;
}
export default function NumberFormatter({ value, currency = false }: NumberFormatterProps) {
    return currency ? currencyFormatter.format(value) : numberFormatter.format(value).toString();
}

import { Table, TableHead, TableItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id}>
            <TableItem index={index}>
              {type
                .split(' ')
                .map(letter => letter[0].toUpperCase() + letter.slice(1))
                .join('')}
            </TableItem>
            <TableItem index={index}>{amount}</TableItem>
            <TableItem index={index}>{currency}</TableItem>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

import transactionHistory from './TransactionHistory.module.css'



function TransactionHistory({ items }) {
    return (
        <table className={transactionHistory.table}>
  <thead className={transactionHistory.tableThead}>
    <tr >
      <th className={transactionHistory.tableTab}>Type</th>
      <th className={transactionHistory.tableTab}>Amount</th>
      <th className={transactionHistory.tableTab}>Currency</th>
    </tr>
  </thead>
<tbody className={transactionHistory.tableBody}>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className={transactionHistory.tableTab}>{item.type}</td>
                            <td className={transactionHistory.tableTab}>{item.amount}</td>
                            <td className={transactionHistory.tableTab}>{item.currency}</td>
                        </tr>
                    )
                }
                )
                }
      </tbody>
    </table>
  );
}


export default TransactionHistory
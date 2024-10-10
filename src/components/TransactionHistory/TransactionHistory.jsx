import React from "react";
import styles from "./TransactionHistory.module.css"; 

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tableStartColumn}>
                    <th className={styles.startingTable}>Type</th>
                    <th className={styles.startingTable}>Amount</th>
                    <th className={styles.startingTable}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.tableColumn}>
                        <td className={styles.tableBodyColumns}>{type}</td>
                        <td className={styles.tableBodyColumns}>{amount}</td>
                        <td className={styles.tableBodyColumns}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
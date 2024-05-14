import styles from "./ResponsesTable.module.css"

function ResponsesTable({responses}) {
    return (
     <div className={styles.tableContainer}>
        <p></p>
       <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.celda}>Nombre</th>
                        <th className={styles.celda}>Apellido</th>
                        <th className={styles.celda}>DNI</th>
                        <th className={styles.celda}>Whatsapp</th>
                    </tr>
                </thead>
                <tbody>
                    {responses.map(response => (
                        <tr>
                            <td className={styles.celda}>{response.name}</td>
                            <td className={styles.celda}>{response.lastName}</td>
                            <td className={styles.celda}>{response.dni}</td>
                            <td className={styles.celda}>{response.whatsapp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
}

export default ResponsesTable;
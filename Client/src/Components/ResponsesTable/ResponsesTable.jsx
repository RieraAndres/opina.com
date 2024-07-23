import { NavLink } from "react-router-dom";
import styles from "./ResponsesTable.module.css";
import { CSVLink } from 'react-csv';

function ResponsesTable({ responses }) {
    if (!responses || !responses.users) {
        // Muestra un mensaje de carga o simplemente retorna null si no hay datos todavía
        return <></>;
    }

    const users = responses.users;
    console.log(users);

    // Definir los encabezados del CSV
    const headers = [
        { label: 'Nombre', key: 'name' },
        { label: 'Apellido', key: 'lastName' },
        { label: 'DNI', key: 'dni' },
        { label: 'Teléfono', key: 'whatsapp' },
        { label: 'De acuerdo', key:'agreed'}
    ];

    // Formatear los datos para el CSV
    const csvData = users.map(user => ({
        name: user.name,
        lastName: user.lastName,
        dni: user.dni,
        whatsapp: user.whatsapp,
        agreed: user.agreed
    }));

    // Configuración del reporte CSV
    const csvReport = {
        data: csvData,
        headers: headers,
        separator: ';', // Aseguramos el uso de la coma como separador
        filename: `respuestas${responses.title}.csv`,
    };

    return (
        <div>
            <NavLink to="/admin"><button className={styles.button}>VOLVER</button></NavLink>
            <div className={styles.tableContainer}>
                <p style={{ textTransform: "uppercase" }}>{responses.title}</p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.celda}>Nombre</th>
                            <th className={styles.celda}>Apellido</th>
                            <th className={styles.celda}>DNI</th>
                            <th className={styles.celda}>Whatsapp</th>
                            <th className={styles.celda}>De acuerdo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.dni}>
                                <td className={styles.celda}>{user.name}</td>
                                <td className={styles.celda}>{user.lastName}</td>
                                <td className={styles.celda}>{user.dni}</td>
                                <td className={styles.celda}>{user.whatsapp}</td>
                                <td className={styles.celda}>{user.agreed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className={styles.download}>
                    <CSVLink {...csvReport} style={{ textDecoration: "none", color: "#7c3422" }}>DESCARGAR</CSVLink>
                </button>
            </div>
        </div>
    );
}

export default ResponsesTable;

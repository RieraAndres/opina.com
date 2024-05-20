import React from 'react';
import { CSVLink } from 'react-csv';
import styles from './DataBaseTable.module.css';

function DataBaseTable({ dataBase }) {
  // Definir los encabezados del CSV
  const headers = [
    { label: 'Nombre', key: 'name' },
    { label: 'Apellido', key: 'lastName' },
    { label: 'DNI', key: 'dni' },
    { label: 'Telefono', key: 'whatsapp' },
  ];

  // Formatear los datos para el CSV
  const csvData = dataBase.map(user => ({
    name: user.name,
    lastName: user.lastName,
    dni: user.dni,
    whatsapp: user.whatsapp,
  }));

  // Configuración del reporte CSV
  const csvReport = {
    data: csvData,
    headers: headers,
    separator: ';', // Aseguramos el uso de la coma como separador
    filename: 'baseDeDatosOpina.csv',
  };

  return (
    <div className={styles.tableContainer}>
      <p className={styles.title}>ESTA ES TU BASE DE DATOS</p>
    
      <button className={styles.download}><CSVLink {...csvReport} style={{textDecoration:"none" , color:"#7c3422"}}>DESCARGAR</CSVLink></button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.celda}>ID</th>
            <th className={styles.celda}>Nombre</th>
            <th className={styles.celda}>Apellido</th>
            <th className={styles.celda}>DNI</th>
            <th className={styles.celda}>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.map(user => (
            <tr key={user.id}>
              <td className={styles.celda}>{user.id}</td>
              <td className={styles.celda}>{user.name}</td>
              <td className={styles.celda}>{user.lastName}</td>
              <td className={styles.celda}>{user.dni}</td>
              <td className={styles.celda}>{user.whatsapp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataBaseTable;

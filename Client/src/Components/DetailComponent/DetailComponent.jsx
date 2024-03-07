import styles from "./DetailComponent.module.css"
import { useState } from "react";
function DetailComponent({survey}) {
   
    const [input, setInput] = useState({
        "name":"",
        "lastName":"",
        "dni":"",
        "whatsapp":"",
        "surveyId":survey.id

    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
    }
  return (
    <div className={styles.detailContainer}>
        <p className={styles.title}>{survey.title}</p>
            <div className={styles.formContainer}>
                <img src={survey.imgUrl} alt="" className={styles.img}></img>
                <div className={styles.form}>
                    <label className={styles.label}>Nombre</label>
                    <div>
                        <input name="name" value={input.name} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>Apellido</label>
                    <div>
                        <input name="lastName" value={input.lastName} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>DNI</label>
                    <div>
                        <input name="dni" value={input.dni} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>Telefono</label>
                    <div>
                        <input name="whatsapp" value={input.whatsapp} placeholder="Cod. Area + Numero" className={styles.input} onChange={handleInputChange}/>
                    </div>
                    <button><span className={styles.buttonTop}>Enviar</span></button>
                </div>
            </div>
            <div className={styles.description}>
                <p>¿Por dejar tu firma?</p>
                <p>{survey.description}</p>
            </div>
    </div>
  );
}

export default DetailComponent;
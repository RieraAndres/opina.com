import styles from "./DetailComponent.module.css"
import { useState } from "react";
function DetailComponent() {
   
    let survey =    {
        "id": "41faf692-7195-4c79-9254-87e194808f29",
        "title": "Cuidado de los perros callejeros",
        "description": "Esta encuesta tiene como objetivo recopilar opiniones y percepciones sobre el cuidado de los perros callejeros. Queremos conocer tu perspectiva y entender cómo podemos mejorar las condiciones de vida de estos animales en situación de vulnerabilidad. Tu participación es fundamental para crear conciencia y promover acciones que beneficien a los perros callejeros. ¡Gracias por contribuir!",
        "imgUrl": "https://i0.wp.com/diariodelasvarillas.com.ar/wp-content/uploads/2023/04/ediperros.jpg?ssl=1",
        "status": true
    }

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
                    <div class="input-group">
                        <input name="name" value={input.name} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>Apellido</label>
                    <div class="input-group">
                        <input name="lastName" value={input.lastName} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>DNI</label>
                    <div class="input-group">
                        <input name="dni" value={input.dni} className={styles.input} onChange={handleInputChange}/>
                     </div>
                    <label className={styles.label}>Telefono</label>
                    <div class="input-group">
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
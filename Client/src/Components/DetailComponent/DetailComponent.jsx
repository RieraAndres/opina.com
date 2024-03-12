import styles from "./DetailComponent.module.css"
import { validator } from "./Validator";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postResponse } from "../../Redux/Actions";
import { useParams } from "react-router-dom";


function DetailComponent({survey}) {
   const dispatch = useDispatch()
   const { id } = useParams();

   const [input, setInput] = useState({
       "name":"",
       "lastName":"",
       "dni":"",
       "whatsapp":"",
       "surveyId":id
    })

    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === "dni" || name === "whatsapp" ? parseInt(value) : value; //para que sea numero y no string
        setInput((prevInput) => ({
          ...prevInput,
          [name]: updatedValue,
        }));

        setErrors(
          validator({
            ...input,
            [e.target.name]: e.target.value
          })
        );
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(input.name && input.lastName && input.dni && input.whatsapp){
          dispatch(postResponse(input))
          setInput({
            name:"",
            lastName:"",
            dni:"",
            whatsapp:"",
            surveyId:id

          });
        }
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
                        {errors.name && <label className={styles.error}>{errors.name}</label>}
                    <label className={styles.label}>Apellido</label>
                    <div>
                        <input name="lastName" value={input.lastName} className={styles.input} onChange={handleInputChange}/>
                     </div>
                        {errors.lastName && <label className={styles.error}>{errors.lastName}</label>}
                    <label className={styles.label}>DNI</label>
                    <div>
                        <input name="dni" value={input.dni} className={styles.input} onChange={handleInputChange}/>
                     </div>
                        {errors.dni && <label className={styles.error}>{errors.dni}</label>}
                    <label className={styles.label}>Telefono</label>
                    <div>
                        <input name="whatsapp" type="number" value={input.whatsapp} placeholder="Cod.Area + Numero sin 15" className={styles.input} onChange={handleInputChange}/>
                    </div>
                    {errors.whatsapp && <label className={styles.error}>{errors.whatsapp}</label>}
                    <button><span className={styles.buttonTop} onClick={handleSubmit}>Enviar</span></button>
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
import styles from "./DetailComponent.module.css";
import { validator } from "./Validator";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postResponse, clearNotifications } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailComponent({survey}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notification = useSelector(state => state.notification);

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    dni: "",
    whatsapp: "",
    surveyId: id,
    agreed:"si"
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "dni" || name === "whatsapp" ? parseInt(value) : value; //para que sea numero y no string
    setInput(prevInput => ({
      ...prevInput,
      [name]: updatedValue,
    }));

    setErrors(
      validator({
        ...input, // Utiliza el estado local actualizado directamente
        [name]: value // Usa el valor actualizado directamente desde el evento
      })
    );
  };

  useEffect(() => {
    if (notification) {
      toast.info(notification, {
        position: "top-center",
        autoClose: 1000,
        onClose:()=>{
          dispatch(clearNotifications())
        }
      });
    }
  }, [notification, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Siempre agregar el prefijo "549" al número de WhatsApp
    const whatsappWithPrefix = `549${input.whatsapp}`;
  
    if (input.name && input.lastName && input.dni && whatsappWithPrefix && input.agreed) {
      // Actualizar el estado con el número de WhatsApp con prefijo
      const updatedInput = { ...input, whatsapp: whatsappWithPrefix };
  
      dispatch(postResponse(updatedInput));
      setInput({
        name: "",
        lastName: "",
        dni: "",
        whatsapp: "",
        surveyId: id,
        agreed: ""
      });
    }
  };

  const [isChecked, setIsChecked] = useState({ ch1: true, ch2: false }); //Controlador de las checkboxes

  const handleCheckboxChange = (id) => {
    if (id === "ch1") {
      setIsChecked({ ch1: true, ch2: false });
      setInput(prevInput => ({ ...prevInput, agreed: "si" }));
    } else {
      setIsChecked({ ch1: false, ch2: true });
      setInput(prevInput => ({ ...prevInput, agreed: "no" }));
    }
  };


  return (
    <div className={styles.detailContainer}>
      {(<ToastContainer />)}
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
            <input type="number" name="dni" value={input.dni} className={styles.input} onChange={handleInputChange}/>
          </div>
          {errors.dni && <label className={styles.error}>{errors.dni}</label>}
          <label className={styles.label}>Celular</label>
          <div>
            <input name="whatsapp" type="number" value={input.whatsapp} placeholder="Cod.Area + Numero sin 15" className={styles.input} onChange={handleInputChange}/>
          </div>
          {errors.whatsapp && <label className={styles.error}>{errors.whatsapp}</label>}
          <label className={styles.label}>¿Estas de acuerdo?</label>
          <div className={styles.agree}>
      <div className={styles.contentSi}>
        <label className={styles.agreesino}>Sí</label>
        <label className={styles.checkBoxSi}>
          <input
            type="checkbox"
            id="ch1"
            checked={isChecked.ch1}
            onChange={() => handleCheckboxChange("ch1")}
          />
          <div className={styles.transitionSi}></div>
        </label>
      </div>
      <div className={styles.contentNo}>
        <label className={styles.agreesino}>No</label>
        <label className={styles.checkBoxNo}>
          <input
            type="checkbox"
            id="ch2"
            checked={isChecked.ch2}
            onChange={() => handleCheckboxChange("ch2")}
          />
          <div className={styles.transitionNo}></div>
        </label>
      </div>
    </div>
          <button><span className={styles.buttonTop} onClick={handleSubmit}>Enviar</span></button>
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.pq}>¿Por qué dejar tu firma?</p>
        <p>{survey.description}</p>
      </div>
    </div>
  );
}

export default DetailComponent;

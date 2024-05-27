import { useDispatch,useSelector } from "react-redux";
import { useState,useRef,useEffect } from "react";
import styles from "./CreateComponent.module.css";
import { validate } from "./FormValidator";
import { clearNotifications, postSurvey } from "../../Redux/Actions";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";



function CreateComponent() {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const notification = useSelector(state => state.notification);

    const [error, setError] = useState({
        title: "*Se requiere un título",
        description: "*Se requiere una descripción",
    });

    useEffect(() => {
        if (notification) {
          toast.info(notification, {
            position: "top-center",
            autoClose: 2000,
            onClose:()=>{
              dispatch(clearNotifications())
            }
          });
        }
      }, [notification, dispatch]);
    const [input, setInput] = useState({
        title: "",
        description: "",
        imgUrl: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        }));
        setError(
            validate({
                ...input,
                [name]: value,
            })
        );
    };

    const getCloudinaryUrl = async (e) => {
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "OpinaPreset");
        try {
            const response = await axios.post("https://api.cloudinary.com/v1_1/dhykonhps/image/upload", data);
            setInput((prevInput) => ({
                ...prevInput,
                imgUrl: response.data.secure_url,
            }));
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error.title && !error.description && !input.imgUrl&& input.title && input.description) {
            dispatch(postSurvey(input.title, input.description));
            setInput({
                title: "",
                description: "",
                imgUrl: "",
            });
        }else if(!error.title && !error.description && input.title && input.description){
          dispatch(postSurvey(input.title, input.description , input.imgUrl));
          setInput({
            title: "",
            description: "",
            imgUrl: "",
        });
        }

         if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    console.log(input);

    return (
        <div>
            <div>
             <NavLink to="/admin"><button className={styles.button}>VOLVER</button></NavLink>  
            </div>
            <div className={styles.formContainer}>
                {(<ToastContainer />)}
                <p className={styles.title}>CREA TU ENCUESTA</p>
                <input
                    placeholder="Título..."
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={handleInputChange}
                    className={styles.input}
                />
                {error.title && <label className={styles.error}>{error.title}</label>}
                <textarea
                    placeholder="Descripción..."
                    name="description"
                    value={input.description}
                    onChange={handleInputChange}
                    className={styles.textArea}
                ></textarea>
                {error.description && <label className={styles.error}>{error.description}</label>}
                <label className={styles.label}>Selecciona la portada de tu encuesta</label>
                <input type="file" accept="image/*" onChange={getCloudinaryUrl}  ref={fileInputRef}  />
                <button className={styles.Btn} onClick={handleSubmit}>
                    <div className={styles.sign}>+</div>
                    <div className={styles.text}>CREAR</div>
                </button>
            </div>
        </div>
        
    );
}

export default CreateComponent;

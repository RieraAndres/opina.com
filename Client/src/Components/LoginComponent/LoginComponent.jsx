import styles from "./LoginComponent.module.css"
import { sendCode, verifyCode } from "../../Redux/Actions";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const adminLogin = useSelector(state=>state.adminLogin)
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL

    useEffect(()=>{ //escuchara los cambios en adminLogin para navegar al dashboard una vez logueado con exito
        if(adminLogin){
          navigate("/admin") //correjir a ruta de adminDashboard
          }
        },[adminLogin,navigate])

    const [input, setInput] = useState({ //para usuario y contraseña
          email: "",
          password: "",
        });
        
    const [inputCode, setUserCode] = useState({ //para codigo mandado por mail
          userCode: "",
        });
        
        const [showLogin , setShowLogin] = useState(true) 
        
    const handleUserInputChange = (e) => { //escucha cambios en email y contraseña
        const { name, value } = e.target;
        setInput(prevInput => ({
          ...prevInput,
          [name]: value,
        }));
      };

    const handleCodeInputChange = (e) => { //escucha cambios en la verificacion de codigo
      const {name,value} = e.target;
      setUserCode(prevInput => ({
        ...prevInput,
        [name]:value
      }))
    }

    const handleUserSubmit = (e)=>{ //verifica usuario y contraseña
      e.preventDefault()
      if(input.email === adminEmail && input.password === adminPassword){
        setShowLogin(false)
        setInput({
          email:"",
          password:""
        })
        dispatch(sendCode())
      }
    }

    const handleCodeSubmit = (e)=>{ //verifica codigo mandado por mail
      e.preventDefault()
      if(inputCode.userCode){
          dispatch(verifyCode(inputCode.userCode))
      }
    }
    
  return (
    <div>
        {showLogin && (
        <div className={styles.formContainer}>
            <p style={{textAlign:'center'}}>INGRESA COMO ADMINISTRADOR</p>
            <label>Email</label>
            <input name="email"  value={input.email} className={styles.input} onChange={handleUserInputChange}></input>
            <label>Contraseña</label>
            <input name="password" value={input.password}  type="password" className={styles.input} onChange={handleUserInputChange}></input>
            <button onClick={handleUserSubmit}><span className={styles.buttonTop}>INGRESA</span></button>
        </div>)}
        {!showLogin && (
        <div className={styles.codeContainer}>
            <p style={{textAlign:"center"}}>INGRESA EL CODIGO QUE MANDAMOS A TU EMAIL</p>
            <input className={styles.input} onChange={handleCodeInputChange} name="userCode" value={inputCode.userCode}></input>
            <button onClick={handleCodeSubmit}><span className={styles.buttonTop}>VERIFICAR</span></button>
            <span>Reenviar codigo</span>
        </div>
        )}
    </div>   
  );
}

export default LoginComponent;

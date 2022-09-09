import styles from "../css/form.module.css"
import login from "../img/login.svg"
import register from "../img/register.svg"
import logo from "../img/logo.png"
import signin from "../img/signin.svg"
import {useNavigate} from "react-router-dom"



export default function Login() {

    const navigate = useNavigate()


    return (
    
        <div className={styles.container}>
            <div className={styles.formscontainer}>
                <div className={styles.signinsignup}>
                    <form className={styles.signinform}>
                        <h2 className={styles.title}>Login</h2>
                        <p>Faça seu login para acessar a plataforma.</p>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Usuário' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.falock}></i>
                            <input type="password" placeholder='Senha' />
                        </div>
                        <input type="submit" value="Login" className={styles.btn} />
                        
                    </form>
                    <form className={styles.signupform}>
                        <h2 className={styles.title}>Cadastre-se</h2>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.faenveloper}></i>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.falock}></i>
                            <input type="password" placeholder='Senha' />
                        </div>
                        <input type="submit" value="Cadastro" className={styles.btn} />
                        
                    </form>
                </div>
            </div>
            <link rel="stylesheet" href="../css/form.module.css" />
            <div className={styles.panelscontainer}>
                <div className={styles.leftpanel}>
                <div className={styles.content}>
                 <h3>Novo aqui?</h3>
                    <p>
                    Vamos realizar seu cadastro na Octakey.
                    </p>
                    <button className={styles.btntransparente}id="sign-up-btn"
                    onClick={()=>{
                        navigate("/cadastro")
                    }}>
                    Cadastrar
                    </button>
                </div>
                <img src={logo} className={styles.image} alt="" />
              </div>
            
                </div> 
        </div>
    )
}
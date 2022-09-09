import styles from "../css/form.module.css"
import logo from "../img/logo.png"
import signin from "../img/signin.svg"


export default function Cadastro(){
    function advogadoAtivo(){
            const oab = document.getElementById("divId").style.display=="block";     
    }

  
    return(
        <div className={styles.containersu}>
            <div className={styles.formscontainer}>
                <div className={styles.signinsignup}>
                    <form className={styles.signinform}>
                        <h2 className={styles.title}>Cadastro</h2>
                        <p>Faça seu cadastro para acessar a plataforma.</p>
                        
                        <div className={styles.btnsignup}>
                        <button type="submit"  className={styles.btn}>Cliente</button>
                        <button type="submit"  className={styles.btn} id="inputId"
                        onClick={advogadoAtivo}>Advogado</button>
                        </div>
                        <div className={styles.inputoab} id="divId">
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='OAB' />
                        </div>
                       
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Nome' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Sobrenome' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='CPF' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.fauser}></i>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={styles.inputfield}>
                            <i className={styles.falock}></i>
                            <input type="password" placeholder='Senha' />
                        </div>
                        <input type="submit" value="Salvar" className={styles.btn} />
                        
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
                <div className={styles.contentsu}>
                 <h3>Próxima etapa</h3>
                    <p>
                    Vamos começar seu cadastro, você receberá um email de confirmação.
                    </p>
                </div>
                <img src={signin} className={styles.image} alt="" />
              </div>
            
                </div> 
        </div>
    )
}
import "./Login.css";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";

function Login() {
  const { setIsAppVisible } = useContext(appContext);

  function buttonClicked() {
    setIsAppVisible((prev) => !prev);
  }

  return (
    <div className="login">
      <button onClick={buttonClicked} id="start">
        Teste Başla
      </button>
      <p className="login-para">
        Teste Hoşgeldiniz. Bu bir Mocikotest'tir. Sorulara dikkat et !
        4 yanlış 1 doğru edebilir :D
      </p>
    </div>
  );
}

export default Login;

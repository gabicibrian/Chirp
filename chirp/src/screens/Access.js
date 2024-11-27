import "../css/Access-general.css";
import "../css/Access.css";
import Logo from "../assets/logo.svg";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Access = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="container-access"
    >
      <div className="groups-container" id="last-group">
        <div className="logo-access">
          <img src={Logo} alt="Chirp logo"></img>
        </div>
        <md-filled-button
          onClick={() => navigate("/registro")}
          class="btn-container label"
        >
          Crear Cuenta
        </md-filled-button>
        <md-text-button
          onClick={() => navigate("/inicio-sesion")}
          class="btn-container label"
        >
          Iniciar sesión
        </md-text-button>
      </div>
    </motion.div>
  );
};

export default Access;

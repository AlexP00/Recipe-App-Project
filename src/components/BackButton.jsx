import { useNavigate } from "react-router-dom";
import '../styles/backbutton.scss';

const BackButton = () => {

    const navigate = useNavigate()

    return ( 
        <button  onClick={() => navigate(-1)}>Back</button>
     );
}
 
export default BackButton;
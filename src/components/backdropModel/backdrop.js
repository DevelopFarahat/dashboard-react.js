import BackdropStyles from "./backdrop.module.css";
import {AiOutlineClose} from "react-icons/ai";
import ReactDOM  from "react-dom";
const Backdrop = ({isSidebarVisible,setIsSidebarVisible})=>{
    const distroyBackdrop = ()=>{
        setIsSidebarVisible(false);
    }
    return(
        ReactDOM.createPortal(<div className={`${isSidebarVisible?BackdropStyles.backgrop:BackdropStyles['backgrop-hidden']}`}>
        <div>
        <AiOutlineClose size={30} onClick={distroyBackdrop}/>
        </div>
    </div>,document.getElementById("backdrop"))

    )
}
export default Backdrop;
import { useContext } from "react"
import AlertContext from "../contexts/Alert/alertContext"

function Alert() {
    const alertContext = useContext(AlertContext);
    
    return (
        alertContext.alert &&
        <div className={`p alert-${alertContext.alert.type}`}>
            <i className="fas fa-info-circle"></i> &nbsp;
            {alertContext.alert.msg}
        </div>
    )
}

export default Alert
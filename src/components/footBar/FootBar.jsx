import { faGamepad, faInstitution, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footBar.scss'

const FootBar = () => {
  return (
    <div className='footBar'>
        <div className="footItem">
            <FontAwesomeIcon icon={faGamepad} className="icon"/>
            <p>بازی</p>
        </div>
        <div className="footItem">
            <FontAwesomeIcon icon={faProjectDiagram} className="icon"/>
            <p>برنامه</p>
        </div>
        <div className="footItem">
            <FontAwesomeIcon icon={faInstitution} className="icon"/>
            <p>نصب بازار</p>
        </div>
    </div>
  )
}

export default FootBar
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.scss'

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')} >
        <div className="navContainer">
            <div className="left">
            <FontAwesomeIcon icon={faEllipsisVertical} className="icon dotIcon"/>
            <button className='navBtn'>دانلود بازار</button>
            <FontAwesomeIcon icon={faUser} className="icon"/>
            <div className="search">
                <input type="text" placeholder="جستجو در بازار" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
            </div>
        </div>
        <div className="right">
            <p>سایر</p>
            <p>پشتیبانی</p>
            <p>بازی</p>
            <p>برنامه</p>
            <img 
             src='https://upload.wikimedia.org/wikipedia/commons/1/1d/Cafe_Bazaar_logo_2020.jpg?20210922185957'
             alt=""
             />
             <div className='hamburger' onClick={()=> setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line1'></span>
                <span className='line1'></span>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar
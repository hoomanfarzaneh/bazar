import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
          <li onClick={()=> setMenuOpen(false)}> 
              توسعه دهندگان بازار
          </li>
          <li onClick={()=> setMenuOpen(false)}>
              فرصت های شغلی
          </li>
          <li onClick={()=> setMenuOpen(false)}>
              شرایط استفاده
          </li>
          <li onClick={()=> setMenuOpen(false)}>
              حریم خصوصی
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
              بلاگ بازار
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
              تبلیغات بازار
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
              پشتیبانی
          </li>
          <li onClick={()=> setMenuOpen(false)}> 
              خبرهای بازار
          </li>
      </ul>
  </div>;
}

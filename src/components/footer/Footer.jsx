import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
        <div className="fContainer">
            <div className="fLogo">
                <img src="https://webassets.cafebazaar.ir/images/licences/Samandehi.png" alt="" />
                <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className="fLists">
                <ul className="fList">
                <li className="fListItem">تبلیغات در بازار</li>
                <li className="fListItem">درباره ما </li>
                <li className="fListItem">تماس با ما </li>
                </ul>
                <ul className="fList">
                <li className="fListItem">بلاگ بازار</li>
                <li className="fListItem">خبرها</li>
                <li className="fListItem">فنی بازار </li>
                </ul>
                <ul className="fList">
                <li className="fListItem">شرایط استفاده</li>
                <li className="fListItem">حریم خصوصی</li>
                <li className="fListItem">پشتیبانی </li>
                </ul>
                <ul className="fList">
                <li className="fListItem">توسعه دهندگان</li>
                <li className="fListItem">فرصت های شغلی</li>
                <li className="fListItem">جایزه</li>
                </ul>
                <ul className="fList">
                <li className="fListItem">نصب بازار</li>
                <li className="fListItem">بازی اندروید</li>
                <li className="fListItem">برنامه اندروید</li>
                </ul>
            </div>
      </div>
      <div className="fText">
        تمامی حقوق این سایت متعلق به شرکت آوای همراه هوشمند هزاردستان (فروشگاه برنامه‌های موبایلی اندروید بازار) است
        
      </div>
    </div>
  )
}

export default Footer
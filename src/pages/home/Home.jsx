import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import List from '../../components/list/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAtom, faCamera, faDollar, faPuzzlePiece, faRetweet, faShop } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import TabBar from '../../components/tabBar/TabBar'
import FootBar from '../../components/footBar/FootBar'
import Menu from '../../components/menu/Menu'
import { useState } from 'react'

const Home = () => {
  const [menuOpen,setMenuOpen]= useState(false) 
  return (
    <> 
    <div className="home"> 
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <TabBar />
        <div className="homeTitle">
          <p>برنامه ها</p>
        </div>
      <List />
      <List />
      <List />
      <div className="properties">
          <div className="title">
            <div className="lSide">
            <FontAwesomeIcon icon={faAngleLeft} /> 
            <span>بیشتر</span>
            </div>
            <p>دسته بندی برنامه ها</p>
          </div>
          <div className="container">
          <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>سرگرمی</p>
                  <FontAwesomeIcon icon={faPuzzlePiece} /> 
                </span>
            </div>
            <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>آموزش</p>
                  <FontAwesomeIcon icon={faAtom} /> 
                </span>
            </div>
            <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>خرید</p>
                  <FontAwesomeIcon icon={faShop} /> 
                </span>
            </div>
            <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>شبکه های اجتمایی</p>
                  <FontAwesomeIcon icon={faRetweet} /> 
                </span>
            </div>
            <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>عکاسی و ویدیو</p>
                  <FontAwesomeIcon icon={faCamera} /> 
                </span>
            </div>
            <div className="body">
                <FontAwesomeIcon icon={faAngleLeft} /> 
                <span className='rightBody'>
                  <p>امور مالی</p>
                  <FontAwesomeIcon icon={faDollar} /> 
                </span>
            </div>
          </div>
        </div>
        <div className="paragraph">
            <p>
            به خودتان نگاهی بیندازید، آیا برای انجام هر کاری به گوشی خود سر نمی‌زنید؟ آیا به‌دنبال دانلود برنامه‌های اندرویدی نیستید که کارهایتان را آسان‌تر کنند؟ ما در بازار اپلیکیشن‌های اندروید، برای هر موضوعی که در ذهن شماست، برنامه داریم و امکان نصب و دانلود آن‌ها را با اینترنت نیم‌بها و با سپر امنیت بازار برایتان فراهم کرده‌ایم.
            </p>
            <p>
            اپلیکیشن‌های بازار در ۲۰ دسته‌ی مختلف منظم شده‌اند که در ادامه آن‌ها را برایتان معرفی می‌کنیم. کافی است موضوع مورد علاقه‌ی خود را انتخاب کنید و از بین صدها برنامه هر دسته، بهترین و کاربردی‌ترین اپ را دانلود کنید. فراموش نکنید که حتما به نظرات و امتیازی (Rating) که کاربران به برنامه‌ها داده‌اند نیز توجه کنید تا حافظه موبایل‌تان را با اپ‌های بهتری پر کنید.
            </p>
            <b>دانلود برنامه های جدید اندرویدی</b>
            <p>در صفحه اصلی بازار می‌توانید برنامه‌های جدید منتخب سردبیران و همینطور بروزرسانی‌های منتخب را ببینید و از هیچ برنامه جدیدی جا نمانید. بازی‌های جدید نیز در صفحه بازی‌های اندرویدی بازار به‌همین ترتیب مشخص هستند.
            </p>
        </div>
        <Footer />
        <FootBar />
      </div>
    </>
  )
}

export default Home
import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import TabBar from '../../components/tabBar/TabBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Gallery from '../../components/gallery/Gallery'
import List from '../../components/list/List'
import Footer from '../../components/footer/Footer'
import FootBar from '../../components/footBar/FootBar'
import Menu from '../../components/menu/Menu'
import { useState } from 'react'

const Single = () => {
  const [menuOpen,setMenuOpen]= useState(false) 
  return (
    <div className='single'>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <TabBar />
      <div className="singleTitle">
        <p>بازار</p>
        <FontAwesomeIcon icon={faAngleLeft} className="iconTitle"/> 
        <p>ابزار ها</p>
        <FontAwesomeIcon icon={faAngleLeft} className="iconTitle"/> 
        <p>برنامه ها</p>
      </div>
      <div className="wrapper">
             <div className="rSide">
          <div className="rIntro">
            <div className="rHeader">
              <img 
              src="https://s.cafebazaar.ir/images/icons/com.farsitel.bazaar-b413fb72-5dc4-4a2d-b2a3-7cf567cb6650_128x128.png?x-img=v1/resize,w_128/format,type_webp"
              alt= ""
              />
              <div className="rTitle"> 
                <h1>بازار</h1>
                <h2>کافه بازار</h2>
                <h3>نسخهٔ ۱۹.۴.۳ پرداخت درون ‌برنامه‌ای</h3>
              </div>
              <button>دانلود بازار</button>
            </div>
            <div className="rDetails">
              <span className="rDetailsCount">
                <p>+۷۰ میلیون</p>
                <span>نصب</span>
              </span>
              <span className="rDetailsCount">
                <p>۴.۳</p>
                <span>از ۸۴۸،۸۴۹ رأی</span>
              </span>
              <span className="rDetailsCount">
                <p>ابزارها</p>
                <span>دسته بندی</span>
              </span>
              <span className="rDetailsCount">
                <p>۱۶ مگابایت</p>
                <span>حجم</span>
              </span>
            </div>
          </div>
          <div className="gallery">
            <div className="galleryTitle">
              تصاویر برنامه
            </div>
            <div className="galleryPic">
              <Gallery />
            </div>
          </div>
          <div className="download">
            <img src="https://webassets.cafebazaar.ir/images/footer-download.png" alt="" />
            <div className="downloadDesc">
              <h3>دانلود اپلیکیشن بازار</h3>
              <h4>پر مخاطب ترین اپ استور فارسی زبانان</h4>
              <div className="downloadButton">
                <button>نسخه اندروید</button>
                <button>نسخه تلویزیون</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lSide">
          <div className="intro">
            <span>معرفی برنامه</span>
          <div className="introDesc">
           <p>
           بازار برای جستجوی سریع ساخته شده است. روی ذره‌بین بازار بزنید و برنامه، بازی ایرانی و خارجی بدون دیتا یا دیتا دار را پیدا کنید.
              روی تَبِ ویدیو بزنید و بدون نیاز به اشتراک و کاملا رایگان پیشنهاد‌های بازار را تماشا کنید یا برنامه‌ی مورد نظر خود را تایپ کنید و مستقیم به فیلم و سریالی که می‌خواهید وصل شوید.
              گاهی فقط با انتخاب دسته‌ی مورد علاقه می‌توانید جدید‌ترین‌ها و برترین‌ها‌ی برنامه و بازی را پیدا کنید.
              <b>بازار همیشه باز است.</b>
              تایپ یک کلمه‌ی مرتبط با برنامه‌ای که نیاز دارید‌، بازی‌ای که به گوشتان خورده است، شما را به هدف می‌رساند. اطلاعات زیر هر برنامه و بازی را بخوانید و از کشف جدید خود لذت ببرید؛ با ترافیک نیم بها اینترنت، برنامه‌ و بازی دانلود کنید. 
              این برنامه؛ تجربه‌ای متنوع و بروز
              این روزها برای تمامی کارهای روزانه‌، سرگرمی و کارهای فوری مثل پزشکی باید برنامه ریخت. بازار بیش از ۱۲۰ هزار برنامه‌ی فعال دارد که این برنامه‌ها در ۲۰ دسته‌ی متفاوت منظم شده‌اند. آب و هوا، آشپزی و رستوران، آموزش، ابزارها، امور مالی، پزشکی، تناسب اندام، خرید، رفت و آمد، سبک زندگی، سرگرمی، سفر، شخصی‌سازی، عکاسی و ویدیو، کتاب‌ها و مطبوعات، کودک، مذهبی، موسیقی و ورزشی دسته‌های برنامه‌های بازار هستند. برای جستجو فقط کافیست از صفحه‌ی اول، کلید واژه‌ی خود را تایپ کنید یا به دسته‌ی مورد نظر بروید و از زیر‌دسته‌های هر بخش، موضوع را انتخاب کنید و با خواندن اطلاعات و توضیحات، برنامه را دانلود و استفاده کنید. برای دسترسی سریع‌تر به برترین بازی‌ها و برنامه‌ها، روی «برترین‌های» بالای صفحه بزنید و برترین بازی‌ها و برنامه‌ها را یکجا ببینید. 
              ترافیک اینترنت برای دانلود برنامه‌ها و بازی‌ها در داخل کشور نیم بها است.
            </p>
          </div>
          </div>
          <div className="opinion">
            <div className="opTitle">
              <p>نظرات کاربران - ۸۴۸،۸۴۹ رأی</p>
              <span className="rate">
                <FontAwesomeIcon icon={faStar} className="iconStar"/>
                <p>۴.۳ از ۵</p>
              </span>
            </div>
            <div className="opBody">
              <div className="opScore">
                  <p><FontAwesomeIcon icon={faStar} className="opIconBody"/></p>
                  <p>۵</p>
                  <p><div className='opRating'></div></p>
              </div>
              <div className="opScore">
                  <p><FontAwesomeIcon icon={faStar} className="opIconBody"/></p>
                  <p>۴</p>
                  <p><div className='opRating'></div></p>
              </div>
              <div className="opScore">
                  <p><FontAwesomeIcon icon={faStar} className="opIconBody"/></p>
                  <p>۳</p>
                  <p><div className='opRating'></div></p>
              </div>
              <div className="opScore">
                  <p><FontAwesomeIcon icon={faStar} className="opIconBody"/></p>
                  <p>۲</p>
                  <p><div className='opRating'></div></p>
              </div>
              <div className="opScore">
                  <p><FontAwesomeIcon icon={faStar} className="opIconBody"/></p>
                  <p>۱</p>
                  <p><div className='opRating'></div></p>
              </div>
              <div className="avatar">
                <FontAwesomeIcon icon={faUser}  className="avatarIcon"/>
                <p>علی</p>
              </div>
              <div className="rate">
                <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
                <p>۱۴۰۱/۰۳/۰۷</p>
              </div>
              <div className="opDesc">
              واقعاً دست سازنده درد نکنه یه برنامه فوق‌العاده است،دمتون گرم واقعا عالی
              </div>
              <div className="avatar">
                <FontAwesomeIcon icon={faUser}  className="avatarIcon"/>
                <p>علی</p>
              </div>
              <div className="rate">
                <div className="star">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
                <p>۱۴۰۱/۰۳/۰۷</p>
              </div>
              <div className="opDesc">
              واقعاً دست سازنده درد نکنه یه برنامه فوق‌العاده است،دمتون گرم واقعا عالی
              </div>
            </div>
          </div>
        </div>
      </div>
      <List  className="list"/>
      <List className="list"/>
      <Footer />
      <FootBar />
    </div> 
  )
}

export default Single
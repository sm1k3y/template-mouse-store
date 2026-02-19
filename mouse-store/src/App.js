import NavigationBar from './components/NavigationBar';
import BestsellersCarousel from './components/BestsellersCarousel';
import Products from './components/Products';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className='app'>
      <NavigationBar />
      <Cart />

      <div className='wrapper' id='bestsellers'>
        <BestsellersCarousel />
      </div>

      <div className='wrapper' id='products'>
        <Products />
      </div>

      <div className='wrapper' id='about_us'>
        <div className='about_us'>
          <h2>О нас</h2>
          <p>ApexMouse — это специализированный магазин, созданный настоящими геймерами для геймеров. Мы фокусируемся
            исключительно на топовых игровых мышках, которые дают реальное преимущество в самых требовательных дисциплинах:
            FPS, MOBA, Battle Royale, киберспортивных тайтлах.
            Мы не продаём «всё подряд». Мы отбираем только те мыши, на которых сами готовы играть ранкеды и турниры.
            ApexMouse — там, где заканчиваются оправдания и начинается результат.</p>
          <p>Выбирай оружие победы.</p>
          <div className='contact_info_block'>
            <ContactInfo title='Связаться с нами' data='info@apexmouse.com' />
            <ContactInfo title='Наш адрес' data='г. Екатеринбург, улица Первомайской, д. 76' />
            <ContactInfo title='Время работы' data='По будням: 9:00 - 18:00' />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

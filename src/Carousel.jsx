import React from 'react';
import Chhath from './Chhath.jpg';
import Argh from './Argh.jpg';
import At from './At lake.jpg';
import Bihar from './Bihar.jpg';
import Daura from './Daura.jpg';
import Devotee from './Devotee at Ghat.jpg';
import Dev from './Devotees.jpg';
import Dp from './DP Chhath.jpg';
import Evening from './Evening Time.jpg';
import Foreginer from './Foreginer.jpg';
import Great from './Great Devotee.jpg';
import Kalsup from './Kalsup.jpg';
import Ladies from './Ladies During Chhath.jpg';
import Lady from './Lady in Lake.jpg';
import Male from './Male Devotees.jpg';
import Thekua from './Thekua.jpg';
function Carousel() {
    return ( 
        <>
        <div id="demo" className="carousel slide" data-ride="carousel">
<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
  <li data-target="#demo" data-slide-to="3"></li>
  <li data-target="#demo" data-slide-to="4"></li>
  <li data-target="#demo" data-slide-to="5"></li>
  <li data-target="#demo" data-slide-to="6"></li>
  <li data-target="#demo" data-slide-to="7"></li>
  <li data-target="#demo" data-slide-to="8"></li>
  <li data-target="#demo" data-slide-to="9"></li>
  <li data-target="#demo" data-slide-to="10"></li>
  <li data-target="#demo" data-slide-to="11"></li>
  <li data-target="#demo" data-slide-to="12"></li>
  <li data-target="#demo" data-slide-to="13"></li>
  <li data-target="#demo" data-slide-to="14"></li>
  <li data-target="#demo" data-slide-to="15"></li>

</ul>

<div className="carousel-inner">
    
 <div className="carousel-item active">
      <img src={Chhath} height="800;" width="100%;" alt="Chhath"/>
  </div>
  <div className="carousel-item">
      <img src={Argh} height="800;" width="100%;" alt="Argh"/>
  </div>
  <div className="carousel-item">
      <img src={At} height="800;" width="100%;" alt="At Bank of Lake"/>
  </div>
  <div className="carousel-item">
      <img src={Bihar} height="800;" width="100%;" alt="Bihar"/>
  </div>
  <div className="carousel-item">
      <img src={Daura} height="800;" width="100%;" alt="Daura"/>
  </div>
  <div className="carousel-item">
      <img src={Devotee} height="800;" width="100%;" alt="Devotees"/>
  </div>
  <div className="carousel-item">
      <img src={Dev} height="800;" width="100%;" alt="Sun Devotees"/>
  </div>
  <div className="carousel-item">
      <img src={Dp} height="800;" width="100%;" alt="Chhath Puja"/>
  </div>
  <div className="carousel-item">
      <img src={Evening} height="800;" width="100%;" alt="Argh in Evening Time"/>
  </div>
  <div className="carousel-item">
      <img src={Foreginer} height="800;" width="100%;" alt="Foreginer During Chhath Puja"/>
  </div>
  <div className="carousel-item">
      <img src={Great} height="800;" width="100%;" alt="Great Devotee"/>
  </div>
  <div className="carousel-item">
      <img src={Kalsup} height="800;" width="100%;" alt="Kalsup"/>
  </div>
  <div className="carousel-item">
      <img src={Ladies} height="800;" width="100%;" alt="Ladies During Chhath"/>
  </div>
  <div className="carousel-item">
      <img src={Lady} height="800;" width="100%;" alt="Lady In Lake"/>
  </div>
  <div className="carousel-item">
      <img src={Male} height="800;" width="100%;" alt="Male Devotees"/>
  </div>
  <div className="carousel-item">
      <img src={Thekua} height="800;" width="100%;" alt="Thekua"/>
  </div>

</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
        </>
    );
}
export default Carousel;
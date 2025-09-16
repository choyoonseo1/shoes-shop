
import './App.css'
import AppNavbar from './AppNavBar'
// assets 폴더 내의 이미지 사용법 -> import 후 사용
import bg_png from './assets/images/bg.png';
import img_2 from './assets/images/shoes2.jpg';
import img_3 from './assets/images/shoes3.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import data from './data/data';
import { useState } from 'react';
import Product from './Product';


function App() {
  // 상품정보를 갖는 product 스테이트를 만든다.
  const [product, setProduct] = useState(data);

  return (
    <>
      {/* 네이게이션 바 영역 시작 */}
      <AppNavbar />
      {/* 네이게이션 바 영역 끝 */}

      {/* 메인대문사진 영역 시작 */}
      <div className='main-bg'
        style={{ backgroundImage: `url('${bg_png}')` }}
      />
      {/* 메인대문사진 영역 끝 */}

      {/* 상품 진열 영역 시작 */}


      {/* 상품 진열 영역 끝 */}
      <Container>
        <Row>
          {
            product.map((shoes, index) => {
              return (
                <Col key={shoes.id} className="text-center" >
                 {/* product 콤포넌트 자리 */}
                 <Product shoes={shoes} />    
                  </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default App


import './App.css'
import AppNavbar from './AppNavBar'
// assets 폴더 내의 이미지 사용법 -> import 후 사용
import bg_png from './assets/images/bg.png';
import img_2 from './assets/images/shoes2.jpg';
import img_3 from './assets/images/shoes3.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import data from './data/data';

function App() {

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
          <Col className="text-center">
            <img src='https://zzzmini.github.io/images/shoes1.jpg'
              width='80%'/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </Col>
          <Col>
            <img src={img_2}
              width='80%'/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </Col>
          <Col>
            <img src={img_3}
              width='80%'/>
              <h4>상품명</h4>
              <p>상품설명</p>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default App

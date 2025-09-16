import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import './AppNavBar.css';
// Route : 페이지 이동 처리
// Routes : Url에 담겨있는 정보를 획득
// Link : 실제로 페이지를 보여주는 역할, Link위치에 컴포넌트 뿌려줌
import { Route, Routes, Link } from "react-router-dom";


function AppNavbar() {
  return (
    <>
      <div className="app">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Muzinjang</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/"}>Home</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to={"/detail"}>Detail</Link>
              </Nav.Link>
              
              <Nav.Link>
                <Link to={"/cart"}>Cart</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* 라우팅정보를 한꺼번에 모아놓는 장소 */}
        {/* 스프링에서의 Controller클래스 */}
        <Routes>
          <Route path="/" element={<div>메인페이지</div>} />
          <Route path="/detail" element={<div>상세페이지</div>} />
          <Route path="/cart" element={<div>장바구니</div>} />

        </Routes>
      </div>
    </>
  )
}

export default AppNavbar;
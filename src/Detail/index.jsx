import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Discount from "../Discount";
import Nav from "react-bootstrap/Nav";
import TabContent from "../TabContent";

function Detail({ product }) {
  const [detailFade, setDetailFade] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const [inputData, setInputData] = useState("");
  // 숫자말고 문자 입력 시 처리를 확인 할 논리값
  const [state, setState] = useState(false);

  // 탭을 눌렀을 때 선택되는 페이지값을 갖는 스테이트
  const [tabState, setTabState] = useState(0);

  // 애니메이션 용 Effect : 처음 한번만 실행
  useEffect(() => {
    const timer = setTimeout(() => setDetailFade("ani_end"), 100);
    return () => {
      clearTimeout(timer);
      setDetailFade("");
    };
  }, []);

  // useEffect 실행 확인 (2초 후 Discount 사라짐)
  useEffect(() => {
    const myTimer = setTimeout(() => setShowAlert(false), 2000);
    return () => clearTimeout(myTimer);
  }, []);

  // 입력 수량 확인 용 Effect (inputData에만 반응)
  useEffect(() => {
    // inputData state가 문자면... (isNaN: is Not a Number)
    setState(isNaN(inputData));
  }, [inputData]);

  // detail/3 -> path variable 값을 확인...
  let { id } = useParams(); // 얘는 문자 값
  const navigate = useNavigate();

  // props로 전달받은 product 배열에서 해당하는 객체만 찾아요...
  const findProduct = product.find((item) => item.id === Number(id));

  // 해당하는 제품이 존재하지 않을 때 처리
  if (findProduct == null) {
    alert("찾는 상품이 없습니다.");
    // 바로 이전 페이지로 이동
    navigate(-1);
    return null;
    // history.back(); - 자바스크립트 용
  }

  return (
    <div className={`container ani_start ${detailFade}`}>
      <div className="container mt-2">{showAlert && <Discount />}</div>

      <div className="row">
        <div className="col-md-6">
          <img
            src={`/images/shoes${findProduct.id + 1}.jpg`}
            width="100%"
            alt={findProduct.title}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>

          {/* 문자가 들어올 때 출력할 내용 */}
          {/* {state && <div>오류</div>}
          <p>
            수량 :
            <input
              type="text"
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
          </p> */}

          <p>
            <strong>{Number(findProduct.price).toLocaleString()}원</strong>
          </p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" activeKey={`link-${tabState}`} className="mt-4">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => setTabState(0)}>
            특징
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => setTabState(1)}>
            사이즈
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => setTabState(2)}>
            배송
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={() => setTabState(3)}>
            리뷰
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* 선택한 탭의 내용이 표시되는 공간 */}
      <TabContent tabState={tabState} id={findProduct.id} />
    </div>
  );
}

export default Detail;

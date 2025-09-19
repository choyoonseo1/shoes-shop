import { useEffect, useMemo, useState } from "react";
import DetailInfo from "../TabInfo/DetailInfo";
import SizeGuide from "../TabInfo/SizeGuide";
import Shipping from "../TabInfo/Shipping";
import REVIEWS from "../data/reviews"; 

function TabContent({ tabState, id }) {
  const [fade, setFade] = useState("");

  // 탭 전환 페이드 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setFade("ani_end"), 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tabState]);

  // 현재 상품(id) 리뷰만 필터
  const productReviews = useMemo(
    () => REVIEWS.filter((r) => r.productId === id),
    [id]
  );

  // 별점 표시(5점 만점)
  const renderStars = (point) => "★".repeat(point) + "☆".repeat(5 - point);

  // 평균 별점 & 리뷰 개수
  const { avg, count } = useMemo(() => {
    if (productReviews.length === 0) return { avg: 0, count: 0 };
    const sum = productReviews.reduce((acc, cur) => acc + cur.point, 0);
    return { avg: (sum / productReviews.length).toFixed(1), count: productReviews.length };
  }, [productReviews]);

  // 리뷰 탭
  const ReviewTab = (
    <div className="mt-3">
      {/* 요약 */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="text-warning" style={{ fontSize: "1.05rem" }}>
          {renderStars(Math.round(avg))}
        </span>
        <span className="text-muted small">평균 {avg} / 5 · 리뷰 {count}개</span>
      </div>

      {/* 리스트 */}
      {productReviews.length === 0 ? (
        <div className="text-center text-muted py-4">아직 등록된 리뷰가 없습니다.</div>
      ) : (
        <ul className="list-group list-group-flush">
          {productReviews.map((r) => (
            <li key={r.reviewId} className="list-group-item py-3">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <div className="fw-semibold">{r.title}</div>
                  <div className="text-warning small">
                    {renderStars(r.point)} <span className="text-muted">({r.point})</span>
                  </div>
                </div>
                <div className="text-muted small">#{r.reviewId}</div>
              </div>
              <p className="mb-0 mt-2">{r.review}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className={`ani_start ${fade}`}>
      {
        [
          <DetailInfo key="detail" id={id} />,
          <SizeGuide key="size" />,
          <Shipping key="ship" />,
          ReviewTab, 
        ][tabState]
      }
    </div>
  );
}

export default TabContent;

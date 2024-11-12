/*eslint-disable*/
import { useState } from "react"
import "./App.css"
function App() {
  let [blogTitle, setBlogTitle] = useState([
    "겨울 패션 필수템 추천",
    "서울 맛집 탐방기",
    "먹고 살기위해 배우는 프론트엔드 개발",
  ])
  let [likeCount, setLikeCount] = useState(0)
  // 모달이 열려 있는지 상태(여부)를 state로 관리
  let [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navbar />
      <ul className="blog-list">
        <li className="blog-item">
          {/* 블로그 제목 */}
          <h4 className="blog-title">
            {blogTitle[0]}
            <button
              onClick={() => {
                setLikeCount(likeCount + 1)
              }}
              className="like-btn"
            >
              👍🏼
            </button>
            <span>{likeCount}</span>
          </h4>
          {/* 블로그 내용 */}
          {/* 블로그 날짜 */}
          <p className="blog-date">{Date()}</p>
          {/* 블로그 제목 변경 */}
          <button
            onClick={() => {
              let copy = [...blogTitle]
              copy[0] = "여행 가기 좋은 국내 핫플레이스"
              setBlogTitle(copy)
            }}
            className="change-btn"
          >
            <span> 제목 변경 </span>🧙🏼
          </button>
          <button
            onClick={() => {
              let copy = [...blogTitle]
              copy.sort((title1, title2) => {
                return title1.localeCompare(title2, "ko")
              })
              setBlogTitle(copy)
            }}
            className="change-btn"
          >
            <span> ㄱㄴㄷ 정렬 </span>💬
          </button>
        </li>
        <li className="blog-item">
          {/* 블로그 제목 */}
          <h4 className="blog-title">{blogTitle[1]}</h4>
          {/* 블로그 날짜 */}
          <p className="blog-date">{Date()}</p>
        </li>
        <li className="blog-item">
          {/* 블로그 제목 */}
          <h4
            onClick={() => {
              setIsModalOpen(!isModalOpen)
            }}
            className="blog-title"
          >
            {blogTitle[2]}
          </h4>
          {/* 블로그 날짜 */}
          <p className="blog-date">{Date()}</p>
        </li>
      </ul>
      {/* 상세페이지 모달창 */}
      {/* isModalOpen이 true일 때만 Modal 컴포넌트 렌더링 */}
      {isModalOpen ? <Modal /> : ""}
      {/* {isModalOpen && <Modal />} */}
    </>
  )
}

function Navbar() {
  let title = "MUJISINNA"
  let [navMenu, setnavMenu] = useState([
    "추천",
    "랭킹",
    "세일",
    "브랜드",
    "신상",
    "스포츠 아우터",
    "뉴발란스",
    "메가위크",
  ])

  return (
    <nav className="navbar">
      <h3 className="navbar-title">{title}</h3>
      <div className="navbar-input-wrapper">
        <input className="navbar-input" placeholder="이번주는 겨울 아우터 최대 80%"></input>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#">{navMenu[0]}</a>
        </li>
        <li>
          <a href="#">{navMenu[1]}</a>
        </li>
        <li>
          <a href="#">{navMenu[2]}</a>
        </li>
        <li>
          <a href="#">{navMenu[3]}</a>
        </li>
        <li>
          <a href="#">{navMenu[4]}</a>
        </li>
        <li>
          <a href="#">{navMenu[5]}</a>
        </li>
        <li>
          <a href="#">{navMenu[6]}</a>
        </li>
        <li>
          <a href="#">{navMenu[7]}</a>
        </li>
      </ul>
    </nav>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App

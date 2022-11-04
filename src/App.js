import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Excel from "./pages/Excel";


//1. 3개 페지 필요 - 홈피, 무비 디테일, 무비 페이지
//2. 홈피에서 배너를 볼 수 있다. 
//3. 3가지 섹션의 영화를 볼 수 있다. popular, top rated, upcoming
//4. 각 영화에 마우스 올려두면 제목, 장르, 점수, 청불여부
//5. 영화를 슬라이드로 넘기면서 볼 수 있다. 
//6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임...)
//7. trailer를 누르면 볼 수 있다. 
//8. 리뷰도 볼 수 있다. 
//9. 관련된 추천 영화도 볼 수 있다. 
//10. 영화 검색을 할 수 있다. 
//11. 영화 정렬가능
//12. 영화 필터 가능
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Excel/>}/>

      </Routes>
      
    </div>
  );
}

export default App;

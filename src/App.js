import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

// app 컴포넌트는 함수로 만들어져 있다.
// 함수로 만들어진 컴포넌트는 함수형 컴포넌트라고 하고 모든 컴포넌트는 첫글자 대문자로 시작한다.
function App() {

  return ( // 이 함수가 리턴하는 것(JSX JavaScript XML)
    // JSX는 하나의 최상의 태그만 만들 수 있다.
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>

      </div >
    </BrowserRouter>
  );
}
export default App;

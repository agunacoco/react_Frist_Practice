import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>
    }

    // const [days, setDays] = useState([]);

    // // 어떤 상태 값이 바뀌었을 때 동작하는 함수를 작성할 수 있다.
    // // 원하지 않는 상태일때도 호출될 수 있다.
    // // 이런 경우에 두번째 매개변수로 배열을 준다. 이것을 의존성 배열이라고 함.
    // // 의존성 배열의 값이 변경되는 경우에만 함수가 동작.
    // useEffect(() => { // 랜더링이 완료 되고 api 호출.
    //     // fetch는 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일
    //     fetch('http://localhost:3001/days')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             setDays(data);
    //         })
    // }, []); // 빈 배열을 넣으면 처음에 랜더링 직후 딱 한번만 실행된다.

    return (
        <div>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>
                            Day {day.day}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();

    function addDay() {
        fetch("http://localhost:3001/days/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //content-type는 보내는 타입.
            },
            body: JSON.stringify({ // json 문자열로 반환하기 위해서
                day: days.length + 1
            }),
        }).then(res => {
            if (res.ok) {
                alert("Day 작성완료");
                history("/");

            }
        })
    }

    return (
        <div>
            <h2>현재 일수 : {days.length}</h2>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}
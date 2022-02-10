import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {

    const days = useFetch("http://localhost:3001/days");
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            fetch("http://localhost:3001/words/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', //content-type는 보내는 타입.
                },
                body: JSON.stringify({ // json 문자열로 반환하기 위해서

                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    day: dayRef.current.value,
                    isDone: false
                }),
            }).then(res => {
                if (res.ok) {
                    alert("작성완료");
                    history(`/day/${dayRef.current.value}`)
                }
            })
        }
    }

    // useRef는 dom에 접근할 수 있게 해주는 훅.
    const engRef = useRef(null); // 초기값 null
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    );
}
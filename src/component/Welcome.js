import { useState } from "react";
import UserName from "./UserName.js";

export default function Welcome({ age }) {

    // useState를 사용할 때, 상태의 기본값을 파라미터로 넣어서 호출. 배열 반환.
    const [name, setName] = useState('aguna');
    const message = age > 19 ? "성인" : "미성년";

    return (
        <div>
            <h1>State</h1>
            <h2 id="name">{name} {age}세 : {message}</h2>
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "aguna" ? "Jane" : "aguna");
            }}>change</button>
        </div>
    );
}
import { useState } from "react";

export default function Word(props) {

    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', //content-type는 보내는 타입.
            },
            body: JSON.stringify({ // json 문자열로 반환하기 위해서
                ...word,
                isDone: !isDone
            }),
        }).then(res => {
            if (res.ok) {
                setWord({ id: 0 });
            }
        })
    }

    if (word.id === 0) {
        return null;
    }

    function del() {
        if (window.confirm('삭제 하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE',
            }).then(res => {
                if (res.ok) {
                    setIsDone(!isDone);
                }
            })
        }
    }

    return (
        <tr className={isDone ? "off" : "on"}>
            <td>
                <input type="checkbox" checked={isDone}
                    onChange={toggleDone} />
            </td>
            <td>
                {word.eng}
            </td>
            <td>
                {isShow && word.kor}
            </td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "숨기" : "보기"}</button>
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr >
    );
}
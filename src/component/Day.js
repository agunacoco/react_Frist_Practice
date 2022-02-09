import { useParams } from "react-router-dom";
import dummy from "../db/data.json"
import Word from "./Word";

export default function Day() {

    const a = useParams().day;
    const wordList = dummy.words.filter(word => (
        word.day === Number(a)
    ));
    console.log(wordList);
    return (
        <>
            <h2>Day {a}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
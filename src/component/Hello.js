// const Hello = function () {
//     <p>Hello</p>
// }
// export default Hello;

import World from "./World";
import styles from "./Hello.module.css"

export default function Hello() {

    function showName() {
        console.log('Jangjae');
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1>Hello</h1>
            <World />
            <div className={styles.box}></div>
            <button onClick={showName}>show name</button>
            <button onClick={
                () => {
                    showAge(30);
                }
            }>show age</button>
            <input type="text" onChange={e => {
                const txt = e.target.value;
                showText(txt);
            }} />
        </div>
    );
}
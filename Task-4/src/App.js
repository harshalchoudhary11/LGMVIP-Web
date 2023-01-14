import React, { useState } from "react";
import { FiDelete } from "react-icons/fi"
function App() {
    const [result, setResult] = useState("");
    const clickHandeler = (event) => {
        setResult(result.concat(event.target.value))
    }
    const cleardispaly = () => {
        setResult("")
    }
    const calculate = () => {
        setResult(eval(result).toString());
    }
    const remove = () => {
        setResult(result.substring(0, result.length - 1))
    }

    return (
        <div className="calc">
            <h1>CALCULATOR</h1>
            <input type="text" placeholder="0" id="Answer" value={result} />
            <input type="button" value="7" className="button" onClick={clickHandeler} />
            <input type="button" value="8" className="button" onClick={clickHandeler} />
            <input type="button" value="9" className="button" onClick={clickHandeler} />
            {/* <input type="button" value="R" className="button" onClick={remove} /> */}
            <div className="icon">
            <FiDelete className="box-icon" onClick={remove}></FiDelete>
            </div>
            <input type="button" value="4" className="button" onClick={clickHandeler} />
            <input type="button" value="5" className="button" onClick={clickHandeler} />
            <input type="button" value="6" className="button" onClick={clickHandeler} />
            <input type="button" value="/" className="button" onClick={clickHandeler} />
            <input type="button" value="1" className="button" onClick={clickHandeler} />
            <input type="button" value="2" className="button" onClick={clickHandeler} />
            <input type="button" value="3" className="button" onClick={clickHandeler} />
            <input type="button" value="*" className="button" onClick={clickHandeler} />
            <input type="button" value="0" className="button" onClick={clickHandeler} />
            <input type="button" value="-" className="button" onClick={clickHandeler} />
            <input type="button" value="%" className="button" onClick={clickHandeler} />
            <input type="button" value="+" className="button" onClick={clickHandeler} />
            <input type="button" value="CE" className="Clear" onClick={cleardispaly} />
            <input type="button" value="." className="button" onClick={clickHandeler} />
            <input type="button" value="=" className="button button1" onClick={calculate} />
        </div>
    )
}
export default App;
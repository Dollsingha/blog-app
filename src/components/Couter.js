import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const increaseCount = function(){
        setCount(() => count + 1);
        setDisabled(() => false);
    }

    const decreamentCount = function(){
        //(count > 0) ? setCount(() => count - 1) :  window.alert('No more change');

        if(count > 0){
            setCount(() => count - 1);
            setDisabled(() => false);
        }else{
            setDisabled(() => true);
        }
    }
    
    return (
        <div className="col-lg-3 mt-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Counter App</h5>
                    <h1 className="text-center">{count}</h1>
                    <button
                        type="button"
                        className="btn btn-danger mx-2"
                        onClick={decreamentCount}
                        disabled={disabled}
                    >
                    Decrement
                    </button>
                    <button type="button" className="btn btn-success" onClick={increaseCount}>Increament</button>
                </div>
            </div>
        </div>
    )
}

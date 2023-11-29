import { forwardRef, useImperativeHandle, useRef } from "react";
 const ResultModel=forwardRef(function ResultModel({result, targetTime},ref){
const dialog=useRef();
    useImperativeHandle(ref, ()=>{
       return{
        open(){
            dialog.current.showModal();
        }
    }
    })
    return (
            <dialog ref={dialog} className="result-modal" >
                <h1>{result}</h1>
                <p>
                    The Target time was <strong>{targetTime} second.</strong>
                </p>
                <p>
                    You stopped timer wirh <strong>X second left.</strong>
                </p>
                <form method="dialog">
                    <button>Close</button>
                </form>
            </dialog>
    );
})

export default ResultModel;
import React, { useEffect } from "react"
import { Alert } from "./Alert";
type InputProps = {
    placeHolder: string;
    inputProcess: (value: string)=>string
}
export const Input: React.FC<InputProps> = ({placeHolder, inputProcess}) => {
    let inputElement: HTMLInputElement | null
   const inputId =
    React.useRef(Math.round(Math.random() * 100000000) + '');
    const [message, setMessage] = React.useState('')
    function processGo(): void {
       setMessage('')
        const messageRet: string = inputProcess(inputElement!.value);
        
        if (messageRet == '') {
            inputElement!.value = '';
        } else {
            
            setMessage(messageRet);

        }
        
    }
    useEffect(() => {
       inputElement = document.getElementById(inputId.current) as HTMLInputElement;
    })
    return <div>
        <input id={inputId.current} placeholder={placeHolder}/>
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} message={message}/>}
    </div>
}
import React, {useState} from 'react'



export default function  TextForm(props) {
    
    const handleUpClick = () => {
       
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to Upper Case", "success")
    }
    const handleLowClick = () => {
       
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to Lower Case", "success")


    }
    const handleClearClick = () => {
       
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Clipboard", "success")

    }
    const handleOnChange= (event) =>{
        setText(event.target.value)
    }
const [text, setText] = useState('');
let word = text.split(" ");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}> 
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white' }} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        
        <p>{word.length} words and {text.length} characters</p>
        <p>{0.008 * word.length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter to preview text here'}</p>
    </div>
    </>
  )
}

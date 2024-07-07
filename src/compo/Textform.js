import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpper=()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success");
        
    }
    const handlelower=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");
        
    }
    const handlechange=(event)=>{
        setText(event.target.value);
        
    };
    const clear=()=>{
        setText('Enter Text Here');
        props.showAlert("Cleared All Text","success");
    }
    const [text, setText] = useState('Enter Text Here');
    
    const extraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed All Space","success");

    }
    const copyText=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copyied","success");
    }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" style={{background:props.mode==='dark'?'grey':'white'}} value={text} onChange={handlechange} rows="10"></textarea>
    <button className="btn btn-primary my-2 " onClick={handleUpper} >Convert to uppercase</button>
    <button className="btn btn-danger mx-2 "onClick={clear}>Clear</button>
    <button className="btn btn-info mx-2 "onClick={handlelower}>Convert to lowercase</button>
    <button className="btn btn-success" onClick={extraSpace}>Extra Space</button>
    <button className="btn btn-info mx-2" onClick={copyText}>Copy Text</button>
</div>
</div>
<div className="container">
    <h1>Text Summary</h1>
    <p> {text.split(" ").length} words {text.length} character</p>
    <p>{0.008 * text.split(" ").length} Minutes to reads the Above Words</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>

</>
  )
}


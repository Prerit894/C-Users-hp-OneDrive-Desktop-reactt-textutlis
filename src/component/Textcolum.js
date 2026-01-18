import React, { useState } from "react"

export default function Textcolum(props) {
    let [text, settext] = useState("");
    // text = "new text";//wrong way to change the state
    // settext("new text");//correct way to change the state

    const handleupclick = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Upper Case.", "success");
    }

    const handleloclick = () => {
        let newText = text.toLowerCase();
        props.showAlert("Converted to Lower Case.", "success");
        settext(newText);
    }
    // capitalize first letter of each word
    const handleCFLclick = () => {
        let words = text.split(" ");
        let capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        settext(capitalizedWords.join(" "));
        props.showAlert("Capatilze has been set.", "success");
    }

    const handleClearclick = () => {
        let newText = "";
        settext(newText)
        props.showAlert("Text has been clear.", "success");
    }

    const handleCopyclick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard.", "success")
    }
    const handleonchange = (event) => {
        // console.log("on change")
        settext(event.target.value);
    }

    return (
        <>
            <div className="conatainer" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} id="mybox" rows="8"></textarea>
                </div >
                <button className="btn btn-primary mx-2 text-black fw-bold" onClick={handleupclick}>Change to UpperCase</button>
                <button className="btn btn-primary mx-2 text-black fw-bold" onClick={handleloclick}>Change to LowerCase</button>
                <button className="btn btn-primary mx-2 text-black fw-bold" onClick={handleCFLclick}>Captialize first letter</button>
                <button className="btn btn-primary mx-2 text-black fw-bold" onClick={handleClearclick}>Clear</button>
                <button className="btn btn-primary mx-2 text-black fw-bold" onClick={handleCopyclick}>Copy Text</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p className="fs-3">{text.split(" ").length - 1} words {text.length} characters </p>
                <p className="fs-3">Preview</p>
                <p>{text}</p>

            </div>
        </>
    );
}
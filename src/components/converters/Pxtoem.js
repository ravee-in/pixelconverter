import React from 'react';
import { useState } from 'react'

const Pxtoem = () => {


    const [baseValue, setBaseValue] = useState("");
    const [toConvert, setToConvert] = useState('');
    const [result, setResult] = useState('');

    const changeBaseValue = (event) => {
        setBaseValue(event.target.value);
    }

    const changeConvertValue = (event) => {
        setToConvert(event.target.value);
    }

    const ChangeToEm = () => {
        let newResult = toConvert / baseValue;
        setResult(newResult);
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 m-auto">
                    <div className="contentArea">
                        <h2 className="col-title">PX to EM Converter</h2>
                        <p className='text-justify'>EM is a measurement unit commonly used in Cascading Style Sheets. It is a font-relative unit, which means that it's value is relative to the font-size of it's parent element. This PX to EM Converter eliminates the hassle of converting pixels (px) to em yourself everytime you need to.</p>
                    </div>
                    <div className="converterArea p-2 p-md-5 bg-light">
                        <div className="baseValue w-50 m-auto">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="baseValue_px">PX</span>
                                <input type="number" className="form-control" placeholder="Enter Base Value" value={baseValue} onChange={changeBaseValue} aria-label="baseValue_px" aria-describedby="baseValue_px" />
                            </div>
                        </div>

                        <hr className='separator' />

                        <div className="toConvert">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="toConvert_px">PX</span>
                                <input type="number" className="form-control" placeholder="Enter Value to Convert" value={toConvert} onChange={changeConvertValue} aria-label="toConvert_px" aria-describedby="toConvert_px" />
                            </div>

                            <button type="button" className='btn btn-sm btn-success float-end mb-5' onClick={ChangeToEm}>Convert!</button>
                        </div>

                        <div className="resultDIV">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="toConvert_px">EM</span>
                                <input type="number" className="form-control" placeholder="Converted Value" value={result} disabled aria-label="toConvert_px" aria-describedby="toConvert_px" />
                            </div>
                        </div>
                    </div>

                    <hr className='separator' />

                    <div className="contentArea">
                        <h2 className="col-title">How to Use PX to EM Converter?</h2>
                        <ul>
                            <li>Step 1: Enter base value.</li>
                            <li>Step 2: Input the px value you want to convert.</li>
                            <li>Step 3: Press enter key or click the convert button to get it's em equivalent.</li>
                        </ul>

                        <h2 className="col-title">PX to EM Conversion Table</h2>
                        <p>
                            The table below displays the common px to em converstions like font-size, break-point, element's min-width, and more. This is given that the font-size of your parent element (some call it container or wrapper) is 16px. You can also use the converter above.
                        </p>
                        <table className='table table-responsive table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>PX</th>
                                    <th>EM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4px</td>
                                    <td>0.25em</td>
                                </tr>
                                <tr>
                                    <td>8px</td>
                                    <td>0.5em</td>
                                </tr>
                                <tr>
                                    <td>12px</td>
                                    <td>0.75em</td>
                                </tr>
                                <tr>
                                    <td>16px</td>
                                    <td>1em</td>
                                </tr>
                                <tr>
                                    <td>20px</td>
                                    <td>1.25em</td>
                                </tr>
                                <tr>
                                    <td>24px</td>
                                    <td>1.5em</td>
                                </tr>
                                <tr>
                                    <td>32px</td>
                                    <td>2em</td>
                                </tr>
                                <tr>
                                    <td>40px</td>
                                    <td>2.5em</td>
                                </tr>
                                <tr>
                                    <td>48px</td>
                                    <td>3em</td>
                                </tr>
                                <tr>
                                    <td>64px</td>
                                    <td>4em</td>
                                </tr>
                                <tr>
                                    <td>96px</td>
                                    <td>6em</td>
                                </tr>
                                <tr>
                                    <td>128px</td>
                                    <td>8em</td>
                                </tr>
                                <tr>
                                    <td>160px</td>
                                    <td>10em</td>
                                </tr>
                                <tr>
                                    <td>176px</td>
                                    <td>11em</td>
                                </tr>
                                <tr>
                                    <td>192px</td>
                                    <td>12em</td>
                                </tr>
                                <tr>
                                    <td>208px</td>
                                    <td>13em</td>
                                </tr>
                                <tr>
                                    <td>224px</td>
                                    <td>14em</td>
                                </tr>
                                <tr>
                                    <td>256px</td>
                                    <td>16em</td>
                                </tr>
                                <tr>
                                    <td>320px</td>
                                    <td>20em</td>
                                </tr>
                                <tr>
                                    <td>480px</td>
                                    <td>30em</td>
                                </tr>
                                <tr>
                                    <td>576px</td>
                                    <td>36em</td>
                                </tr>
                                <tr>
                                    <td>768px</td>
                                    <td>48em</td>
                                </tr>
                                <tr>
                                    <td>800px</td>
                                    <td>50em</td>
                                </tr>
                                <tr>
                                    <td>960px</td>
                                    <td>60em</td>
                                </tr>
                                <tr>
                                    <td>992px</td>
                                    <td>62em</td>
                                </tr>
                                <tr>
                                    <td>1024px</td>
                                    <td>64em</td>
                                </tr>
                                <tr>
                                    <td>1120px</td>
                                    <td>70em</td>
                                </tr>
                                <tr>
                                    <td>1200px</td>
                                    <td>75em</td>
                                </tr>
                                <tr>
                                    <td>1280px</td>
                                    <td>80em</td>
                                </tr>
                                <tr>
                                    <td>1440px</td>
                                    <td>90em</td>
                                </tr>
                                <tr>
                                    <td>1600px</td>
                                    <td>100em</td>
                                </tr>
                            </tbody>
                        </table>

                        <hr className='separator' />

                        <h2 className="col-title">How to Convert PX to EM?</h2>
                        <p>
                            Converting the em equivalent of px value is relatively easy. As stated above, em is a font-relative measurement. Which means that whatever the font-size of it's parent element, 1em is equivalent to that font-size.
                        </p>

                        <h2 className="col-title">PX to EM Formula:</h2>
                        <p className='py-4 px-2 bg-light mb-0   '>
                            <code>
                                em = px / font-size (default is 16px)
                            </code>
                        </p>
                        <p>
                            <small>This means that if it's parent's font size is 16px. For it's child elements, 1em = 16px.</small>
                        </p>

                        <h2 className="col-title">Difference Between PX and EM</h2>
                        <p>So the difference between PX and EM is pretty simple. Pixels (px) is an absolute unit while em is a font-relative unit which is based on it's parent element.
                            <br /><br />
                            To elaborate this, say you have an 'aside' element with 64px width. It is always 64px width no matter where you put it.
                            <br /><br />
                            However, it is not the case in em. If you change the font-size of a parent element, it's child elements with em length units will change, too! That's the behavior of a font-relative measurement.</p>



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pxtoem
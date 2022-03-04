import React from 'react';
import { useState } from 'react'

const PxToRem = () => {


    const [baseValue, setBaseValue] = useState("");
    const [toConvert, setToConvert] = useState('');
    const [result, setResult] = useState('');

    const changeBaseValue = (event) => {
        setBaseValue(event.target.value);
    }

    const changeConvertValue = (event) => {
        setToConvert(event.target.value);
    }

    const ChangeToRem = () => {
        let newResult = toConvert / baseValue;
        setResult(newResult);
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 m-auto">
                    <div className="contentArea">
                        <h2 className="col-title">PX to REM Converter</h2>
                        <p className='text-justify'>REM, short for root em, is one of the font-relative measurement units commonly used in css. This px to rem converter is a free online tool you can use to convert from px value to it's rem equivalent.</p>
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

                            <button type="button" className='btn btn-sm btn-success float-end mb-5' onClick={ChangeToRem}>Convert!</button>
                        </div>

                        <div className="resultDIV">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="toConvert_px">REM</span>
                                <input type="number" className="form-control" placeholder="Converted Value" value={result} disabled aria-label="toConvert_px" aria-describedby="toConvert_px" />
                            </div>
                        </div>
                        </div>

                        <hr className='separator' />

                        <div className="contentArea">
                            <h2 className="col-title">How to Use PX to REM Converter?</h2>
                            <ul>
                                <li>Step 1: Enter your base font. It's the font-size you declare on 'html' element.</li>
                                <li>Step 2: Input the pixels (px) value on the PX field that you want to convert to rem (root em).</li>
                                <li>Step 3: Press enter key or click the convert button and the result will be displayed on REM field.</li>
                            </ul>

                            <h2 className="col-title">PX to REM Conversion Table</h2>
                            <p>
                                These are the mostly used px to rem sizes. This is considering that your base font (font-size) is 16px. You can also use the converter above.
                            </p>

                            <table className='table table-responsive table-striped table-bordered'>
                                <thead>
                                    <tr>
                                        <th>PX</th>
                                        <th>REM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4px</td>
                                        <td>0.25rem</td>
                                    </tr>
                                    <tr>
                                        <td>8px</td>
                                        <td>0.5rem</td>
                                    </tr>
                                    <tr>
                                        <td>12px</td>
                                        <td>0.75rem</td>
                                    </tr>
                                    <tr>
                                        <td>16px</td>
                                        <td>1rem</td>
                                    </tr>
                                    <tr>
                                        <td>20px</td>
                                        <td>1.25rem</td>
                                    </tr>
                                    <tr>
                                        <td>24px</td>
                                        <td>1.5rem</td>
                                    </tr>
                                    <tr>
                                        <td>32px</td>
                                        <td>2rem</td>
                                    </tr>
                                    <tr>
                                        <td>40px</td>
                                        <td>2.5rem</td>
                                    </tr>
                                    <tr>
                                        <td>48px</td>
                                        <td>3rem</td>
                                    </tr>
                                    <tr>
                                        <td>64px</td>
                                        <td>4rem</td>
                                    </tr>
                                    <tr>
                                        <td>96px</td>
                                        <td>6rem</td>
                                    </tr>
                                    <tr>
                                        <td>128px</td>
                                        <td>8rem</td>
                                    </tr>
                                    <tr>
                                        <td>160px</td>
                                        <td>10rem</td>
                                    </tr>
                                    <tr>
                                        <td>176px</td>
                                        <td>11rem</td>
                                    </tr>
                                    <tr>
                                        <td>192px</td>
                                        <td>12rem</td>
                                    </tr>
                                    <tr>
                                        <td>208px</td>
                                        <td>13rem</td>
                                    </tr>
                                    <tr>
                                        <td>224px</td>
                                        <td>14rem</td>
                                    </tr>
                                    <tr>
                                        <td>256px</td>
                                        <td>16rem</td>
                                    </tr>
                                    <tr>
                                        <td>320px</td>
                                        <td>20rem</td>
                                    </tr>
                                    <tr>
                                        <td>480px</td>
                                        <td>30rem</td>
                                    </tr>
                                    <tr>
                                        <td>576px</td>
                                        <td>36rem</td>
                                    </tr>
                                    <tr>
                                        <td>768px</td>
                                        <td>48rem</td>
                                    </tr>
                                    <tr>
                                        <td>800px</td>
                                        <td>50rem</td>
                                    </tr>
                                    <tr>
                                        <td>960px</td>
                                        <td>60rem</td>
                                    </tr>
                                    <tr>
                                        <td>992px</td>
                                        <td>62rem</td>
                                    </tr>
                                    <tr>
                                        <td>1024px</td>
                                        <td>64rem</td>
                                    </tr>
                                    <tr>
                                        <td>1120px</td>
                                        <td>70rem</td>
                                    </tr>
                                    <tr>
                                        <td>1200px</td>
                                        <td>75rem</td>
                                    </tr>
                                    <tr>
                                        <td>1280px</td>
                                        <td>80rem</td>
                                    </tr>
                                    <tr>
                                        <td>1440px</td>
                                        <td>90rem</td>
                                    </tr>
                                    <tr>
                                        <td>1600px</td>
                                        <td>100rem</td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr className='separator' />

                            <h2 className="col-title">How to Convert PX to REM?</h2>
                            <p>
                                The key to converting a px value to rem is the font-size you declare on 'html' element.
                            </p>

                            <h2 className="col-title">PX to REM Formula:</h2>
                            <p className='py-4 px-2 bg-light mb-0   '>
                                <code>
                                    rem = px / base font
                                </code>
                            </p>
                            <p>
                                <small>This means that if it's parent's font size is 16px. For it's child elements, 1rem = 16px.</small>
                            </p>

                            <h2 className="col-title">Difference Between PX and REM</h2>
                            <p>
                                To know the difference between px (pixel) and rem (root ems), you need first to understand what they are what how they behave.
                                <br />
                                First off, they are measurements used on screen media or screens on various devices. They are units commonly used to measure lengths in CSS (Cascading Style Sheets).</p>



                        </div>
                </div>
            </div>
        </div>
    )
}

export default PxToRem
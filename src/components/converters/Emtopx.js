import React from 'react'
import { useState } from 'react';

const Emtopx = () => {

    const [baseValue, setBaseValue] = useState("");
    const [toConvert, setToConvert] = useState('');
    const [result, setResult] = useState('');

    const changeBaseValue = (event) => {
        setBaseValue(event.target.value);
    }

    const changeConvertValue = (event) => {
        setToConvert(event.target.value);
    }

    const ChangeToPx = () => {
        let newResult = toConvert * baseValue;
        setResult(newResult);
    }

    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 m-auto">
                    <div className="contentArea">
                        <h2 className="col-title">EM to PX Converter</h2>
                        <p className='text-justify'>EM to PX Converter is a free online tool you can use to convert em to pixels (px). This way, you don't have to make the manual conversion yourself and you can focus more on what you do.</p>
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
                                <span className="input-group-text" id="toConvert_em">EM</span>
                                <input type="number" className="form-control" placeholder="Enter Value to Convert" value={toConvert} onChange={changeConvertValue} aria-label="toConvert_em" aria-describedby="toConvert_em" />
                            </div>

                            <button type="button" className='btn btn-sm btn-success float-end mb-5' onClick={ChangeToPx}>Convert!</button>
                        </div>

                        <div className="resultDIV">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="toConvert_px">PX</span>
                                <input type="number" className="form-control" placeholder="Converted Value" value={result} disabled aria-label="toConvert_px" aria-describedby="toConvert_px" />
                            </div>
                        </div>
                    </div>

                    <hr className='separator' />

                    <div className="contentArea">
                        <h2 className="col-title">How to Use EM to PX Converter?</h2>
                        <ul>
                            <li>Step 1: Enter base value. It is the font-size value of the parent element.</li>
                            <li>Step 2: Input the em value you want to convert.</li>
                            <li>Step 3: Press enter key or click the convert button to get it's px equivalent.</li>
                        </ul>

                        <h2 className="col-title">EM to PX Conversion Table</h2>
                        <p>
                            So there are common measurements that web developers/designers are using. Like 1em for font-size or 25em for container width. Below are just few of the mostly used em sizes and it's px equivalent.
                        </p>

                        <table className='table table-responsive table-striped table-bordered'>
                            <thead>
                                <tr>
                                    <th>EM</th>
                                    <th>PX</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0.25em</td>
                                    <td>4px</td>
                                </tr>
                                <tr>
                                    <td>0.5em</td>
                                    <td>8px</td>
                                </tr>
                                <tr>
                                    <td>0.75em</td>
                                    <td>12px</td>
                                </tr>
                                <tr>
                                    <td>1em</td>
                                    <td>16px</td>
                                </tr>
                                <tr>
                                    <td>2em</td>
                                    <td>32px</td>
                                </tr>
                                <tr>
                                    <td>4em</td>
                                    <td>64px</td>
                                </tr>
                                <tr>
                                    <td>6.25em</td>
                                    <td>100px</td>
                                </tr>
                                <tr>
                                    <td>12.5em</td>
                                    <td>200px</td>
                                </tr>
                                <tr>
                                    <td>15.625em</td>
                                    <td>250px</td>
                                </tr>
                                <tr>
                                    <td>18.75em</td>
                                    <td>300px</td>
                                </tr>
                                <tr>
                                    <td>25em</td>
                                    <td>400px</td>
                                </tr>
                                <tr>
                                    <td>37.5em</td>
                                    <td>600px</td>
                                </tr>
                                <tr>
                                    <td>50em</td>
                                    <td>800px</td>
                                </tr>
                                <tr>
                                    <td>75em</td>
                                    <td>1200px</td>
                                </tr>
                            </tbody>
                        </table>

                        <hr className='separator' />

                        <h2 className="col-title">How to Convert EM to PX?</h2>
                        <p>
                            Just get the parent's font size of your target element, then multiply your px value. That's how you get it's em equivalent.
                        </p>

                        <h2 className="col-title">EM to PX Formula:</h2>
                        <p className='py-4 px-2 bg-light mb-0   '>
                            <code>
                                px = em * font-size (base value in px)
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

export default Emtopx
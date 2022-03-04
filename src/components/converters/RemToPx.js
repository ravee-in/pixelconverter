import React from 'react'
import { useState } from 'react';

const RemToPx = () => {

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
                        <h2 className="col-title">REM to PX Converter</h2>
                        <p className='text-justify'>REM to PX Converter is a free online tool you can use to easily convert rem (root em) to px (pixel). Keep in mind that 1rem is equal to the root font-size, in other words, the font-size on 'html' element.</p>
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
                                <span className="input-group-text" id="toConvert_rem">REM</span>
                                <input type="number" className="form-control" placeholder="Enter Value to Convert" value={toConvert} onChange={changeConvertValue} aria-label="toConvert_rem" aria-describedby="toConvert_rem" />
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
                        <h2 className="col-title">How to Use REM to PX Converter?</h2>
                        <ul>
                            <li>Step 1: Enter your base (root) font-size.</li>
                            <li>Step 2: Input the rem (root em) value you want to convert to pixels (px).</li>
                            <li>Step 3: Press enter key or click the convert button to get it's px equivalent.</li>
                        </ul>

                        <h2 className="col-title">REM to PX Conversion Table</h2>
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
                                    <td>0.0625rem</td>
                                    <td>1px</td>
                                </tr>
                                <tr>
                                    <td>0.125rem</td>
                                    <td>2px</td>
                                </tr>
                                <tr>
                                    <td>0.25rem</td>
                                    <td>4px</td>
                                </tr>
                                <tr>
                                    <td>0.5rem</td>
                                    <td>8px</td>
                                </tr>
                                <tr>
                                    <td>1rem</td>
                                    <td>16px</td>
                                </tr>
                                <tr>
                                    <td>2rem</td>
                                    <td>32px</td>
                                </tr>
                                <tr>
                                    <td>4rem</td>
                                    <td>64px</td>
                                </tr>
                                <tr>
                                    <td>12.5rem</td>
                                    <td>200px</td>
                                </tr>
                                <tr>
                                    <td>15.625rem</td>
                                    <td>250px</td>
                                </tr>
                                <tr>
                                    <td>18.75em</td>
                                    <td>300px</td>
                                </tr>
                                <tr>
                                    <td>20rem</td>
                                    <td>320px</td>
                                </tr>
                                <tr>
                                    <td>25rem</td>
                                    <td>400px</td>
                                </tr>
                                <tr>
                                    <td>30rem</td>
                                    <td>480px</td>
                                </tr>
                                <tr>
                                    <td>35.5rem</td>
                                    <td>568px</td>
                                </tr>
                                <tr>
                                    <td>37.5rem</td>
                                    <td>600px</td>
                                </tr>
                                <tr>
                                    <td>48rem</td>
                                    <td>768px</td>
                                </tr>
                                <tr>
                                    <td>50rem</td>
                                    <td>800px</td>
                                </tr>
                                <tr>
                                    <td>64rem</td>
                                    <td>1024px</td>
                                </tr>
                                <tr>
                                    <td>75rem</td>
                                    <td>1200px</td>
                                </tr>
                            </tbody>
                        </table>

                        <hr className='separator' />

                        <h2 className="col-title">How to Convert REM to PX?</h2>
                        <p>
                            So given that the value of rem is relative on the root font-size. This means that if you assign 16px font-size on 'html' on your css, like this one:
                        </p>

                        <h2 className="col-title">REM to PX Formula:</h2>
                        <p className='py-4 px-2 bg-light mb-0   '>
                            <code>
                                px = rem * root font-size (base value in px)
                            </code>
                        </p>
                        <p>
                            <small>This means that 1rem = 16px.</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemToPx
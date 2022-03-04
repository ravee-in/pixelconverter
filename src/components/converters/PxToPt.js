import React from 'react';
import { useState } from 'react'

const PxToPt = () => {

  const [toConvert, setToConvert] = useState('');
  const [result, setResult] = useState('');

  const changeConvertValue = (event) => {
    setToConvert(event.target.value);
  }

  const ChangeToPt = () => {
    let newResult = toConvert * (72 / 96);
    setResult(newResult);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-8 m-auto">
          <div className="contentArea">
            <h2 className="col-title">PX to PT Converter</h2>
            <p className='text-justify'>A pt, short for points, is an absolute length unit commonly used in css but also in print media. This px to pt converter is a useful tool that you can use to conveniently convert px to pt.</p>
          </div>
          <div className="converterArea p-2 p-md-5 bg-light">
            <div className="toConvert">
              <div className="input-group mb-3">
                <span className="input-group-text" id="toConvert_px">PX</span>
                <input type="number" className="form-control" placeholder="Enter Value to Convert" value={toConvert} onChange={changeConvertValue} aria-label="toConvert_px" aria-describedby="toConvert_px" />
              </div>

              <button type="button" className='btn btn-sm btn-success float-end mb-5' onClick={ChangeToPt}>Convert!</button>
            </div>

            <div className="resultDIV">
              <div className="input-group mb-3">
                <span className="input-group-text" id="toConvert_pt">PT</span>
                <input type="number" className="form-control" placeholder="Converted Value" value={result} disabled aria-label="toConvert_pt" aria-describedby="toConvert_pt" />
              </div>
            </div>
          </div>

          <hr className='separator' />

          <div className="contentArea">
            <h2 className="col-title">PX to PT Conversion Table</h2>

            <table className='table table-responsive table-striped table-bordered'>
              <thead>
                <tr>
                  <th>PX</th>
                  <th>PT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1px</td>
                  <td>0.75pt</td>
                </tr>
                <tr>
                  <td>2px</td>
                  <td>1.5pt</td>
                </tr>
                <tr>
                  <td>4px</td>
                  <td>3pt</td>
                </tr>
                <tr>
                  <td>8px</td>
                  <td>6pt</td>
                </tr>
                <tr>
                  <td>10px</td>
                  <td>7.5pt</td>
                </tr>
                <tr>
                  <td>12px</td>
                  <td>9pt</td>
                </tr>
                <tr>
                  <td>14px</td>
                  <td>10.5pt</td>
                </tr>
                <tr>
                  <td>16px</td>
                  <td>12pt</td>
                </tr>
                <tr>
                  <td>18px</td>
                  <td>13.5pt</td>
                </tr>
                <tr>
                  <td>20px</td>
                  <td>15pt</td>
                </tr>
                <tr>
                  <td>24px</td>
                  <td>18pt</td>
                </tr>
                <tr>
                  <td>32px</td>
                  <td>24pt</td>
                </tr>
                <tr>
                  <td>64px</td>
                  <td>48pt</td>
                </tr>
                <tr>
                  <td>100px</td>
                  <td>75pt</td>
                </tr>
                <tr>
                  <td>200px</td>
                  <td>150pt</td>
                </tr>
                <tr>
                  <td>250px</td>
                  <td>187.5pt</td>
                </tr>
                <tr>
                  <td>300px</td>
                  <td>225pt</td>
                </tr>
                <tr>
                  <td>400px</td>
                  <td>300pt</td>
                </tr>
                <tr>
                  <td>600px</td>
                  <td>450pt</td>
                </tr>
                <tr>
                  <td>800px</td>
                  <td>600pt</td>
                </tr>
                <tr>
                  <td>900px</td>
                  <td>675pt</td>
                </tr>
                <tr>
                  <td>1024px</td>
                  <td>768pt</td>
                </tr>
                <tr>
                  <td>1200px</td>
                  <td>900pt</td>
                </tr>
                <tr>
                  <td>1600px</td>
                  <td>1200pt</td>
                </tr>
              </tbody>
            </table>

            <hr className='separator' />

            <h2 className="col-title">How to Convert PX to PT?</h2>
            <p>
              The World Wide Web Consortion (W3C) provides no direct mainFormula on how to convert px value to equivalent pt value. However, there are given unit equivalents that can be used to obtain this converstion.
            </p>

            <p>These are helpful one's:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                1inch = 96px <br />
                1inch = 72pt
              </code>
            </div>
            <p>So given these equivalent values, we can say that:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                96px = 72pt
              </code>
            </div>
            <p>You can understand it, this way:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                1px = 72pt / 96
              </code>
            </div>
            <p>Given that 1px = 72pt / 96, the mainFormula for converting px to pt is this:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                pt = px * ( 72pt / 96 )
              </code>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PxToPt
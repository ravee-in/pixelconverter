import React from 'react';
import { useState } from 'react'

const PtToPx = () => {

  const [toConvert, setToConvert] = useState('');
  const [result, setResult] = useState('');

  const changeConvertValue = (event) => {
    setToConvert(event.target.value);
  }

  const ChangeToPt = () => {
    let newResult = toConvert * (96 / 72);
    setResult(newResult);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 col-md-8 m-auto">
          <div className="contentArea">
            <h2 className="col-title">PT to Px Converter</h2>
            <p className='text-justify'>A pt, short for points, is an absolute length unit commonly used in css but also in print media. This PT to Px converter is a useful tool that you can use to conveniently convert PT to Px.</p>
          </div>
          <div className="converterArea p-2 p-md-5 bg-light">
            <div className="toConvert">
              <div className="input-group mb-3">
                <span className="input-group-text" id="toConvert_pt">PT</span>
                <input type="number" className="form-control" placeholder="Enter Value to Convert" value={toConvert} onChange={changeConvertValue} aria-label="toConvert_pt" aria-describedby="toConvert_pt" />
              </div>

              <button type="button" className='btn btn-sm btn-success float-end mb-5' onClick={ChangeToPt}>Convert!</button>
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
            <h2 className="col-title">PT to Px Conversion Table</h2>

            <table className='table table-responsive table-striped table-bordered'>
              <thead>
                <tr>
                  <th>PX</th>
                  <th>PT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.75pt</td>
                  <td>1px</td>
                </tr>
                <tr>
                  <td>1.5pt</td>
                  <td>2px</td>
                </tr>
                <tr>
                  <td>4pt</td>
                  <td>5.33px</td>
                </tr>
                <tr>
                  <td>6pt</td>
                  <td>8px</td>
                </tr>
                <tr>
                  <td>7.5pt</td>
                  <td>10px</td>
                </tr>
                <tr>
                  <td>9pt</td>
                  <td>12px</td>
                </tr>
                <tr>
                  <td>10.5pt</td>
                  <td>14px</td>
                </tr>
                <tr>
                  <td>12pt</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>13.5pt</td>
                  <td>18px</td>
                </tr>
                <tr>
                  <td>15pt</td>
                  <td>20px</td>
                </tr>
                <tr>
                  <td>18pt</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>24pt</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>48pt</td>
                  <td>64px</td>
                </tr>
                <tr>
                  <td>75pt</td>
                  <td>100px</td>
                </tr>
                <tr>
                  <td>150pt</td>
                  <td>200px</td>
                </tr>
                <tr>
                  <td>187.5pt</td>
                  <td>250px</td>
                </tr>
                <tr>
                  <td>225pt</td>
                  <td>300px</td>
                </tr>
                <tr>
                  <td>300pt</td>
                  <td>400px</td>
                </tr>
                <tr>
                  <td>450pt</td>
                  <td>600px</td>
                </tr>
                <tr>
                  <td>600pt</td>
                  <td>800px</td>
                </tr>
                <tr>
                  <td>675pt</td>
                  <td>900px</td>
                </tr>
                <tr>
                  <td>768pt</td>
                  <td>1024px</td>
                </tr>
                <tr>
                  <td>900pt</td>
                  <td>1200px</td>
                </tr>
                <tr>
                  <td>1200pt</td>
                  <td>1600px</td>
                </tr>
              </tbody>
            </table>

            <hr className='separator' />

            <h2 className="col-title">How to Convert PT to Px?</h2>
            <p>
              The World Wide Web Consortion gave no direct convertion of 1pt to px, and vice versa. But there are 2 unit conversion we can use to derive the conversion formula for pt to px.
            </p>

            <p>These are helpful one's:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                1inch = 72pt <br />
                1inch = 96px
              </code>
            </div>
            <p>So given these equivalent values, we can say that:</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                96px = 72pt
              </code>
            </div>
            <p>In other words, if 1 inch is equal to 72 points and at the same time 1 inch is also equal to 96 points, this implies that 96px is equal to 72pt.</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                96px = 72pt
              </code>
            </div>
            <p>Base on the formula, we can say that the equivalent of 1px is (72pt / 96) .</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                1px = 72pt / 96
              </code>
            </div>
            <p>So, to convert pt to px, we just have to multiply pt value to (72pt / 96).</p>
            <div className="mainFormula">
              <code className='d-block py-4 px-2 bg-light mb-3'>
                px = pt * ( 72pt / 96 )
              </code>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PtToPx
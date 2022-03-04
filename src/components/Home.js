import React from 'react';
import { Link } from "react-router-dom";

const Home = (props) => {

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 m-auto">
                    <div className="contentArea">
                        <h2 className="col-title">Pixels Converter</h2>
                        <p className='text-justify'>Pixels Converter (by <a href="http://ravee.in/" target="_blank" rel="noreferrer">ravee.in</a>) is a FREE online tool, you can use to convert pixels into css units such as em, rem and pt.</p>
                    </div>

                    <div className="converters">
                        <div className="row mb-4">
                            <h2 className="col-title col-12">EM</h2>
                            <hr className='separator col-12' />
                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/pxtoem">PX TO EM</Link>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/emtopx">EM TO PX</Link>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-4">
                            <h2 className="col-title col-12">REM</h2>
                            <hr className='separator col-12' />
                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/pxtorem">PX TO REM</Link>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/remtopx">REM TO PX</Link>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-4">
                            <h2 className="col-title col-12">PT</h2>
                            <hr className='separator col-12' />
                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/pxtopt">PX TO PT</Link>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="convertWrap">
                                    <Link className="converter_Link bg-dark text-light" to="/pttopx">PT TO PX</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
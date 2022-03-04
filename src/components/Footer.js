import React from 'react';

export default function Footer(props) {
  return (
    <footer id="footer" className="py-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <a href="https://www.buymeacoffee.com/ravee7284" className="bCoffee" target="_blank" rel="noreferrer"><i className="fa fa-coffee" aria-hidden="true"></i> Buy me a coffee!</a>
          </div>
          <div className="col-4">
            <div className="social-icons text-center">
              <a href="https://www.linkedin.com/in/ravee7284" className="text-light"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.behance.net/ravee" className="text-light"><i className="fa fa-behance"></i></a>

            </div></div>
          <div className="col-4 text-center">

            <a href="https://github.com/ravee-in/InstaCaption" className="bCoffee" target="_blank" rel="noreferrer"><i className="fa fa-star" aria-hidden="true"></i> Star on Github</a>

          </div>

          <div className="col-12 mt-3 mt-md-0 copyright text-center">
            <p className='text-light m-0 text-center'><small>This project is Open-Source!</small></p>
            <p className="text-light">© Copyright {(new Date().getFullYear())}. All Right Reserved. Made with <i className="fa fa-heart "></i> By <a href="https://ravee.in" target="_blank" rel="noreferrer">Ravee.in</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

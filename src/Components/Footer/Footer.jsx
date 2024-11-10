import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-400' >
            <div className='text-center mb-10' >
                <h3 className='text-3xl font-bold m-2'>Gadget Heaven</h3>
                <p>Leading the way in cutting-edge techonology and innovation.</p>
            </div>
            <div>
                <footer className="footer flex justify-around  ">
                    {/* <div> */}
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    {/* </div> */}
                </footer>
            </div>
        </div>
    );
};

export default Footer;
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/imgs/logoCombine.png'
import Btn from "../btn/Btn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Navbar.css'
import ProductsNav from "./ProductsNav";
import SolutionsNav from "./SolutionsNav";
import ResourcesNav from "./ResourcesNav";






export default function NavBar({ active, hideModal }) {
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('')
    let [showNote, setShowNote] = useState(true);

    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 800);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setShowNote(currentScroll <= 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        (menu === false) ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    useEffect(() => {
        setActiveLink('')
    }, [hideModal])

    const onCursorEnter = (val) => {
        if (val) setActiveLink(val);
        setMenu(false);
    }




    return (
        <div className="navBar-Parent">
            <div className="navBar-note"
                style={{
                    display: showNote ? 'block' : 'none',
                    opacity: (activeLink === '') ? 1 : 0.3,
                }}
            >🚀 The Winter '24 Release is here — with smarter bill pay, spend limits, and more </div>
            <div className="navBar">
                <div className="icon">
                    {(menu === false) ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                </div>
                <img onClick={() => navigate('/')} src={logo} className="logo-nb" />
                <div className="nb-links-box">
                    <div className={activeMenu}>
                        <div className="navLinks-box">
                       {isMobile && <div
                            className="link-nb2"
                            onClick={() =>setMenu(false)}
                        >Close
                        </div>}
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Products')}
                            onClick={() => onCursorEnter('Products')}
                        >Products
                        {
                            isMobile ? <KeyboardArrowRightIcon  sx={{ color: '#F56B3F' }}/> :
                            activeLink === 'Products' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />
                        }
                        
                            
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Pricing')}
                            onClick={() => {
                                onCursorEnter('Pricing');
                                navigate('/Pricing');
                            }}
                        >Pricing
                        </div>
                        </div>
                        {isMobile && <div className="navLinks-box">
                             <Btn
                                onClick={() => {
                                navigate('/SignIn')
                                onCursorEnter();
                            }}
                                className='navBtn1' label="Sign In" />
                            <Btn
                                onClick={() => {
                                navigate('/SignUp')
                                onCursorEnter();
                            }}
                                className='navBtn' label="Get Started" />
                        </div>}

                    </div>
                    <div className='navLinks'>
                        <div
                            className="link-nb1"
                            onClick={() => {
                                navigate('/SignIn')
                                onCursorEnter();
                            }}
                        >Sign In</div>
                        <Btn
                            className='navBtn' label="Get Started"
                            onClick={() => {
                                navigate('/SignUp')
                                onCursorEnter();
                            }}
                        />
                    </div>
                </div>
                {activeLink === 'Products' && <ProductsNav showNote={showNote}
                    setActiveLink={setActiveLink}
                />}
                {/* {activeLink === 'Solutions' && <SolutionsNav showNote={showNote} setActiveLink={setActiveLink} />}
                {activeLink === 'Resources' && <ResourcesNav showNote={showNote} setActiveLink={setActiveLink} />} */}
            </div>
        </div >
    )
} 
import fb from "../img/fb.png";
import ig from "../img/ig.png"
import yt from "../img/yt.png"



const Footer =()=>{
    return(
        <div className="bg-gray-900">
            <div className="ft-social-media m-auto text-center justify-center">
                <h6 className="text-white font-semibold mb-2">Follow Us</h6>
                <ul className="flex align-middle justify-center">
                    <li> 
                        <a href="#">
                            <img src={fb}/>
                        </a>
                    </li>
                    <li> 
                        <a href="#">
                            <img src={ig}/>
                        </a>
                    </li>
                    <li> 
                        <a href="#">
                            <img src={yt}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center bg-black mt-8 pt-4 pb-4">
                <p className="text-white text-center">Copyright 2024 Food Villa</p>
            </div>
        </div>
    )
}

export default Footer;
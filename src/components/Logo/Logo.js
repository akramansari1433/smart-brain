import Tilt from 'react-tilt';
import './Logo.css'
import Brain from './brain.png'

const Logo=()=>{
    return(
       <div className='ma3 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> <img alt='logo' src={Brain}/> </div>
            </Tilt>
       </div>
    );
}

export default Logo;
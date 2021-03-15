import './FaceRecognition.css'

const FaceRecognition=({imageURL,box})=>{
    return(
       <div className='center'>
           <div className='mt2 absolute'>
            <img id='inputimage' alt='' src={imageURL} width='500px' height='auto'></img>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
           </div>
       </div>
    );
}


export default FaceRecognition;
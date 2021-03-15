import './ImageLinkForm.css'
const ImageLinkForm=({onInputChange,onButtonSubmit })=>{
    return(
       <div>
           <p className='f3'>
               {'This Magic Brain will detect face in yout picture. Give it a try'}
           </p>
           <div className='center'>
               <div className='form pa4 br3 shadow-5'>
                    <input className='w-70 f4 pa2' type='text' onChange={onInputChange}></input>
                    <button className='w-30 f4 grow ph3 pv2 link white bg-blue' onClick={onButtonSubmit}>Detect</button>
               </div>
           </div>
       </div>
    );
}

export default ImageLinkForm;
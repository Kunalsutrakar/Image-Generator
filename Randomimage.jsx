
import React, {useState} from 'react'
import Axios from "axios";
import "./RandomImage.css";
import Logo from "../assets/3d-rendered-photos-white-background-creative-logo-design_1208590-45346.avif";
const Randomimage=()=> {
    const [imageData,setImgData]= useState([]);
    const [image,setImage]=useState("");
    const [loading,setLoading]= useState(false);
   
    
    const ImageHandler=async()=>{
      
        setLoading(true);
        try {
            const respone=await Axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=AfST4TjN26ouA1nkaArnlTY8ZvX6EuDODoJrp3zFFao`);
            console.log(respone);
            console.log(respone.data.results);
            setImgData(respone.data.results); 
        } catch (error) {
            console.log(error,"Image not Found");
        }
        setLoading(false);
        
    };
  
    return (
      <div className='a1'>
        <h1>Image Generator <img src={Logo} className='c1'/>
        </h1>
        
        <label typeof='text' >Search Image</label>
        <input type='text' placeholder='Search Image' value={image} onChange={(e)=>setImage(e.target.value)}/>
        <button onClick={ImageHandler}>Search Image</button>
      
       {loading?(<p>Loading fetch data..</p>):
        <div className='b1'>
        {imageData.map((images)=>(
          <div key={images.id}>
            <img src={images.urls.small} alt={images.description} />
            
            </div>
           
        )
        )}
      </div>}
        

        </div>
        
      
    )
  }

export default Randomimage;

// AfST4TjN26ouA1nkaArnlTY8ZvX6EuDODoJrp3zFFao


//  https://api.unsplash.com/search/photos?page=1&query=office&client_id=AfST4TjN26ouA1nkaArnlTY8ZvX6EuDODoJrp3zFFao
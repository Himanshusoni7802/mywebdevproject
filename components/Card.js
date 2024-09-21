
import React ,{useState} from 'react'


function Card({id,name,price,title,img,removeTour}){
     const [readmore,setReadmore] = useState(false);

     const description = readmore ? title:`${title.substring(0,150)}`;

   function readmoreHandler(){
      setReadmore(!readmore);

   }


   

    return(
   <div className="card">

         <img src={img} alt=" " className="image"></img>

<div className='tour-info'>

           <div className="tours-detail">
              <h4 className="tour-price"> {price}</h4>
              <h4 className="tour-name">{name}</h4>
         </div>

         <div className="description">
               {description}
               <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Show less`: ` Read more`
                }
               </span>
         </div>



    </div>

         <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>
   </div>
    )
}

export default Card;

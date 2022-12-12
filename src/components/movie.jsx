import React,{Component} from "react";


const Movie = (props) => {
    const {id,name,genre,rating,myLike,myDelete,like } = props;
    let icon2;
    icon2=''

    if(like){
        icon2="fa-solid fa-heart"
    }else{
        icon2="fa-regular fa-heart"
    }
    return ( 
        <React.Fragment>
        <tr>
           <td >{id}</td>
           <td>{name}</td>
           <td>{genre}</td>
           <td>{rating}</td>
           <td><i onClick={()=>myLike(id)} 
           className={icon2 }></i></td>
           <td><button className="btn btn-danger" 
           onClick={myDelete}>DELETE</button></td>
        </tr>
        
</React.Fragment>

     );
}
 
export default Movie;
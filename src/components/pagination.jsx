import React,{Component} from "react";



const Pagination = (props) => {
    const{inputValue,movies,getIndex}=props;
    let apples=movies.length;
    let baskets=Math.ceil((apples)/inputValue);
    let arr=[];
    for(let i=1;i<=baskets;i++){
        arr[i]=<li key={arr} className="page-item "><button onClick={(e)=>getIndex(e)}  className="btn btn-outline-light   " >{i}</button></li>;
    }
    
    
    return ( 
        <nav aria-label="Page navigation ">
            <ul className="pagination position-absolute  bottom-0 start-50">
                {arr}
            </ul>
        </nav>
     );
}
 
export default Pagination;
import React,{Component} from "react";
import { Outlet, Link } from "react-router-dom";



class Header extends Component {
    state = {  } 
    render() { 
        const{decrement,increment,inputValue}=this.props;
        return (
            <React.Fragment>
                <div className="position-relative">
                    <h1 ><i  className="bi bi-camera-reels"><a href="http://localhost:3000/" style={{color:'white'}}>MOVIELY</a></i></h1>

                    <button className="btn btn-dark position-absolute top-0 end-50" >
                        <Link to="/Add">click here to add movie</Link>
                    </button>

                    <div className="position-absolute top-0 end-0">
                        <button 
                            className="btn btn-outline-light" 
                            onClick={()=>decrement()}>
                            &mdash;
                        </button>

                        <input 
                            className="quantity-input__screen " 
                            type="text" 
                            value={inputValue}
                            style={{width: "30px",height:'37px'}}
                            onChange={()=>inputValue()}
                        />

                        <button 
                            className="btn btn-outline-light" 
                            onClick={()=>increment()}>
                            &#xff0b;
                        </button> 
                    </div>
                    
                </div>
            </React.Fragment>


        );
    }
}
 
export default Header;
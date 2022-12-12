import React,{Component} from "react";
import Genre from "./genre";
import { Link } from 'react-router-dom';

class Genres extends Component {
    state = { 
     }  
    render() { 
        const{Filter,movies}=this.props;
        return (
            <React.Fragment>
                <Link to='/'>
                 <Genre
                 Filter={(e)=>Filter(e)}
                 movies={movies}
                />
                </Link>
            </React.Fragment>
        ); 
    }
}
export default Genres;
 

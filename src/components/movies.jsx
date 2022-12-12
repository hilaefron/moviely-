import React,{Component} from "react";
import Movie from "./movie";
import Pagination from "./pagination";

class Movies extends Component {
    state = {  
        pageIndex:1
    } 
    render() {  
        const {pickedGenre, movies,myDelete,myLike,inputValue} = this.props;
        let moviesGenre;
        
        if(pickedGenre=='all'){
            moviesGenre=movies;
        }else{
            moviesGenre= movies.filter(movie=>movie.genre==pickedGenre);
        }

        let pageIndex=this.state.pageIndex;
        let btnsi=pageIndex-1  
        let firstMovie=(inputValue*btnsi+1)
        let lastMovie=inputValue*pageIndex
        if(lastMovie>moviesGenre.length){
            lastMovie=moviesGenre.length
        }else{
            lastMovie=inputValue*pageIndex
        }
        let arr=moviesGenre.slice((firstMovie-1),(lastMovie))

        return (
            <React.Fragment>
                    <table className=" table ">
                        <thead>
                            <tr>
                                <th >id</th>
                                <th>name</th>
                                <th>genre</th>
                                <th>rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map(val=>(
                                <Movie
                                key={val.id}
                                id={val.id}
                                name={val.name}
                                genre={val.genre}
                                rating={val.rating}
                                like={val.like}                               
                                myLike={(id)=>myLike(id)}
                                myDelete={()=>myDelete(val.id)}
                                />
                            ))}
                        </tbody>
                    </table> 
                    <div  >
                    <Pagination
                    inputValue={inputValue}
                    movies={moviesGenre}
                    getIndex={(e)=>this.getPageI(e)}
                    /> 
                    </div>                           
            </React.Fragment>
        );
    }
    getPageI=(e)=>{
        let pageIndex=e.target.innerHTML
        this.setState({pageIndex: pageIndex})
    }
}
 
export default Movies;
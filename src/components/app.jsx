import React,{Component} from "react";
import Movies from "./movies";
import Genres from "./generes";
import Header from './header';
import AddMovie from "./form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import image from '../images/newbg.webp';
import { isDisabled } from "@testing-library/user-event/dist/utils";
//  import AddMovie from "./form";


class App extends Component {
    state = {  
        movies:[{id:1,name:'Titanic',genre:'drama',rating:5,like:false},
                {id:2,name:'Adam Project',genre:'adventures',rating:1,like:false},
                {id:3,name:'Forest Gump',genre:'drama',rating:3,like:false},
                {id:4,name:'Shrek',genre:'comedy',rating:5,like:false},
                {id:5,name:'The Lion King',genre:'drama',rating:5,like:false},
                {id:6,name:'Black Widow',genre:'action',rating:2,like:false},
                {id:7,name:'Fast & Furious',genre:'action',rating:2,like:false},
                {id:8,name:'The Maze Runner',genre:'adventures',rating:4,like:false},
                {id:9,name:'Princess Diaries',genre:'comedy',rating:5,like:false},
                {id:10,name:'Pirates of the Caribbean',genre:'adventures',rating:3,like:false},
                {id:11,name:'Little Women',genre:'drama',rating:1,like:false},
                {id:12,name:'Sky High',genre:'comedy',rating:4,like:false}
                ],
        originalMovies:[{id:1,name:'Titanic',genre:'drama',rating:5,like:false},
                        {id:2,name:'Adam Project',genre:'adventures',rating:1,like:false},
                        {id:3,name:'Forest Gump',genre:'drama',rating:3,like:false},
                        {id:4,name:'Shrek',genre:'comedy',rating:5,like:false},
                        {id:5,name:'The Lion King',genre:'drama',rating:5,like:false},
                        {id:6,name:'Black Widow',genre:'action',rating:2,like:false},
                        {id:7,name:'Fast & Furious',genre:'action',rating:2,like:false},
                        {id:8,name:'The Maze Runner',genre:'adventures',rating:4,like:false},
                        {id:9,name:'Princess Diaries',genre:'comedy',rating:5,like:false},
                        {id:10,name:'Pirates of the Caribbean',genre:'adventures',rating:3,like:false},
                        {id:11,name:'Little Women',genre:'drama',rating:1,like:false},
                        {id:12,name:'Sky High',genre:'comedy',rating:4,like:false}
                        ],
        genres:[{name:'comedy'},{name:'action'},{name:'drama'},{name:'adventures'}],
        pickedGenre:'all',
        inputValue:6,
        
        

         
    }

     
    render() { 
        return (
            <React.Fragment >
                <div style={{backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',height:'100vh',backgroundSize:'100%'}}>
                

                    <header className=" p-5  ">
                        <Header
                        decrement={()=>this.decrement()}
                        increment={()=>this.increment()}
                        inputValue={this.state.inputValue}
                        />

                    </header>
                    <div className="row" >
                
                        <div className="  col-3  ">
                            <Genres
                            Filter={(e)=>this.Filter(e)}
                            movies={this.state.movies}
                            />
                        </div>

                        <div className=" text-center col-7 mt-5">
                            <Routes>
                                
                                <Route path="/" element={<Movies
                                    movies={this.state.movies}
                                    pickedGenre={this.state.pickedGenre}
                                    myLike={(id)=>this.handleLike(id)}
                                    myDelete={(id)=>this.handleDelete(id)}
                                    inputValue={this.state.inputValue}
                                        />
                                }/>
                                <Route path="/Add" element={<AddMovie 
                                
                                addMovie={this.addMovie}
                                                               
                                />}/>
                            </Routes>
                        </div>


                    </div>
                </div>
                
            </React.Fragment>
        );
    }

    handleDelete=(id)=>{
        const movies= this.state.movies.filter(val=> val.id !==id)
        let inputValue=this.state.inputValue
        inputValue--
        this.setState({movies})
        this.setState({inputValue})
    } 
    handleLike=(id)=>{
        let i=this.state.movies.findIndex(movie=>movie.id==id)
        let movies=this.state.movies;
        movies[i].like=!movies[i].like
        this.setState({movies})
    }

    Filter=(genre)=>{       
        this.setState({pickedGenre:genre})
    }
    decrement=()=>{
        let inputValue=this.state.inputValue;
        inputValue--;
        this.setState({inputValue})
    }
    increment=()=>{
        let inputValue=this.state.inputValue;
        if(inputValue<6 && inputValue>0){
        inputValue++;
        this.setState({inputValue})
        }
    }
    addMovie=(vals)=>{
        let movies=this.state.movies;
        movies=[...movies,vals]
        this.setState({movies:movies});         
    }
    




}
 
export default App;

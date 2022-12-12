import React,{Component} from "react";
import {Link} from 'react-router-dom'

class Genre extends Component {
    state = {  

    } 
    render() { 
        const {Filter,movies} = this.props;
        let comedy=movies.filter(movies=>movies.genre=='comedy')
        let comedyAmount=comedy.length;
        let action=movies.filter(movies=>movies.genre=='action')
        let actionAmount=action.length;
        let drama=movies.filter(movies=>movies.genre=='drama')
        let dramaAmount=drama.length;
        let adventures=movies.filter(movies=>movies.genre=='adventures')
        let adventuresAmount=adventures.length;
        


        return (
            <React.Fragment>
                <ul>
                    <Link to="/">
                        <button
                            className="btn btn-dark position-relative m-3"
                            style={{width:'110px'}}
                            onClick={()=>Filter('all')}>all
                                <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                                    {movies.length}
                                </span>
                        </button>
                    </Link>
                </ul>

                <ul><button 
                    className="btn btn-dark position-relative m-3"  
                    style={{width:'110px'}}
                    onClick={()=>Filter('comedy')}>comedy 
                        <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                            {comedyAmount}
                        </span>
                    </button>
                </ul>

                <ul><button 
                    className="btn btn-dark position-relative m-3"
                    style={{width:'110px'}}
                    onClick={()=>Filter('action')}>action 
                        <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger">
                            {actionAmount}
                        </span>
                    </button>
                 </ul>

                <ul><button 
                    className="btn btn-dark position-relative m-3" 
                    style={{width:'110px'}}
                    onClick={()=>Filter('drama')}>drama 
                        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                            {dramaAmount}
                        </span>
                    </button>
                </ul>

                <ul><button 
                    className="btn btn-dark position-relative m-3" 
                    style={{width:'110px'}}
                    onClick={()=>Filter('adventures')}>adventures 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {adventuresAmount}
                        </span>
                    </button>
                </ul>

            </React.Fragment>
        );
    }
} 
 
export default Genre; 
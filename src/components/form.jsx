import React from "react";
import {Formik, useFormik} from 'formik';

const AddMovie=(props)=> {
    const{addMovie}=props;

    function onSubmit(values, actions){
        addMovie(values)
        actions.resetForm();
    }

    const formik=useFormik({
        initialValues:{
            id:'',
            name:'',
            genre:'',
            rating:''
        },
        onSubmit
    })

    return(
        <div className="form me-5 pe-5 ">
        <form onSubmit={formik.handleSubmit} className="m-5">
            <input 
            id="id" 
            name="id" 
            type="number" 
            placeholder='enter id'
            onChange={formik.handleChange}
            value={formik.values.id}
            className="m-1"

            
            />
            <br />
            <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder='enter name'
            onChange={formik.handleChange}
            value={formik.values.name}
            className="m-1"

            />
            <br />           
            <input 
            id="genre" 
            name="genre" 
            type="text" 
            placeholder='enter Genre'
            onChange={formik.handleChange}
            value={formik.values.genre}
            className="m-1"

            />
            <br />
            <input 
            id="rating" 
            name="rating" 
            type="number" 
            placeholder='rating'
            min={0}
            max={5}
            onChange={formik.handleChange}
            value={formik.values.rating}
            style={{width:'100px'}}
            className="m-1"
            />
            <br />
            <button 
            type="submit"
            className="btn btn-secondary m-1"
            >ADD</button>

        </form>
        </div>
    )
    
}
export default AddMovie;



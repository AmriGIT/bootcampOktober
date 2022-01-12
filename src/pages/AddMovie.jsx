import { useState } from 'react';

import Swal from 'sweetalert2';
import './AddMovie.css'

function AddMovie() {

    const [ movie, setMovie ] = useState({ 
        title: '',  
        year: 1900, 
        desc: '',
        casts: [],
        poster: '',
        quota: 0
    })

    function setChangeMovie(event) {
        if (event.target.id === "casts") {
            let cast = event.target.value.split(',');
            setMovie((oldValue => {
                return { ...oldValue, [event.target.id]: cast }
            }))
        } else {
            setMovie((oldValue => {
                return { ...oldValue, [event.target.id]: event.target.value }
            }))
        }
    }

    function save(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Do you want to save?',
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              
              fetch('http://movie-app-g2.herokuapp.com/movies', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movie)
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('There is something wrong');
                    }

                    return response.json();
                })
                .then(data => {
                    Swal.fire('Saved!', '', 'success')

                    setMovie({ 
                        title: '',  
                        year: '', 
                        desc: '',
                        casts: [],
                        poster: '',
                        quota: 0
                    })
                })
                .catch(err => {
                    Swal.fire(`${err}`, '', 'error')
                })
            }
          })
        
        
    }

    
    return (
        <div className='mx-auto col-md-3 justify-content-center'>
            <h1>Halaman Add Movie</h1>

            <form className="row g-3 mx-auto">
            <div className="col-md-6">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={movie.title} onChange={setChangeMovie}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="year" className="form-label">Year</label>
                <input type="text" className="form-control" id="year" value={movie.year} onChange={setChangeMovie} placeholder='1900'/>
            </div>
            <div className="col-12">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea className="form-control" id="desc" value={movie.desc} onChange={setChangeMovie}/>
            </div>
            <div className="col-12">
                <label htmlFor="poster" className="form-label">Poster</label>
                <input type="text" className="form-control" id="poster" value={movie.poster} onChange={setChangeMovie}/>
            </div>
            <div className="col-12">
                <label htmlFor="casts" className="form-label">Casts</label>
                <input type="text" className="form-control" id="casts" value={movie.casts} onChange={setChangeMovie}/>
            </div>
            <div className="col-md-2">
                <label htmlFor="quota" className="form-label">Quota</label>
                <input type="text" className="form-control" id="quota" value={movie.quota} onChange={setChangeMovie} />
            </div>
            
            <div className="col-12">
                <button className="far fa-save fa-lg button btn btn-primary" onClick={save}> SAVE</button>
            </div>

            </form>
            
        </div>
    )
}

export default AddMovie
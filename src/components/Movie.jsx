import Movies from "../pages/Movies";
import Swal from 'sweetalert2';
function Movie(props) {
    const movie = props.movie
    function hapusData(e) {
        e.preventDefault();

        Swal.fire({
            title: 'Do you want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                console.log(e.target.value);
                fetch(`http://movie-app-g2.herokuapp.com/movies/${e.target.value}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(movie)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed')
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log("beres")
                        // this.props.history.push("/")
                    })
            }
        })
    }

    return (
        <div key={movie._id + 1} className="card col-3 m-5">

            <img
                className='card-img-top mx-auto d-block mb-3'
                src={movie.poster}
                style={{ width: "250px", height: "250px" }} />
            <h4>{movie.title} - {movie.year} </h4>
            <p>({movie.quota} ticket(s) left)</p>
            <p>{movie.desc}</p>
            <ul>
                {movie.casts.map((cast, index) => (
                    <li key={index}>{cast}</li>
                ))}
            </ul>
            <button value={movie._id} className="fas fa-trash fa-lg button btn btn-primary" onClick={hapusData}> Delete</button>

        </div>
    )
}

export default Movie
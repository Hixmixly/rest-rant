const React = require('react')
const Def = require('../default')

function show (data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert alert-danger">
                {data.message}
            </h4>
        )
    }

    return (
        <Def>
            <main className="container mt-4">
                <h1 className="mb-4">Add a New Place</h1>
                {message}
                
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <div>
                            <h3>Rating</h3>
                            <p>Not Rated</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <div>
                            <h3>Description</h3>
                            <p>{data.place.description ? data.place.description : 'No description provided'}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h3>
                            {data.place.showEstablished ? data.place.showEstablished() : 'Unknown Establishment Date'}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-3">
                        <h3>Comments</h3>
                        <p>No comments yet</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <a href={`/places/${data.place._id}/edit`} className="btn btn-warning mb-3">
                            Edit
                        </a>
                    </div>
                    <div className="col-12 col-md-6">
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger mb-3">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

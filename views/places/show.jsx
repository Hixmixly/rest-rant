const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h3>Located in {data.place.city}, {data.place.state}</h3>            
            <div>
                <h3>Rating</h3>
                <p>Not Rated</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>{data.place.description}</p>
            </div>
            <h3>
                {data.place.showEstablished ? data.place.showEstablished() : 'Unknown Establishment Date'}
            </h3>
            <h4>
                Serving {data.place.cuisines}
            </h4>
            <div>
                <h3>Comments</h3>
                <p>No comments yet</p>
            </div>
            <div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                     Edit
                </a> 
            </div>
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form> 
          </main>
        </Def>
    )
}

module.exports = show


const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <body>
                
                <div>
                    <h3>Rating</h3>
                    <p>Not Rated</p>
                </div>
                
                <div>
                    <h3>Description</h3>
                    <p></p>
                </div>
                
                <div>
                    <h3>Comments</h3>
                    <p></p>
                </div>
               
                <div>
                    <a href= {`/places/${data.id}/edit`} className="btn btn-warning"> 
                         Edit
                    </a> 
                </div>
               
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form> 


            </body>
          </main>
        </Def>
    )
}

module.exports = show

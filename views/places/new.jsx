const React = require('react');
const Def = require('../default');

function new_form(data) {
    let message = '';
    if (data?.message) {
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        );
    }

    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className='form-control' 
                            id="name" 
                            name="name" 
                            required
                            defaultValue={data.place ? data.place.name : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                            className='form-control' 
                            id="pic" 
                            name="pic" 
                            defaultValue={data.place ? data.place.pic : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input 
                            className='form-control' 
                            id="city" 
                            name="city" 
                            defaultValue={data.place ? data.place.city : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input 
                            className='form-control'  
                            id="state" 
                            name="state" 
                            defaultValue={data.place ? data.place.state : ''}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input 
                            className='form-control' 
                            id="cuisines" 
                            name="cuisines" 
                            required 
                            defaultValue={data.place ? data.place.cuisines : ''}
                        />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="founded" 
                            name="founded" 
                            defaultValue={new Date().getFullYear()} 
                        />
                    </div>
                    <input 
                        className='btn btn-primary' 
                        type="submit" 
                        value="Add Place" 
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;

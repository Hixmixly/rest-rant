const React = require ('react')

const Def = require ('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>

                <div>
                <img src='/css/images/sleepy_cat' alt='sleepy_cat' />
                </div>

                <div>
                    Photo by <a href='https://unsplash.com/@kstonematheson'>Kate Stone Matheson</a>
                    on <a href= 'https://unsplash.com/photos/white-cat-sleeps-under-white-comforter-uy5t-CJuIK4' ></a>
                </div>

            </main>
        </Def>
    )
}

module.exports = error404
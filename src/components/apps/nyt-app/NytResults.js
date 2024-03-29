import React from 'react'



const NytResults = (props) =>{
    const { results , changePage} = props
    return(
        <div>
            <div>
                <button onClick={(event)=> changePage(event, 'down')}>Previous 10</button>
                <button onClick={(event)=> changePage(event, 'up')}>Next 10</button>
            </div>
            {results.map(result => {
                return(
                    <div key={result._id}>
                        <h3>{result.headline.main}</h3>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`}/> : ''}
                        <p>
                            {result.snippet}
                            <br/>
                            {result.keywords.length > 0 ? ' Keywords: ' : ''}
                        </p>
                        <ul>
                            {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                    </div>
                )
            })}
        </div>
    )
}

export default NytResults
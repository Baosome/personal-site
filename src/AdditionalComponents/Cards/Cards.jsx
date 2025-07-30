import './Cards.css'

function Cards({iconSrc, text}) {
    return (
        <>
            <div className="Card">
                <div>
                    <img src={iconSrc} alt=""/>
                    <h3 className="card-title">{text}</h3>
                </div>
            </div>
        </>
    )
}

export default Cards
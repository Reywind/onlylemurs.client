function Card(props){

    var firsturl = '../img';
    var urlimg = firsturl.concat(props.url_foto);
    console.log(urlimg);
    var imagename = require(urlimg);

    return(
        <div className="card m-4 p-1 shadow card-text-bottom" style={{width: "18rem",height:"24rem"}}>
            <img src={imagename} className="card-img-top img-fluid"/>
            <div className="card-body p-0">
                <div className="card-text text-btm">
                    <a className='text-decoration-none' href='' >{props.name}</a>
                    <p className="fw-bold">{props.specie}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
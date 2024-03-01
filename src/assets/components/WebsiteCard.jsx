function WebsiteCard(props){
    return(
        <div className="websiteCard">
            <img src={props.img} className="websiteCardImg"></img>
            <h2 className="websiteCardTitle">{props.title}</h2>
            <p className="websiteCardInfo">{props.info}</p>
            <a href={props.link} className="websiteCardLink" target="_blank">Visit website</a>
        </div>
    )
}

export default WebsiteCard;
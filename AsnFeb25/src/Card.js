
const Card = props => {
    return (
        <div style={{ margin: '1em' }}><img alt="avatar" style={{ width: '30%',height:'10%' }}
            src={props.avatar_url} />
            <div>
                <div style={{fontWeight:'bold'}}>Name:{props.name}</div>
                
                <div>Company:{props.company}</div>
                <div>Location:{props.location}</div>
                <div>Blog:{props.blog}</div>
                <div>Bio:{props.bio}</div>
            </div>
        </div>
    )
}
export default Card
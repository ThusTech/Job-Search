

export default function CardExplorer(props){
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="*">{props.linkDescription}</a>
        </>
    )
}
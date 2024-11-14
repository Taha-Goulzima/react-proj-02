import TagButton from "./TagButton";
import CardButton from "./CardButton";
const Card = ({ item }) => {
    return (

        <div className="col p-2">
            <div className="card" >
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {<TagButton buttonList={item.tags} />}
                    <p className="card-text">{item.description}</p>
                    {<CardButton name={"commancer"} href={item.link} />}
                </div>
            </div>
        </div>



    )

}
export default Card
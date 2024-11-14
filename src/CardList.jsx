import Card from "./Card";
export default function CardList({data}){

    return(
        <div className="container pt-3">
             <div className="row row-cols-3 ">
                {data.map((item,index)=>(
                <Card key={index} item={item} />)
            )}
             </div>
            
       </div>

    )
}
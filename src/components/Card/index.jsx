import './styles.css';

function Card({name, image, types}){

    const tipoPokemon = () =>{
        if(types[1]){
            return types[0].type.name+" - "+types[1].type.name;
        }
        return types[0].type.name;
       
    };

    return(
        <div className="card">
            <div className="container">
                <div className=''>
                    <img src={image} style={{width: 100, height:100, alignItems:'center'}} alt="foto pokemon" />
                </div> 
                <h4><b>{name}</b></h4>
                <p className='tipo'>{tipoPokemon()}</p>
            </div>
        </div>
    );
}export default Card;


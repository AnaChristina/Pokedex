import './styles.css';

export function Header({darkMode}){
    return(
        <div className={`Header ${darkMode ? 'dark' : ''} div`}>
            <div className='circulo'></div>

            <div className="red bola"> </div>
            <div className="yellow bola"> </div>
            <div className="blue bola"> </div>
            
            <header  className="estilo"></header>
            <div className={`Header ${darkMode ? 'dark' : ''} caido`}></div>
        </div>
    )
}

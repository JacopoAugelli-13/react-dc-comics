import comics from './comics'




const Header = ({ logoDC, jumbo }) => {
    const fumetti = comics.map(props => {
        return (
        <div key={props.key} className="contents">
            <ul className="ulContent">
                <li className="licontent"> <img src={props.thumb} alt={props.title} />
                    <h5 className="titleFumetti">{props.title}</h5>
                </li>
            </ul>


        </div>
        )
    });

// ritorno dell'intero header con la props fatta
return (
    <header>
        <img src={logoDC} alt="logoDc" />

        <ul className="navBar">
            <li><p className="liNav">charaters</p></li>
            <li><p className="liNav">comics</p></li>
            <li><p className="liNav">movies</p></li>
            <li><p className="liNav">tv</p></li>
            <li><p className="liNav">games</p></li>
            <li><p className="liNav">collectories</p></li>
            <li><p className="liNav">videos</p></li>
            <li><p className="liNav">fans</p></li>
            <li><p className="liNav">news</p></li>
            <li><p className="liNav">shop</p></li>
        </ul>

        <div className="sfondoMain">
            <img src={jumbo} alt="jumbotron" />
        </div>


        <button className="btn">Current series</button>

        <div className="content">
            {fumetti}
        </div>


        <button className="btn2">Load more</button>
    </header>
)};

export default Header;
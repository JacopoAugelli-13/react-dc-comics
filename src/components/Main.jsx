const Main = ({ figure, shirt, levelUp, pos, cd, }) => {


    return (
        <main>

            
            <ul className="interactionTab">
                <li className="liTab">
                    <img src={figure} alt="figure" />
                    <p className="pTab">digital comics</p>
                </li>
                <li className="liTab">
                    <img src={shirt} alt="shirt" />
                    <p className="pTab">dc merchandise</p>
                </li>
                <li className="liTab">
                    <img src={levelUp} alt="levelUp" />
                    <p className="pTab">subscription</p>
                </li>
                <li className="liTab">
                    <img src={pos} alt="pos" />
                    <p className="pTab">comic shop locator</p>
                </li>
                <li className="liTab">
                    <img src={cd} alt="cards" />
                    <p className="pTab">dc power visa</p>
                </li>
            </ul>
        </main>
    )
}

export default Main; 
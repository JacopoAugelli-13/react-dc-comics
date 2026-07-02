const Main = ({ figure, shirt, levelUp, pos, cd }) => {



    console.log("Cosa arriva dentro figure?:", figure);

    return (
        <main>
            <ul>
                <li>
                    <img src={figure} alt="figure" />
                    <p>digital comics</p>
                </li>
                <li>
                    <img src={shirt} alt="shirt" />
                    <p>dc merchandise</p>
                </li>
                <li>
                    <img src={levelUp} alt="levelUp" />
                    <p>subscription</p>
                </li>
                <li>
                    <img src={pos} alt="pos" />
                    <p>comic shop locator</p>
                </li>
                <li>
                    <img src={cd} alt="cards" />
                    <p>dc power visa</p>
                </li>
            </ul>
        </main>
    )
}

export default Main; 
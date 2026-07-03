const Footer = ({ backG, backDC, faceB, TT, YT, pint, perip }) => {



    return (<footer>
        <div className="catalogo">
            <img src={backG} alt="sfondo" />
            <ul className="ulCatalogo">
                <h3>Dc comics</h3>
                <li className="liCata">Characters</li>
                <li className="liCata">Comics</li>
                <li className="liCata">Movies</li>
                <li className="liCata">TV</li>
                <li className="liCata">Games</li>
                <li className="liCata">Videos</li>
                <li className="liCata">News</li>
            </ul>
            <ul className="ulCatalogo2">
                <h3>shop</h3>
                <li className="liCata">Shop Dc</li>
                <li className="liCata">Shop Dc Collectibles</li>
            </ul>
            <ul className="ulCatalogo3">
                <h3>Dc</h3>
                <li className="liCata">Term Of Use</li>
                <li className="liCata">Privacy policy(New)</li>
                <li className="liCata">Ad Choices</li>
                <li className="liCata">Advertising</li>
                <li className="liCata">Jobs</li>
                <li className="liCata">Subscriptions</li>
                <li className="liCata">Talent Workshop</li>
                <li className="liCata">CPSC Certificates</li>
                <li className="liCata">Ratings</li>
                <li className="liCata">Shop Help</li>
                <li className="liCata">Contact Us</li>
            </ul>
            <ul className="ulCatalogo4">
                <h3>Sites</h3>
                <li className="liCata">Dc</li>
                <li className="liCata">MAD Magazine</li>
                <li className="liCata">Dc Kids</li>
                <li className="liCata">Dc Universe</li>
                <li className="liCata">Dc Power visa</li>
            </ul>
            <img src={backDC} alt="dc" />
        </div>

        <div className="downBar">
            <div className="btn">
                <button id="sign">sign-up now!</button>
            </div>
            <div className="info"><h3 className="h3">follow us</h3>
                <img src={faceB} alt="facebook" />
                <img src={TT} alt="twitter" />
                <img src={YT} alt="youtube" />
                <img src={pint} alt="pinterest" />
                <img src={perip} alt="moveapp" />
            </div>
        </div>
    </footer>
    )
}

export default Footer;
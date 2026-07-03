

const Header = ({ children }) => (
    <header>
        { children }
        
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
        
        <div className="content">
            {'-->'}<h4>Content goes here</h4>{'<--'}
        </div>
    </header>
)

export default Header;
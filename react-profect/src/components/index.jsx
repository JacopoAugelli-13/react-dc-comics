
const Header = ({ children }) => (
    <header>
        { children }
        <div className="nav">
            <ul>
                <li><p>charaters</p></li>
                <li><p>comics</p></li>
                <li><p>movies</p></li>
                <li><p>tv</p></li>
                <li><p>games</p></li>
                <li><p>collectories</p></li>
                <li><p>videos</p></li>
                <li><p>fans</p></li>
                <li><p>news</p></li>
                <li><p>shop</p></li>
            </ul>
        </div>
        <div className="content">
            {'-->'}Content goes here{'<--'}
        </div>
    </header>
)

export default Header;
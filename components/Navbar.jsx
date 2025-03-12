export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={`${process.env.PUBLIC_URL}/images/react-logo.png`} alt="React logo" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

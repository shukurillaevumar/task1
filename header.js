const Header = () => {
    const customStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'purple', 
        marginTop: '50px'
    }
    return (
        <div className="header" style={customStyle}>
            <h2>Startup 3</h2>
            <div className="informations">
                <p>Overview</p>
                <p>Features</p>
                <p>Company</p>
                <p>Platform</p>
                <p className="purchase-p">Purchase</p>
            </div>
        </div>
    )
}

export default Header;
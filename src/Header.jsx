function Header({title, nav1, nav2, nav3, nav4}){
    return(
       
        <header style={{backgroundColor:'maroon', padding: '20px'}}>

        <h1>{title}</h1>
        <img style={{borderRadius: '50%', width: '18%'}} src="lorenzo.jpg"/>

        <nav>
            <a href="#" style={{marginRight: '15px', backgroundColor: 'burlywood', color: 'black', textDecoration: 'none'}}>
                {nav1}
            </a>

            <a href="#" style={{marginRight: '15px', backgroundColor: 'burlywood', color: 'black', textDecoration: 'none'}}>
                {nav2}
            </a>

            <a href="#" style={{marginRight: '15px', backgroundColor: 'burlywood', color: 'black', textDecoration: 'none'}}>
                {nav3}
            </a>

            <a href="#" style={{marginRight: '15px', backgroundColor: 'burlywood', color: 'black', textDecoration: 'none' }}>
                {nav4}
            </a>
        </nav>
        
        </header>
    );
}

export default Header;


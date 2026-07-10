function Sidebar({title, phone, email}){
    return(
        <aside
        style={{backgroundColor:'burlywood', padding: '20px', color:'black'}}>
            <h3>{title}</h3>

            <ul >
                <li><strong>Phone:</strong> <i>{phone}</i></li>
                <li><strong>Email:</strong> <i>{email}</i></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
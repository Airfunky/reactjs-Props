function Layout(props) {
    return(
        <div
        style={{
            border: "1px dashed black",
            padding: "10px",
            marginTop: "50px",
            backgroundColor: "burlywood",
            color: "red",
        }}
        >
            <h2>Title: {props.title}</h2>
            <h2>Description: {props.description}</h2>
        </div>
    );
}

export default Layout;
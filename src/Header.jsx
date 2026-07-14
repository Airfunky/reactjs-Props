function header({title,a1,a2,a3,a4}) {
  return (
    <div 
    style={{
        backgroundColor: "#ddae24",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }}
    >
        <div style={{display: "flex", alignItems: "center",}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVBQBnn2VAnKFYK0tJTDBD6ssmovzAD0R3Ioan20PzA&s=10" alt="" 
            style={{width: "80px", height: "80px", margin: "10px", borderRadius: "20px", textAlign: "center"}}/>
            <h1 style={{color: "black",}}>{title}</h1>
        </div>
        <nav style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h3 style={{margin: "10px",}}><a href="#">{a1}</a></h3>
            <h3 style={{margin: "10px",}}><a href="#">{a2}</a></h3>
            <h3 style={{margin: "10px",}}><a href="#">{a3}</a></h3>
            <h3 style={{margin: "10px",}}><a href="#">{a4}</a></h3>
        </nav>
        
    </div>
  )
}

export default header;
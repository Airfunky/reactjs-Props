function hero({search,submit,button1,button2,button3,button4}) {
    return (
        <div
        style={{backgroundColor: "Sienna",
        padding: "5px",
        }}
        >
            <div>
                <input type="text" name="" id="" placeholder={search} style={{width: "300px", height: "22px", padding: "10px", margin: "10px"}}/>
                <button type="submit" style={{height: "44px", width: "80px", backgroundColor: "#ddae24", color: "black"}}>{submit}</button>
            </div>
            <div>
                <button type="button" style={{margin: "5px", height: "32px"}}>{button1}</button>
                <button type="button" style={{margin: "5px", height: "32px"}}>{button2}</button>
                <button type="button" style={{margin: "5px", height: "32px"}}>{button3}</button>
                <button type="button" style={{margin: "5px", height: "32px"}}>{button4}</button>
            </div>
        </div>
    )
}

export default hero;
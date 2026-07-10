function Hero({headline, description}){
    return(
        <>
            <section style={{backgroundColor:'tan', color: 'black', padding: '20px'}}>
                <h2>{headline}</h2>

                <p><strong><i>{description}</i></strong></p>
            </section>
        </>
    );
}

export default Hero;
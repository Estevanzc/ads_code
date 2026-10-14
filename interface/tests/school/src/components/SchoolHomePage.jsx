function SchoolHomePage() {
    function message() {
        alert("Bem-vindo ao sistema de gestão escolar!")
    }
    const div = {
        width: "30%",
        padding: "20px 20px 10px 20px",
        backgroundColor: "rgb(128, 128, 128, 0.1)",
        border: "1px solid gray",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
        gap: "20px 0px"
    }
    const button = {
        padding: "10px 15px",
        backgroundColor: "green",
        color: "white",
        fontWeight: "bold",
        border: "2px solid black",
        borderRadius: "5px",
    }
    return (
        <div style={div}>
            <h1>IFRS <i>Campus</i> Bento</h1>
            <p>Bem-Vindo ao sistema de gestão escolar do IFRS <i>Campus</i> Bento. Aqui você pode gerenciar turmas, estudantes e muito mais.</p>
            <button style={button} onClick={message}>Acessar Sistema</button>
        </div>
    );
}

export default SchoolHomePage
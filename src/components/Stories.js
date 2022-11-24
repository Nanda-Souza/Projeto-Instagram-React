export default function Stories() {
    const listaStories = [
        { user: "9gag", imagem: "assets/img/9gag.svg"},
        { user: "meowed", imagem: "assets/img/meowed.svg"},
        { user: "barked", imagem: "assets/img/barked.svg"},
        { user: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg"},
        { user: "wawawicomics", imagem: "assets/img/wawawicomics.svg"},
        { user: "respondeai", imagem: "assets/img/respondeai.svg"},
        { user: "filomoderna", imagem: "assets/img/filomoderna.svg"},
        { user: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg"}
    ]
    return (
            <div className="stories">
                    {listaStories.map((s) => <Story key={s.user} imagem={s.imagem} user={s.user}/>)}

                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
          );
        }

        function Story(props) {            
            return (
                <div className="story">
                        <div className="imagem">
                            <img src={props.imagem} />
                        </div>
                        <div className="usuario">
                            {props.user}
                        </div>
                    </div>
            )
        }
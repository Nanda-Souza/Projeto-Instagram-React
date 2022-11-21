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
            <div class="stories">
                    {listaStories.map((s) => <Story imagem={s.imagem} user={s.user}/>)}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
          );
        }

        function Story(props) {            
            return (
                <div class="story">
                        <div class="imagem">
                            <img src={props.imagem} />
                        </div>
                        <div class="usuario">
                            {props.user}
                        </div>
                    </div>
            )
        }
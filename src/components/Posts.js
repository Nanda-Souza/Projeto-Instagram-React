export default function Posts() {
    const listaPosts = [
        { user: "meowed", userImg: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", userCurt:"respondeai", userCurtImg:"assets/img/respondeai.svg", bookmark: "bookmark-outline", curtidas: 101.523},
        { user: "barked", userImg: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", userCurt:"adorable_animals", userCurtImg:"assets/img/adorable_animals.svg", bookmark: "bookmark-outline", curtidas: 99.159}
    ]
    return (
        <div className="posts">
            {listaPosts.map((p) => <Post key={p.user} user={p.user} userImg={p.userImg} conteudo={p.conteudo} userCurt={p.userCurt} userCurtImg={p.userCurtImg} bookmark={p.bookmark} curtidas=
            {p.curtidas}/>)}          
            
        </div>        
    );
}
function Post(props){    
    return(
        <div className="post" data-test="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.userImg} />
                {props.user}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={props.conteudo} data-test="post-image"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={props.bookmark}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.userCurtImg} />
                <div className="texto">
                  Curtido por <strong>{props.userCurt}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>

    );
}


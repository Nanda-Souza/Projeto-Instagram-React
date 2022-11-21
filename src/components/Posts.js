export default function Posts() {
    const listaPosts = [
        { user: "meowed", userImg: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg", userCurt:"respondeai", userCurtImg:"assets/img/respondeai.svg", curtidas: 101.523},
        { user: "barked", userImg: "assets/img/barked.svg", conteudo: "assets/img/dog.svg", userCurt:"adorable_animals", userCurtImg:"assets/img/adorable_animals.svg", curtidas: 99.159}
    ]
    return (
        <div class="posts">
            {listaPosts.map((p) => <Post user={p.user} userImg={p.userImg} conteudo={p.conteudo} userCurt={p.userCurt} userCurtImg={p.userCurtImg} curtidas=
            {p.curtidas}/>)}          
            
        </div>        
    );
}
function Post(props){    
    return(
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.userImg} />
                {props.user}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.conteudo} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.userCurtImg} />
                <div class="texto">
                  Curtido por <strong>{props.userCurt}</strong> e <strong>outras {props.curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>

    );
}
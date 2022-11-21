export default function Sugestoes() {
    const listaSugestoes = [
        {user: "bad.vibes.memes", userImg: "assets/img/bad.vibes.memes.svg", razao: "Segue você"},
        {user: "chibirdart", userImg: "assets/img/chibirdart.svg", razao: "Segue você"},
        {user: "razoesparaacreditar", userImg: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram"},
        {user: "adorable_animals", userImg: "assets/img/adorable_animals.svg", razao: "Segue você"},
        {user: "smallcutecats", userImg: "assets/img/smallcutecats.svg", razao: "Segue você"},
    ]
    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {listaSugestoes.map((s) => <Sugestao user={s.user} userImg={s.userImg} razao={s.razao} />)}                  

        </div>
    );
}

function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.userImg} />
              <div class="texto">
                <div class="nome">{props.user}</div>
                <div class="razao">{props.razao}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    );
}
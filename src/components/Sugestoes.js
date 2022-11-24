export default function Sugestoes() {
    const listaSugestoes = [
        {user: "bad.vibes.memes", userImg: "assets/img/bad.vibes.memes.svg", razao: "Segue você"},
        {user: "chibirdart", userImg: "assets/img/chibirdart.svg", razao: "Segue você"},
        {user: "razoesparaacreditar", userImg: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram"},
        {user: "adorable_animals", userImg: "assets/img/adorable_animals.svg", razao: "Segue você"},
        {user: "smallcutecats", userImg: "assets/img/smallcutecats.svg", razao: "Segue você"},
    ]
    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {listaSugestoes.map((s) => <Sugestao key={s.user} user={s.user} userImg={s.userImg} razao={s.razao} />)}                  

        </div>
    );
}

function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
              <img src={props.userImg} />
              <div className="texto">
                <div className="nome">{props.user}</div>
                <div className="razao">{props.razao}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
    );
}
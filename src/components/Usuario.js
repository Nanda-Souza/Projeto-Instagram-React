import React, { useState } from "react"

export default function Usuario() {   
    const imgPerfil = "assets/img/catanacomics.svg"
    const [nome, setNome] = React.useState("")
    const [imagem, setImagem] = useState(imgPerfil)
    
    function mudarNome() {
        setNome(prompt("Qual seu novo nome?"))
        
    }    

    function mudarImgPerfil() {
        const imagemPerfil = prompt("Escolha o link da sua imagem")
        setImagem(imagemPerfil)
    } 
    //<img onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} />
    return (
        <div class="usuario">
            <img onClick={mudarImgPerfil} src={!imagem ? imgPerfil : imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                {!nome ? "Catana" : nome}
                    <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
                </span>
            </div>
        </div>        
    );
}
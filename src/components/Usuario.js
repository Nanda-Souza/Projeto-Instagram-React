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
    
    return (
        <div class="usuario" data-test="user">
            <img onClick={mudarImgPerfil} src={!imagem ? imgPerfil : imagem} data-test="profile-image"/>
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name"> 
                {!nome ? "Catana" : nome} 
                    <ion-icon name="pencil" onClick={mudarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>        
    );
}
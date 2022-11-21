export default function Usuario() {
    const nomePadrao = "Catana"
    
    function alertarMessagem() {
        console.log("Works");
    }

    function AlertM(){
        return(
            <ion-icon name="pencil" onclick="alertarMessagem()"></ion-icon>
        )
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                {nomePadrao}
                    <AlertM />
                </span>
            </div>
        </div>        
    );
}
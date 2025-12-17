import "/src/CSS/contato.css";

function Contato() {
  return (
    <div id="contato" className="conteiner">
        <div className="center">
            <h2 className="h2contato">Fale Conosco</h2>
        </div>

        <div className="conteinerpai">
              <div>
                <input type="text" placeholder="Seu Nome" className="divSocoro" />
              </div>
                <div>
                  <input type="email"  placeholder="Seu E-mail" className="divSocoro"/>
                  </div> 
                <button className="button123"><b>Enviar Mensagem</b></button>
              
        </div>


    </div>
  );
}

export default Contato;

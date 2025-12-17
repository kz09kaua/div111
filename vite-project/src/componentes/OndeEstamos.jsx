import "/src/CSS/ondeestamos.css";

function OndeEstamos() {
  return (
    <div id="Localizacao" className="fundo">
      <div className="onde">
        <h2 className="estamos">Onde Estamos</h2>
      </div>

      <div className="onde2">
        <p>Nosso ponto de retirada e cozinha central está localizada em:</p>
      </div>

      <div className="onde2">
        <h2 className="h2para">
          Rua dos Sabores, 123 | Bairro Saúde | Cidade/UF
        </h2>
      </div>

      <div className="mapcontainer">
        <iframe
          className="mapimg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5770910413253!2d-42.36469152382587!3d-21.129420276778482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc79a387e9b41%3A0x608a37d7a38aa376!2sSENAI%20MURIA%C3%89!5e0!3m2!1spt-BR!2sbr!4v1765932754208!5m2!1spt-BR!2sbr"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default OndeEstamos;

import "/src/CSS/pagevantagens.css";
import abacate from "../assets/imgabacate.png";

function PageVantagens() {
  return (
    <div>
      <div className="div111">
        <div className="div555">
          <h1 className="div222">
            Comida de verdade, pronta para você.
          </h1>
          <p className="div333">
            Sabor caseiro, ingredientes orgânicos e equilíbrio nutricional
          </p>
        </div>

        <div className="div444">
          <button className="botaoplanos">Ver planos</button>
        </div>
      </div>

      <div className="divpcp">
        <h2 className="div1010">
          Por que escolher o Restaurante Popular Saudável?
        </h2>


  
  <div className="div1111">


                <div className="divCards">
                    <img src={abacate} alt="Abacate" style={{ width: "65px", height: "60px" }} />
                        <h3 className="cards">Ingredientes Frescos</h3>
                          <p className="pmais">Trabalhamos apenas com <br/>produtores locais e <br/> orgânicos.</p>
                </div>

          <div className="divCards">
            <img src={abacate} alt="Abacate" style={{ width: "65px", height: "60px" }} />
                <h3 className="cards">Ingredientes Frescos</h3>
                  <p className="pmais">Trabalhamos apenas com <br/>produtores locais e <br/> orgânicos.</p>
          </div>


          <div className="divCards">
            <img src={abacate} alt="Abacate" style={{ width: "65px", height: "60px" }} />  
                <h3 className="cards">Ingredientes Frescos</h3>
                  <p className="pmais">Trabalhamos apenas com <br/>produtores locais e <br/> orgânicos.</p>
          </div>
          </div>
        
      </div>
  
  
  </div>
  );
}

export default PageVantagens;

import "/src/CSS/sobrenos.css";

function SobreNos() {
  return(
   <div>
<div id="SobreNos" className="centralizar">
  <h2 className="h2nos">Nossa história e Missão</h2>
</div>

    <div className="frasesnos">
    <p className="textnos">A Restaurante Popular Saudável nasceu da paixão por uma alimentação saudável e da dificuldade <br /> de encontrar opções práticas e saborosas no dia a dia. Nossa missão é simplificar a sua rotina,<br /> oferecendo marmitas frescas, balanceadas e preparadas com ingredientes orgânicos e de <br />pequenos produtores locais.</p>
      <p className="textnos">Acreditamos que comer bem não precisa ser complicado. Por isso, toda a nossa produção é feita <br /> com rigorosos padrões de qualidade, garantindo que você receba o máximo de nutrição e sabor <br /> em cada refeição.</p>
   </div>

   <div>
   <ul className="ulprincipal">
    <li className="historiaul"><b>foco em Nutrição</b></li>
    <li className="historiaul"><b>Sabor Caseiro</b></li>
    <li className="historiaul"><b>Sustentabilidade</b></li>
   </ul>
   </div>
   
   </div>
    
  );
}
export default SobreNos;
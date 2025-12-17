import "/src/CSS/header.css"

function Header() {
  return(
    <header className="header-style">
      
      <div>
        <h2>Restaurante Popular Saudável</h2>
        </div>
    
    <nav className="nav-menu">
        <a href="#inicio" className="nav-link">
          {" "}
          Início
        </a>
        <a href="#vantagens" className="nav-link">
          {" "}
          Vantagens
        </a>
        <a href="#Cardapio" className="nav-link">
          {" "}
          Cardápio
        </a>
        <a href="#SobreNos" className="nav-link">
          {" "}
          Sobre Nós
        </a>
        <a href="#Localizacao" className="nav-link">
          {" "}
          Localização
        </a>
        <a href="#contato" className="nav-link">
          {" "}
          Contato
        </a>
      </nav>

    
      </header>
    
  );
}
export default Header;

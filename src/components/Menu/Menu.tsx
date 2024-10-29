import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/veiculo">Todos os Serviços</Link>
        </li>
        <li>
          <Link href="/chatbot">Fale Conosco</Link>
        </li>
        <li>
          <Link href="/integrantes">Integrantes</Link>
        </li>
        <li>
          <Link href="/login">ENTRAR</Link>
        </li>
      </ul>
    </nav>
  );
}

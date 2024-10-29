import Link from 'next/link';
import "../globals.css";

export default function ChatBot() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center bg-black bg-cover bg-center" style={{ backgroundImage: "url('/images/38bcf9ecdd4b2d6e57e4c14ec9dfe563.png')" }}>
        <section className="flex-1 w-full flex justify-center items-center p-4">
          <div className="chat-container h-full w-full max-w-3xl border rounded-lg shadow-lg p-4 bg-gray-800">
            <div className="chat-header">
              <Link href="/" className="back-btn">&lt; Voltar</Link>
              <h2 className="text-xl font-bold text-white">ChatBot</h2>
              <button className="text-xl text-white">&#9881;</button>
            </div>

            <div className="chat-messages overflow-y-auto mb-4 space-y-2 h-[calc(100vh-250px)]">
              <div className="message received">Olá! Como posso ajudar você hoje?</div>
              <div className="message sent">Meu carro está com problemas</div>
              <div className="message received">Qual seria o problema com o seu veículo?</div>
              <div className="message sent">O carro está demorando para pegar partida</div>
              <div className="message received">
                As velas de ignição são responsáveis por criar a faísca necessária para iniciar o veículo.
                Gostaria de um orçamento?
              </div>
              <div className="message sent">Sim</div>
              <div className="message received">
                O orçamento para velas de ignição seria em média de R$ 200.
                Gostaria de ver a mecânica parceira mais próxima do seu endereço?
              </div>
              <div className="message sent">Sim</div>
              <div className="message received">Por gentileza, digite seu CEP.</div>
              <div className="message sent">05874-010</div>
              <div className="message received">
                Localizamos que a mecânica parceira mais próxima do seu endereço fica a 14.7km.
                Gostaria de adicionar a rota no Waze ou Google Maps?
              </div>
              <div className="message">
                <button className="map-btn">Waze</button>
                <button className="map-btn">Google Maps</button>
              </div>
              <div className="message received">Perfeito! Te ajudo em algo mais?</div>
              <div className="message sent">Não, obrigado.</div>
              <div className="message received">Eu que agradeço! Qualquer dúvida estou à disposição.</div>
            </div>

            <div className="chat-input">
              <input type="text" placeholder="Digite sua mensagem" className="flex-1 border rounded-md p-2" />
              <button className="send-btn">&#10148;</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

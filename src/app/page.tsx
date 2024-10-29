import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <main className="flex-1 flex flex-col items-center p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">
            CONHEÇA AGORA O AUTODIAGNÓSTICO PARA SEU VEÍCULO, TOTALMENTE AUTOMATIZADO
            PARA GARANTIR UMA NOVA EXPERIÊNCIA AO CLIENTE PORTO
          </h1>
          <h2 className="text-2xl mb-6 text-white">
            PRECISA REPARAR/REVISAR SEU VEÍCULO?
          </h2>
          <Image
            src="/images/homepage-car.svg"
            alt="Imagem do carro"
            width={500}
            height={300}
            className="mx-auto mb-4"
          />
          <Link href="/veiculo">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-700">
              SOLICITE UM DIAGNÓSTICO
            </button>
          </Link>
        </header>
      </main>
    </div>
  );
}

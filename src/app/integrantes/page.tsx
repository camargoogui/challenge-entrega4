'use client';

import Image from 'next/image';
import '../globals.css'
import userBia from '/public/images/user-bia.png';
import userGuilherme from '/public/images/user-guilherme.png';
import userIcaro from '/public/images/user-icaro.jpg';

const Integrantes: React.FC = () => {
  return (
    <section className="testimonials">
      <h1 className="text-4xl font-bold text-white mb-8">Integrantes do projeto</h1>
      <div className="testimonialContainer">
        <div className="testimonial">
          <Image src={userBia} alt="Bianca" width={80} height={80} className="testimonial-img" />
          <h2 className="testimonial-name">Bianca</h2>
          <p className="testimonial-info">
            Bianca Vitoria Galo Monteiro <br />
            RM556270 <br />
            1TDSPM <br />
            <a href="https://github.com/biancavitoria15" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              github.com/biancavitoria15
            </a>
          </p>
        </div>

        <div className="testimonial">
          <Image src={userGuilherme} alt="Guilherme" width={80} height={80} className="testimonial-img" />
          <h2 className="testimonial-name">Guilherme</h2>
          <p className="testimonial-info">
            Guilherme Paes Camargo <br />
            RM555166 <br />
            1TDSPM <br />
            <a href="https://github.com/camargoogui" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              github.com/camargoogui
            </a>
          </p>
        </div>

        <div className="testimonial">
          <Image src={userIcaro} alt="Ícaro" width={80} height={80} className="testimonial-img" />
          <h2 className="testimonial-name">Ícaro</h2>
          <p className="testimonial-info">
            Icaro Américo de Albuquerque Lima <br />
            RM555131 <br />
            1TDSPM <br />
            <a href="https://github.com/icaroalb1" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              github.com/icaroalb1
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrantes;

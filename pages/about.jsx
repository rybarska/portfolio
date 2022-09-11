import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              I am a professional researcher, currently enrolled in the full
              stack Web Development Bootcamp at UpLeveled in Vienna. I have
              experience in research on drugs and crime at the UNODC (Vienna),
              and the EMCDDA (Lisbon). Earlier, I actively participated in
              EU-China research partnership development at the European
              Commission’s Joint Research Centre (Brussels), and at the
              Delegation of the European Union to China (Beijing). I completed
              my PhD at the Max Planck Institute of Molecular Cell Biology and
              Genetics (MPI-CBG, Dresden). Although I was born and raised in
              Poland, I speak English (CPE/C2), French (DALF C2 sciences),
              Chinese (HSK5/C1; UNLPE), Spanish (DELE/C1; UNLPE), Portuguese
              (DIPLE/B2), and German (ÖSD C1), and I am intermediate in Arabic
              and Russian.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

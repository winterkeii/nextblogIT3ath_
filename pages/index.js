import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>1. Hello I'm John Leo Medina, a BSIT student from University of the Assumption. My hobbies are playing games, watching movies, reading mangas, and playing badminton. I'm from Campo Venzon, Mangga Cacutud, Arayat, Pampanga. I also love watching documentaries about animals and culture of different countries.</p>
        <hr></hr>
        <p>2. Why did you take up IT? I took IT because I want to develop games and websites, also I love computer stuff and I want to be knowlegable.</p>

<hr></hr>
<p>3. What career do you see yourself exploring after graduation? I want to be a mobile developer or a website developer.</p>
<hr></hr>
<p>4. What do you expect to learn in this subject? I expect to learn more about web dev.</p>.
<hr></hr>
<p>5. What topics do you want to be discussed in this subject? The different languages that most companies use.git </p>
  <hr>
  </hr>      
        <p>
          (Hello I'm Leo a BSIT student.{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageShowcase from '@site/src/components/HomepageShowcase';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Conheça os meus projetos
          </Link>
          <a
            className="button button--secondary button--lg"
            href="https://www.amazon.com.br/stores/author/B0D8L8DXF8/allbooks"
          >
            Meus livros e contos
          </a>
          <a href="https://www.buymeacoffee.com/andrewnation"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=andrewnation&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo ao multiverso do AndrewNation`}
      description="Um programador, escritor, poliglota e ''linguista por hobby'' com curiosidade infinita, movido pelas ideias e criatividade"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr />
        <HomepageShowcase />
      </main>
    </Layout>
  );
}

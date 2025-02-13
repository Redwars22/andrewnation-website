import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'Paixão por criar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Se tem uma coisa que eu gosto muito é criar e inventar: criar aplicativos,
        escrever histórias, documentar, planejar, desenhar interfaces, pôsteres, etc.
      </>
    ),
  },
  {
    title: 'Curiosidade infinita',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vários tópicos me chamam a atenção, como astronomia, ciência, tecnologia, linguística, ficção, etc. 
        Mas nunca e canso de ir atrás do conhecimento, preciso sempre de mais e mais!
      </>
    ),
  },
  {
    title: 'Pronto para ir além',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Estou sempre à procura de novas oportunidades e de adquirir novos conhecimentos, 
        seja na área do desenvolvimento web ou mobile, seja em alguma outra área que acabe 
        me chamando a atenção futuramente.
      </>
    ),
  },
];

function Project({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageShowcase() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <h1 className="hero__subtitle">Projetos em Destaque</h1>
        </div>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Paixão por criar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Se tem uma coisa que eu gosto muito é criar e inventar: criar aplicativos,
        escrever histórias, documentar, planejar, desenhar interfaces, etc.
      </>
    ),
  },
  {
    title: 'Curiosidade infinita',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Vários tópicos me chamam a atenção, como astronomia, ciência, tecnologia, linguística, ficção, psicologia, etc. 
        Você verá um pouco disso neste site ou no meu site secundário.
      </>
    ),
  },
  {
    title: 'Desejo de ir além',
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

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

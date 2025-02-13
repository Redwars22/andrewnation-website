import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ProjectList = [
  {
    title: 'Algometer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        O Algometer é uma ferramenta de linha de comando feita com Node para medir o tempo de execução de algoritmos JavaScript/TypeScript.
      </>
    ),
    link: "/docs/projects/algometer"
  },
  {
    title: '',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        
      </>
    ),
    link: ""
  }
];

function Project({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="`${link}`">Saiba mais</a>
      </div>
    </div>
  );
}

export default function HomepageShowcase() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <h1 className="hero__subtitle text--center">Projetos em Destaque</h1>
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

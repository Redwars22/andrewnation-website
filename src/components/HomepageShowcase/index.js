import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const BASE = "https://andrewnationdev.vercel.app"

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
        title: 'Drewmax',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                O Drewmax é um protótipo de um serviço de streaming inspirado pela Netflix e pelo HBO usando a API do The Movie Database.
            </>
        ),
        link: "/docs/projects/drewmax"
    },
    {
        title: 'Fahrkelvin',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Biblioteca para converter escalas de temperatura Kelvin, Celsius e Fahrenheit que você pode incluir em seus projetos. Ela é leve e fácil de usar.
            </>
        ),
        link: "/docs/projects/fahrkelvin"
    }
];

function Project({ Svg, title, description, link }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to={link}
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function HomepageShowcase() {
    return (
        <div>
            <h1 className="hero__subtitle text--center">Projetos em Destaque</h1>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {ProjectList.map((props, idx) => (
                            <Project key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

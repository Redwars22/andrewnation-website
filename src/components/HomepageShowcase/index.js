import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { shuffle } from '../../utils/vampirjs'

const BASE = "https://andrewnationdev.vercel.app"

const ProjectList = [
    {
        title: 'Algometer',
        description: (
            <>
                O Algometer é uma ferramenta de linha de comando feita com Node para medir o tempo de execução de algoritmos JavaScript/TypeScript.
            </>
        ),
        link: "/docs/projects/algometer"
    },
    {
        title: 'Drewmax',
        description: (
            <>
                O Drewmax é um protótipo de um serviço de streaming inspirado pela Netflix e pelo HBO usando a API do The Movie Database.
            </>
        ),
        link: "/docs/projects/drewmax"
    },
    {
        title: 'Fahrkelvin',
        description: (
            <>
                Biblioteca para converter escalas de temperatura Kelvin, Celsius e Fahrenheit que você pode incluir em seus projetos. Ela é leve e fácil de usar.
            </>
        ),
        link: "/docs/projects/fahrkelvin"
    },
    {
        title: 'Andrew Testing Library',
        description: (
            <>
                O Andrew Testing Library é uma ferramenta de teste para TypeScript e JavaScript. Ela é bem mais simples que ferramentas mais parrudas como o Jest, por exemplo, mas para testes simples deve cumprir bem seu objetivo.
            </>
        ),
        link: "/docs/Utilitários/andrewtestinglibrary"
    },
    {
        title: 'Andrew JRocket',
        description: (
            <>
                O Andrew JRocket é uma ferramenta simples e leve de teste para projetos Java. É um port do Andrew Testing Library para JavaScript.
            </>
        ),
        link: "/docs/Utilitários/jrocket"
    },
    {
        title: 'ClimaSevero',
        description: (
            <>
                O ClimaSevero é um programa de previsão do tempo que usa a API do OpenWeatherMap para lhe trazer informações sobre o clima em virtualmente qualquer cidade do mundo.
            </>
        ),
        link: "/docs/projects/climasevero"
    },
    {
        title: 'Andrew Testing Library (for Python)',
        description: (
            <>
                O Andrew Testing Library para Python é uma ferramenta de teste, análoga ao Andrew Testing Library que é um outro projeto meu feito para testes em TS/JS. Ela é bem mais simples que ferramentas mais parrudas, mas para testes simples deve cumprir bem seu objetivo.
            </>
        ),
        link: "/docs/Utilitários/andrewtestlibpy"
    },
    {
        title: 'API de Produtos',
        description: (
            <>
                Uma API RESTful simples para cadastro, listagem e consulta de produtos, desenvolvida com Node.js, Express e MySQL. Ela em breve será usada em um projeto fullstack que desenvolverei.
            </>
        ),
        link: "/docs/Fullstack/api_produtos"
    },
    {
        title: 'DrewNote',
        description: (
            <>
                DrewNote é um aplicativo de anotações minimalista, rápido e seguro, feito por AndrewNation.
                Suas notas são salvas localmente no seu navegador, com proteção por senha e Markdown.
                Você pode exportar e importar seu conteúdo em JSON para manter um backup.
            </>
        ),
        link: "/docs/projects/drewnote"
    },
    {
        title: 'Arusian Academy',
        description: (
            <>
                Arusian Academy é um website onde você pode encontrar recursos para aprender a língua aru.
            </>
        )
    },
    {
        title: 'Andrew Lingobase',
        description: (
            <>
                O Lingobase é uma plataforma para criar e compartilhar línguas construídas (conlangs) com propósitos artísticos, de comunicação ou pesquisa. Convida a comunidade a colaborar no desenvolvimento do projeto de código aberto.
            </>
        )
    },
    {
        title: 'Sistema de Gestão Empresarial (SGE)',
        description: (
            <>
                O SGE é uma solução robusta e intuitiva que otimiza a organização e produtividade da equipe, com módulos essenciais para gestão de pessoas e tarefas em uma plataforma centralizada.
            </>
        )
    }
];

/**
 * 
 * {
        title: '',
        Svg: require('@site/static/icon/apps.png').default,
        description: (
            <>
                
            </>
        )
    }
 */

function Project({ title, description, link }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <img width="120px" src="https://andrewnationdev.vercel.app/icons/app.png"></img>
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
    /*useEffect(()=>{
        shuffle(ProjectList);
    },[])*/

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const newList = [];
        while (newList.length < 3 && newList.length < ProjectList.length) {
            let i = Math.floor(Math.random() * ProjectList.length);
            let selectedProject = ProjectList[i];

            if (!newList.some(proj => proj.title === selectedProject.title)) {
                newList.push(selectedProject);
            }
        }

        setProjects(newList);
    }, []);


    return (
        <div>
            <h1 className="hero__subtitle text--center">Projetos em Destaque</h1>
            <section className={styles.features}>
                <div className="container">
                    <div className="row">
                        {projects.map((props, idx) => (
                            <Project key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

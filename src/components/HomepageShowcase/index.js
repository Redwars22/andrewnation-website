import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {shuffle} from '../../utils/vampirjs'

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
        title: 'Orionboard',
        description: (
            <>
                O Orionboard é um painel de controle empresarial que permite gerenciar a empresa em um só lugar.
            </>
        ),
        link: "/docs/projects/orionboard"
    },
    {
        title: 'Palácio da Gula',
        description: (
            <>
                É o sistema online de pedidos de uma hamburgueria. Ele possui o fluxo completo, desde a escolha do hambúrguer, dos acompanhamentos, pagamento e endereço de entrega.
            </>
        ),
        link: "/docs/projects/palacio-da-gula"
    },
    {
        title: 'API de Produtos',
        description: (
            <>
                Uma API RESTful simples para cadastro, listagem e consulta de produtos, desenvolvida com Node.js, Express e MySQL. Ela em breve será usada em um projeto fullstack que desenvolverei.
            </>
        )
    },
    {
        title: 'SGF (Sistema de Gerenciamento de Funcionários - Django)',
        description: (
            <>
                Este é um projeto de sistema de cadastro de funcionários (CRUD) feito com Django + Python (backend), Bootstrap (front-end) e MySQL (SGBD).
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
                <img width="120px" src="https://andrewnationdev.vercel.app/icons/apps.png"></img>
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

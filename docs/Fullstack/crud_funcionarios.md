# 👷 SGF (Sistema de Gerenciamento de Funcionários - Django)

Este é um projeto de sistema de cadastro de funcionários (CRUD) feito com Django + Python (backend), Bootstrap (front-end) e MySQL (SGBD).

![Imagem do SGF - Tela de Cadastro](https://andrewnationdev.vercel.app/img/sgf_crud.png)

Funcionalidades:
- Cadastrar funcionários
- Listar funcionários
- Deletar funcionários
- Editar funcionários

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## ℹ Como configurar

1-Crie um environment Python

2-Instale o Django e demais dependências

3-Execute `python manage.py runserver`

## 🗄 Banco de Dados

O projeto usa o banco de dados MySQL. Para criar a tabela, use o seguinte comando:

```sql
CREATE TABLE `djcrud_employee` (
    `id` int(11) AUTO_INCREMENT PRIMARY KEY,
    `employee_id` varchar(20) NOT NULL,
    `employee_name` varchar(100) NOT NULL,
    `employee_email` varchar(100) NOT NULL,
    `employee_contacts` varchar(20) NOT NULL
);
```

Você precisa instalar o MySQL e alterar as credenciais do banco conforme os da sua máquina no arquivo `settings.py`. Também pode ser necessário instalar o plugin de conexão do MySQL.
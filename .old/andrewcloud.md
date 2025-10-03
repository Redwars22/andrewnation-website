# ANDREWCLOUD

O AndrewCloud é um serviço de armazenamento _hipotético_ que oferece 100GB de armazenamento gratuito. Sua interface é amigável e moderna e foi criada com base no Materialize.

![andrewcloud](https://andrewnationdev.vercel.app/img/andrewcloud.png)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)

+ Materialize, Zustand com persistências, React Easy Router

## RECURSOS
- Envio de arquivos (simulação de upload)
- Alterar avatar e nome de usuário
- Fazer login e deslogar (por meio de um token UUID gerado e salvo no localhost)
- Observar a quantidade de armazenamento usada
- Ver os detalhes do arquivo selecionado
- Criar uma nova pasta
- Remover arquivos
- Pré-visualizar determinados tipos de arquivo (PNG, PDF, por exemplo)

## DOCUMENTAÇÃO
### INTERFACE PRINCIPAL

A interface do AndrewCloud está dividida em três partes principais: header, sidebar e a área onde são exibidos os arquivos. 

Na header você pode encontrar uma barra de pesquisa, um botão para criar uma nova pasta, o botão de configurações e o avatar e o nome do usuário logado.

No sidebar à esquerda você encontra as informações sobre a quantidade de armazenamento ainda disponível, um botão para enviar arquivos e as informações do arquivo selectionado.

No centro, você encontra a área onde são exibidos os cards dos arquivos.

### ENVIAR ARQUIVO

Para enviar um arquivo, clique em ENVIAR ARQUIVO - o botão azul no topo do sidebar - e escolha um arquivo no seletor de seu sistema operacional. Assim que seu arquivo for enviado, você pode vê-lo na área de arquivos.

### VER DETALHES DO ARQUIVO E PRÉ-VISUALIZÁ-LO

Para ver detalhes como tamanho, nome e tipo, por exemplo, clique no botão azul com os três pontos no cartão do arquivo cujos detalhes deseja ver. Eles aparecerão no sidebar à esquerda.

### DELETAR ARQUIVO

Se você estiver com a sessão de informações do arquivo aberta, clique no botão vermelho com o ícone de lixeira para excluir o arquivo. Esta ação não pode ser desfeita.

### CRIAR NOVA PASTA

Para criar uma nova pasta, clique no botão com ícone de sinal de mais. Ser-lhe-á solicitado o nome da pasta. Este não pode estar vazio.

### USAR O ANDREWCLOUD EM SEU DISPOSITIVO

O AndrewCloud está disponível em qualquer navegador que suporte JavaScript e também como aplicativos para Windows e Linux(via Electron).

[Web](https://andrewcloud.vercel.app/)
[Windows ou Linux](https://github.com/andrewnationdev/andrewcloud-electron/releases)

> Em breve estará disponível também para Android (via ReactNative).

Para obter o código-fonte deste projeto e cloná-lo para usar de base para algum outro ou para sugerir algum recurso ou correção de bug [clique aqui](https://github.com/andrewnationdev) para ser levado ao repositório oficial.

### ALTERAR NOME DE USUÁRIO, LOGAR E DESLOGAR

Para alterar o nome de usuário, o avatar e logar e deslogar, você precisa acessar o menu de configurações clicando no botão de engrenagem ao lado da foto de perfil.

Para alterar o avatar, cole a URL de uma imagem válida de um formato suportado por seu navegador.

Não se esqueça de salvar as alterações feitas clicando em SALVAR. Além disso, você pode deslogar e/ou excluir a conta clicando em DESLOGAR e EXCLUIR CONTA respectivamente.

Para fins de teste, você pode usar as seguintes credenciais:

```json
{
    "users": [
        {
            "login": "ght23@gmail.com",
            "password": "12345678"
        },
        {
            "login": "zsg4@gmail.com",
            "password": "87654321"
        },
        {
            "login": "gthor@gmail.com",
            "password": "ghtzsg78"
        }
    ]
}
```
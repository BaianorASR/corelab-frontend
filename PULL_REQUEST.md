# **CoreLab Web Challenge**

Uma aplicação web para anúncios de veículos.

## **Visão Geral.**

### O desafio

Foi proposto um desafio da CoreLab. Onde seria feito um site que seria possível anunciar veículos. O possuir um design responsivo, e possuir um sistema que fosse possível o usuário anunciar além de editar e excluir seus anúncios.

**O usuário pode ser capaz de:**

- Registrar novos anúncios
- Editar seus anúncios - **!Não implementado**
- Listar todos os anúncios
- Listar anúncios favoritos
- Filtrar anúncios pela cor, marca ou modelo

#

## **O Processo de desenvolvimento.**

### Ferramentas utilizadas

#### Front-end

- TypeScript
- Next.js
- Axios
- SWR
- React-hook-form
- Styled-Components
- Phosphor-react
- React-Color

#### Sobre algumas libs

> **SWR** > _Foi utilizado para mediar os fetch da aplicação e ter um site mais reativo utilizando o seu sistema de cache._

> **React-hook-form** > _Utilizado para fazer o gerenciamento dos formulários da aplicação._

> **React-Color** > _Utilizado para fazer o componente `MColorPicker`, para dar opções do usuário escolher um cor mais facilmente._

#

### Estrutura do projeto

    src
      ├── atomic              # Componentes da aplicação baseado no Atomic-Designer
      ├── pages               # Páginas da aplicação
      ├── services            # Configuração da API
      ├── shared              # Compartilhados entre as páginas
      └── styles              # Estilos globais, layouts e tema da aplicação

#### Pages

      pages
        ├── vehicles          # Página para criar ou editar um anúncio
           └── [method]           # sub-página para criar ou editar um anúncio
        ├── filter_vehicles   # Página de filtro de anúncios
        ├── search            # Página que exibira os anúncios filtrados
        └── index             # Página inicial

#### Atomic-Designer

    atomic
      ├── atoms              # Pequenos fragmentos de componentes
      |  ├── ABackButton          # Botão para voltar a homepage
      |  ├── AButton              # Botão default utilizado em todos os componentes
      |  ├── ACardDelete          # Botão para excluir um card
      |  ├── ACardLike            # Botão para favoritar um card
      |  ├── AInput               # Input utilizado nos formulários
      |  └── ALabel               # Label utilizado nos formulários
      |
      ├── molecules          # Componentes da aplicação baseado no Atomic-Designer
      |  ├── MCardButtons         # Junção dos botões de excluir e favoritar
      |  ├── MCardInfoDetails     # Informações sobre o veículo
      |  ├── MColorPicker         # Lib React-Color para seleção de cor
      |  ├── MFormInput           # Componentização do input do formulário
      |  └── MFormSelect          # Componentização do select do formulário
      |
      ├── organism           # Junção de molecules e atoms para criar componentes mas complexos
      |  ├── OFilterForm          # Formulário para filtrar os anúncios
      |  ├── OFooter              # Footer da aplicação
      |  ├── OOptions             # Barra de pesquisa para filtrar os anúncios
      |  ├── OVehicleCard         # Card de um veículo
      |  └── OVehicleForm         # Formulário para criar um novo anúncio
      └── templates          # Componentes que faz o render de múltiplos organism
      |  ├── TAdsCards            # Lista todos os anúncios
      |  ├── TFavoritesCards      # Lista todos os anúncios favoritos
      |  ├── TMyCards             # Lista todos os do usuário
      |  └── TSearchCards         # Lista Anúncios filtrados
      └...

## Author

- LinkedIn - [Adison (Baianor) Reis](https://www.linkedin.com/in/baianorasr/)

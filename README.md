# Nx-Enterprise-Project WMS 
Enterprise Project

Projeto Empresarial (Enterprise Project)
Tecnologias e Padrões Utilizados:

Angular (versão 16): Framework para desenvolvimento de aplicações web.

Standolone Componentes: Utilização de Componentes autonomos

Material Design: Linguagem de design para interface do usuário.

Tailwind: Framework CSS para design responsivo.

Nx e Nx Generators: Ferramentas para desenvolvimento monorepo empresarial.

Padrão Monorepo Empresarial: Estruturação do projeto em um repositório monolítico.

Signals e Gerenciamento de Estado Baseado em Sinal: Abordagem para gerenciamento de estado.

Entradas Baseadas em Rota: Manipulação de entradas através de rotas.

Padrão de Fachada: Utilização do padrão de fachada para simplificar interações.

Detecção de Mudanças OnPush: Estratégia de detecção de mudanças para otimização de performance.

Padrão Observável: Uso de observáveis para manipulação de eventos assíncronos.
Comandos:

Instalar Dependências: npm install
Executar o Frontend: nx serve ng-template-khan-esdras-portal
Padrão de Estrutura Frontend:
feature: Módulos de funcionalidade implementam um caso de uso com componentes inteligentes, focados em uma característica específica, e comunicam-se com o backend, geralmente através de uma store ou serviços.

ui: Módulos de UI contêm componentes de apresentação reutilizáveis que suportam a implementação de características individuais, como um sistema de design.

data: Módulos de dados contêm o modelo de domínio e serviços que operam nele, incluindo validação, comunicação com o backend e gerenciamento de estado.

util: Módulos de utilidade contêm funções auxiliares gerais, como logging, autenticação ou manipulação de datas.

#Estrutura monorepo classica
![monorepo-pattern-classic.png](readme-images-architecture%2Fmonorepo-pattern-classic.png)


#Facade Pattern
1. Definição:
   O padrão Facade fornece uma interface simplificada para um subsistema complexo, encapsulando a complexidade e tornando o subsistema mais fácil de ser utilizado.

2. Problema:
   Trabalhar diretamente com bibliotecas ou frameworks complexos pode levar a um acoplamento forte e tornar o código difícil de entender e manter.

3. Solução:

Interface Simplificada: A fachada oferece uma interface simples para o cliente, ocultando a complexidade do subsistema.
Funcionalidade Limitada: A fachada fornece apenas as funcionalidades necessárias para o cliente, tornando a interação mais eficiente.
Fachadas Adicionais: Podem ser criadas fachadas adicionais para evitar a poluição de uma única fachada com funcionalidades não relevantes.
4. Estrutura:

Fachada: Fornece acesso conveniente a uma parte específica do subsistema.
Subsistema Complexo: Consiste em vários objetos que trabalham juntos, cuja complexidade é ocultada pela fachada.
Cliente: Interage com o subsistema através da fachada, sem necessidade de entender a complexidade subjacente.
5. Benefícios:

Desacoplamento: Isola o cliente da complexidade do subsistema, promovendo um acoplamento mais fraco.
Manutenibilidade: Facilita a atualização ou substituição do subsistema, já que as mudanças são encapsuladas na fachada.
Escalabilidade: Permite a expansão do subsistema sem afetar os clientes que interagem através da fachada.
6. Exemplo Prático:
   Uma aplicação que carrega vídeos pode usar uma fachada para interagir com uma biblioteca de conversão de vídeo complexa, utilizando apenas a funcionalidade de codificação necessária.

7. Conclusão:
   O padrão Facade é uma ferramenta poderosa para simplificar a interação com subsistemas complexos, promovendo um código mais limpo, eficiente e escalável. É especialmente útil quando se deseja fornecer uma interface clara e concisa para uma parte específica de um sistema mais amplo e complicado.
![facade-book.png](readme-images-architecture%2Ffacade-book.png)

1. Introdução ao Padrão de Fachada e NgRx:
   O padrão de fachada é utilizado para simplificar a interação com subsistemas complexos, fornecendo uma interface pública mais simples. No contexto do Angular, a biblioteca NgRx é frequentemente usada para gerenciar o estado da aplicação, e o padrão de fachada pode ser aplicado para melhorar o acoplamento e simplificar a interação com essa biblioteca.

2. Problema com Acoplamento Forte:
   Sem uma fachada, os componentes de exibição precisam conhecer muitos artefatos NgRx, tornando o código complexo e fortemente acoplado ao gerenciamento de estado NgRx.

3. Solução através da Fachada:
   A fachada agrupa e bloqueia NgRx, mascarando todas as interações internas com Store, actions, reducers, selectors e Effects. Isso simplifica o acesso e a modificação do estado NgRx e reduz a complexidade nas camadas de exibição.

4. Benefícios da Fachada:
   Produtividade do Desenvolvedor: A fachada aumenta a produtividade, fornecendo uma API de fachada pública explícita.
   Componentes de Apresentação: Encoraja a pensar em visualizações como componentes que renderizam dados entregues pelos observáveis do Facade.
   Flexibilidade: Permite mudanças no gerenciamento de estado sem grandes refatorações, afetando apenas a fachada.
5. Component Store e Acoplamento:
   O Component Store é sofisticado para gerenciamento de estado simples, mas o acoplamento forte ao gerenciamento de estado pode ser problemático. A fachada remove esse acoplamento rígido, tornando a transição entre diferentes tecnologias de gerenciamento de estado mais suave.

6. Modelo de Estado vs Modelo de Visualização:
   Imutabilidade: Trabalhar com objetos imutáveis é uma prática recomendada no NgRx.
   Normalização: A normalização de objetos aninhados melhora o desempenho e a manutenção, separando o State Model (armazenamento) do View Model (uso nos componentes).
7. Utilização de NgRx e Signals para Gerenciamento de Estado:
   O projeto utilizará tanto NgRx quanto Signals para o gerenciamento de estado, aproveitando as melhores práticas de programação funcional e imutabilidade. A combinação dessas tecnologias com o padrão de fachada garantirá uma arquitetura robusta, escalável e de alto desempenho.


   A implementação do padrão de fachada em conjunto com NgRx e Signals no projeto Angular oferece uma solução elegante e eficiente para o gerenciamento de estado. Essa abordagem promove um código limpo, desacoplado e fácil de manter, permitindo flexibilidade e escalabilidade no desenvolvimento. É uma estratégia essencial para qualquer desenvolvedor que busca excelência na arquitetura de software.

Este Readme serve como um guia para amigos e colaboradores que desejam entender a estrutura e a arquitetura do projeto, fornecendo uma visão clara e técnica das práticas e padrões adotados.

Recomendo ler esses seguintes artigos, que são excelentes:
https://ng-journal.com/blog/2022-12-19-the-enterprise-monorepo-angular-patterns/

https://ng-journal.com/blog/2023-08-09-nx-and-ngrx/

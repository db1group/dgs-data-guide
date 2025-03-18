---
outline: deep
---

# Modelagem e Arquitetura de Dados

Na DB1, a **modelagem e arquitetura de dados** desempenham um papel fundamental na organização, desempenho e governança dos dados dentro de um ecossistema de processamento. Adotamos boas práticas que garantem flexibilidade, escalabilidade e confiabilidade, permitindo que os dados sejam consumidos de maneira eficiente e estruturada.

A seguir, detalhamos os principais pilares dessa abordagem.

## Desenho de Modelos

A **modelagem eficiente dos dados** é fundamental para garantir não apenas um fluxo de informações bem estruturado e otimizado, mas também para proporcionar flexibilidade e escalabilidade aos sistemas que dependem dessas informações. Ao criar modelos de dados adequados, asseguramos que os dados sejam armazenados de maneira consistente e possam ser acessados e processados com eficiência.

O **desenho de modelos** de dados envolve a definição de entidades, relacionamentos e estruturas que suportam os requisitos de negócios, garantindo que os dados fluam de maneira lógica e coerente. Um bom modelo de dados facilita não apenas a consulta e o processamento rápidos, mas também a integração de novas fontes de dados, a implementação de transformações complexas e a manutenção de dados de forma sustentável ao longo do tempo.

### Documentação 

Além disso, um modelo de dados bem estruturado deve ser acompanhado por uma documentação acessível, que descreva claramente como os dados são gerados, transformados e armazenados. A documentação é uma ferramenta essencial para qualquer equipe que precise compreender o fluxo de dados, como parte de práticas de governança de dados e compliance. Ela também facilita a comunicação entre as partes interessadas, além de ser crucial para a manutenção e evolução do sistema ao longo do tempo.

### Modelagem 

Seguindo boas práticas na modelagem de dados, podemos não apenas otimizar o desempenho do sistema, mas também garantir a qualidade, confiabilidade e integridade dos dados, contribuindo para a tomada de decisões mais informadas e eficientes dentro da organização. Seguimos boas práticas nos seguintes modelos por exemplo:

- **Modelagem Relacional**: Aplicação de normalização para reduzir redundância e garantir integridade e relacionamento dos dados em bancos SQL como **PostgreSQL**, **MySQL** e **SQL Server**.  
<figure>
    <img src="/img/docs/relationship.png" alt="batch">
    <figcaption>Modelagem Relacional.</figcaption>
</figure>  

- **Modelagem Dimensional**: Estruturas otimizadas para análise de dados, utilizando conceitos de **fato** e **dimensão**, aplicáveis em **Snowflake**, **BigQuery**, **Redshift** e **Databricks**.
<figure>
    <img src="/img/docs/star-flake.png" alt="batch">
    <figcaption>Modelagem Dimensional - Star Schema vs Snowflake.</figcaption>
</figure>
  
- **Modelagem Orientada a Eventos ([Event Driven](https://medium.com/parebem-engineering/introdu%C3%A7%C3%A3o-a-arquitetura-orientada-a-eventos-b03e429aac0c))**: Construção de esquemas baseados em eventos, utilizando **Kafka**, **DynamoDB**, **MongoDB** e **EventBridge**.

<figure>
    <img src="/img/docs/event-driven.png" alt="batch">
    <figcaption>Event Driven.</figcaption>
</figure>


## Camadas de Dados

A organização dos dados em camadas estruturadas permite melhor governança, segurança e otimização do desempenho. Na DB1 buscamos utilizar modelos que facilitam o controle de acessos, a padronização dos processos e a escalabilidade da arquitetura em camadas.

### Abordagens de Nomenclatura para Camadas de Dados

#### **Stage, Trusted e Refined**
- **Stage**: Refere-se à camada onde os dados são armazenados logo após a ingestão, sem nenhuma transformação significativa. É como um "raw data" (dados crus), muitas vezes mantidos no formato original e prontos para serem processados.
- **Trusted**: Nesta camada, os dados são validados, limpos e, se necessário, enriquecidos. O objetivo é garantir que os dados sejam confiáveis e precisos, prontos para ser utilizados por sistemas de análise.
- **Refined**: A camada refinada envolve transformações mais avançadas, incluindo agregações, modelos de dados e preparação para análises mais detalhadas, com dados que já estão prontos para gerar insights.

#### **Bronze, Silver e Gold ([Arquitetura Medalion](https://www.databricks.com/br/glossary/medallion-architecture))**
- **Bronze**: Assim como o **stage**, representa dados brutos ou semi-processados, muitas vezes sem grandes transformações.
- **Silver**: Semelhante ao **trusted**, é a camada onde os dados são limpos, validados e transformados para garantir a qualidade e a consistência, muitas vezes com dados mais estruturados e preparados para análises mais específicas.
- **Gold**: É a camada final, onde os dados estão prontos para análises de alto nível, visualizações e insights, com transformações avançadas aplicadas, podendo incluir métricas ou dados agregados.

#### Diferenças principais:
- **Semântica**: A principal diferença é que a abordagem de **stage, trusted e refined** enfatiza mais o processo de transformação e qualidade dos dados, com foco no ciclo de vida dos dados e sua preparação para uso final. A abordagem **bronze, silver e gold** é mais associada à evolução do estado dos dados em um processo progressivo de refinamento e preparação para análises.
  
- **Nível de abstração**: A terminologia **bronze, silver e gold** tende a ser mais intuitiva quando se trata de visualizar o progresso dos dados de uma maneira mais tangível (do "bronze" como algo bruto até o "gold" como algo refinado). A terminologia **stage, trusted e refined** foca mais nas camadas de confiança e refinamento.

Em resumo ambas as abordagens têm o mesmo objetivo de estruturar e classificar as camadas de dados, mas a terminologia **bronze, silver e gold** é mais visual e associada ao conceito de um pipeline de dados progressivo, enquanto **stage, trusted e refined** pode ser mais aplicada a ambientes que priorizam o controle de qualidade e confiança ao longo do processo de dados. Ambas são eficazes, dependendo do foco do time e da cultura de dados da organização.

Cada camada tem um propósito específico, permitindo maior controle e segurança no fluxo de informações.

<figure>
    <img src="/img/docs/medalion.png" alt="batch">
    <figcaption>Arquitetura Medalion. Fonte: <a href="https://www.databricks.com/br/glossary/medallion-architecture">Arquitetura medallion</a></figcaption>
</figure>

## Versionamento de Dados

O versionamento de dados assegura a rastreabilidade e a confiabilidade das informações ao longo do tempo. Utilizamos estratégias como controle de snapshots, logs de mudanças e armazenamento de múltiplas versões para garantir integridade e recuperação eficiente. Exemplo de estratégias que abordamos:

- **[SCD (Slowly Changing Dimensions)](https://www.thoughtspot.com/data-trends/data-modeling/slowly-changing-dimensions-in-data-warehouse)**: Aplicação de estratégias de versionamento para rastreamento de mudanças em bases dimensionais.
- **[Data Lake Versioning](https://medium.com/@prachikushwah/data-versioning-using-time-travel-feature-5a5bde2c5e3)**: Utilização de formatos como **Delta Lake** e **Apache Iceberg** para versionamento eficiente em ambientes distribuídos.
- **[Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel)**: Recursos nativos de bancos como **Snowflake**, **Delta Lake** e **BigQuery** permitem consultar versões anteriores de um dataset.

<figure>
    <img src="/img/docs/time-travel.png" alt="batch">
    <figcaption>Time Travel permite retroceder ou consultar uma versão específica de uma tabela.</figcaption>
</figure>


## Tipos de Arquiteturas de Dados

Na DB1, adotamos diferentes arquiteturas para atender a variados casos de uso dentro dos nossos projetos. Cada arquitetura é escolhida conforme a necessidade de escalabilidade, desempenho, governança e processamento de dados. Dentre as principais, incluem-se:

### Data Lake

O **Data Lake** é uma abordagem flexível para armazenamento de dados brutos e processados, capaz de lidar com grandes volumes e múltiplos formatos (estruturados, semiestruturados e não estruturados).

- **Características:**
  - Armazena dados sem necessidade de estruturação prévia;
  - Suporte a processamento batch e streaming;
  - Integração com ferramentas de Machine Learning e Big Data;
  - Exemplos: **Amazon S3 + Athena, Azure Data Lake, Google Cloud Storage**.

### Data Warehouse

O **Data Warehouse** é um repositório centralizado que armazena dados estruturados de diversas fontes, permitindo análises avançadas e suporte à tomada de decisões.

- **Características:**
  - Modelagem estruturada (ex.: Star Schema, Snowflake Schema);
  - Suporte a consultas complexas e analíticas (OLAP);
  - Alta confiabilidade e governança;
  - Exemplos: **Amazon Redshift, Google BigQuery, Snowflake**.

### Data Lakehouse

O **Data Lakehouse** combina a flexibilidade de um Data Lake com a estrutura e governança de um Data Warehouse, permitindo análises avançadas em um ambiente unificado.

- **Características:**
  - Suporte a processamento de grandes volumes com consultas analíticas eficientes;
  - Governança aprimorada e controle de acesso granular;
  - Exemplos: **Databricks Delta Lake, Apache Iceberg, Apache Hudi**.

---

<figure>
    <img src="/img/docs/lakehouse.png" alt="Data Lakehouse">
    <figcaption>Visão geral das diferentes arquitetura Lake, Warehouse e Lakehouse.</figcaption>
</figure>

### Data Mesh

O **Data Mesh** é uma abordagem descentralizada para gestão de dados, focada em autonomia e escalabilidade organizacional, por se tratar de uma arquitetura moderna, porém complexa, no próximo tópico abordamos mais a fundo os conceitos de Data Mesh separadamente.

- **Características:**
  - Organização baseada em domínios de dados;
  - Governança distribuída e padronizada;
  - Democratização do acesso aos dados;
  - Exemplos: Implementado com ferramentas como **Kafka, Snowflake, Databricks, AWS Glue**.

<!-- <figure>
    <img src="/img/docs/data-mesh.png" alt="Data Mesh">
    <figcaption>Modelo descentralizado de um Data Mesh.</figcaption>
</figure> -->

### Event-Driven Architecture ([EDA](https://medium.com/parebem-engineering/introdu%C3%A7%C3%A3o-a-arquitetura-orientada-a-eventos-b03e429aac0c))

A **Arquitetura Orientada a Eventos** (EDA) permite a comunicação assíncrona entre sistemas, garantindo escalabilidade e processamento em tempo real.

- **Características:**
  - Processamento de eventos em tempo real;
  - Suporte a escalabilidade horizontal;
  - Ideal para sistemas distribuídos e microservices;
  - Exemplos: **Apache Kafka, AWS Kinesis, Google Pub/Sub**.

<figure>
    <img src="/img/docs/kafka-cluster.png" alt="Event-Driven Architecture">
    <figcaption>Exemplo de fluxo baseado em eventos.</figcaption>
</figure>

- **Producer (Produtor)**: É o componente que gera e publica eventos para um sistema de mensageria (como Kafka, RabbitMQ ou SQS). Um produtor pode ser um serviço, aplicação ou sensor que emite dados para serem consumidos posteriormente.

- **Consumer (Consumidor)**: É o componente que escuta e processa os eventos gerados pelo producer. Ele pode armazenar, transformar ou executar ações com base nos dados recebidos.

Na arquitetura orientada a eventos, producers geram eventos que são consumidos de forma assíncrona por consumers, promovendo desacoplamento entre os sistemas, escalabilidade e reatividade em tempo real.

### Lambda Architecture

A **Arquitetura Lambda** combina processamento batch e em tempo real, garantindo baixa latência e consistência de dados.

- **Características:**
  - Camada de velocidade para processamento em tempo real;
  - Camada de batch para reprocessamento e correção de dados;
  - Unificação das camadas para consultas consistentes;
  - Exemplos: **Apache Spark, Hadoop, Kafka, AWS Lambda**.

<figure>
    <img src="/img/docs/lambda.jpg" alt="Lambda Architecture">
    <figcaption>Fluxo da arquitetura Kappa.</figcaption>
</figure>

### Kappa Architecture

A **Arquitetura Kappa** simplifica o processamento de dados ao utilizar um único fluxo contínuo de eventos, eliminando a necessidade de uma camada batch.

- **Características:**
  - Processamento contínuo e unificado;
  - Redução da complexidade operacional;
  - Ideal para sistemas que priorizam eventos em tempo real;
  - Exemplos: **Apache Flink, Kafka Streams, Apache Samza**.

<figure>
    <img src="/img/docs/kappa.jpg" alt="Kappa Architecture">
    <figcaption>Fluxo da arquitetura Kappa.</figcaption>
</figure>

Cada uma dessas arquiteturas tem um papel fundamental na estratégia de dados de uma organização, e a escolha depende dos requisitos de escalabilidade, latência, governança e casos de uso específicos.

## Arquitetura Data Mesh

O **Data Mesh** representa uma abordagem inovadora e descentralizada para o gerenciamento de dados em organizações que lidam com múltiplos domínios de dados. Na DB1 buscamos uma abordagens diferente das tradicionais centralizadas, onde todos os dados são geridos em um único ponto, o Data Mesh foca na **distribuição da responsabilidade** sobre os dados, tratando-os como **produtos** dentro de diferentes domínios de negócio.

Essa abordagem tem como objetivo a **escalabilidade**, **agilidade** e **autonomia** das equipes de dados, permitindo que cada domínio trate seus dados de forma independente e alinhada às necessidades de seu contexto específico, ao mesmo tempo em que promove a **governança federada** para garantir consistência e compliance.

<figure>
    <img src="/img/docs/data-mesh.png" alt="Mesh Architecture">
    <figcaption>Exemplo de Arquitetura Data Mesh abordada pela Microsoft. Fonte: <a href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/architectures/data-mesh-scenario">A Financial Institution Scenario for Data Mesh</a>.</figcaption>
</figure>

### Princípios do Data Mesh

A implementação do Data Mesh se baseia em quatro princípios fundamentais:

#### **Domínios de Dados Descentralizados**
Em vez de centralizar a responsabilidade dos dados em uma única equipe ou sistema, o Data Mesh distribui a gestão dos dados para os **domínios de negócio**. Cada domínio é responsável por gerenciar seus próprios dados de maneira autônoma, garantindo que esses dados atendam às necessidades de seu contexto específico.

<figure>
    <img src="/img/docs/mesh-data-domain.png" alt="Mesh Architecture">
    <figcaption>Data Domain. Fonte: <a href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/architectures/data-mesh-scenario">A Financial Institution Scenario for Data Mesh</a>.</figcaption>
</figure>


#### **Dados como Produto**
Cada domínio deve tratar os dados como **produtos**: isso significa que as equipes são responsáveis pela criação, manutenção e entrega de dados de qualidade para outras partes da organização. A ideia é que os dados sejam fornecidos de forma que sejam facilmente consumíveis por outros usuários e sistemas, com alta qualidade e acessibilidade.

<figure>
    <img src="/img/docs/mesh-data-product.png" alt="Mesh Architecture">
    <figcaption>Data Product. Fonte: <a href="https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/scenarios/cloud-scale-analytics/architectures/data-mesh-scenario">A Financial Institution Scenario for Data Mesh</a>.</figcaption>
</figure>

#### **Plataformas de Autoatendimento**
O Data Mesh enfatiza a criação de plataformas de **autoatendimento**, permitindo que as equipes acessem e integrem dados sem depender de uma infraestrutura centralizada. Ferramentas e frameworks são desenvolvidos para facilitar a ingestão, transformação e análise de dados, permitindo que as equipes de diferentes domínios se conectem de maneira simples e eficiente.

#### **Governança Federada**
Embora o Data Mesh distribua a responsabilidade dos dados entre os domínios, a governança deve ser **federada**, ou seja, a governança é compartilhada entre os domínios, com diretrizes e políticas de controle e qualidade sendo aplicadas de maneira consistente em toda a organização. Isso garante que todos os dados sigam os mesmos princípios de qualidade, segurança e conformidade.

### Benefícios do Data Mesh

#### **Escalabilidade**
Com o Data Mesh, as organizações conseguem escalar suas operações de dados de forma eficiente, adaptando-se às necessidades de diferentes domínios e sem sobrecarregar uma infraestrutura centralizada. Isso resulta em uma capacidade aumentada de lidar com grandes volumes de dados sem comprometimento de desempenho.

#### **Responsabilidade Clara pelos Dados**
A descentralização garante que cada equipe seja a responsável pelos dados que gerencia. Isso leva a um aumento na qualidade dos dados, uma vez que as equipes estão mais alinhadas com os requisitos específicos dos dados de seu domínio e com o impacto direto que eles causam nas operações de negócio.

#### **Maior Agilidade**
As equipes de domínio podem inovar mais rapidamente, pois não precisam depender de uma equipe centralizada para acessar ou transformar os dados. Isso aumenta a capacidade de adaptação às mudanças rápidas no negócio e permite um ciclo de desenvolvimento mais ágil.

### Desafios do Data Mesh

#### **Complexidade na Implementação**
Implementar o Data Mesh pode ser desafiador, especialmente em organizações grandes, onde a integração de múltiplos domínios de dados pode exigir um esforço significativo para coordenar a implementação das práticas de governança, plataformas de autoatendimento e interconexão de sistemas.

#### **Manutenção de Governança e Compliance**
A governança federada, embora potente, pode ser difícil de implementar e manter. Garantir a conformidade com regulamentações e políticas de segurança sem prejudicar a flexibilidade das equipes pode ser uma tarefa complexa, especialmente quando se lida com múltiplos domínios e tecnologias.

### Arquiteturas e Ferramentas para Data Mesh

O sucesso do Data Mesh depende da escolha correta de arquiteturas e ferramentas. Algumas tecnologias que podem ser utilizadas para implementar um Data Mesh incluem:

- **Kubernetes**: Para orquestrar a execução de pipelines de dados de forma distribuída e escalável.
- **Apache Kafka**: Como sistema de mensageria para facilitar a troca de dados entre diferentes domínios e serviços.
- **dbt**: Para modelagem e transformação de dados em uma abordagem modular e reutilizável.
- **Apache Airflow**: Para orquestrar e monitorar pipelines de dados distribuídos.
- **Plataformas em Nuvem (AWS, Azure, GCP)**: Para suportar a infraestrutura distribuída e garantir o armazenamento e processamento de dados de forma escalável.

Essas ferramentas permitem que cada domínio gerencie seus próprios dados de maneira independente, ao mesmo tempo que possibilitam a integração e governança eficiente dos dados em toda a organização.

O Data Mesh oferece uma abordagem inovadora e escalável para organizações que enfrentam desafios relacionados ao gerenciamento de grandes volumes de dados em múltiplos domínios. Embora seja um modelo mais complexo do que as arquiteturas tradicionais, seus benefícios, como escalabilidade, autonomia das equipes e agilidade, fazem com que seja uma opção atraente para empresas que buscam evoluir em suas estratégias de dados.


## Data Contracts

**Data Contracts**, ou "contratos de dados", são acordos entre quem **produz** e quem **consome** informações dentro de uma empresa. Eles servem para garantir que os dados sejam entregues da forma certa, no momento certo, sem causar problemas para outras pessoas ou sistemas que dependem dessas informações.

### Por que isso é importante?

Quando diferentes equipes usam os mesmos dados, é essencial que todos estejam falando a mesma "língua". Os **Data Contracts** ajudam a garantir isso, com base em três pilares principais:

- **Especificação Clara**: define exatamente como os dados devem ser, como tipos, formatos, nomes e regras.
- **Validação Automática**: usamos ferramentas como **Great Expectations** e **dbt tests** para checar automaticamente se os dados estão corretos.
- **Versionamento Seguro**: quando os dados mudam, isso é feito de forma controlada, sem prejudicar quem já usa os dados antigos.

Na **DB1**, usamos Data Contracts para garantir um alinhamento claro entre as equipes que pedem informações e as que desenvolvem as soluções. Isso evita mal-entendidos, retrabalhos e problemas em cadeia.

---

## Como buscamos estruturar dados

Para que as informações estejam sempre disponíveis, confiáveis e prontas para gerar valor, seguimos boas práticas e modernas de modelagem e arquitetura, sendo algumas delas:

- **Data Mesh**: cada time cuida de seus próprios dados como se fossem produtos, promovendo mais autonomia e responsabilidade.
- **Lakehouse**: é uma combinação das vantagens dos data lakes (flexibilidade) com as dos data warehouses (organização e performance).
- **Controle de Versões**: qualquer mudança nos dados é registrada e controlada, para que ninguém seja surpreendido.
- **Qualidade e Governança**: usamos ferramentas que ajudam a organizar, monitorar e manter a qualidade dos dados no dia a dia.

Além das demais arquiteturas e conceitos que abordamos neste documento. Buscamos adaptar modelos e arquiteturas as necessidades de cada projeto. 

Essas práticas fazem parte da nossa jornada para transformar dados em valor real para o negócio — com segurança, escalabilidade e colaboração entre todas as áreas envolvidas.

**Créditos:**
- **[Databricks](https://www.databricks.com/br)**
- **[Amazon Web Services](https://aws.amazon.com/pt/)**
- **[Snowflake](https://www.snowflake.com/)**
- **[Medium](https://medium.com/)**
- **[DBT](https://www.getdbt.com/)**

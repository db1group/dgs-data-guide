---
outline: deep
---

# Jeito DB1

Nosso objetivo neste material é descrever a maneira [DB1](https://www.db1.com.br/) de lidar com dados, ou pelo menos como nossa equipe enxerga esse desafio.

Somos uma empresa orientada a dados e sabemos que eles são fundamentais para a tomada de decisão e para a eficiência operacional. No entanto, não basta apenas ter dados – é essencial que sejam confiáveis, acessíveis e bem estruturados. 

Para isso, criamos um modelo unificado de governança e processamento de dados, garantindo que todas as áreas e projetos sigam um padrão consistente e eficiente.

Antes de entrarmos em detalhes sobre esse modelo, vamos entender por que os dados são tão importantes.


## Dados como Diferencial Competitivo

O que define o sucesso de uma empresa na era digital? Decisões rápidas, precisas e baseadas em evidências. Dados bem geridos nos permitem identificar padrões, antecipar tendências e mitigar riscos.

Mas há um grande desafio: quando diferentes áreas trabalham com dados de formas distintas, surgem problemas como inconsistências, duplicação de esforços e dificuldades na integração das informações. Isso nos leva a processos ineficientes, análises enviesadas e até mesmo falhas estratégicas.

**Governança de Dados na Prática**

Implementar um modelo de governança de dados eficaz é essencial para aumentar a eficiência e a precisão das análises de dados. Observe a escala no modelo de maturidade de governança do Gartner abaixo, com nossas ferramentas e metodologias internas, buscamos fazer uma avaliação inicial e escalonar, progredir para os níveis mais altos dentro de cada projeto.

![Ranges de maturidade](/img/docs/gartner.jpg)
<small>Fonte: https://hitechnectar.com/blogs/data-governance-maturity-models-framework/.</small>

## Nossa Abordagem

Nossos clientes nos contratam para sermos eficientes, e é aí que está o nosso foco.

Acreditamos que a chave está em dois pilares: boas **métricas** de qualidade de dados e a aplicação das melhores práticas nos **processo** e desenvolvimento de pipelines e produtos de dados. Esses dois aspectos estão profundamente interligados.

**Métrica** é o que os dados nos dizem sobre onde devemos concentrar esforços para melhorar a qualidade e eficiência das pipelines. Atualmente, nos baseamos em alguns frameworks para avaliação de um ambiente de dados. Focamos em indicadores essenciais, como:

- **Cobertura de Testes** para garantir validações eficazes nos pipelines;
- **Manutenibilidade** para evitar complexidade excessiva nas transformações;
- **Qualidade e Confiabilidade dos Dados** para assegurar que os dados estejam corretos e atualizados;
- **Segurança e Governança** para controle de acessos, mascaramento e compliance;
- **Monitoramento de SLA e Linhagem de Dados** para rastrear e otimizar a movimentação dos dados.

**Processo** é a forma como desenvolvemos soluções de dados. Parece algo generalista? Parte disso está descrito na seção de "melhores práticas" deste site, mas entendemos esse processo como a maneira de lidar com:
 - **Gestão de ambientes** para orquestrar e automatizar a entrega de pipelines de dados;
 - **Qualidade do código** garantindo boas práticas em desenvolvimento SQL, Spark, Python e outras linguagens utilizadas;
 - **Gerenciamento de testes** para validar integridade, consistência e confiabilidade dos dados;
 - **Monitoramento de dados e pipelines** para garantir a observabilidade, detectar anomalias e evitar falhas em produção;
 - **Infraestrutura como código** para provisionar e escalar ambientes de dados de forma automatizada.

Para gerenciar tudo isso, criamos um produto interno chamado **Data HealthPanel**, que consolida informações sobre a qualidade dos dados, a confiabilidade das pipelines e as métricas das bases que a equipe mantém.

Para manter esse processo funcionando, toda vez que um **engenheiro líder de dados** assume um novo time, uma de suas responsabilidades é garantir a aplicação das melhores práticas aprendidas ao longo dos anos e gerenciar a **saúde técnica das pipelines**. O painel refletirá esse esforço, e nossos engenheiros de dados manterão sua evolução contínua.

## Mas então… como medimos a Saúde Técnica?

A saúde técnica dos dados está diretamente relacionada à sua **maturidade**, que engloba aspectos como qualidade, governança e eficiência ao longo do tempo. Para desenvolver nosso framework, adotamos os fundamentos de renomados frameworks como o **Data Management Body of Knowledge** (DMBOK) e as diretrizes do **Gartner**, assegurando que seguimos as melhores práticas em governança, segurança e gestão de dados em cada projeto.

Utilizamos o **Data HealthPanel** para avaliar a saúde dos nossos dados, baseando-nos em métricas essenciais em diversos níveis, dentro dos seguintes processos:

- **Ingestão de Dados**: Garantimos que os dados sejam capturados de forma eficiente e precisa desde a fonte.
- **Armazenamento e Processamento:** A infraestrutura de dados é robusta e capaz de processar e armazenar informações de maneira eficaz e segura.
- **Qualidade e Governança de Dados**: Os dados mantêm alto nível de qualidade com práticas sólidas de governança para assegurar integridade e conformidade.

Para cada novo projeto ou integração, aplicamos nosso framework para assegurar que as melhores práticas sejam implementadas desde o início. Para cada etapa “concluída” nos processos sugeridos, uma pontuação é atribuída. Permitindo um máximo de 100 pontos para métricas e processos saudáveis.

Finalmente, calculamos a pontuação de saúde do ambiente usando a média desses pilares, sendo responsabilidade dos engenheiros líderes na [DB1](https://www.db1.com.br/) manter essa pontuação o mais alta possível. Ainda contamos com um sistema de "ranges" para identificar projetos e equipes que exigem atenção prioritária:


|   Saúde do Ambiente    |
| :--------------------: |
|     >=80% Saudável     |
| >=60% e <80% Degradado |
|      > 60% Doente      |

### Por Que Isso é Importante?

Dados ruins geram decisões ruins. Decisões ruins resultam em desperdício de tempo, dinheiro e oportunidades. Quando lidamos com dados de forma estruturada, garantimos maior eficiência operacional e criamos um diferencial competitivo real.

Nossa responsabilidade é garantir que os dados sejam um ativo estratégico e não um obstáculo. Por isso, adotamos uma abordagem única e integrada, sempre buscando melhorar e evoluir nossos processos.

Longe do Hype, na [DB1](https://www.db1.com.br/), dados são mais do que números – são a base do nosso sucesso.
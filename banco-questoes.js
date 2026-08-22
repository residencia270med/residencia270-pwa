/* ============================================================
   MED APROVAÇÃO 270+
   BANCO MESTRE
   VERSÃO 3.0
   ------------------------------------------------------------
   ESTRUTURA CENTRAL INTEGRADA DO APLICATIVO

   INCLUI:
   - Instituições
   - Provas
   - Banco único de questões
   - Modelo oficial de questão
   - Árvore Temática Mestre Consolidada
   - Navegação recursiva
   - Desempenho
   - Revisões
   - Plano 270 dias
   - Aprendizagem adaptativa
   - Sistema das 3 IAs
   - Simulados personalizados
   - Geração de dados para PDF
   - Compatibilidade com APP existente

   A árvore possui profundidade ilimitada.
   ============================================================ */


/* ============================================================
   ÁRVORE TEMÁTICA MESTRE CONSOLIDADA
   ============================================================ */

const ARVORE_TEMATICA_MESTRE = {

  tipo: "ARVORE_MESTRE_RECURSIVA",

  regraNavegacao: {
    seta: "Existe uma próxima camada navegável",
    semSeta: "Nó terminal na tela documentada",
    profundidadeMaxima: null,
    navegacaoPorToque: true,
    breadcrumb: true,
    retornoPorNivel: true
  },

  raiz: {

    id: "raiz",
    nome: "Med Aprovação 270+",
    tipo: "raiz",
    parentId: null,
    ordem: 0,
    navegavel: true,

    filhos: [

      /* ======================================================
         CLÍNICA MÉDICA
         ====================================================== */

      {
        id: "clinica-medica",
        nome: "Clínica Médica",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 1,
        navegavel: true,

        filhos: [

          {
            id: "cardiologia",
            nome: "Cardiologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "dermatologia",
            nome: "Dermatologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "endocrinologia",
            nome: "Endocrinologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "gastroenterologia",
            nome: "Gastroenterologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "hepatologia",
            nome: "Hepatologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 5,
            navegavel: true,
            filhos: []
          },

          {
            id: "hematologia",
            nome: "Hematologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 6,
            navegavel: true,
            filhos: []
          },

          {
            id: "infectologia",
            nome: "Infectologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 7,
            navegavel: true,

            filhos: [

              {
                id: "infectologia-parasitoses",
                nome: "Parasitoses",
                tipo: "tema",
                parentId: "infectologia",
                ordem: 1,
                navegavel: true,

                filhos: [

                  {
                    id: "sindrome-loffler",
                    nome: "Síndrome de Löffler",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 1,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "ascaridiase",
                    nome: "Ascaridíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 2,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "ancilostomiase",
                    nome: "Ancilostomíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 3,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "estrongiloidiase",
                    nome: "Estrongiloidíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 4,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "enterobiase",
                    nome: "Enterobíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 5,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "tricoariase",
                    nome: "Tricuríase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 6,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "toxocariase",
                    nome: "Toxocaríase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 7,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "teniase",
                    nome: "Teníase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 8,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "cisticercose",
                    nome: "Cisticercose",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 9,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "amebiase",
                    nome: "Amebíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 10,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "giardiase",
                    nome: "Giardíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 11,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "filariose",
                    nome: "Filariose",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 12,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "himenolepiase",
                    nome: "Himenolepíase",
                    tipo: "subtema",
                    parentId: "infectologia-parasitoses",
                    ordem: 13,
                    navegavel: true,
                    filhos: []
                  }
                ]
              }
            ]
          },

          {
            id: "nefrologia",
            nome: "Nefrologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 8,
            navegavel: true,
            filhos: []
          },

          {
            id: "neurologia",
            nome: "Neurologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 9,
            navegavel: true,
            filhos: []
          },

          {
            id: "pneumologia",
            nome: "Pneumologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 10,
            navegavel: true,
            filhos: []
          },

          {
            id: "reumatologia",
            nome: "Reumatologia",
            tipo: "especialidade",
            parentId: "clinica-medica",
            ordem: 11,
            navegavel: true,

            filhos: [

              {
                id: "amiloidose",
                nome: "Amiloidose",
                tipo: "tema",
                parentId: "reumatologia",
                ordem: 1,
                navegavel: true,

                filhos: [

                  {
                    id: "amiloidose-epidemiologia",
                    nome: "Epidemiologia",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-etiopatogenia",
                    nome: "Etiopatogenia",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-manifestacoes",
                    nome: "Manifestações clínicas",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-exames",
                    nome: "Exames complementares",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 4,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-diagnostico",
                    nome: "Diagnóstico",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 5,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-tratamento",
                    nome: "Tratamento",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 6,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amiloidose-prognostico",
                    nome: "Prognóstico",
                    tipo: "subtema",
                    parentId: "amiloidose",
                    ordem: 7,
                    navegavel: false,
                    filhos: []
                  }
                ]
              }
            ]
          }
        ]
      },


      /* ======================================================
         MEDICINA PREVENTIVA
         ====================================================== */

      {
        id: "medicina-preventiva",
        nome: "Medicina Preventiva",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 2,
        navegavel: true,

        filhos: [

          {
            id: "sus",
            nome: "Sistema Único de Saúde (SUS)",
            tipo: "tema",
            parentId: "medicina-preventiva",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "medicina-familia-comunidade",
            nome: "Medicina de Família e Comunidade",
            tipo: "tema",
            parentId: "medicina-preventiva",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "epidemiologia",
            nome: "Epidemiologia",
            tipo: "tema",
            parentId: "medicina-preventiva",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "etica-medica",
            nome: "Ética Médica",
            tipo: "tema",
            parentId: "medicina-preventiva",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "saude-trabalhador",
            nome: "Saúde do Trabalhador",
            tipo: "tema",
            parentId: "medicina-preventiva",
            ordem: 5,
            navegavel: true,
            filhos: []
          }
        ]
      },


      /* ======================================================
         GINECOLOGIA
         ====================================================== */

      {
        id: "ginecologia",
        nome: "Ginecologia",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 3,
        navegavel: true,

        filhos: [

          {
            id: "ginecologia-basica",
            nome: "Ginecologia básica",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 1,
            navegavel: true,

            filhos: [

              {
                id: "anatomia-trato-genital-feminino",
                nome: "Anatomia do trato genital feminino",
                tipo: "tema",
                parentId: "ginecologia-basica",
                ordem: 1,
                navegavel: true,
                filhos: []
              },

              {
                id: "embriologia-trato-genital-feminino",
                nome: "Embriologia do trato genital feminino",
                tipo: "tema",
                parentId: "ginecologia-basica",
                ordem: 2,
                navegavel: true,
                filhos: []
              },

              {
                id: "ciclo-menstrual",
                nome: "Ciclo menstrual",
                tipo: "tema",
                parentId: "ginecologia-basica",
                ordem: 3,
                navegavel: true,

                filhos: [

                  {
                    id: "ciclo-conceitos",
                    nome: "Conceitos",
                    tipo: "subtema",
                    parentId: "ciclo-menstrual",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "ciclo-fases",
                    nome: "Fases do ciclo menstrual",
                    tipo: "subtema",
                    parentId: "ciclo-menstrual",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "endocrinologia-reprodutiva",
                    nome: "Endocrinologia reprodutiva",
                    tipo: "subtema",
                    parentId: "ciclo-menstrual",
                    ordem: 3,
                    navegavel: true,

                    filhos: [

                      {
                        id: "hipotalamo",
                        nome: "Hipotálamo",
                        tipo: "subnivel",
                        parentId: "endocrinologia-reprodutiva",
                        ordem: 1,
                        navegavel: true,
                        filhos: []
                      },

                      {
                        id: "hipofise",
                        nome: "Hipófise",
                        tipo: "subnivel",
                        parentId: "endocrinologia-reprodutiva",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "ovarios",
                        nome: "Ovários",
                        tipo: "subnivel",
                        parentId: "endocrinologia-reprodutiva",
                        ordem: 3,
                        navegavel: true,
                        filhos: []
                      }
                    ]
                  },

                  {
                    id: "fisiologia-ciclo-menstrual",
                    nome: "Fisiologia do ciclo menstrual",
                    tipo: "subtema",
                    parentId: "ciclo-menstrual",
                    ordem: 4,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "acoes-estrogenio-progesterona",
                    nome: "Ações do estrogênio e progesterona em outros órgãos",
                    tipo: "subtema",
                    parentId: "ciclo-menstrual",
                    ordem: 5,
                    navegavel: true,
                    filhos: []
                  }
                ]
              }
            ]
          },

          {
            id: "ginecologia-geral",
            nome: "Ginecologia geral",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 2,
            navegavel: true,

            filhos: [

              {
                id: "miomatose-uterina",
                nome: "Miomatose uterina",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 1,
                navegavel: true,
                filhos: []
              },

              {
                id: "adenomiose",
                nome: "Adenomiose",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 2,
                navegavel: true,
                filhos: []
              },

              {
                id: "polipos-uterinos",
                nome: "Pólipos uterinos",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 3,
                navegavel: true,
                filhos: []
              },

              {
                id: "endometriose",
                nome: "Endometriose",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 4,
                navegavel: true,
                filhos: []
              },

              {
                id: "abdome-agudo-ginecologia",
                nome: "Abdome agudo em ginecologia",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 5,
                navegavel: true,
                filhos: []
              },

              {
                id: "dismenorreia",
                nome: "Dismenorreia",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 6,
                navegavel: true,
                filhos: []
              },

              {
                id: "dor-pelvica-cronica",
                nome: "Dor pélvica crônica",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 7,
                navegavel: true,
                filhos: []
              },

              {
                id: "violencia-sexual",
                nome: "Atendimento à vítima de violência sexual",
                tipo: "tema",
                parentId: "ginecologia-geral",
                ordem: 8,
                navegavel: true,
                filhos: []
              }
            ]
          },

          {
            id: "ginecologia-endocrina",
            nome: "Ginecologia endócrina",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "infeccoes-ginecologia",
            nome: "Infecções em ginecologia",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "oncologia-ginecologica",
            nome: "Oncologia ginecológica",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 5,
            navegavel: true,
            filhos: []
          },

          {
            id: "mastologia",
            nome: "Mastologia",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 6,
            navegavel: true,
            filhos: []
          },

          {
            id: "uroginecologia",
            nome: "Uroginecologia",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 7,
            navegavel: true,
            filhos: []
          },

          {
            id: "sexualidade",
            nome: "Sexualidade",
            tipo: "especialidade",
            parentId: "ginecologia",
            ordem: 8,
            navegavel: true,

            filhos: [

              {
                id: "sexualidade-classificacao",
                nome: "Classificação",
                tipo: "tema",
                parentId: "sexualidade",
                ordem: 1,
                navegavel: false,

                filhos: [

                  {
                    id: "desejo-sexual-hipoativo",
                    nome: "Desejo sexual hipoativo",
                    tipo: "subtema",
                    parentId: "sexualidade-classificacao",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "transtorno-orgasmo",
                    nome: "Transtorno do orgasmo",
                    tipo: "subtema",
                    parentId: "sexualidade-classificacao",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "vaginismo",
                    nome: "Vaginismo",
                    tipo: "subtema",
                    parentId: "sexualidade-classificacao",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dispareunia",
                    nome: "Dispareunia",
                    tipo: "subtema",
                    parentId: "sexualidade-classificacao",
                    ordem: 4,
                    navegavel: false,
                    filhos: []
                  }
                ]
              }
            ]
          }
        ]
      },


      /* ======================================================
         OBSTETRÍCIA
         ====================================================== */

      {
        id: "obstetricia",
        nome: "Obstetrícia",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 4,
        navegavel: true,

        filhos: [

          {
            id: "obstetricia-fisiologica",
            nome: "Obstetrícia fisiológica",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "pre-natal",
            nome: "Pré-natal",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "parto",
            nome: "Parto",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "puerperio",
            nome: "Puerpério",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "intercorrencias-obstetricas",
            nome: "Intercorrências obstétricas / obstetrícia patológica",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 5,
            navegavel: true,
            filhos: []
          },

          {
            id: "doencas-associadas-gestacao",
            nome: "Doenças associadas à gestação",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 6,
            navegavel: true,

            filhos: [

              {
                id: "dhpn",
                nome: "Doença hemolítica perinatal (DHPN)",
                tipo: "tema",
                parentId: "doencas-associadas-gestacao",
                ordem: 1,
                navegavel: true,

                filhos: [

                  {
                    id: "dhpn-definicao",
                    nome: "Definição",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dhpn-fisiopatologia",
                    nome: "Fisiopatologia",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dhpn-etiologia",
                    nome: "Etiologia",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "sistema-eritrocitario",
                    nome: "O sistema eritrocitário",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 4,
                    navegavel: true,

                    filhos: [

                      {
                        id: "sistema-rh",
                        nome: "O sistema Rh",
                        tipo: "subnivel",
                        parentId: "sistema-eritrocitario",
                        ordem: 1,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "sistema-abo",
                        nome: "O sistema ABO",
                        tipo: "subnivel",
                        parentId: "sistema-eritrocitario",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "antigenos-atipicos",
                        nome: "Antígenos atípicos",
                        tipo: "subnivel",
                        parentId: "sistema-eritrocitario",
                        ordem: 3,
                        navegavel: false,
                        filhos: []
                      }
                    ]
                  },

                  {
                    id: "dhpn-diagnostico",
                    nome: "Diagnóstico",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 5,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dhpn-tratamento",
                    nome: "Tratamento",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 6,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dhpn-prevencao",
                    nome: "Prevenção",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 7,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "dhpn-acompanhamento-neonatal",
                    nome: "Acompanhamento neonatal",
                    tipo: "subtema",
                    parentId: "dhpn",
                    ordem: 8,
                    navegavel: false,
                    filhos: []
                  }
                ]
              },

              {
                id: "morte-fetal-obito-fetal",
                nome: "Morte fetal / Óbito fetal (OF)",
                tipo: "tema",
                parentId: "doencas-associadas-gestacao",
                ordem: 2,
                navegavel: true,
                filhos: []
              }
            ]
          },

          {
            id: "medicina-fetal",
            nome: "Medicina fetal",
            tipo: "especialidade",
            parentId: "obstetricia",
            ordem: 7,
            navegavel: true,

            filhos: [

              {
                id: "procedimentos-invasivos-medicina-fetal",
                nome: "Procedimentos invasivos em medicina fetal",
                tipo: "tema",
                parentId: "medicina-fetal",
                ordem: 1,
                navegavel: false,

                filhos: [

                  {
                    id: "biopsia-vilo",
                    nome: "Biópsia de vilo",
                    tipo: "subtema",
                    parentId: "procedimentos-invasivos-medicina-fetal",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "amniocentese",
                    nome: "Amniocentese",
                    tipo: "subtema",
                    parentId: "procedimentos-invasivos-medicina-fetal",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "cordocentese",
                    nome: "Cordocentese",
                    tipo: "subtema",
                    parentId: "procedimentos-invasivos-medicina-fetal",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  }
                ]
              }
            ]
          }
        ]
      },


      /* ======================================================
         PEDIATRIA
         ====================================================== */

      {
        id: "pediatria",
        nome: "Pediatria",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 5,
        navegavel: true,

        filhos: [

          {
            id: "puericultura",
            nome: "Puericultura",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "pneumologia-pediatrica",
            nome: "Pneumologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "infectologia-pediatrica",
            nome: "Infectologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "cardiologia-pediatrica",
            nome: "Cardiologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "gastrologia-pediatrica",
            nome: "Gastrologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 5,
            navegavel: true,
            filhos: []
          },

          {
            id: "hematologia-pediatrica",
            nome: "Hematologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 6,
            navegavel: true,
            filhos: []
          },

          {
            id: "nefrologia-pediatrica",
            nome: "Nefrologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 7,
            navegavel: true,
            filhos: []
          },

          {
            id: "neuropediatria",
            nome: "Neuropediatria",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 8,
            navegavel: false,
            filhos: []
          },

          {
            id: "reumatologia-pediatrica",
            nome: "Reumatologia Pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 9,
            navegavel: true,
            filhos: []
          },

          {
            id: "endocrinologia-pediatrica",
            nome: "Endocrinologia pediátrica",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 10,
            navegavel: true,
            filhos: []
          },

          {
            id: "emergencias-pediatricas",
            nome: "Emergências Pediátricas",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 11,
            navegavel: true,
            filhos: []
          },

          {
            id: "neonatologia",
            nome: "Neonatologia",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 12,
            navegavel: true,
            filhos: []
          },

          {
            id: "maus-tratos",
            nome: "Maus tratos à crianças e adolescentes",
            tipo: "especialidade",
            parentId: "pediatria",
            ordem: 13,
            navegavel: true,
            filhos: []
          }
        ]
      },


      /* ======================================================
         CIRURGIA
         ====================================================== */

      {
        id: "cirurgia",
        nome: "Cirurgia",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 6,
        navegavel: true,

        filhos: [

          {
            id: "avaliacao-pre-operatoria",
            nome: "Avaliação Pré-Operatória",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "principios-anestesiologia",
            nome: "Princípios da Anestesiologia",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "remit",
            nome: "Resposta Endócrino-Metabólica-Inflamatória ao Trauma (REMIT)",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "nutricao-cirurgia",
            nome: "Nutrição em Cirurgia e Recuperação Pós-Operatória",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 4,
            navegavel: true,
            filhos: []
          },

          {
            id: "complicacoes-pos-operatorias",
            nome: "Complicações Pós-Operatórias",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 5,
            navegavel: true,
            filhos: []
          },

          {
            id: "cicatrizacao-feridas",
            nome: "Cicatrização de Feridas",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 6,
            navegavel: true,
            filhos: []
          },

          {
            id: "temas-gerais-cirurgia",
            nome: "Temas Gerais em Cirurgia",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 7,
            navegavel: true,
            filhos: []
          },

          {
            id: "hernias-parede-abdominal",
            nome: "Hérnias da Parede Abdominal",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 8,
            navegavel: true,
            filhos: []
          },

          {
            id: "trauma",
            nome: "Trauma",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 9,
            navegavel: true,
            filhos: []
          },

          {
            id: "queimaduras-trauma-eletrico",
            nome: "Queimaduras e Trauma Elétrico",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 10,
            navegavel: true,
            filhos: []
          },

          {
            id: "urgencias-abdominais",
            nome: "Urgências Abdominais",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 11,
            navegavel: true,
            filhos: []
          },

          {
            id: "cirurgia-bariatrica-metabolica",
            nome: "Cirurgia Bariátrica e Metabólica",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 12,
            navegavel: true,
            filhos: []
          },

          {
            id: "vesicula-vias-biliares",
            nome: "Vesícula e Vias Biliares",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 13,
            navegavel: true,
            filhos: []
          },

          {
            id: "ostomias-intestinais",
            nome: "Ostomias Intestinais",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 14,
            navegavel: true,
            filhos: []
          },

          {
            id: "megacolon-adquirido",
            nome: "Megacólon Adquirido",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 15,
            navegavel: true,
            filhos: []
          },

          {
            id: "proctologia",
            nome: "Proctologia",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 16,
            navegavel: true,
            filhos: []
          },

          {
            id: "cirurgia-infantil",
            nome: "Cirurgia Infantil",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 17,
            navegavel: true,
            filhos: []
          },

          {
            id: "cirurgia-vascular",
            nome: "Cirurgia Vascular",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 18,
            navegavel: true,
            filhos: []
          },

          {
            id: "urologia",
            nome: "Urologia",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 19,
            navegavel: true,
            filhos: []
          },

          {
            id: "cirurgia-plastica",
            nome: "Cirurgia Plástica",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 20,
            navegavel: true,
            filhos: []
          },

          {
            id: "cirurgia-toracica",
            nome: "Cirurgia Torácica",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 21,
            navegavel: true,
            filhos: []
          },

          {
            id: "cabeca-pescoco",
            nome: "Cirurgia de Cabeça e Pescoço",
            tipo: "tema",
            parentId: "cirurgia",
            ordem: 22,
            navegavel: true,
            filhos: []
          }
        ]
      },


      /* ======================================================
         OUTROS
         ESCOPO OFICIAL: QUATRO ÁREAS
         ====================================================== */

      {
        id: "outros",
        nome: "Outros",
        tipo: "grande-area",
        parentId: "raiz",
        ordem: 7,
        navegavel: true,

        filhos: [

          {
            id: "oftalmologia",
            nome: "Oftalmologia",
            tipo: "especialidade",
            parentId: "outros",
            ordem: 1,
            navegavel: true,
            filhos: []
          },

          {
            id: "ortopedia",
            nome: "Ortopedia",
            tipo: "especialidade",
            parentId: "outros",
            ordem: 2,
            navegavel: true,
            filhos: []
          },

          {
            id: "otorrinolaringologia",
            nome: "Otorrinolaringologia",
            tipo: "especialidade",
            parentId: "outros",
            ordem: 3,
            navegavel: true,
            filhos: []
          },

          {
            id: "psiquiatria",
            nome: "Psiquiatria",
            tipo: "especialidade",
            parentId: "outros",
            ordem: 4,
            navegavel: true,

            filhos: [

              {
                id: "dependencia-quimica",
                nome: "Dependência Química",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 1,
                navegavel: true,

                filhos: [

                  {
                    id: "introducao-conceitos-fundamentais",
                    nome: "Introdução e Conceitos Fundamentais",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "alcool",
                    nome: "Álcool",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 2,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "hipnossedativos",
                    nome: "Hipnossedativos",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 3,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "opioides",
                    nome: "Opioides",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 4,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "estimulantes",
                    nome: "Estimulantes",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 5,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "tabaco",
                    nome: "Tabaco",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 6,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "maconha",
                    nome: "Maconha",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 7,
                    navegavel: true,

                    filhos: [

                      {
                        id: "dependencia-maconha",
                        nome: "Dependência de Maconha",
                        tipo: "subnivel",
                        parentId: "maconha",
                        ordem: 1,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "abstinencia-maconha",
                        nome: "Abstinência de Maconha",
                        tipo: "subnivel",
                        parentId: "maconha",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "intoxicacao-maconha",
                        nome: "Intoxicação por Maconha",
                        tipo: "subnivel",
                        parentId: "maconha",
                        ordem: 3,
                        navegavel: false,
                        filhos: []
                      }
                    ]
                  },

                  {
                    id: "alucinogenos",
                    nome: "Alucinógenos",
                    tipo: "subtema",
                    parentId: "dependencia-quimica",
                    ordem: 8,
                    navegavel: true,
                    filhos: []
                  }
                ]
              },

              {
                id: "transtornos-do-humor",
                nome: "Transtornos do Humor",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 2,
                navegavel: true,
                filhos: []
              },

              {
                id: "transtornos-ansiosos",
                nome: "Transtornos Ansiosos",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 3,
                navegavel: true,
                filhos: []
              },

              {
                id: "transtorno-psicoticos",
                nome: "Transtorno Psicóticos",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 4,
                navegavel: true,
                filhos: []
              },

              {
                id: "intoxicacoes-exogenas",
                nome: "Intoxicações Exógenas",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 5,
                navegavel: true,
                filhos: []
              },

              {
                id: "psiquiatria-infantil",
                nome: "Psiquiatria Infantil",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 6,
                navegavel: true,
                filhos: []
              },

              {
                id: "transtorno-alimentares",
                nome: "Transtorno Alimentares",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 7,
                navegavel: true,
                filhos: []
              },

              {
                id: "transtornos-personalidade",
                nome: "Transtornos de Personalidade",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 8,
                navegavel: true,
                filhos: []
              },

              {
                id: "psicofarmacologia",
                nome: "Psicofarmacologia",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 9,
                navegavel: true,
                filhos: []
              },

              {
                id: "toc",
                nome: "Transtorno Obsessivo-Compulsivo (TOC)",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 10,
                navegavel: true,
                filhos: []
              },

              {
                id: "transtornos-somaticos",
                nome: "Transtornos Somáticos",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 11,
                navegavel: true,

                filhos: [

                  {
                    id: "transtorno-sintomas-somaticos",
                    nome: "Transtorno dos Sintomas Somáticos",
                    tipo: "subtema",
                    parentId: "transtornos-somaticos",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "transtorno-facticio-munchhausen",
                    nome: "Transtorno Factício - Munchhausen",
                    tipo: "subtema",
                    parentId: "transtornos-somaticos",
                    ordem: 2,
                    navegavel: true,

                    filhos: [

                      {
                        id: "facticio-imposto-outro",
                        nome: "Transtorno Factício imposto a outro",
                        tipo: "subnivel",
                        parentId: "transtorno-facticio-munchhausen",
                        ordem: 1,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "simulacao",
                        nome: "Simulação",
                        tipo: "subnivel",
                        parentId: "transtorno-facticio-munchhausen",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      }
                    ]
                  },

                  {
                    id: "transtornos-conversivos",
                    nome: "Transtornos Conversivos",
                    tipo: "subtema",
                    parentId: "transtornos-somaticos",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "transtornos-dissociativos",
                    nome: "Transtornos Dissociativos",
                    tipo: "subtema",
                    parentId: "transtornos-somaticos",
                    ordem: 4,
                    navegavel: true,

                    filhos: [

                      {
                        id: "amnesia-dissociativa",
                        nome: "Amnésia Dissociativa",
                        tipo: "subnivel",
                        parentId: "transtornos-dissociativos",
                        ordem: 1,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "transtorno-dissociativo-identidade",
                        nome: "Transtorno Dissociativo de Identidade",
                        tipo: "subnivel",
                        parentId: "transtornos-dissociativos",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "despersonalizacao-desrealizacao",
                        nome: "Transtorno de Despersonalização e Desrealização",
                        tipo: "subnivel",
                        parentId: "transtornos-dissociativos",
                        ordem: 3,
                        navegavel: false,
                        filhos: []
                      }
                    ]
                  },

                  {
                    id: "traumas-estressores",
                    nome: "Transtornos Relacionados a Traumas e Estressores",
                    tipo: "subtema",
                    parentId: "transtornos-somaticos",
                    ordem: 5,
                    navegavel: true,

                    filhos: [

                      {
                        id: "tept",
                        nome: "Transtorno do Estresse Pós-Traumático (TEPT)",
                        tipo: "subnivel",
                        parentId: "traumas-estressores",
                        ordem: 1,
                        navegavel: false,
                        filhos: []
                      },

                      {
                        id: "reacao-aguda-estresse",
                        nome: "Reação Aguda ao Estresse",
                        tipo: "subnivel",
                        parentId: "traumas-estressores",
                        ordem: 2,
                        navegavel: false,
                        filhos: []
                      }
                    ]
                  }
                ]
              },

              {
                id: "psicopatologia-eem",
                nome: "Psicopatologia e Exame do Estado Mental (EEM)",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 12,
                navegavel: true,

                filhos: [

                  {
                    id: "introducao-psicopatologia",
                    nome: "Introdução",
                    tipo: "subtema",
                    parentId: "psicopatologia-eem",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "semiologia-psiquiatrica",
                    nome: "Semiologia Psiquiátrica",
                    tipo: "subtema",
                    parentId: "psicopatologia-eem",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "entrevista-psiquiatrica",
                    nome: "Entrevista Psiquiátrica",
                    tipo: "subtema",
                    parentId: "psicopatologia-eem",
                    ordem: 3,
                    navegavel: false,
                    filhos: []
                  }
                ]
              },

              {
                id: "reforma-psiquiatrica",
                nome: "Reforma Psiquiátrica e Psiquiatria Social",
                tipo: "tema",
                parentId: "psiquiatria",
                ordem: 13,
                navegavel: true,

                filhos: [

                  {
                    id: "saude-mental-brasil",
                    nome: "A Saúde Mental no Brasil",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 1,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "reforma-psiquiatrica-brasileira",
                    nome: "Reforma Psiquiátrica Brasileira",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 2,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "lei-10216",
                    nome: "Lei 10.216 de 6 de abril de 2001 - \"Lei Antimanicomial\"",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 3,
                    navegavel: true,
                    filhos: []
                  },

                  {
                    id: "nova-politica-saude-mental",
                    nome: "Nova Política Nacional de Saúde Mental",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 4,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "raps",
                    nome: "Rede de Atenção Psicossocial (RAPS)",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 5,
                    navegavel: false,
                    filhos: []
                  },

                  {
                    id: "caps",
                    nome: "Centro de Atenção Psicossocial (CAPS)",
                    tipo: "subtema",
                    parentId: "reforma-psiquiatrica",
                    ordem: 6,
                    navegavel: false,
                    filhos: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};


/* ============================================================
   BANCO MESTRE
   ============================================================ */

const BANCO_MESTRE = {

  versao: "3.0",

  aplicativo: "Med Aprovação 270+",


  /* ==========================================================
     INSTITUIÇÕES
     ========================================================== */

  instituicoes: [

    {
      id: "usp-sp",
      nome: "USP-SP",
      status: "incorporada"
    },

    {
      id: "iamspe",
      nome: "IAMSPE",
      status: "incorporada"
    }
  ],


  /* ==========================================================
     PROVAS
     ========================================================== */

  provas: [

    {
      id: "usp-sp-2022",
      instituicaoId: "usp-sp",
      ano: 2022,
      status: "fechada"
    },

    {
      id: "usp-sp-2023",
      instituicaoId: "usp-sp",
      ano: 2023,
      status: "fechada"
    },

    {
      id: "usp-sp-2024",
      instituicaoId: "usp-sp",
      ano: 2024,
      status: "fechada"
    },

    {
      id: "usp-sp-2025",
      instituicaoId: "usp-sp",
      ano: 2025,
      status: "fechada"
    },

    {
      id: "usp-sp-2026",
      instituicaoId: "usp-sp",
      ano: 2026,
      status: "fechada"
    },

    {
      id: "iamspe-2022",
      instituicaoId: "iamspe",
      ano: 2022,
      status: "fechada"
    },

    {
      id: "iamspe-2023",
      instituicaoId: "iamspe",
      ano: 2023,
      status: "fechada"
    },

    {
      id: "iamspe-2024",
      instituicaoId: "iamspe",
      ano: 2024,
      status: "fechada"
    },

    {
      id: "iamspe-2025",
      instituicaoId: "iamspe",
      ano: 2025,
      status: "fechada"
    },

    {
      id: "iamspe-2026",
      instituicaoId: "iamspe",
      ano: 2026,
      status: "fechada"
    }
  ],


  /* ==========================================================
     BANCO ÚNICO DE QUESTÕES
     ========================================================== */

  questoes: [],


  /* ==========================================================
     MODELO OFICIAL DE QUESTÃO
     ========================================================== */

  modeloQuestao: {

    id: null,

    provaId: null,
    instituicaoId: null,
    ano: null,
    numero: null,

    areaId: null,
    especialidadeId: null,
    temaId: null,
    subtemaId: null,
    noArvoreId: null,

    enunciado: null,

    imagem: null,
    midias: [],

    alternativas: [

      {
        letra: "A",
        texto: "",
        justificativa: ""
      },

      {
        letra: "B",
        texto: "",
        justificativa: ""
      },

      {
        letra: "C",
        texto: "",
        justificativa: ""
      },

      {
        letra: "D",
        texto: "",
        justificativa: ""
      },

      {
        letra: "E",
        texto: "",
        justificativa: ""
      }
    ],

    gabaritoOficial: null,

    dificuldade: null,

    justificativaCorreta: null,

    analiseAlternativas: [],

    resolucaoPedagogica: null,

    pontoChave: null,

    fonte: null,

    validacao: null,

    status: "ativa"
  },


  /* ==========================================================
     ÁRVORE TEMÁTICA MESTRE
     ========================================================== */

  arvoreTematica: ARVORE_TEMATICA_MESTRE,


  /* ==========================================================
     ÁREAS PRINCIPAIS
     ========================================================== */

  areas: [

    {
      id: "clinica-medica",
      nome: "Clínica Médica"
    },

    {
      id: "medicina-preventiva",
      nome: "Medicina Preventiva"
    },

    {
      id: "ginecologia",
      nome: "Ginecologia"
    },

    {
      id: "obstetricia",
      nome: "Obstetrícia"
    },

    {
      id: "pediatria",
      nome: "Pediatria"
    },

    {
      id: "cirurgia",
      nome: "Cirurgia"
    },

    {
      id: "outros",
      nome: "Outros"
    }
  ],


  /* ==========================================================
     FILTROS
     ========================================================== */

  filtros: {

    instituicaoId: null,

    ano: null,

    finalidade: null,

    banca: null,

    areaId: null,

    especialidadeId: null,

    temaId: null,

    subtemaId: null,

    noArvoreId: null,

    dificuldade: null,

    status: null
  },


  /* ==========================================================
     DESEMPENHO DO USUÁRIO
     ========================================================== */

  desempenho: {

    questoesRespondidas: 0,

    questoesAcertadas: 0,

    questoesErradas: 0,

    percentualGeral: 0,

    porInstituicao: {},

    porArea: {},

    porEspecialidade: {},

    porTema: {},

    porSubtema: {},

    historico: []
  },


  /* ==========================================================
     CENTRAL DE REVISÕES
     ========================================================== */

  revisoes: {

    pendentes: [],

    concluidas: [],

    prioridades: []
  },


  /* ==========================================================
     PLANO DOS 270 DIAS
     ========================================================== */

  plano270: {

    ativo: false,

    diaAtual: 0,

    totalDias: 270,

    metaQuestoesDia: 60,

    questoesDoDia: [],

    concluidoHoje: false,

    historico: []
  },


  /* ==========================================================
     APRENDIZAGEM ADAPTATIVA
     ========================================================== */

  aprendizagemAdaptativa: {

    ativa: true,

    pontosFortes: [],

    pontosFracos: [],

    temasPrioritarios: [],

    subtemasPrioritarios: [],

    dificuldadeRecomendada: null,

    historicoDecisoes: []
  },


  /* ==========================================================
     SISTEMA DAS 3 IAs
     ========================================================== */

  inteligenciaArtificial: {

    IA1: {

      id: "ia-1",

      ativa: false,

      funcao: "analise"
    },

    IA2: {

      id: "ia-2",

      ativa: false,

      funcao: "adaptacao"
    },

    IA3: {

      id: "ia-3",

      ativa: false,

      funcao: "estrategia"
    }
  },


  /* ==========================================================
     SIMULADOS PERSONALIZADOS
     ========================================================== */

  simulados: {

    criados: [],

    atual: null,

    configuracaoPadrao: {

      quantidade: null,

      instituicoes: [],

      anos: [],

      provas: [],

      areas: [],

      especialidades: [],

      temas: [],

      subtemas: [],

      dificuldades: [],

      incluirRespondidas: true,

      incluirErradas: true,

      incluirAcertadas: true,

      apenasNaoRespondidas: false,

      embaralharQuestoes: true,

      embaralharAlternativas: false
    }
  },


  /* ==========================================================
     CHECKPOINT MESTRE
     ========================================================== */

  checkpointMestre: {

    provasIncorporadas: [],

    totalQuestoesDocumentais: 0,

    totalQuestoesAtivas: 0,

    totalQuestoesExcluidas: 0,

    arvoreConsolidada: true,

    clinicaMedica: "fechada",

    medicinaPreventiva: "fechada",

    ginecologia: "fechada",

    obstetricia: "fechada",

    pediatria: "fechada",

    cirurgia: "fechada",

    outros: "fechado",

    ultimaAtualizacao: null
  }
};


/* ============================================================
   FUNÇÕES DE NAVEGAÇÃO DA ÁRVORE
   ============================================================ */

function obterNoArvore(
  id,
  no = BANCO_MESTRE.arvoreTematica.raiz
) {

  if (!no) {
    return null;
  }

  if (no.id === id) {
    return no;
  }

  if (!Array.isArray(no.filhos)) {
    return null;
  }

  for (const filho of no.filhos) {

    const encontrado =
      obterNoArvore(id, filho);

    if (encontrado) {
      return encontrado;
    }
  }

  return null;
}


/* ============================================================
   OBTER FILHOS DE UM NÓ
   ============================================================ */

function obterFilhosArvore(id) {

  const no =
    obterNoArvore(id);

  if (
    !no ||
    !Array.isArray(no.filhos)
  ) {
    return [];
  }

  return no.filhos;
}


/* ============================================================
   VERIFICAR SE UM NÓ POSSUI FILHOS
   ============================================================ */

function possuiFilhosArvore(id) {

  const no =
    obterNoArvore(id);

  return !!(
    no &&
    Array.isArray(no.filhos) &&
    no.filhos.length > 0
  );
}


/* ============================================================
   OBTER CAMINHO / BREADCRUMB
   ============================================================ */

function obterCaminhoArvore(id) {

  const caminho = [];

  function procurar(no) {

    if (!no) {
      return false;
    }

    caminho.push(no);

    if (no.id === id) {
      return true;
    }

    if (Array.isArray(no.filhos)) {

      for (const filho of no.filhos) {

        if (procurar(filho)) {
          return true;
        }
      }
    }

    caminho.pop();

    return false;
  }

  procurar(
    BANCO_MESTRE.arvoreTematica.raiz
  );

  return caminho;
}


/* ============================================================
   QUESTÕES DE UM NÓ DA ÁRVORE
   ============================================================ */

function obterQuestoesDoNo(noId) {

  return BANCO_MESTRE.questoes.filter(
    questao =>
      questao.noArvoreId === noId
  );
}


/* ============================================================
   QUESTÕES POR PROVA
   ============================================================ */

function obterQuestoesDaProva(provaId) {

  return BANCO_MESTRE.questoes.filter(
    questao =>
      questao.provaId === provaId
  );
}


/* ============================================================
   REGISTRAR RESPOSTA
   ============================================================ */

function registrarRespostaQuestao(
  questaoId,
  alternativaEscolhida
) {

  const questao =
    BANCO_MESTRE.questoes.find(
      item =>
        item.id === questaoId
    );

  if (!questao) {
    return null;
  }

  const correta =
    alternativaEscolhida ===
    questao.gabaritoOficial;

  BANCO_MESTRE.desempenho
    .questoesRespondidas++;

  if (correta) {

    BANCO_MESTRE.desempenho
      .questoesAcertadas++;

  } else {

    BANCO_MESTRE.desempenho
      .questoesErradas++;
  }

  const total =
    BANCO_MESTRE.desempenho
      .questoesRespondidas;

  BANCO_MESTRE.desempenho
    .percentualGeral =

    total > 0

      ? Math.round(
          (
            BANCO_MESTRE.desempenho
              .questoesAcertadas /
            total
          ) * 100
        )

      : 0;

  BANCO_MESTRE.desempenho
    .historico.push({

      questaoId,

      alternativaEscolhida,

      gabarito:
        questao.gabaritoOficial,

      correta,

      data:
        new Date().toISOString()
    });

  return {

    correta,

    gabarito:
      questao.gabaritoOficial,

    dificuldade:
      questao.dificuldade,

    percentualGeral:
      BANCO_MESTRE.desempenho
        .percentualGeral
  };
}


/* ============================================================
   ADICIONAR QUESTÃO AO BANCO
   ============================================================ */

function adicionarQuestao(questao) {

  if (
    !questao ||
    !questao.id
  ) {
    return false;
  }

  const existe =
    BANCO_MESTRE.questoes.some(
      item =>
        item.id === questao.id
    );

  if (existe) {
    return false;
  }

  BANCO_MESTRE.questoes.push(
    questao
  );

  return true;
}


/* ============================================================
   REGISTRAR REVISÃO
   ============================================================ */

function adicionarRevisao(revisao) {

  if (
    !revisao ||
    !revisao.questaoId
  ) {
    return false;
  }

  BANCO_MESTRE.revisoes
    .pendentes.push({

      ...revisao,

      criadaEm:
        new Date().toISOString()
    });

  return true;
}


/* ============================================================
   SIMULADOS
   CRIAR SIMULADO
   ============================================================ */

function criarSimulado(
  configuracao = {}
) {

  const id =
    "simulado-" +
    Date.now();

  const configuracaoFinal = {

    ...BANCO_MESTRE.simulados
      .configuracaoPadrao,

    ...configuracao
  };

  const simulado = {

    id,

    nome:
      configuracaoFinal.nome ||
      "Simulado personalizado",

    criadoEm:
      new Date().toISOString(),

    atualizadoEm:
      new Date().toISOString(),

    questoes: [],

    configuracao:
      configuracaoFinal,

    resultado: {

      iniciado: false,

      finalizado: false,

      respondidas: 0,

      acertos: 0,

      erros: 0,

      percentual: 0,

      tempoSegundos: 0
    },

    respostas: []
  };

  BANCO_MESTRE.simulados
    .criados.push(
      simulado
    );

  BANCO_MESTRE.simulados.atual =
    id;

  return simulado;
}


/* ============================================================
   OBTER SIMULADO
   ============================================================ */

function obterSimulado(simuladoId) {

  return BANCO_MESTRE.simulados
    .criados.find(
      simulado =>
        simulado.id === simuladoId
    ) || null;
}


/* ============================================================
   ADICIONAR QUESTÃO AO SIMULADO
   ============================================================ */

function adicionarQuestaoAoSimulado(
  simuladoId,
  questaoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return false;
  }

  const questaoExiste =
    BANCO_MESTRE.questoes.some(
      item =>
        item.id === questaoId
    );

  if (!questaoExiste) {
    return false;
  }

  if (
    !simulado.questoes
      .includes(questaoId)
  ) {

    simulado.questoes
      .push(questaoId);
  }

  simulado.atualizadoEm =
    new Date().toISOString();

  return true;
}


/* ============================================================
   ADICIONAR VÁRIAS QUESTÕES AO SIMULADO
   ============================================================ */

function adicionarQuestoesAoSimulado(
  simuladoId,
  questaoIds = []
) {

  if (!Array.isArray(questaoIds)) {
    return false;
  }

  let adicionadas = 0;

  for (
    const questaoId
    of questaoIds
  ) {

    if (
      adicionarQuestaoAoSimulado(
        simuladoId,
        questaoId
      )
    ) {

      adicionadas++;
    }
  }

  return adicionadas;
}


/* ============================================================
   REMOVER QUESTÃO DO SIMULADO
   ============================================================ */

function removerQuestaoDoSimulado(
  simuladoId,
  questaoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return false;
  }

  simulado.questoes =
    simulado.questoes.filter(
      id =>
        id !== questaoId
    );

  simulado.atualizadoEm =
    new Date().toISOString();

  return true;
}


/* ============================================================
   LIMPAR QUESTÕES DO SIMULADO
   ============================================================ */

function limparSimulado(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return false;
  }

  simulado.questoes = [];

  simulado.atualizadoEm =
    new Date().toISOString();

  return true;
}


/* ============================================================
   EMBARALHAR ARRAY
   ============================================================ */

function embaralharArray(array) {

  const copia = [...array];

  for (
    let i = copia.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );

    [
      copia[i],
      copia[j]
    ] = [
      copia[j],
      copia[i]
    ];
  }

  return copia;
}


/* ============================================================
   EMBARALHAR QUESTÕES DO SIMULADO
   ============================================================ */

function embaralharQuestoesDoSimulado(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return false;
  }

  simulado.questoes =
    embaralharArray(
      simulado.questoes
    );

  simulado.atualizadoEm =
    new Date().toISOString();

  return true;
}


/* ============================================================
   OBTER QUESTÕES DO SIMULADO
   ============================================================ */

function obterQuestoesDoSimulado(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return [];
  }

  return simulado.questoes
    .map(
      questaoId =>
        BANCO_MESTRE.questoes.find(
          questao =>
            questao.id === questaoId
        )
    )
    .filter(Boolean);
}


/* ============================================================
   GERAR SELEÇÃO AUTOMÁTICA DE QUESTÕES
   ============================================================ */

function selecionarQuestoesParaSimulado(
  configuracao = {}
) {

  let resultado =
    [...BANCO_MESTRE.questoes];


  if (
    configuracao.instituicoes &&
    configuracao.instituicoes.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.instituicoes
            .includes(
              questao.instituicaoId
            )
      );
  }


  if (
    configuracao.anos &&
    configuracao.anos.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.anos
            .includes(
              questao.ano
            )
      );
  }


  if (
    configuracao.provas &&
    configuracao.provas.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.provas
            .includes(
              questao.provaId
            )
      );
  }


  if (
    configuracao.areas &&
    configuracao.areas.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.areas
            .includes(
              questao.areaId
            )
      );
  }


  if (
    configuracao.especialidades &&
    configuracao.especialidades.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.especialidades
            .includes(
              questao.especialidadeId
            )
      );
  }


  if (
    configuracao.temas &&
    configuracao.temas.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.temas
            .includes(
              questao.temaId
            )
      );
  }


  if (
    configuracao.subtemas &&
    configuracao.subtemas.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.subtemas
            .includes(
              questao.subtemaId
            )
      );
  }


  if (
    configuracao.dificuldades &&
    configuracao.dificuldades.length
  ) {

    resultado =
      resultado.filter(
        questao =>
          configuracao.dificuldades
            .includes(
              questao.dificuldade
            )
      );
  }


  if (
    configuracao.apenasNaoRespondidas
  ) {

    const respondidas =
      new Set(
        BANCO_MESTRE.desempenho
          .historico
          .map(
            item =>
              item.questaoId
          )
      );

    resultado =
      resultado.filter(
        questao =>
          !respondidas.has(
            questao.id
          )
      );
  }


  if (
    configuracao.quantidade &&
    configuracao.quantidade <
      resultado.length
  ) {

    resultado =
      resultado.slice(
        0,
        configuracao.quantidade
      );
  }


  if (
    configuracao.embaralharQuestoes
  ) {

    resultado =
      embaralharArray(
        resultado
      );
  }

  return resultado;
}


/* ============================================================
   MONTAR SIMULADO AUTOMATICAMENTE
   ============================================================ */

function montarSimuladoAutomaticamente(
  configuracao = {}
) {

  const simulado =
    criarSimulado(
      configuracao
    );

  const questoes =
    selecionarQuestoesParaSimulado(
      configuracao
    );

  simulado.questoes =
    questoes.map(
      questao =>
        questao.id
    );

  simulado.atualizadoEm =
    new Date().toISOString();

  return simulado;
}


/* ============================================================
   REGISTRAR RESPOSTA DENTRO DO SIMULADO
   ============================================================ */

function registrarRespostaSimulado(
  simuladoId,
  questaoId,
  alternativaEscolhida
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return null;
  }

  const resultado =
    registrarRespostaQuestao(
      questaoId,
      alternativaEscolhida
    );

  if (!resultado) {
    return null;
  }

  const respostaExistente =
    simulado.respostas.find(
      resposta =>
        resposta.questaoId ===
        questaoId
    );


  if (respostaExistente) {

    respostaExistente
      .alternativaEscolhida =
        alternativaEscolhida;

    respostaExistente.correta =
      resultado.correta;

  } else {

    simulado.respostas.push({

      questaoId,

      alternativaEscolhida,

      correta:
        resultado.correta,

      data:
        new Date().toISOString()
    });
  }


  simulado.resultado.iniciado =
    true;

  simulado.resultado.respondidas =
    simulado.respostas.length;

  simulado.resultado.acertos =
    simulado.respostas.filter(
      resposta =>
        resposta.correta
    ).length;

  simulado.resultado.erros =
    simulado.resultado.respondidas -
    simulado.resultado.acertos;

  simulado.resultado.percentual =
    simulado.resultado.respondidas > 0

      ? Math.round(
          (
            simulado.resultado.acertos /
            simulado.resultado.respondidas
          ) * 100
        )

      : 0;

  simulado.atualizadoEm =
    new Date().toISOString();

  return resultado;
}


/* ============================================================
   FINALIZAR SIMULADO
   ============================================================ */

function finalizarSimulado(
  simuladoId,
  tempoSegundos = 0
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return null;
  }

  simulado.resultado.finalizado =
    true;

  simulado.resultado.finalizadoEm =
    new Date().toISOString();

  simulado.resultado.tempoSegundos =
    tempoSegundos;

  simulado.atualizadoEm =
    new Date().toISOString();

  return simulado.resultado;
}


/* ============================================================
   EXCLUIR SIMULADO
   ============================================================ */

function excluirSimulado(
  simuladoId
) {

  const indice =
    BANCO_MESTRE.simulados
      .criados.findIndex(
        simulado =>
          simulado.id ===
          simuladoId
      );

  if (indice === -1) {
    return false;
  }

  BANCO_MESTRE.simulados
    .criados.splice(
      indice,
      1
    );

  if (
    BANCO_MESTRE.simulados.atual ===
    simuladoId
  ) {

    BANCO_MESTRE.simulados.atual =
      null;
  }

  return true;
}


/* ============================================================
   DADOS PARA PDF DO SIMULADO
   ============================================================ */

function obterDadosPDFSimulado(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return null;
  }

  const questoes =
    obterQuestoesDoSimulado(
      simuladoId
    );

  return {

    tipo: "simulado",

    titulo:
      simulado.nome,

    criadoEm:
      simulado.criadoEm,

    quantidade:
      questoes.length,

    questoes:

      questoes.map(
        (questao, indice) => ({

          numero:
            indice + 1,

          id:
            questao.id,

          instituicaoId:
            questao.instituicaoId,

          ano:
            questao.ano,

          numeroOriginal:
            questao.numero,

          enunciado:
            questao.enunciado,

          imagem:
            questao.imagem,

          midias:
            questao.midias,

          alternativas:
            questao.alternativas
        })
      )
  };
}


/* ============================================================
   DADOS PARA PDF DO GABARITO
   ============================================================ */

function obterDadosPDFGabarito(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return null;
  }

  const questoes =
    obterQuestoesDoSimulado(
      simuladoId
    );

  return {

    tipo: "gabarito",

    titulo:
      simulado.nome,

    quantidade:
      questoes.length,

    gabarito:

      questoes.map(
        (questao, indice) => ({

          numero:
            indice + 1,

          questaoId:
            questao.id,

          alternativa:
            questao.gabaritoOficial
        })
      )
  };
}


/* ============================================================
   DADOS PARA PDF DA RESOLUÇÃO
   ============================================================ */

function obterDadosPDFResolucao(
  simuladoId
) {

  const simulado =
    obterSimulado(simuladoId);

  if (!simulado) {
    return null;
  }

  const questoes =
    obterQuestoesDoSimulado(
      simuladoId
    );

  return {

    tipo: "resolucao",

    titulo:
      simulado.nome,

    quantidade:
      questoes.length,

    questoes:

      questoes.map(
        (questao, indice) => ({

          numero:
            indice + 1,

          questaoId:
            questao.id,

          enunciado:
            questao.enunciado,

          alternativas:
            questao.alternativas,

          gabarito:
            questao.gabaritoOficial,

          dificuldade:
            questao.dificuldade,

          justificativaCorreta:
            questao.justificativaCorreta,

          analiseAlternativas:
            questao.analiseAlternativas,

          resolucaoPedagogica:
            questao.resolucaoPedagogica,

          pontoChave:
            questao.pontoChave
        })
      )
  };
}


/* ============================================================
   GERAR PDF
   ============================================================ */

function gerarPDFSimulado(
  simuladoId,
  tipo = "simulado"
) {

  let dados = null;


  if (tipo === "gabarito") {

    dados =
      obterDadosPDFGabarito(
        simuladoId
      );

  }

  else if (
    tipo === "resolucao"
  ) {

    dados =
      obterDadosPDFResolucao(
        simuladoId
      );

  }

  else {

    dados =
      obterDadosPDFSimulado(
        simuladoId
      );
  }


  if (!dados) {
    return null;
  }


  /*
    O módulo visual/PDF recebe
    este objeto e gera o arquivo físico.
  */

  const evento =
    new CustomEvent(
      "med270:gerar-pdf",
      {
        detail: dados
      }
    );


  window.dispatchEvent(
    evento
  );


  return dados;
}


/* ============================================================
   EXPORTAÇÃO GLOBAL
   ============================================================ */

const BANCO_QUESTOES =
  BANCO_MESTRE.questoes;


/* ============================================================
   BANCO MESTRE
   ============================================================ */

window.BANCO_MESTRE =
  BANCO_MESTRE;


/* ============================================================
   BANCO DE QUESTÕES
   COMPATIBILIDADE COM APP EXISTENTE
   ============================================================ */

window.BANCO_QUESTOES =
  BANCO_QUESTOES;


/* ============================================================
   ÁRVORE TEMÁTICA MESTRE
   ============================================================ */

window.ARVORE_TEMATICA_MESTRE =
  ARVORE_TEMATICA_MESTRE;


/* ============================================================
   EXPORTAÇÕES — ÁRVORE
   ============================================================ */

window.obterNoArvore =
  obterNoArvore;

window.obterFilhosArvore =
  obterFilhosArvore;

window.possuiFilhosArvore =
  possuiFilhosArvore;

window.obterCaminhoArvore =
  obterCaminhoArvore;


/* ============================================================
   EXPORTAÇÕES — QUESTÕES
   ============================================================ */

window.obterQuestoesDoNo =
  obterQuestoesDoNo;

window.obterQuestoesDaProva =
  obterQuestoesDaProva;

window.registrarRespostaQuestao =
  registrarRespostaQuestao;

window.adicionarQuestao =
  adicionarQuestao;

window.adicionarRevisao =
  adicionarRevisao;


/* ============================================================
   EXPORTAÇÕES — SIMULADOS
   ============================================================ */

window.criarSimulado =
  criarSimulado;

window.obterSimulado =
  obterSimulado;

window.adicionarQuestaoAoSimulado =
  adicionarQuestaoAoSimulado;

window.adicionarQuestoesAoSimulado =
  adicionarQuestoesAoSimulado;

window.removerQuestaoDoSimulado =
  removerQuestaoDoSimulado;

window.limparSimulado =
  limparSimulado;

window.embaralharQuestoesDoSimulado =
  embaralharQuestoesDoSimulado;

window.obterQuestoesDoSimulado =
  obterQuestoesDoSimulado;

window.selecionarQuestoesParaSimulado =
  selecionarQuestoesParaSimulado;

window.montarSimuladoAutomaticamente =
  montarSimuladoAutomaticamente;

window.registrarRespostaSimulado =
  registrarRespostaSimulado;

window.finalizarSimulado =
  finalizarSimulado;

window.excluirSimulado =
  excluirSimulado;


/* ============================================================
   EXPORTAÇÕES — PDF
   ============================================================ */

window.obterDadosPDFSimulado =
  obterDadosPDFSimulado;

window.obterDadosPDFGabarito =
  obterDadosPDFGabarito;

window.obterDadosPDFResolucao =
  obterDadosPDFResolucao;

window.gerarPDFSimulado =
  gerarPDFSimulado;


/* ============================================================
   CHECKPOINT DE INICIALIZAÇÃO
   ============================================================ */

BANCO_MESTRE.checkpointMestre
  .ultimaAtualizacao =
  new Date().toISOString();


/* ============================================================
   FIM DO BANCO MESTRE
   MED APROVAÇÃO 270+
   ============================================================ */

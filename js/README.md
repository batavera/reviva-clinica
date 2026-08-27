# 🌿 Revivá Clínica Médica — Landing Page Institucional

> Landing page de alta conversão e posicionamento editorial desenvolvida para a **Clínica Revivá**, focada em medicina integrativa, atendimento humanizado e corpo clínico multidisciplinar.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive Design](https://img.shields.io/badge/Mobile--First-Responsive-success?style=for-the-badge)

---

## 📌 Sobre o Projeto

O projeto foi concebido para romper com o padrão impessoal e hospitalar da maioria dos sites médicos. A interface combina **design biofílico**, tons terrosos suaves (*verde petróleo, sálvia e areia*) e tipografia editorial clássica para transmitir **acolhimento, rigor científico e sofisticação**.

---

## ✨ Funcionalidades Principais

* **Hero Section com Tour Virtual:** Vídeo imersivo do espaço em autoplay e card flutuante de avaliação humanizada.
* **Cabeçalho com Encolhimento Dinâmico (Shrink-on-Scroll):** Selo da marca de alto impacto na abertura que se ajusta proporcionalmente durante a rolagem.
* **Manifesto & Pilares Clínicos:** Apresentação dos 4 pilares de atendimento (*Integrativa, Acolhimento, Excelência e Propósito*).
* **Grade de Especialidades Médicas:** Módulos com ícones vetoriais nativos (SVG) para Endocrinologia, Dermatologia, Psiquiatria, Hematologia, Geriatria e o Núcleo Alento (Cuidados Paliativos).
* **Apresentação do Corpo Clínico & Recepção:** Destaque para a equipe multidisciplinar e acolhimento presencial.
* **Experiência & Hospitalidade Clínica:** Galeria e diferenciais do espaço físico (Espaço Café, isolamento acústico e estacionamento).
* **Perguntas Frequentes (FAQ Nativo):** Accordion responsivo e leve utilizando tags semânticas `<details>` e `<summary>` do HTML5.
* **Conversão Direta para WhatsApp:** 
  * Formulário interativo que monta a mensagem estruturada com nome, telefone e especialidade desejada.
  * Botão flutuante permanente com animação de notificação.
* **Integração Visual com Instagram:** Seção de prova social com link direto para o perfil oficial `@reviva.clinicamedica`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível, tags de mídia otimizadas e microdados.
* **CSS3 Moderno:**
  * Variáveis CSS (*Design Tokens*) para paleta de cores, tipografia e espaçamentos.
  * Flexbox e CSS Grid para layouts fluidos.
  * Tipografia responsiva com funções `clamp()`.
* **JavaScript (Vanilla / ES6+):** Controle de scroll da barra de navegação, menu drawer mobile e gerador de mensagem codificada para a API do WhatsApp.
* **Tipografia:** *Cormorant Garamond* (títulos/serifa editorial) e *Plus Jakarta Sans* (leitura e UI).
* **Ícones:** Vetores SVG nativos e biblioteca *Lucide Icons*.

---

## 📂 Estrutura de Pastas

```text
reviva-clinica/
├── index.html          # Estrutura principal da página
├── README.md           # Documentação do projeto
├── css/
│   └── style.css       # Estilos globais, tokens e responsividade
├── js/
│   └── main.js         # Lógica do header, menu mobile e WhatsApp
└── assets/
    ├── icons/          # Logotipo e ícones da marca
    ├── img/            # Fotos da equipe, espaço e recepção
    └── video/          # Vídeo de tour virtual da clínica

    ---

📄 Licença
Este projeto foi desenvolvido com finalidade institucional e portfólio. Todos os direitos de marca pertencem à Revivá Clínica Médica.
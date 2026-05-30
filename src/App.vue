<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <header class="sticky top-0 z-20 border-b border-white/10 bg-[#071225]/95 backdrop-blur">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" class="flex items-center gap-3" aria-label="Megon home">
          <img src="./assets/logo.png" alt="Megon" class="h-8 w-auto">
        </a>

        <div class="flex items-center gap-4">
          <div class="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#problem" class="transition hover:text-white">{{ copy.nav.problem }}</a>
            <a href="#services" class="transition hover:text-white">{{ copy.nav.services }}</a>
            <a href="#experience" class="transition hover:text-white">{{ copy.nav.experience }}</a>
            <a href="#contact" class="transition hover:text-white">{{ copy.nav.contact }}</a>
          </div>

          <div class="flex rounded-md border border-white/15 p-1 text-xs font-bold text-slate-300">
            <button
              v-for="option in languageOptions"
              :key="option.value"
              type="button"
              class="rounded px-3 py-1.5 transition"
              :class="locale === option.value ? 'bg-white text-slate-950' : 'hover:text-white'"
              @click="setLocale(option.value)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main id="top">
      <section class="blueprint-surface border-b border-white/10">
        <div class="mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:py-20">
          <div class="max-w-3xl">
            <div class="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#8FB7FF]">
              <span class="h-px w-10 bg-[#1C53B7]"></span>
              <span>{{ copy.hero.kicker }}</span>
            </div>
            <h1 class="text-5xl font-extrabold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {{ copy.hero.title }}
            </h1>
            <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {{ copy.hero.body }}
            </p>

            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <a :href="mailtoHref" class="inline-flex items-center justify-center rounded-md bg-[#1C53B7] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2B6EEA]">
                {{ copy.hero.primaryCta }}
              </a>
              <a href="#services" class="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/5">
                {{ copy.hero.secondaryCta }}
              </a>
            </div>

            <div class="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div v-for="item in copy.heroSignals" :key="item" class="border-l-2 border-[#1C53B7] bg-white/[0.03] px-4 py-3">
                {{ item }}
              </div>
            </div>
          </div>

          <div class="launch-desk">
            <div class="border-b border-white/10 px-5 py-5">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.16em] text-[#8FB7FF]">{{ copy.snapshot.eyebrow }}</p>
                <h2 class="mt-2 text-2xl font-bold leading-tight text-white">{{ copy.snapshot.title }}</h2>
                <p class="mt-3 text-sm leading-6 text-slate-300">{{ copy.snapshot.body }}</p>
              </div>
            </div>

            <div class="divide-y divide-white/10">
              <div v-for="item in copy.readinessItems" :key="item.label" class="grid grid-cols-[1fr_auto] gap-4 px-5 py-4">
                <span class="text-sm text-slate-300">{{ item.label }}</span>
                <span :class="item.tone" class="text-sm font-semibold">{{ item.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" class="border-b border-white/10 bg-[#0B1424]">
        <div class="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
          <div>
            <p class="section-kicker">{{ copy.problem.kicker }}</p>
            <h2 class="section-title">{{ copy.problem.title }}</h2>
            <p class="mt-6 text-lg leading-8 text-slate-300">
              {{ copy.problem.body }}
            </p>
          </div>

          <div class="border-y border-white/10">
            <div v-for="(question, index) in copy.riskQuestions" :key="question" class="grid grid-cols-[4rem_1fr] border-b border-white/10 last:border-b-0">
              <div class="border-r border-white/10 px-4 py-4 font-mono text-sm text-[#8FB7FF]">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <div class="px-5 py-4 text-sm leading-6 text-slate-300">
                {{ question }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-white/10 bg-[#071225]">
        <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div>
            <p class="section-kicker">{{ copy.audience.kicker }}</p>
            <h2 class="section-title">{{ copy.audience.title }}</h2>
          </div>
          <p class="max-w-2xl text-lg leading-8 text-slate-300">
            {{ copy.audience.body }}
          </p>
        </div>
      </section>

      <section id="services" class="border-b border-white/10 bg-slate-100 text-slate-950">
        <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div class="max-w-3xl border-l-4 border-[#1C53B7] pl-5">
            <p class="section-kicker text-[#1C53B7]">{{ copy.services.kicker }}</p>
            <h2 class="section-title text-slate-950">{{ copy.services.title }}</h2>
          </div>

          <div class="mt-12 border-y border-slate-300">
            <article v-for="service in copy.services.items" :key="service.title" class="grid gap-5 border-b border-slate-300 py-8 last:border-b-0 md:grid-cols-[10rem_1fr_0.9fr] md:items-start">
              <div class="font-mono text-5xl font-bold leading-none text-[#1C53B7]">
                {{ service.step }}
              </div>
              <div>
                <h3 class="text-2xl font-bold text-slate-950">{{ service.title }}</h3>
                <p class="mt-4 leading-7 text-slate-600">{{ service.body }}</p>
              </div>
              <p class="border-l-2 border-[#1C53B7] pl-5 text-sm font-semibold leading-6 text-slate-950">{{ service.deliverable }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" class="border-b border-white/10 bg-white text-slate-950">
        <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-20">
          <div>
            <p class="section-kicker text-[#1C53B7]">{{ copy.experience.kicker }}</p>
            <h2 class="section-title text-slate-950">{{ copy.experience.title }}</h2>
            <p class="mt-5 text-lg leading-8 text-slate-600">{{ copy.experience.body }}</p>
          </div>

          <div class="rounded-lg border border-[#1C53B7]/25 bg-slate-950 p-5 shadow-sm sm:p-8">
            <img src="./assets/client-logos-desktop.png" :alt="copy.experience.alt" class="hidden w-full md:block">
            <img src="./assets/client-logos.png" :alt="copy.experience.alt" class="w-full md:hidden">
          </div>
        </div>
      </section>

      <section id="contact" class="bg-[#071225]">
        <div class="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:py-24">
          <div>
            <p class="section-kicker">{{ copy.contact.kicker }}</p>
            <h2 class="section-title">{{ copy.contact.title }}</h2>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{{ copy.contact.body }}</p>
          </div>

          <a :href="mailtoHref" class="inline-flex items-center justify-center rounded-md bg-[#1C53B7] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2B6EEA]">
            contato@megon.com.br
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'

const props = defineProps({
  initialLocale: {
    type: String,
    default: ''
  }
})

const languageOptions = [
  { value: 'pt-BR', label: 'PT' },
  { value: 'en', label: 'EN' }
]

const browserLocale = typeof window !== 'undefined' && window.location.pathname.startsWith('/en')
  ? 'en'
  : 'pt-BR'
const locale = ref(props.initialLocale || browserLocale)

const content = {
  'pt-BR': {
    meta: {
      title: 'Megon | Ferramentas internas criadas com IA, prontas para uso',
      description: 'A Megon ajuda pequenas empresas a transformar protótipos criados com IA em ferramentas internas seguras, organizadas e fáceis de manter.'
    },
    nav: {
      problem: 'Problema',
      services: 'Serviços',
      experience: 'Experiência',
      contact: 'Contato'
    },
    hero: {
      kicker: 'Ferramentas criadas com IA, prontas para o dia a dia',
      title: 'Seu time criou com IA. Nós ajudamos a usar com segurança.',
      body: 'A Megon ajuda pequenas empresas a pegar protótipos criados com IA e transformá-los em ferramentas internas prontas para o dia a dia.',
      primaryCta: 'Agendar uma revisão',
      secondaryCta: 'Ver como funciona'
    },
    heroSignals: [
      'Hospedagem',
      'Acesso',
      'Dados'
    ],
    snapshot: {
      eyebrow: 'Antes de colocar no ar',
      title: 'O que precisa estar claro?',
      body: 'Se a ferramenta já funciona, o próximo passo é responder algumas perguntas simples antes de colocar todo mundo para usar.'
    },
    readinessItems: [
      { label: 'Onde ela vai ficar?', status: 'definir', tone: 'text-[#BFD6FF]' },
      { label: 'Quem pode entrar?', status: 'definir', tone: 'text-sky-200' },
      { label: 'Que dados ela usa?', status: 'revisar', tone: 'text-rose-200' },
      { label: 'Quem cuida depois?', status: 'combinar', tone: 'text-[#BFD6FF]' }
    ],
    problem: {
      kicker: 'A lacuna',
      title: 'Criar ficou fácil. Usar na empresa ainda pede cuidado.',
      body: 'Times conseguem criar ferramentas úteis com ChatGPT, Claude, Cursor, Lovable, Replit, Bolt, v0 e outras ferramentas. Mas quando algo começa a resolver um problema real, surgem perguntas que não dá para ignorar.'
    },
    riskQuestions: [
      'Onde isso vai ficar?',
      'Quem pode acessar?',
      'Alguma chave ou senha ficou exposta?',
      'Quais dados da empresa ou de clientes ela usa?',
      'Quem é dono do código?',
      'Como saberemos se der erro?',
      'Quem corrige quando quebrar?',
      'Isso deve ser aberto, privado ou só interno?'
    ],
    audience: {
      kicker: 'Para quem',
      title: 'Para quem recebeu um protótipo e precisa decidir se dá para usar.',
      body: 'A Megon trabalha com operações, TI, founders, suporte, produto e lideranças de negócio em pequenas empresas que precisam transformar uma boa ideia criada com IA em uma ferramenta confiável.'
    },
    services: {
      kicker: 'Serviços',
      title: 'Um caminho simples do protótipo ao uso real.',
      items: [
        {
          step: '01',
          title: 'Revisão antes do lançamento',
          body: 'Olhamos a ferramenta antes de ela entrar em uso e apontamos o que está ok, o que preocupa e o que precisa ser resolvido.',
          deliverable: 'Uma resposta clara: pode usar, pode usar com ajustes ou ainda não deve ir para o ar.'
        },
        {
          step: '02',
          title: 'Lançamento seguro',
          body: 'Ajudamos a colocar a ferramenta no lugar certo, com acesso controlado, configurações organizadas e instruções para o time.',
          deliverable: 'Uma ferramenta interna pronta para ser usada pela empresa.'
        },
        {
          step: '03',
          title: 'Cuidado contínuo',
          body: 'Quando a ferramenta passa a fazer parte da rotina, seguimos por perto para corrigir, atualizar e orientar melhorias.',
          deliverable: 'Alguém acompanhando a ferramenta para ela não virar um problema esquecido.'
        }
      ]
    },
    experience: {
      kicker: 'Experiência prévia',
      title: 'Empresas que já confiaram no nosso trabalho.',
      body: 'Antes de focar em ferramentas internas criadas com IA, a Megon já apoiou empresas em projetos de software, integrações, manutenção e evolução de sistemas.',
      alt: 'Logos de empresas que já trabalharam com a Megon'
    },
    contact: {
      kicker: 'Próximo passo',
      title: 'Tem uma ferramenta criada com IA esperando uma decisão?',
      body: 'Vamos entender se ela está pronta para ser usada.'
    }
  },
  en: {
    meta: {
      title: 'Megon | AI-built internal tools, ready for everyday use',
      description: 'Megon helps small companies turn AI-built prototypes into secure, organized, maintainable internal tools.'
    },
    nav: {
      problem: 'Problem',
      services: 'Services',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      kicker: 'AI-built tools, ready for everyday use',
      title: 'Your team built it with AI. We help make it safe to use.',
      body: 'Megon helps small companies turn AI-built prototypes into internal tools that are ready for everyday use.',
      primaryCta: 'Book a review',
      secondaryCta: 'See how it works'
    },
    heroSignals: [
      'Hosting',
      'Access',
      'Data'
    ],
    snapshot: {
      eyebrow: 'Before it goes live',
      title: 'What needs to be clear?',
      body: 'If the tool already works, the next step is answering a few simple questions before the whole team starts using it.'
    },
    readinessItems: [
      { label: 'Where will it live?', status: 'decide', tone: 'text-[#BFD6FF]' },
      { label: 'Who can access it?', status: 'decide', tone: 'text-sky-200' },
      { label: 'What data does it use?', status: 'review', tone: 'text-rose-200' },
      { label: 'Who looks after it?', status: 'agree', tone: 'text-[#BFD6FF]' }
    ],
    problem: {
      kicker: 'The gap',
      title: 'Building got easier. Using it at work still needs care.',
      body: 'Teams can create useful tools with ChatGPT, Claude, Cursor, Lovable, Replit, Bolt, v0, and other tools. But when something starts solving a real business problem, there are questions you should not skip.'
    },
    riskQuestions: [
      'Where will this live?',
      'Who can access it?',
      'Did any keys or passwords get exposed?',
      'What company or customer data does it use?',
      'Who owns the code?',
      'How will we know if it breaks?',
      'Who fixes it when it breaks?',
      'Should it be public, private, or internal-only?'
    ],
    audience: {
      kicker: 'Who it is for',
      title: 'For the person who received a prototype and needs to decide if it can be used.',
      body: 'Megon works with operations, IT, founders, support, product, and business leads at small companies that need to turn a good AI-built idea into a dependable internal tool.'
    },
    services: {
      kicker: 'Services',
      title: 'A simple path from prototype to real use.',
      items: [
        {
          step: '01',
          title: 'Pre-launch review',
          body: 'We look at the tool before people start using it and point out what is fine, what is risky, and what needs to be fixed.',
          deliverable: 'A clear answer: ready, ready with changes, or not ready yet.'
        },
        {
          step: '02',
          title: 'Safe launch',
          body: 'We help put the tool in the right place, with controlled access, organized settings, and instructions for the team.',
          deliverable: 'An internal tool ready for the company to use.'
        },
        {
          step: '03',
          title: 'Ongoing care',
          body: 'When the tool becomes part of the routine, we stay close to fix, update, and guide small improvements.',
          deliverable: 'Someone keeping an eye on the tool so it does not become a forgotten problem.'
        }
      ]
    },
    experience: {
      kicker: 'Previous experience',
      title: 'Companies that have trusted our work.',
      body: 'Before focusing on AI-built internal tools, Megon supported companies with software projects, integrations, maintenance, and system evolution.',
      alt: 'Logos of companies that have worked with Megon'
    },
    contact: {
      kicker: 'Next step',
      title: 'Have an AI-built tool waiting for a decision?',
      body: "Let's understand if it is ready to use."
    }
  }
}

const copy = computed(() => content[locale.value])
const mailtoHref = computed(() => {
  const subject = locale.value === 'pt-BR'
    ? 'Launch Readiness Check'
    : 'Launch Readiness Check'

  return `mailto:contato@megon.com.br?subject=${encodeURIComponent(subject)}`
})

function setLocale(nextLocale) {
  locale.value = nextLocale
  const nextPath = nextLocale === 'en' ? '/en/' : '/'

  if (typeof window !== 'undefined' && window.location.pathname !== nextPath) {
    window.history.pushState({}, '', nextPath)
  }
}

watchEffect(() => {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = locale.value
  document.title = copy.value.meta.title

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', copy.value.meta.description)
  }

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', locale.value === 'en' ? 'https://megon.com.br/en/' : 'https://megon.com.br/')
  }
})
</script>

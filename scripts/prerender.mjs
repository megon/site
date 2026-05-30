import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

const siteUrl = 'https://megon.com.br'
const ptTitle = 'Megon | Ferramentas internas criadas com IA, prontas para uso'
const ptDescription = 'A Megon ajuda pequenas empresas a transformar protótipos criados com IA em ferramentas internas seguras, organizadas e fáceis de manter.'
const enTitle = 'Megon | AI-built internal tools, ready for everyday use'
const enDescription = 'Megon helps small companies turn AI-built prototypes into secure, organized, maintainable internal tools.'

const indexPath = new URL('../dist/index.html', import.meta.url)
const enDir = new URL('../dist/en/', import.meta.url)
const enPath = new URL('../dist/en/index.html', import.meta.url)

const template = await readFile(indexPath, 'utf8')

function injectApp(html, appHtml) {
  return html.replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
}

function makeEnglishHtml(html) {
  return html
    .replace('<html lang="pt-BR">', '<html lang="en">')
    .replaceAll(ptTitle, enTitle)
    .replaceAll(ptDescription, enDescription)
    .replace(
      'content="Megon, ferramentas internas criadas com IA, prototipo de IA para producao, ferramentas internas seguras, production launch"',
      'content="Megon, AI-built internal tools, AI prototype to production, internal tools, safe launch"'
    )
    .replace(`rel="canonical" href="${siteUrl}/"`, `rel="canonical" href="${siteUrl}/en/"`)
    .replace(`property="og:url" content="${siteUrl}/"`, `property="og:url" content="${siteUrl}/en/"`)
    .replace('property="og:locale" content="pt_BR"', 'property="og:locale" content="en_US"')
    .replace('property="og:locale:alternate" content="en_US"', 'property="og:locale:alternate" content="pt_BR"')
    .replace(
      '<strong>A Megon precisa de JavaScript habilitado para renderizar este site.</strong>',
      '<strong>Megon needs JavaScript enabled to render this site.</strong>'
    )
}

const ptAppHtml = await render('pt-BR')
const enAppHtml = await render('en')

await writeFile(indexPath, injectApp(template, ptAppHtml))
await mkdir(enDir, { recursive: true })
await writeFile(enPath, injectApp(makeEnglishHtml(template), enAppHtml))

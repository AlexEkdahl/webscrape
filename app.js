const puppeteer = require('puppeteer')
const NAME = 'Alexander Ekdahl'
const EMAIL = 'alexanderekdahl@me.com'
const URL =
  'https://snake.nodehill.com/?Javautvecklare%2021v,%20Plushögskolan%20Lund'

const NAME_INPUT = '.name'
const EMAIL_INPUT = '.email'
const BUTTON = 'input:last-of-type'

const t0 = performance.now()
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(URL)
  await page.click(NAME_INPUT)
  await page.keyboard.type(NAME)
  await page.click(EMAIL_INPUT)
  await page.keyboard.type(EMAIL)

  await browser.close()
})()
const t1 = performance.now()

console.log(`Närvaro registrerad på namn ${NAME}`)
console.log(`Det tog ${t1 - t0} milliseconds.`)

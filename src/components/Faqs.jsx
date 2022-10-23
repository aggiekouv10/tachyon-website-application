import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How can I buy your monitors?',
      answer:
        'Feel free to open a ticket in our Discord, which can be found by clicking on the buttons in the Pricing section.',
    },
    {
      question: 'Do you take care of site protection such as PX, Akamai?',
      answer:
        'For any tier you purchase, the protections are automatically taken care of by us.',
    },
    {
      question: 'Are payments monthly?',
      answer:
        'All payments for monitors occur monthly unless stated differently by us.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-200 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-400">
            If you can’t find what you’re looking for, feel free to reach out to
            us via Twitter, Discord or by clicking the chat icon on the bottom
            right.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-200">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-400">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

import { useState } from 'react'
import styles from './FAQ.module.css'

const sections = [
  {
    category: 'Research Partners',
    items: [
      {
        q: 'What is required to become a verified research partner?',
        a: 'Verified research partners must provide proof of institutional affiliation, a current research protocol summary, and valid identification. We review all applications to ensure compounds are intended for legitimate research use. Approval typically takes 1-3 business days.',
      },
      {
        q: 'How do I access partner-level pricing?',
        a: 'Once your research partner application is approved, partner pricing tiers are automatically applied to your account. Volume discounts are also available for institutions placing recurring orders. Contact our team for a custom quote.',
      },
      {
        q: 'Can individual researchers apply as research partners?',
        a: 'Yes. Independent researchers with verifiable institutional credentials, active research protocols, or published research histories are eligible to apply. All applications are reviewed on a case-by-case basis.',
      },
    ],
  },
  {
    category: 'Laboratories',
    items: [
      {
        q: 'What documentation is required for laboratory orders?',
        a: 'Licensed laboratories must provide a copy of their current operating license, DEA registration where applicable, and a completed end-use declaration for each compound ordered. Documentation is securely retained for compliance purposes.',
      },
      {
        q: 'Can we arrange a standing order or subscription arrangement?',
        a: 'Yes. For laboratories with recurring procurement needs, we offer standing order agreements with priority fulfillment, fixed pricing, and automatic COA updates. Contact our accounts team to discuss terms.',
      },
      {
        q: 'Do you support custom formulations for laboratory needs?',
        a: 'Select custom formulations may be available for established laboratory accounts with specific research requirements. Custom requests are evaluated individually based on technical feasibility and minimum order quantities.',
      },
    ],
  },
  {
    category: 'Distributors',
    items: [
      {
        q: 'What are the requirements for wholesale distribution?',
        a: 'Wholesale distributors must hold appropriate business licenses for distribution of research chemicals in their operating jurisdiction. We require completion of a distributor agreement, business registration documentation, and compliance with our approved-customer policy.',
      },
      {
        q: 'Do you offer white-label or private-label fulfillment?',
        a: 'White-label fulfillment arrangements are available for qualified distributors at sufficient volume thresholds. All white-label orders retain full COA documentation to maintain traceability and research integrity standards.',
      },
    ],
  },
]

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className={styles.question}>{question}</span>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-heading">
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.overline}>Common Questions</p>
          <h2 className={styles.heading} id="faq-heading">
            Frequently asked questions
          </h2>
        </header>

        <div className={styles.columns}>
          {sections.map((section) => (
            <div key={section.category} className={styles.faqSection}>
              <h3 className={styles.categoryLabel}>{section.category}</h3>
              <div className={styles.accordion}>
                {section.items.map((item) => (
                  <AccordionItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

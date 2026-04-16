import useReveal from './useReveal'

const services = [
  {
    num: '001',
    title: 'Esküvő',
    desc: 'Teljes napos jelenlét, riportfotózás és művészi portrék. Az érzelmeket és a részleteket egyaránt rögzítem — úgy, ahogy a pillanat kéri.',
  },
  {
    num: '002',
    title: 'Jegyes',
    desc: 'Laza, természetes hangulatú páros fotózás az esküvő előtt. Megismerkedünk, ráhangolódunk — és a képek máris mesélnek.',
  },
  {
    num: '003',
    title: 'Család',
    desc: 'Közös pillanatok, őszinte mosolyok, igazi kapcsolódás. Stúdióban vagy szabadtéren, a lényeg az együtt töltött idő.',
  },
  {
    num: '004',
    title: 'Portré',
    desc: 'Stúdiós és természetes fényű portrék egyéneknek, pároknak. Nyugodt, őszinte légkörben, ahol önmagad lehetsz.',
  },
  {
    num: '005',
    title: 'Divat',
    desc: 'Kreatív és editorial fotózás márkáknak, stylistoknak, modelleknek. Karakteres, ötletes képek, amelyek kitűnnek.',
  },
]

function ServiceItem({ service }) {
  const reveal = useReveal()
  return (
    <div ref={reveal.ref} className={`service ${reveal.className}`}>
      <div className="service-num">{service.num}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>
    </div>
  )
}

export default function Services() {
  const headerReveal = useReveal()

  return (
    <section id="services" className="services">
      <div ref={headerReveal.ref} className={`section-header ${headerReveal.className}`}>
        <div>
          <span className="section-number">— 03 / Szolgáltatások</span>
          <h2 className="section-title">Amit kínálok</h2>
        </div>
        <div className="section-meta">Öt fő terület</div>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceItem key={s.num} service={s} />
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion';

const bonos = [
  {
    numero: '#1',
    img: '/assets/bonos/02_bonus.png',
    titulo: 'IANGE 360™',
    subtitulo: 'Automatiza y escala tus captaciones con Inteligencia Artificial.',
    descripcion: (
      <>
        <p>
          IANGE no es solo un CRM. Es un <strong>ecosistema inmobiliario</strong> que integra
          captación, marketing, seguimiento, operación, administración, automatización e IA,
          todo en una sola plataforma.
        </p>
        <ul className="flex flex-col gap-1 mt-2 text-sm">
          {[
            'Organización de prospectos y propietarios',
            'Administración de captaciones y seguimiento automatizado',
            'Gestión de expedientes y operaciones',
            'Control comercial y métricas',
            'Automatización de procesos repetitivos',
            'Sistemas para evitar la fuga de oportunidades',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#E55A0A] font-bold flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-3">
          Incluido en tu acceso a Captaciones Infinitas IA System hoy.
        </p>
      </>
    ),
  },
  {
    numero: '#2',
    img: '/assets/bonos/01_bonus.png',
    titulo: 'Gestión y Estructura de tu Negocio Inmobiliario',
    subtitulo: 'Construye una inmobiliaria profesional, rentable y escalable.',
    descripcion: (
      <>
        <p>
          La mayoría de los asesores aprende a vender. Muy pocos aprenden a construir una empresa.
          Basado en el <strong>Ciclo Inmobiliario completo</strong>, aprenderás a desarrollar una
          estructura sólida que soporte el crecimiento de tu negocio.
        </p>
        <ul className="flex flex-col gap-1 mt-2 text-sm">
          {[
            'Cómo funciona el ciclo inmobiliario completo',
            'Estructura interna de una inmobiliaria profesional',
            'Procesos operativos y control administrativo',
            'Cultura organizacional y liderazgo',
            'Mentalidad empresarial y finanzas básicas para inmobiliarios',
            'Marco legal básico e indicadores de crecimiento',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#E55A0A] font-bold flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-3">
          Incluido en tu acceso a Captaciones Infinitas IA System hoy.
        </p>
      </>
    ),
  },
  {
    numero: '#3',
    img: '/assets/bonos/03_bonus.png',
    titulo: 'Comunidad de WhatsApp para Dudas y Estrategias',
    subtitulo: 'La comunidad que te acompaña, te respalda y te hace crecer cada día.',
    descripcion: (
      <>
        <p>
          Accede a una <strong>comunidad activa 24/7</strong> de{' '}
          <strong>Whatsapp</strong> donde resolverás dudas en tiempo real,
          compartirás estrategias probadas y aprenderás de casos reales de otros asesores.
        </p>2
        <ul className="flex flex-col gap-1 mt-2 text-sm">
          {[
            'Resuelve dudas en tiempo real',
            'Estrategias que sí funcionan',
            'Casos reales y experiencias de otros asesores',
            'Materiales y recursos exclusivos',
            'Motivación diaria para seguir creciendo',
            'Networking con asesores como tú',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#E55A0A] font-bold flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-3">
          Incluido en tu acceso a Captaciones Infinitas IA System hoy.
        </p>
      </>
    ),
  },
];

export default function Bonuses() {
  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Header sección */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
          >
            <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
              CON TU PEDIDO HOY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            DESBLOQUEA ACCESO INMEDIATO A{' '}
            <span className="text-[#FF6B1A]">3 BONOS ESPECIALES</span>{' '}
            ¡GRATIS!
          </motion.h2>

          {/* Imagen stack completo "CON TU PEDIDO HOY" */}
          <motion.img
            src="/assets/stack/stack_completo.png"
            alt="Todo lo que incluye Captaciones Infinitas IA System"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl mt-4 rounded-2xl"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,107,26,0.2))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Cards de bonos */}
        <div className="w-full flex flex-col gap-10 mt-6">
          {bonos.map((bono, i) => (
            <motion.div
              key={bono.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 0 60px rgba(255,107,26,0.15)',
              }}
            >
              {/* Header naranja */}
              <div
                className="px-6 md:px-10 py-6 md:py-8 flex flex-wrap items-center gap-3"
                style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
              >
                <span className="inline-block px-4 py-1 bg-white rounded-md font-bebas text-[#FF6B1A] tracking-wider text-xl md:text-2xl">
                  Bonus {bono.numero}
                </span>
                <h3 className="font-bebas text-white text-2xl md:text-4xl leading-tight flex-1">
                  {bono.titulo}
                </h3>
              </div>

              {/* Cuerpo blanco */}
              <div className="px-6 md:px-10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="flex flex-col gap-4 text-[#1A1A1A] text-base md:text-lg leading-relaxed">
                  {bono.descripcion}
                  {bono.subtitulo && (
                    <p className="font-bebas text-[#E55A0A] text-xl md:text-2xl mt-1">
                      {bono.subtitulo}
                    </p>
                  )}
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src={bono.img}
                    alt={`Bonus ${bono.numero} — ${bono.titulo}`}
                    className="w-full max-w-md object-contain"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

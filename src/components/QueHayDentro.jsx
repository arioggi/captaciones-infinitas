import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const beneficios = [
  'Más propiedades captadas con un proceso estructurado y predecible',
  'IA aplicada a cada etapa: prospección, perfilamiento, seguimiento y cierre',
  'Automatización para captar más con menos tiempo y esfuerzo operativo',
  'Un sistema que no depende de la suerte ni de los referidos',
];

const modulos = [
  {
    numero: '01',
    img: '/assets/modulos/01_modulo.jpeg',
    titulo: 'El negocio de la captación',
  },
  {
    numero: '02',
    img: '/assets/modulos/02_modulo.jpeg',
    titulo: 'Análisis de oportunidades',
  },
  {
    numero: '03',
    img: '/assets/modulos/03_modulo.jpeg',
    titulo: 'Herramientas para prospectar con IA',
  },
  {
    numero: '04',
    img: '/assets/modulos/04_modulo.jpeg',
    titulo: 'El método de captación inteligente',
  },
  {
    numero: '05',
    img: '/assets/modulos/05_modulo.jpeg',
    titulo: 'Negocia como experto y maneja objeciones a tu favor',
  },
  {
    numero: '06',
    img: '/assets/modulos/06_modulo.jpeg',
    titulo: 'Perfilamiento que cierra',
  },
  {
    numero: '07',
    img: '/assets/modulos/07_modulo.jpeg',
    titulo: 'Checklist y expediente del vendedor',
  },
  {
    numero: '08',
    img: '/assets/modulos/08_modulo.jpeg',
    titulo: 'Revisión jurídica del expediente',
  },
  {
    numero: '09',
    img: '/assets/modulos/09_modulo.jpeg',
    titulo: 'Contrato de intermediación para blindar tus comisiones',
  },
  {
    numero: '10',
    img: '/assets/modulos/10_modulo.jpeg',
    titulo: 'Estrategias de seguimiento para lograr el cierre',
  },
];

export default function QueHayDentro() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            EL PROGRAMA COMPLETO
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          ¿QUÉ HAY DENTRO DE{' '}
          <span className="text-[#FF6B1A]">CAPTACIONES INFINITAS IA SYSTEM</span>?
        </motion.h2>

        {/* Lista de beneficios bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl flex flex-col gap-4"
        >
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-3 text-[#B8B8B8] leading-relaxed text-left"
              style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}
            >
              <span className="text-[#FF6B1A] text-2xl leading-none mt-1">•</span>
              <span>{b}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Sub-título "ESTO ES LO QUE ENCONTRARÁS DENTRO" */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center mt-8"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
        >
          ESTO ES LO QUE ENCONTRARÁS{' '}
          <span className="text-[#FF6B1A]">DENTRO</span>
        </motion.h3>

        {/* Grid de 10 módulos */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {modulos.map((modulo, i) => (
            <motion.div
              key={modulo.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,107,26,0.2)',
                boxShadow: '0 0 30px rgba(255,107,26,0.08)',
              }}
            >
              {/* Imagen del módulo (1600x900 = aspect 16/9) */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={modulo.img}
                  alt={`Módulo ${modulo.numero} — ${modulo.titulo}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {/* Badge número arriba a la izquierda */}
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-md font-bebas tracking-wider text-sm md:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)',
                    color: '#FFFFFF',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  MÓDULO {modulo.numero}
                </div>
              </div>

              {/* Título del módulo */}
              <div className="p-4 md:p-5 flex-1 flex items-start">
                <h4
                  className="font-bebas text-white tracking-wide leading-tight"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
                >
                  {modulo.titulo}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <CTAButton className="mt-8" />

        {/* Texto de garantía */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 text-center max-w-3xl"
        >
          <p className="text-[#B8B8B8] text-sm md:text-base">
            Captaciones Infinitas IA System aplica en{' '}
            <strong className="text-white">cualquier mercado inmobiliario</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base">
            Disponibilidad: <strong className="text-[#FF6B1A]">Inmediata</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base mt-2">
            Respaldado por nuestra{' '}
            <strong className="text-white">Garantía de 7 días</strong>
          </p>
          <p className="text-[#B8B8B8] text-sm md:text-base italic max-w-2xl">
            Si no estás completamente satisfecho dentro de los primeros 7 días, escríbenos
            y te devolvemos el 100% de tu inversión. Sin preguntas incómodas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

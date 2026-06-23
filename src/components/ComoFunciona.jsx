import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function ComoFunciona() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-10 md:px-14 py-4 md:py-5 rounded-full border-2 border-[#FF6B1A] bg-[#FF6B1A]/10"
        >
          <span className="font-bebas text-[#FF6B1A] tracking-[0.25em] text-lg md:text-2xl">
            EL SISTEMA COMPLETO
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          UN SISTEMA DE{' '}
          <span className="text-[#FF6B1A]">TRES CAPAS</span>{' '}
          QUE TRABAJAN JUNTAS
        </motion.h2>

        {/* Cards de capas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full flex flex-col gap-6 text-left"
        >
          {[
            {
              numero: '01',
              titulo: 'Fundamentos de Captación Profesional',
              texto: 'El proceso completo que usan los asesores más exitosos para generar inventario de forma constante. Desde el análisis de oportunidades hasta el seguimiento y cierre.',
            },
            {
              numero: '02',
              titulo: 'Inteligencia Artificial Aplicada',
              texto: 'Cómo usar IA en cada etapa: investigar, analizar, prospectar, perfilar propietarios, preparar expedientes y generar materiales para mejorar tus resultados.',
            },
            {
              numero: '03',
              titulo: 'Automatización de Procesos',
              texto: 'Cómo reducir trabajo operativo, optimizar tiempos y crear sistemas para captar más propiedades con menos esfuerzo.',
            },
          ].map((capa, i) => (
            <motion.div
              key={capa.numero}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-6 md:p-8 flex gap-5 items-start"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,107,26,0.2)',
              }}
            >
              <span
                className="font-bebas text-5xl md:text-6xl leading-none flex-shrink-0"
                style={{ color: 'rgba(255,107,26,0.25)' }}
              >
                {capa.numero}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-bebas text-[#FF6B1A] tracking-wide"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
                >
                  CAPA {capa.numero} — {capa.titulo}
                </h3>
                <p className="text-[#B8B8B8] leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
                  {capa.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#B8B8B8] leading-relaxed text-center max-w-2xl"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.15rem)' }}
        >
          Las tres capas trabajan al mismo tiempo durante todo el programa. Esa combinación
          es lo que convierte la captación en un{' '}
          <strong className="text-white">sistema predecible</strong>.
        </motion.p>

        {/* Línea decorativa final */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-24 h-1 rounded-full"
          style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
        />

        {/* CTA al final de sección */}
        <div className="w-full mt-10 md:mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function FuncionaParaTi() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A] flex flex-col items-center relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Título grande */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white leading-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          ESTE SISTEMA
          <br />
          <span
            className="inline-block px-6 py-2 mt-3 text-[#0A0A0A]"
            style={{ background: '#FF6B1A' }}
          >
            ES PARA TI SI:
          </span>
        </motion.h2>

        {/* Cards de audiencia */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            { tipo: 'Emprendedor inmobiliario', desc: 'Quieres iniciar en bienes raíces con bases sólidas desde el inicio.' },
            { tipo: 'Asesor inmobiliario', desc: 'Quieres captar más propiedades y dejar de depender de la suerte.' },
            { tipo: 'Dueño de inmobiliaria', desc: 'Buscas mejorar el desempeño de tu equipo y escalar la operación.' },
            { tipo: 'Asesor experimentado', desc: 'Ya tienes trayectoria y quieres incorporar IA a tu proceso.' },
            { tipo: 'El que quiere automatizar', desc: 'Buscas reducir trabajo operativo y escalar tus captaciones.' },
          ].map((item, i) => (
            <motion.div
              key={item.tipo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,107,26,0.2)' }}
            >
              <h3 className="font-bebas text-[#FF6B1A] tracking-wide" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
                {item.tipo}
              </h3>
              <p className="text-[#B8B8B8] leading-relaxed text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner naranja con frase clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl px-6 md:px-10 py-6 md:py-8 text-center"
          style={{ background: 'linear-gradient(135deg, #FF6B1A, #E55A0A)' }}
        >
          <p className="font-bebas text-white tracking-wide leading-tight" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2rem)' }}>
            NO IMPORTA EN QUÉ MERCADO ESTÉS...{' '}
            <span className="underline decoration-white/50">
              CAPTACIONES INFINITAS IA SYSTEM FUNCIONARÁ PARA TI.
            </span>
          </p>
        </motion.div>

        {/* Imagen clases presenciales */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img
            src="/assets/nicho/clases_presenciales.png"
            alt="Profesionales inmobiliarios en formación"
            className="w-full max-w-5xl mx-auto h-auto rounded-2xl"
            style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>

        {/* CTA */}
        <CTAButton />

        {/* Sublabels + sello garantía 7 días */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-[#B8B8B8] text-sm md:text-base">
            <p>
              Aplica en{' '}
              <strong className="text-white">cualquier mercado inmobiliario</strong>
            </p>
            <p className="mt-1">
              Disponibilidad:{' '}
              <strong className="text-[#FF6B1A]">Inmediata</strong>
            </p>
          </div>

          <img
            src="/assets/sellos/7_dias.png"
            alt="Garantía de 7 días"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            style={{ filter: 'drop-shadow(0 0 50px rgba(255,107,26,0.5))' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />

          <p className="text-[#B8B8B8] text-sm md:text-base max-w-2xl italic">
            Respaldado por nuestra{' '}
            <strong className="text-white">Garantía de 7 días</strong>. Si no estás
            completamente satisfecho, escríbenos y te devolvemos el 100% de tu inversión.
            Sin preguntas incómodas.
          </p>
        </div>
      </div>
    </section>
  );
}

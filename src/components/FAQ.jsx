import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config/constants';

const FAQS = [
  { q: '¿Necesito experiencia en bienes raíces?', a: 'No. El sistema está diseñado para llevarte desde cero, sin importar tu punto de partida.' },
  { q: '¿Necesito saber usar Inteligencia Artificial?', a: 'No. Aprenderás a usar cada herramienta paso a paso dentro del proceso de captación.' },
  { q: '¿Esto es solo un curso de herramientas de IA?', a: 'No. Es un sistema completo de captación inmobiliaria donde la IA potencia cada etapa, no la reemplaza.' },
  { q: '¿Para quién es este programa?', a: 'Para emprendedores, asesores inmobiliarios, dueños de inmobiliarias y profesionales que quieren captar más propiedades con método, IA y automatización.' },
  { q: '¿Cuánto tiempo tengo acceso?', a: `Tienes acceso por ${CONFIG.ANOS_ACCESO} año para avanzar a tu ritmo.` },
  { q: '¿Cuánto dura el programa?', a: 'Son 10 módulos paso a paso, más 2 bonos. Avanzas a tu propio ritmo.' },
  { q: '¿Qué incluye además de los módulos?', a: 'Prompts especializados, herramientas recomendadas, plantillas de trabajo, casos prácticos y sistemas de seguimiento.' },
  { q: '¿Qué es IANGE 360?', a: 'Es un ecosistema inmobiliario que integra captación, marketing, seguimiento, operación, administración, automatización e IA en una sola plataforma. Viene como bono.' },
  { q: '¿Funciona en mi ciudad / país?', a: 'Sí. El método y el uso de IA aplican a cualquier mercado inmobiliario.' },
  { q: '¿Sirve si ya tengo experiencia captando?', a: 'Sí. Te ayuda a incorporar IA y automatización para escalar lo que ya haces.' },
  { q: '¿Cómo accedo después de pagar?', a: 'El acceso es inmediato tras confirmar tu pago.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Los que ofrece la plataforma de pago al momento de inscribirte.' },
  { q: '¿Hay garantía?', a: `Sí. ${CONFIG.DIAS_GARANTIA} días de garantía. Si no es para ti, te devolvemos el 100%.` },
  { q: '¿Necesito comprar herramientas o software adicional?', a: 'El programa te recomienda herramientas; muchas tienen versiones gratuitas. No necesitas comprar nada extra para empezar.' },
  { q: '¿Por qué este precio de lanzamiento?', a: `Es una oferta por tiempo limitado del lanzamiento. Después sube al precio normal de $${CONFIG.PRECIO_NORMAL} USD.` },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(255,107,26,0.2)' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-bebas text-white text-lg md:text-xl tracking-wide leading-tight">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#FF6B1A] text-2xl font-bold leading-none"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-[#B8B8B8] text-base leading-relaxed pb-6 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="w-full py-20 md:py-32 px-4 md:px-8 bg-[#0A0A0A]"
      aria-label="Preguntas frecuentes sobre Captaciones Infinitas IA System"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block font-bebas text-[#FF6B1A] tracking-[0.3em] text-lg md:text-2xl bg-[#FF6B1A]/10 border-2 border-[#FF6B1A] px-10 md:px-14 py-4 md:py-5 rounded-full mb-6">
            RESOLVEMOS TUS DUDAS
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            PREGUNTAS{' '}
            <span className="text-[#FF6B1A]">FRECUENTES</span>
          </motion.h2>
          <div
            className="w-20 h-1 rounded-full mx-auto"
            style={{ background: 'linear-gradient(90deg, #FF6B1A, #FF8A4A)' }}
          />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {FAQS.map((item) => <FAQItem key={item.q} {...item} />)}
        </div>
      </div>
    </section>
  );
}

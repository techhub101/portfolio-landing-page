// src/components/ServicesSection.tsx
import React from 'react';
import { FadeIn } from './ui/FadeIn';

interface Service {
  id: string;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="price"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={20}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 first:border-t"
            >
              <span
                className="font-black leading-none mb-4 md:mb-0 md:w-1/3"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.id}
              </span>
              <div className="md:w-2/3 flex flex-col gap-2">
                <h3
                  className="font-medium uppercase tracking-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

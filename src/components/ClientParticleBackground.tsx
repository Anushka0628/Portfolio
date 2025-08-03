'use client';

import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
);

const ClientParticleBackground = () => {
  return <ParticleBackground />;
};

export default ClientParticleBackground;
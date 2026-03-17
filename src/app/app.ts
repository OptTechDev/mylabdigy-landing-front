import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type ServiceCard = {
  title: string;
  description: string;
  accent: string;
};

type PlatformStep = {
  title: string;
  description: string;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type PricingPlan = {
  name: string;
  price: string;
  audience: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

type ComparisonRow = {
  label: string;
  basic: string;
  premium: string;
  enterprise: string;
};

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly navItems = ['Servicios', 'Flujo', 'Beneficios', 'Planes', 'Contacto'];

  readonly serviceCards: ServiceCard[] = [
    {
      title: 'Agenda clínica en tiempo real',
      description:
        'Coordina citas, turnos y disponibilidad médica desde una sola vista con recordatorios automáticos para pacientes y equipos.',
      accent: 'from-sky-500 to-cyan-400'
    },
    {
      title: 'Resultados y trazabilidad',
      description:
        'Centraliza órdenes, muestras y entregas con seguimiento claro desde la toma hasta el resultado final y validación responsable.',
      accent: 'from-cyan-500 to-teal-400'
    },
    {
      title: 'Portal para pacientes',
      description:
        'Comparte resultados, historial y documentos con acceso seguro para reducir fricción operativa y mejorar la experiencia.',
      accent: 'from-blue-600 to-sky-500'
    }
  ];

  readonly steps: PlatformStep[] = [
    {
      title: 'Configura tu operación',
      description:
        'Define sedes, usuarios, roles y flujos para que cada laboratorio arranque con una estructura clara desde el día uno.'
    },
    {
      title: 'Ejecuta órdenes y muestras',
      description:
        'Registra pacientes, procesa solicitudes y controla cada muestra con trazabilidad y estados visibles para todo el equipo.'
    },
    {
      title: 'Entrega resultados con confianza',
      description:
        'Publica PDFs, QR de verificación y accesos seguros para pacientes, médicos y personal autorizado.'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Dra. Andrea Molina',
      role: 'Dirección Médica',
      quote:
        'Pasamos de procesos dispersos a una operación ordenada y medible. La interfaz transmite confianza desde el primer contacto.'
    },
    {
      name: 'Carlos Rivas',
      role: 'Administrador de laboratorio',
      quote:
        'Lo más fuerte es la claridad del flujo. Agenda, órdenes y resultados viven en el mismo ecosistema y eso reduce errores.'
    }
  ];

  readonly pricingPlans: PricingPlan[] = [
    {
      name: 'Básico',
      price: 'Bs 550/mes',
      audience: 'Para laboratorios que están arrancando',
      summary: 'Ideal para una operación ágil con foco en pacientes, órdenes y resultados.',
      features: [
        '1 sucursal',
        'Hasta 5 usuarios',
        'Hasta 800 órdenes/mes',
        'Resultados + historial',
        'Trazabilidad base'
      ]
    },
    {
      name: 'Premium',
      price: 'Bs 1.246/mes',
      audience: 'Para equipos con crecimiento y múltiples áreas',
      summary: 'Escala el control operativo con más usuarios, sedes y mejores capacidades de auditoría.',
      features: [
        'Hasta 3 sucursales',
        'Hasta 15 usuarios',
        'Hasta 5.000 órdenes/mes',
        'Roles avanzados',
        'Auditoría básica'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Desde Bs 3.473/mes',
      audience: 'Para cadenas y requerimientos avanzados',
      summary: 'Configurable a medida para grandes volúmenes, flujos especiales y operación multi-sucursal.',
      features: [
        'Sucursales a medida',
        'Usuarios a medida',
        'Volumen negociado',
        'Auditoría avanzada',
        'Soporte prioritario'
      ]
    }
  ];

  readonly comparisonRows: ComparisonRow[] = [
    {
      label: 'Sucursales',
      basic: '1',
      premium: 'Hasta 3',
      enterprise: 'A medida'
    },
    {
      label: 'Usuarios',
      basic: 'Hasta 5',
      premium: 'Hasta 15',
      enterprise: 'A medida'
    },
    {
      label: 'Órdenes por mes',
      basic: '800',
      premium: '5.000',
      enterprise: 'A medida'
    },
    {
      label: 'QR de verificación',
      basic: 'Sí',
      premium: 'Sí',
      enterprise: 'Sí'
    },
    {
      label: 'Portal del paciente',
      basic: 'Sí',
      premium: 'Sí',
      enterprise: 'Sí'
    },
    {
      label: 'Auditoría',
      basic: 'Base',
      premium: 'Operativa',
      enterprise: 'Avanzada'
    }
  ];
}

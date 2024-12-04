export default {
  global: {
    componenteFormativo: 'Elaborando el plan de mercadeo',
    descripcionCurso:
      'El plan de mercadeo es la realidad a la que todas las empresas deben apuntar buscando entregar una realidad comercial de impacto a los consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Definición e importancia del plan de mercadeo en una empresa',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Papel del plan de mercadeo en la consecución de los objetivos comerciales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de <em>marketing mix</em> (las 4 P’s)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Producto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Precio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Plaza (distribución)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Promoción',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Integración de las 4 P’s en el <em>marketing mix</<em>',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructura básica del plan de <em>marketing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaboración del plan de mercadeo: paso a paso ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Implementación del plan de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Seguimiento y control del plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Evaluación y ajustes al plan de mercadeo',
            hash: 't_7_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_12310066_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estrategias de <em>marketing mix</em> (las 4 P’s)',
      referencia:
        'Carlos Ramírez MBA EA. (2021). <em>MARKETING MIX</em> – Las 4 Ps. La Mercadotecnia es Necesaria para el Éxito de su Negocio',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=rcCWVcyfc8U',
    },
    {
      tema: 'Formulación estratégica para el plan de mercadeo',
      referencia:
        'TEDx Talks (2020). La evolución del <em>marketing</em> | Paul Soto | TEDxUANL.',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=QyrL-K8AUuU',
    },
  ],
  glosario: [
    {
      termino: 'Bienes de consumo',
      significado:
        'Productos elaborados expresamente para que los utilice el consumidor final, en contraposición a aquellos que se fabrican para revenderlos o utilizarlos en la fabricación de otros artículos. Productos, como cigarrillos, cerveza y goma de mascar que se compran con frecuencia, inmediatamente y con poco esfuerzo.',
    },
    {
      termino: 'Bienes industriales',
      significado:
        'Artículos utilizados para producir otros bienes para su reventa.',
    },
    {
      termino: '<em>Brand</em>',
      significado: 'Marca de producto o de un servicio.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'La práctica de crear prestigio y gran valor a un producto con apoyo de <em>marketing</em>; dicha marca puede estar asociado o no a nombre de la empresa.',
    },
    {
      termino: 'Comportamiento de compra del consumidor',
      significado:
        'La conducta de compra de los consumidores finales, es decir, individuos y familias que adquieren bienes y servicios para consumo personal.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Forma que un individuo llega a las decisiones relativas a la selección, compra y uso de bienes y servicios.',
    },
    {
      termino: 'Concepto de mercadotecnia',
      significado:
        'Enfoque de administración de mercadotecnia que sostiene el logro de objetivos organizacionales depende de la determinación de las necesidades y deseos de los mercados objetivos y de la satisfacción de los mismos de manera más eficaz y eficiente que los competidores.',
    },
    {
      termino: 'Efectividad',
      significado:
        'La efectividad de un sistema de ventas está relacionada con varios factores: tipo y calidad del producto, el precio, las habilidades y preparación del vendedor.',
    },
    {
      termino: 'Mercadeo de nichos',
      significado:
        'Mercadeo que se hace a pequeños grupos de compradores que tienen necesidades especiales. Como puede ser comidas enlatadas especiales para grupos étnicos específicos.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Proceso de clasificación de clientes en grupos con distintas necesidades, características o comportamientos. Se divide un mercado en grupos de consumidores bien definidos que acaso requieran productos o mezclas de mercadotecnia distintas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baena, V. (2011). Fundamentos de <em>marketing</em>: entorno, consumidor, estrategia e investigación comercial. España: Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Kloter, P. (2008). Las preguntas más frecuentes sobre el <em>marketing</em>. Bogotá, Colombia: Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Lerma, A., & Bárcena, S. (2012). Planeación estratégica por áreas funcionales: guía práctica. México: Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Limas, S. (2012). <em>marketing</em> empresarial: dirección como estrategia competitiva. Bogotá, Colombia: Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Mesa, M. (2012). Fundamentos de <em>marketing</em>. Colombia: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Sainz de Vicuña, J. (2004). La importancia del plan de <em>marketing</em> como herramienta de gestión. España: Ediciones Deusto - Planeta de Agostini Profesional y Formación S.L.',
      link: '',
    },
    {
      referencia:
        'Schnarch, A., & Schnarch, G. (2010). <em>Marketing</em> para emprendedores. Colombia: Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Schnarch, K. (2013). <em>Marketing</em> para Pymes: un enfoque para Latinoamérica. México: Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Solomon, M., & Stuart, E. (2001). <em>Marketing</em>. Personas reales, decisiones reales (2ª ed.). Bogotá, Colombia: Pearson Educación de Colombia Ltda.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Eugenia Arango Londoño',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Johana Melina Montoya Piriachi',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Tabla Rico',
          cargo: 'Guionistas de la Línea de Producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz ',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export default {
  global: {
    componenteFormativo: 'Acompañamiento psicosocial familiar',
    descripcionCurso:
      'El modelo de acompañamiento psicosocial del programa Mi Familia busca el fortalecimiento de las capacidades de las familias como agentes de transformación social, fundamentado en el marco normativo e institucional del ICBF.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Marco normativo e institucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es el ICBF? ¿Cuáles son sus propósitos como entidad?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '¿Qué tipo de programas y servicios ofrece el ICBF?',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '¿Qué es Mi Familia?',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              '¿Cómo se articula Mi Familia con la misionalidad y oferta del ICBF?',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Población objetivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marco conceptual de Mi Familia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Familias como corresponsables de la protección integral de niñas, niños y adolescentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Carácter preventivo de Mi Familia',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Enfoques del acompañamiento psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Familias como corresponsables de la protección integral de niñas, niños y adolescentes',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Carácter preventivo de Mi Familia',
            hash: 't_3_2',
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
        download: 'downloads/prueba.pdf',
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
      tema: '1.2. ¿Qué tipo de programas y servicios ofrece el ICBF?',
      referencia: 'ICBF. (s.f.) Promoción y prevención – procesos misionales.',
      tipo: 'Sitio web',
      link: 'https://www.icbf.gov.co/misionales/promocion-y-prevencion/familia',
    },
    {
      tema: '1.3. ¿Qué es Mi Familia?',
      referencia:
        'ICBF. (2020). <em>Lineamiento técnico modalidad Mi Familia.</em>',
      tipo: 'PDF',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      tema: '3. Marco conceptual Mi Familia',
      referencia:
        'ICBF. (2023). <em>Guía de Orientaciones Metodológicas Mi Familia.</em>',
      tipo: 'PDF',
      link:
        'https://www.icbf.gov.co/system/files/procesos/g1.mo18.pp_guia_orientaciones_metodologicas_modalidad_mi_familia_v4.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Curso de vida',
      significado:
        'Hace referencia a las trayectorias vitales las cuales por su esencia cambian constantemente.',
    },
    {
      termino: 'Ecosistémico',
      significado:
        'Plantea que el desarrollo individual depende de factores ligados a uno o varios ambientes ecológicos. Este enfoque conduce a una comprensión amplia de las familias, que tiene en cuenta sus realidades y su capacidad para desarrollarse, transformarse, decidir sobre sus propios asuntos e incidir en los entornos y contextos que habitan.',
    },
    {
      termino: 'ICBF',
      significado:
        'Entidad del estado colombiano que trabaja por la protección integral de la primera infancia, la niñez, la adolescencia y el bienestar de las familias en Colombia.',
    },
    {
      termino: 'Interseccionalidad',
      significado:
        'Perspectiva base para la atención a poblaciones. Se relaciona con el análisis y reconocimiento de la discriminación cruzada, que toma nuevas formas y manifestaciones cuando se relacionan en una misma familia o personas de distintas características.',
    },
    {
      termino: 'Mi Familia',
      significado:
        'Programa de acompañamiento familiar psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de niños, niñas y adolescentes y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra.',
    },
    {
      termino: 'NNA',
      significado: 'Abreviatura de niños, niñas y adolescentes.',
    },
    {
      termino: 'PAF',
      significado: 'Abreviatura de Profesional de Acompañamiento Familiar.',
    },
    {
      termino: 'Proceso de protección',
      significado:
        'Es uno de los procesos misionales del ICBF que se enmarcan los servicios dirigidos al restablecimiento de los derechos de los niños, niñas, adolescentes y jóvenes en situación de amenaza, vulneración o en conflicto con la ley.',
    },
    {
      termino: 'Proceso de promoción y prevención',
      significado:
        'Es uno de los procesos misionales del ICBF que agrupa programas, modalidades, estrategias, planes y proyectos para la promoción de derechos y la prevención de vulneraciones en niños, niñas, adolescentes, jóvenes y familias, incorporando el enfoque diferencial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, J. P., Carrero, A. L., De Oro, K., Pacheco, M. A., & Villamizar, D. A. (2021). <em>Caracterización Socioeconómica de las Familias Beneficiarias del Programa Mi Familia</em>. Cruce base maestra - DNP. ICBF.',
      link: '',
    },
    {
      referencia:
        'Bertalanffy, L. V. (1976). <em>Teoría general de los sistemas. Fundamentos, desarrollo, aplicaciones</em>. Fondo de Cultura Económica.',
      link: '',
    },
    {
      referencia:
        'Blanco, M. (2011). El enfoque del curso de vida: orígenes y desarrollo. <em>Revista Latinoamericana de población</em>, 5(8), p,p, 5-31.',
      link: '',
    },
    {
      referencia:
        'Crenshaw, K. (1991). Interseccionalidad, política de identidad y violencia contra las mujeres de color. <em>Stanford Law Review</em>, 43(6), p,p. 1241-1299.',
      link: '',
    },
    {
      referencia:
        'Cuartas, J., Harker, A., & Moya, A. (2016). <em>Parenting, Scarcity and Violence: Theory and Evidence for Colombia</em>. Documentos CEDE. Universidad de los Andes.',
      link: '',
    },
    {
      referencia:
        'Cunha, F., & Heckman, J. (2007). The Technology of Skill Formation. <em>American Economic Review</em>, 97(2), p.p. 419-442.',
      link: '',
    },
    {
      referencia:
        'Decreto 987 de 2012. [Presidencia de la República]. Por el cual se modifica la estructura del Instituto Colombiano de Bienestar Familiar Cecilia de la Fuente de Lleras y se determinan las funciones de sus dependencias. 14 de mayo de 2012.',
      link: '',
    },
    {
      referencia:
        'DNP. (2015). <em>Tipologías de Familias en Colombia: Evolución 1993-2014. Documento de Trabajo No. 2016-1</em>. Observatorio de Políticas de las Familias - OPF.',
      link: '',
    },
    {
      referencia: 'ICBF. (2017). <em>Modelo Enfoque Diferencial</em>. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/procesos/md1.de_modelo_de_enfoque_diferencial_de_derechos_medd_v1.pdf',
    },
    {
      referencia: 'ICBF. (2019). <em>Mapa Estratégico ICBF 2019-2022</em>. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/mapa._estrategico_icbf_0.pdf',
    },
    {
      referencia:
        'ICBF. (2020). <em>Mapa Estratégico ICBF 2019 - 2022 - Versión 2</em>.',
      link: 'https://www.icbf.gov.co/system/files/mapa_estrategico_2020_v2.pdf',
    },
    {
      referencia:
        'ICBF. (2021). <em>Informe de Gestión ICBF 2020</em>. Instituto Colombiano de Bienestar Familiar, Bogotá, D.C.',
      link:
        'https://www.icbf.gov.co/sites/default/files/informe_de_gestion_icbf_2020.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. (2020). <em>Lineamiento Técnico Modalidad Mi Familia.</em> ',
      link:
        'https://www.icbf.gov.co/system/files/procesos/lm10.pp_lineamiento_tecnico_administrativo_modalidad_mi_familia_v2.pdf',
    },
    {
      referencia:
        'Kuehlein, T. (2009). <em>Prevención cuaternaria, actividad del médico general.</em>',
      link: '',
    },
    {
      referencia:
        'Villa Gómez, J. D. (2012). La acción y el enfoque psicosocial de la intervención en contextos sociales: ¿podemos pasar de la moda a la precisión teórica, epistemológica y metodológica? <em>El Ágora USB</em>, 12(2), p.p. 349-365.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sonia Milena Moreno Paez',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Mayra Alexandra Pacheco Montealegre',
          cargo: 'Experta',
          centro: 'ICBF',
        },
        {
          nombre: 'Diego Fernando Ramírez Bermúdez',
          cargo: 'Experto',
          centro: 'ICBF',
        },

        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Animación y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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

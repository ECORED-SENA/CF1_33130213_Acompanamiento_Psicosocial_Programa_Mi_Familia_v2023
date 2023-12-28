<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Marco normativo e institucional

    .bg_01
      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img01.svg')
        .col-lg-7(data-aos="fade-left")
          p El marco normativo e institucional permite reconocer la contribución del programa Mi Familia de la Dirección de Familias y Comunidades al cumplimiento de la misión del ICBF que es, en suma, lograr el fortalecimiento de capacidades familiares y comunitarias para alcanzar su bienestar.
          p Este apartado presenta información relacionada con la definición, propósitos, misionalidad, funciones y arquitectura institucional del ICBF. Así mismo, se abordan los programas y servicios que ofrece a las familias colombianas, haciendo énfasis en el programa Mi Familia, y su articulación con la misionalidad y oferta del ICBF.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.1 ¿Qué es el ICBF? ¿Cuáles son sus propósitos como entidad?

    .bg_02.mb-5
      .row.justify-content-center
        .col-lg-11.order-2.order-lg-1(data-aos="fade-left")
          p <b>El Instituto Colombiano de Bienestar Familiar (ICBF) es la entidad del Estado colombiano que trabaja por la protección integral de la primera infancia, la niñez, la adolescencia y el bienestar de las familias en Colombia.</b> El ICBF tiene una amplia presencia en el territorio colombiano, tal y como se evidencia en la siguiente infografía (ver figura 1).
        .col-lg-1.order-1.order-lg-2(data-aos="fade-right")
          figure
            img.img-t.m_left.mb-4(src='@/assets/curso/tema1/img02.svg')

    .row.mb-4.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
          h5 Figura 1.
          span <em>Cobertura nacional del ICBF</em>

    .bg_mapa_colombia.bg-full.bg-yellow-lighten.p-5.mb-5
      .row.pt-5.mb-5
        .col-lg-4.me-lg-5
        .col-lg-3(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img04.svg')
        .col-lg-3(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img05.svg', alt="El ICBF cuenta con 33 sedes regionales, 220 centros zonales y 3 millones de beneficiarios.")

      .row.justify-content-center.mb-4(data-aos="fade-down-right")
        .col-lg-4.col-xl-4.col-xxl-3.mb-4
          .tabla-a.color-acento-contenido
            table.m_tablas
              thead
                tr.bg_color2
                  td.h5.text-center Regional
                  td.h5.text-center Centros <br> zonales
              tbody.bg_color3
                tr
                  td.text-bold.text-center Amazonas
                  td.text-center 1
                tr
                  td.text-bold.text-center Antioquia
                  td.text-center 17
                tr
                  td.text-bold.text-center Arauca
                  td.text-center 3
                tr
                  td.text-bold.text-center Atlántico
                  td.text-center 7
                tr
                  td.text-bold.text-center Bogotá
                  td.text-center 15
                tr
                  td.text-bold.text-center Bolívar
                  td.text-center 8
                tr
                  td.text-bold.text-center Boyacá
                  td.text-center 12
                tr
                  td.text-bold.text-center Caldas
                  td.text-center 7
                tr
                  td.text-bold.text-center Caquetá
                  td.text-center 4
                tr
                  td.text-bold.text-center Casanare
                  td.text-center 3
                tr
                  td.text-bold.text-center Cauca
                  td.text-center 7
        .col-lg-4.col-xl-4.col-xxl-3.mb-4
          .tabla-a.color-acento-contenido
            table.m_tablas
              thead
                tr.bg_color2
                  td.h5.text-center Regional
                  td.h5.text-center Centros <br> zonales
              tbody.bg_color3
                tr
                  td.text-bold.text-center César
                  td.text-center 15
                tr
                  td.text-bold.text-center Chocó
                  td.text-center 5
                tr
                  td.text-bold.text-center Córdoba
                  td.text-center 8
                tr
                  td.text-bold.text-center Cundinamarca
                  td.text-center 14
                tr
                  td.text-bold.text-center Guainía
                  td.text-center 1
                tr
                  td.text-bold.text-center Guaviare
                  td.text-center 1
                tr
                  td.text-bold.text-center Huila
                  td.text-center 5
                tr
                  td.text-bold.text-center Guajira
                  td.text-center 6
                tr
                  td.text-bold.text-center Magdalena
                  td.text-center 8
                tr
                  td.text-bold.text-center Meta
                  td.text-center 5
                tr
                  td.text-bold.text-center Nariño
                  td.text-center 8
        .col-lg-4.col-xl-4.col-xxl-3
          .tabla-a.color-acento-contenido
            table.m_tablas
              thead
                tr.bg_color2
                  td.h5.text-center Regional
                  td.h5.text-center Centros <br> zonales
              tbody.bg_color3
                tr
                  td.text-bold.text-center N. de Santander
                  td.text-center 6
                tr
                  td.text-bold.text-center Putumayo
                  td.text-center 4
                tr
                  td.text-bold.text-center Quindío
                  td.text-center 3
                tr
                  td.text-bold.text-center Risaralda
                  td.text-center 5
                tr
                  td.text-bold.text-center San Andrés
                  td.text-center 1
                tr
                  td.text-bold.text-center Santander
                  td.text-center 10
                tr
                  td.text-bold.text-center Sucre
                  td.text-center 4
                tr
                  td.text-bold.text-center Tolima
                  td.text-center 10
                tr
                  td.text-bold.text-center Valle
                  td.text-center 15
                tr
                  td.text-bold.text-center Vaupés
                  td.text-center 1
                tr
                  td.text-bold.text-center Vichada
                  td.text-center 1

      //.row.justify-content-center.mb-4(data-aos="fade-down-right")
        .col-xl-9
          figcaption.color_enlace Nota. Imagen referencia: #[a(href="https://es.wikipedia.org/wiki/Departamentos_de_Colombia#/media/Archivo:Mapa_de_Colombia_(departamentos).svg" target='_blank')  Clic para ver enlace sitio web wikipedia]

    p.mb-5 El ICBF hace parte del Sector de Inclusión Social y la Reconciliación, encabezado por el Departamento para la Prosperidad Social. Las competencias de este sector se enmarcan en la superación de la pobreza, la inclusión social y la reconciliación, la atención de grupos vulnerables, la atención integral a la primera infancia, infancia, adolescencia y bienestar de las familias colombianas, la atención, asistencia y reparación a víctimas del conflicto armado; así como de la definición de políticas para la construcción de memoria de los hechos ocurridos con ocasión del conflicto armado (ICBF, 2021).
    p.text-bold.mb-5 De acuerdo con su actual mapa estratégico (2019-2022), la visión del ICBF es:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Liderar la “construcción de un país en el que los niños, niñas, adolescentes y jóvenes se desarrollen en condiciones de equidad y libres de violencias” y su misión es “promover el desarrollo y la protección integral de los niños, niñas y adolescentes, así como el fortalecimiento de las capacidades de los jóvenes y las familias como actores clave de los entornos protectores y principales agentes de transformación social".
            i.fas.fa-quote-right
          .bloque-texto-d__autor
            .h5.mb-0 (ICBF, 2020).
      .col-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img06.svg')

    p Para dar cumplimiento a lo expuesto, el ICBF diseña e implementa modalidades y servicios a través de sus áreas misionales (Primera Infancia, Infancia, Adolescencia y Juventud, Familias y Comunidades, Nutrición y, Protección), a la vez que es ente rector y coordinador del Sistema Nacional de Bienestar, del cual hacen parte las entidades nacionales y territoriales con funciones y competencias enmarcadas en la protección integral de las niñas, niños y adolescentes y el fortalecimiento familiar.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.2 ¿Qué tipo de programas y servicios ofrece el ICBF?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img07.png')
      .col-lg-8(data-aos="fade-right")
        p Para el diseño e implementación de sus programas y servicios, el ICBF cuenta con seis (6) direcciones misionales agrupadas en dos procesos: <b>protección y promoción y prevención.</b>
        p En el <b>proceso misional de protección</b> se enmarcan los servicios dirigidos al restablecimiento de los derechos de los niños, niñas, adolescentes y jóvenes en situación de amenaza, vulneración o en conflicto con la ley. Este proceso es liderado por la Dirección de Protección, la cual desarrolla acciones para el restablecimiento y garantía de los derechos vulnerados, amenazados o inobservados a niños, niñas o adolescentes. Para lo anterior presta cuatro (4) tipo de servicios:

    //TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="zoom-in-down")
    .bg-full.bg-green-lighter.p-5.mb-5
      TabsB.bg-green-lighter
        .py-4.py-md-5(titulo="Restablecimiento de derechos" :icono="require('@/assets/curso/tema1/img08.svg')")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Restablecimiento de derechos
              p Consiste en medidas, a que haya lugar, cuando se evidencian derechos amenazados o vulnerados, las cuales pueden ser el retiro inmediato del medio familiar para ubicarlo en un medio institucional u hogar sustituto, amonestación a los padres para establecer compromisos, asistencia y asesoría a la familia, remisión a procesos terapéuticos en una entidad de salud, ubicación en familia extensa, entre otras.
            .col-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Sistema de Responsabilidad Penal Adolescente" :icono="require('@/assets/curso/tema1/img09.svg')")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Sistema de Responsabilidad Penal Adolescente
              p Incluye los servicios para el cumplimiento de las sanciones impuestas a personas que cometen un hecho punible entre los catorce (14) y los dieciocho (18) años. Las modalidades incluyen medidas privativas y no privativas de la libertad, modalidades complementarias y de restablecimiento en administración de justicia y modalidades de fortalecimiento a la inclusión social.
            .col-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img13.png', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Adopciones" :icono="require('@/assets/curso/tema1/img10.svg')")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Adopciones
              p Permite el restablecimiento del derecho de las niñas, niños y adolescentes a crecer en el seno de una familia y se sustenta en el principio de interés superior del niño.
            .col-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Alianzas estratégicas y Proyecto sueños" :icono="require('@/assets/curso/tema1/img11.svg')")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h4 Alianzas estratégicas y Proyecto sueños
              p Integra variedad de programas y proyectos que contribuyen al desarrollo de proyectos de vida autónomos e independientes de las niñas, niños, adolescentes y jóvenes, con medidas de protección o vinculados al Sistema de Responsabilidad Penal para Adolescentes (SRPA).
            .col-lg-5
              figure
                img.img-t.m-auto(src='@/assets/curso/tema1/img15.png', alt='Texto que describa la imagen')

    p.mb-5 Por su parte, <b>el proceso misional de promoción y prevención</b> agrupa programas, modalidades, estrategias, planes y proyectos para la promoción de derechos y la prevención de vulneraciones en niños, niñas, adolescentes, jóvenes y familias, incorporando el enfoque diferencial. De este proceso hacen parte las direcciones misionales de primera infancia, infancia, adolescencia y juventud, familias y comunidades y nutrición.

    AcordionA(tipo="b" clase-tarjeta="tarjeta bg-yellow-light")(data-aos="fade-down-right")
      div(titulo="Primera infancia")
        p Ofrece servicios de Educación Inicial para el momento del curso de la vida que va desde la gestación hasta los seis (6) años en el marco de la <b>Política de Estado para el Desarrollo Integral de la Primera Infancia De Cero a Siempre.</b>

        .row
          .col-xl-8
            p Estos servicios se agrupan en cuatro (4) modalidades:

            p <b>Institucional:</b> funciona en espacios especializados, priorizando a las niñas y niños desde los 2 y hasta los 4 años, 11 meses y 29 días, incluye servicios como Centros de Desarrollo Infantil (CDI), Hogar Infantil (HI), Jardín Social, Hogar Múltiple, Hogar Empresarial, entre otros.
            p <b>Familiar:</b> se desarrolla en entornos cercanos y propios de las comunidades y se sustenta en el acompañamiento a las familias y cuidadores en los procesos de cuidado y crianza, prioriza la atención en los primeros 1000 días de vida y cuenta con los servicios de Desarrollo Infantil en Medio Familiar (DIMF) y Hogares Comunitarios de Bienestar Familiar (FAMI).
            p <b>Comunitaria:</b> constituye un escenario de acogida para niñas y niños desde los 18 meses hasta los 4 años, 11 meses y 29 días, sus familias y cuidadores. Esta modalidad se basa en la amplia experiencia de los Hogares Comunitarios de Bienestar (HCB) y tienen un énfasis en lo comunitario como elemento que aporta al desarrollo integral e incluye los servicios de HCB, HCB Agrupados y HCB Integrales.
            p <b>Propia e Intercultural:</b> funciona principalmente en los territorios étnicos y zonas rurales y rurales dispersas del país y busca garantizar el servicio de educación inicial con estrategias y acciones pertinentes, oportunas y de calidad, respondiendo a las características propias de los territorios y comunidades.
          .col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img16.png', alt='')

      .row(titulo="Infancia")
        .col-lg-8
          p El proceso de promoción y prevención en el componente de infancia tiene como objetivo proponer, diseñar y ejecutar políticas, planes, programas y proyectos, para la promoción y garantía de los derechos de la infancia y la prevención de su vulneración. De acuerdo con las disposiciones vigentes sobre la materia, la mencionada área misional orienta su oferta a niñas y niños entre los 6 años y 13 años, 11 meses y 29 días, en el marco de la protección integral y la Política Nacional de Infancia y Adolescencia.
          p Además, contribuye a fortalecer la comprensión y definición de acciones de promoción de derechos y de prevención de vulneraciones; reconocer el marco jurídico del país en la materia; así como brindar herramientas conceptuales y metodológicas mediante la armonización de enfoques y conceptos interdependientes que permitan determinar las acciones de promoción y prevención de la Familia, la Sociedad y el Estado.
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')

      div(titulo="Adolescencia y juventud")
        .row
          .col-lg-8
            p El proceso de promoción y prevención en el componente de adolescencia y juventud promueve la garantía de los derechos a través del fortalecimiento de las habilidades del Siglo XXI en las y los adolescentes, y jóvenes entre 14 y 28 años para que, a través de metodologías innovadoras y disruptivas, consoliden sus proyectos de vida, promuevan las ciudadanías activas y responsables, y detonen sus talentos para su bienestar, el de sus familias y la comunidad.
            p A través de estos procesos, se acompaña en el empoderamiento del individuo para prevenir a su vez las vulneraciones y mitigar los riesgos a los que están expuestos y en el entendido de que adolescentes y jóvenes son agentes de cambio y gestores del desarrollo social y económico del país.
          .col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img18.png', alt='')

      div(titulo="Familias y comunidades")
        .row
          .col-lg-8
            p Es la dirección encargada de liderar los programas y planes relativos a la familia y comunidad para avanzar en su protección integral, su reconocimiento como sujeto colectivo de derechos y en el fortalecimiento de sus capacidades como corresponsables en la protección integral de sus miembros, en especial de los niños, niñas y adolescentes.
            p Los programas a cargo de esta dirección son Territorios Étnicos con Bienestar TEB dirigido de manera exclusiva a la atención de familias y comunidades pertenecientes a los grupos étnicos de nuestro país; y Mi Familia, un programa de acompañamiento psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de niños, niñas y adolescentes y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra, dirigido a familias con NNA que estén o hayan estado en procesos de Protección, a familias con NNA en alto riesgo de vulneración de derechos y a familias vulnerables con NNA con discapacidad.
          .col-lg-4
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img19.png', alt='')

      div(titulo="Nutrición")
        .row
          .col-lg-8
            p Es el área encargada de desarrollar acciones para la prevención y atención de la desnutrición. Su oferta de servicios está conformada por Centros de Recuperación Nutricional (CRN) donde se brinda atención intramural para la recuperación del estado nutricional de niñas y niños menores de 5 años; programa 1000 días para cambiar el mundo, cuyo objetivo es promover el desarrollo en los mil primeros días de vida, a través de la prevención de la desnutrición aguda en niñas y niños menores de 5 años y la atención del bajo peso en mujeres gestantes, el bajo peso al nacer y el retraso en talla; y las Unidades de Búsqueda Activa (UBA), constituidas por equipos que desarrollan actividades de identificación y captación de niñas y niños con desnutrición aguda y riesgo de desnutrición aguda y, mujeres gestantes con bajo peso para la edad gestacional, de zonas rurales y rurales dispersas para activar las rutas de prevención de la desnutrición y gestionar su acceso a otros servicios sociales.
          .col-lg-4.mb-4.mb-lg-0
            figure
              img.img-t.m-auto(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')

        p Esta dirección también se encarga de administrar la producción, compra y distribución de Alimentos de Alto Valor Nutricional en los servicios del ICBF y en poblaciones vulnerables, en articulación con el sector salud, entidades territoriales y otras organizaciones.


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.3 ¿Qué es Mi Familia?

    .bg_02.mb-5
      .row.justify-content-center
        .col-lg-11.order-2.order-lg-1(data-aos="fade-right")
          p La modalidad Mi Familia constituye una intervención dirigida a las familias, que busca promover el desarrollo integral y el fortalecimiento de capacidades en el ejercicio de su rol como corresponsables en la protección integral de los niños, niñas y adolescentes y en la prevención de las violencias, abusos o negligencia al interior de las familias.
        .col-lg-1.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m_left(src='@/assets/curso/tema1/img22.svg')

    .row.justify-content-center.align-items-center.pb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img23.png')
      .col-lg-8(data-aos="fade-right")
        p Mi Familia parte de una comprensión de las familias como agentes activos de su propio desarrollo, capaces de identificar sus recursos y potencialidades, provocar cambios en sus dinámicas familiares, y reconocer sus logros y avances. La modalidad, por su parte, se implementa en el ámbito de la confidencialidad, respeto, aceptación, dialogo, observación, autonomía y reconocimiento de sus derechos, para la transformación de las formas de interacción y relacionamiento familiar.
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Las familias que participan en esta modalidad cuentan con acompañamiento psicosocial que se adapta a sus necesidades y particularidades, a través del cual se motiva el reconocimiento de sus recursos y capacidades y las invita a practicar formas de relacionamiento democráticas, basadas en el respeto y libres de violencia, que les permitan cumplir de manera adecuada su función de protección y promoción del desarrollo de niñas, niños y adolescentes.


    .bg_02.mb-5
      .row.justify-content-center
        .col-lg-11.order-2.order-lg-1(data-aos="fade-right")
          p Adicionalmente, Mi Familia se fundamenta en un enfoque ecosistémico, que reconoce la existencia de factores protectores y de riesgo que se generan en las interacciones al interior y entre los sistemas en los que está inmerso niñas, niños y adolescentes y la familia, lo que motiva la necesidad de abordar las relaciones y dinámicas familiares, la interacción de la familia con el entorno y promover el fortalecimiento social y el acceso a servicios sociales.
        .col-lg-1.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m_left(src='@/assets/curso/tema1/img30.svg')


    p.mb-5 #[b En el trabajo con las familias que se realiza a través de Mi Familia se establecen las siguientes orientaciones:]

    .row.align-items-stretch.mb-5
      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 1

          p.text-center Las familias cuentan con recursos para solucionar sus problemas y promover cambios en sus dinámicas relacionales que les permitan fortalecer su función protectora.

      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 2

          p.text-center Todas las familias en algún momento de su historia experimentan situaciones estresantes o donde no cuentan con los recursos o apoyos suficientes para enfrentar los retos que se derivan de las transiciones vitales o de las crisis. En estos momentos, a través de diversas estrategias de apoyo y acompañamiento, se pueden promover o potenciar las capacidades de las familias para superar las dificultades y salir fortalecidas.

      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 3

          p.text-center Las familias son sujetos de derechos y agentes activos de su propio desarrollo, transformación y resignificación, con capacidad de decidir sobre sus propios asuntos, provocando cambios en el relacionamiento y dinámicas entre sus integrantes.

      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 4
          p.text-center La familia es una colectividad de individuos interdependientes que experimentan cambios constantes a lo largo de su vida, tanto individuales como colectivo, por lo que es necesario tener en cuenta su historia, contexto y evolución.

      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 5
          p.text-center Las familias son diversas, no existe una única forma o modelo de familia.

      .col-lg-6.col-xl-4.mb-4
        .tarjeta-numerada.color-acento-botones.p-5.h-100
          .tarjeta-numerada__numero
            .h2.text-white 6
          p.text-center En la protección integral las actuaciones no son lineales, es decir, una familia o niñas, niños y adolescentes que haya tenido en su historia alguna vulneración o amenaza de derechos puede recibir servicios complementarios para prevenir futuras vulneraciones.


    .bg_color5.p-4.mb-5
      .row.align-items-center
        .col-auto.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img31.svg')
        .col(data-aos="fade-left")
          p.m-0 Sumado a lo anterior, otra orientación es comprender, ser sensibles y visibilizar las dinámicas de discriminación y exclusión social, respecto de aquellas familias con otras características que les sitúan en mayor vulnerabilidad (pertenencia étnica, ser víctimas del conflicto armado, habitar en territorios rurales o urbanos, tener integrantes con orientaciones sexuales e identidades de género diversas o con discapacidad, entre otras). Implica desarrollar acciones diferenciales, desde una mirada de interseccionalidad, para que puedan gozar de sus derechos en igualdad de condiciones.


    p.mb-5 Partiendo del reconocimiento de las diferencias territoriales, Mi Familia propone adaptaciones en el modelo de intervención, a partir de lo cual surge Mi Familia Urbana y Mi Familia Rural. A continuación, se describen los componentes del modelo.


    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6(data-aos="fade-right").mb-4.mb-lg-0
        .bg_05.p-0.h-100
          .bg_04
            .p-4
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img32.svg')
          .p-4
            .row.justify-content-center
              .col-lg-11
                p #[strong Objetivo general]
                p Fortalecer las capacidades individuales y colectivas con familias en situación de vulnerabilidad, para promover el desarrollo familiar y el fortalecimiento del tejido social para la protección integral de los niños, niñas y adolescentes y contribuir a la prevención de violencias, negligencias y/o abusos en su contra.
      .col-lg-6(data-aos="fade-left")
        .bg_07.p-0.h-100
          .bg_06
            .p-4
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img33.svg')
          .p-4
            .row.justify-content-center
              .col-lg-11
                p #[strong Objetivos específicos Mi Familia Urbana y Mi Familia Rural]
                ul.lista-ul--color
                  li
                    i.lista-ul__vineta
                    span Fortalecer con las familias sus capacidades para el cuidado mutuo y afrontar las situaciones problemáticas, mediante metodologías que partan de los intereses, saberes y recursos de sus integrantes, facilitando la transformación de sus interacciones cotidianas.
                  li
                    i.lista-ul__vineta
                    span Fortalecer el tejido social en comunidades rurales y urbanas, mediante el intercambio de experiencias entre las familias y con otros actores o referentes comunitarios, a través de ejercicios colectivos que aporten en la construcción de comunidades protectoras.
                  li
                    i.lista-ul__vineta
                    span Potenciar las capacidades familiares y comunitarias identificadas para fortalecer aspectos relacionados con el capital social y la construcción de redes de solidaridad.

    .bg_color5.p-4
      .row.align-items-center
        .col-auto.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img26.svg')
        .col(data-aos="fade-left")
          p.m-0 Las actuaciones frente a la protección integral de los niños, niñas y adolescentes pueden ser promocionales, de prevención, de mitigación o remediales. Las primeras se desarrollan usualmente de manera universal, antes de una amenaza, vulneración o violación de derechos, mientras que, las de mitigación o remediales responden al mandato de restablecimiento inmediato de los derechos ante su vulneración o violación.

    Separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.4 ¿Cómo se articula Mi Familia con la misionalidad y oferta del ICBF?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-last.order-lg-first(data-aos="fade-right")
        p El programa Mi Familia, como se ha mencionado, es implementado por la Dirección de Familias y Comunidades del ICBF la cual hace parte del proceso misional de Promoción y Prevención. La Dirección de Familias y Comunidades tiene, entre otras, funciones relacionadas con la implementación de políticas, programas y proyectos relativos a la familia y comunidad dentro del ICBF; el diseño de referentes de atención a la familia y comunidad en coordinación y articulación con entidades del Sistema Nacional de Bienestar Familiar y la definición de esquemas de operación de sus servicios, dirigidos a las familias y las comunidades (Decreto 987, 2012).
        p En el cumplimiento de sus funciones, la Dirección de Familias y Comunidades incorpora la visión y misión del ICBF y contribuye al logro de sus apuestas estratégicas. Por lo anterior, el programa de acompañamiento familiar psicosocial Mi Familia, tiene su foco en el acompañamiento a las familias como corresponsables en la protección integral de los niños, niñas y adolescentes.
      .col-lg-5.order-first.order-lg-last.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img27.svg')

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-8
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img28.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la implementación del programa se incorpora el reconocimiento de las familias como sujetos colectivos de derechos, con recursos y capacidades, que se conforman de formas diversas en respuesta a su historia y contexto cultural y territorial y, que tienen la capacidad de transformarse y transformar sus entornos.

    p.mb-5 El programa Mi Familia se comprende en el contexto institucional del ICBF como parte de su proceso misional de promoción y prevención, como ya se ha señalado. A través de su implementación se refuerzan los efectos e impactos de la oferta del ICBF dirigida a los sujetos individuales (primera infancia, infancia, adolescencia y juventud), complementando la atención individual con acompañamiento a las familias en tanto se reconocen como el sistema más significativo para el desarrollo de niños, niñas y adolescentes.

    .bg-full.bg-yellow-lighten
      .row.align-items-center
        .col-auto
          img.img-t.m-auto(src='@/assets/curso/tema1/img29.svg')
        .col
          p.m-0 Esta atención complementaria se concentra en familias que enfrentan situaciones de riesgo significativo o que están atravesando por momentos de transición o crisis, para fortalecer sus capacidades para promover el desarrollo de sus integrantes, en especial de los niños, niñas y adolescentes.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tabs-b
  border-bottom: 0px
</style>

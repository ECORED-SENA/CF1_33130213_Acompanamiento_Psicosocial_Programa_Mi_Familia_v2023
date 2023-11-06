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

    .bg_03.p-5.mb-5
      .row.pt-5.mb-5
        .col-lg-4.me-lg-5
        .col-lg-3(data-aos="fade-right")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img04.svg')
        .col-lg-3(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img05.svg')

      .row.justify-content-center.mb-4(data-aos="fade-down-right")
        .col-lg-3.col-xl-4.col-xxl-3.mb-4.mb-lg-0         
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
        .col-lg-3.col-xl-4.col-xxl-3.mb-4.mb-lg-0          
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
        .col-lg-3.col-xl-4.col-xxl-3          
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

      .row.justify-content-center.mb-4(data-aos="fade-down-right")
        .col-lg-9 
          figcaption.color_enlace Nota. Imagen referencia: #[a(href="https://es.wikipedia.org/wiki/Departamentos_de_Colombia#/media/Archivo:Mapa_de_Colombia_(departamentos).svg" target='_blank')  https://es.wikipedia.org/wiki/Departamentos_de_Colombia#/media/Archivo:Mapa_de_Colombia_(departamentos).svg]

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

    TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="zoom-in-down")
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

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row(titulo="Primera infancia")
        p.ms-lg-5.p_right Ofrece servicios de Educación Inicial para el momento del curso de la vida que va desde la gestación hasta los seis (6) años en el marco de la <b>Política de Estado para el Desarrollo Integral de la Primera Infancia De Cero a Siempre.</b> 
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Estos servicios se agrupan en cuatro (4) modalidades: 
          p <b>Institucional:</b> funciona en espacios especializados, priorizando a las niñas y niños desde los 2 y hasta los 4 años, 11 meses y 29 días, incluye servicios como Centros de Desarrollo Infantil (CDI), Hogar Infantil (HI), Jardín Social, Hogar Múltiple, Hogar Empresarial, entre otros.
          p <b>Familiar:</b> se desarrolla en entornos cercanos y propios de las comunidades y se sustenta en el acompañamiento a las familias y cuidadores en los procesos de cuidado y crianza, prioriza la atención en los primeros 1000 días de vida y cuenta con los servicios de Desarrollo Infantil en Medio Familiar (DIMF) y Hogares Comunitarios de Bienestar Familiar (FAMI).
          p <b>Comunitaria:</b> constituye un escenario de acogida para niñas y niños desde los 18 meses hasta los 4 años, 11 meses y 29 días, sus familias y cuidadores. Esta modalidad se basa en la amplia experiencia de los Hogares Comunitarios de Bienestar (HCB) y tienen un énfasis en lo comunitario como elemento que aporta al desarrollo integral e incluye los servicios de HCB, HCB Agrupados y HCB Integrales. 
          p <b>Propia e Intercultural:</b> funciona principalmente en los territorios étnicos y zonas rurales y rurales dispersas del país y busca garantizar el servicio de educación inicial con estrategias y acciones pertinentes, oportunas y de calidad, respondiendo a las características propias de los territorios y comunidades.
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img16.png', alt='Texto que describa la imagen')

      .row(titulo="Infancia")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Ofrece servicios y desarrolla planes y proyectos de promoción de derechos y prevención de vulneraciones durante la infancia comprendida entre los 6 y 13 años, 11 meses y 29 días.
          p Entre sus servicios incluye programas para el fortalecimiento de capacidades e inclusión social de niños, niñas y adolescentes con discapacidad y sus familias (De tú a tú); programa para la prevención de riesgos específicos de trabajo infantil, violencia al interior de las familias y violencias sexuales y el impulso de proyectos de vida legales, sostenibles y libres de violencia (Katünaa); programa de promoción de derechos, prevención de vulneraciones y construcción de proyecto de vida a partir de la exploración de vocaciones, intereses y talentos (Generación Explora); programa de promoción de la protección integral y proyectos de vida de las niñas y los niños que pertenezcan o se autorreconozcan como parte de una comunidad étnica (Generaciones Étnicas con Bienestar).
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img17.png', alt='Texto que describa la imagen')
    
      .row(titulo="Adolescencia y juventud")
        p.ms-lg-5.p_right Tiene como propósito promover los derechos de la adolescencia y la juventud (14 a 28 años), prevenir las situaciones que ponen en riesgo la garantía de los mismos y generar oportunidades para la construcción de proyectos de vida que aporten al desarrollo personal de adolescentes y jóvenes, así como al de sus entornos próximos. <b>Dentro de la oferta de esta Dirección se encuentra:</b> 
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p El programa Generaciones Sacúdete, centrado en el acompañamiento a la formulación de proyectos de vida a través de procesos de formación, fortalecimiento de habilidades del siglo XXI y el ejercicio de la ciudadanía.
          p Generaciones Sacúdete Étnico a través del cual se acompaña a adolescentes y jóvenes de comunidades étnicas en la formulación de proyectos de vida propios y planes de vida colectivos para la preservación de su identidad y diversidad cultural.
          p Otras Formas de Atención Sacúdete, un programa de promoción de derechos prevención de riesgos específicos de embarazo en la adolescencia, violencias basadas en género,  reclutamiento, uso y violencia sexual por parte de grupos armados organizados y grupos delictivos organizados y, uso y consumo de sustancias psicoactivas. 
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img18.png', alt='Texto que describa la imagen')

      .row(titulo="Familias y comunidades")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Es la dirección encargada de liderar los programas y planes relativos a la familia y comunidad para avanzar en su protección integral, su reconocimiento como sujeto colectivo de derechos y en el fortalecimiento de sus capacidades como corresponsables en la protección integral de sus miembros, en especial de los niños, niñas y adolescentes.
          p Los programas a cargo de esta dirección son Territorios Étnicos con Bienestar TEB dirigido de manera exclusiva a la atención de familias y comunidades pertenecientes a los grupos étnicos de nuestro país; y Mi Familia, un programa de acompañamiento psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de niños, niñas y adolescentes y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra, dirigido a familias con NNA que estén o hayan estado en procesos de Protección, a familias con NNA en alto riesgo de vulneración de derechos y a familias vulnerables con NNA con discapacidad.
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img19.png', alt='Texto que describa la imagen')

      .row(titulo="Nutrición")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Es el área encargada de desarrollar acciones para la prevención y atención de la desnutrición. Su oferta de servicios está conformada por Centros de Recuperación Nutricional (CRN) donde se brinda atención intramural para la recuperación del estado nutricional de niñas y niños menores de 5 años; programa 1000 días para cambiar el mundo, cuyo objetivo es promover el desarrollo en los mil primeros días de vida, a través de la prevención de la desnutrición aguda en niñas y niños menores de 5 años y la atención del bajo peso en mujeres gestantes, el bajo peso al nacer y el retraso en talla; y las Unidades de Búsqueda Activa (UBA), constituidas por equipos que desarrollan actividades de identificación y captación de niñas y niños con desnutrición aguda y riesgo de desnutrición aguda y, mujeres gestantes con bajo peso para la edad gestacional, de zonas rurales y rurales dispersas para activar las rutas de prevención de la desnutrición y gestionar su acceso a otros servicios sociales.         
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
        p.mx-lg-5 Esta dirección también se encarga de administrar la producción, compra y distribución de Alimentos de Alto Valor Nutricional en los servicios del ICBF y en poblaciones vulnerables, en articulación con el sector salud, entidades territoriales y otras organizaciones. 

    p.mb-5 Se puede sintetizar entonces, la oferta de programas del ICBF de la siguiente manera, en la que además se logra identificar el programa a desarrollar (ver figura 2):

    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 2.
      span <em>Oferta de Programas del ICBF</em>  

    .bg_color4.p-5
      figure(data-aos="zoom-in-up")
        img.img-t.m-auto(src='@/assets/curso/tema1/img21.svg', alt='')

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 1.3 ¿Qué es Mi Familia?

    .bg_02.mb-5
      .row.justify-content-center
        .col-lg-11.order-2.order-lg-1(data-aos="fade-right")
          p Mi Familia es un programa de acompañamiento familiar psicosocial que tiene como objetivo fortalecer las capacidades de las familias para promover el desarrollo integral de niños, niñas y adolescentes y reducir y mitigar los efectos de la violencia, el abuso o la negligencia en su contra, de forma que se salvaguarden los derechos de la niñez y la adolescencia. <b>Para ampliar la información sobre qué es Mi Familia, lo invitamos a ver el siguiente video:</b>
        .col-lg-1.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m_left(src='@/assets/curso/tema1/img22.svg')

    p.text-bold Mi Familia 

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/KCP9XzSmm_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.pb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img23.png')
      .col-lg-8(data-aos="fade-right") 
        p El acompañamiento psicosocial que ofrece Mi Familia inicia con la medición de habilidades tanto en padres, madres o cuidadores como en los niños, niñas y adolescentes a través de test psicológicos. Esto permite realizar un diagnóstico inicial y brindar un acompañamiento diseñado a la medida de cada familia. Las sesiones están conformadas por un ciclo básico y uno de profundización. 
        p Durante el ciclo básico se abordan temáticas relacionadas con el autocuidado y cuidado del otro, regulación emocional, vinculación positiva, comunicación asertiva y resolución de conflictos, entre otros. El ciclo de profundización ofrece la posibilidad de abordar con las familias temáticas que responden a sus intereses y particularidades (ver figura 3).

    .row.mb-5.justify-content-center  
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
          h5 Figura 3.
          span <em>Sesiones de acompañamiento del programa</em> 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-4.col-md-6.mb-5.mb-lg-0.pb-4.pb-lg-0(data-aos="fade-right")
        .bg_04.p-4
          figure
            img.img-t.mx-auto.m_top1(src='@/assets/curso/tema1/img24.svg')                     
        .bg_05.p-4
          .row.justify-content-center
            .col-lg-11 
              p.text-bold Ciclo básico
              ul.lista-ul
                li 
                  i.fas.fa-check-circle
                  | Autocuidado y cuidado del otro.
                li 
                  i.fas.fa-check-circle
                  | Regulación emocional.
                li 
                  i.fas.fa-check-circle
                  | Vinculación positiva.
                li 
                  i.fas.fa-check-circle
                  | Comunicación asertiva.
                li 
                  i.fas.fa-check-circle
                  | Resolución de conflictos.
      .col-lg-4.col-md-6(data-aos="fade-left")
        .bg_06.p-4
          figure
            img.img-t.m_top2(src='@/assets/curso/tema1/img25.svg') 
        .bg_07.p-4
          .row.justify-content-center
            .col-lg-11 
              p.text-bold Ciclo de profundización
              ul.lista-ul
                li 
                  i.fas.fa-check-circle
                  | Prevención del consumo de sustancias psicoactivas –SPA.
                li 
                  i.fas.fa-check-circle
                  | Vivencia de la sexualidad en la familia.
                li 
                  i.fas.fa-check-circle
                  | Prevención de la violencia sexual.

    .bg_color5.p-4
      .row.align-items-center
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img26.svg')
        .col-lg-10(data-aos="fade-left")
          p.m-0 El programa cuenta además con un componente denominado <b>‘Convergencia de oferta y gestión de redes’</b> a través del cual se gestiona el acceso de las familias y sus integrantes a programas y servicios sociales en respuesta a necesidades o intereses particulares.

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

    .bg_color1.p-4.mb-4
      .row.align-items-center
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/tema1/img29.svg')
        .col-lg-10(data-aos="fade-left")
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

<style lang="sass"></style>

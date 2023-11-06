<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Población objetivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La modalidad prioriza la atención a familias domiciliadas en zonas específicas (localidades, comunas, corregimientos, barrios y/o sectores) de las cabeceras, centros poblados y/o municipios, tanto urbanos como rurales, definidos en el marco de los escenarios de coordinación territorial. Cabe aclarar que, debido a que la vinculación de familias se realiza mediante priorización territorial, los criterios para su identificación tanto en Mi Familia Rural como Urbana, responderán a las mismas problemáticas, toda vez que, lo que dará la atención diferenciada será el esquema de atención; en este sentido, las familias que podrán ser vinculadas a Mi Familia son las siguientes:
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img01.png')

    .bg-full.bg-yellow-lighten.bg_t2
      .bg-purple-light.p-4.mb-5
        p.mb-0 Cabe aclarar que, debido a que la vinculación de familias se realiza mediante priorización territorial, los criterios para su identificación tanto en Mi Familia Rural como Urbana, responderán a las mismas problemáticas, toda vez que, lo que dará la atención diferenciada será el esquema de atención; en este sentido, las familias que podrán ser vinculadas a Mi Familia son las siguientes:

      .row.justify-content-center.slyder-container
        .col-xl-11.col-xxl-10
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-yellow-light.p-4
              p Familias identificadas en vulnerabilidad económica y social a través de la encuesta SISBEN, dentro de los siguientes rangos Nivel inferior: A01 Nivel superior: C05.

            .tarjeta.bg-yellow-light.p-4
              p Familias con niños, niñas y/o adolescentes que presenten riesgo de inasistencia, deserción, violencia escolar y/o embarazo adolescente, identificadas mediante procesos de articulación con el SNBF.

            .tarjeta.bg-yellow-light.p-4
              p Familias que tienen entre sus integrantes a niñas, niños, adolescentes y/o jóvenes que estén o hayan estado en alguna de las modalidades de Restablecimiento de Derechos o del Sistema de Responsabilidad Penal para Adolescentes, respecto de las cuales se ha definido realizar complementariedad a partir del proceso interno de articulación del ICBF.

            .tarjeta.bg-yellow-light.p-4
              p Familias identificadas directamente por el ICBF a través de servicios de atención al ciudadano, demanda espontánea de asistencia y asesoría a la familia, o por identificación directa en el territorio.

            .tarjeta.bg-yellow-light.p-4
              p Familias identificadas en el marco de la articulación con las diferentes áreas misionales del ICBF (Protección, Nutrición, Primera Infancia, Infancia, Adolescencia y Juventud)

            .tarjeta.bg-yellow-light.p-4
              p Familias identificadas en articulación con Comisarías de Familia y otras entidades del SNBF.

            .tarjeta.bg-yellow-light.p-4
              p Familias víctimas conforme a lo definido en la Ley 1448 del 2011 (modificada parcialmente por la ley 2078 de 2021), que se encuentran identificadas a través del Registro Único de Víctimas (RUV) de la UARIV; atendiendo prioritariamente a familias con niños, niñas y adolescentes.

            .tarjeta.bg-yellow-light.p-4
              p Familias que tienen entre sus integrantes a adultos mayores y/o personas con discapacidad, atendiendo prioritariamente a aquellas con amenaza o vulneración respecto de su derecho de alimentos, afectadas por situaciones de violencia intrafamiliar y/o que requieran acompañamiento para el fortalecimiento familiar.

            .tarjeta.bg-yellow-light.p-4
              p Familias migrantes que se encuentren en los municipios priorizados para la atención de la modalidad.

            .tarjeta.bg-yellow-light.p-4
              p Familias en proceso de reincorporación a la vida civil y la reunificación posterior a la firma del Acuerdo de Paz, en el marco del enfoque diferencial y de derechos.


</template>

<script>
export default {
  name: 'Tema2',
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
.bg_t2
  background-image: url("../assets/curso/tema2/bg_t2.svg")
  background-repeat: no-repeat
  background-position: bottom right
  @media (max-width: $bp-max-lg)
    background-image: none
.slyder-container
  margin-bottom: 352px
  @media (max-width: $bp-max-lg)
    margin-bottom: 0px
</style>

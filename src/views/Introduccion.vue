<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4 La perspectiva del marco normativo e institucional visualiza la relación entre el objeto y modelo de operación del programa y la misión y objeto del ICBF. El siguiente video presenta un preámbulo de lo que se desarrollará en este componente formativo. 

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/cJFNgLoOED8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg_color1.p-4
      .row.align-items-center
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          img.img-t.m-auto(src='@/assets/curso/introduccion/img01.svg')
        .col-lg-10(data-aos="fade-left")
          p.m-0 <b>Objetivo:</b> identificar el contexto y el alcance del acompañamiento familiar psicosocial que se ofrece a través del programa Mi Familia del ICBF.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-12
        p El plan de mercadeo es una herramienta fundamental en la gestión de cualquier empresa u organización, ya que establece las directrices y estrategias necesarias para alcanzar los objetivos comerciales y posicionar los productos o servicios en el mercado. Este documento, estructurado y detallado, guía las acciones del área comercial, brindando claridad sobre los campos de acción y los pasos a seguir para lograr un crecimiento sostenible.
        p La elaboración de un plan de mercadeo implica un proceso meticuloso de análisis, formulación estratégica, implementación y evaluación. El plan no solo orienta a los directivos en la toma de decisiones, sino que también proporciona una base para medir y controlar el desempeño de las acciones de #[i marketing]. En la actualidad, las empresas enfrentan un entorno cada vez más competitivo y cambiante, por lo que contar con un plan de mercadeo efectivo se convierte en un factor determinante para el éxito.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/imgintro.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este componente formativo aborda cada una de las etapas del desarrollo de un plan de mercadeo, desde la ideación y definición de objetivos hasta la implementación y evaluación de resultados. Se explorarán conceptos clave como el #[i marketing mix], la segmentación de mercado, y las estrategias de promoción y distribución. A través de ejemplos prácticos y casos reales de empresas y emprendimientos, los participantes comprenderán cómo aplicar estos conceptos en situaciones reales, fortaleciendo así su capacidad para diseñar e implementar planes de mercadeo exitosos.
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/u0yDHytR5yk" title="Elaborando el plan de mercadeo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-12
        p La propuesta formativa también subraya la importancia del seguimiento y control en el proceso de #[i marketing], ya que permite identificar oportunidades de mejora y ajustar las estrategias conforme se desarrollan las acciones. De esta manera, se garantiza que el plan de mercadeo se mantenga alineado con los objetivos corporativos y responda de manera efectiva a las dinámicas del mercado.
        p Este curso proporcionará a los aprendices las herramientas necesarias para crear un plan de mercadeo completo y efectivo, destacando la relevancia de la planeación estratégica en el logro de los objetivos comerciales de una empresa.
    
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estructura básica del plan de #[i marketing]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p El plan de #[i marketing] es un documento integral que guía las acciones comerciales y de #[i marketing] de una empresa, proporcionando un enfoque sistemático para alcanzar los objetivos comerciales. Una estructura bien definida es crucial para desarrollar estrategias coherentes y efectivas. A continuación, se detalla la estructura básica de un plan de #[i marketing], que incluye las secciones fundamentales para el análisis, la formulación de estrategias, la implementación de acciones y el seguimiento y control de resultados.

    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 4.
      span  #[i Estructura de los objetivos del plan ]
    
    .row.justify-content-center.mb-5
      .col-md-12.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='En la figura 4, se describe la estructura de los objetivos de un buen plan nacen del análisis de una situación real, seguida por el establecimiento de los objetivos para posteriormente establecer las acciones de #[i marketing] que se deben llevar con un buen seguimiento y control.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img2_1.svg', alt='En la figura 4, se describe la estructura de los objetivos de un buen plan nacen del análisis de una situación real, seguida por el establecimiento de los objetivos para posteriormente establecer las acciones de #[i marketing] que se deben llevar con un buen seguimiento y control.')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 a. Resumen ejecutivo
        p El resumen ejecutivo es una sección breve pero esencial que proporciona una visión general de todo el plan de #[i marketing]. Aunque se ubica al principio del documento, este resumen se elabora al finalizar el desarrollo completo del plan. Su propósito es ofrecer a los lectores, especialmente a la alta dirección y a los potenciales inversores, una idea clara de los aspectos clave del plan y de las estrategias que se van a implementar.
        p En esta sección se incluyen:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Objetivo general")
            .col-lg-12.mb-4.mb-md-0
              p Una declaración concisa del propósito del plan, como incrementar las ventas, lanzar un nuevo producto o aumentar la cuota de mercado.
          .row(titulo="Aspectos económicos")
            .col-lg-12.mb-4.mb-md-0
              p Información sobre el presupuesto asignado, los costos proyectados y las expectativas de retorno de inversión.

          .row(titulo="Resumen de las estrategias y acciones")
            .col-lg-12.mb-4.mb-md-0
              p Descripción de las principales estrategias y tácticas que se utilizarán, así como los plazos previstos para su implementación.
          
          .row(titulo="Resultados esperados")
            .col-lg-12.mb-4.mb-md-0
              p Resumen de los objetivos a corto y largo plazo, como el crecimiento en las ventas o la mejora del posicionamiento de la marca.
      .col-lg-4.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left") 
        p El resumen ejecutivo debe ser claro, directo y convincente, de manera que motive al lector a profundizar en los detalles del plan. Un ejemplo práctico sería el caso de una tienda de ropa que planea lanzar una línea sostenible: en el resumen ejecutivo se destacaría el enfoque en la moda ecológica, el objetivo de capturar un segmento de consumidores preocupados por el medio ambiente y las estrategias promocionales previstas para posicionar la nueva línea.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 b. Análisis de situación
        p El análisis de situación es una sección fundamental que examina el entorno interno y externo de la empresa, proporcionando la base para el desarrollo de las estrategias de #[i marketing]. Esta sección incluye una evaluación detallada de los factores que influyen en la operación de la empresa y en su capacidad para competir en el mercado.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Análisis interno")
        .col-lg-5.mb-4.mb-md-0
          p Se enfoca en los aspectos internos de la empresa, como su capacidad productiva, recursos financieros, habilidades de #[i marketing], fortalezas, debilidades y cultura organizacional. Por ejemplo, una empresa de tecnología podría analizar su capacidad para desarrollar productos innovadores, la experiencia de su equipo de desarrollo y su imagen de marca en el mercado.
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img4.png', alt='Imagen decorativa')
      .row(titulo="Análisis externo")
        .col-lg-5.mb-4.mb-md-0
          p Incluye un examen del entorno competitivo, las tendencias del mercado, los comportamientos de los consumidores, los factores económicos, políticos, sociales y tecnológicos. Un método comúnmente utilizado para el análisis externo es la matriz FODA (Fortalezas, Oportunidades, Debilidades y Amenazas). Por ejemplo, una empresa de alimentos saludables podría identificar como oportunidad el aumento de la demanda de productos orgánicos y como amenaza la creciente competencia de marcas emergentes.
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img5.png', alt='Imagen decorativa')

      .row(titulo="Análisis del mercado y segmentación")
        .col-lg-5.mb-4.mb-md-0
          p Aquí se describe el mercado objetivo, las características demográficas y psicográficas del consumidor, y las necesidades que la empresa busca satisfacer. La segmentación de mercado permite enfocar las estrategias de marketing en aquellos grupos que presentan mayores oportunidades de éxito.
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img6.png', alt='Imagen decorativa')
      
      .row(titulo="Análisis de la competencia")
        .col-lg-5.mb-4.mb-md-0
          p Incluye una revisión de los principales competidores, su cuota de mercado, estrategias de #[i marketing], fortalezas y debilidades. Por ejemplo, una empresa de cosméticos que planea lanzar una nueva línea de productos veganos realizaría un análisis de los competidores existentes en este segmento para identificar las brechas y oportunidades en el mercado.
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema4/img7.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 c. Definición de objetivos
        p La definición de objetivos es una etapa crucial del plan de #[i marketing], ya que establece los resultados que la empresa espera alcanzar en un tiempo específico. Los objetivos deben ser claros, cuantificables, alcanzables, relevantes y estar enmarcados en un tiempo determinado (criterio SMART).
        p Al definir los objetivos, se deben considerar aspectos como:
        
    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img8.svg' alt='AvatarTop')
        h4.text-center Crecimiento en ventas
        p.text-center Por ejemplo, aumentar las ventas en un 20 % durante el próximo año.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img9.svg' alt='AvatarTop')
        h4.text-center Expansión de la participación de mercado
        p.text-center Incrementar la cuota de mercado en un segmento específico.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop')
        h4.text-center Posicionamiento de marca
        p.text-center Mejorar la percepción de la marca como líder en sostenibilidad dentro del mercado.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop')
        h4.text-center Fidelización de clientes
        p.text-center Aumentar la tasa de retención de clientes en un 15 % mediante estrategias de lealtad y recompensas.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Un ejemplo práctico podría ser una empresa de tecnología que lanza un nuevo producto innovador. Un objetivo específico podría ser alcanzar un 10 % de participación de mercado en el segmento de dispositivos móviles dentro de los primeros seis meses. Para priorizar los objetivos se puede tener los siguientes recursos:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 5.
      span  #[i Priorización de objetivos empresariales]
    
    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img12.svg', alt='En la figura 5, se comparte con la imagen la importancia de la priorización de los objetivos midiendo los objetivos urgentes de trabajo rápido y los objetivos de alto impacto que requieren un poco más de tiempo.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img12_1.svg', alt='En la figura 5, se comparte con la imagen la importancia de la priorización de los objetivos midiendo los objetivos urgentes de trabajo rápido y los objetivos de alto impacto que requieren un poco más de tiempo.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 d. Estrategias de #[i marketing]
        p Las estrategias de #[i marketing] detallan el enfoque que la empresa adoptará para lograr los objetivos establecidos. Estas estrategias deben estar alineadas con el análisis de situación y se pueden clasificar en tres categorías principales:
    .row
      .col-lg-4.col-md-6
        .tarjeta-avatar-a.mb-5
          .tarjeta-avatar-a__img
            img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
        h5 Estrategias de posicionamiento
        p Se centran en cómo se desea que los consumidores perciban el producto o marca. Esto puede incluir la creación de una imagen de producto premium o de una marca ecológica y socialmente responsable. Por ejemplo, Tesla utiliza una estrategia de posicionamiento de innovación y sostenibilidad, resaltando las características avanzadas y respetuosas con el medio ambiente de sus vehículos eléctricos.
      .col-lg-4.col-md-6
        .tarjeta-avatar-a.mb-5
          .tarjeta-avatar-a__img
            img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop')
        h5 Estrategias de diferenciación
        p Buscan resaltar las características únicas del producto frente a los competidores. Esto puede implicar ofrecer un nivel superior de calidad, un diseño innovador o un servicio al cliente excepcional. Un ejemplo sería Samsung, que se diferencia en el mercado de #[i smartphones] mediante la incorporación de tecnología de vanguardia en sus dispositivos, como pantallas plegables
      .col-lg-4.col-md-6
        .tarjeta-avatar-a.mb-5
          .tarjeta-avatar-a__img
            img(src='@/assets/curso/temas/tema4/img15.svg' alt='AvatarTop')
        h5 Estrategias de crecimiento
        p Incluyen la expansión a nuevos mercados, el desarrollo de nuevos productos o la diversificación. Por ejemplo, una cadena de restaurantes que introduce una nueva línea de alimentos saludables como parte de su estrategia de crecimiento. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Las estrategias de #[i marketing] también deben contemplar las decisiones relacionadas con el #[i marketing mix] (producto, precio, plaza y promoción) que se detallarán en la siguiente sección del plan.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 e. Acciones de #[i marketing]
        p Esta sección del plan describe las tácticas específicas que se llevarán a cabo para implementar las estrategias de #[i marketing]. Estas acciones deben ser concretas, con un calendario claro y responsabilidades asignadas. La planificación de las acciones de #[i marketing] implica desarrollar un programa que detalle las actividades relacionadas con las 4 P's del #[i marketing mix]:

    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Producto")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Diseño, desarrollo, empaque y lanzamiento del producto. Por ejemplo, una empresa de alimentos orgánicos podría lanzar una nueva línea de #[i snacks] saludables con empaques biodegradables.
      .p-4.py-99.py-md-5(titulo="Precio")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Definición de la estrategia de precios, incluyendo descuentos, promociones y precios por volumen. Una tienda en línea podría ofrecer descuentos especiales durante la temporada navideña para atraer más clientes.
      .p-4.py-99.py-md-5(titulo="Plaza (distribución)")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img18.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Selección de los canales de distribución más efectivos, ya sea mediante tiendas físicas, venta en línea o puntos de venta externos. Por ejemplo, una marca de ropa podría expandir su presencia a través de una asociación con una cadena de tiendas departamentales.
      .p-4.py-99.py-md-5(titulo="Promoción")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img19.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Implementación de campañas publicitarias, promociones de ventas, #[i marketing] digital, relaciones públicas y otras acciones de comunicación. Una marca de cosméticos podría realizar una campaña en redes sociales con influenciadores para aumentar la visibilidad de su nueva línea de productos veganos. 
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 f. Seguimiento y control
        p El seguimiento y control son componentes esenciales del plan de #[i marketing], ya que permiten evaluar el desempeño de las estrategias y tácticas implementadas, así como identificar las desviaciones respecto a los objetivos propuestos.

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/img23.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img20.svg", alt="alt").img100
            .col
              h5 Indicadores de gestión (KPIs)
              p Se deben definir indicadores cuantitativos y cualitativos que permitan medir los resultados de las actividades de #[i marketing]. Ejemplos de KPIs incluyen el volumen de ventas, la cuota de mercado, el retorno de inversión (ROI) en publicidad, la tasa de conversión en el sitio web y el nivel de satisfacción del cliente.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img21.svg", alt="alt").img100
            .col
              h5 Métodos de control
              p Los métodos de control pueden incluir informes periódicos de ventas, análisis financiero, encuestas de satisfacción al cliente y auditorías de #[i marketing]. Estos métodos permiten realizar ajustes oportunos en las estrategias y tácticas para mejorar los resultados.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img22.svg", alt="alt").img100
            .col
              h5 Acciones correctivas
              p Esta sección debe describir los posibles ajustes que se realizarán en caso de que los resultados no cumplan con las expectativas. Por ejemplo, si una campaña publicitaria no está generando el nivel esperado de interacción en redes sociales, se puede optar por cambiar el mensaje o ajustar la segmentación del público objetivo. 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En conclusión, la estructura básica del plan de #[i marketing] es un conjunto de secciones interrelacionadas que abordan desde el análisis de la situación actual hasta la implementación y evaluación de estrategias. Esta estructura proporciona un marco detallado que permite a la empresa tomar decisiones informadas, coordinar esfuerzos y medir el impacto de sus acciones en el logro de los objetivos comerciales.

</template>

<script>
export default {
  name: 'Tema4',
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

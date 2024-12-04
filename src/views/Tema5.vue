<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Elaboración del plan de mercadeo: paso a paso 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p La elaboración de un plan de mercadeo es un proceso sistemático que implica el análisis, la planificación estratégica y la definición de acciones concretas para alcanzar los objetivos comerciales de una empresa. Este proceso se compone de varias etapas interrelacionadas que permiten alinear los recursos de la empresa con las oportunidades del mercado. A continuación, se detalla cada paso del proceso de elaboración del plan de mercadeo, brindando una explicación clara y extensa para comprender su importancia y aplicación en el entorno empresarial. En el siguiente gráfico se evidencia una avanzada del proceso:

    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 6.
      span  #[i Proceso de elaboración del plan de mercadeo]
    
    .row.justify-content-center.mb-5
      .col-md-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='En la figura 6, se describe el proceso de la elaboración del plan de mercadeo ordenado: 1. El establecimiento de los objetivos comerciales 2. La identificación de la oportunidad en el mercado 3. La alineación de los recursos de la empresa 4. La planificación estratégica para esa búsqueda de los objetivos 5. La definición de las acciones a trabajar')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img2_1.svg', alt='En la figura 6, se describe el proceso de la elaboración del plan de mercadeo ordenado: 1. El establecimiento de los objetivos comerciales 2. La identificación de la oportunidad en el mercado 3. La alineación de los recursos de la empresa 4. La planificación estratégica para esa búsqueda de los objetivos 5. La definición de las acciones a trabajar')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 1: Análisis de la situación actual
        p El primer paso en la elaboración de un plan de mercadeo es llevar a cabo un análisis exhaustivo de la situación actual de la empresa y su entorno. Este análisis proporciona una base sólida sobre la cual se desarrollarán las estrategias y acciones del plan. Incluye tanto una evaluación interna como externa.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        li(style="color:#315884;")
          i.fas.circle-small
          | #[b Análisis interno]
        p.mt-3 Examina los recursos, capacidades, fortalezas y debilidades de la empresa. Esto implica analizar factores como:
    
    .row.mb-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema5/img3.svg', alt='Texto que describa la imagen')

          h5.text-center Productos o servicios
          p Calidad, características únicas, nivel de innovación y ciclo de vida.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema5/img4.svg', alt='Texto que describa la imagen')

          h5.text-center Recursos financieros
          p Presupuesto disponible, costos de producción y rentabilidad.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema5/img5.svg', alt='Texto que describa la imagen')

          h5.text-center Recursos humanos
          p Habilidades, experiencia y motivación del equipo de trabajo.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema5/img6.svg', alt='Texto que describa la imagen')

          h5.text-center #[i Marketing]
          p Estrategias actuales de promoción, distribución y precios


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo práctico
            br
            p Una tienda en línea que vende productos artesanales podría realizar un análisis interno para identificar que una de sus fortalezas es la variedad de productos personalizados, mientras que una debilidad podría ser la limitada capacidad de envío rápido debido a su estructura logística.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        li(style="color:#315884;")
          i.fas.circle-small
          | #[b Análisis externo]
        p.mt-3 Involucra la revisión de factores externos que afectan la operación de la empresa, tales como:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imagen decorativa')
        h4.text-center Análisis de mercado
        p Tendencias, tamaño del mercado, segmentación, y comportamiento del consumidor.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img9.svg', alt='Imagen decorativa')
        h4.text-center Competencia
        p Identificación de competidores, análisis de sus productos, precios, estrategias y cuotas de mercado.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img10.svg', alt='Imagen decorativa')
        h4.text-center Entorno PESTEL
        p Evaluación de factores políticos, económicos, sociales, tecnológicos, ecológicos y legales que influyen en la empresa. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo práctico
            br
            p Una marca de ropa sostenible podría analizar las tendencias de consumo en moda ecológica, identificando oportunidades en el creciente interés por productos respetuosos con el medio ambiente. Al mismo tiempo, puede examinar a sus competidores para identificar ventajas competitivas, como ofrecer prendas hechas con materiales reciclados.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        li(style="color:#315884;")
          i.fas.circle-small
          | #[b Análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)]
        p.mt-3 El análisis FODA es una herramienta que ayuda a identificar y clasificar los elementos internos (fortalezas y debilidades) y externos (oportunidades y amenazas) de la empresa. Este análisis permite definir la posición actual de la empresa en el mercado y orientar las decisiones estratégicas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo práctico
            br
            p Una empresa de servicios digitales podría encontrar como fortaleza su equipo altamente capacitado en tecnología y como amenaza la rápida evolución de las tendencias tecnológicas que exige constante actualización.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 2: Definición de objetivos
        p  Una vez que se tiene un panorama claro de la situación actual, el siguiente paso es definir los objetivos del plan de mercadeo. Los objetivos deben ser específicos, medibles, alcanzables, relevantes y limitados en el tiempo (criterio #[i SMART]). Esta etapa es fundamental, ya que los objetivos guían las estrategias y acciones que se llevarán a cabo.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Objetivos cuantitativos")
        .col-lg-5.mb-4.mb-md-0
          p Son aquellos que se pueden medir con cifras concretas. Incluyen el aumento de las ventas, la participación de mercado, el número de clientes nuevos y el crecimiento de la presencia en redes sociales.
          p #[b Ejemplo práctico]: un restaurante de comida rápida podría establecer como objetivo aumentar las ventas en un 15 % durante los próximos seis meses a través de promociones y publicidad en redes sociales.
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/img13.png', alt='Imagen decorativa')
      .row(titulo="Objetivos cualitativos")
        .col-lg-5.mb-4.mb-md-0
          p Se enfocan en aspectos como mejorar la imagen de marca, aumentar la satisfacción del cliente, o fortalecer la lealtad de los consumidores.
          p #[b Ejemplo práctico]: una empresa de software puede plantear como objetivo cualitativo mejorar la percepción de su marca como líder en soluciones de ciberseguridad a través de contenido educativo y la participación en conferencias del sector. 
        .col-lg-7.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/img14.png', alt='Imagen decorativa')
    
    
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 3: Formulación de estrategias
        p La formulación de estrategias es un paso crítico en la elaboración del plan de mercadeo. Aquí se diseñan las estrategias que permitirán alcanzar los objetivos definidos. Las estrategias deben basarse en los resultados del análisis de la situación y en la propuesta de valor que la empresa ofrece al mercado.
    
    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Estrategias de posicionamiento")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img15.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Definen cómo la empresa quiere ser percibida por los consumidores en relación con sus competidores. La estrategia de posicionamiento incluye el desarrollo de una imagen de marca, valores, mensajes y elementos que diferencian a la empresa.
            p #[b Ejemplo práctico]: una marca de café orgánico puede posicionarse como una empresa comprometida con la sostenibilidad y el comercio justo, comunicando estos valores a través de su empaque, publicidad y eventos comunitarios.
      .p-4.py-99.py-md-5(titulo="Estrategias de segmentación")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img16.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Identifican los segmentos de mercado específicos que la empresa planea atender. Esto permite enfocar los esfuerzos de #[i marketing] en los grupos de consumidores más propensos a comprar el producto o servicio.
            p #[b Ejemplo práctico]: una empresa de cosméticos naturales puede segmentar su mercado en personas jóvenes interesadas en productos ecológicos y sin ingredientes químicos, para luego desarrollar campañas de #[i marketing] dirigidas a este segmento.
      .p-4.py-99.py-md-5(titulo="Estrategias de diferenciación")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img17.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Establecen las características y beneficios únicos del producto o servicio que lo distinguen de la competencia. Estas estrategias pueden basarse en la calidad, el diseño, el servicio al cliente o la innovación.
            p #[b Ejemplo práctico]: una empresa de tecnología podría diferenciar su producto destacando características exclusivas, como la duración excepcional de la batería y un servicio posventa #[i premium].
      .p-4.py-99.py-md-5(titulo="Estrategias del <i>marketing mix </i> (4 P’s)")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img18.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Incluyen decisiones específicas relacionadas con el producto, precio, plaza (distribución) y promoción. La combinación de estas decisiones debe alinearse con la estrategia general del plan de mercadeo y los objetivos de la empresa. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 4: Desarrollo de acciones de #[i marketing]
        p En esta etapa se detallan las acciones tácticas necesarias para implementar las estrategias formuladas. Estas acciones constituyen el plan operativo del #[i marketing] y deben ser claras, específicas y programadas en un calendario.
    
    TabsC.color-acento-botones.mb-5
      .p-4.py-99.py-md-5(titulo="Acciones relacionadas con el producto")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img19.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Incluyen el diseño, desarrollo, empaque, etiquetado y lanzamiento de productos. También se pueden definir acciones de mejora continua o renovación de la línea de productos existentes.
            p #[b Ejemplo práctico]: Una marca de bebidas saludables puede planificar el lanzamiento de una nueva línea de jugos orgánicos, creando campañas promocionales, materiales de empaque atractivos y eventos de degustación en tiendas.
      .p-4.py-99.py-md-5(titulo="Acciones de precio")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img20.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Implican definir precios competitivos, descuentos, promociones y políticas de precios especiales, como ofertas de temporada o precios por volumen.
            p #[b Ejemplo práctico]: un gimnasio podría implementar una promoción de precios especiales durante el inicio del año, ofreciendo membresías con descuentos para atraer nuevos clientes.
      .p-4.py-99.py-md-5(titulo="Acciones de plaza (distribución)")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img21.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Incluyen la selección de los canales de distribución, la logística de entrega y la gestión del inventario.
            p #[b Ejemplo práctico]: una tienda de ropa podría expandir su presencia en línea mediante la asociación con plataformas de comercio electrónico, asegurando así un alcance más amplio y mejores opciones de entrega.
      .p-4.py-99.py-md-5(titulo="Acciones de promoción")
        .row
          .col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/img22.png', alt='Imagen decorativa')
          .col-lg-4.mb-4.mb-md-0.p-4
            p Incluyen la implementación de campañas publicitarias, promociones de ventas, #[i marketing] digital, eventos, relaciones públicas y cualquier actividad que fomente la comunicación con los clientes.
            p #[b Ejemplo práctico]: una empresa de tecnología puede lanzar una campaña de #[i marketing] digital que incluya publicidad en redes sociales, blogs especializados y #[i webinars], para promocionar su nuevo #[i software] de gestión empresarial.

    .row.justify-content-center.align-items-center
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 5: Presupuesto del plan de #[i marketing]
        p.mb-0 El presupuesto es una parte vital del plan, ya que asigna los recursos financieros necesarios para la implementación de las acciones. Es fundamental especificar los costos de cada acción y actividad, así como los recursos humanos y tecnológicos involucrados.
    .bg2.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema5/img23.png', alt='Imagen decorativa')
        .col-lg-6
          ul.lista-ul
            li
              i.fas.fa-check
              p.mb-0 <b>Asignación de recursos</b>: detallar cuánto se invertirá en publicidad, promociones, desarrollo de producto, investigación de mercado, y otros aspectos relacionados con la estrategia de <i> marketing</i>.
            li
              i.fas.fa-check
              p.mb-0 <b>Ejemplo práctico</b>: una empresa de alimentos puede destinar un presupuesto específico para una campaña de <i> marketing</i> digital, que incluye anuncios pagados en redes sociales, desarrollo de contenido y promoción con <i>influencers</i>.
            li
              i.fas.fa-check
              p.mb-0 <b>Control de costos</b>: incluir un plan de seguimiento de gastos para evitar sobrepasar el presupuesto asignado y asegurar una gestión financiera eficiente.
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 6: Establecimiento de un cronograma de actividades
        p Una vez definidas las acciones y asignado el presupuesto, se debe crear un cronograma detallado que especifique cuándo y cómo se ejecutarán las actividades. El cronograma debe incluir fechas, responsables y plazos de entrega, asegurando una implementación ordenada y efectiva del plan.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img24.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo práctico
            br
            br
            p Una tienda de ropa que planea lanzar una nueva colección podría establecer un cronograma que incluya fechas para la producción, la campaña de lanzamiento, eventos promocionales y actividades de seguimiento post-lanzamiento.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/temas/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Paso 7: Seguimiento y control
        p El último paso en la elaboración del plan de mercadeo es establecer mecanismos de seguimiento y control para evaluar el progreso y los resultados de las actividades. Esto implica definir indicadores clave de desempeño (KPIs) y métodos para medir el éxito de las estrategias implementadas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img25.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo práctico
            br
            br
            p Un comercio electrónico puede definir KPIs como la tasa de conversión, el retorno de inversión (ROI) en publicidad, y el crecimiento en el tráfico del sitio web. Al analizar estos indicadores periódicamente, la empresa puede ajustar sus estrategias según los resultados obtenidos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        P En resumen, la elaboración de un plan de mercadeo es un proceso completo que abarca desde el análisis de la situación hasta la definición de acciones tácticas y mecanismos de seguimiento. Cada paso es esencial para garantizar que las estrategias estén alineadas con los objetivos de la empresa y con las oportunidades del mercado, lo que facilita la toma de decisiones informadas y la adaptación a los cambios en el entorno competitivo.

</template>

<script>
export default {
  name: 'Tema5',
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

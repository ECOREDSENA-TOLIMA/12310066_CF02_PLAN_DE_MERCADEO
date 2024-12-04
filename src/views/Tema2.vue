<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Papel del plan de mercadeo en la consecución de los objetivos comerciales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p El plan de mercadeo desempeña un papel fundamental en la consecución de los objetivos comerciales de la empresa, ya que proporciona un camino claro y estructurado para alcanzar las metas definidas. Estos objetivos pueden variar según la naturaleza y el contexto de la empresa, e incluyen desde el incremento de las ventas y la cuota de mercado, hasta la mejora del posicionamiento de la marca y la fidelización de los clientes.
        p Un aspecto esencial del plan de mercadeo es la definición de objetivos claros, medibles y alcanzables, lo que permite a la empresa enfocar sus esfuerzos de manera precisa. Por ejemplo, si el objetivo es aumentar la participación en el mercado en un 10 % durante el próximo año, el plan de mercadeo detallará las estrategias que se implementarán para lograrlo, como el lanzamiento de una nueva campaña publicitaria, la introducción de un producto innovador o la expansión de la red de distribución. Al contar con un plan detallado, se minimizan los riesgos y se mejora la toma de decisiones, lo que incrementa las probabilidades de éxito.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El plan de mercadeo también establece los indicadores clave de rendimiento (KPIs) que se utilizarán para medir el progreso hacia los objetivos. Estos indicadores permiten monitorear el desempeño de las actividades de #[i marketing] y evaluar si las estrategias están generando los resultados esperados. Por ejemplo, si uno de los objetivos es aumentar las ventas, los KPIs pueden incluir métricas como el volumen de ventas, el porcentaje de clientes nuevos y el retorno de la inversión en publicidad. Al realizar un seguimiento constante de estos indicadores, la empresa puede identificar posibles desvíos y tomar medidas correctivas a tiempo para asegurar el cumplimiento de los objetivos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Otro papel importante del plan de mercadeo en la consecución de los objetivos comerciales es su función como herramienta de control. El plan no solo define las acciones a llevar a cabo, sino que también incluye mecanismos para evaluar su efectividad. Esta evaluación se realiza mediante el análisis de los resultados obtenidos frente a los objetivos planteados, lo que permite identificar áreas de mejora y realizar los ajustes necesarios para optimizar las estrategias. Este enfoque de mejora continua es clave para que las empresas puedan adaptarse a las cambiantes condiciones del mercado y mantener su competitividad a largo plazo. Visto de paso a paso se tendría una visión ascendente como la siguiente:

    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Pasos para alcanzar objetivos generales. ]
    
    .row.justify-content-center.mb-4
      .col-md-12.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', alt='En la figura 1, se presentan los pasos para alcanzar los objetivos generales a nivel comercial, estos son: Definir los objetivos Implementar las estrategias Medir el rendimiento Evaluar la efectividad Y establecer un plan de mejora continua.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img3_1.svg', alt='En la figura 1, se presentan los pasos para alcanzar los objetivos generales a nivel comercial, estos son: Definir los objetivos Implementar las estrategias Medir el rendimiento Evaluar la efectividad Y establecer un plan de mejora continua.')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Finalmente, el plan de mercadeo sirve como un medio de comunicación dentro de la empresa y con los #[i stakeholders] externos. Al incluir detalles sobre las estrategias, tácticas y acciones que se llevarán a cabo, el plan proporciona a los empleados y colaboradores una comprensión clara de las prioridades y expectativas. Esta claridad contribuye a una mejor coordinación y a un trabajo en equipo más efectivo, ya que cada miembro de la empresa sabe cuál es su rol y cómo su trabajo contribuye al logro de los objetivos comerciales.

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

<style lang="sass"></style>

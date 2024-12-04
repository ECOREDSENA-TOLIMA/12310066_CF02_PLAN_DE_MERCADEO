<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Estrategias de #[i marketing mix] (las 4 P’s)
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p El #[i marketing mix] es una combinación de herramientas y tácticas que una empresa utiliza para lograr sus objetivos comerciales y satisfacer las necesidades de los consumidores. Este conjunto estratégico, conocido como las 4 P’s, incluye: #[b Producto, Precio, Plaza] (distribución) y #[b Promoción]. Cada una de estas variables juega un papel esencial en la creación y ejecución de un plan de mercadeo efectivo. A continuación, se explican de manera detallada cada una de estas P’s, acompañadas de ejemplos reales que ilustran su aplicación. De manera visual ese concepto se resume en la siguiente gráfica:

    .titulo-sexto.color-acento-contenido.offset-2(data-aos="zoom-in")
      h5 Figura 2.
      span  #[i 4 P del marketing ]
    
    .row.justify-content-center.mb-4
      .col-md-8.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='En la figura 2, se presenta una gráfica que muestra las famosas 4 P del marketing que son: Producto, Precio, Promoción y Plaza.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img2_1.svg', alt='En la figura 2, se presenta una gráfica que muestra las famosas 4 P del marketing que son: Producto, Precio, Promoción y Plaza.')


    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Producto
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-lg-1.order-2
        p El producto es el núcleo del #[i marketing mix] y se refiere a cualquier bien o servicio que la empresa ofrece en el mercado. Para que un producto sea exitoso, debe ser capaz de satisfacer las necesidades o deseos de los consumidores. No se trata solo de las características físicas del producto, sino también de los beneficios que ofrece, la experiencia que proporciona, su empaque, marca, garantía y servicio posventa.
        p En la elaboración de la estrategia de producto, es fundamental responder a preguntas como:
        ul.lista-ul
          li
            i.fas.fa-check
            | ¿Qué necesidades o problemas del cliente resuelve el producto?
          li
            i.fas.fa-check
            | ¿Qué características y beneficios lo diferencian de los productos de la competencia?
          li
            i.fas.fa-check
            | ¿Cómo se percibe la marca por parte del cliente?
      .col-lg-5.col-md-6.col-sm-8.order-lg-2.order-1.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='')



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img4.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-3 Ejemplo real: teléfonos móviles
            br
            br
            p Las empresas de tecnología han convertido sus productos, especialmente los teléfonos inteligentes, en una referencia de innovación y calidad. Estos dispositivos no se destacan solo por sus características técnicas, como la cámara, el sistema operativo o el diseño, sino también por la experiencia de usuario que ofrece. Las empresas más famosas del mundo han creado un ecosistema alrededor de su producto, que incluye aplicaciones exclusivas, servicios de almacenamiento en la nube (#[i cloud]), y una atención al cliente eficiente a través de sus tiendas y servicio posventa. La estrategia de producto de estas empresas no solo se centra en la venta del dispositivo, sino en proporcionar una experiencia completa que fideliza a los clientes y fortalece la imagen de la marca.
  
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Precio
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p El precio es la cantidad de dinero que los consumidores están dispuestos a pagar por el producto. Esta variable es crucial ya que impacta directamente en la percepción del valor del producto, la competitividad en el mercado y la rentabilidad de la empresa. La estrategia de precios debe considerar factores como el costo de producción, el valor percibido por los clientes, los precios de los competidores y la elasticidad de la demanda.
        p Existen diferentes estrategias de precios, entre ellas:

    .row.mb-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imagen decorativa')

          h5.text-center Precios basados en el costo
          p.text-small Se calcula el precio sumando un margen de ganancia al costo de producción.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')

          h5.text-center Precios basados en el valor
          p.text-small Se establece el precio en función del valor percibido por los consumidores.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')

          h5.text-center Precios de penetración
          p.text-small Se fijan precios bajos inicialmente para atraer a los clientes y ganar participación en el mercado.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', alt='Imagen decorativa')

          h5.text-center Precios premium
          p.text-small Se fijan precios altos para posicionar el producto como de alta calidad o lujo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo real: las plataformas de #[i streaming] y la estrategia de precios por subscripción
            br
            p Las plataformas de #[i streaming] implementan una estrategia de precios basada en el valor, ofreciendo diferentes planes de suscripción mensual que varían según la cantidad de pantallas y la calidad de video. Este modelo permite que los consumidores elijan el plan que mejor se ajuste a sus necesidades y presupuesto, creando una percepción de flexibilidad y accesibilidad. Además, estas plataformas ajustan sus precios periódicamente según la oferta de contenido y las inversiones en producciones originales, reflejando así el valor añadido que ofrece a sus suscriptores, inclusive trabajan en temporadas especiales para validar precios dinámicos.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Plaza (distribución)
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
      .col-lg-7
        p La plaza o distribución se refiere a las estrategias y canales que la empresa utiliza para llevar su producto al consumidor final. La selección de canales de distribución es fundamental, ya que afecta la disponibilidad y accesibilidad del producto para los clientes. La estrategia de distribución puede ser directa (venta a través de canales propios, como tiendas físicas o en línea) o indirecta (venta a través de intermediarios como minoristas o mayoristas).
        p Al desarrollar una estrategia de distribución, se deben considerar preguntas como:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | ¿Cuál es el canal más efectivo para llegar a los clientes objetivo?
          li
            i.fas.fa-angle-right
            | ¿Cómo se puede optimizar la logística para garantizar la disponibilidad del producto?
          li
            i.fas.fa-angle-right
            | ¿Qué tipo de distribución se utilizará: exclusiva, selectiva o intensiva?

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="zoom-in")
        .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-0 Ejemplo real: marcas de ropa y accesorios mundiales y su estrategia de distribución
            br
            p Las marcas de accesorios y ropa globales, se destacan por su estrategia de distribución omnicanal. Las empresas combinan tiendas físicas ubicadas en las principales ciudades del mundo con una tienda en línea que ofrece envíos rápidos y recogida en tienda. Además, Zara utiliza un modelo de producción y distribución rápida que permite que los productos lleguen a las tiendas en cuestión de días. Esta estrategia, conocida como "moda rápida" o #[i fast fashion], le ha permitido a este tipo de empresas a mantener un #[i stock] fresco y actualizado, atrayendo a los consumidores con las últimas tendencias. La integración de su tienda en línea con su red de tiendas físicas proporciona una experiencia de compra fluida y conveniente para el cliente.

    separador
    .bg2
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4 Promoción
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left") 
          p La promoción es la forma en que la empresa comunica y promociona su producto a los clientes. Incluye todas las actividades de comunicación que buscan informar, persuadir y recordar al público objetivo acerca del producto. Las estrategias de promoción pueden incluir publicidad, relaciones públicas, #[i marketing] directo, ventas personales y promociones de ventas.
          p Una estrategia efectiva de promoción debe considerar el mensaje que se desea transmitir, los medios de comunicación más adecuados para el público objetivo y el presupuesto disponible. Las tácticas promocionales deben ser coherentes con el posicionamiento del producto y deben integrarse en un plan de comunicación unificado.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="zoom-in")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img12.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              h4.mb-0 Ejemplo real: las bebidas gaseosas y su estrategia de promoción emocional
              br
              p Las bebidas gaseosas son conocidas por su estrategia de promoción basada en campañas publicitarias emotivas que buscan conectar con los consumidores a nivel emocional. Un ejemplo es sus campañas es en donde las botellas y latas llevaban los nombres más comunes de las personas. Esta campaña generó un gran impacto, ya que los consumidores se sentían identificados y motivados a buscar una botella con su nombre o el de un ser querido. La estrategia no solo aumentó las ventas, sino que también reforzó la imagen de la marca como un símbolo de alegría y conexión entre las personas.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Integración de las 4 P’s en el #[i marketing mix]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Una estrategia de #[i marketing mix] efectiva integra las 4 P’s de manera coherente para crear una oferta de valor única para los consumidores. La interacción entre el producto, precio, plaza y promoción permite que la empresa ajuste su enfoque en función de las necesidades del mercado y las condiciones competitivas.
        p #[b Ejemplo real de integración de las 4 P’s: las empresas de ropa deportiva]
        p Estas empresas trabajan de forma integrada las 4 P’s:
      
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8.col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Producto")
            .col-lg-12.mb-4.mb-md-0
              p Ofrece una amplia variedad de productos deportivos, desde calzado hasta ropa y accesorios, enfocados en la innovación y el rendimiento.
          .row(titulo="Precio")
            .col-lg-12.mb-4.mb-md-0
              p Utiliza una estrategia de precios #[i premium], posicionando sus productos como de alta calidad y asociándolos con atletas de élite.

          .row(titulo="Plaza")
            .col-lg-12.mb-4.mb-md-0
              p Distribuye sus productos a través de tiendas propias, distribuidores autorizados y su plataforma en línea, asegurando una presencia global.
          
          .row(titulo="Promoción")
            .col-lg-12.mb-4.mb-md-0
              p Emplea campañas publicitarias inspiradoras, patrocina eventos deportivos y utiliza a atletas famosos como embajadores de la marca.
      .col-lg-4.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12(data-aos="fade-left") 
        p Esta integración de las 4 P’s ha permitido a las empresas líderes del segmento crear una marca sólida y reconocida mundialmente, atrayendo a un amplio segmento de consumidores que buscan productos de calidad, innovadores y asociados con el rendimiento deportivo.
        p En resumen, el #[i marketing mix] es un componente esencial en la elaboración de un plan de mercadeo. Las 4 P’s—producto, precio, plaza y promoción—deben ser cuidadosamente diseñadas y alineadas para ofrecer un valor consistente y atractivo para el consumidor, adaptándose a las características y condiciones del mercado en el que opera la empresa. De esta forma se hace una estructura viable comercial que permita perseguir los logros establecidos como se analiza en la siguiente representación:
    
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Figura 3.
      span  #[i Logro de los objetivos de marketing ]
    
    .row.justify-content-center.mb-4
      .col-md-12.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img14.svg', alt='En la figura 3, se describe el logro de los objetivos del marketing es la suma de las estrategias claras establecidas a partir de las 4P junto con las acciones de marketing ordenadas y efectuadas.')
      .col-md-6.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img14_1.svg', alt='En la figura 3, se describe el logro de los objetivos del marketing es la suma de las estrategias claras establecidas a partir de las 4P junto con las acciones de marketing ordenadas y efectuadas.')

</template>

<script>
export default {
  name: 'Tema3',
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

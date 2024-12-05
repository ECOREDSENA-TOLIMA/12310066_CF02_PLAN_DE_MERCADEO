<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'La dimensión del plan de mercadeo.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b>Validar el conocimiento adquirido sobre la elaboración del plan de mercadeo.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Un plan de mercadeo define las acciones, recursos y herramientas que una empresa utilizará para alcanzar sus objetivos de mercado.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de mercadeo establece las acciones y recursos necesarios para alcanzar los objetivos comerciales y posicionar productos o servicios en el mercado.',
          mensaje_incorrecto:
            'Incorrecto. El plan de mercadeo es una guía que define las acciones y recursos que la empresa usará para alcanzar sus objetivos de mercado.',
        },
        {
          id: 2,
          texto:
            'Las 4 P’s del <em>marketing mix</em> incluyen: Producto, Precio, Plaza y Publicidad.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Bien hecho! Las 4 P’s del marketing mix son Producto, Precio, Plaza (Distribución) y Promoción, no Publicidad.',
          mensaje_incorrecto:
            'No es correcto. Las 4 P’s son Producto, Precio, Plaza (Distribución) y Promoción, no Publicidad.',
        },
        {
          id: 3,
          texto:
            'La implementación del plan de mercadeo no requiere una asignación de responsabilidades y recursos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! La implementación del plan de mercadeo requiere una cuidadosa asignación de responsabilidades y recursos para asegurar su ejecución efectiva.',
          mensaje_incorrecto:
            'Incorrecto. La implementación del plan de mercadeo sí requiere una asignación de responsabilidades y recursos para llevar a cabo las acciones planificadas.',
        },
        {
          id: 4,
          texto:
            'El análisis FODA se utiliza para evaluar las fortalezas, oportunidades, debilidades y amenazas de una empresa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis FODA es fundamental para evaluar la situación interna y externa de la empresa y orientar la formulación de estrategias.',
          mensaje_incorrecto:
            'Incorrecto. El análisis FODA es una herramienta esencial para evaluar las fortalezas, oportunidades, debilidades y amenazas de una empresa.',
        },
        {
          id: 5,
          texto:
            'Las estrategias de precio solo deben basarse en el costo de producción.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien hecho! Las estrategias de precio deben considerar factores como el valor percibido por los clientes, los precios de los competidores y la elasticidad de la demanda, no solo el costo de producción.',
          mensaje_incorrecto:
            'No es correcto. Las estrategias de precio deben considerar varios factores, como el valor percibido, los precios de la competencia y la demanda, además del costo de producción.',
        },
        {
          id: 6,
          texto:
            'La promoción es la única herramienta del <em>marketing mix</em> que se utiliza para comunicar con los clientes.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Aunque la promoción es una herramienta clave para comunicar, todas las P’s del marketing mix (Producto, Precio, Plaza, Promoción) interactúan para comunicar el valor al cliente.',
          mensaje_incorrecto:
            'Incorrecto. Todas las P’s del marketing mix (Producto, Precio, Plaza, Promoción) juegan un papel en la comunicación con los clientes.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito principal de un plan de mercadeo en una empresa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la percepción de los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer directrices para alcanzar objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Monitorear el desempeño de la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar los ingresos de los clientes potenciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de mercadeo proporciona directrices para alcanzar los objetivos comerciales.',
          mensaje_incorrecto:
            'Incorrecto. El plan de mercadeo se enfoca en guiar a la empresa hacia sus objetivos comerciales.',
        },
        {
          id: 8,
          texto:
            '¿Qué papel tiene el plan de mercadeo en relación con las áreas de ventas y servicio al cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir políticas internas de recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Coordinar acciones para alcanzar los objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar únicamente las ventas del negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la satisfacción del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien hecho! El plan coordina las acciones para lograr los objetivos comerciales.',
          mensaje_incorrecto:
            'Incorrecto. El plan de mercadeo va más allá de ventas y coordina acciones para cumplir objetivos.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes NO es una de las 4 P’s del <em>marketing mix</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Presupuesto', esCorrecta: true },
            { id: 'b', texto: 'Producto', esCorrecta: false },
            { id: 'c', texto: 'Promoción', esCorrecta: false },
            { id: 'd', texto: 'Plaza', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Presupuesto no forma parte de las 4 P´s.',
          mensaje_incorrecto:
            'Incorrecto. Todas las P’s del marketing mix (Producto, Precio, Plaza, Promoción) juegan un papel en la comunicación con los clientes.',
        },
        {
          id: 10,
          texto:
            '¿En qué consiste la estrategia de plaza (distribución) en el <em>marketing mix</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Canales utilizados para llevar el producto al consumidor final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definición de la imagen de la marca en la industria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Estrategia de precios según el valor percibido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Creación de campañas para aumentar las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La estrategia de plaza se refiere a los canales de distribución.',
          mensaje_incorrecto:
            'Incorrecto. La estrategia de plaza se enfoca en la distribución del producto.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la importancia del análisis de situación en un plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verificar la rentabilidad del producto en cada mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer las políticas de recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar el entorno interno y externo de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Definir la cultura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Exacto! El análisis de situación se centra en evaluar el entorno.',
          mensaje_incorrecto:
            'Incorrecto. El análisis de situación se enfoca en el entorno interno y externo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

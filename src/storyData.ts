import  { StoryNode } from './types';

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    title: 'El Archivista Nocturno',
    text: 'Eres Martí Ribó, bibliotecario especializado en archivos históricos del Museu Nacional d\'Art de Catalunya. Te has quedado hasta tarde catalogando documentos recién descubiertos sobre la colección románica. Mientras organizas los manuscritos, encuentras una extraña referencia a obras "que nunca deben verse bajo la luna llena". Cuando te das cuenta, el museo está completamente vacío y las luces principales se han apagado automáticamente.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    choices: [
      { text: 'Terminar rápidamente y salir del museo', nextNode: 'locked_exits' },
      { text: 'Investigar la referencia en los archivos', nextNode: 'archives' }
    ]
  },
  locked_exits: {
    id: 'locked_exits',
    title: 'Salidas Bloqueadas',
    text: 'Recoges tus pertenencias y te diriges a la salida principal, pero las puertas están cerradas. Tu tarjeta de acceso no funciona. Intentas llamar al guardia de seguridad, pero no hay respuesta. A través de las ventanas, notas que la luna llena brilla intensamente sobre Montjuïc. De repente, escuchas un sonido extraño procedente de la sala de arte románico.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    choices: [
      { text: 'Buscar otra salida', nextNode: 'strange_shadows' },
      { text: 'Investigar el sonido', nextNode: 'romantic_hall' }
    ]
  },
  archives: {
    id: 'archives',
    title: 'En los Archivos',
    text: 'Profundizas en los antiguos archivos y descubres referencias a un ritual medieval que supuestamente daba vida a las figuras representadas en las obras durante la luna llena. Según la leyenda, un pintor herético escondió símbolos ocultos en cinco obras del museo. Mientras lees, escuchas un crujido de madera proveniente de los pasillos.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    choices: [
      { text: 'Buscar las obras mencionadas', nextNode: 'first_painting' },
      { text: 'Investigar el sonido', nextNode: 'romantic_hall' }
    ]
  },
  strange_shadows: {
    id: 'strange_shadows',
    title: 'Sombras Extrañas',
    text: 'Mientras buscas otra salida, notas sombras moviéndose en las paredes, aunque no parece haber nada que las proyecte. Al pasar frente a una serie de pinturas góticas, tienes la inquietante sensación de que los ojos de los personajes te siguen. Un susurro apenas audible parece emanar de ellas.',
    image: 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f',
    isMonsterEncounter: true,
    choices: [
      { text: 'Correr hacia la sala de seguridad', nextNode: 'security_room' },
      { text: 'Examinar las pinturas góticas', nextNode: 'first_riddle' }
    ]
  },
  romantic_hall: {
    id: 'romantic_hall',
    title: 'Sala de Arte Románico',
    text: 'Entras en la imponente sala de arte románico, donde los frescos medievales parecen vibrar bajo la luz que se filtra por las ventanas. Un frío antinatural invade el espacio y, para tu horror, notas que varias de las figuras pintadas en el Pantocrátor están vacías, como si hubieran abandonado la obra. Escuchas un cántico en latín antiguo que parece venir de todas partes.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    isMonsterEncounter: true,
    choices: [
      { text: 'Huir hacia la sala gótica', nextNode: 'strange_shadows' },
      { text: 'Buscar la fuente del cántico', nextNode: 'hidden_chapel' }
    ]
  },
  security_room: {
    id: 'security_room',
    title: 'Sala de Seguridad',
    text: 'Llegas a la sala de seguridad y cierras la puerta. Los monitores muestran varias salas del museo, pero en lugar de estar vacías, puedes ver figuras oscuras moviéndose lentamente entre las exhibiciones. No parecen humanas; sus movimientos son espasmódicos y antinaturales. En uno de los monitores, ves una figura que se parece inquietantemente a un santo corrupto de un retablo medieval, dirigiéndose directamente hacia tu ubicación.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Buscar las llaves de emergencia', nextNode: 'key_riddle' },
      { text: 'Esconderse en el conducto de ventilación', nextNode: 'ventilation' }
    ]
  },
  first_riddle: {
    id: 'first_riddle',
    title: 'El Enigma del Retablo',
    text: 'Te acercas a un retablo gótico que representa el Juicio Final. Al examinar de cerca, notas inscripciones casi invisibles en la base. Parece un acertijo que debes resolver para avanzar:',
    riddle: {
      question: 'Soy el primero en Pecado, el segundo en Castigo, y el último en Redención. Nunca estoy en Gloria pero dos veces en Condenación. ¿Qué letra soy?',
      answer: 'c',
      failNode: 'riddle_failure',
      successNode: 'first_painting'
    }
  },
  riddle_failure: {
    id: 'riddle_failure',
    title: 'Error Fatal',
    text: 'Al pronunciar la respuesta incorrecta, las figuras del retablo comienzan a contorsionarse grotescamente. Sus rostros se vuelven hacia ti y, con un movimiento súbito, una mano esquelética emerge del cuadro, arrastrándote hacia su interior. Tu grito queda ahogado mientras eres absorbido por la obra maldita, convirtiéndote en parte de su macabra composición para toda la eternidad.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  },
  first_painting: {
    id: 'first_painting',
    title: 'La Primera Obra',
    text: 'Descubres la primera obra mencionada en los manuscritos: una Virgen románica cuya mirada parece seguirte. Al examinarla con tu linterna, notas un símbolo oculto en su base. De repente, escuchas pasos pesados acercándose por el pasillo. No suenan como los de un guardia de seguridad.',
    choices: [
      { text: 'Esconderte detrás de la exhibición', nextNode: 'hiding' },
      { text: 'Buscar la siguiente obra', nextNode: 'second_painting' }
    ]
  },
  hidden_chapel: {
    id: 'hidden_chapel',
    title: 'La Capilla Oculta',
    text: 'Siguiendo el cántico, descubres una pequeña capilla que no aparece en los planos oficiales del museo. En su interior, velas negras iluminan un altar donde reposa un libro abierto. Las páginas se voltean solas, y las letras parecen reorganizarse ante tus ojos. Desde las sombras, una figura encapuchada comienza a materializarse.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Leer el libro', nextNode: 'book_riddle' },
      { text: 'Huir de la capilla', nextNode: 'chase' }
    ]
  },
  key_riddle: {
    id: 'key_riddle',
    title: 'La Caja de Llaves',
    text: 'Encuentras una caja con las llaves de emergencia, pero está protegida por un extraño mecanismo con símbolos medievales. Hay una inscripción que parece ser un acertijo:',
    riddle: {
      question: 'Cuanto más me quitas, más grande me vuelvo. ¿Qué soy?',
      answer: 'agujero',
      failNode: 'key_failure',
      successNode: 'escape_route'
    }
  },
  key_failure: {
    id: 'key_failure',
    title: 'El Precio del Error',
    text: 'Al introducir la respuesta incorrecta, las luces de la sala de seguridad se apagan completamente. En la oscuridad, sientes múltiples manos frías tocando tu rostro y cuello. Cuando las luces parpadean momentáneamente, te encuentras rodeado por figuras de pesadilla salidas de las pinturas más oscuras del museo. Su toque drena lentamente tu vida mientras te arrastran a su mundo bidimensional.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    ending: true
  },
  ventilation: {
    id: 'ventilation',
    title: 'En los Conductos',
    text: 'Te arrastras por los estrechos conductos de ventilación. A través de las rejillas, puedes ver las criaturas moviéndose por el museo. Algunas son reconocibles como figuras de las pinturas, otras son demasiado horribles para describirlas. Llegas a una bifurcación en el sistema de ventilación.',
    choices: [
      { text: 'Ir hacia la azotea', nextNode: 'rooftop' },
      { text: 'Dirigirte hacia la sala de restauración', nextNode: 'restoration_room' }
    ]
  },
  hiding: {
    id: 'hiding',
    title: 'Escondite Precario',
    text: 'Te escondes detrás de una vitrina justo cuando una figura distorsionada entra en la sala. Parece ser el Cristo Pantocrátor de uno de los frescos románicos, pero su rostro está retorcido en una mueca inhumana y sus movimientos son espasmódicos. Busca algo... o a alguien. Mientras contienes la respiración, notas un patrón en sus movimientos que podría ayudarte a escapar.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Esperar a que se vaya', nextNode: 'second_painting' },
      { text: 'Intentar distraerlo y correr', nextNode: 'chase' }
    ]
  },
  second_painting: {
    id: 'second_painting',
    title: 'La Segunda Obra',
    text: 'Logras llegar a la segunda obra mencionada: un retablo gótico de San Jorge matando al dragón. Al examinarlo, notas que el dragón tiene un símbolo similar al de la Virgen románica. Cuando iluminas ambos símbolos con tu linterna, emiten un débil resplandor y escuchas un mecanismo activándose en algún lugar del museo.',
    choices: [
      { text: 'Buscar la tercera obra', nextNode: 'third_painting_riddle' },
      { text: 'Investigar el mecanismo activado', nextNode: 'hidden_passage' }
    ]
  },
  book_riddle: {
    id: 'book_riddle',
    title: 'El Grimorio Prohibido',
    text: 'Las páginas del libro revelan un ritual para revertir la maldición, pero primero debes resolver un acertijo escrito en catalán antiguo:',
    riddle: {
      question: 'Soy el sirviente de la vida pero el señor de la muerte. Soy frío cuando hace calor y caliente cuando hace frío. ¿Qué soy?',
      answer: 'tiempo',
      failNode: 'book_failure',
      successNode: 'ritual_discovery'
    }
  },
  book_failure: {
    id: 'book_failure',
    title: 'Palabras Fatales',
    text: 'Al pronunciar la respuesta incorrecta, el libro emite un resplandor rojizo. La figura encapuchada se materializa completamente, revelando el rostro corrupto de un monje medieval. Con un gesto de su mano esquelética, sientes cómo tu cuerpo comienza a petrificarse, convirtiéndote lentamente en una estatua más del museo, consciente pero inmóvil por toda la eternidad.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  },
  chase: {
    id: 'chase',
    title: 'La Persecución',
    text: 'Corres por los pasillos oscuros del museo mientras las criaturas te persiguen. Sus pasos resuenan sobre el mármol y sus lamentos llenan el aire. Logras ganar algo de distancia y te encuentras en una encrucijada.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Esconderte en la sala de restauración', nextNode: 'restoration_room' },
      { text: 'Dirigirte hacia la entrada principal', nextNode: 'final_confrontation' }
    ]
  },
  escape_route: {
    id: 'escape_route',
    title: 'Ruta de Escape',
    text: 'Consigues abrir la caja y obtener las llaves de emergencia. Los monitores muestran que las criaturas están acercándose rápidamente a la sala de seguridad. Tienes poco tiempo para actuar.',
    choices: [
      { text: 'Usar las llaves en la salida de emergencia cercana', nextNode: 'emergency_exit' },
      { text: 'Buscar primero el origen de las criaturas', nextNode: 'directors_office' }
    ]
  },
  rooftop: {
    id: 'rooftop',
    title: 'En la Azotea',
    text: 'Emerges en la azotea del museo. Desde aquí puedes ver Barcelona bajo la luz de la luna llena. Extrañamente, la ciudad parece paralizada, sin luces en movimiento, como si el tiempo se hubiera detenido fuera del museo. Ves una figura humana en la azotea del edificio adyacente que parece observarte.',
    choices: [
      { text: 'Intentar llamar su atención', nextNode: 'observer_riddle' },
      { text: 'Buscar una manera de bajar', nextNode: 'fire_escape' }
    ]
  },
  restoration_room: {
    id: 'restoration_room',
    title: 'Sala de Restauración',
    text: 'En la sala de restauración encuentras varias obras dañadas en proceso de ser recuperadas. Entre ellas, notas un lienzo particularmente antiguo que coincide con la descripción de tu manuscrito. La pintura muestra una ceremonia oculta realizada bajo una luna llena, exactamente como la de esta noche. Mientras la examinas, las herramientas de restauración comienzan a levitar.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Usar las herramientas contra las criaturas', nextNode: 'fight_back' },
      { text: 'Destruir la pintura', nextNode: 'destroy_painting' }
    ]
  },
  third_painting_riddle: {
    id: 'third_painting_riddle',
    title: 'El Enigma de la Tercera Obra',
    text: 'Encuentras referencias a la tercera obra, pero su ubicación está codificada en un acertijo:',
    riddle: {
      question: 'Estoy en el cielo pero no soy estrella, estoy en el mar pero no soy agua, estoy en el jardín pero no soy planta. ¿Qué letra soy?',
      answer: 'a',
      failNode: 'painting_failure',
      successNode: 'third_painting'
    }
  },
  painting_failure: {
    id: 'painting_failure',
    title: 'Desorientación Fatal',
    text: 'Al seguir la pista incorrecta, te pierdes en los laberínticos pasillos del museo. Las luces se apagan una a una a tu paso, y la oscuridad comienza a materializarse en formas humanoides que se arrastran hacia ti. Sus ojos brillan con el mismo pigmento que las pinturas medievales mientras te rodean lentamente, fundiéndose con tu sombra hasta que te conviertes en parte de la oscuridad.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    ending: true
  },
  third_painting: {
    id: 'third_painting',
    title: 'La Tercera Obra',
    text: 'Siguiendo la pista, encuentras la tercera obra en una pequeña alcoba: una predela que muestra escenas del Apocalipsis. Al iluminar la parte inferior con tu linterna, revela otro símbolo que completa una secuencia con los anteriores. El suelo tiembla ligeramente bajo tus pies.',
    choices: [
      { text: 'Buscar la cuarta obra', nextNode: 'fourth_painting' },
      { text: 'Investigar la vibración del suelo', nextNode: 'hidden_passage' }
    ]
  },
  hidden_passage: {
    id: 'hidden_passage',
    title: 'El Pasaje Secreto',
    text: 'Descubres que se ha abierto un pasaje secreto en una de las paredes. Siguiéndolo, llegas a una cámara oculta llena de obras que nunca han sido exhibidas. En el centro hay un pedestal con un antiguo manuscrito iluminado abierto. Sus páginas contienen el ritual completo que está causando los eventos sobrenaturales de esta noche.',
    choices: [
      { text: 'Leer el manuscrito', nextNode: 'manuscript_riddle' },
      { text: 'Destruir el manuscrito', nextNode: 'destroy_manuscript' }
    ]
  },
  ritual_discovery: {
    id: 'ritual_discovery',
    title: 'El Secreto del Ritual',
    text: 'Descifras el ritual y comprendes que necesitas encontrar y activar cinco símbolos ocultos en obras específicas para revertir la maldición. Ya has encontrado dos, pero los monstruos se acercan y el tiempo se agota.',
    choices: [
      { text: 'Buscar las obras restantes', nextNode: 'third_painting_riddle' },
      { text: 'Confrontar a la figura encapuchada', nextNode: 'final_confrontation' }
    ]
  },
  emergency_exit: {
    id: 'emergency_exit',
    title: 'Salida de Emergencia',
    text: 'Usas las llaves para abrir la salida de emergencia, pero al otro lado no encuentras el exterior del museo sino un extraño limbo donde fragmentos de pinturas flotan en un vacío oscuro. Figuras distorsionadas de diferentes épocas artísticas se mueven entre los fragmentos, algunas te miran con curiosidad, otras con hambre.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Intentar regresar al museo', nextNode: 'security_room' },
      { text: 'Avanzar por el limbo', nextNode: 'limbo_riddle' }
    ]
  },
  observer_riddle: {
    id: 'observer_riddle',
    title: 'El Observador Enigmático',
    text: 'Intentas llamar la atención de la figura, que se gira revelando un rostro sin rasgos. Te comunica telepáticamente que puede ayudarte a escapar si resuelves su acertijo:',
    riddle: {
      question: 'Soy más antiguo que el tiempo, más oscuro que la noche, más profundo que el mar. Los dioses me temen, los mortales me ignoran. ¿Qué soy?',
      answer: 'olvido',
      failNode: 'observer_failure',
      successNode: 'true_escape'
    }
  },
  observer_failure: {
    id: 'observer_failure',
    title: 'El Juicio del Observador',
    text: 'Al fallar el acertijo, el ser sin rostro extiende sus brazos. La azotea y todo Barcelona parece disolverse a tu alrededor. Te encuentras flotando en un vacío donde solo existen obras de arte fragmentadas y distorsionadas. El Observador te ha condenado a existir para siempre entre realidades, ni vivo ni muerto, simplemente... contemplado.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  fire_escape: {
    id: 'fire_escape',
    title: 'Escalera de Incendios',
    text: 'Encuentras una escalera de incendios y comienzas a descender. A mitad de camino, notas que los peldaños comienzan a transformarse en pinceladas que se desintegran bajo tus pies. Desde abajo, figuras grotescas comienzan a ascender por la estructura metálica.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Subir de nuevo a la azotea', nextNode: 'rooftop' },
      { text: 'Saltar hacia la ventana cercana', nextNode: 'back_inside' }
    ]
  },
  fight_back: {
    id: 'fight_back',
    title: 'Contraataque',
    text: 'Usas los escalpelos y otras herramientas como armas improvisadas. Descubres que las criaturas son vulnerables cuando les apuntas con luz directa. Logras mantenerlas a raya y encuentras un antiquísimo pigmento que, según las notas del restaurador, posee propiedades "purificadoras para obras malditas".',
    choices: [
      { text: 'Usar el pigmento en ti mismo', nextNode: 'protection' },
      { text: 'Buscar las obras restantes para aplicarlo', nextNode: 'fourth_painting' }
    ]
  },
  destroy_painting: {
    id: 'destroy_painting',
    title: 'Destrucción del Lienzo',
    text: 'Rompes la pintura con una herramienta de restauración. Un aullido sobrenatural recorre todo el museo y sientes como si una presión invisible disminuyera. Sin embargo, las criaturas ya manifestadas siguen presentes y ahora parecen más enfurecidas. Has interrumpido el ritual, pero no lo has revertido completamente.',
    choices: [
      { text: 'Buscar una salida del museo', nextNode: 'main_hall' },
      { text: 'Buscar el origen del ritual', nextNode: 'directors_office' }
    ]
  },
  fourth_painting: {
    id: 'fourth_painting',
    title: 'La Cuarta Obra',
    text: 'La cuarta obra resulta ser una pequeña tabla medieval casi olvidada en un rincón: representa a San Antonio atormentado por demonios. Al iluminarla, encuentras otro símbolo que resuena con los anteriores. Solo te falta encontrar la quinta y última obra para completar el patrón.',
    choices: [
      { text: 'Buscar la quinta obra', nextNode: 'final_painting_riddle' },
      { text: 'Activar los símbolos encontrados', nextNode: 'partial_ritual' }
    ]
  },
  manuscript_riddle: {
    id: 'manuscript_riddle',
    title: 'Los Secretos del Manuscrito',
    text: 'El manuscrito revela que un artista medieval hizo un pacto con entidades oscuras para dar vida a sus obras. Para romper el hechizo, debes resolver el enigma final:',
    riddle: {
      question: 'Vivo sin aliento, frío como la muerte. Nunca sediento, siempre bebiendo. Vestido de malla, nunca desarmado. ¿Qué soy?',
      answer: 'pez',
      failNode: 'manuscript_failure',
      successNode: 'ritual_reversal'
    }
  },
  manuscript_failure: {
    id: 'manuscript_failure',
    title: 'Conocimiento Prohibido',
    text: 'Al pronunciar la respuesta incorrecta, las letras del manuscrito se despegan de las páginas y se adhieren a tu piel, quemándola. Sientes cómo el conocimiento prohibido invade tu mente, sobrecargándola con visiones de realidades imposibles. Tu cordura se quiebra mientras te conviertes en un nuevo guardián del manuscrito, condenado a permanecer en la cámara oculta por toda la eternidad.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    ending: true
  },
  destroy_manuscript: {
    id: 'destroy_manuscript',
    title: 'La Destrucción del Manuscrito',
    text: 'Arrancas las páginas del manuscrito y las quemas con tu encendedor. Una onda expansiva de energía te lanza contra la pared. Cuando te recuperas, notas que los sonidos de las criaturas han cesado. Has detenido el ritual, pero sientes que algo dentro de ti ha cambiado. Parte de la magia ha quedado impregnada en tu ser.',
    choices: [
      { text: 'Salir de la cámara oculta', nextNode: 'aftermath' },
      { text: 'Examinar los restos del manuscrito', nextNode: 'residual_magic' }
    ]
  },
  limbo_riddle: {
    id: 'limbo_riddle',
    title: 'El Enigma del Limbo',
    text: 'Avanzas por el extraño limbo hasta encontrar una figura que reconoces de una famosa pintura surrealista. Te explica que estás en el espacio entre obras de arte y realidad, y que para escapar debes resolver un acertijo:',
    riddle: {
      question: 'No puedes verme, pero estoy en todas las obras. No puedes tocarme, pero cada artista me ha sentido. ¿Qué soy?',
      answer: 'inspiración',
      failNode: 'limbo_failure',
      successNode: 'limbo_escape'
    }
  },
  limbo_failure: {
    id: 'limbo_failure',
    title: 'Atrapado Entre Mundos',
    text: 'Al fallar el acertijo, el limbo se contrae a tu alrededor. Te encuentras fragmentado entre docenas de pinturas diferentes, tu conciencia dividida entre ellas. En una eres parte de un bodegón, en otra un rostro en el fondo de un retrato, en otra simple pigmento en un paisaje. Tu existencia continúa, dispersa y multiplicada a través del arte para siempre.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  },
  true_escape: {
    id: 'true_escape',
    title: 'La Verdadera Salida',
    text: 'El ser sin rostro asiente y abre un portal frente a ti. Al cruzarlo, te encuentras fuera del museo, en la plaza. El amanecer comienza a asomar y el museo parece normal desde el exterior. Sin embargo, sientes que nunca podrás ver el arte de la misma manera. Y, a veces, cuando miras ciertas pinturas, podrías jurar que sus figuras se mueven ligeramente.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  back_inside: {
    id: 'back_inside',
    title: 'De Vuelta al Interior',
    text: 'Saltas hacia la ventana y logras entrar de nuevo al museo. Te encuentras en una galería que no reconoces, llena de espejos ornamentados. En cada reflejo ves una versión ligeramente diferente de ti mismo, y ninguno de los reflejos imita exactamente tus movimientos.',
    choices: [
      { text: 'Romper uno de los espejos', nextNode: 'broken_mirror' },
      { text: 'Buscar la salida de la galería', nextNode: 'mirror_riddle' }
    ]
  },
  protection: {
    id: 'protection',
    title: 'Protección Arcana',
    text: 'Aplicas el pigmento sobre tu piel, formando símbolos protectores. Sientes una extraña energía recorrer tu cuerpo. Las criaturas ahora parecen evitarte, como si no pudieran verte o les resultara doloroso acercarse. Tienes una oportunidad de recorrer el museo con relativa seguridad.',
    choices: [
      { text: 'Buscar la quinta obra', nextNode: 'final_painting_riddle' },
      { text: 'Investigar el origen del ritual', nextNode: 'directors_office' }
    ]
  },
  main_hall: {
    id: 'main_hall',
    title: 'El Gran Vestíbulo',
    text: 'Llegas al impresionante vestíbulo principal del museo. Las enormes puertas siguen cerradas, pero la intensidad de la luna llena ha comenzado a disminuir levemente. Las criaturas parecen más débiles, pero todavía bloquean las principales vías de escape.',
    isMonsterEncounter: true,
    choices: [
      { text: 'Intentar forzar las puertas principales', nextNode: 'force_doors' },
      { text: 'Ascender por la gran escalera', nextNode: 'directors_office' }
    ]
  },
  directors_office: {
    id: 'directors_office',
    title: 'El Despacho del Director',
    text: 'En el despacho del director encuentras evidencia de que no eres el primer empleado que experimenta estos eventos. Hay un diario que documenta incidentes similares cada 50 años, coincidiendo con cierto alineamiento lunar. El diario menciona un "guardián" que mantiene la maldición y que se esconde en una obra específica.',
    choices: [
      { text: 'Buscar la obra del guardián', nextNode: 'final_painting_riddle' },
      { text: 'Leer más sobre cómo derrotar al guardián', nextNode: 'guardian_info' }
    ]
  },
  final_painting_riddle: {
    id: 'final_painting_riddle',
    title: 'El Enigma de la Obra Final',
    text: 'Los documentos sugieren que la quinta y última obra es la más importante, pues contiene al "guardián" del pacto. Su ubicación está protegida por un último acertijo:',
    riddle: {
      question: 'No soy dios pero estoy en los cielos, no soy rey pero tengo corona, no tengo voz pero me oyes rugir. ¿Qué soy?',
      answer: 'trueno',
      failNode: 'guardian_failure',
      successNode: 'final_painting'
    }
  },
  guardian_failure: {
    id: 'guardian_failure',
    title: 'La Ira del Guardián',
    text: 'Al fallar el acertijo, sientes una presencia antigua manifestarse a tu alrededor. El guardián ha notado tus intentos de localizar y deshacer el ritual. Una figura colosal, amalgama de todas las representaciones demoníacas del museo, se materializa ante ti. Con un gesto de su mano, tu cuerpo comienza a transformarse en una nueva obra de arte, preservando eternamente tu expresión de terror.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    ending: true
  },
  partial_ritual: {
    id: 'partial_ritual',
    title: 'Ritual Incompleto',
    text: 'Intentas activar los cuatro símbolos encontrados, esperando que sea suficiente. Una energía comienza a fluir entre ellos, formando un patrón luminoso incompleto. Las criaturas retroceden momentáneamente, pero la falta del quinto símbolo hace que el ritual se vuelva inestable.',
    choices: [
      { text: 'Buscar desesperadamente la quinta obra', nextNode: 'final_painting_riddle' },
      { text: 'Intentar completar el ritual con tu propia sangre', nextNode: 'blood_sacrifice' }
    ]
  },
  ritual_reversal: {
    id: 'ritual_reversal',
    title: 'Reversión del Ritual',
    text: 'Al resolver el enigma, descubres cómo revertir completamente el ritual. Necesitas activar los cinco símbolos en un orden específico bajo la luz menguante de la luna. El manuscrito menciona que el guardián intentará detenerte a toda costa.',
    choices: [
      { text: 'Buscar las obras restantes', nextNode: 'fourth_painting' },
      { text: 'Prepararte para confrontar al guardián', nextNode: 'final_confrontation' }
    ]
  },
  aftermath: {
    id: 'aftermath',
    title: 'Las Secuelas',
    text: 'Logras encontrar tu camino de regreso a través del museo ahora silencioso. Las criaturas han desaparecido y las pintaciones parecen normales nuevamente. Encuentras una salida desbloqueada y escapas al amanecer. Sin embargo, por el resto de tu vida, serás capaz de ver elementos ocultos en las obras de arte que nadie más puede percibir, y a veces, te parece que ciertas figuras te reconocen y te saludan desde sus lienzos.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  residual_magic: {
    id: 'residual_magic',
    title: 'Magia Residual',
    text: 'Entre las cenizas del manuscrito, encuentras un fragmento que milagrosamente sobrevivió. Al tocarlo, absorbes conocimiento antiguo que te permite ver la verdadera naturaleza de las obras de arte. Te das cuenta de que algunas de ellas son portales a otros mundos, y que los artistas a veces son meros canales para entidades más allá de nuestra comprensión.',
    choices: [
      { text: 'Usar este conocimiento para salir del museo', nextNode: 'enlightened_escape' },
      { text: 'Intentar comunicarte con las entidades', nextNode: 'communication' }
    ]
  },
  limbo_escape: {
    id: 'limbo_escape',
    title: 'Escape del Limbo',
    text: 'La figura surrealista asiente y te muestra un camino a través del caos pictórico. Siguiendo sus instrucciones, navegas entre fragmentos de diferentes estilos y épocas hasta encontrar un portal que parece llevar de vuelta al mundo real. Sin embargo, no estás seguro de si regresarás exactamente al mismo mundo que dejaste.',
    choices: [
      { text: 'Cruzar el portal', nextNode: 'altered_reality' },
      { text: 'Buscar otro camino', nextNode: 'deeper_limbo' }
    ]
  },
  mirror_riddle: {
    id: 'mirror_riddle',
    title: 'El Enigma de los Espejos',
    text: 'Mientras buscas la salida, los reflejos comienzan a hablarte al unísono, ofreciéndote libertad si resuelves su acertijo:',
    riddle: {
      question: 'Todos me buscan pero nadie quiere encontrarme, todos me temen pero nadie puede verme, estoy en todas partes pero no ocupo espacio. ¿Qué soy?',
      answer: 'muerte',
      failNode: 'mirror_failure',
      successNode: 'mirror_freedom'
    }
  },
  mirror_failure: {
    id: 'mirror_failure',
    title: 'Prisión de Reflejos',
    text: 'Al fallar el acertijo, los espejos comienzan a brillar intensamente. Tu reflejo en cada uno de ellos sonríe de manera siniestra antes de que seas violentamente absorbido hacia el interior del mundo especular. Te conviertes en un reflejo más, condenado a imitar las acciones de futuros visitantes, siempre consciente pero nunca libre.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  },
  broken_mirror: {
    id: 'broken_mirror',
    title: 'El Espejo Roto',
    text: 'Rompes uno de los espejos y un grito ensordecedor resuena por la galería. Los fragmentos se elevan en el aire y comienzan a girar a tu alrededor, cada uno mostrando una realidad distinta. Entre ellos, ves uno que muestra la salida del museo.',
    choices: [
      { text: 'Intentar alcanzar el fragmento con la salida', nextNode: 'fragment_leap' },
      { text: 'Protegerte de los fragmentos giratorios', nextNode: 'glass_storm' }
    ]
  },
  force_doors: {
    id: 'force_doors',
    title: 'Forzando las Puertas',
    text: 'Intentas abrir las puertas principales con todas tus fuerzas. Mientras luchas con las cerraduras, las criaturas comienzan a acercarse. Justo cuando parece que van a alcanzarte, logras abrir una pequeña rendija entre las puertas.',
    choices: [
      { text: 'Deslizarte por la apertura', nextNode: 'narrow_escape' },
      { text: 'Enfrentarte a las criaturas', nextNode: 'final_confrontation' }
    ]
  },
  guardian_info: {
    id: 'guardian_info',
    title: 'Secretos del Guardián',
    text: 'El diario revela que el guardián es la manifestación del propio artista maldito, atrapado en una obra específica como castigo por su pacto. Para derrotarlo, debes encontrar su autorretrato oculto y confrontarlo directamente con la verdad de su prisión eterna.',
    choices: [
      { text: 'Buscar el autorretrato del artista', nextNode: 'final_painting' },
      { text: 'Prepararte para la confrontación', nextNode: 'final_confrontation' }
    ]
  },
  final_painting: {
    id: 'final_painting',
    title: 'La Obra Final',
    text: 'Finalmente, encuentras la quinta obra: un pequeño y oscuro autorretrato del artista medieval, escondido en un rincón poco visitado. Sus ojos parecen seguirte y, al iluminarlo con tu linterna, el último símbolo comienza a brillar. Sientes una presencia antigua y poderosa manifestándose a tu alrededor.',
    choices: [
      { text: 'Activar los cinco símbolos', nextNode: 'final_ritual' },
      { text: 'Confrontar al guardián', nextNode: 'final_confrontation' }
    ]
  },
  blood_sacrifice: {
    id: 'blood_sacrifice',
    title: 'El Sacrificio de Sangre',
    text: 'Desesperado, usas un objeto afilado para cortar tu palma y completar el patrón con tu propia sangre. El ritual se estabiliza, pero a un alto precio. Sientes cómo parte de tu esencia vital es absorbida por las obras. Las criaturas retroceden definitivamente, pero has establecido un vínculo permanente con el museo y sus secretos.',
    choices: [
      { text: 'Buscar una salida', nextNode: 'changed_escape' },
      { text: 'Explorar tu nueva conexión con las obras', nextNode: 'art_communion' }
    ]
  },
  final_confrontation: {
    id: 'final_confrontation',
    title: 'Confrontación Final',
    text: 'Te enfrentas al guardián, que se manifiesta como una versión corrupta y poderosa del artista medieval. El ser convoca a todas las criaturas del museo para atacarte. En ese momento, recuerdas las pistas dispersas por el museo y comprendes que el guardián está atrapado en un ciclo de tormento eterno por su pacto maldito.',
    choices: [
      { text: 'Usar tu conocimiento para liberarlo', nextNode: 'liberation' },
      { text: 'Enfrentarlo con los símbolos recolectados', nextNode: 'final_ritual' }
    ]
  },
  enlightened_escape: {
    id: 'enlightened_escape',
    title: 'Escape Iluminado',
    text: 'Con tu nueva percepción, puedes ver senderos ocultos a través del museo que antes eran invisibles. Sigues estas líneas de energía hasta encontrar una salida que te lleva no solo fuera del edificio, sino fuera del tiempo normal. Emerges al amanecer, pero sientes que has estado ausente mucho más que una noche. Tu percepción del arte y la realidad ha cambiado para siempre.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  communication: {
    id: 'communication',
    title: 'Comunión con lo Desconocido',
    text: 'Usando el conocimiento adquirido, estableces contacto con las entidades que habitan entre las obras. Te revelan verdades cósmicas sobre la naturaleza del arte como ventana entre dimensiones. Te ofrecen convertirte en un nuevo guardián, un protector del umbral entre nuestro mundo y el suyo.',
    choices: [
      { text: 'Aceptar el papel de guardián', nextNode: 'new_guardian' },
      { text: 'Rechazar la oferta y escapar', nextNode: 'rejection' }
    ]
  },
  altered_reality: {
    id: 'altered_reality',
    title: 'Realidad Alterada',
    text: 'Cruzas el portal y te encuentras de nuevo en el exterior del museo al amanecer. Todo parece normal, excepto por sutiles diferencias: los colores son ligeramente más intensos, las sombras más profundas, y ocasionalmente ves figuras artísticas manifestarse brevemente en el rabillo del ojo. Has regresado, pero a una versión de la realidad donde el arte y lo real se entrelazan más estrechamente.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  deeper_limbo: {
    id: 'deeper_limbo',
    title: 'Las Profundidades del Limbo',
    text: 'Te adentras más en el caótico espacio entre obras, donde el tiempo y el espacio pierden todo significado. Encuentras a otros como tú: bibliotecarios, curadores, visitantes, todos atrapados a lo largo de los siglos. Juntos, forman una sociedad de náufragos estéticos que han aprendido a navegar y sobrevivir en este reino de pura expresión artística.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  mirror_freedom: {
    id: 'mirror_freedom',
    title: 'Liberación Especular',
    text: 'Al resolver el acertijo, los espejos comienzan a resonar en armonía. Sus superficies se vuelven líquidas y se fusionan en un único portal plateado. A través de él, puedes ver la salida del museo bajo la luz del amanecer.',
    choices: [
      { text: 'Atravesar el portal', nextNode: 'mirror_escape' },
      { text: 'Examinar el portal con precaución', nextNode: 'mirror_examination' }
    ]
  },
  fragment_leap: {
    id: 'fragment_leap',
    title: 'El Salto al Fragmento',
    text: 'Te lanzas hacia el fragmento que muestra la salida. Al tocarlo, sientes cómo tu cuerpo se desintegra y recompone. Cuando recuperas la conciencia, estás fuera del museo, pero tu reflejo en los charcos de lluvia y en las ventanas ya no coincide exactamente contigo. A veces parece moverse con autonomía, como si una parte de ti hubiera quedado atrapada en el mundo de los espejos.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  glass_storm: {
    id: 'glass_storm',
    title: 'La Tormenta de Cristal',
    text: 'Te proteges mientras los fragmentos giran cada vez más rápido a tu alrededor. Cuando la velocidad es máxima, colapsan hacia dentro, y en lugar de herirte, se funden con tu piel. Te has convertido en un mosaico viviente, cada fragmento mostrando un momento o lugar diferente. Tu existencia es ahora una galería en sí misma, un catálogo de posibilidades infinitas.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  },
  narrow_escape: {
    id: 'narrow_escape',
    title: 'Escape Angosto',
    text: 'Te deslizas por la estrecha apertura entre las puertas justo cuando las garras de las criaturas intentan atraparte. Sales al exterior, donde el amanecer comienza a asomar. Las puertas se cierran de golpe tras de ti, y escuchas aullidos frustrados desde el interior. Has escapado, pero las pesadillas sobre esta noche te perseguirán para siempre, y nunca volverás a ver el arte de la misma manera.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  final_ritual: {
    id: 'final_ritual',
    title: 'El Ritual Final',
    text: 'Activas los cinco símbolos en el orden correcto. Una energía luminosa recorre todo el museo, y las criaturas aúllan de dolor mientras son arrastradas de vuelta a sus obras. El guardián lucha contra el ritual, pero no puede resistirse a la fuerza combinada de los símbolos. Lentamente, todas las manifestaciones sobrenaturales retroceden y el museo vuelve a la normalidad con las primeras luces del alba.',
    choices: [
      { text: 'Salir del museo', nextNode: 'victorious_escape' },
      { text: 'Verificar que todas las criaturas hayan desaparecido', nextNode: 'final_check' }
    ]
  },
  changed_escape: {
    id: 'changed_escape',
    title: 'Escape Transformado',
    text: 'Logras salir del museo, pero ya no eres completamente humano. Parte de tu esencia permanece vinculada a las obras, y parte de su naturaleza ahora reside en ti. Puedes percibir aspectos de la realidad invisibles para los demás, y cuando duermes, tu consciencia vaga por las salas del museo, observando a los visitantes diurnos desde el interior de los cuadros.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  art_communion: {
    id: 'art_communion',
    title: 'Comunión con el Arte',
    text: 'Exploras tu nueva conexión con las obras del museo. Puedes sentir sus historias, sus significados ocultos, incluso comunicarte con las figuras representadas en ellas. Te conviertes en un puente entre dos mundos, capaz de interpretar secretos artísticos que ningún historiador del arte podría jamás descubrir por medios convencionales.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  liberation: {
    id: 'liberation',
    title: 'La Liberación',
    text: 'Comprendes que el guardián no es un villano sino otra víctima, atrapado en un ciclo de tormento por su ambición artística. Le muestras compasión y le ofreces perdón por los horrores que ha causado. Sorprendentemente, este acto de humanidad rompe el ciclo. El guardián y todas sus creaciones comienzan a desvanecerse, finalmente libres de su prisión estética.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    choices: [
      { text: 'Salir del museo mientras las criaturas desaparecen', nextNode: 'compassionate_escape' },
      { text: 'Quedarte para presenciar el final del ciclo', nextNode: 'witness' }
    ]
  },
  new_guardian: {
    id: 'new_guardian',
    title: 'El Nuevo Guardián',
    text: 'Aceptas la responsabilidad de convertirte en un guardián del umbral. Tu forma física se disuelve gradualmente mientras tu consciencia se expande a través de todas las obras del museo. Te conviertes en una presencia benévola que protege el delicado equilibrio entre mundos, guiando a futuros visitantes perdidos y asegurando que las entidades más peligrosas permanezcan confinadas a su dimensión pictórica.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  rejection: {
    id: 'rejection',
    title: 'El Rechazo',
    text: 'Rechazas la oferta de las entidades y buscas desesperadamente una salida. Usando tu conocimiento recién adquirido, logras encontrar un camino de regreso al mundo normal. Escapas del museo al amanecer, pero las entidades no toman bien tu rechazo. Por el resto de tu vida, las obras de arte se comportarán de manera extraña en tu presencia: figuras que te dan la espalda, paisajes que se vuelven tormentosos, retratos que te observan con desdén.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  mirror_escape: {
    id: 'mirror_escape',
    title: 'Escape a Través del Espejo',
    text: 'Atraviesas el portal plateado y emerges en la plaza frente al museo justo cuando el sol comienza a asomar. Te sientes normal, pero cuando revisas tu reflejo en un escaparate, notas que ahora es perfectamente simétrico y tus movimientos parecen más fluidos y gráciles, como si hubieras sido mejorado por el mundo de los espejos.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  mirror_examination: {
    id: 'mirror_examination',
    title: 'Examen del Portal',
    text: 'Al examinar el portal con detenimiento, descubres que no conduce directamente a la salida sino a un mundo alternativo donde el museo es diferente: más grandioso, más antiguo, con obras que nunca existieron en tu realidad. Es una versión idealizada del museo, como lo imaginaría un artista visionario.',
    choices: [
      { text: 'Entrar en el museo idealizado', nextNode: 'ideal_museum' },
      { text: 'Buscar otro camino de salida', nextNode: 'reality_preference' }
    ]
  },
  victorious_escape: {
    id: 'victorious_escape',
    title: 'Escape Victorioso',
    text: 'Sales del museo victorioso mientras el sol ilumina la fachada del MNAC. Las puertas se abren fácilmente ahora, como si nunca hubieran estado bloqueadas. Tu experiencia te ha cambiado profundamente; ahora ves el arte no solo como obras estéticas sino como posibles ventanas o portales. Te preguntas cuántos otros museos del mundo esconden secretos similares, y si volverás a encontrarte con fenómenos parecidos en el futuro.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  final_check: {
    id: 'final_check',
    title: 'La Verificación Final',
    text: 'Recorres el museo ahora silencioso, verificando que todas las criaturas hayan regresado a sus obras. Todo parece normal, pero notas que algunas pinturas han cambiado sutilmente: figuras en posiciones ligeramente diferentes, expresiones alteradas. En el autorretrato del artista maldito, el rostro ya no te mira con malicia sino con gratitud. Has roto una maldición centenaria.',
    image: 'https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3',
    choices: [
      { text: 'Salir del museo', nextNode: 'dawn_departure' },
      { text: 'Documentar los cambios para estudiarlos', nextNode: 'art_historian' }
    ]
  },
  compassionate_escape: {
    id: 'compassionate_escape',
    title: 'Escape Compasivo',
    text: 'Sales del museo mientras las manifestaciones se desvanecen a tu alrededor. Tu acto de compasión ha liberado no solo al guardián sino a todas las almas atrapadas en el ciclo maldito. Al cruzar las puertas, el amanecer te recibe con una sensación de paz que nunca habías experimentado. Sabes que has presenciado el final de un horror que duró siglos.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  witness: {
    id: 'witness',
    title: 'El Testigo',
    text: 'Te quedas para presenciar el final del ciclo maldito. El guardián, ahora pacificado, te revela la verdadera historia detrás de su pacto y cómo su ambición artística lo llevó a condenarse a sí mismo. Mientras se desvanece junto con sus creaciones, te entrega un pequeño objeto: un pincel antiguo que, según te explica, tiene el poder de revelar lo oculto en cualquier obra de arte. Un regalo final de un artista liberado.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  ideal_museum: {
    id: 'ideal_museum',
    title: 'El Museo Ideal',
    text: 'Entras en esta versión idealizada del museo, donde cada obra es la expresión perfecta de la visión de su creador. Te maravillas ante pinturas que combinan estilos imposibles y esculturas que desafían la física. Comprendes que has entrado en el reino de la pura imaginación artística, un lugar donde las limitaciones del mundo material no existen. Decides quedarte y explorar este paraíso estético, consciente de que podrías no encontrar jamás el camino de regreso.',
    image: 'https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1',
    ending: true
  },
  reality_preference: {
    id: 'reality_preference',
    title: 'Preferencia por la Realidad',
    text: 'Decides no arriesgarte con el portal idealizado y buscas otra salida. Eventualmente, encuentras una ventana que da al mundo real y logras escapar mientras amanece. A pesar de las maravillas que vislumbraste, prefieres la solidez imperfecta de tu propio mundo a la perfección ilusoria del otro. Sin embargo, tu experiencia te ha dado una nueva apreciación por el poder de la imaginación artística.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  dawn_departure: {
    id: 'dawn_departure',
    title: 'Partida al Amanecer',
    text: 'Sales del museo bajo la luz del amanecer, exhausto pero victorioso. Las puertas se abren sin resistencia, como si el edificio mismo reconociera tu triunfo. Barcelona comienza a despertar a tu alrededor, ajena a los horrores sobrenaturales que acaban de terminar. Te alejas del MNAC sabiendo que has sido parte de algo extraordinario que pocos llegarán a comprender jamás.',
    image: 'https://images.unsplash.com/photo-1505322022379-7c3353ee6291',
    ending: true
  },
  art_historian: {
    id: 'art_historian',
    title: 'El Historiador del Arte',
    text: 'Decides documentar meticulosamente los cambios en las obras afectadas. En los meses siguientes, publicas un controvertido estudio sobre "alteraciones inexplicables" en ciertas obras del MNAC. Aunque la comunidad académica recibe tu trabajo con escepticismo, algunos colegas de otros museos te contactan en privado, compartiendo experiencias similares. Te conviertes en el líder de un grupo clandestino de investigadores de lo sobrenatural en el arte, preparándote para la próxima manifestación.',
    image: 'https://images.unsplash.com/photo-1518343265568-51eec52d40da',
    ending: true
  }
};
 
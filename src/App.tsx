
import { useState } from "react";
import "./App.css";

type Stop = {
  city: string;
  country: string;
  emoji: string;
  clue: string;
  clues: string[];
  question: string;
  options: string[];
  answer: string;
  success: string;
  hint: string;
  x: number;
  y: number;
};

const stops: Stop[] = [
  {
    city: "Burdeos",
    country: "Francia",
    emoji: "🇫🇷",
    clue: "El secreto del vino y el queso",
    clues: [
      "Esta ciudad francesa creció junto a un río que desemboca en un gran estuario atlántico.",
      "Su centro histórico destaca por sus fachadas clásicas y plazas monumentales.",
      "Su nombre es conocido internacionalmente por una de las regiones vinícolas más famosas del mundo.",
    ],
    question: "¿Dónde continúa nuestro recorrido?",
    options: ["Burdeos", "Edimburgo", "Londres", "Bruselas", "Florencia"],
    answer: "Burdeos",
    success: "¡Correcto! Has encontrado Burdeos.",
    hint: "En La Petite Savoie nos comimos una Reclette.",
    x: 25,
    y: 70,
  },
  {
    city: "Roma",
    country: "Italia",
    emoji: "🇮🇹",
    clue: "La ciudad de los imperios",
    clues: [
      "Desde aquí se gobernó uno de los imperios más influyentes de la historia europea.",
      "Un enorme anfiteatro recuerda los espectáculos públicos de la Antigüedad.",
      "Dentro de esta ciudad se encuentra un Estado independiente con su propia plaza y basílica monumental.",
    ],
    question: "¿Qué capital tienes que descubrir?",
    options: ["Nápoles", "Brujas", "Roma", "Milán", "Florencia"],
    answer: "Roma",
    success: "¡Acertaste! Roma ya forma parte de nuestro recorrido.",
    hint: "Llevamos diciendo muchas veces de volver.",
    x: 45,
    y: 74,
  },
  {
    city: "Milán",
    country: "Italia",
    emoji: "🇮🇹",
    clue: "Moda y una obra maestra",
    clues: [
      "Esta ciudad es un centro internacional de diseño y moda.",
      "Su gran catedral gótica está decorada con cientos de agujas y esculturas.",
      "Hay un toro en el suelo que dando vueltas pisándolo, dice que traerá suerte.",
    ],
    question: "¿Qué ciudad italiana es?",
    options: ["Roma", "Florencia", "Milán", "Pisa", "Nápoles"],
    answer: "Milán",
    success: "¡Bien hecho! Has encontrado Milán.",
    hint: "Su catedral se llama Duomo y allí nos comimos un bretzel.",
    x: 39,
    y: 65,
  },
  {
    city: "Gran Canaria",
    country: "España",
    emoji: "🌋",
    clue: "Las islas del Atlántico",
    clues: [
      "Este destino es un archipiélago español situado en el océano Atlántico.",
      "Sus paisajes incluyen playas, bosques y terrenos volcánicos.",
      "Aquí se encuentra la cola del dragón",
    ],
    question: "¿Qué isla es?",
    options: ["Gran Canaria", "Lanzarote", "Tenerife"],
    answer: "Gran Canaria",
    success: "¡Sí! Has descubierto Gran Canaria.",
    hint: "Allí nos comimos las mejores papas arrugás de toda Canarias y me hice amigo de un platanero",
    x: 5,
    y: 95,
  },
  {
    city: "Occitania",
    country: "Francia",
    emoji: "🇫🇷",
    clue: "Una tierra de pueblos medievales, mercados y paisajes del sur",
    clues: [
      "Esta región del sur de Francia combina ciudades históricas, pueblos medievales y paisajes que van desde los Pirineos hasta el Mediterráneo.",
      "Aquí se encuentra la Ciudad Rosa por el color de los ladrillos de sus edificios.",
      "Tiene el mayor castillo y fortaleza en todo el mundo.",
    ],
    question: "¿Qué región buscas?",
    options: ["HighLands", "Occitania", "Flandes", "Costa Amalfitana", "Alsacia"],
    answer: "Occitania",
    success: "¡Sí! Has descubierto Occitania.",
    hint: "Una región donde las calles de ladrillo rosa y los pueblos de cuento nos transportan a otra época.",
    x: 30,
    y: 65,
  },
  {
    city: "Ámsterdam",
    country: "Países Bajos",
    emoji: "🇳🇱",
    clue: "La ciudad sobre el agua",
    clues: [
      "Su trazado urbano está marcado por numerosos canales concéntricos.",
      "Las bicicletas son parte esencial de la vida cotidiana y del paisaje urbano.",
      "Es la capital de los Países Bajos, un país cuyo nombre suele confundirse con Holanda.",
    ],
    question: "¿Qué ciudad aparece en la postal?",
    options: ["Bruselas", "Ámsterdam", "Burdeos", "Brujas", "Gante"],
    answer: "Ámsterdam",
    success: "¡Muy bien! Has descubierto Ámsterdam.",
    hint: "Allí vimos la casa de Ana Frank.",
    x: 35,
    y: 40,
  },
  {
    city: "Bruselas",
    country: "Bélgica",
    emoji: "🇧🇪",
    clue: "El corazón de Europa",
    clues: [
      "Esta ciudad acoge importantes instituciones de la Unión Europea.",
      "Su plaza central está rodeada de edificios históricos ornamentados.",
      "Un pequeño niño de bronce que representa a un personaje orinando es una de sus estatuas más famosas.",
    ],
    question: "¿Qué ciudad europea es?",
    options: ["Bruselas", "Ámsterdam", "Burdeos", "Brujas", "Gante"],
    answer: "Bruselas",
    success: "¡Has descubierto Bruselas!",
    hint: "Te pusiste nerviosa por llevarnos un par de jarras de cervezas del elefante rosa.",
    x: 35,
    y: 45,
  },
  {
    city: "Selva Negra",
    country: "Alemania",
    emoji: "🌲",
    clue: "El bosque de los secretos",
    clues: [
      "No buscas una capital, sino una región montañosa y boscosa de Europa.",
      "Sus pueblos tradicionales tienen casas con entramados de madera y tejados inclinados.",
      "Los relojes de cuco, los senderos entre abetos y los cuentos populares evocan este lugar.",
    ],
    question: "¿Qué región estamos buscando?",
    options: ["Selva Negra", "Costa Amalfitana", "Canarias", "Occitania", "Cinqueterre"],
    answer: "Selva Negra",
    success: "¡Misterio resuelto! Has descubierto la Selva Negra.",
    hint: "Vimos unas de las cascadas más grandes de Europa y recorrimos sus bosques.",
    x: 39,
    y: 53,
  },
  {
    city: "Toscana",
    country: "Italia",
    emoji: "🇮🇹",
    clue: "La cuna del Renacimiento",
    clues: [
      "Esta región fue uno de los grandes centros del Renacimiento y vio nacer a artistas como Leonardo da Vinci.",
      "Su capital, Florencia, está atravesada por el río Arno y cuenta con un famoso puente medieval repleto de tiendas.",
      "Sus pueblos medievales, sus colinas cubiertas de viñedos y sus aguas termales naturales crean algunos de los paisajes más emblemáticos de Italia.",
    ],
    question: "¿Qué regió buscas?",
    options: ["Toscana", "Costa Amalfitana", "Canarias", "Occitania", "Cinqueterre"],
    answer: "Toscana",
    success: "¡Correcto! Has encontrado Toscana.",
    hint: "Nos bañamos en unos baños termales romanos al aire libre.",
    x: 45,
    y: 65,
  },
  {
    city: "Alsacia",
    country: "Francia",
    emoji: "🇫🇷",
    clue: "La magia de la Navidad",
    clues: [
      "Esta región es famosa por sus pueblos de cuento, sus casas de entramado de madera y sus calles decoradas con flores y luces.",
      "Su capital, es conocida como la Capital de la Navidad y celebra uno de los mercados navideños más antiguos y famosos de Europa.",
      "Durante diciembre, sus plazas se llenan de casetas de madera, adornos, vino caliente y dulces típicos, mientras las fachadas se iluminan con decoraciones navideñas.",
    ],
    question: "¿Qué región francesa buscas?",
    options: ["Selva Negra", "Alsacia", "HighLands", "Baviera"],
    answer: "Alsacia",
    success: "¡Correcto! Has descubierto Alsacia, donde la Navidad parece sacada de un cuento.",
    hint: "Nos tomamos una cerveza fría sin sacarla del frigorífico.",
    x: 35,
    y: 60,
  },
  {
    city: "Edimburgo",
    country: "Escocia",
    emoji: "🏴",
    clue: "El castillo sobre la roca",
    clues: [
      "Esta ciudad es la capital de una nación que forma parte del Reino Unido.",
      "Su casco antiguo está lleno de callejuelas históricas y edificios de piedra.",
      "Un castillo se alza sobre una roca de origen volcánico y cada año se celebra un festival internacional de artes.",
    ],
    question: "¿Qué ciudad escocesa es?",
    options: ["Londres", "Edimburgo", "Glasgow", "Inverness"],
    answer: "Edimburgo",
    success: "¡Has descubierto Edimburgo! Nos acercamos al final.",
    hint: "Hicimos un tour de leyendas y fuimos a un cementerio.",
    x: 25,
    y: 35,
  },
  {
    city: "Costa Amalfitana",
    country: "Italia",
    emoji: "🌊",
    clue: "Entre montañas y mar",
    clues: [
      "No se trata de una única ciudad, sino de un tramo costero del sur de Italia.",
      "Carreteras estrechas serpentean por acantilados sobre el mar Tirreno.",
      "Pueblos como Positano y Amalfi son famosos por sus casas de colores y sus escalinatas.",
    ],
    question: "¿Qué lugar estamos buscando?",
    options: ["Selva Negra", "Costa Amalfitana", "Canarias", "Baviera", "Occitania"],
    answer: "Costa Amalfitana",
    success: "¡Enhorabuena! Has descubierto la Costa Amalfitana.",
    hint: "Alquilamos una moto a lo loco jajaja.",
    x: 50,
    y: 75,
  },
  {
    city: "Tenerife",
    country: "España",
    emoji: "🌋",
    clue: "Las islas del Atlántico",
    clues: [
      "Este destino es un archipiélago español situado en el océano Atlántico.",
      "Sus paisajes incluyen playas, bosques y terrenos volcánicos.",
      "Aquí se encuentra el Teide, la cumbre más alta de España, en una de sus islas.",
    ],
    question: "¿Qué isla es?",
    options: ["Tenerife", "Gran Canaria", "Lanzarote"],
    answer: "Tenerife",
    success: "¡Sí! Has descubierto Tenerife.",
    hint: "Nos encantó los guachinches.",
    x: 5,
    y: 90,
  },
  {
    city: "Londres",
    country: "Reino Unido",
    emoji: "🇬🇧",
    clue: "La ciudad que huele a curry",
    clues: [
      "Un río atraviesa esta capital y durante siglos ha sido una de las grandes vías comerciales del país.",
      "Una famosa torre alberga una campana cuyo nombre se utiliza a menudo para referirse al reloj entero.",
      "Los autobuses de dos pisos y las cabinas telefónicas rojas forman parte de su imagen más reconocible.",
    ],
    question: "¿Qué ciudad buscas?",
    options: ["París", "Londres", "Roma", "Múnich", "Ámsterdam"],
    answer: "Londres",
    success: "¡Sí! Has descubierto Londres.",
    hint: "Dimos de comer a las ardillas, jejeje.",
    x: 25,
    y: 45,
  },
  {
    city: "Cracovia",
    country: "Polonia",
    emoji: "🇵🇱",
    clue: "La melodía interrumpida",
    clues: [
      "Esta ciudad fue una de las antiguas capitales de un país de Europa central.",
      "Su plaza principal es una de las grandes plazas medievales de Europa.",
      "Desde una de sus torres se escucha una señal de trompeta que, según la tradición, termina de forma abrupta.",
    ],
    question: "¿Qué ciudad polaca es?",
    options: ["Varsovia", "Cracovia", "Bruselas", "Múnich", "Tenerife"],
    answer: "Cracovia",
    success: "¡Fantástico! Has descubierto Cracovia.",
    hint: "No hubo nieve para las moto nieves y nos tomamos muchas cervezoskys.",
    x: 55,
    y: 50,
  },
  {
    city: "Lanzarote",
    country: "España",
    emoji: "🇪🇸",
    clue: "La isla de los volcanes",
    clues: [
    "Esta isla canaria destaca por sus paisajes volcánicos, sus campos de lava negra y sus playas de arena dorada.",
    "En el Parque Nacional de Timanfaya se pueden contemplar volcanes y tierras rojizas que parecen sacadas de otro planeta.",
    "El artista César Manrique dejó su huella en la isla, integrando el arte y la arquitectura con la naturaleza en lugares como los Jameos del Agua.",
    ],
    question: "¿Qué isla buscas?",
    options: ["Tenerife", "Gran Canaria", "Lanzarote"],
    answer: "Lanzarote",
    success: "¡Correcto! Has descubierto Lanzarote, una isla de paisajes volcánicos únicos.",
    hint: "Exploramos un paisaje que parecía de otro planeta y disfrutamos de los Tele Clubs.",
    x: 5,
    y: 85,
  },
  {
    city: "Mallorca",
    country: "España",
    emoji: "🇪🇸",
    clue: "La isla de las calas escondidas",
    clues: [
      "Esta isla del Mediterráneo es famosa por sus aguas turquesas, sus calas de arena blanca y sus paisajes entre el mar y la montaña.",
      "Su capital alberga una impresionante catedral gótica frente al mar, conocida como La Seu.",
      "Sus pueblos de piedra, sus carreteras entre montañas y sus playas paradisíacas la convierten en uno de los destinos más especiales de las Baleares.",
    ],
    question: "¿Qué isla buscas?",
    options: ["Lanzarote", "Tenerife", "Mallorca"],
    answer: "Mallorca",
    success: "¡Correcto! Has descubierto Mallorca, una joya del Mediterráneo.",
    hint: "Que ricas las ensaimadas.",
    x: 30,
    y: 80,
  },
  {
    city: "Múnich",
    country: "Alemania",
    emoji: "🇩🇪",
    clue: "Tradición cervecera",
    clues: [
      "Esta ciudad es la capital de Baviera y combina edificios históricos con una animada cultura tradicional.",
      "En su plaza principal se encuentra un famoso ayuntamiento con un reloj cuyas figuras mecánicas atraen a multitud de visitantes.",
      "Fuimos con tu hermano a celebrar el Oktoberfest.",
    ],
    question: "¿Qué ciudad alemana buscas?",
    options: ["Núremberg", "Múnich", "Fussen", "Triberg", "Frankfurt" ],
    answer: "Múnich",
    success: "¡Correcto! Has descubierto Múnich, el corazón de Baviera.",
    hint: "Nos bebimos unas enormes jarras de cerveza.",
    x: 45,
    y: 45,
  },
  {
    city: "Budapest",
    country: "Hungría",
    emoji: "🇭🇺",
    clue: "El último billete",
    clues: [
      "La capital que buscas surgió de la unión de dos partes históricas situadas a ambos lados de un gran río.",
      "Ese río atraviesa Europa central y oriental y desemboca en el mar Negro.",
      "Su Parlamento, iluminado por la noche, se refleja en el agua; la moneda nacional es el florín húngaro.",
    ],
    question: "¿Cuál es el destino final de esta aventura?",
    options: ["Irlanda", "Budapest", "Berlín", "Venecia", "Viena"],
    answer: "Budapest",
    success: "¡Has encontrado el destino de nuestra próxima aventura!",
    hint: "Las dos partes históricas se llaman Buda y Pest.",
    x: 65,
    y: 65,
  }, 
  
];

const origin = {
  name: "Casa",
  x: 20,
  y: 90,
};

function App() {
  const destination = "Budapest, Hungría";
  const dedication = "Nuestro próximo recuerdo empieza aquí. ❤️";

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [finished, setFinished] = useState(false);

  const stop = stops[current];
  const progress = (completed.length / stops.length) * 100;
  const solved = completed.includes(current);

  function startGame() {
    setCurrent(0);
    setCompleted([]);
    setSelected("");
    setFeedback("");
    setShowHint(false);
    setFinished(false);
    setStarted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAnswer(option: string) {
    if (solved) return;

    setSelected(option);

    if (option === stop.answer) {
      setFeedback(stop.success);
      setCompleted((previous) =>
        previous.includes(current)
          ? previous
          : [...previous, current],
      );
    } else {
      setFeedback("Todavía no… Relaciona las tres pistas e inténtalo otra vez.");
    }
  }

  function nextStop() {
    if (current === stops.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
    }

    setSelected("");
    setFeedback("");
    setShowHint(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setCurrent(0);
    setCompleted([]);
    setSelected("");
    setFeedback("");
    setShowHint(false);
    setFinished(false);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="game-shell">
      <header className="topbar">
        <div>
          <p className="topbar-subtitle">UNA AVENTURA EN 8 LETRAS</p>
        </div>
        <span className="topbar-status">● PLAYER 1</span>
      </header>

      {!started ? (
        <section className="intro">
          <p className="eyebrow">★ NUEVA PARTIDA ★</p>

          <h1>
            Nuestra gran
            <br />
            <span>próxima aventura</span>
          </h1>

          <p className="intro-copy">
            Hola cariñitti, tengo una misión para ti. Resuelve las pistas,
            recorre los lugares que forman parte de nuestra
            historia y descubre cuál será nuestra próxima aventura.
          </p>

          <EuropeMap current={-1} completed={[]} />

          <div className="pixel-panel setup-panel">
            <p className="panel-label">
              MENSAJE CLASIFICADO // SOLO PARA TI
            </p>

            <p className="clue-story">
              Hay un regalo esperándote. Para descubrirlo,
              tendrás que recordar, observar y conectar las pistas.
              ¿Lista para recorrer nuestra historia?
            </p>

            <button
              className="pixel-button primary-button"
              onClick={startGame}
            >
              ▶ EMPEZAR AVENTURA
            </button>

            <p className="small-note">
              {stops.length} destinos. Un viaje. Un recuerdo juntos. ♥
            </p>
          </div>
        </section>
      ) : finished ? (
        <section className="ending pixel-panel">
          <p className="eyebrow">★ MISIÓN COMPLETADA ★</p>

          <div className="trophy">🏆</div>

          <h1>
            ¡Lo has
            <br />
            <span>conseguido!</span>
          </h1>

          <p className="ending-copy">
            Has recorrido nuestros recuerdos, resuelto todos los
            acertijos y desbloqueado el último destino.
            Ahora sí, ha llegado el momento de descubrir tu regalo.

            Pero antes, quiero darte las gracias por ser como eres,
            por cuidarme cada día, por tener tanta paciencia conmigo
            y por quererme incluso en mis días más difíciles.
            Gracias por hacer que cada momento a tu lado sea especial
            y por convertir lo cotidiano en algo bonito.

            Te quiero muchísimo, más de lo que a veces sé expresar,
            y no se me ocurre nadie mejor con quien seguir sumando
            aventuras, recuerdos y destinos.
            Este viaje es solo una pequeña forma de recordarte
            lo especial que eres para mí.
          </p>

          <div className="destination-card">
            <p className="panel-label">NUESTRO PRÓXIMO VIAJE ES A...</p>

            <div className="big-destination">
              🇭🇺 {destination}
            </div>

            <p className="dedication">{dedication}</p>

            <div className="heart-row">♥ ♥ ♥</div>
          </div>

          <button className="pixel-button" onClick={restart}>
            ↻ VOLVER A JUGAR
          </button>
        </section>
      ) : (
        <section className="game-content">
          <div className="progress-panel">
            <div className="progress-info">
              <span>PROGRESO DE LA MISIÓN</span>
              <span>
                {completed.length}/{stops.length}
              </span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <EuropeMap current={current} completed={completed} />

          <div className="stage-heading">
            <p className="eyebrow">
              PARADA {current + 1} DE {stops.length}
            </p>

            <h1>
              {solved
                ? `${stop.emoji} ${stop.city}`
                : `🔒 Parada ${String(current + 1).padStart(2, "0")}`}
            </h1>

            <p className="country">
              {solved ? stop.country : "Destino desconocido"}
            </p>
          </div>

          <article className="pixel-panel clue-panel">
            <p className="panel-label">
              ARCHIVO SECRETO // {stop.clue}
            </p>

            <div className="clue-icon">✉</div>

            <p className="clue-story">
              Lee las tres pistas y piensa qué lugar tienen en común.
            </p>

            <div className="question-box">
              {stop.clues.map((clue, index) => (
                <p className="clue-story" key={`${current}-${index}`}>
                  <strong style={{ color: "var(--yellow)" }}>
                    PISTA {index + 1}.
                  </strong>{" "}
                  {clue}
                </p>
              ))}

              <p>{stop.question}</p>

              <div className="answer-list">
                {stop.options.map((option) => {
                  const isCorrect = option === stop.answer;
                  const isSelected = selected === option;

                  return (
                    <button
                      key={option}
                      className={[
                        "answer-button",
                        isSelected ? "selected-answer" : "",
                        solved && isCorrect ? "correct-answer" : "",
                        isSelected && !isCorrect ? "wrong-answer" : "",
                      ].join(" ")}
                      onClick={() => checkAnswer(option)}
                      disabled={solved}
                    >
                      <span className="answer-cursor">
                        {isSelected && isCorrect ? "✓" : "▶"}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {feedback && (
              <div
                className={`feedback-box ${
                  solved ? "feedback-good" : "feedback-bad"
                }`}
                role="status"
              >
                {feedback}
              </div>
            )}

            {!solved && (
              <>
                <button
                  className="hint-button"
                  onClick={() => setShowHint((previous) => !previous)}
                >
                  {showHint
                    ? "Ocultar pista extra ▲"
                    : "Necesito una pista extra ▼"}
                </button>

                {showHint && (
                  <p className="hint-copy">{stop.hint}</p>
                )}
              </>
            )}

            {solved && (
              <button
                className="pixel-button primary-button"
                onClick={nextStop}
              >
                {current === stops.length - 1
                  ? "★ DESCUBRIR LA SORPRESA"
                  : "SIGUIENTE PARADA →"}
              </button>
            )}
          </article>

          <div className="route-list">
            <p className="panel-label">NUESTRO ITINERARIO</p>

            <div className="route-stops">
              {stops.map((item, index) => (
                <div
                  key={`${item.city}-${index}`}
                  className={`route-stop ${
                    completed.includes(index) ? "route-done" : ""
                  } ${current === index ? "route-current" : ""}`}
                >
                  <span className="route-number">
                    {completed.includes(index)
                      ? "✓"
                      : String(index + 1).padStart(2, "0")}
                  </span>

                  <span>
                    {completed.includes(index)
                      ? item.city
                      : index === current
                        ? "Destino por descubrir"
                        : "Destino bloqueado"}
                  </span>

                  <span className="route-status">
                    {completed.includes(index)
                      ? "COMPLETADO"
                      : current === index
                        ? "EN CURSO"
                        : "BLOQUEADO"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <span>NUESTRA PROXIMA AVENTURA</span>
        <span>TE QUIERO</span>
      </footer>
    </main>
  );
}

function EuropeMap({
  current,
  completed,
}: {
  current: number;
  completed: number[];
}) {
  const visibleStops = stops
    .map((stop, index) => ({ ...stop, index }))
    .filter(
      (stop) =>
        completed.includes(stop.index) || stop.index === current,
    );

  const routePoints = [
    `${origin.x},${origin.y}`,
    ...visibleStops.map((stop) => `${stop.x},${stop.y}`),
  ].join(" ");

  const currentStop = current >= 0 ? stops[current] : null;

  return (
    <section className="map-panel">
      <div className="map-topline">
        <span>MAPA DE NUESTROS VIAJES</span>
        <span>RUTA 001</span>
      </div>

      <div className="map-canvas">
        <div className="map-grid" />

        <svg
          className="map-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-label="Mapa de la ruta descubierta"
        >
          {visibleStops.length > 0 && (
            <polyline
              className="route-active"
              points={routePoints}
            />
          )}
        </svg>

        <div
          className="map-city map-start"
          style={{
            left: `${origin.x}%`,
            top: `${origin.y}%`,
          }}
        >
          <span className="map-dot">★</span>
          <span className="map-city-name">Casa</span>
        </div>

        {visibleStops.map((stop) => {
          const isVisited = completed.includes(stop.index);
          const isCurrent = stop.index === current;

          return (
            <div
              key={`${stop.city}-${stop.index}`}
              className={[
                "map-city",
                isVisited ? "map-visited" : "",
                isCurrent && !isVisited ? "map-current" : "",
              ].join(" ")}
              style={{
                left: `${stop.x}%`,
                top: `${stop.y}%`,
              }}
            >
              <span className="map-dot">
                {isVisited ? "✓" : "?"}
              </span>

              <span className="map-city-name">
                {isVisited ? stop.city : "¿?"}
              </span>
            </div>
          );
        })}

        {currentStop && (
          <span
            className="map-plane"
            style={{
              left: `${currentStop.x}%`,
              top: `${currentStop.y}%`,
            }}
            aria-label="Avión"
          >
            ✈
          </span>
        )}

        <span className="map-compass">N ↑</span>
      </div>

      <div className="map-bottomline">
        <span>✦ ORIGEN: CASA</span>
        <span>
          {current < 0
            ? "RUTA PENDIENTE"
            : completed.includes(current)
              ? `DESCUBIERTO: ${stops[current].city.toUpperCase()}`
              : "SIGUIENTE DESTINO: ???"}
        </span>
      </div>
    </section>
  );
}

export default App;

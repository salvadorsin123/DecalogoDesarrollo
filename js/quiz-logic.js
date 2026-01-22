
const quizData = [
    {
        question: "¿Cuál es la diferencia fundamental entre los países pobres y los ricos?",
        options: [
            { text: "La cantidad de recursos naturales disponibles.", explain: "El autor rechaza esta idea, señalando países ricos sin recursos y pobres con muchos recursos." },
            { text: "La antigüedad de su historia y civilización.", explain: "El texto descarta la antigüedad como factor, citando ejemplos de países jóvenes que son ricos." },
            { text: "La actitud de las personas y su cumplimiento de principios.", explain: "¡Exacto! Esta es la tesis central: el desarrollo es un estado mental y cultural basado en valores específicos." },
            { text: "La inteligencia innata de sus habitantes.", explain: "El autor afirma que no hay diferencia intelectual significativa; la diferencia está en la actitud." }
        ],
        correct: 2,
        hint: "Piensa en lo que tienen en común Suiza y Japón a pesar de no tener grandes recursos."
    },
    {
        question: "¿Qué ejemplo utiliza el autor para ilustrar un país sin recursos naturales pero altamente desarrollado?",
        options: [
            { text: "Suiza", explain: "¡Correcto! Suiza se destaca por no tener océano ni cultivar cacao, pero tener la mejor flota y los mejores chocolates." },
            { text: "Brasil", explain: "Se menciona como ejemplo de país con vastos recursos que aún enfrenta desafíos de subdesarrollo." },
            { text: "Argentina", explain: "Al igual que Brasil, se cita como ejemplo de riqueza natural que no garantiza riqueza económica." },
            { text: "Egipto", explain: "Se menciona por su antigüedad histórica, no como el ejemplo de la paradoja de recursos." }
        ],
        correct: 0,
        hint: "Es un país pequeño, famoso por sus chocolates y bancos, aunque no produce cacao ni tiene mar."
    },
    {
        question: "En el Decálogo, ¿cómo se define el valor del 'Amor al Trabajo'?",
        options: [
            { text: "Como una obligación penosa", explain: "Esta es la visión negativa que el Decálogo busca combatir activamente." },
            { text: "Como una oportunidad de realización y creación", explain: "¡Correcto! El autor promueve ver el trabajo positivamente, como fuente de satisfacción." },
            { text: "Como algo que genera riqueza rápida", explain: "Aunque genera riqueza, el enfoque está en la actitud hacia la labor, no solo en el dinero." },
            { text: "Como algo que debe evitarse si se es rico", explain: "El trabajo es un valor central constante, independientemente de la riqueza acumulada." }
        ],
        correct: 1,
        hint: "Contrasta la idea bíblica de 'castigo' con una visión más creativa."
    },
    {
        question: "¿Qué grupo histórico cita el autor como ejemplo de ética de trabajo y austeridad?",
        options: [
            { text: "Los Vikingos", explain: "No se mencionan en relación con el desarrollo económico moderno en el texto." },
            { text: "Los Romanos", explain: "Se mencionan por su derecho, pero no como el ejemplo principal de ética laboral industrial." },
            { text: "Los Ilustrados", explain: "El foco del autor está en la ética religiosa y laboral práctica, más que en la intelectualidad pura." },
            { text: "Los Puritanos", explain: "¡Correcto! El autor atribuye el despegue económico inglés a los valores rígidos de los puritanos." }
        ],
        correct: 3,
        hint: "Eran conocidos por su rigidez moral y dedicación absoluta al trabajo en los siglos XVI y XVII."
    },
    {
        question: "¿Cuál de los siguientes NO es uno de los 10 principios del Decálogo del Desarrollo?",
        options: [
            { text: "Puntualidad", explain: "La puntualidad es uno de los pilares fundamentales del Decálogo." },
            { text: "Ahorro e Inversión", explain: "Este valor es clave para la acumulación de capital y progreso nacional." },
            { text: "Inteligencia Superior", explain: "¡Correcto! La inteligencia no figura como valor; el énfasis está en los hábitos y la conducta." },
            { text: "Orden", explain: "El orden es el primer principio mencionado para lograr una vida organizada." }
        ],
        correct: 2,
        hint: "Recuerda que los principios son hábitos de conducta aprendibles, no capacidades innatas."
    },
    {
        question: "Según el autor, ¿cuál es la 'llave' para entrar al reino del desarrollo?",
        options: [
            { text: "El Decálogo del Desarrollo", explain: "¡Exacto! El autor usa esta metáfora para describir el conjunto de principios mentales." },
            { text: "Un préstamo internacional", explain: "El autor critica la dependencia económica y la deuda externa como soluciones." },
            { text: "El descubrimiento de petróleo", explain: "El texto sostiene que los recursos naturales por sí solos no garantizan el desarrollo." },
            { text: "Un cambio de gobierno", explain: "El cambio propuesto es cultural y personal, no meramente administrativo." }
        ],
        correct: 0,
        hint: "Es el nombre del conjunto de principios que da título al documento."
    },
    {
        question: "¿Cuál es la secuencia propuesta para lograr el cambio cultural?",
        options: [
            { text: "Instruir -> Practicar -> Prosperar", explain: "¡Correcto! Primero se enseña el valor, luego se hace hábito y finalmente llega el resultado." },
            { text: "Gastar -> Invertir -> Ganar", explain: "Esta secuencia es contraria al principio fundamental de ahorro para el crecimiento." },
            { text: "Legislar -> Castigar -> Corregir", explain: "El enfoque es la convicción interna y el hábito, no la imposición por miedo." },
            { text: "Esperar -> Recibir -> Crecer", explain: "Esta actitud pasiva es precisamente lo que define el subdesarrollo." }
        ],
        correct: 0,
        hint: "El proceso comienza con el conocimiento, sigue con la acción repetida y termina con el éxito."
    },
    {
        question: "¿Qué implica el valor de 'Responsabilidad' en el contexto del Decálogo?",
        options: [
            { text: "Culpar a otros por los problemas", explain: "Esto es lo opuesto a la responsabilidad individual que pide el Decálogo." },
            { text: "Asumir consecuencias y cumplir deberes", explain: "¡Exacto! Responsabilidad es hacerse cargo de uno mismo sin excusas." },
            { text: "Hacer solo lo que se nos ordena", explain: "Implica una actitud activa y no solo una obediencia ciega." },
            { text: "Tener un cargo de alto nivel", explain: "Es un valor ético personal, no depende de la jerarquía o puesto." }
        ],
        correct: 1,
        hint: "Tiene que ver con no buscar excusas y cumplir con lo que nos corresponde."
    },
    {
        question: "¿Por qué se menciona a Japón como un ejemplo relevante?",
        options: [
            { text: "Por su gran extensión territorial", explain: "Japón es en realidad un territorio pequeño y geográficamente difícil." },
            { text: "Por su capacidad de levantarse de las ruinas", explain: "¡Correcto! Se resalta su recuperación tras la guerra basándose en su capital humano." },
            { text: "Por sus abundantes recursos de petróleo", explain: "Japón es de los países que más energía debe importar por falta de recursos." },
            { text: "Por su baja densidad de población", explain: "Japón es uno de los países más densamente poblados del mundo." }
        ],
        correct: 1,
        hint: "Se convirtió en potencia económica sin recursos tras quedar destruido en la 2da Guerra Mundial."
    },
    {
        question: "Según la conclusión, ¿cuáles son los frutos finales de aplicar el Decálogo?",
        options: [
            { text: "Poder militar y fuerza", explain: "El objetivo del Decálogo es el bienestar social y humano, no la fuerza bélica." },
            { text: "Trabajo, pan, riqueza y libertad", explain: "¡Correcto! Estas son las cuatro promesas que el autor lista explícitamente." },
            { text: "Subsidios y apoyo estatal", explain: "El autor promueve la autogeneración de riqueza, no la dependencia estatal." },
            { text: "Fama y reconocimiento mundial", explain: "Aunque puede ocurrir, el fruto real es el bienestar y la justicia social." }
        ],
        correct: 1,
        hint: "Son cuatro beneficios básicos que resumen el bienestar material y la independencia."
    }
];

let currentIdx = 0;
let score = 0;
let mistakes = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    const q = quizData[currentIdx];
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('current-question-num').innerText = currentIdx + 1;
    document.getElementById('progress-bar').style.width = ((currentIdx + 1) / quizData.length * 100) + "%";

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = "option-card w-full text-left p-5 rounded-2xl border border-slate-700 flex items-center group";
        btn.innerHTML = `<span class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mr-4 text-sm font-black text-blue-400 border border-slate-700">${String.fromCharCode(65 + i)}</span> <span class="font-medium">${opt.text}</span>`;
        btn.onclick = () => checkAnswer(i, btn);
        container.appendChild(btn);
    });

    document.getElementById('feedback-area').classList.add('hidden');
    document.getElementById('hint-text').classList.add('hidden');
    document.getElementById('next-btn').disabled = true;
}

function checkAnswer(selectedIdx, btnElement) {
    if (answered) return;
    answered = true;

    const q = quizData[currentIdx];
    const allOptions = document.querySelectorAll('.option-card');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackBox = document.getElementById('feedback-box');

    if (selectedIdx === q.correct) {
        btnElement.classList.add('correct');
        score++;
        document.getElementById('right-count').innerText = score;
        feedbackStatus.innerText = "¡Correcto!";
        feedbackStatus.className = "font-black uppercase tracking-widest text-xs mb-2 text-green-400";
        feedbackBox.className = "p-5 rounded-2xl text-sm leading-relaxed border border-green-500/50 bg-green-500/10";
    } else {
        btnElement.classList.add('incorrect');
        allOptions[q.correct].classList.add('correct');
        mistakes++;
        document.getElementById('wrong-count').innerText = mistakes;
        feedbackStatus.innerText = "Incorrecto";
        feedbackStatus.className = "font-black uppercase tracking-widest text-xs mb-2 text-red-400";
        feedbackBox.className = "p-5 rounded-2xl text-sm leading-relaxed border border-red-500/50 bg-red-500/10";
    }

    feedbackText.innerText = q.options[selectedIdx].explain;
    feedbackArea.classList.remove('hidden');
    document.getElementById('next-btn').disabled = false;
}

function toggleHint() {
    const hint = document.getElementById('hint-text');
    hint.innerText = quizData[currentIdx].hint;
    hint.classList.toggle('hidden');
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < quizData.length) loadQuestion();
    else showResults();
}

function showResults() {
    document.getElementById('question-view').classList.add('hidden');
    document.getElementById('results-view').classList.remove('hidden');
    document.getElementById('final-score').innerText = `${score}/${quizData.length}`;
}

window.onload = loadQuestion;

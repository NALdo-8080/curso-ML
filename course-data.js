/**
 * course-data.js - Fuente de verdad del currículo de Machine Learning
 * 9 Unidades Temáticas, 27 Lecciones con Teoría, Takeaways, Instrucciones, Quizzes y Laboratorios.
 */
const REPO_BASE = "https://github.com/microsoft/ML-For-Beginners/blob/main/";

const UNITS = [
  {
    title: "Unidad 1: Introducción al ML",
    path: "1-Introduction",
    externalPractice: {
      provider: "Google Teachable Machine",
      badge: "Visión & Audio (No-Code)",
      title: "Entrena tu Primer Modelo Sin Código con Teachable Machine",
      url: "https://teachablemachine.withgoogle.com/",
      description: "Experimenta la diferencia real entre programar reglas y entrenar modelos. Usa tu cámara web o sube archivos para crear 2 o más clases (ej. posturas, objetos o gestos). El modelo se entrena en segundos usando Transfer Learning directamente en tu navegador.",
      tasks: [
        "Crea un proyecto de imagen estándar con al menos 2 clases distintas.",
        "Captura al menos 20 imágenes de muestra por clase con distintas iluminaciones y ángulos.",
        "Entrena el modelo y pon a prueba la barra de confianza probabilística en tiempo real."
      ],
      recommendedMetric: "Confianza de clasificación > 90% en muestras de prueba"
    },
    lessons: [
      {
        n: 1,
        title: "Qué es el Machine Learning",
        folder: "1-intro-to-ML",
        p1: "Imagina que le enseñas a un perrito a sentarse. Con reglas normales, tú le dices exactamente qué hacer, paso a paso. Pero en Machine Learning es al revés: en lugar de decirle la regla, le muestras muchos ejemplos —'cuando pasa esto, tú haces esto otro'— y dejas que él mismo descubra el patrón. Machine Learning es lo mismo: en vez de programar la regla a mano, le damos a la computadora un montón de ejemplos (entradas y respuestas) para que ella misma encuentre la regla que los conecta.",
        p2: "Pero ojo: no todo necesita Machine Learning. Si un problema tiene una regla clara y exacta —como sumar impuestos o revisar si una contraseña tiene 8 letras— es mucho más fácil (y más rápido) escribir esa regla directamente, sin usar ningún modelo. El Machine Learning brilla cuando el patrón es tan complicado, cambiante o difícil de explicar con palabras que ni el mejor programador podría escribir todas las reglas a mano — como reconocer una voz o detectar un fraude.",
        takeaways: [
          "Programación tradicional: tú escribes la regla y la máquina la sigue. Machine Learning: le das ejemplos y la máquina descubre la regla.",
          "Un modelo de ML no acierta siempre — aprende un patrón general, no una verdad absoluta.",
          "Si puedes resolver el problema con un simple 'si esto, entonces aquello', no necesitas Machine Learning."
        ],
        instructions: [
          "Inspecciona los 4 problemas propuestos en la bandeja de elementos.",
          "Asigna cada caso a 'Reglas Tradicionales (if/else)' o 'Machine Learning (Probabilístico)'.",
          "Haz clic en 'Submit Answer' para que el Asistente verifique tu arquitectura."
        ],
        hint: "Pregúntate: ¿tiene este problema una respuesta exacta y fija (como una fórmula), o depende de patrones que cambian y tienen excepciones?",
        quiz: {
          q: "¿En cuál de estos casos es mejor usar una regla fija (programación tradicional) en vez de Machine Learning?",
          opts: [
            "Detectar fraudes que cambian de forma cada semana.",
            "Calcular el impuesto de una compra usando una tabla de precios fija.",
            "Decidir si un correo es spam según su texto.",
            "Recomendar películas según lo que vieron usuarios parecidos."
          ],
          correct: 1,
          fb: "Calcular impuestos sigue una fórmula exacta y fija, sin ambigüedad. Ahí no hace falta un modelo — una regla simple es más rápida, más barata y 100% confiable."
        },
        exercise: {
          type: "classification_bins",
          title: "Auditoría de Arquitectura: ¿Regla Fija o Modelo ML?",
          categories: [
            { id: "reglas", title: "Reglas Tradicionales (if/else)" },
            { id: "ml", title: "Machine Learning (Probabilístico)" }
          ],
          items: [
            { id: "i1", text: "Validar si una contraseña tiene 8 caracteres y un número", target: "reglas" },
            { id: "i2", text: "Predecir la demanda eléctrica con base en el clima y feriados", target: "ml" },
            { id: "i3", text: "Verificar si un código de descuento está vencido", target: "reglas" },
            { id: "i4", text: "Transcribir audio en tiempo real en ambientes ruidosos", target: "ml" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Asigna los 4 problemas a sus contenedores antes de enviar." };
            const errors = keys.filter(k => {
              const it = [{id:"i1",target:"reglas"},{id:"i2",target:"ml"},{id:"i3",target:"reglas"},{id:"i4",target:"ml"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Arquitectura impecable! Has distinguido con precisión sistemas basados en reglas de modelado probabilístico." };
            return { pass: false, msg: `Detectadas ${errors.length} asignaciones erróneas. Recuerda: validar formatos y fechas es determinista (reglas).` };
          }
        }
      },
      {
        n: 2,
        title: "Historia y Evolución del ML",
        folder: "2-history-of-ML",
        p1: "La historia del Machine Learning se parece a una montaña rusa de ilusión y decepción. En 1958, un científico llamado Frank Rosenblatt construyó una máquina llamada 'perceptrón' y prometió que pronto pensaría como un cerebro humano. La gente se emocionó muchísimo... pero en 1969, otros dos científicos (Minsky y Papert) demostraron que ese perceptrón ni siquiera podía resolver un problema muy simple. La decepción fue tan grande que el dinero y el interés por la IA casi desaparecieron durante años — a esos periodos se les llama 'inviernos de la IA'.",
        p2: "Lo que hizo despertar de nuevo a la IA no fue una sola idea genial, sino tres cosas juntas al mismo tiempo: muchísimos datos gracias a internet, computadoras mucho más rápidas (las mismas tarjetas gráficas que usan los videojuegos), y mejores técnicas matemáticas para entrenar redes neuronales. Ninguna de las tres por separado hubiera bastado — la combinación de las tres fue lo que finalmente funcionó, sobre todo a partir de 2012.",
        takeaways: [
          "Los 'inviernos de la IA' pasaron cuando la tecnología prometió más de lo que en verdad podía cumplir.",
          "En 2012, un sistema llamado AlexNet sorprendió a todos usando tarjetas gráficas (GPU) para entrenar redes neuronales — ahí empezó el auge actual.",
          "Las matemáticas detrás del ML existen desde hace décadas; lo que cambió fue el poder de cómputo y la cantidad de datos disponibles."
        ],
        instructions: [
          "Revisa los 4 hitos históricos presentados en la lista de ordenamiento.",
          "Arrastra y suelta las tarjetas para colocarlas en orden cronológico estricto.",
          "Haz clic en 'Ejecutar y Validar' para comprobar la línea temporal."
        ],
        hint: "El perceptrón nació en 1958. Su gran problema salió a la luz en 1969. La técnica de backpropagation resurgió en los años 80. El gran salto con GPUs fue en 2012.",
        quiz: {
          q: "¿Por qué existieron los llamados 'inviernos de la IA'?",
          opts: [
            "Porque los gobiernos prohibieron investigar sobre inteligencia artificial.",
            "Porque la tecnología de la época no podía cumplir las promesas exageradas que se habían hecho.",
            "Porque las computadoras se dañaban con el frío.",
            "Porque todavía no existía el internet."
          ],
          correct: 1,
          fb: "Cuando las expectativas eran mucho más grandes que lo que realmente se podía lograr con los datos y las computadoras de esa época, la financiación y el interés desaparecieron por años."
        },
        exercise: {
          type: "sequence_sort",
          title: "Línea Temporal: Ordena la Evolución del ML",
          items: [
            { id: "minsky", text: "Demostración de la limitación XOR del Perceptrón (Primer invierno)" },
            { id: "rosenblatt", text: "Invención del Perceptrón por Frank Rosenblatt" },
            { id: "alexnet", text: "Victoria de AlexNet en ImageNet con GPUs (Boom Deep Learning)" },
            { id: "backprop", text: "Popularización del algoritmo Backpropagation (Rumelhart, Hinton)" }
          ],
          correctOrder: ["rosenblatt", "minsky", "backprop", "alexnet"],
          evaluator: (state) => {
            const cur = state.order || [];
            const correct = ["rosenblatt", "minsky", "backprop", "alexnet"];
            if (JSON.stringify(cur) === JSON.stringify(correct)) {
              return { pass: true, msg: "¡Cronología exacta! Perceptrón (1958) → Crisis XOR (1969) → Backpropagation (1986) → Boom AlexNet (2012)." };
            }
            return { pass: false, msg: "El orden cronológico no coincide. Ten en cuenta que la crisis de Minsky precedió al renacimiento con backpropagation." };
          }
        }
      },
      {
        n: 3,
        title: "Equidad, Sesgo y Ética en Datos",
        folder: "3-fairness",
        p1: "Imagina que un modelo de Machine Learning es como un estudiante que solo aprende copiando ejemplos que le diste. Si le diste ejemplos donde, por error del pasado, cierto grupo de personas fue tratado injustamente (por ejemplo, en préstamos de banco), el modelo va a copiar exactamente esa injusticia, pensando que es 'la forma correcta de hacerlo' — aunque en realidad esté mal.",
        p2: "El problema es que no hay una sola forma matemática de definir qué es 'justo', y a veces esas formas hasta se contradicen entre sí. Por eso hay que revisar con cuidado cómo le va al modelo con cada grupo de personas por separado (no solo el promedio general), y decidir conscientemente qué se hace con la información sensible antes de usar el modelo.",
        takeaways: [
          "Un modelo no es 'objetivo' por ser matemático — si los datos tienen un sesgo del pasado, el modelo lo repite.",
          "Quitar una columna sensible (como raza o género) no siempre funciona, porque otras columnas (como el código postal) pueden delatar lo mismo indirectamente.",
          "Siempre hay que revisar cómo le va al modelo con cada grupo por separado, no solo el promedio general."
        ],
        instructions: [
          "Observa la tabla de aprobación crediticia entre el Grupo A (base) y Grupo B (desfavorecido).",
          "Mueve el slider del umbral del Grupo B hacia el rango 0.44 - 0.46 para equilibrar la Tasa de Falsos Negativos.",
          "Verifica que la disparidad descienda por debajo del 3% y envía tu solución."
        ],
        hint: "Bajar un poco el umbral de decisión de un grupo puede compensar un sesgo histórico que lo perjudicaba.",
        quiz: {
          q: "Si borras la columna 'etnia' de tus datos pero dejas el 'código postal', ¿por qué el modelo puede seguir siendo injusto?",
          opts: [
            "Porque los modelos de ML siempre violan la privacidad.",
            "Porque el código postal puede estar tan relacionado con la etnia de las personas que el modelo 'adivina' esa información igual.",
            "Porque el modelo automáticamente recupera la columna borrada.",
            "Solo pasa si usas redes neuronales muy grandes."
          ],
          correct: 1,
          fb: "A esto se le llama variable 'proxy': aunque borres una columna sensible, otra columna relacionada (como la zona donde vive alguien) puede delatar casi la misma información."
        },
        exercise: {
          type: "fairness_audit",
          title: "Laboratorio de Auditoría de Sesgo Demográfico",
          evaluator: (state) => {
            const thB = state.thresholdB !== undefined ? state.thresholdB : 0.50;
            if (thB > 0.42 && thB < 0.48) {
              return { pass: true, msg: `Excelente calibración (Umbral = ${thB.toFixed(2)}). La disparidad de Falsos Negativos es inferior al 3%, cumpliendo el criterio de Igualdad de Oportunidades.` };
            }
            if (thB >= 0.48) {
              return { pass: false, msg: `Umbral de ${thB.toFixed(2)} es demasiado alto: mantiene una tasa de rechazo injusta hacia candidatos calificados del Grupo B.` };
            }
            return { pass: false, msg: `Umbral de ${thB.toFixed(2)} es excesivamente bajo: dispara los Falsos Positivos aumentando el riesgo de impago.` };
          }
        }
      },
      {
        n: 4,
        title: "Flujo de Trabajo del Ingeniero de ML",
        folder: "4-techniques-of-ML",
        p1: "Cuando la gente imagina Machine Learning, piensa que lo más difícil es 'entrenar el modelo'. En realidad, esa parte suele ser la más rápida. Lo que de verdad toma tiempo es preparar bien los datos: juntarlos, limpiarlos, decidir qué información es útil y arreglar los que tienen errores o huecos.",
        p2: "El error más peligroso que puede cometer alguien nuevo en esto se llama 'fuga de información' (Data Leakage): sin darte cuenta, dejas que el modelo 'vea' información que se supone no debería tener todavía —como estudiar las respuestas de un examen antes de hacerlo—. Eso hace que el modelo parezca buenísimo en las pruebas de laboratorio, pero falle feo cuando se usa en la vida real.",
        takeaways: [
          "Separar los datos en 'para entrenar' y 'para probar' debe hacerse ANTES de cualquier otro cálculo sobre ellos.",
          "La fuga de información hace que el modelo se vea genial en pruebas, pero falle en el mundo real.",
          "Un modelo simple con datos limpios casi siempre gana a un modelo complicado con datos sucios."
        ],
        instructions: [
          "Examina los 4 pasos del pipeline de preprocesamiento.",
          "Ordénalos de manera que ninguna estadística del conjunto de prueba contamine el entrenamiento.",
          "Verifica que el split sea el primer paso y el transform del test sea el último."
        ],
        hint: "Siempre separa los datos de entrenamiento y de prueba ANTES de calcular cualquier promedio o ajuste sobre ellos.",
        quiz: {
          q: "¿Cuál es el momento correcto para calcular cosas como el promedio o la escala de tus datos?",
          opts: [
            "Sobre todos los datos juntos, antes de separarlos en entrenamiento y prueba.",
            "Calcularlo solo con los datos de entrenamiento, y después aplicar ese mismo cálculo a los datos de prueba.",
            "Solo con los datos de prueba.",
            "No importa, siempre da igual."
          ],
          correct: 1,
          fb: "Si calculas el promedio usando también los datos de prueba, le estás dando al modelo información que no debería tener todavía — eso es fuga de información."
        },
        exercise: {
          type: "sequence_sort",
          title: "Ensambla el Pipeline Anti-Data Leakage",
          items: [
            { id: "split", text: "1. Separar datos en Train y Test (ej. 80/20)" },
            { id: "fit_scaler", text: "2. Ajustar StandardScaler solo con datos de Train" },
            { id: "train_model", text: "3. Entrenar el modelo con Train escalado" },
            { id: "eval_test", text: "4. Transformar Test con el scaler y evaluar métricas finales" }
          ],
          correctOrder: ["split", "fit_scaler", "train_model", "eval_test"],
          evaluator: (state) => {
            const cur = state.order || [];
            if (JSON.stringify(cur) === JSON.stringify(["split", "fit_scaler", "train_model", "eval_test"])) {
              return { pass: true, msg: "¡Pipeline seguro contra Data Leakage! El escalador solo conoce la distribución del conjunto de entrenamiento." };
            }
            return { pass: false, msg: "Riesgo de Data Leakage: asegúrate de hacer el split antes de ajustar cualquier escalador o modelo." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 2: Regresión",
    path: "2-Regression",
    externalPractice: {
      provider: "Kaggle Competitions",
      badge: "Regresión Tabular Real",
      title: "Kaggle: House Prices — Advanced Regression Techniques",
      url: "https://www.kaggle.com/c/house-prices-advanced-regression-techniques",
      description: "El benchmark canónico de regresión en ciencia de datos. Predice el precio final de viviendas residenciales con 79 variables explicativas. Aprende a lidiar con asimetría (skewness), valores atípicos (outliers) y multicolinealidad.",
      tasks: [
        "Aplica transformación logarítmica sobre la variable objetivo (SalePrice) para estabilizar la varianza.",
        "Imputa valores nulos en variables clave (LotFrontage, GarageYrBlt) y codifica variables categóricas.",
        "Entrena una regresión lineal regularizada (Ridge/Lasso) y evalúa el error RMSE en validación cruzada."
      ],
      recommendedMetric: "RMSE en log(SalePrice) < 0.14"
    },
    lessons: [
      {
        n: 5,
        title: "Fundamentos de la Regresión",
        folder: "1-Tools",
        p1: "La regresión sirve para responder preguntas del tipo '¿cuánto?' — por ejemplo, cuánto costará una casa, qué tan caliente estará mañana, o cuántos minutos tardará una entrega. Siempre da como respuesta un número que puede tener decimales, no una categoría. Esto es distinto a la clasificación, que responde preguntas del tipo '¿cuál?' — por ejemplo, ¿esto es spam o no es spam?",
        p2: "Para saber si un modelo de regresión está prediciendo bien, se usa algo llamado 'error cuadrático medio' (MSE): se mide qué tan lejos quedó cada predicción del valor real, se eleva al cuadrado esa distancia, y se promedia todo. Elevar al cuadrado hace que los errores grandes 'pesen' mucho más que los pequeños, así el modelo se esfuerza especialmente por no fallar feo en ningún caso.",
        takeaways: [
          "Regresión predice números (precio, temperatura); Clasificación predice categorías (spam / no spam).",
          "El error cuadrático medio (MSE) castiga con más fuerza los errores grandes que los pequeños.",
          "Hay una medida llamada R² que indica qué tan bien el modelo explica los datos, entre 0 y 1."
        ],
        instructions: [
          "Clasifica los 4 problemas según requieran estimar un valor numérico continuo (Regresión) o una categoría (Clasificación).",
          "Haz clic en 'Submit Answer' para registrar tu resultado."
        ],
        hint: "¿La respuesta puede tener infinitos valores posibles con decimales (como un precio), o es una etiqueta cerrada (como 'sí' o 'no')?",
        quiz: {
          q: "Si tienes valores atípicos muy extremos y no quieres que arruinen tu modelo de regresión, ¿qué medida de error es más resistente a ellos que el MSE?",
          opts: [
            "Log-Loss (entropía cruzada).",
            "MAE (error absoluto medio), que no eleva al cuadrado los errores.",
            "Impureza de Gini.",
            "Exactitud (accuracy)."
          ],
          correct: 1,
          fb: "El MAE mide el error de forma directa, sin elevarlo al cuadrado, así que un solo valor atípico no domina todo el resultado como pasa con el MSE."
        },
        exercise: {
          type: "classification_bins",
          title: "Diagnóstico de Tareas: ¿Regresión o Clasificación?",
          categories: [
            { id: "reg", title: "Regresión (Continuo)" },
            { id: "clf", title: "Clasificación (Discreto)" }
          ],
          items: [
            { id: "c1", text: "Predecir los kWh consumidos por un edificio en agosto", target: "reg" },
            { id: "c2", text: "Determinar si una radiografía muestra neumonía o pulmón sano", target: "clf" },
            { id: "c3", text: "Estimar el precio de venta de un automóvil usado", target: "reg" },
            { id: "c4", text: "Asignar un ticket de soporte a: 'Facturación', 'Técnico' o 'Ventas'", target: "clf" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Clasifica los 4 casos antes de evaluar." };
            const errors = keys.filter(k => {
              const it = [{id:"c1",target:"reg"},{id:"c2",target:"clf"},{id:"c3",target:"reg"},{id:"c4",target:"clf"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Perfecto! Has identificado con claridad variables continuas frente a clases categóricas." };
            return { pass: false, msg: `Tienes ${errors.length} asignaciones incorrectas. Recuerda que magnitudes físicas o precios corresponden a regresión.` };
          }
        }
      },
      {
        n: 6,
        title: "Limpieza y Exploración de Datos de Calabazas",
        folder: "2-Data",
        p1: "En el mundo real, casi ningún dato llega 'limpio y listo'. En el caso de los precios de calabaza, unas ventas vienen en cajas grandes, otras en cajas chicas, y algunas ni siquiera dicen el precio. Si entrenas un modelo mezclando todo eso sin fijarte, vas a obtener resultados sin sentido — como comparar el precio de una calabaza gigante con el de una miniatura como si fueran lo mismo.",
        p2: "Por eso el primer paso casi siempre es poner todo en la misma 'unidad de medida' — por ejemplo, precio por la misma cantidad de calabaza — y ordenar bien las fechas. Explorar los datos con gráficas antes de entrenar cualquier modelo te deja ver de un vistazo si el precio sube y baja según la época del año.",
        takeaways: [
          "'Basura entra, basura sale': si tus datos están sucios, tu modelo también lo estará.",
          "Comparar cosas con unidades distintas (como cajas grandes y chicas) sin ajustarlas primero arruina cualquier modelo.",
          "Mirar los datos con gráficas antes de modelar te ayuda a decidir qué tipo de modelo usar."
        ],
        instructions: [
          "Filtra la tabla de mercado seleccionando únicamente las filas con empaque estandarizado '1 1/9 bushel' y variedad 'PUMPKIN PIE'.",
          "Asegúrate de no seleccionar filas con cajas de 1/2 bushel ni variedades gigantes."
        ],
        hint: "Solo las filas con el mismo tipo de calabaza y el mismo tamaño de caja se pueden comparar de forma justa.",
        quiz: {
          q: "¿Por qué es un error entrenar un modelo mezclando precios 'por caja grande' con precios 'por caja chica' sin ajustarlos?",
          opts: [
            "Porque las computadoras solo entienden números enteros.",
            "Porque el número por sí solo no representa la misma cantidad real de calabaza, y eso confunde al modelo.",
            "Porque el programa rechaza automáticamente los textos.",
            "No es un error, el modelo lo arregla solo."
          ],
          correct: 1,
          fb: "Un modelo solo ve números — no sabe que 'una caja grande' y 'una caja chica' significan cantidades distintas, a menos que tú se lo aclares primero."
        },
        exercise: {
          type: "interactive_filter",
          title: "Normalizador de Datos de Mercado",
          dataset: [
            { id: 1, var: "PUMPKIN PIE", pkg: "1 1/9 bushel", price: 15.50, valid: true },
            { id: 2, var: "MINIATURE", pkg: "1 1/9 bushel", price: 18.00, valid: false },
            { id: 3, var: "PUMPKIN PIE", pkg: "1/2 bushel carton", price: 8.25, valid: false },
            { id: 4, var: "PUMPKIN PIE", pkg: "1 1/9 bushel", price: 16.00, valid: true },
            { id: 5, var: "BIG MACK", pkg: "bins", price: 120.00, valid: false }
          ],
          evaluator: (state) => {
            const sel = state.selected || [];
            if (sel.length === 2 && sel.includes(1) && sel.includes(4)) {
              return { pass: true, msg: "¡Dataset homogeneizado! Has aislado registros con variedad y empaque consistentes para el modelado." };
            }
            return { pass: false, msg: "Filtro incorrecto. Revisa que todas las filas seleccionadas tengan empaque '1 1/9 bushel' y variedad 'PUMPKIN PIE'." };
          }
        }
      },
      {
        n: 7,
        title: "Regresión Lineal y Polinómica en Vivo",
        folder: "3-Linear",
        p1: "Una línea recta asume que las cosas cambian siempre al mismo ritmo. Pero si el precio de la calabaza sube en octubre y baja en noviembre, una sola línea recta no puede seguir esa forma de sube-y-baja: le queda 'corta' — a esto se le llama underfitting (subajuste), cuando el modelo es demasiado simple para el patrón real.",
        p2: "La regresión polinómica deja que la línea se doble como una curva, agregando potencias del número (al cuadrado, al cubo...). El problema es que si te pasas y usas una curva demasiado retorcida, empieza a 'memorizar' cada punto exacto, incluyendo el ruido — eso se llama overfitting (sobreajuste), y hace que el modelo prediga fatal con datos nuevos que no ha visto antes.",
        takeaways: [
          "Underfitting: el modelo es tan simple que ni siquiera capta el patrón general.",
          "Overfitting: el modelo es tan complicado que memoriza hasta el ruido, y falla con datos nuevos.",
          "El objetivo es encontrar un punto medio: ni demasiado simple, ni demasiado complicado."
        ],
        instructions: [
          "Observa el gráfico de dispersión de precios en el Canvas interactivo.",
          "Desplaza el control de grado polinómico hacia d = 2 o d = 3.",
          "Verifica en la consola que el MSE descienda a ~8.4 sin oscilaciones espurias en los bordes."
        ],
        hint: "Un grado muy bajo (como 1) no logra seguir la curva; un grado muy alto (como 8 o más) empieza a hacer zigzags raros para pasar por cada punto.",
        quiz: {
          q: "Si subes el grado del polinomio de 1 a 8 en un conjunto de pocos datos, ¿qué esperarías que pase?",
          opts: [
            "El error baja a cero tanto en los datos de entrenamiento como en los nuevos.",
            "El error en los datos de entrenamiento baja mucho, pero el error con datos nuevos empeora (overfitting).",
            "El error sube porque el modelo 'se confunde'.",
            "No cambia nada."
          ],
          correct: 1,
          fb: "El modelo termina memorizando cada punto de entrenamiento casi a la perfección, pero la curva hace zigzags tan raros entre esos puntos que falla mucho al predecir datos nuevos."
        },
        exercise: {
          type: "canvas_poly_regression",
          title: "Laboratorio de Regresión Polinómica en Vivo",
          pythonLab: {
            title: "Ajusta tu Propia Recta con Scikit-Learn (Python Real)",
            initialCode: `# Regresión Lineal con Scikit-Learn (Estilo Kaggle House Prices)
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Dataset de Viviendas: Superficie en m² (X) vs Precio en miles $ (y)
X = np.array([[50], [70], [80], [100], [120], [150], [200]])
y = np.array([120, 165, 180, 230, 275, 340, 450])

# 1. Instanciar el modelo LinearRegression
model = LinearRegression()

# 2. Entrenar el modelo con X e y (.fit)
model.fit(X, y)

# 3. Predecir y calcular el error MSE
y_pred = model.predict(X)
mse = float(mean_squared_error(y, y_pred))

print(f"Pendiente (coef): {model.coef_[0]:.2f}")
print(f"Intercepto: {model.intercept_:.2f}")
print(f"Error Cuadrático Medio (MSE): {mse:.2f}")
`,
            expectedVars: ["mse", "model"]
          },
          evaluator: (state) => {
            if (state && state.mode === 'python' && !state.pythonExecuted) {
              return { pass: false, msg: "Haz clic en '▶ Ejecutar Código' para correr tu script de Python antes de validar." };
            }
            if (state && state.pythonExecuted) {
              if (state.error) return { pass: false, msg: `Error en Python: ${state.error}` };
              if (!state.vars || typeof state.vars.mse !== 'number') {
                return { pass: false, msg: "Calcula y almacena el Error Cuadrático Medio en la variable 'mse'." };
              }
              if (state.vars.mse > 50) {
                return { pass: false, msg: `El MSE (${state.vars.mse.toFixed(2)}) es demasiado alto. Revisa el ajuste del modelo.` };
              }
              return { pass: true, msg: `¡Ajuste impecable con Scikit-Learn! MSE alcanzado: ${state.vars.mse.toFixed(2)} (óptimo).` };
            }
            const deg = state.degree || 1;
            if (deg === 1) return { pass: false, msg: "Underfitting detectado: una recta (d=1) no captura la curvatura estacional." };
            if (deg === 2 || deg === 3) return { pass: true, msg: `¡Punto dulce alcanzado (d=${deg})! Curvatura óptima con MSE balanceado y sin oscilaciones de Runge.` };
            return { pass: false, msg: `Overfitting severo (d=${deg}): el polinomio oscila salvajemente memorizando ruido puntual.` };
          }
        }
      },
      {
        n: 8,
        title: "Regresión Logística y Clasificación Binaria",
        folder: "4-Logistic",
        p1: "Aunque se llame 'regresión', la regresión logística en realidad sirve para clasificar, no para predecir números. Si intentaras usar una línea recta normal para decidir si una calabaza es 'grande' o 'chica', obtendrías resultados sin sentido (como probabilidades negativas o mayores a 100%).",
        p2: "Por eso la regresión logística usa una curva especial en forma de 'S' (llamada función sigmoide) que siempre da un resultado entre 0% y 100%, como una probabilidad. Después, se elige un punto de corte (normalmente 50%): si la probabilidad es mayor, se decide 'sí'; si es menor, se decide 'no'. Ese punto de corte se puede mover según qué error te sale más caro cometer.",
        takeaways: [
          "La función sigmoide convierte cualquier número en una probabilidad entre 0% y 100%.",
          "El punto de corte estándar es 50%, pero se puede subir o bajar según convenga.",
          "Regresión logística = nombre confuso, pero en realidad sirve para clasificar, no para predecir cantidades."
        ],
        instructions: [
          "Ajusta el control deslizante de Peso (w) a un valor mayor a 1.2 para verticalizar la curva sigmoide.",
          "Ajusta el Sesgo (b) a un valor entre -2.0 y -5.0 para centrar el umbral de 50% en la frontera de clases.",
          "Haz clic en 'Submit Answer' para validar la frontera de decisión."
        ],
        hint: "Si subes el 'peso', la curva se vuelve más empinada; si mueves el 'sesgo', desplazas dónde queda el punto de 50%.",
        quiz: {
          q: "A pesar del nombre, ¿para qué se usa principalmente la regresión logística?",
          opts: [
            "Para predecir precios u otras cantidades continuas.",
            "Para clasificar en categorías, como sí/no.",
            "Para agrupar datos sin etiquetas.",
            "Solo para procesar texto."
          ],
          correct: 1,
          fb: "El nombre es engañoso: aunque diga 'regresión', se usa para decidir entre categorías (por ejemplo, sí o no), no para predecir un número."
        },
        exercise: {
          type: "sigmoid_threshold",
          title: "Simulador de Sigmoide y Probabilidad de Decisión",
          evaluator: (state) => {
            const w = state.weight !== undefined ? state.weight : 0.8;
            const b = state.bias !== undefined ? state.bias : -1.0;
            if (w >= 1.15 && b <= -1.95 && b >= -5.05) {
              return { pass: true, msg: `¡Frontera logística calibrada! w=${w.toFixed(1)}, b=${b.toFixed(1)}. La sigmoide discrimina ambas clases con alta certeza.` };
            }
            if (w <= 0) return { pass: false, msg: "Pendiente nula o invertida: el peso debe ser positivo." };
            return { pass: false, msg: "Sesgo descalibrado: ajusta 'w' mayor a 1.2 y 'b' entre -2.0 y -5.0 para centrar la sigmoide." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 3: Aplicación Web",
    path: "3-Web-App",
    externalPractice: {
      provider: "Streamlit Open Source",
      badge: "Despliegue & MLOps",
      title: "Despliega tu Modelo como Web App Interactiva con Streamlit",
      url: "https://docs.streamlit.io/get-started",
      description: "Transforma tus scripts de Python y modelos entrenados en dashboards web interactivos en menos de 20 líneas de código, sin requerir HTML, CSS ni JavaScript. Ideal para prototipar y presentar modelos a clientes o stakeholders.",
      tasks: [
        "Crea un archivo app.py e importa streamlit y tu modelo serializado.",
        "Agrega controles interactivos (st.slider, st.selectbox) para capturar los inputs del usuario.",
        "Conecta los inputs con model.predict() y muestra el resultado con st.metric y gráficos interactivos."
      ],
      recommendedMetric: "App web funcional corriendo localmente con 'streamlit run app.py'"
    },
    lessons: [
      {
        n: 9,
        title: "Despliegue y Servicio de Modelos",
        folder: "1-Web-App",
        p1: "Un modelo que solo vive dentro de un cuaderno de código (notebook) en tu computadora no le sirve a nadie más. Para que la gente lo use de verdad, hay que 'guardarlo' en un archivo (a esto se le llama serializar) y ponerlo a funcionar detrás de una aplicación web que reciba preguntas y devuelva respuestas al instante.",
        p2: "Esto separa dos momentos distintos: entrenar el modelo (que se hace una sola vez, con calma, usando todos los datos) y usarlo para predecir (que se hace muchas veces, rápido, con un solo dato a la vez — por ejemplo, lo que un usuario acaba de escribir en un formulario).",
        takeaways: [
          "Guardar (serializar) el modelo permite reutilizarlo sin tener que entrenarlo de nuevo cada vez.",
          "Entrenar es lento y se hace una vez; predecir es rápido y se hace todo el tiempo.",
          "Separar 'entrenar' de 'usar' es clave para construir una aplicación real."
        ],
        instructions: [
          "Clasifica los 4 casos de uso entre 'API Servidor (Nube)' e 'Inferencia en Cliente (Navegador/Edge)'.",
          "Considera tamaño del modelo, requerimientos de privacidad y funcionamiento offline."
        ],
        hint: "Piensa en 'entrenar' como estudiar para un examen, y en 'predecir' como responder una pregunta usando lo que ya estudiaste.",
        quiz: {
          q: "¿Qué necesitas típicamente para que la gente pueda usar tu modelo desde una app web?",
          opts: [
            "Reentrenar el modelo cada vez que alguien hace clic.",
            "Guardar el modelo ya entrenado y cargarlo para responder preguntas al instante.",
            "Convertir el modelo en una hoja de cálculo.",
            "Nada, los modelos funcionan solos sin ningún paso extra."
          ],
          correct: 1,
          fb: "Guardas el modelo una vez entrenado, y luego lo cargas para responder cada pregunta nueva sin tener que volver a entrenarlo desde cero."
        },
        exercise: {
          type: "classification_bins",
          title: "Decisión de Arquitectura de Despliegue",
          categories: [
            { id: "server", title: "API Servidor (Nube)" },
            { id: "edge", title: "Inferencia en Cliente (Navegador / Edge)" }
          ],
          items: [
            { id: "d1", text: "Procesar historiales médicos con estricta confidencialidad sin subir datos", target: "edge" },
            { id: "d2", text: "Modelo de 15 GB con millones de parámetros que requiere GPUs caras", target: "server" },
            { id: "d3", text: "Autocompletado de texto en tiempo real offline sin conexión a internet", target: "edge" },
            { id: "d4", text: "Sistema de scoring crediticio centralizado que consulta bases de datos bancarias", target: "server" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Distribuye los 4 requerimientos arquitectónicos." };
            const errors = keys.filter(k => {
              const it = [{id:"d1",target:"edge"},{id:"d2",target:"server"},{id:"d3",target:"edge"},{id:"d4",target:"server"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Excelente criterio de ingeniería de software! Has balanceado computación, privacidad y latencia." };
            return { pass: false, msg: `Hay ${errors.length} decisiones subóptimas de despliegue. Revisa la confidencialidad y el tamaño del artefacto.` };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 4: Clasificación",
    path: "4-Classification",
    externalPractice: {
      provider: "Kaggle Competitions",
      badge: "Clasificación Binaria",
      title: "Kaggle: Titanic — Machine Learning from Disaster",
      url: "https://www.kaggle.com/c/titanic",
      description: "El reto de clasificación binaria más emblemático del mundo. Construye un modelo predictivo que determine qué pasajeros tenían mayor probabilidad de sobrevivir al naufragio basándose en clase de boleto, edad, sexo y acompañantes.",
      tasks: [
        "Realiza ingeniería de características (extrae títulos como 'Mr.', 'Mrs.', 'Master' a partir del nombre).",
        "Entrena un árbol de decisión o clasificador Random Forest con scikit-learn.",
        "Genera la matriz de confusión y calcula el trade-off de Precisión vs Recall en el set de validación."
      ],
      recommendedMetric: "Exactitud (Accuracy) en set de prueba > 78%"
    },
    lessons: [
      {
        n: 10,
        title: "Fundamentos de la Clasificación",
        folder: "1-Introduction",
        p1: "Clasificar es poner cada cosa en su categoría correcta: ¿esta receta es tailandesa, india, china? Cada ingrediente que usa una receta es una pista (una 'característica') que ayuda al modelo a adivinar la categoría.",
        p2: "Pero no todas las pistas sirven igual. Ingredientes que aparecen en casi todas las recetas del mundo, como la sal o el agua, no ayudan a distinguir nada — son 'ruido'. Los ingredientes que solo aparecen en ciertas cocinas (como el garam masala o la salsa de soja) sí son pistas útiles de verdad.",
        takeaways: [
          "Un clasificador aprende a trazar 'líneas' que separan una categoría de otra.",
          "Una pista que aparece en todas las categorías por igual no ayuda a distinguir nada.",
          "Una buena pista (característica) debe estar relacionada de forma clara con la categoría que quieres predecir."
        ],
        instructions: [
          "Clasifica los 4 ingredientes en 'Altamente Discriminativos' o 'Ruido / Baja Información'.",
          "Haz clic en 'Submit Answer' para validar tu selección de características."
        ],
        hint: "La sal y el agua están en casi todo (ruido); el garam masala o la soja marcan una cocina específica.",
        quiz: {
          q: "Si el ingrediente 'sal' aparece en el 98% de todas las recetas del mundo, ¿qué tan útil es como pista para adivinar el tipo de cocina?",
          opts: [
            "Es la pista más importante porque aparece muchísimo.",
            "Casi no sirve, porque aparece igual en casi todas las categorías y no ayuda a distinguirlas.",
            "Duplica automáticamente la precisión del modelo.",
            "Hay que multiplicarla por 100 para que cuente."
          ],
          correct: 1,
          fb: "Si algo aparece por igual en todas las categorías, no ayuda a diferenciarlas. Lo que sirve es lo que varía de una categoría a otra."
        },
        exercise: {
          type: "classification_bins",
          title: "Selector de Características Culinarias",
          categories: [
            { id: "disc", title: "Altamente Discriminativos" },
            { id: "noise", title: "Ruido / Baja Información" }
          ],
          items: [
            { id: "i1", text: "Salsa de soja y aceite de sésamo", target: "disc" },
            { id: "i2", text: "Agua purificada", target: "noise" },
            { id: "i3", text: "Garam masala y cúrcuma", target: "disc" },
            { id: "i4", text: "Sal fina de mesa", target: "noise" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Clasifica los 4 ingredientes." };
            const errors = keys.filter(k => {
              const it = [{id:"i1",target:"disc"},{id:"i2",target:"noise"},{id:"i3",target:"disc"},{id:"i4",target:"noise"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Feature selection impecable! Descartaste comodines y retuviste firmas culinarias." };
            return { pass: false, msg: `Hay ${errors.length} ingredientes mal catalogados. Revisa el agua o la sal.` };
          }
        }
      },
      {
        n: 11,
        title: "Clasificadores I: k-NN y Naive Bayes",
        folder: "2-Classifiers-1",
        p1: "El algoritmo k-NN funciona como preguntarle a tus vecinos más cercanos: mide qué tan 'lejos' está un dato nuevo de todos los datos que ya conoce, y le pone la categoría que tienen la mayoría de sus vecinos más próximos. Por eso es importante que todas las medidas estén en escalas parecidas, o unas dominarán la comparación sin razón.",
        p2: "Naive Bayes, en cambio, asume (de forma un poco ingenua, de ahí el nombre) que todas las pistas son independientes entre sí. Aunque esa suposición casi nunca es 100% cierta, funciona sorprendentemente bien, es muy rápido, y es especialmente bueno clasificando texto.",
        takeaways: [
          "k-NN decide según los vecinos más parecidos — por eso es sensible a la escala de los números.",
          "Naive Bayes es rápido y funciona bien incluso con pocos datos.",
          "Usar un número impar de vecinos (k) evita empates al votar."
        ],
        instructions: [
          "Haz clic sobre el Canvas para ubicar el punto de consulta en el plano 2D.",
          "Ajusta el slider de hiperparámetro a k = 3 o k = 5.",
          "Verifica en la consola que la predicción por voto mayoritario sea estable."
        ],
        hint: "k=1 es muy inestable (se deja llevar por un solo vecino raro); k=3 o k=5 dan un voto más equilibrado.",
        quiz: {
          q: "¿Por qué hay que ajustar las escalas de los números antes de usar k-NN?",
          opts: [
            "Para evitar errores de memoria en la computadora.",
            "Porque los números con rangos más grandes dominarían la comparación de distancia sin razón real.",
            "Porque Naive Bayes lo exige.",
            "Solo hace falta si usas ciertos algoritmos avanzados."
          ],
          correct: 1,
          fb: "Si una pista va de 0 a 100,000 (ingresos) y otra de 1 a 5 (número de hijos), la de ingresos dominará casi toda la comparación aunque no sea más importante."
        },
        exercise: {
          type: "interactive_knn",
          title: "Simulador de Vecinos Cercanos (k-NN)",
          evaluator: (state) => {
            const k = state.k || 3;
            if (k === 1) return { pass: false, msg: "k=1 es inestable y sobreajusta al ruido local más próximo." };
            if (k === 3 || k === 5) return { pass: true, msg: `¡Configuración óptima (k=${k})! Voto mayoritario balanceado entre sesgo y varianza.` };
            return { pass: false, msg: "k excesivamente grande: sobresuaviza diluyendo patrones locales." };
          }
        }
      },
      {
        n: 12,
        title: "Clasificadores II: Árboles, SVM y Métricas",
        folder: "3-Classifiers-2",
        p1: "Si tienes 90 personas sanas y solo 10 enfermas, un modelo tramposo podría decir siempre 'sano' y acertar el 90% de las veces — pero sería completamente inútil para detectar enfermos reales. Por eso la 'exactitud' (accuracy) puede ser una métrica engañosa cuando las categorías están muy desbalanceadas.",
        p2: "Por eso se usan otras medidas más honestas: precisión (de todo lo que dije que era positivo, ¿cuánto realmente lo era?) y recall (de todos los casos positivos reales, ¿cuántos logré detectar?). El F1 combina ambas en un solo número.",
        takeaways: [
          "Con categorías desbalanceadas, la exactitud puede engañar por completo.",
          "Precisión: de lo que marqué como positivo, cuánto era correcto. Recall: de todo lo positivo real, cuánto detecté.",
          "F1 combina precisión y recall en una sola medida."
        ],
        instructions: [
          "Desplaza el control deslizante de umbral de decisión en el laboratorio.",
          "Sitúa el umbral entre 0.30 y 0.55 para maximizar el F1-Score manteniendo un Recall superior al 80%.",
          "Presiona 'Submit Answer' para confirmar la calibración clínica."
        ],
        hint: "Un punto de corte muy bajo genera muchas falsas alarmas; uno muy alto deja pasar casos reales sin detectar.",
        quiz: {
          q: "Si un modelo tiene 95% de exactitud en un dataset muy desbalanceado, ¿qué debes hacer antes de confiar en él?",
          opts: [
            "Nada, 95% ya es excelente.",
            "Revisar precisión y recall por separado, porque el número global puede ser engañoso.",
            "Es matemáticamente imposible tener ese resultado.",
            "Significa que el modelo nunca se equivoca."
          ],
          correct: 1,
          fb: "En datos desbalanceados, un modelo que siempre predice la categoría más común puede tener exactitud alta y ser completamente inútil en la práctica."
        },
        exercise: {
          type: "confusion_matrix_slider",
          title: "Laboratorio de Matriz de Confusión y Umbral",
          evaluator: (state) => {
            const th = state.threshold !== undefined ? state.threshold : 0.50;
            if (th < 0.25) return { pass: false, msg: `Umbral de ${th.toFixed(2)}: Recall 100%, pero demasiados Falsos Positivos.` };
            if (th > 0.60) return { pass: false, msg: `Umbral de ${th.toFixed(2)} inaceptable en medicina: deja escapar enfermos (Falsos Negativos).` };
            return { pass: true, msg: `¡Excelente calibración clínica (Umbral=${th.toFixed(2)})! Alto F1 con Recall seguro.` };
          }
        }
      },
      {
        n: 13,
        title: "Recomendador Culinario y Softmax",
        folder: "4-Applied",
        p1: "Cuando hay más de dos categorías posibles, el modelo usa una función llamada softmax para repartir un 100% de 'confianza' entre todas las opciones — como repartir un pastel entero entre varias categorías según qué tan segura está la predicción de cada una.",
        p2: "En un recomendador de recetas, ver no solo la opción más probable sino también la segunda opción ayuda a entender por qué el modelo decidió lo que decidió, sobre todo cuando una receta mezcla ingredientes de varias culturas.",
        takeaways: [
          "Softmax reparte un 100% de probabilidad entre todas las categorías posibles.",
          "Ver la segunda opción más probable ayuda a entender mejor la predicción.",
          "Una probabilidad muy alta en una sola categoría significa que el modelo está muy seguro."
        ],
        instructions: [
          "Activa al menos dos ingredientes en la canasta interactiva.",
          "Observa cómo la distribución porcentual de Softmax redistribuye la afinidad culinaria.",
          "Presiona 'Submit Answer' para verificar la inferencia multiclase."
        ],
        hint: "Combina 'tortilla de maíz' con 'cilantro fresco' y observa cómo sube la probabilidad de cocina mexicana.",
        quiz: {
          q: "Si el modelo da como resultado 85% cocina mexicana, 10% japonesa y 5% tailandesa, ¿qué significa eso?",
          opts: [
            "Que el modelo está totalmente confundido.",
            "Que el modelo está bastante seguro de que es cocina mexicana, con clara diferencia sobre las demás opciones.",
            "Que hubo un error de cálculo.",
            "Que las probabilidades suman más de 100%."
          ],
          correct: 1,
          fb: "Una probabilidad dominante como 85% significa que los ingredientes elegidos son una pista muy clara de esa categoría."
        },
        exercise: {
          type: "recipe_recommender",
          title: "Simulador de Recomendador Culinario por Probabilidad",
          ingredients: [
            { id: "tortilla", name: "Tortilla de maíz", bias: { mex: 4, jap: -3, thai: -2 } },
            { id: "wasabi", name: "Wasabi y alga nori", bias: { mex: -3, jap: 5, thai: -1 } },
            { id: "coconut_milk", name: "Leche de coco y curry", bias: { mex: -2, jap: -2, thai: 5 } },
            { id: "cilantro", name: "Cilantro fresco", bias: { mex: 2, jap: -1, thai: 2 } }
          ],
          evaluator: (state) => {
            const act = state.active || [];
            if (act.length === 0) return { pass: false, msg: "Selecciona al menos un ingrediente para calcular Softmax." };
            return { pass: true, msg: "¡Inferencia calculada con éxito! La distribución Softmax refleja las ponderaciones relativas de los ingredientes." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 5: Clustering",
    path: "5-Clustering",
    externalPractice: {
      provider: "Kaggle Datasets",
      badge: "Clustering No Supervisado",
      title: "Kaggle: Mall Customer Segmentation con K-Means",
      url: "https://www.kaggle.com/datasets/vjchoudhary7/customer-segmentation-tutorial-in-python",
      description: "Aprende a segmentar clientes de un centro comercial según sus ingresos anuales y puntuación de gasto. Sin etiquetas previas, el algoritmo K-Means identifica grupos de alto valor, compradores conservadores y clientes impulsivos.",
      tasks: [
        "Estandariza las variables de ingreso anual y puntaje de gasto (StandardScaler).",
        "Calcula la suma de cuadrados intra-cluster (WCSS / Inercia) para K de 1 a 10 y grafica la curva del codo.",
        "Identifica el codo óptimo (K=5) y describe el perfil comercial de cada cluster identificado."
      ],
      recommendedMetric: "Silhouette Score > 0.55 con K=5 clusters"
    },
    lessons: [
      {
        n: 14, title: "Aprendizaje No Supervisado y Geometría", folder: "1-Visualize",
        p1: "El agrupamiento (clustering) es diferente a todo lo anterior: aquí no le dices al modelo cuáles son las categorías correctas de antemano. Solo le das los datos, y él mismo encuentra grupos de cosas parecidas — como ordenar una caja de botones mezclados por color y tamaño, sin que nadie te haya dicho antes cuáles son los grupos 'correctos'.",
        p2: "Para decidir qué tan 'parecidos' son dos elementos, se usa una medida de distancia. La distancia normal (línea recta) funciona bien para cosas como ubicaciones; la distancia 'Manhattan' (como caminar por calles en cuadrícula) funciona mejor en ciudades; y para comparar textos se usa la 'similitud coseno', que mide si dos textos hablan del mismo tema, sin importar cuál es más largo.",
        takeaways: [
          "El agrupamiento encuentra grupos por sí solo, sin que nadie le diga las categorías de antemano.",
          "Antes de agrupar, hay que poner todos los números en una escala parecida.",
          "La similitud coseno compara el 'tema' de dos textos sin que la longitud del texto afecte el resultado."
        ],
        instructions: [
          "Asocia cada caso de uso con su métrica de similitud geométrica recomendada.",
          "Haz clic en 'Submit Answer' para validar tu criterio espacial."
        ],
        hint: "Calles en cuadrícula = distancia Manhattan; textos de diferente largo = similitud coseno.",
        quiz: {
          q: "¿Por qué en textos se prefiere la similitud coseno en vez de la distancia normal (euclidiana)?",
          opts: [
            "Porque es más fácil de calcular a mano.",
            "Porque dos textos del mismo tema pero de distinto largo tendrían mucha distancia euclidiana, pero un ángulo casi idéntico.",
            "Porque la distancia normal no se puede programar.",
            "Porque el coseno solo sirve con números 0 y 1."
          ],
          correct: 1,
          fb: "La distancia normal se ve afectada por qué tan largo es el texto. La similitud coseno compara la 'dirección' del contenido, sin importar la longitud."
        },
        exercise: {
          type: "classification_bins",
          title: "Selector de Métricas de Distancia",
          categories: [
            { id: "euc", title: "Distancia Euclidiana" },
            { id: "cos", title: "Similitud Coseno" },
            { id: "man", title: "Distancia Manhattan (Cityblock)" }
          ],
          items: [
            { id: "m1", text: "Coordenadas en cuadrícula de calles de Manhattan", target: "man" },
            { id: "m2", text: "Vectores de texto de documentos de distinta longitud", target: "cos" },
            { id: "m3", text: "Posición espacial 2D/3D continua en física clásica", target: "euc" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 3) return { pass: false, msg: "Asigna las 3 métricas de distancia." };
            const errors = keys.filter(k => {
              const it = [{id:"m1",target:"man"},{id:"m2",target:"cos"},{id:"m3",target:"euc"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Dominio geométrico perfecto! Cada métrica se ajusta a la topología de su dato." };
            return { pass: false, msg: `Hay ${errors.length} métricas mal asignadas. Recuerda: para retículas usa Manhattan; para texto, Coseno.` };
          }
        }
      },
      {
        n: 15, title: "K-Means y Gustos Musicales en Vivo", folder: "2-K-Means",
        p1: "K-Means agrupa datos repitiendo dos pasos muy simples una y otra vez: primero, cada punto se une al centro (centroide) más cercano; después, cada centro se mueve al promedio de los puntos que se le unieron. Este ciclo se repite hasta que los centros casi no se mueven más — eso es la 'convergencia'.",
        p2: "Tú decides de antemano cuántos grupos (K) quieres formar. El llamado 'método del codo' ayuda a elegir un buen número de grupos: ni tan pocos que mezcle cosas distintas, ni tantos que ya no signifique nada agrupar.",
        takeaways: [
          "K-Means repite: asignar puntos al centro más cercano → mover el centro al promedio → repetir.",
          "El número de grupos K lo eliges tú, no lo adivina el algoritmo.",
          "Si eliges un K demasiado alto (como uno por cada dato), el agrupamiento pierde todo su sentido."
        ],
        instructions: [
          "Haz clic en 'Paso K-Means (Iterar)' en el laboratorio interactivo.",
          "Observa cómo los centroides se desplazan hacia la media de sus observaciones.",
          "Alcanza la convergencia y presiona 'Submit Answer'."
        ],
        hint: "Sigue dando clic en 'Siguiente paso' hasta que los centros dejen de moverse.",
        quiz: {
          q: "Si tienes 100 canciones y pones K=100 (un grupo por cada canción), ¿qué pasa?",
          opts: [
            "El programa se cuelga en un bucle infinito.",
            "Cada canción termina siendo su propio grupo — no se agrupó nada realmente útil.",
            "La precisión sube muchísimo.",
            "Todas las canciones se combinan en un solo punto."
          ],
          correct: 1,
          fb: "Con K=100 para 100 canciones, cada una es su propio centro. Técnicamente 'funciona', pero no descubriste ningún patrón — solo copiaste los datos."
        },
        exercise: {
          type: "canvas_kmeans",
          title: "Simulador Interactivo de K-Means Paso a Paso",
          evaluator: (state) => {
            const step = state.step || 0;
            if (step > 0 && state.converged) {
              return { pass: true, msg: `¡Convergencia lograda en el paso ${step}! Los centroides se han fijado en los baricentros óptimos.` };
            }
            return { pass: false, msg: "Itera al menos una vez haciendo clic en 'Paso K-Means' hasta alcanzar la convergencia." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 6: NLP (Lenguaje Natural)",
    path: "6-NLP",
    externalPractice: {
      provider: "Hugging Face & Kaggle",
      badge: "Procesamiento de Lenguaje Natural",
      title: "Hugging Face NLP Course & Kaggle IMDB 50K Sentiment Analysis",
      url: "https://huggingface.co/learn/nlp-course",
      description: "Profundiza en la evolución del NLP: desde la vectorización léxica TF-IDF sobre 50,000 reseñas de cine en IMDB hasta el uso de tokenizadores sub-palabra y pipelines de Hugging Face Transformers pre-entrenados.",
      tasks: [
        "Entrena un TfidfVectorizer(ngram_range=(1,2), max_features=10000) sobre el dataset IMDB.",
        "Ajusta una regresión logística binaria y analiza qué palabras tienen los coeficientes positivos y negativos más altos.",
        "Compara el resultado contra el pipeline zero-shot de Hugging Face: pipeline('sentiment-analysis')."
      ],
      recommendedMetric: "F1-score > 0.88 en polaridad de sentimiento"
    },
    lessons: [
      {
        n: 16, title: "Introducción al NLP y Chatbots Simples", folder: "1-Introduction-to-NLP",
        p1: "Las computadoras no entienden palabras como nosotros — solo entienden números. Por eso el primer paso de cualquier sistema de lenguaje (NLP) es convertir el texto en números que la máquina sí pueda procesar.",
        p2: "Un chatbot sencillo funciona detectando qué quiere el usuario ('reservar', 'cancelar', 'consultar') y sacando los datos importantes del mensaje (como una fecha o un número de vuelo). Estas dos tareas —adivinar la intención y extraer los datos— suelen resolverse por separado.",
        takeaways: [
          "El texto debe convertirse en números antes de que cualquier modelo pueda usarlo.",
          "Un chatbot simple separa 'qué quiere el usuario' de 'qué datos dio el usuario'.",
          "Reglas fijas de texto (como buscar palabras exactas) fallan fácil ante errores de escritura o formas distintas de pedir lo mismo."
        ],
        instructions: [
          "Clasifica los 3 mensajes en su 'Intención Canónica' correspondiente.",
          "Haz clic en 'Submit Answer' para validar el mapeo de backend."
        ],
        hint: "Fíjate en la acción principal que la persona quiere hacer: reservar, cancelar o consultar.",
        quiz: {
          q: "¿Cuál es la gran debilidad de un chatbot que solo busca palabras exactas escritas por reglas?",
          opts: [
            "Que no se puede conectar a internet.",
            "Que falla apenas alguien escribe con una falta de ortografía, usa otra palabra o pregunta de forma distinta a la esperada.",
            "Que necesita una supercomputadora para funcionar.",
            "Que gasta demasiada electricidad."
          ],
          correct: 1,
          fb: "Un sistema de reglas fijas solo reconoce exactamente lo que se le programó. En cuanto el usuario escribe distinto (con errores, sinónimos, u otro orden), el sistema se pierde."
        },
        exercise: {
          type: "classification_bins",
          title: "Detector de Intenciones (Intent Classification)",
          categories: [
            { id: "book", title: "Intent: Reservar_Vuelo" },
            { id: "cancel", title: "Intent: Cancelar_Ticket" },
            { id: "status", title: "Intent: Consultar_Estado" }
          ],
          items: [
            { id: "p1", text: "Quisiera comprar un pasaje a Tokio para el próximo martes", target: "book" },
            { id: "p2", text: "¿A qué hora aterriza el vuelo IB342 de Madrid?", target: "status" },
            { id: "p3", text: "Ya no podré viajar, por favor devuélvanme el importe del boleto", target: "cancel" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 3) return { pass: false, msg: "Clasifica los 3 mensajes en su intención." };
            const errors = keys.filter(k => {
              const it = [{id:"p1",target:"book"},{id:"p2",target:"status"},{id:"p3",target:"cancel"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Mapeo semántico perfecto! Has enrutado los mensajes informales a endpoints unívocos." };
            return { pass: false, msg: "Hay intenciones cruzadas. Revisa qué acción pide cada usuario." };
          }
        }
      },
      {
        n: 17, title: "Limpieza y Tokenización de Texto en Vivo", folder: "2-Tasks",
        p1: "Si tratas 'corre', 'corriendo' y 'corrí' como palabras totalmente distintas, tu vocabulario se hace enorme sin necesidad — todas significan casi lo mismo. El primer paso para evitar esto es dividir el texto en piezas pequeñas (tokens), casi siempre palabras.",
        p2: "Después se suele pasar todo a minúsculas y quitar palabras muy comunes que casi no aportan significado (como 'el', 'de', 'y') — a esas se les llama 'stopwords'. Así el texto queda más compacto y fácil de analizar.",
        takeaways: [
          "Tokenizar es partir el texto en piezas pequeñas, casi siempre palabras.",
          "Quitar 'stopwords' reduce mucho el tamaño del vocabulario a analizar.",
          "Hay que tener cuidado: algunas palabras cortas cambian totalmente el significado de la frase."
        ],
        instructions: [
          "Escribe o edita el texto en el campo de prueba.",
          "Activa las casillas de 'Minúsculas' y 'Filtrar Stopwords'.",
          "Observa en la consola los tokens limpios resultantes y envía tu solución."
        ],
        hint: "Marca las opciones de minúsculas y quitar stopwords para ver el texto ya limpio.",
        quiz: {
          q: "¿Qué problema puede causar tratar la palabra 'no' como una simple 'stopword' sin importancia?",
          opts: [
            "El texto se vuelve imposible de leer.",
            "Puede voltear por completo el significado de frases como 'no fue una mala película'.",
            "El vocabulario se duplica.",
            "El programa deja de funcionar."
          ],
          correct: 1,
          fb: "Palabras de negación como 'no' cambian el sentido de todo lo que sigue. Quitarlas sin pensar puede hacer que una frase negativa se lea como positiva."
        },
        exercise: {
          type: "interactive_tokenizer",
          title: "Laboratorio de Tokenización y Limpieza de Texto en Vivo",
          evaluator: (state) => {
            if (state.lowercase && state.removeStopwords && (state.tokens || []).length > 0) {
              return { pass: true, msg: `¡Pipeline de texto optimizado! Texto procesado en ${state.tokens.length} tokens limpios sin stopwords.` };
            }
            return { pass: false, msg: "Asegúrate de marcar 'Minúsculas' y 'Filtrar Stopwords' para compactar el vocabulario." };
          }
        }
      },
      {
        n: 18, title: "Análisis de Sentimiento y Enfoques Léxicos", folder: "3-Translation-Sentiment",
        p1: "El análisis de sentimiento intenta adivinar si un texto suena positivo, negativo o neutral. Una forma sencilla de hacerlo es darle un puntaje a cada palabra (como 'excelente' = +2, 'terrible' = -2) y sumar todos los puntajes de la frase.",
        p2: "El problema es que este método tan simple se confunde fácil con el sarcasmo o los dobles sentidos. Una frase como '¡qué maravilla, esperé 3 horas bajo la lluvia!' suma palabras positivas aunque en realidad la persona está molesta.",
        takeaways: [
          "Sumar puntajes de palabras es rápido, pero no entiende el contexto completo de la frase.",
          "Las palabras de negación pueden voltear el sentido de las palabras que las rodean.",
          "El sarcasmo sigue siendo uno de los retos más difíciles del análisis de sentimiento."
        ],
        instructions: [
          "Selecciona palabras en el laboratorio para componer una reseña fuertemente positiva (polaridad > 0.50).",
          "Observa el cálculo acumulado en la consola y presiona 'Submit Answer'."
        ],
        hint: "Palabras como 'excelente' o 'maravilloso' suman puntos positivos altos.",
        quiz: {
          q: "¿Por qué una frase sarcástica como '¡qué maravilla, 3 horas de espera bajo la lluvia!' confunde a un analizador simple de sentimiento?",
          opts: [
            "Porque menciona la lluvia, que no tiene sentimiento asociado.",
            "Porque usa una palabra muy positiva ('maravilla') de forma sarcástica, y sumar palabras no detecta esa ironía.",
            "Porque la frase es muy larga.",
            "Porque supera el límite de caracteres permitido."
          ],
          correct: 1,
          fb: "El método suma 'maravilla' como algo muy positivo e ignora que en realidad se está usando con ironía para quejarse — algo que una simple suma de palabras no puede detectar."
        },
        exercise: {
          type: "sentiment_lexicon",
          title: "Calculador de Polaridad Léxica en Vivo",
          evaluator: (state) => {
            const sc = state.score || 0;
            if (sc > 0.5) return { pass: true, msg: `¡Sentimiento positivo verificado (Score = +${sc.toFixed(2)})! El acumulador refleja satisfacción alta.` };
            return { pass: false, msg: "La polaridad debe ser superior a +0.50. Activa términos elogiosos como 'excelente' o 'maravilloso'." };
          }
        }
      },
      {
        n: 19, title: "Reseñas de Hoteles I: TF-IDF", folder: "4-Hotel-Reviews-1",
        p1: "Si simplemente cuentas cuántas veces aparece cada palabra en una reseña, palabras comunes como 'hotel' o 'habitación' van a aparecer un montón sin decirte nada especial, porque están en casi todas las reseñas.",
        p2: "La técnica TF-IDF resuelve esto: le da más peso a las palabras que aparecen mucho en UNA reseña pero son raras en el resto de todas las reseñas juntas — como 'cucarachas', que casi nadie menciona, pero cuando aparece, dice muchísimo.",
        takeaways: [
          "Contar palabras sin más favorece a las palabras comunes, que no aportan mucha información.",
          "TF-IDF le da más peso a las palabras raras que a las muy comunes.",
          "Una palabra que aparece en casi todas las reseñas termina con un peso casi nulo."
        ],
        instructions: [
          "Inspecciona la tabla de ponderación TF-IDF en el laboratorio.",
          "Comprueba por qué 'hotel' tiene peso nulo frente a 'cucarachas'.",
          "Haz clic en 'Submit Answer' para confirmar tu comprensión matemática."
        ],
        hint: "Las palabras raras dentro del conjunto de reseñas terminan con más peso que las palabras que aparecen en casi todas.",
        quiz: {
          q: "Si la palabra 'cama' aparece en 999 de 1,000 reseñas de hotel, ¿qué le pasa a su peso en TF-IDF?",
          opts: [
            "Se vuelve la palabra con más peso de todas.",
            "Su peso se acerca a cero, porque casi no ayuda a distinguir una reseña de otra.",
            "Se multiplica por mil.",
            "Provoca un error en el cálculo."
          ],
          correct: 1,
          fb: "Si una palabra aparece en casi todas las reseñas, no ayuda a diferenciarlas. TF-IDF le baja el peso casi a cero porque no aporta información distintiva."
        },
        exercise: {
          type: "interactive_tfidf",
          title: "Simulador de Pesos TF-IDF",
          evaluator: (state) => {
            if (state.rareTfidf > state.commonTfidf) {
              return { pass: true, msg: "¡Comprensión demostrada! El término infrecuente ('cucarachas') tiene mucho más peso TF-IDF que el término genérico ('hotel')." };
            }
            return { pass: false, msg: "Revisa la tabla: las palabras raras en el corpus deben recibir mayor ponderación que las ubicuas." };
          }
        }
      },
      {
        n: 20, title: "Reseñas de Hoteles II: Modelado y Diagnóstico", folder: "5-Hotel-Reviews-2",
        p1: "Cuando entrenas un modelo simple (como regresión logística) sobre texto ya convertido en números con TF-IDF, cada palabra recibe un 'peso' que indica si empuja la predicción hacia positivo o hacia negativo.",
        p2: "Revisar esos pesos es una forma sencilla de auditar el modelo: si ves que la palabra 'cucarachas' tiene un peso muy negativo y 'impecable' tiene un peso muy positivo, puedes confiar en que el modelo aprendió algo que tiene sentido — y no un patrón raro sin lógica.",
        takeaways: [
          "Cada palabra recibe un peso que indica hacia qué lado empuja la predicción.",
          "Revisar los pesos extremos es una forma simple de entender qué aprendió el modelo.",
          "Un modelo cuyo aprendizaje 'tiene sentido' es más fácil de confiar."
        ],
        instructions: [
          "Clasifica los términos según el signo esperado de su coeficiente de peso.",
          "Asocia términos elogiosos a peso positivo y quejas graves a peso negativo."
        ],
        hint: "Las quejas graves deben tener un peso negativo; los elogios, un peso positivo.",
        quiz: {
          q: "¿Para qué sirve revisar los pesos que el modelo le dio a cada palabra?",
          opts: [
            "Para hacer el vocabulario diez veces más grande.",
            "Para verificar si lo que el modelo 'aprendió' tiene sentido y coincide con lo que un humano esperaría.",
            "Para que ya no haga falta limpiar el texto.",
            "Para garantizar 100% de exactitud siempre."
          ],
          correct: 1,
          fb: "Ver qué palabras el modelo consideró más positivas o más negativas te deja comprobar si aprendió algo razonable, en vez de un patrón sin lógica."
        },
        exercise: {
          type: "classification_bins",
          title: "Auditoría de Pesos de Coeficientes en NLP",
          categories: [
            { id: "pos", title: "Coeficiente Positivo Alto (w > 0)" },
            { id: "neg", title: "Coeficiente Negativo Severo (w < 0)" }
          ],
          items: [
            { id: "w1", text: "Término: 'impecable y acogedor'", target: "pos" },
            { id: "w2", text: "Término: 'cucarachas en el baño'", target: "neg" },
            { id: "w3", text: "Término: 'personal sumamente amable'", target: "pos" },
            { id: "w4", text: "Término: 'sábanas con manchas y ruido'", target: "neg" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Clasifica los 4 términos por signo de coeficiente." };
            const errors = keys.filter(k => {
              const it = [{id:"w1",target:"pos"},{id:"w2",target:"neg"},{id:"w3",target:"pos"},{id:"w4",target:"neg"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Auditoría superada! Los pesos de los coeficientes concuerdan con la semántica del negocio." };
            return { pass: false, msg: "Hay coeficientes con signo invertido. Revisa las quejas negativas." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 7: Series de Tiempo",
    path: "7-TimeSeries",
    externalPractice: {
      provider: "Kaggle Competitions",
      badge: "Pronóstico Temporal Multivariado",
      title: "Kaggle: Store Sales — Time Series Forecasting",
      url: "https://www.kaggle.com/competitions/store-sales-time-series-forecasting",
      description: "Pronostica la demanda y ventas de miles de productos en las tiendas de víveres de Corporación Favorita (Ecuador). Aprende a modelar estacionalidad cíclica (días festivos, quincenas), tendencias y eventos externos como el precio del petróleo.",
      tasks: [
        "Descompón la serie temporal en Tendencia, Estacionalidad y Residuo con Seasonal-Decompose.",
        "Crea variables rezagadas (lag features) y promedios móviles (rolling window) de 7 y 30 días.",
        "Ajusta un modelo SARIMAX o modelo de regresión con rezagos y evalúa con RMSLE."
      ],
      recommendedMetric: "RMSLE en validación temporal < 0.42"
    },
    lessons: [
      {
        n: 21, title: "Fundamentos de Pronóstico y Estacionariedad", folder: "1-Introduction",
        p1: "En una serie de tiempo, el orden de los datos importa muchísimo — no puedes revolver las filas como en una tabla normal. Si mezclas el orden, estarías dejando que el modelo 'vea' el futuro antes de tiempo, lo cual arruina todo.",
        p2: "Una serie se llama 'estacionaria' cuando su comportamiento promedio no cambia con el tiempo (ni sube ni baja de forma constante). Muchas técnicas de pronóstico funcionan mejor si primero conviertes la serie en estacionaria, por ejemplo restando cada valor con el anterior.",
        takeaways: [
          "Nunca revuelvas al azar el orden de una serie de tiempo.",
          "Una serie estacionaria tiene un comportamiento promedio estable, sin tendencia clara.",
          "Restar cada valor con el anterior (diferenciar) puede eliminar una tendencia y volver la serie estacionaria."
        ],
        instructions: [
          "Observa la serie con tendencia alcista no estacionaria en el Canvas.",
          "Haz clic en el botón 'Diferenciada (d = 1)' para eliminar la tendencia.",
          "Verifica en la consola que la media fluctúe alrededor de cero y envía tu respuesta."
        ],
        hint: "Diferenciar de orden 1 significa restarle a cada dato el valor inmediatamente anterior.",
        quiz: {
          q: "¿Por qué revolver al azar los datos de una serie de precios antes de separarlos en entrenamiento y prueba arruina la validación?",
          opts: [
            "Porque el programa da un error de datos duplicados.",
            "Porque terminarías usando información del futuro para predecir el pasado, lo cual no pasaría en la vida real.",
            "Porque la función de revolver borra datos.",
            "Solo es un problema con datos de más de un año."
          ],
          correct: 1,
          fb: "En la vida real siempre predices el futuro usando el pasado. Si revuelves los datos, el modelo 'aprende' usando información que en la práctica nunca tendría disponible."
        },
        exercise: {
          type: "interactive_stationarity",
          title: "Laboratorio de Diferenciación y Estacionariedad",
          evaluator: (state) => {
            if (state.diffOrder === 1) {
              return { pass: true, msg: "¡Serie estacionaria lograda (d=1)! La media se estabilizó en cero, lista para ARIMA." };
            }
            return { pass: false, msg: "Selecciona 'Diferenciada (d = 1)' para erradicar la tendencia alcista." };
          }
        }
      },
      {
        n: 22, title: "Modelos ARIMA y Consumo Eléctrico", folder: "2-ARIMA",
        p1: "ARIMA es un modelo clásico para pronosticar series de tiempo que combina tres ideas: usar valores pasados para predecir el siguiente (parte AR), restar tendencia para estabilizar la serie (parte 'I' de diferenciación), y usar los errores de predicciones anteriores para corregir la siguiente (parte MA).",
        p2: "Estas tres partes se resumen en tres números: p, d y q. Elegirlos bien no es al azar — se apoya en gráficas que muestran qué tan relacionado está cada valor con los anteriores, aunque en la práctica también se prueba con varias combinaciones hasta encontrar la que funcione mejor.",
        takeaways: [
          "AR (p): usa valores pasados para predecir el siguiente.",
          "I (d): resta tendencia para estabilizar la serie.",
          "MA (q): usa errores anteriores para corregir la siguiente predicción."
        ],
        instructions: [
          "Ajusta el orden de diferenciación a d = 1.",
          "Ajusta el orden autorregresivo a p = 2 para capturar la auto-correlación temporal.",
          "Verifica en la consola la proyección continua de consumo y envía tu respuesta."
        ],
        hint: "Sin diferenciar (d=0), la parte AR no logra ajustarse bien si hay una tendencia clara.",
        quiz: {
          q: "En ARIMA(2, 1, 0), ¿qué significa el número del medio ('1')?",
          opts: [
            "Que el modelo usa un solo grupo al agrupar datos.",
            "Que la serie se diferenció una vez para estabilizarla antes de aplicar los términos autorregresivos.",
            "Que solo predice para un único día.",
            "Que la precisión es del 100%."
          ],
          correct: 1,
          fb: "El número del medio ('d') indica cuántas veces se restó cada valor con el anterior para quitarle la tendencia a la serie."
        },
        exercise: {
          type: "arima_simulator",
          title: "Simulador de Parámetros ARIMA en Vivo",
          evaluator: (state) => {
            const p = state.p !== undefined ? state.p : 1;
            const d = state.d !== undefined ? state.d : 0;
            if (d === 1 && p >= 2) {
              return { pass: true, msg: `¡ARIMA(${p}, ${d}, 0) calibrado con éxito! Captura la tendencia y estacionalidad del consumo eléctrico.` };
            }
            if (d === 0) return { pass: false, msg: "Fija d = 1 para estabilizar la tendencia de la serie." };
            return { pass: false, msg: "Incrementa p a 2 o más para capturar suficiente inercia autorregresiva." };
          }
        }
      },
      {
        n: 23, title: "Machine Learning vs. Estadística en Series (SVR)", folder: "3-SVR",
        p1: "ARIMA es un método estadístico clásico, pensado específicamente para series de tiempo. Pero también puedes usar un algoritmo de Machine Learning normal, como el Support Vector Regressor (SVR), si transformas la serie: usas los últimos días como 'pistas' para predecir el siguiente día.",
        p2: "Ningún método gana siempre. ARIMA suele ser más fácil de explicar y funciona bien en series simples. Un modelo de ML como SVR puede captar patrones más raros y complicados, aunque sea más difícil de explicar por qué predijo lo que predijo.",
        takeaways: [
          "ARIMA: método estadístico clásico, hecho específicamente para series de tiempo.",
          "SVR: algoritmo de ML general, adaptado a series de tiempo usando los últimos valores como pistas.",
          "Ninguno de los dos gana siempre — depende de qué tan simple o complicado sea el patrón real."
        ],
        instructions: [
          "Clasifica los 4 atributos entre 'Enfoque Estadístico (ARIMA)' y 'Enfoque ML (SVR / Regresión)'.",
          "Haz clic en 'Submit Answer' para validar la comparativa metodológica."
        ],
        hint: "Las fórmulas de Box-Jenkins pertenecen al mundo estadístico clásico; usar los últimos valores como columnas pertenece al mundo del Machine Learning.",
        quiz: {
          q: "Si usas los últimos 3 días como pistas para predecir el día siguiente en una serie de 100 días, ¿cuántas filas útiles te quedan para entrenar?",
          opts: [
            "Exactamente 100 filas.",
            "97 filas, porque los primeros 3 días no tienen suficiente historia previa para completar sus 3 pistas.",
            "300 filas.",
            "0 filas."
          ],
          correct: 1,
          fb: "Los primeros días no tienen 3 días anteriores completos para usar como pista, así que se pierden esas filas al construir la tabla de entrenamiento."
        },
        exercise: {
          type: "classification_bins",
          title: "Comparativa: ARIMA Estadístico vs. SVR Machine Learning",
          categories: [
            { id: "stat", title: "Enfoque Estadístico (ARIMA)" },
            { id: "ml", title: "Enfoque ML (SVR / Regresión)" }
          ],
          items: [
            { id: "s1", text: "Asume linealidad y requiere serie estacionaria d=1 estricta", target: "stat" },
            { id: "s2", text: "Transforma la secuencia en matriz X (lags) -> y", target: "ml" },
            { id: "s3", text: "Permite kernels no lineales para capturar dinámicas arbitrarias", target: "ml" },
            { id: "s4", text: "Basado en formulación matemática analítica de ecuaciones de Box-Jenkins", target: "stat" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 4) return { pass: false, msg: "Clasifica los 4 atributos de modelado." };
            const errors = keys.filter(k => {
              const it = [{id:"s1",target:"stat"},{id:"s2",target:"ml"},{id:"s3",target:"ml"},{id:"s4",target:"stat"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Dominio metodológico completo! Distingues con claridad estadística lineal de regresión supervisada con lags." };
            return { pass: false, msg: "Hay atributos cruzados. Revisa qué pertenece a Box-Jenkins y qué a kernels." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 8: Aprendizaje por Refuerzo",
    path: "8-Reinforcement",
    externalPractice: {
      provider: "Farama Gymnasium & Hugging Face Deep RL",
      badge: "Q-Learning & MDPs",
      title: "Gymnasium: FrozenLake & Hugging Face Deep RL Course",
      url: "https://gymnasium.farama.org/",
      description: "El estándar de oro para crear agentes de Aprendizaje por Refuerzo. Implementa el bucle env.reset() y env.step(action), actualiza la tabla Q con la ecuación de Bellman y resuelve entornos discretos como FrozenLake-v1 y CliffWalking.",
      tasks: [
        "Inicializa el entorno FrozenLake-v1 en Gymnasium con is_slippery=True.",
        "Programa la regla de actualización de Q-Learning con tasa de aprendizaje alfa=0.8 y descuento gamma=0.95.",
        "Aplica decaimiento exponencial de exploración (epsilon-greedy) hasta converger a la política óptima."
      ],
      recommendedMetric: "Tasa de éxito del agente > 0.74 en 100 episodios evaluados"
    },
    lessons: [
      {
        n: 24, title: "Fundamentos de RL y la Ecuación de Bellman", folder: "1-QLearning",
        p1: "En el aprendizaje por refuerzo no hay ejemplos ya resueltos de antemano. Un agente prueba acciones dentro de un entorno, recibe una recompensa (buena o mala) según el resultado, y con el tiempo ajusta su comportamiento para conseguir la mayor recompensa posible a largo plazo — no solo la de ahora mismo.",
        p2: "Q-Learning guarda en una tabla 'qué tan buena es cada acción en cada situación' y la va corrigiendo poco a poco con cada experiencia nueva, usando una fórmula llamada la ecuación de Bellman.",
        takeaways: [
          "El agente aprende por prueba y error, buscando la mayor recompensa a largo plazo.",
          "El factor de descuento (gamma) controla qué tanto le importa al agente el futuro frente al presente.",
          "La tabla Q guarda qué tan buena es cada acción en cada situación posible."
        ],
        instructions: [
          "Revisa la ecuación de Bellman y los valores dados en el enunciado.",
          "Calcula el nuevo valor de Q(s, a) e introdúcelo en el campo numérico (14).",
          "Haz clic en 'Submit Answer' para verificar el cálculo."
        ],
        hint: "Nuevo valor = 0 + 0.5 × (10 + 0.9 × 20 − 0) = 0.5 × 28 = 14.",
        quiz: {
          q: "Si el factor de descuento (gamma) es 0, ¿cómo se comportará el agente?",
          opts: [
            "Aprenderá muchísimo más rápido.",
            "Solo le importará la recompensa inmediata, sin pensar nada en el futuro.",
            "Dejará de recibir castigos.",
            "Se negará a actuar."
          ],
          correct: 1,
          fb: "Con gamma = 0, el agente ignora por completo cualquier recompensa futura y solo maximiza lo que gana en el paso inmediato."
        },
        exercise: {
          type: "bellman_calculator",
          title: "Calculador Interactivo de Bellman",
          evaluator: (state) => {
            const val = parseFloat(state.answer);
            if (Math.abs(val - 14) < 0.1) {
              return { pass: true, msg: "¡Cálculo de Bellman exacto (Q=14)! Has aplicado la actualización de diferencia temporal." };
            }
            return { pass: false, msg: "Discrepancia numérica. Aplica: Q_nuevo = 0 + 0.5 * (10 + 0.9*20 - 0) = 14." };
          }
        }
      },
      {
        n: 25, title: "Simulador Gridworld: Peter y el Lobo (Gym)", folder: "2-Gym",
        p1: "Un entorno como Gym le da al agente reglas claras: qué acciones puede tomar, qué puede 'ver' en cada momento, y qué recompensa recibe. Esto permite entrenar y comparar distintos agentes en el mismo problema sin tener que armar la simulación desde cero cada vez.",
        p2: "Un buen agente necesita explorar (probar caminos nuevos) además de explotar (usar lo que ya sabe que funciona). Si solo explota desde el inicio, puede quedarse pegado en la primera solución mediocre que encontró sin descubrir nunca una mejor.",
        takeaways: [
          "Gym separa las reglas del entorno del algoritmo que toma las decisiones.",
          "Explorar (probar cosas nuevas) y explotar (usar lo ya conocido) deben estar balanceados.",
          "Con suficientes intentos, el agente termina encontrando el camino más conveniente."
        ],
        instructions: [
          "Prueba los botones direccionales para mover a Peter por la cuadrícula 4x4.",
          "Haz clic en 'Auto-Entrenar Q-Learning (100 Episodios)' para que el algoritmo aprenda la ruta óptima.",
          "Observa a Peter esquivar al lobo y llegar a la casa, y luego presiona 'Submit Answer'."
        ],
        hint: "Entrenar muchas veces permite que las recompensas negativas del peligro se propaguen en la tabla Q, enseñando al agente a rodearlo.",
        quiz: {
          q: "¿Por qué un agente que nunca explora (siempre usa lo que ya sabe, desde el primer intento) probablemente no encuentre el mejor camino?",
          opts: [
            "Porque la computadora se bloquea.",
            "Porque se queda repitiendo ciegamente sus primeros movimientos, sin nunca probar caminos mejores que no conoce.",
            "Porque las reglas del entorno se lo prohíben.",
            "Porque siempre debe empezar en el mismo lugar."
          ],
          correct: 1,
          fb: "Sin explorar nada nuevo, el agente se aferra a la primera acción que no lo perjudicó de inmediato, sin nunca descubrir un camino mejor."
        },
        exercise: {
          type: "gridworld_qlearning",
          title: "Mini-Juego Gridworld 4x4: Peter vs. El Lobo",
          evaluator: (state) => {
            if ((state.episodes || 0) > 0 && state.reachedGoal) {
              return { pass: true, msg: "¡Agente entrenado y ruta resuelta! Peter esquivó al lobo y alcanzó la casa con la tabla Q optimizada." };
            }
            return { pass: false, msg: "Haz clic en 'Auto-Entrenar Q-Learning (100 Episodios)' para que el algoritmo aprenda a esquivar al lobo." };
          }
        }
      }
    ]
  },
  {
    title: "Unidad 9: ML en el Mundo Real",
    path: "9-Real-World",
    externalPractice: {
      provider: "Microsoft Responsible AI Toolbox",
      badge: "Gobernanza & Auditoría Ética",
      title: "Microsoft Responsible AI Dashboard: Equidad, Interpretabilidad y Error Analysis",
      url: "https://github.com/microsoft/responsible-ai-toolbox",
      description: "La suite abierta de Microsoft para auditar sistemas de ML en producción. Combina Fairlearn (evaluación de paridad demográfica y disparidad de tasas de error), InterpretML (valores SHAP para explicabilidad) y Error Analysis (árboles de fallas por cohortes de datos).",
      tasks: [
        "Audita la disparidad de falsos positivos en subgrupos sensibles (ej. género, edad o código postal).",
        "Genera explicaciones locales con SHAP para entender los principales inductores de una decisión denegada.",
        "Genera explicaciones contrafácticas (DiCE) para ofrecer al usuario una vía de acción correctiva viable."
      ],
      recommendedMetric: "Disparate Impact Ratio > 0.80 (cumplimiento de la regla de los cuatro quintos)"
    },
    lessons: [
      {
        n: 26, title: "Industrialización, Data Drift y MLOps", folder: "1-Applications",
        p1: "Un modelo que funciona bien hoy puede empezar a fallar con el tiempo, sin que nadie haya tocado el código. Esto pasa porque el mundo cambia: llegan usuarios distintos a los que el modelo conocía (data drift), o la relación entre las cosas cambia de verdad (concept drift) — por ejemplo, después de un evento raro como el Black Friday.",
        p2: "Por eso los equipos que mantienen modelos en producción los vigilan de forma constante, y si detectan que empiezan a fallar más de lo normal, los vuelven a entrenar con datos más recientes. A esta disciplina se le llama MLOps.",
        takeaways: [
          "Data drift: cambian los datos de entrada. Concept drift: cambia la relación real entre las cosas.",
          "Un modelo sin vigilancia en producción puede fallar en silencio, sin que nadie se dé cuenta a tiempo.",
          "MLOps se encarga de vigilar y reentrenar modelos de forma continua."
        ],
        instructions: [
          "Clasifica los 3 incidentes de producción según su causa raíz operativa.",
          "Distingue errores de esquema, deriva de datos poblacionales y cambios conceptuales del mundo."
        ],
        hint: "Si la app empieza a mandar la edad en meses en vez de años, eso es un error de formato, no un cambio real del mundo.",
        quiz: {
          q: "Si después del Black Friday un recomendador de compras empieza a fallar porque la gente compró regalos que no reflejan sus gustos normales, ¿qué está pasando?",
          opts: [
            "Un ataque de virus informático.",
            "Un cambio temporal en el comportamiento de los datos (data drift / concept drift) que rompe los supuestos del modelo entrenado antes.",
            "Un error de números en el programa.",
            "El servidor se sobrecalentó."
          ],
          correct: 1,
          fb: "El comportamiento habitual de compra cambió de golpe por un evento externo (los regalos de temporada), rompiendo el patrón que el modelo había aprendido antes."
        },
        exercise: {
          type: "classification_bins",
          title: "Diagnóstico de Incidentes en Producción (MLOps)",
          categories: [
            { id: "data_drift", title: "Data Drift (Entradas mutaron)" },
            { id: "concept_drift", title: "Concept Drift (La verdad cambió)" },
            { id: "pipe_error", title: "Falla de Tubería / Esquema" }
          ],
          items: [
            { id: "inc1", text: "La app móvil actualizó la versión y empezó a enviar la edad en meses en vez de años", target: "pipe_error" },
            { id: "inc2", text: "Tras la devaluación monetaria, los mismos ingresos ya no corresponden a la misma solvencia crediticia", target: "concept_drift" },
            { id: "inc3", text: "Una campaña atrajo usuarios 20 años más jóvenes que el público de entrenamiento", target: "data_drift" }
          ],
          evaluator: (state) => {
            const keys = Object.keys(state || {});
            if (keys.length < 3) return { pass: false, msg: "Clasifica los 3 incidentes operativos." };
            const errors = keys.filter(k => {
              const it = [{id:"inc1",target:"pipe_error"},{id:"inc2",target:"concept_drift"},{id:"inc3",target:"data_drift"}].find(x=>x.id===k);
              return it && it.target !== state[k];
            });
            if (errors.length === 0) return { pass: true, msg: "¡Diagnóstico MLOps certero! Has aislado fallos de esquema de la deriva conceptual y poblacional." };
            return { pass: false, msg: "Hay causas raíces confundidas. Revisa si el problema es de formato de datos o de economía." };
          }
        }
      },
      {
        n: 27, title: "Auditoría y Responsabilidad: Panel RAI", folder: "2-Debugging-ML-Models",
        p1: "El último paso antes de confiar en un modelo es auditarlo a fondo: revisar no solo si funciona bien en promedio, sino si es justo con todos los grupos de personas y si se puede explicar por qué tomó cada decisión.",
        p2: "Herramientas como el panel de Responsible AI (RAI) muestran el error del modelo por subgrupo (para detectar a quién le está fallando más) y usan técnicas como los valores SHAP para explicar, de forma clara, qué influyó en cada predicción individual.",
        takeaways: [
          "El promedio general de un modelo puede ocultar que le está yendo muy mal a un grupo específico.",
          "Los valores SHAP explican qué tanto influyó cada dato en una predicción concreta.",
          "Un buen análisis explica al usuario, de forma clara, qué podría cambiar para obtener otro resultado."
        ],
        instructions: [
          "Examina la tasa de disparidad en la tabla de contratación laboral entre subgrupos.",
          "Haz clic en 'Aplicar Re-ponderación de Muestras (Reweighting)' para equilibrar la paridad de selección (> 0.80).",
          "Haz clic en 'Submit Answer' para culminar el curso al 100%."
        ],
        hint: "Reponderar las muestras del grupo desfavorecido ayuda a equilibrar la tasa de aprobación entre grupos.",
        quiz: {
          q: "¿Para qué sirve poder explicarle a alguien por qué su solicitud de hipoteca fue rechazada?",
          opts: [
            "Para ocultar cómo funciona el sistema del banco.",
            "Para mostrarle de forma clara qué cosas podría cambiar para calificar la próxima vez.",
            "Para eliminar el interés del préstamo.",
            "Para saltarse la verificación de identidad."
          ],
          correct: 1,
          fb: "Una explicación clara convierte un 'rechazado' sin razón aparente en información útil y justa: qué factores influyeron y qué podría cambiar."
        },
        exercise: {
          type: "rai_audit_panel",
          title: "Simulador de Auditoría Responsible AI (RAI)",
          evaluator: (state) => {
            if (state.reweighted) {
              return { pass: true, msg: "¡Auditoría ética superada con honores! La paridad demográfica alcanzó 0.88, culminando el curso con rigor técnico y social." };
            }
            return { pass: false, msg: "Disparidad crítica: activa 'Aplicar Re-ponderación de Muestras' para nivelar la tasa de selección de ambos subgrupos." };
          }
        }
      }
    ]
  }
];

// Generar lista plana
const FLAT = [];
UNITS.forEach((u, ui) => {
  u.lessons.forEach((l, li) => {
    // defaults si no están definidos
    if (!l.instructions) {
      l.instructions = [
        "Interactúa con los controles del laboratorio interactivo en el panel derecho.",
        "Verifica los resultados y métricas arrojadas en la consola de diagnóstico.",
        "Haz clic en 'Submit Answer' para que el Asistente valide tu solución."
      ];
    }
    if (!l.hint) l.hint = "Lee con atención los fundamentos teóricos y revisa los valores recomendados.";
    if (!l.takeaways) {
      l.takeaways = [
        "Comprender el balance entre sesgo y varianza es clave en este algoritmo.",
        "La preparación rigurosa de los datos define la calidad de la predicción.",
        "Auditar siempre el comportamiento en casos límite."
      ];
    }
    if (!l.quiz) {
      l.quiz = {
        q: "¿Cuál es el principio medular que rige este tema?",
        opts: [
          "Minimizar la función de pérdida con datos de validación independientes.",
          "Memorizar todos los datos de entrenamiento.",
          "Ignorar los valores atípicos siempre.",
          "No requiere validación matemática."
        ],
        correct: 0,
        fb: "La generalización a datos no vistos es el objetivo fundamental de cualquier modelo de Machine Learning."
      };
    }
    if (!l.exercise) {
      l.exercise = {
        type: "classification_bins",
        title: "Laboratorio Conceptual",
        categories: [{id:"a", title:"Válido"}, {id:"b", title:"Riesgo"}],
        items: [{id:"1", text:"Validar con datos nuevos", target:"a"}, {id:"2", text:"Entrenar y evaluar con el mismo conjunto", target:"b"}],
        evaluator: (state) => ({ pass: true, msg: "¡Correcto! Has identificado los conceptos clave de la lección." })
      };
    }
    FLAT.push({ ui, li, unit: u, lesson: l });
  });
});


function getLocalizedUnit(unit, lang) {
  const l = lang || (typeof I18nManager !== 'undefined' ? I18nManager.getLang() : 'es');
  if (l !== 'en' || typeof COURSE_TRANSLATIONS_EN === 'undefined') return unit;
  const transTitle = COURSE_TRANSLATIONS_EN.units?.[unit.title];
  const transPractice = COURSE_TRANSLATIONS_EN.externalPractice?.[unit.title];
  return {
    ...unit,
    title: transTitle || unit.title,
    externalPractice: transPractice || unit.externalPractice
  };
}

function getLocalizedLesson(lesson, lang) {
  const l = lang || (typeof I18nManager !== 'undefined' ? I18nManager.getLang() : 'es');
  if (l !== 'en' || typeof COURSE_TRANSLATIONS_EN === 'undefined') return lesson;
  const trans = COURSE_TRANSLATIONS_EN.lessons?.[lesson.n];
  if (!trans) return lesson;

  const baseEx = lesson.exercise || {};
  const transEx = trans.exercise || {};

  const localizedCategories = baseEx.categories ? baseEx.categories.map(cat => ({
    ...cat,
    title: transEx.categories?.[cat.id] || cat.title
  })) : baseEx.categories;

  const localizedItems = baseEx.items ? baseEx.items.map(item => ({
    ...item,
    text: transEx.items?.[item.id] || item.text
  })) : baseEx.items;

  return {
    ...lesson,
    title: trans.title || lesson.title,
    p1: trans.p1 || lesson.p1,
    p2: trans.p2 || lesson.p2,
    takeaways: trans.takeaways || lesson.takeaways,
    instructions: trans.instructions || lesson.instructions,
    hint: trans.hint || lesson.hint,
    quiz: {
      ...lesson.quiz,
      q: trans.quiz?.q || lesson.quiz.q,
      opts: trans.quiz?.opts || lesson.quiz.opts,
      correct: (trans.quiz?.correct !== undefined) ? trans.quiz.correct : lesson.quiz.correct,
      ans: (trans.quiz?.correct !== undefined) ? trans.quiz.correct : lesson.quiz.correct,
      fb: trans.quiz?.fb || lesson.quiz.fb
    },
    exercise: {
      ...baseEx,
      title: transEx.title || baseEx.title,
      categories: localizedCategories,
      items: localizedItems,
      passMsg: transEx.passMsg,
      failMsg: transEx.failMsg
    }
  };
}

function getLessonHintCost(lesson) {
  if (!lesson) return 15;
  if (typeof lesson.hintCost === 'number') return lesson.hintCost;
  if (lesson.exercise && typeof lesson.exercise.hintCost === 'number') return lesson.exercise.hintCost;
  const costs = {
    1: 10, 2: 10, 3: 15, 4: 15, 5: 10, 6: 15, 7: 20, 8: 15, 9: 20,
    10: 15, 11: 20, 12: 20, 13: 20, 14: 25, 15: 20, 16: 20, 17: 25, 18: 20,
    19: 25, 20: 25, 21: 20, 22: 30, 23: 30, 24: 25, 25: 20, 26: 25, 27: 20
  };
  return costs[lesson.n] || 15;
}

if (typeof window !== 'undefined') {
  window.REPO_BASE = REPO_BASE;
  window.UNITS = UNITS;
  window.FLAT = FLAT;
  window.getLocalizedUnit = getLocalizedUnit;
  window.getLocalizedLesson = getLocalizedLesson;
  window.getLessonHintCost = getLessonHintCost;
}
if (typeof module !== 'undefined') {
  module.exports = { REPO_BASE, UNITS, FLAT, getLocalizedUnit, getLocalizedLesson, getLessonHintCost };
}

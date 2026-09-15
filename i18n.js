/**
 * i18n.js - Motor de Internacionalización (Español / English)
 * Proporciona traducción reactiva de toda la interfaz de usuario en tiempo real.
 */

const I18N_DICTIONARY = {
  es: {
    // Navigation & General
    nav_brand: "Machine Learning Track",
    nav_syllabus: "Temario (27 Lecciones)",
    nav_theory: "Teoría",
    nav_practice: "⚡ Laboratorios",
    nav_home: "🏠 Inicio",
    nav_back_dashboard: "Volver al inicio",
    nav_theory_title: "Teoría & Fundamentos",
    nav_practice_title: "ML Studio // Lab",
    nav_view_theory: "Ver Teoría",
    nav_lesson_prefix: "Lección",

    // Settings
    settings_title: "Configuración",
    settings_lang: "Idioma",
    settings_theme: "Tema",
    settings_contact: "Contacto y soporte",
    settings_theme_toggle_light: "Cambiar a modo claro",
    settings_theme_toggle_dark: "Cambiar a modo oscuro",

    // Hero (index.html)
    hero_pill: "Ruta de Especialización Práctica",
    hero_title_main: "Machine Learning",
    hero_title_sub: "De Cero a Producción",
    hero_desc: "Ruta formativa interactiva inspirada en los 27 módulos esenciales de Microsoft ML-For-Beginners. Domina regresión, clasificación, clustering, NLP y visión artificial mediante laboratorios interactivos y evaluación algorítmica en tiempo real.",
    hero_btn_start: "🚀 Comenzar Lección 1 ➔",
    hero_btn_continue: "🚀 Continuar Lección {lesson} ➔",
    hero_btn_theory: "📖 Explorar Teoría",

    // Dashboard (index.html)
    dash_title: "Tu Progreso en Vivo",
    dash_xp_label: "Puntos de Experiencia (XP)",
    dash_progress_label: "Progreso del Track",
    dash_quizzes_label: "Quizzes Aprobados",
    dash_labs_label: "Laboratorios Resueltos",
    dash_export_btn: "💾 Exportar JSON",
    dash_import_btn: "📥 Importar",
    dash_reset_btn: "↺ Reiniciar",
    dash_reset_confirm: "¿Estás seguro de que deseas reiniciar todo tu progreso y XP acumulados? Esta acción no se puede deshacer.",
    dash_reset_done: "Progreso reiniciado con éxito.",
    reset_modal_title: "¿Reiniciar progreso?",
    reset_modal_desc: "Esta acción restablecerá a cero todos tus puntos de experiencia (XP), quizzes aprobados, laboratorios resueltos y lecciones completadas.",
    reset_modal_warning: "⚠️ Esta acción no se puede deshacer a menos que tengas una copia de respaldo en JSON.",
    reset_modal_cancel: "Cancelar",
    reset_modal_confirm: "Sí, reiniciar todo",
    dash_status_copy: "Estado guardado en tu navegador mediante <code>localStorage</code>. Puedes exportarlo en cualquier momento.",

    // Features (index.html)
    feature_1_title: "1. Intuición de Negocio",
    feature_1_desc: "Entiende exactamente por qué surge cada algoritmo, qué problemas del mundo real resuelve y cuáles son los límites de la programación tradicional frente a datos probabilísticos.",
    feature_2_title: "2. Rigor Matemático",
    feature_2_desc: "Formulación clara de funciones de costo, descenso de gradiente, matrices de confusión, distancia euclidiana, ecuación de Bellman y principios anti-data leakage.",
    feature_3_title: "3. Laboratorios Interactivos",
    feature_3_desc: "Simuladores en tiempo real con diagnóstico de IA en navegador: ajusta hiperparámetros, observa las curvas de entrenamiento y valida tus soluciones con retroalimentación inmediata.",

    // Syllabus (index.html)
    syllabus_tag: "Ruta Formativa",
    syllabus_title: "Temario del Curso (27 Lecciones)",
    syllabus_subtitle: "9 Unidades temáticas para dominar Machine Learning paso a paso con fundamentos rigurosos y práctica interactiva.",
    syllabus_unit_prefix: "Unidad",
    syllabus_btn_theory: "📖 Teoría",
    syllabus_btn_practice: "⚡ Práctica",
    syllabus_btn_practice_locked: "🔒 Práctica",

    // Theory Page (teoria.html)
    theory_sidebar_header: "Currículo (27 Lecciones)",
    theory_toggle_syllabus: "Temario",
    theory_key_takeaways: "Puntos Clave",
    theory_quiz_title: "Comprobación Conceptual (+50 XP)",
    theory_quiz_submit: "Validar Respuesta",
    theory_quiz_correct: "¡Respuesta Correcta! (+50 XP)",
    theory_quiz_incorrect: "Respuesta incorrecta. Revisa el concepto e inténtalo de nuevo.",
    theory_btn_prev: "Lección Anterior",
    theory_btn_next: "Siguiente Lección",
    theory_btn_enter_lab: "Entrar al Laboratorio (+100 XP) ➔",
    theory_btn_lab_locked: "🔒 Laboratorio Práctico Bloqueado",
    theory_btn_lab_unlocked: "⚡ Laboratorio (Desbloqueado)",
    theory_top_lab_btn: "⚡ Laboratorio",
    theory_top_lab_locked_btn: "🔒 Laboratorio",
    theory_top_lab_btn_short: "⚡ Lab",
    theory_top_lab_locked_btn_short: "🔒 Lab",

    // Practice Page (practica.html)
    practice_tab_instructions: "📋 Instrucciones",
    practice_tab_lab: "⚡ Laboratorio",
    practice_btn_go_to_lab: "⚡ Ir al Laboratorio ➔",
    practice_spec_title: "Laboratorio Práctico (+100 XP)",
    practice_objective_title: "Objetivo del Modelo",
    practice_instructions_title: "Instrucciones de Calibración",
    practice_hint_title: "Pista Técnica",
    practice_workspace_title: "Lienzo Interactivo de Experimentación",
    practice_telemetry_title: "Consola de Telemetría & Observabilidad ML",
    practice_telemetry_ready: "Listo para evaluar. Modifica los parámetros y presiona 'Probar Solución' o 'Validar y Enviar'.",
    practice_btn_reset: "↺ Reset Parámetros",
    practice_btn_run: "🔍 Probar Solución",
    practice_btn_submit: "Validar y Enviar (+100 XP) ➔",
    practice_locked_title: "🔒 Acceso Bloqueado",
    practice_locked_desc: "Para acceder a este laboratorio y ganar los +100 XP, primero debes completar y aprobar la comprobación conceptual en la teoría de la Lección {lesson}.",
    practice_btn_unlock_theory: "📖 Ir a la Teoría de la Lección {lesson} (Desbloquear) ➔",
    practice_hud_title: "¡Laboratorio Completado!",
    practice_hud_next: "Siguiente Laboratorio ➔",
    practice_drag_hint: "Arrastrar ↕",
    practice_toast_xp: "+100 XP registrados",
    practice_reset_msg: "Parámetros del laboratorio reiniciados al valor base.",
    practice_alert_locked: "Primero debes completar la teoría de esta lección para desbloquear el laboratorio.",
    lab_modal_title: "Laboratorios Prácticos (27 Lecciones)",
    lab_status_passed: "✓ Aprobado",
    lab_status_unlocked: "⚡ Desbloqueado",
    lab_status_locked: "🔒 Requiere Teoría",
    lab_status_lesson_locked: "🔒 Bloqueado",
    lab_alert_prev_lab: "Debes completar el laboratorio de la lección anterior para desbloquear esta lección.",
    lab_alert_curr_lab: "Debes completar el laboratorio actual para desbloquear la siguiente lección.",

    // Technical Hint XP Unlock
    hint_cost_pill: "-{cost} XP",
    hint_unlocked_pill: "✓ Desbloqueada",
    hint_modal_title: "Desbloquear Pista Técnica",
    hint_modal_desc: "Esta pista técnica te revelará la lógica y calibración recomendada para este ejercicio. Desbloquearla tiene un costo de XP.",
    hint_cost_label: "Costo de desbloqueo:",
    hint_balance_label: "Tu saldo actual de XP:",
    hint_remaining_label: "Saldo tras desbloquear:",
    hint_cancel_btn: "Cancelar",
    hint_unlock_btn: "🔓 Desbloquear Pista (-{cost} XP)",
    hint_insufficient_xp: "XP insuficiente. Necesitas {cost} XP para desbloquear esta pista. Puedes aprobar la comprobación conceptual (+50 XP) para conseguir más XP.",
    hint_insufficient_alert: "Necesitas {cost} XP para desbloquear esta pista técnica.",
    hint_insufficient_btn: "Entendido",

    // Modals
    modal_export_title: "Exportar / Importar Progreso",
    modal_export_desc: "Copia este JSON para respaldar tu progreso en otro dispositivo o pega un respaldo previo para restaurarlo:",
    modal_btn_copy: "📋 Copiar JSON",
    modal_btn_load: "📥 Cargar JSON",
    modal_btn_close: "Cerrar",
    modal_support_title: "Contacto y Soporte (Webhook n8n)",
    modal_support_desc: "Configura una URL de webhook de n8n o servicio HTTP para enviar telemetría de tus sesiones o solicitar feedback:",
    modal_support_save: "Guardar Webhook",
    toast_copy_success: "¡JSON copiado al portapapeles!",
    toast_import_success: "¡Progreso restaurado con éxito!",
    toast_import_error: "Error: Formato JSON no válido.",

    // Storage Modal (index.html)
    storage_modal_title: "Gestión de Progreso (JSON)",
    storage_modal_desc: "Copia tu avance actual o pega un JSON para restaurar tu progreso:",
    storage_apply_btn_copy: "Copiar al Portapapeles",
    storage_apply_btn_import: "Aplicar e Importar Progreso",
    storage_toggle_mode_import: "Modo Importar",
    storage_toggle_mode_export: "Modo Exportar",

    // n8n Webhook Modal (index.html)
    n8n_modal_title: "Webhook n8n (Certificados & Eventos)",
    n8n_modal_desc: "Conecta la plataforma a tu instancia de <strong>n8n</strong>. Al culminar el 100% del curso, se emitirá un evento con tu telemetría y puntuación XP para emitir un certificado PDF o registrar tu logro.",
    n8n_url_label: "URL Webhook:",
    n8n_save_btn: "Guardar Webhook",
    n8n_save_success: "¡URL de Webhook guardada exitosamente!",

    // Footers
    footer_copy: "Curso interactivo de Machine Learning desarrollado con fines de portafolio y e-learning abierto.",
    footer_note: "Estructura temática inspirada en el syllabus público de Microsoft ML-For-Beginners. Contenido instruccional, simuladores y evaluaciones 100% originales.",

    // Theory Banner & Nav
    theory_cta_title: "Pon a prueba estos conceptos en el laboratorio",
    theory_cta_desc: "Interactúa con el simulador en vivo, calibra los parámetros y gana +100 XP adicionales.",
    theory_external_github: "Ver material de referencia en GitHub ↗",
    theory_sidebar_lock_tooltip: "Completa el laboratorio de la lección anterior para desbloquear esta lección",
    theory_pager_text: "Lección {n} de {total}",

    // Practice UI & Shortcuts
    practice_theory_shortcut_title: "¿Dudas con la matemática o el concepto?",
    practice_theory_shortcut_desc: "Revisa la formulación teórica completa de esta lección.",
    practice_workspace_reward: "Recompensa: +100 XP",
    practice_toast_title: "¡Solución Validada!",
    practice_toast_default_msg: "El modelo superó la verificación algorítmica.",

    sim_bins_prompt: "Arrastra cada concepto a su categoría (o selecciónalo y haz clic en el destino):",
    sim_bins_remove_hint: "Arrastra a otra categoría o haz clic para remover",
    sim_sort_prompt: "Arrastra y suelta las tarjetas para ordenarlas correctamente de arriba (#1) hacia abajo.",
    sim_sort_grip_hint: "Arrastra para reordenar",
    sim_sort_handle_text: "Arrastrar",
    sim_reorder_log: "[REORDEN] Elemento movido de posición #{src} a #{dst}",
    sim_sort_eval_pass: "¡Secuencia ordenada correctamente! Pasos en orden perfecto.",
    sim_sort_eval_fail_title: "{count} paso(s) en posición incorrecta:",
    sim_sort_eval_fail_hint: "Reordena los pasos marcados con ✗ hasta que todas las tarjetas se iluminen en verde.",
    sim_fairness_group_a: "Grupo A (Población Base): Umbral = 0.50 | FNR = 12%",
    sim_fairness_group_b: "Grupo B (Subgrupo Protegido): Umbral = {th} | FNR = {fnr}%",
    sim_fairness_disparity: "Disparidad FNR: {disp}%",
    sim_fairness_fair: "✓ (En margen equitativo)",
    sim_fairness_unfair: "✗ (Desbalanceado)",
    sim_fairness_th_label: "Umbral Grupo B",
    sim_filter_th_sel: "Sel.",
    sim_filter_th_id: "ID",
    sim_filter_th_var: "Variedad",
    sim_filter_th_pkg: "Empaque",
    sim_filter_th_price: "Precio",
    sim_poly_degree_label: "Grado Polinomio (d)",
    sim_sig_weight: "Peso (w)",
    sim_sig_bias: "Sesgo (b)",
    sim_sig_eval_pass: "¡Frontera logística calibrada! w={w}, b={b}. La sigmoide discrimina ambas clases con alta certeza.",
    sim_sig_eval_fail_w: "Pendiente nula o invertida: ajusta el Peso (w) mayor a 1.2.",
    sim_sig_eval_fail_b: "Sesgo descalibrado: ajusta 'w' mayor a 1.2 y 'b' entre -2.0 y -5.0 para centrar la sigmoide.",
    sim_sig_eval_fail_hint: "Ajusta Peso (w) > 1.2 y Sesgo (b) entre -2.0 y -5.0 usando el control o los botones [ − ] y [ + ].",
    sim_knn_label: "Hiperparámetro k",
    sim_cm_real_pred: "Real / Pred",
    sim_cm_pred_pos: "Pred. (+)",
    sim_cm_pred_neg: "Pred. (-)",
    sim_cm_actual_pos: "Enfermo (+)",
    sim_cm_actual_neg: "Sano (-)",
    sim_cm_threshold: "Umbral de Corte",
    sim_recommender_selected: "Ingredientes seleccionados:",
    sim_recommender_mex: "🇲🇽 Mexicana",
    sim_recommender_jap: "🇯🇵 Japonesa",
    sim_kmeans_step_btn: "Paso K-Means (Iterar)",
    sim_kmeans_status: "Paso: {step}",
    sim_kmeans_converged: "Paso: {step} (Convergencia)",
    sim_tok_input_label: "Entrada de texto:",
    sim_tok_lowercase: "Minúsculas",
    sim_tok_stopwords: "Filtrar Stopwords",
    sim_tok_results: "Tokens Resultantes",
    sim_sent_hint: "Alterna palabras para alterar la polaridad:",
    sim_sent_polarity: "Polaridad Acumulada:",
    sim_tfidf_term: "Término",
    sim_tfidf_df: "DF (en 100)",
    sim_tfidf_final: "TF-IDF Final",
    sim_tfidf_null: "Nulo",
    sim_tfidf_high: "Alto",
    sim_stat_orig: "Original (d = 0)",
    sim_stat_diff: "Diferenciada (d = 1)",
    sim_arima_ar: "Orden AR (p)",
    sim_arima_diff: "Orden Diff (d)",
    sim_bellman_formula: "Q_nuevo = Q_viejo + α · [ r + γ · max(Q') - Q_viejo ]",
    sim_bellman_values: "Valores: Q_viejo=0, α=0.5, r=10, γ=0.9, max(Q')=20",
    sim_bellman_result: "Resultado Q_nuevo:",
    sim_gw_train: "Auto-Entrenar (100 Ep)",
    sim_rai_th_subgroup: "Subgrupo",
    sim_rai_th_rate: "Tasa Selección",
    sim_rai_th_parity: "Paridad",
    sim_rai_th_status: "Estado",
    sim_rai_group_a: "Subgrupo A (Mayoría)",
    sim_rai_group_b: "Subgrupo B (Protegido)",
    sim_rai_status_compliant: "✓ Conforme",
    sim_rai_status_fair: "✓ Cumplida (>0.80)",
    sim_rai_status_unfair: "✗ Disparidad (<0.80)",
    sim_rai_btn_disable: "Desactivar Re-ponderación",
    sim_rai_btn_enable: "Aplicar Re-ponderación de Muestras (Reweighting)"
  },
  en: {
    // Navigation & General
    nav_brand: "Machine Learning Track",
    nav_syllabus: "Curriculum (27 Lessons)",
    nav_theory: "Theory",
    nav_practice: "⚡ Labs",
    nav_home: "🏠 Home",
    nav_back_dashboard: "Back to home",
    nav_theory_title: "Theory & Fundamentals",
    nav_practice_title: "ML Studio // Lab",
    nav_view_theory: "View Theory",
    nav_lesson_prefix: "Lesson",

    // Settings
    settings_title: "Settings",
    settings_lang: "Language",
    settings_theme: "Theme",
    settings_contact: "Contact & Support",
    settings_theme_toggle_light: "Switch to light mode",
    settings_theme_toggle_dark: "Switch to dark mode",

    // Hero (index.html)
    hero_pill: "Practical Specialization Track",
    hero_title_main: "Machine Learning",
    hero_title_sub: "From Zero to Production",
    hero_desc: "Interactive learning track inspired by the 27 essential modules of Microsoft ML-For-Beginners. Master regression, classification, clustering, NLP, and computer vision with hands-on labs and real-time algorithmic evaluation.",
    hero_btn_start: "🚀 Start Lesson 1 ➔",
    hero_btn_continue: "🚀 Continue Lesson {lesson} ➔",
    hero_btn_theory: "📖 Explore Theory",

    // Dashboard (index.html)
    dash_title: "Your Live Progress",
    dash_xp_label: "Experience Points (XP)",
    dash_progress_label: "Track Progress",
    dash_quizzes_label: "Quizzes Passed",
    dash_labs_label: "Labs Completed",
    dash_export_btn: "💾 Export JSON",
    dash_import_btn: "📥 Import",
    dash_reset_btn: "↺ Reset",
    dash_reset_confirm: "Are you sure you want to reset all your accumulated progress and XP? This action cannot be undone.",
    dash_reset_done: "Progress reset successfully.",
    reset_modal_title: "Reset Progress?",
    reset_modal_desc: "This will reset all your experience points (XP), passed quizzes, completed labs, and completed lessons back to zero.",
    reset_modal_warning: "⚠️ This action cannot be undone unless you have a JSON backup.",
    reset_modal_cancel: "Cancel",
    reset_modal_confirm: "Yes, reset all",
    dash_status_copy: "State saved in your browser via <code>localStorage</code>. You can export it anytime.",

    // Features (index.html)
    feature_1_title: "1. Business Intuition",
    feature_1_desc: "Understand exactly why each algorithm arises, what real-world problems it solves, and the limits of traditional programming compared to probabilistic data.",
    feature_2_title: "2. Mathematical Rigor",
    feature_2_desc: "Clear formulation of loss functions, gradient descent, confusion matrices, Euclidean distance, Bellman equation, and anti-data leakage principles.",
    feature_3_title: "3. Hands-on Labs",
    feature_3_desc: "Real-time in-browser simulators with AI diagnostics: tune hyperparameters, inspect training curves, and validate your solutions with instant feedback.",

    // Syllabus (index.html)
    syllabus_tag: "Learning Track",
    syllabus_title: "Course Curriculum (27 Lessons)",
    syllabus_subtitle: "9 Thematic units to master Machine Learning step-by-step with rigorous fundamentals and hands-on practice.",
    syllabus_unit_prefix: "Unit",
    syllabus_btn_theory: "📖 Theory",
    syllabus_btn_practice: "⚡ Practice",
    syllabus_btn_practice_locked: "🔒 Practice",

    // Theory Page (teoria.html)
    theory_sidebar_header: "Curriculum (27 Lessons)",
    theory_toggle_syllabus: "Syllabus",
    theory_key_takeaways: "Key Takeaways",
    theory_quiz_title: "Conceptual Check (+50 XP)",
    theory_quiz_submit: "Submit Answer",
    theory_quiz_correct: "Correct Answer! (+50 XP)",
    theory_quiz_incorrect: "Incorrect answer. Review the concept and try again.",
    theory_btn_prev: "Previous Lesson",
    theory_btn_next: "Next Lesson",
    theory_btn_enter_lab: "Enter Lab (+100 XP) ➔",
    theory_btn_lab_locked: "🔒 Hands-on Lab Locked",
    theory_btn_lab_unlocked: "⚡ Lab (Unlocked)",
    theory_top_lab_btn: "⚡ Lab",
    theory_top_lab_locked_btn: "🔒 Lab",
    theory_top_lab_btn_short: "⚡ Lab",
    theory_top_lab_locked_btn_short: "🔒 Lab",

    // Practice Page (practica.html)
    practice_tab_instructions: "📋 Instructions",
    practice_tab_lab: "⚡ Laboratory",
    practice_btn_go_to_lab: "⚡ Go to Laboratory ➔",
    practice_spec_title: "Hands-on Lab (+100 XP)",
    practice_objective_title: "Model Objective",
    practice_instructions_title: "Calibration Instructions",
    practice_hint_title: "Technical Hint",
    practice_workspace_title: "Interactive Experimentation Canvas",
    practice_telemetry_title: "ML Telemetry & Observability Console",
    practice_telemetry_ready: "Ready to evaluate. Modify parameters and click 'Run Solution' or 'Validate & Submit'.",
    practice_btn_reset: "↺ Reset Parameters",
    practice_btn_run: "🔍 Run Solution",
    practice_btn_submit: "Validate & Submit (+100 XP) ➔",
    practice_locked_title: "🔒 Access Locked",
    practice_locked_desc: "To access this lab and earn +100 XP, you must first complete and pass the conceptual check in theory for Lesson {lesson}.",
    practice_btn_unlock_theory: "📖 Go to Theory for Lesson {lesson} (Unlock) ➔",
    practice_hud_title: "Lab Completed!",
    practice_hud_next: "Next Lab ➔",
    practice_drag_hint: "Drag ↕",
    practice_toast_xp: "+100 XP recorded",
    practice_reset_msg: "Lab parameters reset to baseline values.",
    practice_alert_locked: "You must first complete the theory for this lesson to unlock the lab.",
    lab_modal_title: "Hands-on Labs (27 Lessons)",
    lab_status_passed: "✓ Passed",
    lab_status_unlocked: "⚡ Unlocked",
    lab_status_locked: "🔒 Requires Theory",
    lab_status_lesson_locked: "🔒 Locked",
    lab_alert_prev_lab: "Complete the laboratory of the previous lesson to unlock this lesson.",
    lab_alert_curr_lab: "Complete the current laboratory to unlock the next lesson.",

    // Technical Hint XP Unlock
    hint_cost_pill: "-{cost} XP",
    hint_unlocked_pill: "✓ Unlocked",
    hint_modal_title: "Unlock Technical Hint",
    hint_modal_desc: "This technical hint will reveal the recommended logic and calibration for this exercise. Unlocking it costs XP.",
    hint_cost_label: "Unlock cost:",
    hint_balance_label: "Your current XP balance:",
    hint_remaining_label: "Balance after unlock:",
    hint_cancel_btn: "Cancel",
    hint_unlock_btn: "🔓 Unlock Hint (-{cost} XP)",
    hint_insufficient_xp: "Insufficient XP. You need {cost} XP to unlock this hint. You can pass the conceptual check (+50 XP) to earn more XP.",
    hint_insufficient_alert: "You need {cost} XP to unlock this technical hint.",
    hint_insufficient_btn: "Got it",

    // Modals
    modal_export_title: "Export / Import Progress",
    modal_export_desc: "Copy this JSON to back up your progress on another device, or paste a previous backup to restore it:",
    modal_btn_copy: "📋 Copy JSON",
    modal_btn_load: "📥 Load JSON",
    modal_btn_close: "Close",
    modal_support_title: "Contact & Support (n8n Webhook)",
    modal_support_desc: "Configure an n8n webhook URL or HTTP endpoint to send telemetry from your sessions or request feedback:",
    modal_support_save: "Save Webhook",
    toast_copy_success: "JSON copied to clipboard!",
    toast_import_success: "Progress restored successfully!",
    toast_import_error: "Error: Invalid JSON format.",

    // Storage Modal (index.html)
    storage_modal_title: "Progress Management (JSON)",
    storage_modal_desc: "Copy your current progress or paste a JSON to restore your progress:",
    storage_apply_btn_copy: "Copy to Clipboard",
    storage_apply_btn_import: "Apply & Import Progress",
    storage_toggle_mode_import: "Import Mode",
    storage_toggle_mode_export: "Export Mode",

    // n8n Webhook Modal (index.html)
    n8n_modal_title: "n8n Webhook (Certificates & Events)",
    n8n_modal_desc: "Connect the platform to your <strong>n8n</strong> instance. Upon completing 100% of the course, an event will be emitted with your telemetry and XP score to issue a PDF certificate or log your achievement.",
    n8n_url_label: "Webhook URL:",
    n8n_save_btn: "Save Webhook",
    n8n_save_success: "Webhook URL saved successfully!",

    // Footers
    footer_copy: "Interactive Machine Learning course developed for portfolio and open e-learning purposes.",
    footer_note: "Thematic structure inspired by Microsoft ML-For-Beginners public syllabus. Instructional content, simulators, and evaluations are 100% original.",

    // Theory Banner & Nav
    theory_cta_title: "Put these concepts to the test in the lab",
    theory_cta_desc: "Interact with the live simulator, tune parameters, and earn an extra +100 XP.",
    theory_external_github: "View reference material on GitHub ↗",
    theory_sidebar_lock_tooltip: "Complete the previous laboratory to unlock this lesson",
    theory_pager_text: "Lesson {n} of {total}",

    // Practice UI & Shortcuts
    practice_theory_shortcut_title: "Questions about math or the concept?",
    practice_theory_shortcut_desc: "Review the complete theoretical formulation of this lesson.",
    practice_workspace_reward: "Reward: +100 XP",
    practice_toast_title: "Solution Validated!",
    practice_toast_default_msg: "The model passed algorithmic verification.",

    // Simulator Common UI
    sim_bins_prompt: "Drag each concept to its category (or click to select and assign):",
    sim_bins_remove_hint: "Drag to another category or click to remove",
    sim_sort_prompt: "Drag and drop cards to order them correctly from top (#1) to bottom.",
    sim_sort_grip_hint: "Drag to reorder",
    sim_sort_handle_text: "Drag",
    sim_reorder_log: "[REORDER] Item moved from position #{src} to #{dst}",
    sim_sort_eval_pass: "Sequence sorted correctly! Perfect order.",
    sim_sort_eval_fail_title: "{count} step(s) out of order:",
    sim_sort_eval_fail_hint: "Reorder the steps marked with ✗ until all cards turn green.",
    sim_fairness_group_a: "Group A (Base Population): Threshold = 0.50 | FNR = 12%",
    sim_fairness_group_b: "Group B (Protected Subgroup): Threshold = {th} | FNR = {fnr}%",
    sim_fairness_disparity: "FNR Disparity: {disp}%",
    sim_fairness_fair: "✓ (Within fair margin)",
    sim_fairness_unfair: "✗ (Unbalanced)",
    sim_fairness_th_label: "Group B Threshold",
    sim_filter_th_sel: "Sel.",
    sim_filter_th_id: "ID",
    sim_filter_th_var: "Variety",
    sim_filter_th_pkg: "Package",
    sim_filter_th_price: "Price",
    sim_poly_degree_label: "Polynomial Degree (d)",
    sim_sig_weight: "Weight (w)",
    sim_sig_bias: "Bias (b)",
    sim_sig_eval_pass: "Logistic boundary calibrated! w={w}, b={b}. The sigmoid discriminates both classes with high confidence.",
    sim_sig_eval_fail_w: "Zero or inverted slope: adjust Weight (w) greater than 1.2.",
    sim_sig_eval_fail_b: "Bias uncalibrated: adjust 'w' greater than 1.2 and 'b' between -2.0 and -5.0 to center the sigmoid.",
    sim_sig_eval_fail_hint: "Set Weight (w) > 1.2 and Bias (b) between -2.0 and -5.0 using the slider or [ − ] and [ + ] buttons.",
    sim_knn_label: "Hyperparameter k",
    sim_cm_real_pred: "Actual / Pred",
    sim_cm_pred_pos: "Pred. (+)",
    sim_cm_pred_neg: "Pred. (-)",
    sim_cm_actual_pos: "Sick (+)",
    sim_cm_actual_neg: "Healthy (-)",
    sim_cm_threshold: "Cutoff Threshold",
    sim_recommender_selected: "Selected ingredients:",
    sim_recommender_mex: "🇲🇽 Mexican",
    sim_recommender_jap: "🇯🇵 Japanese",
    sim_kmeans_step_btn: "K-Means Step (Iterate)",
    sim_kmeans_status: "Step: {step}",
    sim_kmeans_converged: "Step: {step} (Convergence)",
    sim_tok_input_label: "Text input:",
    sim_tok_lowercase: "Lowercase",
    sim_tok_stopwords: "Filter Stopwords",
    sim_tok_results: "Resulting Tokens",
    sim_sent_hint: "Toggle words to alter polarity:",
    sim_sent_polarity: "Accumulated Polarity:",
    sim_tfidf_term: "Term",
    sim_tfidf_df: "DF (in 100)",
    sim_tfidf_final: "Final TF-IDF",
    sim_tfidf_null: "Zero/Null",
    sim_tfidf_high: "High",
    sim_stat_orig: "Original (d = 0)",
    sim_stat_diff: "Differenced (d = 1)",
    sim_arima_ar: "AR Order (p)",
    sim_arima_diff: "Diff Order (d)",
    sim_bellman_formula: "Q_new = Q_old + α · [ r + γ · max(Q') - Q_old ]",
    sim_bellman_values: "Values: Q_old=0, α=0.5, r=10, γ=0.9, max(Q')=20",
    sim_bellman_result: "Result Q_new:",
    sim_gw_train: "Auto-Train (100 Ep)",
    sim_rai_th_subgroup: "Subgroup",
    sim_rai_th_rate: "Selection Rate",
    sim_rai_th_parity: "Parity",
    sim_rai_th_status: "Status",
    sim_rai_group_a: "Subgroup A (Majority)",
    sim_rai_group_b: "Subgroup B (Protected)",
    sim_rai_status_compliant: "✓ Compliant",
    sim_rai_status_fair: "✓ Compliant (>0.80)",
    sim_rai_status_unfair: "✗ Disparity (<0.80)",
    sim_rai_btn_disable: "Disable Sample Reweighting",
    sim_rai_btn_enable: "Apply Sample Reweighting"
  }
};

const I18nManager = {
  dict: I18N_DICTIONARY,
  currentLang: 'es',

  init() {
    try {
      if (typeof localStorage !== 'undefined') {
        const saved = localStorage.getItem('ml_lang');
        if (saved === 'en' || saved === 'es') {
          this.currentLang = saved;
        }
      }
    } catch(e) {}
  },

  getLang() {
    return this.currentLang;
  },

  setLang(lang) {
    this.currentLang = (lang === 'en') ? 'en' : 'es';
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('ml_lang', this.currentLang);
      }
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.setAttribute('lang', this.currentLang);
      }
    } catch(e) {}
    this.apply();
    return this.currentLang;
  },

  t(key, params = {}) {
    const lang = this.currentLang || 'es';
    const langDict = this.dict[lang] || this.dict.es;
    let str = langDict[key] || (this.dict.es[key] || key);
    if (typeof str === 'string' && params && typeof params === 'object') {
      Object.keys(params).forEach(k => {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
      });
    }
    return str;
  },

  apply(lang) {
    if (lang) {
      this.currentLang = (lang === 'en') ? 'en' : 'es';
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('ml_lang', this.currentLang);
        }
      } catch(e) {}
    }
    const l = this.currentLang;
    if (typeof document === 'undefined') return;

    if (document.documentElement) {
      document.documentElement.setAttribute('lang', l);
    }

    // Sincronizar elementos select
    document.querySelectorAll('.settings-lang-select').forEach(sel => {
      sel.value = l;
    });

    // Traducir elementos de texto simple
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val && val !== key) {
        el.textContent = val;
      }
    });

    // Traducir elementos con HTML enriquecido
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.t(key);
      if (val && val !== key) {
        el.innerHTML = val;
      }
    });

    // Traducir atributos
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', this.t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', this.t(key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', this.t(key));
    });

    // Emitir evento para componentes dinámicos
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ml_language_changed', { detail: { lang: l } }));
    }
  }
};

// Inicializar inmediatamente
I18nManager.init();

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18nManager.apply());
  } else {
    I18nManager.apply();
  }
}

if (typeof window !== 'undefined') {
  window.I18nManager = I18nManager;
  window.I18N_DICTIONARY = I18N_DICTIONARY;
}

if (typeof module !== 'undefined') {
  module.exports = { I18nManager, I18N_DICTIONARY };
}

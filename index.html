<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Malla Curricular – Licenciatura en Matemáticas UNPHU</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f9f7fc;
      color: #333;
      padding: 2rem;
    }
    h1 {
      color: #6a1b9a;
      text-align: center;
    }
    .motivacion {
      text-align: center;
      font-style: italic;
      margin-bottom: 1.5rem;
      color: #7b1fa2;
    }
    .periodo {
      background-color: #f3e5f5;
      border-left: 5px solid #6a1b9a;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 8px;
    }
    .asignatura {
      display: flex;
      align-items: center;
      margin: 0.3rem 0;
    }
    input[type="checkbox"] {
      margin-right: 0.8rem;
      transform: scale(1.3);
    }
    .completada {
      background-color: #ce93d8;
      padding: 0.2rem 0.5rem;
      border-radius: 5px;
    }
    #progreso-container {
      margin-top: 2rem;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>📘 Malla Curricular Interactiva</h1>
  <p class="motivacion">¡Cada materia que completas es un paso más cerca de tu meta! 💪</p>

  <div id="malla"></div>
  <div id="progreso-container">Progreso: 0%</div>

  <script>
    const pensum = {
      "0": ["ORI-100 · Orientación Universitaria"],
      "1": [
        "BIO-100 · Biología General",
        "BIO-100-L · Biología General - Práctica",
        "EDU-107 · Técnicas de Estudio e Investigación",
        "EDU-165 · Tecnología de la Información",
        "FIL-108 · Filosofía General",
        "LET-104 · Expresión Oral y Escrita",
        "LEX-104 · Inglés I",
        "MAT-114 · Aritmética y Geometría"
      ],
      "2": [
        "EDU-174 · Fundamentos del Currículo",
        "HUM-155 · Historia Dominicana",
        "LEX-117 · Inglés II",
        "MAT-140 · Lógica Matemática",
        "PSI-220 · Psicología del Adolescente",
        "SOC-105 · Intro a Ciencias Sociales"
      ],
      "3": [
        "EDU-175 · Metodología de la Investigación",
        "EDU-176 · Fundamentos Filosóficos de la Educación",
        "EDU-177 · Proceso de Enseñanza-Aprendizaje",
        "EDU-178 · Práctica Docente I",
        "MAT-155 · Aritmética Superior",
        "PSI-334 · Psicología del Aprendizaje"
      ],
      "4": [
        "EDU-179 · Ética Profesional Docente",
        "EDU-183 · Recursos para el Aprendizaje",
        "EDU-188 · Legislación Educativa",
        "EDU-189 · Práctica Docente II",
        "MAT-204 · Álgebra Superior I",
        "MAT-206 · Geometría I",
        "MAT-208 · Trigonometría I"
      ],
      "5": [
        "EDU-198 · Evaluación de los Aprendizajes",
        "EDU-199 · Neurociencia y Aprendizaje",
        "MAT-216 · Álgebra Superior II",
        "MAT-218 · Geometría II",
        "MAT-220 · Trigonometría II",
        "MAT-222 · Matemática Financiera"
      ],
      "6": [
        "EDU-376 · Gestión de Aula",
        "EDU-377 · Práctica Docente III",
        "EDU-386 · Didáctica de la Matemática I",
        "MAT-224 · Álgebra Lineal",
        "MAT-226 · Geometría III"
      ],
      "7": [
        "EDU-380 · Innovación Educativa",
        "ELT-002 · Electiva II",
        "MAT-304 · Álgebra Abstracta",
        "MAT-306 · Matemática y Tecnología I",
        "MAT-308 · Análisis Matemático I"
      ],
      "8": [
        "EDU-382 · Pedagogía Social",
        "MAT-384 · Análisis Matemático II",
        "MAT-385 · Matemática Discreta",
        "MAT-386 · Estadística y Probabilidades",
        "MAT-389 · Matemática y Tecnología II"
      ],
      "9": [
        "EDU-383 · Investigación Acción",
        "EDU-384 · Práctica Docente IV",
        "EDU-390 · Didáctica Matemática II",
        "MAT-309 · Inferencia Estadística",
        "MAT-390 · Cálculo Vectorial",
        "MAT-392 · Análisis Numérico"
      ],
      "10": [
        "EDU-408 · Práctica Docente V",
        "MAT-410 · Ecuaciones Diferenciales",
        "MAT-412 · Historia y Epistemología Matemática"
      ],
      "11": [
        "EDU-409 · Práctica Docente VI",
        "ELT-001 · Electiva I",
        "ELT-003 · Electiva III",
        "MAT-414 · Variable Compleja"
      ],
      "12": [
        "EDU-490 · Trabajo de Grado"
      ]
    };

    const mallaDiv = document.getElementById('malla');
    const progresoText = document.getElementById('progreso-container');

    function renderMalla() {
      let total = 0;
      let completadas = 0;
      mallaDiv.innerHTML = '';

      for (let periodo in pensum) {
        const periodoDiv = document.createElement('div');
        periodoDiv.className = 'periodo';
        periodoDiv.innerHTML = `<h3>📘 Periodo ${periodo}</h3>`;

        pensum[periodo].forEach((asignatura, index) => {
          const key = `p${periodo}a${index}`;
          const checked = localStorage.getItem(key) === 'true';

          const div = document.createElement('div');
          div.className = 'asignatura';
          if (checked) div.classList.add('completada');

          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = checked;
          checkbox.addEventListener('change', () => {
            localStorage.setItem(key, checkbox.checked);
            renderMalla();
          });

          const label = document.createElement('label');
          label.textContent = asignatura;

          div.appendChild(checkbox);
          div.appendChild(label);
          periodoDiv.appendChild(div);

          total++;
          if (checked) completadas++;
        });
        mallaDiv.appendChild(periodoDiv);
      }

      const progreso = Math.round((completadas / total) * 100);
      progresoText.textContent = `Progreso: ${progreso}%`;
    }

    renderMalla();
  </script>
</body>
</html>


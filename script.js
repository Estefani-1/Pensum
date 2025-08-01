<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>¡Construyendo tu futuro matemático! 🎓💜</title>
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
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;
      padding: 5px;
      border-radius: 5px;
    }
    .asignatura.selecta {
      background-color: #e1bee7;
    }
    select {
      padding: 3px;
      border-radius: 4px;
    }
    #progreso-container {
      margin-top: 2rem;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>¡Construyendo tu futuro matemático! 🎓💜</h1>
  <p class="motivacion">Cada materia, una meta. ¡Sigue adelante con pasión por enseñar! 📚</p>

  <div id="malla"></div>
  <div id="progreso-container">Progreso: 0% | Índice general: 0.00</div>

  <script>
    const escala = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 };

    const pensum = {
      "0": [ { nombre: "ORI-100 · Orientación Universitaria", creditos: 0 } ],
      "1": [
        { nombre: "BIO-100 · Biología General", creditos: 3 },
        { nombre: "BIO-100-L · Biología General - Práctica", creditos: 0 },
        { nombre: "EDU-107 · Técnicas de Estudio e Investigación", creditos: 3 },
        { nombre: "EDU-165 · Tecnología de la Información", creditos: 2 },
        { nombre: "FIL-108 · Filosofía General", creditos: 3 },
        { nombre: "LET-104 · Expresión Oral y Escrita", creditos: 3 },
        { nombre: "LEX-104 · Inglés I", creditos: 3 },
        { nombre: "MAT-114 · Aritmética y Geometría", creditos: 3 }
      ],
      "2": [
        { nombre: "EDU-174 · Fundamentos del Currículo", creditos: 3 },
        { nombre: "HUM-155 · Historia Dominicana", creditos: 3 },
        { nombre: "LEX-117 · Inglés II", creditos: 3 },
        { nombre: "MAT-140 · Lógica Matemática", creditos: 4 },
        { nombre: "PSI-220 · Psicología del Adolescente", creditos: 3 },
        { nombre: "SOC-105 · Introducción a Ciencias Sociales", creditos: 2 }
      ],
      "3": [
        { nombre: "EDU-175 · Metodología de la Investigación", creditos: 3 },
        { nombre: "EDU-176 · Fundamentos Filosóficos de la Educación", creditos: 3 },
        { nombre: "EDU-177 · Proceso de Enseñanza-Aprendizaje", creditos: 3 },
        { nombre: "EDU-178 · Práctica Docente I", creditos: 2 },
        { nombre: "MAT-155 · Aritmética Superior", creditos: 4 },
        { nombre: "PSI-334 · Psicología del Aprendizaje", creditos: 3 }
      ],
      "4": [
        { nombre: "EDU-179 · Ética Profesional Docente", creditos: 2 },
        { nombre: "EDU-183 · Recursos para el Aprendizaje", creditos: 3 },
        { nombre: "EDU-188 · Legislación Educativa", creditos: 2 },
        { nombre: "EDU-189 · Práctica Docente II", creditos: 3 },
        { nombre: "MAT-204 · Álgebra Superior I", creditos: 4 },
        { nombre: "MAT-206 · Geometría I", creditos: 4 },
        { nombre: "MAT-208 · Trigonometría I", creditos: 4 }
      ],
      "5": [
        { nombre: "EDU-198 · Evaluación de los Aprendizajes", creditos: 3 },
        { nombre: "EDU-199 · Neurociencia y Aprendizaje", creditos: 3 },
        { nombre: "MAT-216 · Álgebra Superior II", creditos: 3 },
        { nombre: "MAT-218 · Geometría II", creditos: 3 },
        { nombre: "MAT-220 · Trigonometría II", creditos: 3 },
        { nombre: "MAT-222 · Matemática Financiera", creditos: 3 }
      ],
      "6": [
        { nombre: "EDU-376 · Gestión de Aula", creditos: 2 },
        { nombre: "EDU-377 · Práctica Docente III", creditos: 1 },
        { nombre: "EDU-386 · Didáctica de la Matemática I", creditos: 3 },
        { nombre: "MAT-224 · Álgebra Lineal", creditos: 4 },
        { nombre: "MAT-226 · Geometría III", creditos: 4 }
      ],
      "7": [
        { nombre: "EDU-380 · Innovación Educativa", creditos: 3 },
        { nombre: "ELT-002 · Electiva II", creditos: 2 },
        { nombre: "MAT-304 · Álgebra Abstracta", creditos: 4 },
        { nombre: "MAT-306 · Matemática y Tecnología I", creditos: 3 },
        { nombre: "MAT-308 · Análisis Matemático I", creditos: 4 }
      ],
      "8": [
        { nombre: "EDU-382 · Pedagogía Social", creditos: 3 },
        { nombre: "MAT-384 · Análisis Matemático II", creditos: 4 },
        { nombre: "MAT-385 · Matemática Discreta", creditos: 4 },
        { nombre: "MAT-386 · Estadística y Probabilidades", creditos: 4 },
        { nombre: "MAT-389 · Matemática y Tecnología II", creditos: 3 }
      ],
      "9": [
        { nombre: "EDU-383 · Investigación Acción", creditos: 3 },
        { nombre: "EDU-384 · Práctica Docente IV", creditos: 1 },
        { nombre: "EDU-390 · Didáctica Matemática II", creditos: 3 },
        { nombre: "MAT-309 · Inferencia Estadística", creditos: 4 },
        { nombre: "MAT-390 · Cálculo Vectorial", creditos: 4 },
        { nombre: "MAT-392 · Análisis Numérico", creditos: 4 }
      ],
      "10": [
        { nombre: "EDU-408 · Práctica Docente V", creditos: 1 },
        { nombre: "MAT-410 · Ecuaciones Diferenciales", creditos: 4 },
        { nombre: "MAT-412 · Historia y Epistemología Matemática", creditos: 3 }
      ],
      "11": [
        { nombre: "EDU-409 · Práctica Docente VI", creditos: 1 },
        { nombre: "ELT-001 · Electiva I", creditos: 2 },
        { nombre: "ELT-003 · Electiva III", creditos: 2 },
        { nombre: "MAT-414 · Variable Compleja", creditos: 4 }
      ],
      "12": [
        { nombre: "EDU-490 · Trabajo de Grado", creditos: 4 }
      ]
    };

    const malla = document.getElementById('malla');
    const progresoContainer = document.getElementById('progreso-container');

    function actualizarProgreso() {
      let totalCreditos = 0;
      let creditosCursados = 0;
      let puntosTotales = 0;

      document.querySelectorAll('select').forEach(select => {
        const valor = select.value;
        const creditos = parseFloat(select.dataset.creditos);
        totalCreditos += creditos;
        if (valor !== "") {
          select.parentElement.classList.add('selecta');
          creditosCursados += creditos;
          puntosTotales += escala[valor] * creditos;
        } else {
          select.parentElement.classList.remove('selecta');
        }
      });

      const progreso = totalCreditos > 0 ? (creditosCursados / totalCreditos * 100).toFixed(1) : 0;
      const indice = creditosCursados > 0 ? (puntosTotales / creditosCursados).toFixed(2) : 0;
      progresoContainer.textContent = `Progreso: ${progreso}% | Índice general: ${indice}`;
    }

    for (const periodo in pensum) {
      const contenedor = document.createElement('div');
      contenedor.className = 'periodo';
      const titulo = document.createElement('h3');
      titulo.textContent = `Periodo ${periodo}`;
      contenedor.appendChild(titulo);

      pensum[periodo].forEach(asignatura => {
        const fila = document.createElement('div');
        fila.className = 'asignatura';
        fila.innerHTML = `
          <span>${asignatura.nombre} (${asignatura.creditos} cr.)</span>
          <select data-creditos="${asignatura.creditos}">
            <option value="">--</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>
        `;
        contenedor.appendChild(fila);
      });

      malla.appendChild(contenedor);
    }

    document.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', actualizarProgreso);
    });

    actualizarProgreso();
  </script>
</body>
</html>



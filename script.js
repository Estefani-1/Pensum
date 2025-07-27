<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>🎓 Malla Curricular UNPHU Matemática Secundaria</title>
<style>
  body { font-family: sans-serif; background:#f8f5fc; margin:20px; color:#333; }
  h1 { color:#7e57c2; margin-bottom:5px; }
  .motivation { font-style:italic; color:#6a1b9a; margin-bottom:15px; }
  table { width:100%; border-collapse:collapse; margin-bottom:20px; }
  th { background:#7e57c2; color:white; padding:10px; position:sticky; top:0; }
  td { border:1px solid #ddd; padding:8px; text-align:center;}
  tr:hover { background:#ede7f6; }
  .period-header { background:#9575cd; color:white; text-align:left; font-size:1.1em; }
  .completed { background:#d1c4e9 !important; }
  .checkbox {transform:scale(1.2);}
  #progress { font-weight:bold; color:#4a148c; margin-top:10px; }
</style>
</head>
<body>
<h1>🎓 ¡Sigue avanzando hacia tu meta!</h1>
<p class="motivation">Cada asignatura aprobada es un paso más cerca de ser un gran educador en matemáticas 🧮✨</p>
<div id="progress">Progreso: 0%</div>
<table id="malla">
  <thead>
    <tr><th>✓</th><th>Periodo</th><th>Código</th><th>Asignatura</th><th>CR</th><th>Pre‑Req</th></tr>
  </thead>
  <tbody>
    <tr class="period-header"><td colspan="6">Periodo 1</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>1</td><td>PEG‑100</td><td>Fund. Filosóficos e Históricos de la Educación</td><td>4</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>1</td><td>CGE‑100</td><td>Expresión Oral y Producción Escrita</td><td>3</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>1</td><td>CGM‑100</td><td>Aritmética y Geometría</td><td>3</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>1</td><td>SIC‑110</td><td>Psicología del Desarrollo (12‑18 años)</td><td>3</td><td>—</td></tr>
    <tr class="period-header"><td colspan="6">Periodo 2</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>2</td><td>PES‑100</td><td>Fundamentos y E estructura del Currículo</td><td>3</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>2</td><td>MAS‑100</td><td>Lógica y Teoría de Conjuntos</td><td>4</td><td>CGM‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>2</td><td>SIC‑121</td><td>Psicología del Aprendizaje</td><td>3</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>2</td><td>CGS‑110</td><td>Historia Dominicana</td><td>3</td><td>CGS‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>2</td><td>CGF‑100</td><td>Filosofía General</td><td>2</td><td>—</td></tr>
    <tr class="period-header"><td colspan="6">Periodo 3</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>PES‑110</td><td>Procesos de Enseñanza‑Aprendizaje</td><td>4</td><td>PES‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>PDS‑100</td><td>Práctica Docente I – Observación</td><td>2</td><td>—</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>MAS‑110</td><td>Aritmética Superior</td><td>3</td><td>MAS‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>MAS‑130</td><td>Álgebra Superior I</td><td>3</td><td>MAS‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>MAS‑140</td><td>Geometría I</td><td>3</td><td>MAS‑100</td></tr>
    <tr><td><input type="checkbox" class="checkbox"></td><td>3</td><td>MAS‑120</td><td>Matemática Financiera</td><td>3</td><td>CGM‑100</td></tr>
  </tbody>
</table>
<script>
  const cbs = document.querySelectorAll('.checkbox');
  const rows = document.querySelectorAll('#malla tbody tr');
  function guardar(){ localStorage.setItem('malla', JSON.stringify(Array.from(cbs).map(cb=>cb.checked))); }
  function cargar(){
    const arr = JSON.parse(localStorage.getItem('malla'))||[];
    arr.forEach((v,i)=>{ if(cbs[i]){ cbs[i].checked = v; if(v) rows[i+1+Math.floor(i/5)].classList.add('completed'); }});
    actualizar();
  }
  function actualizar(){
    const total = cbs.length;
    const done = Array.from(cbs).filter(cb=>cb.checked).length;
    document.getElementById('progress').textContent = `Progreso: ${Math.round(done/total*100)}%`;
  }
  cbs.forEach((cb,i)=> cb.addEventListener('change',()=>{
    if(cb.checked) rows[i+1+Math.floor(i/5)].classList.add('completed');
    else rows[i+1+Math.floor(i/5)].classList.remove('completed');
    guardar(); actualizar();
  }));
  cargar();
</script>
</body>
</html>


let football = document.getElementById('football');
let field = document.getElementById('field');

field.addEventListener('mousedown', function(e){
  const fieldRect = field.getBoundingClientRect();
  const x = e.clientX - fieldRect.left;
  const y = e.clientY - fieldRect.top;


  const maxX = fieldRect.width - football.clientWidth;
  const maxY = fieldRect.height - football.clientHeight;
  const clampedX = Math.max(0, Math.min(x, maxX));
  const clampedY = Math.max(0, Math.min(y, maxY));


  football.style.left = clampedX + "px";
  football.style.top = clampedY + "px"; 


  football.style.transition = "0.5s ease-in-out";
});
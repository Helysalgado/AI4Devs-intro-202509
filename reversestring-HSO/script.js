function reverseString(str) {
  // Array.from maneja mejor emojis y caracteres especiales que split("")
  return Array.from(str).reverse().join("");
}

const input = document.getElementById("inputString");
const output = document.getElementById("output");
const button = document.getElementById("reverseBtn");

// Actualización en tiempo real
input.addEventListener("input", () => {
  const value = input.value;
  output.textContent = reverseString(value);

  // Mostrar/ocultar botón según longitud > 3 (tras trim)
  if (value.trim().length > 3) {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }
});

// Acción del botón (refuerza el cálculo, aunque ya esté en tiempo real)
button.addEventListener("click", () => {
  output.textContent = reverseString(input.value);

  // pequeño feedback visual
  output.style.background = "rgba(37,99,235,0.08)";
  setTimeout(() => (output.style.background = "transparent"), 200);
});

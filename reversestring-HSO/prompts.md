
Ver: https://chatgpt.com/share/e/68d38844-297c-8013-be70-03ad6e651e78

### 🧠 Prompt para Ingeniería de Requisitos y Desarrollo Guiado 

> **Rol del modelo:** Eres un ingeniero de software con amplia experiencia. Tu tarea es guiar al desarrollador a través de todas las fases de desarrollo de un proyecto de software: especificación de requisitos, análisis, diseño, implementación, documentación y pruebas, validando cada paso antes de continuar. 

> > **Objetivo:** Ayudar al desarrollador a definir, construir e implementar un sistema de software, adaptándose al tipo de proyecto y aplicando buenas prácticas modernas. 

> **Modo de trabajo:** De forma interactiva y paso a paso. En cada fase: 
> - Haces preguntas clave para obtener los detalles necesarios. 
> - Presentas el resultado en formato estructurado tipo markdown. 
> - Pides confirmación del usuario antes de continuar a la siguiente fase. 
> - Sugieres buenas prácticas (DDD, TDD, BDD), explicándolas brevemente si es necesario, pero permitiendo que el desarrollador elija cuáles aplicar. 

--- 

### 👥 Ejemplo de Inicio del Flujo: 1. 

**Introducción:** - “Hola, soy tu ingeniero de software IA. Vamos a construir tu proyecto paso a paso. Comencemos con los requisitos. ¿Puedes describirme brevemente qué tipo de proyecto quieres desarrollar (por ejemplo: API REST, app web, app móvil, sistema interno)?” 

2. **Recopilación de información inicial:** - ¿Cuál es el objetivo principal del sistema? - ¿Quiénes son los usuarios del sistema? - ¿Qué funcionalidades clave debe tener? - ¿Qué tecnologías quieres usar? - ¿Tienes requerimientos no funcionales (seguridad, rendimiento, escalabilidad)? - ¿Deseas aplicar DDD, TDD o BDD? 

3. **Salida esperada (ejemplo de formato):**

```markdown
# Nombre del Proyecto

Descripción general del sistema, usuarios y funcionalidades clave.

## Tech Stack:
- Tecnología 1
- Tecnología 2

## Objetos
- ### Entidad 1:
  - #### Definida por:
    - Campo1 [tipo, editable/no editable, quién lo define]
    - Campo2 [...]

## Buenas prácticas aplicadas:
- [✓] Domain-Driven Design (DDD)
- [ ] Test-Driven Development (TDD)
- [✓] Behavior-Driven Development (BDD)
```

4. **Validación:** - “¿Esta estructura refleja correctamente los requisitos de tu sistema? ¿Deseas modificar, agregar o eliminar algo antes de continuar al análisis?”



-----
## Prompt generado para construir el Reverse String app

# Reverse String – Vanilla JS Demo

## Descripción general
Aplicación web educativa en **HTML + JavaScript** que invierte cadenas en tiempo real.  
Incluye un botón condicional "Reverse ↻" que solo aparece cuando el texto ingresado tiene más de 3 caracteres.

## Usuarios
- Propietario/instructor
- Estudiantes (uso puntual en clase o práctica)

## Alcance (MVP)
- **Entrada de texto** (campo `<input>`).
- **Salida en tiempo real**: la cadena se invierte mientras el usuario escribe.
- **Botón “Reverse” condicional**: visible únicamente si `trim(input).length > 3`.
  - Acción: recalcula la inversión y muestra un feedback visual.
- **Mensajería/estados**: placeholder inicial; limpia/actualiza resultados al borrar.

## No incluido (por ahora)
- Persistencia de datos
- Integraciones externas
- Autenticación o gestión de usuarios
- Frameworks (React, Vue, Angular)

## Reglas/Comportamiento
- La inversión ocurre en cada pulsación de tecla.
- El botón se oculta cuando `trim(input).length <= 3`.
- Los espacios y caracteres especiales también se invierten.
- Ejemplo: `AI4Devs` → `sveD4IA`.

## Criterios de aceptación (BDD-Style)
- **Dado** un input vacío, **entonces** no se muestra el botón y la salida está vacía.
- **Dado** el input `"AI4Devs"`, **cuando** escribo el texto, **entonces** la salida muestra `"sveD4IA"` en tiempo real.
- **Dado** un texto con longitud `> 3`, **entonces** el botón “Reverse” es visible.
- **Dado** un texto con longitud `≤ 3`, **entonces** el botón “Reverse” es oculto.
- **Dado** un texto con emoji `"Hola 👋"`, **entonces** la salida es `"👋 aloH"`.

## UX/UI
- Estilo sencillo, limpio y responsive básico.
- Estructura:
  - Título: “String Reverser”
  - Input de una línea (placeholder: “Hello, welcome to AI4Devs”)
  - Botón “Reverse ↻” (solo cuando aplique)
  - Resultado en tipografía clara bajo el botón

## Tech Stack propuesto
- **Frontend:** HTML5 + JavaScript ES6
- **Estilos:** CSS inline en `index.html`
- **Arquitectura:** archivos planos (`index.html` y `script.js`)

## Requerimientos no funcionales
- Compatible con navegadores modernos (Chrome, Firefox, Edge, Safari)
- Sin dependencias externas
- Código claro y didáctico, con comentarios en `script.js`

## Buenas prácticas aplicadas
- [✓] Simplicidad intencional (KISS)
- [ ] DDD
- [ ] TDD
- [ ] BDD formal (solo criterios de aceptación ligeros)
- [✓] Accesibilidad básica (`label` + `aria-live="polite"`)

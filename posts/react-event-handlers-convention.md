---
title: 'Convención para event handlers en React "onEvent" y "handleEvent"'
description: 'Deja de pasar props como "setState", "fetchThings" o "runSomething" a tus componentes'
date: "2023-07-12T23:00:00.000Z"
tags:
  - react
  - convención
---

Miren este componente **StartButton**:

```tsx
import { MouseEvent } from "react";

export interface StartButtonProps {
  onStart: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function StartButton({ onStart }: StartButtonProps) {
  return <button onClick={onStart}>Start</button>;
}

```

Bien, ahora miren esta otra implementación:

```tsx
export interface StartButtonProps {
  setStatus: (status: "STARTED" | "STOPED") => void;
}

export default function StartButton({ setStatus }: StartButtonProps) {
  return <button onClick={() => setStatus("STARTED")}>Start</button>;
}

```

Digo... **¿La segunda implementación no les deja un mal sabor de boca?**  
Claro, ambos componentes funcionan y ambos van a cumplir con su función.
De ahí nace la siguiente pregunta:

### ¿Porque las props con el prefijo "on" resultan más intuitivas?

Es raro tener que decirlo, pero cuando trabajamos en front-end lo que hacemos es desarrollar una interfaz gráfica para que el usuarios interactúen con nuestra plataforma. Esas interacciones de los usuarios son llamadas **eventos**.  
Una vez incorporado este concepto, la perspectiva del desarrollo cambia. Cada elemento de nuestra pantalla puede ser el **objetivo** de distintas interacciones de nuestros usuarios.

Entonces, ahí está la clave para poder hacer que las props de nuestro componente sean intuitivas, porque como desarrolladores esta perspectiva ya está muy incorporada aunque nosotros no pensemos constantemente en ella.  
Cada elemento del DOM puede producir eventos en nuestra interfaz, y la manera de controlarlo siempre es mediante props como **onClick**, **onChange**, **onFocus**, **onBlur**, etc. Podemos observarlo en las librerías de componentes más utilizadas como Chakra o Material UI.
Mientras más respetemos estas convenciones ya establecidas mas intuitivos van a ser nuestros componentes.

### ¿Por qué el uso de nuestros componentes debería ser intuitivo?

Porque **el mayor reto de un proyecto suele ser el trabajo en equipo**.
Siempre que trabajamos en equipo, vamos a tener que compartir nuestro código con otros desarrolladores, y si bien es cierto que el código se escribe una vez y se lee muchas veces, también es cierto que el código se lee muchas veces por distintas personas. No todas ellas conocerán la historia del proyecto y por qué se tomaron ciertas decisiones, por lo tanto, si queremos que nuestro código sea fácil de leer y entender, debemos hacerlo lo más intuitivo posible.

### ¿Cómo debería pensar mis componentes con esta perspectiva?

Cada uno de nuestros componentes son pedacitos de nuestra interfaz, y cada vez que hagamos uno deberiamos hacernos las siguientes preguntas:

- **¿Cómo va a interactuar el usuario con nuestro componente?**
- **¿Qué eventos se van a generar en nuestro componente?**

Si meditas la pregunta un poco, rápidamente vas a detectar qué eventos pueden ocurrir en tu componente y por lo tanto como deberían llamarse sus props.

Tomando de ejemplo el **StartButton** que vimos, resulta claro que puede ocurrir el evento **start** y que la prop para controlar el evento debería ser **onStart**.

### Convención "handle"

Del análisis anterior deriva una segunda convención. Ya sabemos que las props de mis componente dedicadas a control de eventos deberían llamarse con el prefijo **on**.
Ahora, ¿qué ocurre cuando la lógica que debe ejecutarse al ocurrir el evento tiene varias instrucciones? Por ejemplo:

```tsx
// ...
<StartButton
  onStart={(e) => {
    e.preventDefault();
    setStatus("STARTED");
    startInterval();
  }}
/>
// ...
```

Con sólo un par de lineas de codigo, comienza a resultar molesto tener esa lógica dentro del **jsx**, algunos pueden pensar *-son sólo 3 líneas de código-*. Es verdad, son sólo 3 lineas, pero es muy común que con solo 3 líneas de código en un componente grande, ya sea suficiente como para querer abstraer a una función aparte ese codigo para mantener mi **jsx** más limpio.
De ahí surge la pregunta: **¿Cómo debería llamar a la función que controlara el evento?**.  
Y así como surge el prefijo **handle** y resulta intuitivo ya que es el **controlador** de nuestro evento:

```tsx
// ...
const handleStart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("STARTED");
    startInterval();
}
// ...
<StartButton onStart={handleStart} />
// ...
```

### ¿Confundidos?

Bueno, en este punto es muy común confundir las convenciones y que aparezcan props con el prefijo **handle** o funciones con el prefijo **on**. Es normal cuando aún no tenemos del todo incorporada la convención.
La cuestión es **¿como hago para recordar la convención para intentar que nuestros componentes sean intuitivos?**.
Sólo a modo de guía incorporen las siguientes reglas:

- Casi siempre que un componente reciba una funcion debería llamar a la prop con el prefijo **on**
- Casi siempre que se declaren funciones para pasar por props a un componente deben tener el prefijo **handle**

Son dos reglas sencillas y fáciles de recordar que pueden servir de guía para incorporar las convenciones, pero hay que aclarar que estas reglas **no aplican al 100%** de los casos, existen excepciones.

### Excepciones

Algunos componentes pueden recibir funciones que no son para controlar eventos del componente y estas serían las excepciones a la convención que no deben de tener el prefijo **on** o **handle**, pero estos casos ya resultan bastante menos usuales.
Algunos ejemplos de esto serían props como **formatValue** o **getOptionLabel** que son props que no estarían dedicadas a controlar eventos, sino que son props para formatear valores u obtener información desde otra fuente de datos.

### Conclusión

Si se requiere pasar una función a un componente para que se ejecute a partir de un evento en él mismo, va a ser intuitivo llamar a mi prop con el prefijo **on**, y en el caso de declarar una función para controlar dicho evento desde un componente padre, va a ser intuitivo llamar a dicha función con el prefijo **handle**

### Esto no deja de ser una sugerencia!

Hago este post con fines educativos y porque es mi manera de compartir esos pequeños aprendizajes que uno va acumulando en su camino en el mundo del desarrollo y que muchas veces no se aprenden en cursos, sino con la experiencia.

Estos textos así como el de cualquier libro o documentación sobre desarrollo, pueden ser utilizados como argumentos en acaloradas discusiones, **por favor no hagan esto**.

Esto debería ser tomado solo como una sugerencia y no como un conocimiento rígido y dogmático.

Y recuerden que el **El mayor reto de un proyecto suele ser el trabajo en equipo**.

#### Agradecimientos:

Muchas gracias [Tomas Mercado](https://www.tomas-mercado.dev/es) siempre haciéndome la segunda 😉

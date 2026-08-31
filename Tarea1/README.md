# Tarea 1 — Greedy

Laboratorio de la caja / vuelto: dos problemas donde la decisión local
(qué billete dar, qué galleta asignar) nunca se deshace en pasos
posteriores.

## Ejercicios

| Problema | Código | Evidencia |
|---|---|---|
| [860. Lemonade Change](https://leetcode.com/problems/lemonade-change/) | [`lemonade-change/lemonade-change.js`](./lemonade-change/lemonade-change.js) | [`evidencias/lemonade-change-accepted.png`](./evidencias/lemonade-change-accepted.png) |
| [455. Assign Cookies](https://leetcode.com/problems/assign-cookies/) | [`assign-cookies/assign-cookies.js`](./assign-cookies/assign-cookies.js) | [`evidencias/assign-cookies-accepted.png`](./evidencias/assign-cookies-accepted.png) |

---

### 860. Lemonade Change

**Enfoque:** Greedy de una sola pasada.

En cada pago se decide el cambio localmente, sin reconsiderar ventas anteriores:
- Pago de 5 → no se da cambio, solo se acumula.
- Pago de 10 → única opción posible: devolver un billete de 5.
- Pago de 20 → se prefiere `10 + 5` sobre `5 + 5 + 5`, porque el billete
  de 5 es el recurso más escaso (sirve para dar cambio de 10 *y* de 20),
  mientras que el de 10 solo sirve para dar cambio de 20.

Los billetes de 20 nunca se cuentan como recurso de cambio, así que no
hace falta rastrearlos.

**Complejidad**
- Tiempo: `O(n)` — un solo recorrido de `bills`.
- Espacio: `O(1)` — solo dos contadores (`five`, `ten`).

---

### 455. Assign Cookies

**Enfoque:** Greedy con dos punteros sobre arreglos ordenados.

Se ordenan tanto los factores de codicia (`g`, tamaño `n`) como los
tamaños de galleta (`s`, tamaño `m`) de menor a mayor. Se recorre con
dos punteros: en cada paso se compara al niño **menos exigente** que
falta por satisfacer contra la **galleta más pequeña disponible**.

- Si esa galleta le alcanza (`s[cookie] >= g[child]`), es la asignación
  óptima: dársela a un niño más exigente sería desperdiciarla, así que
  se asigna y se avanza al siguiente niño.
- Si no le alcanza, esa galleta tampoco le sirve a ningún niño
  restante (todos piden igual o más), así que se descarta.
- El puntero de galletas nunca retrocede: cada galleta se evalúa una
  sola vez.

**Complejidad**
- Tiempo: `O(n log n + m log m)` — dominado por ordenar `g` (tamaño `n`)
  y `s` (tamaño `m`); la pasada con dos punteros es `O(n + m)`.
- Espacio: `O(1)` adicional (sin contar lo que use internamente el
  algoritmo de ordenamiento).

---

## Evidencias

Se sube evidencias en imagenes y el código en texto.


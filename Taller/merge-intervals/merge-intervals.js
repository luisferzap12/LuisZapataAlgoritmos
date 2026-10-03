/**
 * 56. Merge Intervals
 * https://leetcode.com/problems/merge-intervals/
 *
 * Familia: ordenamiento.
 * Se ordena por el extremo izquierdo (la clave) y luego una sola
 * pasada fusiona lo que se solapa, manteniendo un intervalo "abierto"
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];

        if (current[0] <= last[1]) {
            // se solapan o se tocan: ensanchar el intervalo abierto
            last[1] = Math.max(last[1], current[1]);
        } else {
            // no se solapa: cerrar el actual y abrir uno nuevo
            result.push(current);
        }
    }

    return result;
};

module.exports = merge;

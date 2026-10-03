/**
 * 435. Non-overlapping Intervals
 * https://leetcode.com/problems/non-overlapping-intervals/
 *
 * Familia: greedy (selección de actividades, al revés).
 * Criterio local: ordenar por el extremo derecho (`end`) y quedarse
 * siempre con el intervalo que termina antes entre los candidatos
 * que aún caben. Maximizar cuántos caben = minimizar cuántos se borran
 *
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]); // clave: extremo derecho

    let kept = 1;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        if (start >= lastEnd) {
            // no se solapa con el último aceptado: se queda
            kept++;
            lastEnd = end;
        }
        // si start < lastEnd, se solapa: este es el que se "borra"
    }

    return intervals.length - kept;
};

module.exports = eraseOverlapIntervals;

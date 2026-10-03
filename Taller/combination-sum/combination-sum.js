/**
 * 39. Combination Sum
 * https://leetcode.com/problems/combination-sum/
 *
 * Familia: backtracking.
 * Estado de la búsqueda: índice desde el que se puede elegir,
 * cuánto falta por sumar (`remaining`) y la combinación actual.
 * En cada llamada se ELIGE un candidato;
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const current = [];

    const backtrack = (start, remaining) => {
        if (remaining === 0) {
            result.push([...current]); // combinación válida: copiarla
            return;
        }
        if (remaining < 0) return; // poda: nos pasamos del target

        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]); // elegir
            // se pasa `i` (no `i + 1`): el mismo candidato se puede reutilizar;
            // nunca se retrocede a índices menores, así se evitan permutaciones repetidas
            backtrack(i, remaining - candidates[i]);
            current.pop(); // deshacer (backtrack)
        }
    };

    backtrack(0, target);
    return result;
};

module.exports = combinationSum;

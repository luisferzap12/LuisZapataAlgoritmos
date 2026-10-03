/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 *
 * Familia: grafos.
 * Modelo: cada celda '1' es un vértice; hay arista a la vecina
 * ortogonal (arriba/abajo/izq/der) que también sea '1'. No dirigido.
 * Contar islas = contar componentes conexas, vía DFS que "hunde"
 * (marca como visitada) toda la componente al encontrarla.
 * 
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const sink = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '1') {
            return;
        }
        grid[r][c] = '0'; // marcar como visitada (hundirla)
        sink(r + 1, c);
        sink(r - 1, c);
        sink(r, c + 1);
        sink(r, c - 1);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;   // nueva componente encontrada
                sink(r, c); // marcar toda la isla para no recontarla
            }
        }
    }

    return count;
};

module.exports = numIslands;

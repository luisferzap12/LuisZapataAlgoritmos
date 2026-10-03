/**
 * 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Familia: programación dinámica.
 * Estado: dp[i][j] = longitud de la LCS entre text1[0..i) y text2[0..j).
 * Base: dp[0][j] = dp[i][0] = 0 (un prefijo vacío no tiene LCS)
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;

    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]; // coinciden: extender la diagonal
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // mejor de ignorar uno u otro
            }
        }
    }

    return dp[n][m];
};

module.exports = longestCommonSubsequence;

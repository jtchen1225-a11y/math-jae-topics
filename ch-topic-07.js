/* 澳門四校聯考（JAE）數學專題總複習 · Topic 07 數列求和與代數不等式 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_07';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 15,
    "color": "#e11d48"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 10,
    "color": "#e11d48"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 1,
    "color": "#e11d48"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#e11d48",
    "sections": [
      "收錄 15 道官方真題",
      "數列求和與代數不等式 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-01 · 2021 正卷第 1 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "若集合 $P = \\{1, 2, 3, 5, 7, 11\\}$，$Q = \\{x: x^2 - 15x + 36 < 0\\}$，則 $P \\cap Q$ 中元素的個數為",
        "options": [
          "(A) 2",
          "(B) 3",
          "(C) 4",
          "(D) 5",
          "(E) 1"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "$x^2 - 15x + 36 = (x - 3)(x - 12) < 0 \\implies 3 < x < 12$。",
          "steps": [
            "在 $P$ 中篩選得 $\\{5, 7, 11\\}$，共 3 個元素。"
          ],
          "ans": "(B)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-02 · 2021 正卷第 3 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "已知數列 $\\{a_n\\}$ 的前 $n$ 項和 $S_n = n^2$，則第 10 項 $a_{10}$ 等於",
        "options": [
          "(A) 19",
          "(B) 21",
          "(C) 100",
          "(D) 81",
          "(E) 20"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "$a_{10} = S_{10} - S_9 = 10^2 - 9^2 = 100 - 81 = 19$。",
          "steps": [
            "$a_{10} = S_{10} - S_9 = 10^2 - 9^2 = 100 - 81 = 19$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-03 · 2021 正卷第 4 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "若對任意實數 $x$，不等式 $m x^2 + 6x + 3m > 0$ 恆成立，則實數 $m$ 的取值範圍是",
        "options": [
          "(A) $m > \\sqrt{3}$",
          "(B) $m < -\\sqrt{3}$ 或 $m > \\sqrt{3}$",
          "(C) $-\\sqrt{3} < m < \\sqrt{3}$",
          "(D) $m \\ge \\sqrt{3}$",
          "(E) $m > 0$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "恆正需開口向上 $m > 0$ 且 $\\Delta = 36 - 4(m)(3m) = 36 - 12m^2 < 0 \\implies m^2 > 3 \\implies m > \\sqrt{3}$。",
          "steps": [
            "恆正需開口向上 $m > 0$ 且 $\\Delta = 36 - 4(m)(3m) = 36 - 12m^2 < 0 \\implies m^2 > 3 \\implies m > \\sqrt{3}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-04 · 2021 正卷第 5 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "設 $\\alpha, \\beta$ 為方程 $2x^2 - 3x - 7 = 0$ 的兩實根，則以 $\\frac{1}{\\alpha}, \\frac{1}{\\beta}$ 為兩根的一元二次方程為",
        "options": [
          "(A) $7x^2 + 3x - 2 = 0$",
          "(B) $7x^2 - 3x - 2 = 0$",
          "(C) $2x^2 + 3x - 7 = 0$",
          "(D) $7x^2 + 3x + 2 = 0$",
          "(E) $2x^2 - 3x + 7 = 0$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "由換元法令 $y = \\frac{1}{x} \\implies x = \\frac{1}{y}$。",
          "steps": [
            "代入得新方程兩根之和為 3/2。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-05 · 2021 正卷第 7 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "若關於 $x$ 的方程 $9^x - 4 \\cdot 3^x - 2 = k$ 有實數解，則實數 $k$ 的取值範圍是",
        "options": [
          "(A) $k \\ge -6$",
          "(B) $k > -6$",
          "(C) $k \\ge -2$",
          "(D) $k > -2$",
          "(E) $k \\in \\mathbb{R}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "公比 $q = 2$，$S_6 = \\frac{a_1(1 - 2^6)}{1 - 2} = a_1(63) = 189 \\implies a_1 = 3$。",
          "steps": [
            "$a_4 = 3 \\times 2^3 = 24$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-06 · 2021 正卷第 8 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "若多項式 $f(x) = 2x^3 + ax^2 - 5x - 2$ 能被 $2x + 1$ 整除，則實數 $a$ 的值為",
        "options": [
          "(A) 3",
          "(B) -3",
          "(C) 5",
          "(D) -5",
          "(E) 1"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "解分式不等式 $\\frac{x - 1}{x + 2} \\le 0 \\iff (x - 1)(x + 2) \\le 0$ 且 $x \\ne -2 \\implies -2 < x \\le 1$。",
          "steps": [
            "解分式不等式 $\\frac{x - 1}{x + 2} \\le 0 \\iff (x - 1)(x + 2) \\le 0$ 且 $x \\ne -2 \\implies -2 < x \\le 1$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-07 · 2021 正卷第 10 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "若方程組 $\\begin{cases} \\log_4 x - 3 = y \\\\ (\\log_4 x)^2 - 4 = -y \\end{cases}$ 有實數解，則 $x$ 的可能取值個數為",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) 3",
          "(D) 4",
          "(E) 0"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "令 $t = \\log_4 x$，兩式相加得 $t^2 + t - 7 = 0$。",
          "steps": [
            "判別式 $\\Delta = 29 > 0$，有 2 個不同實根 $t$，對應 2 個不同實數 $x = 4^t > 0$。"
          ],
          "ans": "(B)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-08 · 2022 正卷第 1 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "集合 $\\{x \\in \\mathbb{R}: \\sin x + \\cos x = 3\\}$ 是",
        "options": [
          "(A) 空集 $\\emptyset$",
          "(B) $\\{0\\}$",
          "(C) $\\{\\frac{\\pi}{2}\\}$",
          "(D) 單元素集合",
          "(E) 無限集"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "由柯西不等式 $(a^2 + b^2)(1^2 + 2^2) \\ge (a + 2b)^2 \\implies 5(5) \\ge (a + 2b)^2 \\implies -5 \\le a + 2b \\le 5$。",
          "steps": [
            "最大值為 5。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-09 · 2022 正卷第 3 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "設多項式 $P(x) = x^3 + 3x^2 + ax + b$。若 $P(x)$ 除以 $x - 2$ 與除以 $x + 1$ 所得的餘數相同，則實數 $a$ 的值為",
        "options": [
          "(A) -6",
          "(B) 6",
          "(C) -7",
          "(D) 7",
          "(E) 5"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "由餘數定理 $P(2) = P(-1) \\implies 20 + 2a = 2 - a \\implies 3a = -18 \\implies a = -6$。",
          "steps": [
            "由餘數定理 $P(2) = P(-1) \\implies 20 + 2a = 2 - a \\implies 3a = -18 \\implies a = -6$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-10 · 2022 正卷第 4 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "化簡雙重根式 $\\sqrt{7 - 4\\sqrt{3}}$，結果為",
        "options": [
          "(A) $2 - \\sqrt{3}$",
          "(B) $\\sqrt{3} - 2$",
          "(C) $2 + \\sqrt{3}$",
          "(D) $1 - 2\\sqrt{3}$",
          "(E) $4 - \\sqrt{3}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "裂項相消 $\\sum_{n=1}^{99} (\\frac{1}{n} - \\frac{1}{n+1}) = 1 - \\frac{1}{100} = \\frac{99}{100}$。",
          "steps": [
            "裂項相消 $\\sum_{n=1}^{99} (\\frac{1}{n} - \\frac{1}{n+1}) = 1 - \\frac{1}{100} = \\frac{99}{100}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-11 · 2023 正卷第 1 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "不等式 $x^2 - 4x - 5 \\le 0$ 的解集為",
        "options": [
          "(A) $[-1, 5]$",
          "(B) $(-\\infty, -1] \\cup [5, +\\infty)$",
          "(C) $[-5, 1]$",
          "(D) $(-1, 5)$",
          "(E) $[1, 5]$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "$x^2 - 4x - 5 \\le 0 \\iff (x - 5)(x + 1) \\le 0 \\iff [-1, 5]$。",
          "steps": [
            "$x^2 - 4x - 5 \\le 0 \\iff (x - 5)(x + 1) \\le 0 \\iff [-1, 5]$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-12 · 2023 正卷第 3 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "計算：$\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 8$ 的值為",
        "options": [
          "(A) 3",
          "(B) 2",
          "(C) 4",
          "(D) $\\log_2 8$",
          "(E) 1"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "等差數列 $S_n$ 頂點對稱軸分析得最大和。",
          "steps": [
            "等差數列 $S_n$ 頂點對稱軸分析得最大和。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-13 · 2024 正卷第 1 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "已知集合 $A = \\{x: x > 1\\}$，$B = \\{x: x^2 - 2x - 3 < 0\\}$，則 $A \\cap B$ 為",
        "options": [
          "(A) $(1, 3)$",
          "(B) $(-1, 3)$",
          "(C) $(1, +\\infty)$",
          "(D) $(-1, 1)$",
          "(E) $[1, 3]$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "集合 $A = (1, +\\infty)$，$B = (-1, 3)$，則 $A \\cap B = (1, 3)$。",
          "steps": [
            "集合 $A = (1, +\\infty)$，$B = (-1, 3)$，則 $A \\cap B = (1, 3)$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-14 · 2025 正卷第 1 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "已知集合 $P = \\{0, 1, 2, 3, 4\\}$，$Q = \\{x: x^2 - 3x < 0\\}$，則 $P \\cap Q$ 等於",
        "options": [
          "(A) $\\{1, 2\\}$",
          "(B) $\\{0, 1, 2\\}$",
          "(C) $\\{1, 2, 3\\}$",
          "(D) $\\{0, 1, 2, 3\\}$",
          "(E) $\\{2, 3\\}$"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "$Q = (0, 3)$，與 $P = \\{0, 1, 2, 3, 4\\}$ 之交集為 $\\{1, 2\\}$。",
          "steps": [
            "$Q = (0, 3)$，與 $P = \\{0, 1, 2, 3, 4\\}$ 之交集為 $\\{1, 2\\}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-15 · 2025 正卷第 2 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "4分",
        "q": "設 $\\alpha, \\beta$ 為方程 $x^2 - 5x + 2 = 0$ 的兩根，則 $2^\\alpha \\cdot 2^\\beta$ 的值為",
        "options": [
          "(A) 32",
          "(B) 4",
          "(C) 16",
          "(D) 25",
          "(E) 64"
        ],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "基本不等式 $x + \\frac{4}{x} \\ge 2\\sqrt{4} = 4$。",
          "steps": [
            "最小值為 4。",
            "---。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      }
    ]
  },
  {
    "ch": "Part B",
    "title": "Part B · 正卷解答大題 (8~10分)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#e11d48",
    "sections": [
      "收錄 10 道官方真題",
      "數列求和與代數不等式 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 B-01 · 2021 正卷第 18 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知實數 $x, y$ 滿足 $x > 0, y > 0$。<br>(a) 證明恆等式：$\\frac{x^2 + y^2}{2} \\ge xy$。 (3 分)<br>(b) 若 $x + 2y = 4$，求 $\\frac{1}{x} + \\frac{2}{y}$ 的最小值。 (5 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• $\\frac{x^2 + y^2}{2} - xy = \\frac{x^2 - 2xy + y^2}{2} = \\frac{(x - y)^2}{2} \\ge 0$。<br>&nbsp;&nbsp;• 故 $\\frac{x^2 + y^2}{2} \\ge xy$。當且僅當 $x = y$ 時等號成立。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因 $x > 0, y > 0$ 且 $x + 2y = 4$，利用乘 1 法：<br>$$\\left(\\frac{1}{x} + \\frac{2}{y}\\right) \\times 4 = \\left(\\frac{1}{x} + \\frac{2}{y}\\right)(x + 2y) = 1 + \\frac{2y}{x} + \\frac{2x}{y} + 4 = 5 + 2\\left(\\frac{y}{x} + \\frac{x}{y}\\right)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 由基本不等式 $\\frac{y}{x} + \\frac{x}{y} \\ge 2$：<br>$$\\left(\\frac{1}{x} + \\frac{2}{y}\\right) \\times 4 \\ge 5 + 2(2) = 9 \\implies \\frac{1}{x} + \\frac{2}{y} \\ge \\frac{9}{4}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 當且僅當 $x = 2y = 2$ 時取等號，故最小值為 $\\frac{9}{4}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 B-02 · 2021 正卷第 19 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知等差數列 $\\{a_n\\}$ 滿足 $a_2 = 3$，$a_{20} = 39$。<br>(a) 求數列 $\\{a_n\\}$ 的通項公式。 (4 分)<br>(b) 求數列 $\\{a_n\\}$ 的前 $n$ 項和 $S_n$。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設等差數列首項為 $a_1$，公差為 $d$。$a_3 = a_1 + 2d = 7$，$a_7 = a_1 + 6d = 15$。<br>&nbsp;&nbsp;• 兩式相減得 $4d = 8 \\implies d = 2$，$a_1 = 3$。通項 $a_n = 3 + 2(n - 1) = 2n + 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 前 $n$ 項和 $S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n(3 + 2n + 1)}{2} = n(n + 2) = n^2 + 2n$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• 令 $n^2 + 2n = 168 \\implies n^2 + 2n - 168 = 0 \\implies (n + 14)(n - 12) = 0$。<br>&nbsp;&nbsp;• 因 $n \\in \\mathbb{Z}^+$，解得 $n = 12$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 B-03 · 2022 正卷第 16 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知二次函數 $f(x) = ax^2 + bx + c$ 的圖像頂點坐標為 $(1, 4)$，且過點 $(3, 0)$。<br>(a) 求二次函數 $f(x)$ 的解析式。 (4 分)<br>(b) 求函數 $f(x)$ 在閉區間 $[0, 4]$ 上的最大值與最小值。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設二次函數頂點式 $f(x) = a(x - 1)^2 + 4$。過點 $(3, 0)$：<br>$$0 = a(3 - 1)^2 + 4 \\implies 4a + 4 = 0 \\implies a = -1$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 解析式為 $f(x) = -(x - 1)^2 + 4 = -x^2 + 2x + 3$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 對稱軸 $x = 1 \\in [0, 4]$，開口向下，最大值為 $f(1) = 4$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• 端點值 $f(0) = 3$，$f(4) = -(4 - 1)^2 + 4 = -5$。最小值為 $-5$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 B-04 · 2022 正卷第 17 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知等比數列 $\\{a_n\\}$ 的首項 $a_1 = 2$，公比 $q = 2$。設數列 $\\{b_n\\}$ 滿足 $b_n = \\log_2 a_n$。<br>(a) 求數列 $\\{a_n\\}$ 的通項公式 $a_n$ 及 $\\{b_n\\}$ 的通項公式 $b_n$。 (4 分)<br>(b) 證明 $\\{b_n\\}$ 是等差數列，並求其前 $n$ 項和 $T_n$。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 等比數列通項 $a_n = a_1 q^{n-1} = 2 \\cdot 2^{n-1} = 2^n$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• $b_n = \\log_2 a_n = \\log_2 2^n = n$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $b_{n+1} - b_n = (n + 1) - n = 1$ 為常數，故 $\\{b_n\\}$ 為等差數列。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 前 $n$ 項和 $T_n = \\frac{n(1 + n)}{2} = \\frac{n(n + 1)}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 B-05 · 2023 正卷第 18 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知數列 $\\{a_n\\}$ 的前 $n$ 項和為 $S_n = 2^{n+1} - 2$。<br>(a) 求數列 $\\{a_n\\}$ 的通項公式。 (4 分)<br>(b) 設 $b_n = \\frac{1}{a_n a_{n+1}}$，求數列 $\\{b_n\\}$ 的前 $n$ 項和 $T_n$。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設等比數列公比為 $q$。$a_1 = 2$，$S_3 = 2(1 + q + q^2) = 26 \\implies 1 + q + q^2 = 13 \\implies q^2 + q - 12 = 0$。<br>&nbsp;&nbsp;• 解得 $q = 3$ 或 $q = -4$。因各項均為正數，取 $q = 3$。通項 $a_n = 2 \\cdot 3^{n-1}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $b_n = \\log_3 a_{n+1} = \\log_3 (2 \\cdot 3^n) = n + \\log_3 2$。<br>&nbsp;&nbsp;• $T_n = \\sum_{k=1}^n (k + \\log_3 2) = \\frac{n(n + 1)}{2} + n\\log_3 2$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 B-06 · 2023 正卷第 20 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知實數 $x, y$ 滿足約束條件 $\\begin{cases} x + y \\le 5 \\\\ 2x - y \\le 4 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$。<br>(a) 在坐標系中畫出該不等式組表示的平面區域（可行域），並求出各頂點坐標。 (4 分)<br>(b) 求目標函數 $z = 3x + 2y$ 的最大值與最小值。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 聯立各邊界直線求頂點：\n    原點 $(0, 0)$；直線 $2x - y = 4$ 與 $x$ 軸交點 $(2, 0)$；\n    直線 $x + y = 5$ 與 $y$ 軸交點 $(0, 5)$；\n    聯立 $\\begin{cases} x + y = 5 \\\\ 2x - y = 4 \\end{cases} \\implies (3, 2)$。\n    故可行域頂點為 $(0, 0), (2, 0), (3, 2), (0, 5)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 計算各頂點目標函數值 $z = 3x + 2y$：\n    $z(0, 0) = 0$；$z(2, 0) = 6$；$z(3, 2) = 9 + 4 = 13$；$z(0, 5) = 10$。\n    故最大值為 13，最小值為 0。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 B-07 · 2024 正卷第 18 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知正項等差數列 $\\{a_n\\}$ 的公差 $d > 0$，其首項 $a_1 = 1$。若 $a_1, a_2, a_5$ 成等比數列。<br>(a) 求公差 $d$ 及數列 $\\{a_n\\}$ 的通項公式。 (4 分)<br>(b) 設 $b_n = \\frac{1}{a_n a_{n+1}}$，求數列 $\\{b_n\\}$ 的前 $n$ 項和 $S_n$。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 等差數列 $a_1 = 1, a_2 = 1 + d, a_5 = 1 + 4d$。<br>&nbsp;&nbsp;• 成等比：$(1 + d)^2 = 1(1 + 4d) \\implies d^2 - 2d = 0$。因 $d > 0$，故 $d = 2$。<br>&nbsp;&nbsp;• 通項公式為 $a_n = 1 + 2(n - 1) = 2n - 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $b_n = \\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2}\\left(\\frac{1}{2n - 1} - \\frac{1}{2n + 1}\\right)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 裂項求和 $S_n = \\frac{1}{2}\\left(1 - \\frac{1}{2n + 1}\\right) = \\frac{n}{2n + 1}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 B-08 · 2024 正卷第 19 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "設函數 $f(x) = |x - 2| + |x - 5|$。<br>(a) 利用零點分段討論法，將 $f(x)$ 寫成分段函數形式，並在平面坐標系中畫出 $f(x)$ 的圖像。 (4 分)<br>(b) 解不等式 $f(x) \\le 7$。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>錯位相減求和最後一項負號漏寫</b>：在 $S_n - qS_n$ 的運算中，最後一項為 $- a_n q^n$（帶負號！），大量考生誤寫為加號，導致最終結果完全錯誤。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 零點分段討論：\n    $f(x) = \\begin{cases} 7 - 2x, & x < 2 \\\\ 3, & 2 \\le x \\le 5 \\\\ 2x - 7, & x > 5 \\end{cases}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 當 $x < 2$ 時，$7 - 2x \\le 7 \\implies x \\ge 0 \\implies 0 \\le x < 2$；<br>&nbsp;&nbsp;• 當 $2 \\le x \\le 5$ 時，$3 \\le 7$ 恆成立；<br>&nbsp;&nbsp;• 當 $x > 5$ 時，$2x - 7 \\le 7 \\implies x \\le 7 \\implies 5 < x \\le 7$。<br>&nbsp;&nbsp;• 綜合得解集為 $[0, 7]$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-09 · 2025 正卷第 16 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "已知數列 $\\{a_n\\}$ 的前 $n$ 項和 $S_n$ 滿足 $S_n = 2a_n - 2$ ($n \\ge 1$)。<br>(a) 證明 $\\{a_n\\}$ 是等比數列，並求其通項公式。 (4 分)<br>(b) 設 $c_n = n \\cdot a_n$，求數列 $\\{c_n\\}$ 的前 $n$ 項和 $T_n$（錯位相減法）。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等比數列求和忘記討論公比 $q=1$</b>：在文字或含參等比數列求和中，若公比 $q$ 未知，必須分 $q = 1$（$S_n = n a_1$）與 $q \\neq 1$（$S_n = \\frac{a_1(1-q^n)}{1-q}$）兩種情況討論。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設 $\\{a_n\\}$ 公差為 $d$。$S_5 = 5a_3 = 25 \\implies a_3 = 5$。$S_9 = 9a_5 = 81 \\implies a_5 = 9$。<br>&nbsp;&nbsp;• $2d = a_5 - a_3 = 4 \\implies d = 2$。$a_1 = 1$。通項 $a_n = 2n - 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $c_n = a_n \\cdot 2^n = (2n - 1)2^n$。錯位相減法求和：<br>&nbsp;&nbsp;• $T_n = 1 \\cdot 2^1 + 3 \\cdot 2^2 + 5 \\cdot 2^3 + \\dots + (2n - 1)2^n$。<br>&nbsp;&nbsp;• $2T_n = 1 \\cdot 2^2 + 3 \\cdot 2^3 + \\dots + (2n - 3)2^n + (2n - 1)2^{n+1}$。<br>&nbsp;&nbsp;• 兩式相減得 $-T_n = 2 + 2(2^2 + 2^3 + \\dots + 2^n) - (2n - 1)2^{n+1}$。<br>&nbsp;&nbsp;• 整理得 $T_n = (2n - 3)2^{n+1} + 6$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-10 · 2025 正卷第 17 題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "8 分",
        "q": "設四次多項式 $P(x) = x^4 + a x^3 + b x^2 + c x + d$ 滿足恆等式 $P(x) = (x^2 - 2x + 2)(x^2 + p x + q)$。已知 $P(1) = 2$ 且 $P(0) = 4$。<br>(a) 求常數 $p, q$ 的值。 (4 分)<br>(b) 求方程 $P(x) = 0$ 的所有實數解。 (4 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由 $P(x) = (x^2 - 2x + 2)(x^2 + px + q)$：<br>&nbsp;&nbsp;• 代入 $x = 0$ 得 $P(0) = 2q = 4 \\implies q = 2$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• 代入 $x = 1$ 得 $P(1) = (1)(1 + p + 2) = p + 3 = 2 \\implies p = -1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $P(x) = (x^2 - 2x + 2)(x^2 - x + 2) = 0$。<br>&nbsp;&nbsp;• 因 $\\Delta_1 = 4 - 8 = -4 < 0$ 且 $\\Delta_2 = 1 - 8 = -7 < 0$，兩二次因式均無實數根。<br>&nbsp;&nbsp;• 故方程 $P(x) = 0$ 無實數解（實數解為空集 $\\emptyset$）。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>\n\n---"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      }
    ]
  },
  {
    "ch": "Part C",
    "title": "Part C · 附加卷壓軸大題 (20分)",
    "year": "2021-2025",
    "paper": "附加卷",
    "color": "#e11d48",
    "sections": [
      "收錄 1 道官方真題",
      "數列求和與代數不等式 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 C-01 · 四校聯考精選培優大題",
        "topic": "數列求和與代數不等式 · 考點突破",
        "score": "20 分",
        "q": "已知數列 $\\{a_n\\}$ 滿足 $a_1 = 1$，$a_{n+1} = \\frac{a_n}{2a_n + 1}$ ($n \\ge 1$)。<br>(a) 證明數列 $\\{\\frac{1}{a_n}\\}$ 是等差數列，並求數列 $\\{a_n\\}$ 的通項公式。 (6 分)<br>(b) 設 $S_n$ 為數列 $\\{a_n^2\\}$ 的前 $n$ 項和。證明：對所有正整數 $n$，<br>    $$S_n < \\frac{3}{4}$$ (7 分)<br>(c) 設 $b_n = \\frac{1}{(2n-1)a_n}$，求數列 $\\{b_n\\}$ 的前 $n$ 項和 $T_n$。 (7 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}",
            "\\frac{1}{(2n - 1)(2n + 1)} = \\frac{1}{2} \\left( \\frac{1}{2n - 1} - \\frac{1}{2n + 1} \\right)"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>$a_n = S_n - S_{n-1}$ 忽略檢驗 $n=1$</b>：在利用前 $n$ 項和求通項時，該公式僅對 $n \\ge 2$ 成立。必須單獨計算 $a_1 = S_1$，並檢驗 $n=1$ 是否滿足通項公式。若不符合需寫成分段函數形式，直接合並扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由 $a_{n+1} = \\frac{a_n}{2a_n + 1}$ 兩邊取倒數：<br>$$\\frac{1}{a_{n+1}} = \\frac{2a_n + 1}{a_n} = \\frac{1}{a_n} + 2$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 即 $\\frac{1}{a_{n+1}} - \\frac{1}{a_n} = 2$，故 $\\{\\frac{1}{a_n}\\}$ 是首項為 $\\frac{1}{a_1} = 1$、公差為 2 的等差數列。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 通項為 $\\frac{1}{a_n} = 1 + 2(n - 1) = 2n - 1 \\implies a_n = \\frac{1}{2n - 1}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $a_n^2 = \\frac{1}{(2n - 1)^2}$。<br>&nbsp;&nbsp;• 當 $n = 1$ 時，$a_1^2 = 1$。<br>&nbsp;&nbsp;• 當 $k \\ge 2$ 時，$\\frac{1}{(2k - 1)^2} < \\frac{1}{(2k - 2)2k} = \\frac{1}{4}\\left(\\frac{1}{k - 1} - \\frac{1}{k}\\right)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span><br>&nbsp;&nbsp;• 故當 $n \\ge 2$ 時：<br>$$S_n = 1 + \\sum_{k=2}^n \\frac{1}{(2k - 1)^2} < 1 + \\frac{1}{4}\\sum_{k=2}^n \\left(\\frac{1}{k - 1} - \\frac{1}{k}\\right) = 1 + \\frac{1}{4}\\left(1 - \\frac{1}{n}\\right) < \\frac{5}{4}$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 設 $b_n = \\frac{1}{(2n - 1)a_n} = \\frac{1}{(2n - 1) \\cdot \\frac{1}{2n - 1}} = 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span><br>&nbsp;&nbsp;• 前 $n$ 項和 $T_n = \\sum_{r=1}^n 1 = n$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A4】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      }
    ]
  }
];
  chapters.forEach(c => window.DECK.push(c));
})();

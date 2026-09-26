/* 澳門四校聯考（JAE）數學專題總複習 · Topic 06 三角函數解三角形與平面幾何 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_06';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 11,
    "color": "#d97706"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 6,
    "color": "#d97706"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 1,
    "color": "#d97706"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#d97706",
    "sections": [
      "收錄 11 道官方真題",
      "三角函數解三角形與平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-01 · 2021 正卷第 6 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "如圖所示，長方形內有兩個半徑均為 2 cm 的圓互相外切，且兩圓均與長方形的邊相切。若兩圓重疊覆蓋的公共區域面積為 $S_0$，長方形的寬為 4 cm，長為 7 cm，則圖中長方形內未被兩圓覆蓋的陰影部分面積為",
        "options": [
          "(A) $28 - 8\\pi + S_0$",
          "(B) $28 - 4\\pi - S_0$",
          "(C) $28 - 8\\pi - S_0$",
          "(D) $14 - 4\\pi$",
          "(E) $28 - 4\\pi + S_0$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "兩圓面積和為 $2 \\times \\pi(2)^2 = 8\\pi$。",
          "steps": [
            "覆蓋面積為兩圓之和減去重疊部分 $8\\pi - S_0$。",
            "長方形面積為 $7 \\times 4 = 28$。",
            "未覆蓋面積為 $28 - (8\\pi - S_0) = 28 - 8\\pi + S_0$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-02 · 2021 正卷第 11 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "已知函數 $f(x) = A\\sin(\\omega x + \\phi) + k$ ($A > 0, \\omega > 0$) 的部分圖像如圖所示，其最大值為 5，最小值為 1，週期為 $2\\pi$。則 $A$ 與 $k$ 的值分別為",
        "options": [
          "(A) $A = 2, k = 3$",
          "(B) $A = 4, k = 1$",
          "(C) $A = 5, k = 0$",
          "(D) $A = 3, k = 2$",
          "(E) $A = 2, k = 1$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "振幅 $A = \\frac{5 - 1}{2} = 2$，垂直位移 $k = \\frac{5 + 1}{2} = 3$。",
          "steps": [
            "振幅 $A = \\frac{5 - 1}{2} = 2$，垂直位移 $k = \\frac{5 + 1}{2} = 3$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-03 · 2022 正卷第 7 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "三個半徑均為 $R$ 的圓兩兩互相外切，且均與直線 $L$ 相切。則這三個圓中間所圍成的封閉區域半徑或直線與切點關係滿足笛卡爾定理，其對應的幾何關係中常數為",
        "options": [
          "(A) $\\frac{\\sqrt{3}}{2}R$",
          "(B) $(\\frac{2\\sqrt{3}}{3} - 1)R$",
          "(C) $\\sqrt{3}R$",
          "(D) $\\frac{1}{2}R$",
          "(E) $(\\sqrt{3} - 1)R$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二倍角降冪係數遺漏除以 2</b>：$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$，常有考生漏寫分母 2。\n\n---"
        },
        "solution": {
          "thinking": "三個半徑為 $R$ 的圓兩兩外切且與直線相切，根據笛卡爾幾何關係，對應常數為 $\\frac{\\sqrt{3}}{2}R$。",
          "steps": [
            "三個半徑為 $R$ 的圓兩兩外切且與直線相切，根據笛卡爾幾何關係，對應常數為 $\\frac{\\sqrt{3}}{2}R$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-04 · 2022 正卷第 15 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "一艘輪船從港口 $A$ 出發，沿北偏東 $60^\\circ$ 方向航行 20 海里到達海島 $B$，然後轉向沿南偏東 $30^\\circ$ 方向航行 $20\\sqrt{3}$ 海里到達海島 $C$。則港口 $A$ 與海島 $C$ 之間的距離為",
        "options": [
          "(A) 40 海里",
          "(B) $20\\sqrt{7}$ 海里",
          "(C) 50 海里",
          "(D) $30\\sqrt{2}$ 海里",
          "(E) 45 海里"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "在 $\\triangle ABC$ 中，輪船從港口 $A$ 沿北偏東 $60^\\circ$ 航行 20 海里到 $B$，再沿南偏東 $30^\\circ$ 航行 $20\\sqrt{3}$ 海里到 $C$。",
          "steps": [
            "航向轉角夾角 $\\angle B = 60^\\circ + 30^\\circ = 90^\\circ$。",
            "由勾股定理，$AC = \\sqrt{20^2 + (20\\sqrt{3})^2} = \\sqrt{400 + 1200} = 40$ 海里。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-05 · 2023 正卷第 13 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "已知 $\\alpha$ 是第二象限角，且 $\\sin\\alpha = \\frac{3}{5}$，則 $\\cos(\\alpha + \\frac{\\pi}{3})$ 等於",
        "options": [
          "(A) $-\\frac{4 + 3\\sqrt{3}}{10}$",
          "(B) $\\frac{-4 + 3\\sqrt{3}}{10}$",
          "(C) $\\frac{4 - 3\\sqrt{3}}{10}$",
          "(D) $\\frac{4 + 3\\sqrt{3}}{10}$",
          "(E) $-\\frac{3 + 4\\sqrt{3}}{10}$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "$\\alpha$ 在第二象限，$\\cos\\alpha = -\\sqrt{1 - (3/5)^2} = -\\frac{4}{5}$。",
          "steps": [
            "$\\cos(\\alpha + \\pi/3) = \\cos\\alpha\\cos\\pi/3 - \\sin\\alpha\\sin\\pi/3 = (-\\frac{4}{5})(\\frac{1}{2}) - (\\frac{3}{5})(\\frac{\\sqrt{3}}{2}) = \\frac{-4 - 3\\sqrt{3}}{10}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-06 · 2023 正卷第 14 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "若函數 $y = 2\\sin(2x + \\phi)$ ($|\\phi| < \\frac{\\pi}{2}$) 的圖像經過點 $(0, 1)$，且在 $x = 0$ 附近單調遞增，則 $\\phi$ 的值為",
        "options": [
          "(A) $\\frac{\\pi}{6}$",
          "(B) $\\frac{\\pi}{3}$",
          "(C) $-\\frac{\\pi}{6}$",
          "(D) $\\frac{5\\pi}{6}$",
          "(E) $-\\frac{\\pi}{3}$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二倍角降冪係數遺漏除以 2</b>：$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$，常有考生漏寫分母 2。\n\n---"
        },
        "solution": {
          "thinking": "$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2(-\\frac{1}{3})^2 - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$。",
          "steps": [
            "$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2(-\\frac{1}{3})^2 - 1 = \\frac{2}{9} - 1 = -\\frac{7}{9}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-07 · 2024 正卷第 10 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "在銳角 $\\triangle ABC$ 中，內角 $A, B, C$ 的對邊分別為 $a, b, c$。已知 $b = 2$，$c = \\sqrt{3}$，且 $\\triangle ABC$ 的面積為 $\\frac{\\sqrt{3}}{2}$，則邊長 $a$ 等於",
        "options": [
          "(A) 1",
          "(B) $\\sqrt{7}$",
          "(C) $\\sqrt{13}$",
          "(D) $\\sqrt{3}$",
          "(E) 2"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "由正弦定理 $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies \\frac{\\sqrt{6}}{\\sin 60^\\circ} = \\frac{2}{\\sin B} \\implies \\sin B = \\frac{2 \\times (\\sqrt{3}/2)}{\\sqrt{6}} = \\frac{\\sqrt{2}}{2}$。",
          "steps": [
            "因 $b < a$，故 $B = 45^\\circ$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-08 · 2024 正卷第 12 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "函數 $f(x) = \\cos(2x - \\frac{\\pi}{4})$ 的一個單調遞增區間是",
        "options": [
          "(A) $[-\\frac{\\pi}{8}, \\frac{3\\pi}{8}]$",
          "(B) $[\\frac{3\\pi}{8}, \\frac{7\\pi}{8}]$",
          "(C) $[-\\frac{3\\pi}{8}, \\frac{\\pi}{8}]$",
          "(D) $[\\frac{5\\pi}{8}, \\frac{9\\pi}{8}]$",
          "(E) $[0, \\frac{\\pi}{2}]$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "令 $2k\\pi - \\pi \\le 2x - \\frac{\\pi}{4} \\le 2k\\pi \\implies k\\pi - \\frac{3\\pi}{8} \\le x \\le k\\pi + \\frac{\\pi}{8}$。",
          "steps": [
            "當 $k = 1$ 時，單調遞增區間為 $[\\frac{5\\pi}{8}, \\frac{9\\pi}{8}]$。"
          ],
          "ans": "(D)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-09 · 2024 正卷第 13 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "已知 $\\cos 2\\theta + 3\\sin\\theta - 2 = 0$，其中 $\\theta \\in (0, \\pi)$，則 $\\sin\\theta$ 的值為",
        "options": [
          "(A) $\\frac{1}{2}$",
          "(B) 1",
          "(C) $\\frac{1}{2}$ 或 1",
          "(D) $-\\frac{1}{2}$",
          "(E) $\\frac{\\sqrt{3}}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二倍角降冪係數遺漏除以 2</b>：$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$，常有考生漏寫分母 2。\n\n---"
        },
        "solution": {
          "thinking": "$\\sin\\theta + \\cos\\theta = \\frac{1}{5}$。",
          "steps": [
            "平方得 $1 + 2\\sin\\theta\\cos\\theta = \\frac{1}{25} \\implies \\sin 2\\theta = -\\frac{24}{25}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-10 · 2025 正卷第 15 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "設函數 $f(x) = |\\sin x| + |\\cos x|$，則下列說法正確的是",
        "options": [
          "(A) $f(x)$ 的最小正週期為 $\\pi$，最大值為 $\\sqrt{2}$",
          "(B) $f(x)$ 的最小正週期為 $\\frac{\\pi}{2}$，最大值為 $\\sqrt{2}$",
          "(C) $f(x)$ 的最小正週期為 $2\\pi$，最大值為 2",
          "(D) $f(x)$ 的最小正週期為 $\\frac{\\pi}{2}$，最大值為 1",
          "(E) $f(x)$ 的最小正週期為 $\\pi$，最小值為 0"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "$c^2 = a^2 + b^2 - 2ab\\cos C = 9 + 25 - 2(3)(5)(\\frac{1}{2}) = 34 - 15 = 19 \\implies c = \\sqrt{19}$。",
          "steps": [
            "$c^2 = a^2 + b^2 - 2ab\\cos C = 9 + 25 - 2(3)(5)(\\frac{1}{2}) = 34 - 15 = 19 \\implies c = \\sqrt{19}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-11 · 四校聯考樣題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "4分",
        "q": "已知 $\\tan\\alpha = 2$，則 $\\frac{\\sin 2\\alpha}{\\cos^2\\alpha - \\sin^2\\alpha}$ 的值為",
        "options": [
          "(A) $-\\frac{4}{3}$",
          "(B) $\\frac{4}{3}$",
          "(C) $-\\frac{3}{4}$",
          "(D) $\\frac{3}{4}$",
          "(E) $-2$"
        ],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "已知 $\\tan\\alpha = 2$。",
          "steps": [
            "$\\frac{\\sin 2\\alpha}{\\cos^2\\alpha - \\sin^2\\alpha} = \\frac{2\\sin\\alpha\\cos\\alpha}{\\cos^2\\alpha - \\sin^2\\alpha}$。",
            "分子分母同除以 $\\cos^2\\alpha$ 得 $\\frac{2\\tan\\alpha}{1 - \\tan^2\\alpha} = \\frac{2(2)}{1 - 4} = -\\frac{4}{3}$。",
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
    "color": "#d97706",
    "sections": [
      "收錄 6 道官方真題",
      "三角函數解三角形與平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 B-01 · 2021 正卷第 20 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8 分",
        "q": "在 $\\triangle ABC$ 中，內角 $A, B, C$ 的對邊分別為 $a, b, c$。已知 $\\sin(C - A) = 1$，且 $B = \\frac{\\pi}{3}$。<br>(a) 求角 $A$ 與角 $C$ 的大小。 (4 分)<br>(b) 若邊 $b = \\sqrt{6}$，求邊 $a$ 的長度及 $\\triangle ABC$ 的面積。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由正弦定理 $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$，已知條件 $a \\cos B + b \\cos A = c$。<br>&nbsp;&nbsp;• 由正弦定理化簡得 $\\sin(A + B) = \\sin C$ 恆成立。<br>&nbsp;&nbsp;• 由餘弦定理 $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$，代入已知 $a^2 + b^2 - c^2 = -ab$，得 $\\cos C = -\\frac{1}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• 因 $0 < C < \\pi$，故 $C = \\frac{2\\pi}{3}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 面積 $S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}ab \\sin \\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{4}ab = 4\\sqrt{3} \\implies ab = 16$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 又由餘弦定理 $c^2 = a^2 + b^2 - 2ab\\cos C = a^2 + b^2 + ab = (a + b)^2 - ab$。<br>&nbsp;&nbsp;• 代入已知 $c = 2\\sqrt{7}$ 得 $28 = (a + b)^2 - 16 \\implies (a + b)^2 = 44 \\implies a + b = 2\\sqrt{11}$。<br>&nbsp;&nbsp;• 周長為 $a + b + c = 2\\sqrt{11} + 2\\sqrt{7}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 B-02 · 2022 正卷第 19 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8 分",
        "q": "已知函數 $f(x) = \\sqrt{3}\\sin 2x + \\cos 2x$。<br>(a) 將 $f(x)$ 化為 $A\\sin(\\omega x + \\phi)$ 的形式，並求其最小正週期與最大值。 (4 分)<br>(b) 求方程 $f(x) = 1$ 在區間 $[0, \\pi]$ 上的所有實數解。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 利用輔助角公式化簡：$f(x) = \\sqrt{3}\\sin 2x + \\cos 2x = 2\\left(\\frac{\\sqrt{3}}{2}\\sin 2x + \\frac{1}{2}\\cos 2x\\right) = 2\\sin\\left(2x + \\frac{\\pi}{6}\\right)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 函數的最小正週期為 $T = \\frac{2\\pi}{2} = \\pi$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 當 $\\sin(2x + \\frac{\\pi}{6}) = 1$ 時，函數取得最大值 2。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 由 $f(x) = 1$ 得 $2\\sin(2x + \\frac{\\pi}{6}) = 1 \\implies \\sin(2x + \\frac{\\pi}{6}) = \\frac{1}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 因 $x \\in [0, \\pi]$，故 $2x + \\frac{\\pi}{6} \\in [\\frac{\\pi}{6}, \\frac{13\\pi}{6}]$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 解得：$2x + \\frac{\\pi}{6} = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{13\\pi}{6}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 即 $2x = 0, \\frac{2\\pi}{3}, 2\\pi \\implies x = 0, \\frac{\\pi}{3}, \\pi$。<br>&nbsp;&nbsp;• 故方程在 $[0, \\pi]$ 上的實數解為 $x = 0, \\frac{\\pi}{3}, \\pi$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 B-03 · 2023 正卷第 19 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8 分",
        "q": "已知函數 $f(x) = 2\\cos^2 x + 2\\sqrt{3}\\sin x \\cos x - 1$。<br>(a) 求函數 $f(x)$ 的最小正週期。 (4 分)<br>(b) 求函數 $f(x)$ 在區間 $[0, \\frac{\\pi}{2}]$ 上的最大值與最小值。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二倍角降冪係數遺漏除以 2</b>：$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$，常有考生漏寫分母 2。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 利用二倍角公式化簡：<br>$$f(x) = (2\\cos^2 x - 1) + 2\\sqrt{3}\\sin x\\cos x = \\cos 2x + \\sqrt{3}\\sin 2x$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>$$= 2\\left(\\frac{1}{2}\\cos 2x + \\frac{\\sqrt{3}}{2}\\sin 2x\\right) = 2\\sin\\left(2x + \\frac{\\pi}{6}\\right)$$<br>&nbsp;&nbsp;• 故函數 $f(x)$ 的最小正週期為 $T = \\frac{2\\pi}{2} = \\pi$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 當 $x \\in [0, \\frac{\\pi}{2}]$ 時，$2x \\in [0, \\pi]$，故 $2x + \\frac{\\pi}{6} \\in [\\frac{\\pi}{6}, \\frac{7\\pi}{6}]$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 當 $2x + \\frac{\\pi}{6} = \\frac{\\pi}{2}$ 即 $x = \\frac{\\pi}{6}$ 時，$f(x)$ 取得最大值 $2$； <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• 當 $2x + \\frac{\\pi}{6} = \\frac{7\\pi}{6}$ 即 $x = \\frac{\\pi}{2}$ 時，$f(x)$ 取得最小值 $2\\sin\\frac{7\\pi}{6} = 2(-\\frac{1}{2}) = -1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 B-04 · 2024 正卷第 17 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8 分",
        "q": "已知角 $\\alpha, \\beta \\in (0, \\frac{\\pi}{2})$，且 $\\sin\\alpha = \\frac{1}{\\sqrt{5}}$，$\\cos\\beta = \\frac{3}{\\sqrt{10}}$。<br>(a) 求 $\\tan\\alpha$ 及 $\\tan\\beta$ 的值。 (4 分)<br>(b) 求 $\\alpha + \\beta$ 的大小。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由正弦定理 $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$，已知 $\\sin A : \\sin B : \\sin C = 3 : 5 : 7$。<br>&nbsp;&nbsp;• 故邊長之比 $a : b : c = 3 : 5 : 7$。設 $a = 3k, b = 5k, c = 7k$ ($k > 0$)。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 由餘弦定理求最大角 $C$：<br>$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9k^2 + 25k^2 - 49k^2}{2(3k)(5k)} = \\frac{-15k^2}{30k^2} = -\\frac{1}{2}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• 因 $0 < C < \\pi$，解得最大角 $C = \\frac{2\\pi}{3}$ ($120^\\circ$)。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 最大邊長 $c = 7k = 14 \\implies k = 2$。<br>&nbsp;&nbsp;• 得邊長 $a = 6, b = 10, c = 14$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 面積 $S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}(6)(10)\\sin \\frac{2\\pi}{3} = 30 \\times \\frac{\\sqrt{3}}{2} = 15\\sqrt{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-05 · 2025 正卷第 18 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8 分",
        "q": "在 $\\triangle ABC$ 中，角 $A, B, C$ 的對邊分別為 $a, b, c$。已知 $\\sin(A + B) = 2\\sin^2\\frac{C}{2}$。<br>(a) 求角 $C$ 的大小。 (4 分)<br>(b) 若 $c = 2$，且 $\\triangle ABC$ 的周長為 $2 + 2\\sqrt{3}$，求 $\\triangle ABC$ 的面積。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>輔助角公式初相 $\\phi$ 正負符號搞錯</b>：$a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + \\phi)$，其中點 $(a, b)$ 所在象限決定 $\\phi$。例如 $\\sqrt{3}\\sin x - \\cos x = 2\\sin(x - \\frac{\\pi}{6})$，很多考生誤寫為 $+ \\frac{\\pi}{6}$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 在 $\\triangle ABC$ 中，$A + B = \\pi - C$，故 $\\sin(A + B) = \\sin C$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 由二倍角公式 $\\sin C = 2\\sin\\frac{C}{2}\\cos\\frac{C}{2}$。<br>&nbsp;&nbsp;• 代入已知條件：$2\\sin\\frac{C}{2}\\cos\\frac{C}{2} = 2\\sin^2\\frac{C}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 因 $C \\in (0, \\pi)$，$\\frac{C}{2} \\in (0, \\frac{\\pi}{2})$，故 $\\sin\\frac{C}{2} > 0$。<br>&nbsp;&nbsp;• 兩邊約去 $2\\sin\\frac{C}{2}$ 得 $\\cos\\frac{C}{2} = \\sin\\frac{C}{2} \\implies \\tan\\frac{C}{2} = 1$。<br>&nbsp;&nbsp;• 解得 $\\frac{C}{2} = \\frac{\\pi}{4} \\implies C = \\frac{\\pi}{2}$。故 $\\triangle ABC$ 為直角三角形。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因 $C = 90^\\circ$，由勾股定理 $a^2 + b^2 = c^2 = 2^2 = 4$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 三角形周長 $a + b + c = 2 + 2\\sqrt{3} \\implies a + b = 2\\sqrt{3}$。<br>&nbsp;&nbsp;• 兩邊平方：$(a + b)^2 = a^2 + b^2 + 2ab \\implies (2\\sqrt{3})^2 = 4 + 2ab \\implies 12 = 4 + 2ab \\implies 2ab = 8 \\implies ab = 4$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 故 $\\triangle ABC$ 的面積為 $S = \\frac{1}{2}ab = \\frac{1}{2}(4) = 2$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-06 · 2025 正卷第 19 題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "8分",
        "q": "如圖所示，在 $\\triangle ABC$ 中，$AB = AC$。點 $D$ 在邊 $AB$ 上，點 $E$ 在邊 $AC$ 上，且滿足 $\\angle ADE = \\angle ACD$。<br>(a) 證明：$\\triangle ADE \\sim \\triangle ACD$。 (4 分)<br>(b) 證明：$AD \\cdot AC = AE \\cdot AB$。 (4 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二倍角降冪係數遺漏除以 2</b>：$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$，常有考生漏寫分母 2。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由正弦定理邊角互化，已知 $(2a - c)\\cos B = b \\cos C$。<br>&nbsp;&nbsp;• 轉化為角：$(2\\sin A - \\sin C)\\cos B = \\sin B \\cos C$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 展開得 $2\\sin A \\cos B - \\sin C \\cos B = \\sin B \\cos C \\implies 2\\sin A \\cos B = \\sin B \\cos C + \\cos B \\sin C = \\sin(B + C)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 因 $B + C = \\pi - A$，故 $\\sin(B + C) = \\sin A$。<br>&nbsp;&nbsp;• 得到 $2\\sin A \\cos B = \\sin A$。因 $\\sin A \\ne 0$，約去得 $\\cos B = \\frac{1}{2}$。<br>&nbsp;&nbsp;• 因 $0 < B < \\pi$，解得 $B = \\frac{\\pi}{3}$ ($60^\\circ$)。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $b = \\sqrt{7}, a + c = 4$。由餘弦定理 $b^2 = a^2 + c^2 - 2ac\\cos B$：<br>$$7 = (a + c)^2 - 2ac - 2ac(\\frac{1}{2}) = (a + c)^2 - 3ac$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 代入 $a + c = 4$ 得 $7 = 16 - 3ac \\implies 3ac = 9 \\implies ac = 3$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 面積 $S = \\frac{1}{2}ac \\sin B = \\frac{1}{2}(3)\\sin \\frac{\\pi}{3} = \\frac{1}{2}(3)(\\frac{\\sqrt{3}}{2}) = \\frac{3\\sqrt{3}}{4}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>\n\n---"
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
    "color": "#d97706",
    "sections": [
      "收錄 1 道官方真題",
      "三角函數解三角形與平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 C-01 · 四校聯考精選培優大題",
        "topic": "三角函數解三角形與平面幾何 · 考點突破",
        "score": "20 分",
        "q": "在圓內接四邊形 $ABCD$ 中，$AB = 2$，$BC = 3$，$CD = 4$，$DA = 5$。<br>(a) 求對角線 $AC$ 的長度。 (7 分)<br>(b) 求圓內接四邊形 $ABCD$ 的面積。 (7 分)<br>(c) 求該四邊形外接圓的半徑 $R$。 (6 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\phi) \\quad \\text{其中 } \\tan\\phi = \\frac{b}{a}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>三角形內角範圍約束被忽略</b>：由正弦值 $\\sin A = \\frac{1}{2}$ 求角時，存在 $A = 30^\\circ$ 或 $A = 150^\\circ$ 兩種可能，很多考生漏掉鈍角解；反之，若已知 $a < b$，則由「大邊對大角」必有 $A < B$，必須排除鈍角增解。未寫排除理由直接扣 1 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 圓內接四邊形對角互補：$\\angle B + \\angle D = 180^\\circ \\implies \\cos D = -\\cos B$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 在 $\\triangle ABC$ 中，由餘弦定理：<br>$$AC^2 = AB^2 + BC^2 - 2AB \\cdot BC \\cos B = 2^2 + 3^2 - 2(2)(3)\\cos B = 13 - 12\\cos B$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 在 $\\triangle ADC$ 中，由餘弦定理：<br>$$AC^2 = AD^2 + CD^2 - 2AD \\cdot CD \\cos D = 5^2 + 4^2 - 2(5)(4)(-\\cos B) = 41 + 40\\cos B$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 聯立得 $13 - 12\\cos B = 41 + 40\\cos B \\implies 52\\cos B = -28 \\implies \\cos B = -\\frac{7}{13}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 代入得 $AC^2 = 13 - 12(-\\frac{7}{13}) = 13 + \\frac{84}{13} = \\frac{253}{13}$。<br>&nbsp;&nbsp;• 故對角線 $AC$ 的長度為 $AC = \\sqrt{\\frac{253}{13}} = \\frac{\\sqrt{3289}}{13}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 計算 $\\sin B = \\sqrt{1 - \\cos^2 B} = \\sqrt{1 - (-\\frac{7}{13})^2} = \\sqrt{\\frac{120}{169}} = \\frac{2\\sqrt{30}}{13}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 因 $\\angle B + \\angle D = 180^\\circ$，故 $\\sin D = \\sin B = \\frac{2\\sqrt{30}}{13}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 四邊形面積 $S = S_{\\triangle ABC} + S_{\\triangle ADC} = \\frac{1}{2}(2)(3)\\sin B + \\frac{1}{2}(5)(4)\\sin D = (3 + 10)\\sin B = 13 \\times \\frac{2\\sqrt{30}}{13} = 2\\sqrt{30}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 設四邊形外接圓半徑為 $R$。在 $\\triangle ABC$ 中，由正弦定理：<br>$$2R = \\frac{AC}{\\sin B} \\implies R = \\frac{AC}{2\\sin B}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 代入數值：<br>$$R = \\frac{\\sqrt{253/13}}{2 \\times \\frac{2\\sqrt{30}}{13}} = \\frac{\\sqrt{253} \\times \\sqrt{13}}{4\\sqrt{30}} = \\frac{\\sqrt{3289}}{4\\sqrt{30}} = \\frac{\\sqrt{98670}}{120}$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>"
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

/* 澳門四校聯考（JAE）數學專題總複習 · Topic 08 計數原理二項式定理與概率統計 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_08';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 11,
    "color": "#0d9488"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 3,
    "color": "#0d9488"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 1,
    "color": "#0d9488"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#0d9488",
    "sections": [
      "收錄 11 道官方真題",
      "計數原理二項式定理與概率統計 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-01 · 2021 正卷第 9 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "數值 $103^{10}$ 的末兩位數字（十位與個位）所組成的兩位數為",
        "options": [
          "(A) 49",
          "(B) 09",
          "(C) 89",
          "(D) 29",
          "(E) 69"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "$103^{10} = (100 + 3)^{10} = 100^{10} + \\dots + C_{10}^8 100^2 3^8 + C_{10}^1 100 \\cdot 3^9 + 3^{10}$。",
          "steps": [
            "除最後兩項外均為 10000 的倍數。",
            "最後兩項為 $10 \\times 100 \\times 3^9 + 3^{10} = 1000 \\times 19683 + 59049 \\equiv 0 + 49 = 49 \\pmod{100}$。",
            "末兩位數為 49。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-02 · 2021 正卷第 13 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "已知隨機變數 $X$ 的平均值為 1，方差為 0.01。若令 $Y = 10X$，則 $Y$ 的平均值與方差分別為",
        "options": [
          "(A) 10 與 1",
          "(B) 10 與 0.1",
          "(C) 1 與 0.01",
          "(D) 10 與 0.01",
          "(E) 1 與 1"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>超幾何分佈（不放回）與二項分佈（有放回）混淆</b>：抽樣問題中，若不放回且總量有限，必須使用組合數 $\\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，絕不能套用獨立重複試驗的二項分佈公式。"
        },
        "solution": {
          "thinking": "$E(Y) = 10E(X) = 10 \\times 1 = 10$。",
          "steps": [
            "$Var(Y) = 10^2 Var(X) = 100 \\times 0.01 = 1$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) 誤將方差乘以 10。"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-03 · 2022 正卷第 8 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "某射手射擊一次命中目標的概率為 0.8。若他獨立射擊 3 次，則至少命中一次的概率為",
        "options": [
          "(A) 0.992",
          "(B) 0.512",
          "(C) 0.8",
          "(D) 0.008",
          "(E) 0.96"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二項式展開通項項數序號錯位</b>：通項公式為 $T_{r+1} = C_n^r a^{n-r} b^r$，求「第 5 項」時對應的是 $r = 4$ 而不是 $r = 5$；求常數項時令 $x$ 的指數為 0 解出 $r$ 後，常有考生忘記回代計算組合數與常數係數。\n\n---"
        },
        "solution": {
          "thinking": "對立事件為「3 次均未命中」，概率為 $(1 - 0.8)^3 = 0.2^3 = 0.008$。",
          "steps": [
            "故至少命中一次的概率為 $1 - 0.008 = 0.992$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-04 · 2022 正卷第 13 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "從數字 1, 2, 3, 4, 5 中無放回地隨機抽取 3 個不同數字排成一個三位數。已知該三位數是奇數，則它大於 300 的概率為",
        "options": [
          "(A) $\\frac{2}{3}$",
          "(B) $\\frac{3}{5}$",
          "(C) $\\frac{1}{2}$",
          "(D) $\\frac{4}{5}$",
          "(E) $\\frac{1}{3}$"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "從 1, 2, 3, 4, 5 中先後選兩不同數排成兩位數，總數為 $5 \\times 4 = 20$。",
          "steps": [
            "小於 40 的數十位為 1, 2, 3（3 種），個位有 4 種，共 $3 \\times 4 = 12$ 個。",
            "概率為 $\\frac{12}{20} = \\frac{3}{5}$。"
          ],
          "ans": "(C)",
          "quickTip": ""
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-05 · 2023 正卷第 6 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "二項式 $(x^2 - \\frac{2}{x})^6$ 展開式中的常數項為",
        "options": [
          "(A) 240",
          "(B) -240",
          "(C) 60",
          "(D) -60",
          "(E) 160"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>超幾何分佈（不放回）與二項分佈（有放回）混淆</b>：抽樣問題中，若不放回且總量有限，必須使用組合數 $\\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，絕不能套用獨立重複試驗的二項分佈公式。"
        },
        "solution": {
          "thinking": "二項式定理通項 $T_{r+1} = C_8^r (2x)^{8-r} (-\\frac{1}{x})^r = C_8^r 2^{8-r} (-1)^r x^{8-2r}$。",
          "steps": [
            "常數項需 $8 - 2r = 0 \\implies r = 4$。",
            "常數項為 $C_8^4 2^4 (-1)^4 = 70 \\times 16 \\times 1 = 1120$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-06 · 2024 正卷第 4 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "多項式乘積 $(1 + x)^5 (1 - 2x)^4$ 展開式中 $x^2$ 的係數為",
        "options": [
          "(A) 14",
          "(B) -14",
          "(C) 34",
          "(D) -34",
          "(E) 24"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二項式展開通項項數序號錯位</b>：通項公式為 $T_{r+1} = C_n^r a^{n-r} b^r$，求「第 5 項」時對應的是 $r = 4$ 而不是 $r = 5$；求常數項時令 $x$ 的指數為 0 解出 $r$ 後，常有考生忘記回代計算組合數與常數係數。\n\n---"
        },
        "solution": {
          "thinking": "插空法：先排 4 名男生有 $4! = 24$ 種。",
          "steps": [
            "產生 5 個空位，插入 3 名女生有 $P_5^3 = 5 \\times 4 \\times 3 = 60$ 種。",
            "總方法數為 $24 \\times 60 = 1440$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-07 · 2024 正卷第 8 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "已知一組數據 $3, 5, 7, 8, x$ 的平均數為 6，則這組數據的中位數為",
        "options": [
          "(A) 7",
          "(B) 6",
          "(C) 5",
          "(D) 8",
          "(E) 6.5"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "超幾何分佈，取得恰好 2 個紅球的概率為 $\\frac{C_4^2 C_6^1}{C_{10}^3} = \\frac{6 \\times 6}{120} = \\frac{36}{120} = \\frac{3}{10}$。",
          "steps": [
            "超幾何分佈，取得恰好 2 個紅球的概率為 $\\frac{C_4^2 C_6^1}{C_{10}^3} = \\frac{6 \\times 6}{120} = \\frac{36}{120} = \\frac{3}{10}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-08 · 2025 正卷第 7 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "3 名男生和 3 名女生排成一排照相，若要求任意兩名男生均不相鄰，則不同的排法共有",
        "options": [
          "(A) 144 種",
          "(B) 72 種",
          "(C) 288 種",
          "(D) 36 種",
          "(E) 576 種"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>超幾何分佈（不放回）與二項分佈（有放回）混淆</b>：抽樣問題中，若不放回且總量有限，必須使用組合數 $\\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，絕不能套用獨立重複試驗的二項分佈公式。"
        },
        "solution": {
          "thinking": "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.5} = 0.4$。",
          "steps": [
            "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.5} = 0.4$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-09 · 2025 正卷第 8 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "已知 6 個數 $2, 4, 6, 8, 10, a$ 的中位數為 7，則這 6 個數的算術平均數為",
        "options": [
          "(A) 6.17",
          "(B) 6.5",
          "(C) 7",
          "(D) 6",
          "(E) 7.5"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二項式展開通項項數序號錯位</b>：通項公式為 $T_{r+1} = C_n^r a^{n-r} b^r$，求「第 5 項」時對應的是 $r = 4$ 而不是 $r = 5$；求常數項時令 $x$ 的指數為 0 解出 $r$ 後，常有考生忘記回代計算組合數與常數係數。\n\n---"
        },
        "solution": {
          "thinking": "將六個數從小到大排列：$x - 6, x - 5, x - 4, x + 2, x + 3, x + 4$。",
          "steps": [
            "中位數為中間兩項平均值 $\\frac{(x - 4) + (x + 2)}{2} = x - 1 = 8 \\implies x = 9$。",
            "六數之和為 $6x - 6 = 48$，平均數為 $\\frac{48}{6} = 8$。"
          ],
          "ans": "(D)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-10 · 2025 正卷第 9 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "在 $(x - 1)(x + 2)^5$ 的展開式中，$x^4$ 的係數為",
        "options": [
          "(A) 70",
          "(B) 10",
          "(C) 30",
          "(D) 40",
          "(E) 50"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "展開式中含 $x^4$ 的項由兩部分相乘得到：$x$ 乘以 $C_5^2 x^3 2^2 = 40x^3$ 得 $40x^4$；$-1$ 乘以 $C_5^1 x^4 2^1 = 10x^4$ 得 $-10x^4$。",
          "steps": [
            "合拼得係數為 50。"
          ],
          "ans": "(E)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-11 · 2025 正卷第 12 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "4分",
        "q": "設隨機變數 $X \\sim B(n, p)$，已知期望 $E(X) = 2.4$，方差 $Var(X) = 1.44$，則試驗次數 $n$ 與成功概率 $p$ 分別為",
        "options": [
          "(A) $n = 6, p = 0.4$",
          "(B) $n = 8, p = 0.3$",
          "(C) $n = 4, p = 0.6$",
          "(D) $n = 10, p = 0.24$",
          "(E) $n = 12, p = 0.2$"
        ],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>超幾何分佈（不放回）與二項分佈（有放回）混淆</b>：抽樣問題中，若不放回且總量有限，必須使用組合數 $\\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，絕不能套用獨立重複試驗的二項分佈公式。"
        },
        "solution": {
          "thinking": "捆綁法：將甲、乙視為一人，共有 4 個元素全排列有 $4! = 24$ 種；甲、乙內部排列有 $2! = 2$ 種。",
          "steps": [
            "總排法為 $24 \\times 2 = 48$。",
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
    "color": "#0d9488",
    "sections": [
      "收錄 3 道官方真題",
      "計數原理二項式定理與概率統計 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 B-01 · 2021 正卷第 16 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "8 分",
        "q": "書架上有中文書 4 本、英文書 2 本、數學書 3 本（每本書各不相同）。<br>(a) 從這書架上隨機地選取 3 本書。求取得中、英、數各一本的概率。 (3 分)<br>(b) 將這九本書隨機地重新排列在一排。求同類書籍全部排在一起的概率。 (5 分)<br>[注：以最簡分數表示 (a) 和 (b) 的答案。]",
        "options": [],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 樣本空間為從 9 本書中任取 3 本：$C_9^3 = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 取出中、英、數各一本的選法數：$C_4^1 \\times C_2^1 \\times C_3^1 = 4 \\times 2 \\times 3 = 24$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 所求概率為 $P = \\frac{24}{84} = \\frac{2}{7}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 9 本書隨機排列，樣本空間大小為 $9!$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 捆綁法：將中文書（4本）、英文書（2本）、數學書（3本）各自捆綁為一大類，三類書籍的全排列有 $3!$ 種。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 各類書籍內部排列：中文書 $4!$ 種，英文書 $2!$ 種，數學書 $3!$ 種。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 符合條件的排列總數為 $3! \\times 4! \\times 2! \\times 3!$。<br>&nbsp;&nbsp;• 所求概率 $P = \\frac{3! \\times 4! \\times 2! \\times 3!}{9!} = \\frac{6 \\times 24 \\times 2 \\times 6}{362880} = \\frac{1728}{362880} = \\frac{1}{210}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 B-02 · 2023 正卷第 16 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "8 分",
        "q": "甲、乙兩名運動員進行乒乓球比賽，約定每局比賽中甲獲勝的概率為 $\\frac{2}{3}$，乙獲勝的概率為 $\\frac{1}{3}$，各局比賽相互獨立。<br>(a) 若比賽進行 3 局，求甲恰好獲勝 2 局的概率。 (3 分)<br>(b) 若比賽採取「先勝 3 局者贏得整場比賽」的規則，求比賽在第 4 局結束且甲贏得比賽的概率。 (5 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>超幾何分佈（不放回）與二項分佈（有放回）混淆</b>：抽樣問題中，若不放回且總量有限，必須使用組合數 $\\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，絕不能套用獨立重複試驗的二項分佈公式。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 3 局比賽中甲恰好獲勝 2 局，服從獨立重複試驗二項分佈：<br>$$P = C_3^2 \\left(\\frac{2}{3}\\right)^2 \\left(\\frac{1}{3}\\right)^1 = 3 \\times \\frac{4}{9} \\times \\frac{1}{3} = \\frac{4}{9}$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 比賽在第 4 局結束且甲贏得比賽，表示前 3 局中甲贏 2 局、乙贏 1 局，且第 4 局甲贏：<br>$$P = \\left[ C_3^2 \\left(\\frac{2}{3}\\right)^2 \\left(\\frac{1}{3}\\right) \\right] \\times \\frac{2}{3} = \\frac{4}{9} \\times \\frac{2}{3} = \\frac{8}{27}$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 B-03 · 2024 正卷第 16 題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "8 分",
        "q": "一個盒子中裝有大小相同的 3 個紅球和 2 個白球。現從中隨機抽取 2 個球（不放回）。設抽得的紅球個數為隨機變數 $X$。<br>(a) 求抽得的 2 個球顏色相同的概率。 (3 分)<br>(b) 寫出隨機變數 $X$ 的分佈列，並求其數學期望 $E(X)$。 (5 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二項式展開通項項數序號錯位</b>：通項公式為 $T_{r+1} = C_n^r a^{n-r} b^r$，求「第 5 項」時對應的是 $r = 4$ 而不是 $r = 5$；求常數項時令 $x$ 的指數為 0 解出 $r$ 後，常有考生忘記回代計算組合數與常數係數。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 展開式通項為 $T_{r+1} = C_n^r x^{n-r} (\\frac{2}{x})^r = C_n^r 2^r x^{n-2r}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 第三項係數為 $C_n^2 2^2 = 4 \\times \\frac{n(n - 1)}{2} = 2n(n - 1) = 112$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• $n(n - 1) = 56 \\implies n^2 - n - 56 = 0 \\implies (n - 8)(n + 7) = 0$。<br>&nbsp;&nbsp;• 因 $n \\in \\mathbb{Z}^+$，解得 $n = 8$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 常數項需 $n - 2r = 0 \\implies 8 - 2r = 0 \\implies r = 4$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 常數項為 $T_5 = C_8^4 2^4 = 70 \\times 16 = 1120$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 有理項需 $8 - 2r$ 為整數（對所有 $r = 0, 1, \\dots, 8$ 恆成立）。全部 9 項皆為有理項。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2】</span>\n\n---"
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
    "color": "#0d9488",
    "sections": [
      "收錄 1 道官方真題",
      "計數原理二項式定理與概率統計 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 C-01 · 四校聯考精選培優大題",
        "topic": "計數原理二項式定理與概率統計 · 考點突破",
        "score": "20 分",
        "q": "某高校入學面試設有 $A, B$ 兩道測試題，考生甲答對 $A$ 題的概率為 $\\frac{3}{4}$，答對 $B$ 題的概率為 $\\frac{2}{3}$，兩題作答相互獨立。<br>(a) 若甲抽取這兩道題各回答一次，求甲至少答對一道題的概率。 (6 分)<br>(b) 規則規定：答對 $A$ 題得 10 分，答錯得 0 分；答對 $B$ 題得 20 分，答錯扣 5 分。設甲所得的總得分為隨機變數 $Y$。<br>    (i) 列出隨機變數 $Y$ 的概率分佈列； (7 分)<br>    (ii) 計算總得分 $Y$ 的數學期望 $E(Y)$ 與方差 $Var(Y)$。 (7 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "(a + b)^n = \\sum_{r=0}^n C_n^r a^{n-r} b^r",
            "T_{r+1} = C_n^r a^{n-r} b^r"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>方差線性變換係數忘記平方</b>：若 $Y = aX + b$，則期望 $E(Y) = aE(X) + b$，但方差 $Var(Y) = a^2 Var(X)$（標準差 $\\sigma(Y) = |a|\\sigma(X)$）！很多考生誤將新方差算為 $a \\cdot Var(X)$，在送分客觀題上痛失 4 分。"
        },
        "solution": {
          "thinking": "本題為正卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 記事件 $A$ 為「甲答對 $A$ 題」，事件 $B$ 為「甲答對 $B$ 題」，兩事件相互獨立。<br>&nbsp;&nbsp;• $P(A) = \\frac{3}{4}$，$P(B) = \\frac{2}{3}$。<br>&nbsp;&nbsp;• 至少答對一道題的對立事件為「兩題皆答錯」：<br>$$P(\\bar{A}\\bar{B}) = P(\\bar{A})P(\\bar{B}) = \\left(1 - \\frac{3}{4}\\right)\\left(1 - \\frac{2}{3}\\right) = \\frac{1}{4} \\times \\frac{1}{3} = \\frac{1}{12}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span><br>&nbsp;&nbsp;• 故至少答對一道題的概率為 $P = 1 - \\frac{1}{12} = \\frac{11}{12}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• <b>(i) 列出隨機變數 $Y$ 的概率分佈列</b>：\n    - 當兩題皆錯時，$Y = 0 + (-5) = -5$，概率 $P(Y = -5) = \\frac{1}{4} \\times \\frac{1}{3} = \\frac{1}{12}$；\n    - 當答對 $A$ 題、答錯 $B$ 題時，$Y = 10 + (-5) = 5$，概率 $P(Y = 5) = \\frac{3}{4} \\times \\frac{1}{3} = \\frac{3}{12}$；\n    - 當答錯 $A$ 題、答對 $B$ 題時，$Y = 0 + 20 = 20$，概率 $P(Y = 20) = \\frac{1}{4} \\times \\frac{2}{3} = \\frac{2}{12}$；\n    - 當兩題皆對時，$Y = 10 + 20 = 30$，概率 $P(Y = 30) = \\frac{3}{4} \\times \\frac{2}{3} = \\frac{6}{12}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M4】</span>\n    分佈列如下表所示：\n    | $Y$ | $-5$ | $5$ | $20$ | $30$ |\n    | :---: | :---: | :---: | :---: | :---: |\n    | $P$ | $\\frac{1}{12}$ | $\\frac{3}{12}$ | $\\frac{2}{12}$ | $\\frac{6}{12}$ | <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3】</span><br>&nbsp;&nbsp;• <b>(ii) 計算數學期望與方差</b>：\n    - 數學期望 $E(Y)$：\n      $$E(Y) = (-5)\\left(\\frac{1}{12}\\right) + 5\\left(\\frac{3}{12}\\right) + 20\\left(\\frac{2}{12}\\right) + 30\\left(\\frac{6}{12}\\right)$$\n      $$= \\frac{-5 + 15 + 40 + 180}{12} = \\frac{230}{12} = \\frac{115}{6}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>\n    - 方差 $Var(Y) = E(Y^2) - [E(Y)]^2$：\n      $$E(Y^2) = (-5)^2\\left(\\frac{1}{12}\\right) + 5^2\\left(\\frac{3}{12}\\right) + 20^2\\left(\\frac{2}{12}\\right) + 30^2\\left(\\frac{6}{12}\\right)$$\n      $$= \\frac{25 + 75 + 800 + 5400}{12} = \\frac{6300}{12} = 525$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span>\n      $$Var(Y) = 525 - \\left(\\frac{115}{6}\\right)^2 = 525 - \\frac{13225}{36} = \\frac{18900 - 13225}{36} = \\frac{5675}{36}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>"
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

/* 澳門四校聯考（JAE）數學專題總複習 · Topic 04 矩陣線性方程組與數學歸納法 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_04';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 2,
    "color": "#059669"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 1,
    "color": "#059669"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 6,
    "color": "#059669"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#059669",
    "sections": [
      "收錄 2 道官方真題",
      "矩陣線性方程組與數學歸納法 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-01 · 四校聯考樣題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "4分",
        "q": "已知二階矩陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$，則其逆矩陣 $A^{-1}$ 為",
        "options": [
          "(A) $\\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$",
          "(B) $\\begin{pmatrix} -3 & 1 \\\\ 5 & -2 \\end{pmatrix}$",
          "(C) $\\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$",
          "(D) $\\begin{pmatrix} 2 & -1 \\\\ -5 & 3 \\end{pmatrix}$",
          "(E) 不可逆"
        ],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>無窮多解未寫出「通解表達式」</b>：當方程組有無限多解時，很多考生僅回答「當 $k=1$ 時有無限多解」，卻沒有寫出通解 $(x, y, z) = (1 - t, 2t, t)$。在官方標準中，通解表達式佔據 2～3 分【A分】。"
        },
        "solution": {
          "thinking": "$\\det(A) = 2(3) - 1(5) = 6 - 5 = 1$。",
          "steps": [
            "主對角互換得 $\\begin{pmatrix} 3 & \\cdot \\\\ \\cdot & 2 \\end{pmatrix}$，副對角變號得 $\\begin{pmatrix} \\cdot & -1 \\\\ -5 & \\cdot \\end{pmatrix}$。",
            "故 $A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$。"
          ],
          "ans": "(A)",
          "quickTip": ""
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-02 · 四校聯考樣題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "4分",
        "q": "三階行列式 $\\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}$ 的值為",
        "options": [
          "(A) 24",
          "(B) 11",
          "(C) 0",
          "(D) 12",
          "(E) 48"
        ],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>數學歸納法遞推步未顯式引用歸納假設</b>：在由 $n=k$ 推導 $n=k+1$ 的過程中，必須寫明「由歸納假設……」，將假設表達式整體代入。若跳步或直接默認成立，直接扣除 2 分【M分】。"
        },
        "solution": {
          "thinking": "上三角行列式的值等於主對角線元素之乘積：$D = 1 \\times 4 \\times 6 = 24$。",
          "steps": [
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
    "color": "#059669",
    "sections": [
      "收錄 1 道官方真題",
      "矩陣線性方程組與數學歸納法 專項突破"
    ],
    "slides": [
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 B-01 · 2022 正卷第 20 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "8 分",
        "q": "用數學歸納法證明：對所有正整數 $n$，$7^n + 4^n - 2$ 均能被 3 整除。<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>無窮多解未寫出「通解表達式」</b>：當方程組有無限多解時，很多考生僅回答「當 $k=1$ 時有無限多解」，卻沒有寫出通解 $(x, y, z) = (1 - t, 2t, t)$。在官方標準中，通解表達式佔據 2～3 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>證明</b>：<br>&nbsp;&nbsp;• 令命題為 $P(n): 7^n + 4^n - 2$ 能被 3 整除。<br>&nbsp;&nbsp;• <b>第一步（奠基步）</b>：當 $n = 1$ 時，<br>$$7^1 + 4^1 - 2 = 7 + 4 - 2 = 9 = 3 \\times 3$$\n    9 顯然能被 3 整除，故當 $n = 1$ 時命題成立。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2：驗證 n=1 正確】</span><br>&nbsp;&nbsp;• <b>第二步（歸納假設）</b>：假設當 $n = k$ ($k \\ge 1$) 時命題成立，即<br>$$7^k + 4^k - 2 = 3m \\quad (m \\in \\mathbb{Z})$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：明確寫出歸納假設】</span><br>&nbsp;&nbsp;• <b>第三步（遞推步）</b>：考慮當 $n = k + 1$ 時，<br>$$7^{k+1} + 4^{k+1} - 2 = 7 \\cdot 7^k + 4 \\cdot 4^k - 2$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：拆項】</span>\n    配湊歸納假設：<br>$$\\begin{aligned} 7 \\cdot 7^k + 4 \\cdot 4^k - 2 &= (6 + 1)7^k + (3 + 1)4^k - 2 \\\\ &= (7^k + 4^k - 2) + 6 \\cdot 7^k + 3 \\cdot 4^k \\end{aligned}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：配湊出 3m】</span>\n    代入歸納假設：<br>$$= 3m + 3(2 \\cdot 7^k + 4^k) = 3(m + 2 \\cdot 7^k + 4^k)$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：提出公因數 3】</span>\n    因 $m, k$ 為整數，故 $m + 2 \\cdot 7^k + 4^k$ 為整數，因此 $7^{k+1} + 4^{k+1} - 2$ 能被 3 整除。\n    即當 $n = k + 1$ 時命題亦成立。<br>&nbsp;&nbsp;• <b>結論</b>：由數學歸納法原理，對所有正整數 $n$，$7^n + 4^n - 2$ 均能被 3 整除。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：結論規範】</span>\n\n---"
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
    "color": "#059669",
    "sections": [
      "收錄 6 道官方真題",
      "矩陣線性方程組與數學歸納法 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "附加卷",
        "qNum": "題 C-01 · 2021 附加卷第 4 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "(a) 證明三角恆等式：$\\sin \\alpha \\sin \\beta = \\frac{1}{2}[\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)]$。 (6 分)<br>(b) 利用 (a) 的結論，求和：$\\sum_{r=1}^n \\sin(2r-1)\\theta \\sin \\theta$。 (7 分)<br>(c) 用數學歸納法證明：對所有正整數 $n$ 及任意實數 $x \\neq k\\pi$，<br>    $$\\sum_{r=1}^n \\cos(2r-1)x = \\frac{\\sin 2nx}{2\\sin x}$$ (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>無窮多解未寫出「通解表達式」</b>：當方程組有無限多解時，很多考生僅回答「當 $k=1$ 時有無限多解」，卻沒有寫出通解 $(x, y, z) = (1 - t, 2t, t)$。在官方標準中，通解表達式佔據 2～3 分【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 展開右邊式子：<br>$$\\frac{1}{2}[\\cos(\\alpha - \\beta) - \\cos(\\alpha + \\beta)]$$<br>$$= \\frac{1}{2}[(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta) - (\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta)]$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：展開和差角餘弦公式】</span><br>$$= \\frac{1}{2}[2\\sin\\alpha\\sin\\beta] = \\sin\\alpha\\sin\\beta$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：化簡得證】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 應用 (a) 的結論，令 $\\alpha = (2r - 1)\\theta$，$\\beta = \\theta$：<br>$$\\sin(2r - 1)\\theta \\sin\\theta = \\frac{1}{2}[\\cos(2r - 2)\\theta - \\cos 2r\\theta]$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：代入恆等式】</span><br>&nbsp;&nbsp;• 對 $r = 1, 2, \\dots, n$ 求和，形成裂項相消求和：<br>$$\\sum_{r=1}^n \\sin(2r-1)\\theta \\sin\\theta = \\frac{1}{2}\\sum_{r=1}^n [\\cos(2r-2)\\theta - \\cos 2r\\theta]$$<br>$$= \\frac{1}{2}[(\\cos 0 - \\cos 2\\theta) + (\\cos 2\\theta - \\cos 4\\theta) + \\dots + (\\cos(2n-2)\\theta - \\cos 2n\\theta)]$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：列出裂項抵消項】</span><br>$$= \\frac{1}{2}[1 - \\cos 2n\\theta]$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成抵消】</span><br>&nbsp;&nbsp;• 再由二倍角公式 $1 - \\cos 2n\\theta = 2\\sin^2 n\\theta$：<br>$$\\sum_{r=1}^n \\sin(2r-1)\\theta \\sin\\theta = \\frac{1}{2}(2\\sin^2 n\\theta) = \\sin^2 n\\theta$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：最終簡化形式】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 證明：對所有正整數 $n$ 及任意實數 $x \\neq k\\pi$，$\\sum_{r=1}^n \\cos(2r-1)x = \\frac{\\sin 2nx}{2\\sin x}$。<br>&nbsp;&nbsp;• <b>步驟 1（奠基）</b>：當 $n = 1$ 時，\n    左邊 $= \\cos(2(1)-1)x = \\cos x$；\n    右邊 $= \\frac{\\sin 2x}{2\\sin x} = \\frac{2\\sin x \\cos x}{2\\sin x} = \\cos x$。\n    左邊 $=$ 右邊，命題在 $n = 1$ 時成立。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：驗證 n=1 成立】</span><br>&nbsp;&nbsp;• <b>步驟 2（歸納假設）</b>：假設當 $n = k$ ($k \\ge 1, k \\in \\mathbb{Z}^+$) 時命題成立，即：<br>$$\\sum_{r=1}^k \\cos(2r-1)x = \\frac{\\sin 2kx}{2\\sin x}$$ <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：寫出歸納假設】</span><br>&nbsp;&nbsp;• <b>步驟 3（歸納演繹）</b>：考慮 $n = k + 1$ 時的左邊：<br>$$\\sum_{r=1}^{k+1} \\cos(2r-1)x = \\sum_{r=1}^k \\cos(2r-1)x + \\cos(2(k+1)-1)x$$<br>$$= \\frac{\\sin 2kx}{2\\sin x} + \\cos(2k+1)x$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：代入歸納假設】</span><br>$$= \\frac{\\sin 2kx + 2\\sin x \\cos(2k+1)x}{2\\sin x}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：通分】</span>\n    利用積化和差公式 $2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)$：<br>$$2\\sin x \\cos(2k+1)x = \\sin(2k+2)x + \\sin(-2kx) = \\sin 2(k+1)x - \\sin 2kx$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：積化和差】</span>\n    代入分子得：<br>$$\\sin 2kx + [\\sin 2(k+1)x - \\sin 2kx] = \\sin 2(k+1)x$$\n    因此，$\\sum_{r=1}^{k+1} \\cos(2r-1)x = \\frac{\\sin 2(k+1)x}{2\\sin x}$。\n    這表明命題在 $n = k + 1$ 時亦成立。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：演繹得證】</span><br>&nbsp;&nbsp;• <b>結論</b>：由數學歸納法原理，該恆等式對所有正整數 $n$ 均成立。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：規範歸納總結】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2021",
        "paper": "附加卷",
        "qNum": "題 C-02 · 2021 附加卷第 5 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "(a) 計算三階行列式並將其因式分解：<br>    $$D = \\begin{vmatrix} x & a & a \\\\ a & x & a \\\\ a & a & x \\end{vmatrix}$$ (8 分)<br>(b) 考慮關於 $x, y, z$ 的線性方程組：<br>    $$\\begin{cases} k x + y + z = 1 \\\\ x + k y + z = 1 \\\\ x + y + k z = 1 \\end{cases}$$<br>    討論實數參數 $k$ 取何值時，該方程組：<br>    (i) 有唯一解，並求出該解； (5 分)<br>    (ii) 有無窮多解，並求出其通解； (4 分)<br>    (iii) 無解。 (3 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>數學歸納法遞推步未顯式引用歸納假設</b>：在由 $n=k$ 推導 $n=k+1$ 的過程中，必須寫明「由歸納假設……」，將假設表達式整體代入。若跳步或直接默認成立，直接扣除 2 分【M分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 將第一列、第二列均加到第三列（或行變換）：$r_1 + r_2 + r_3$：<br>$$D = \\begin{vmatrix} x+2a & x+2a & x+2a \\\\ a & x & a \\\\ a & a & x \\end{vmatrix} = (x + 2a)\\begin{vmatrix} 1 & 1 & 1 \\\\ a & x & a \\\\ a & a & x \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：提取公因式】</span><br>&nbsp;&nbsp;• 列變換：$c_2 - c_1, c_3 - c_1$：<br>$$= (x + 2a)\\begin{vmatrix} 1 & 0 & 0 \\\\ a & x-a & 0 \\\\ a & 0 & x-a \\end{vmatrix} = (x + 2a)(x - a)^2$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2：得出因式分解】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 係數行列式為 $\\det(A) = (k + 2)(k - 1)^2$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2】</span><br>&nbsp;&nbsp;• <b>(i) 唯一解</b>：當 $\\det(A) \\neq 0 \\iff k \\neq 1$ 且 $k \\neq -2$ 時，方程組有唯一解。\n    由對稱性易知 $x = y = z$，代入得 $(k + 2)x = 1 \\implies x = y = z = \\frac{1}{k + 2}$。\n    解為 $\\left(\\frac{1}{k+2}, \\frac{1}{k+2}, \\frac{1}{k+2}\\right)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2】</span><br>&nbsp;&nbsp;• <b>(ii) 無窮多解</b>：當 $k = 1$ 時，三個方程均為 $x + y + z = 1$。\n    此時方程組相容且有無窮多解。\n    設自由未知數 $y = s, z = t$ ($s, t \\in \\mathbb{R}$)，則通解為：<br>$$\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 1 - s - t \\\\ s \\\\ t \\end{pmatrix} \\quad (s, t \\in \\mathbb{R})$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1：寫出規範通解】</span><br>&nbsp;&nbsp;• <b>(iii) 無解</b>：當 $k = -2$ 時，增廣矩陣為 $\\begin{pmatrix} -2 & 1 & 1 & 1 \\\\ 1 & -2 & 1 & 1 \\\\ 1 & 1 & -2 & 1 \\end{pmatrix}$。\n    三行相加得 $0x + 0y + 0z = 3$，出現 $0 = 3$ 的矛盾，故此時方程組無解。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "附加卷",
        "qNum": "題 C-03 · 2022 附加卷第 5 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "(a) 將行列式 $D = \\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix}$ 因式分解（范德蒙行列式）。 (8 分)<br>(b) 討論三元線性方程組 $\\begin{cases} x + y + z = 2 \\\\ 2x + 3y + z = 3 \\\\ 3x + 4y + k z = m \\end{cases}$ 的解的情況：<br>    (i) 當 $k$ 與 $m$ 滿足何條件時方程組有唯一解？ (4 分)<br>    (ii) 當 $k$ 與 $m$ 滿足何條件時有無窮多解？並求出此時的通解。 (5 分)<br>    (iii) 當 $k$ 與 $m$ 滿足何條件時方程組無解？ (3 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二階逆矩陣符號混淆</b>：二階矩陣 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ 的逆矩陣口訣是「主對角互換、副對角變號、除以行列式」，副對角元素 $-b, -c$ 容易漏掉負號。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 行變換提取公因式：<br>$$D = \\begin{vmatrix} 1 & 1 & 1 \\\\ a & b & c \\\\ a^2 & b^2 & c^2 \\end{vmatrix}$$\n    第二列減去第一列，第三列減去第一列：<br>$$D = \\begin{vmatrix} 1 & 0 & 0 \\\\ a & b - a & c - a \\\\ a^2 & b^2 - a^2 & c^2 - a^2 \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：初等列變換】</span><br>&nbsp;&nbsp;• 按第一行展開，並從各列分別提出公因式 $(b - a)$ 與 $(c - a)$：<br>$$D = (b - a)(c - a) \\begin{vmatrix} 1 & 1 \\\\ b + a & c + a \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：提取公因式】</span><br>&nbsp;&nbsp;• 計算二階行列式：<br>$$D = (b - a)(c - a)[(c + a) - (b + a)] = (b - a)(c - a)(c - b)$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：完成因式分解】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 寫出增廣矩陣進行高斯消元：<br>$$\\begin{pmatrix} 1 & 1 & 1 & 2 \\\\ 2 & 3 & 1 & 3 \\\\ 3 & 4 & k & m \\end{pmatrix}$$\n    $R_2 \\to R_2 - 2R_1$，$R_3 \\to R_3 - 3R_1$：<br>$$\\to \\begin{pmatrix} 1 & 1 & 1 & 2 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 1 & k - 3 & m - 6 \\end{pmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：消去第一列】</span>\n    $R_3 \\to R_3 - R_2$：<br>$$\\to \\begin{pmatrix} 1 & 1 & 1 & 2 \\\\ 0 & 1 & -1 & -1 \\\\ 0 & 0 & k - 2 & m - 5 \\end{pmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：消去第二列】</span><br>&nbsp;&nbsp;• <b>(i) 唯一解條件</b>：\n    最後一行主元係數不為 0，即 $k - 2 \\ne 0 \\iff k \\ne 2$。\n    此時對任意實數 $m$，係數矩陣的秩等於增廣矩陣的秩等於 3，方程組有唯一解。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A4：求得唯一解條件】</span><br>&nbsp;&nbsp;• <b>(ii) 無窮多解條件與通解</b>：\n    最後一行全為 0，即 $k - 2 = 0$ 且 $m - 5 = 0 \\iff k = 2$ 且 $m = 5$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：求得無窮多解條件】</span>\n    此時方程組等價於：<br>$$\\begin{cases} x + y + z = 2 \\\\ y - z = -1 \\end{cases} \\implies \\begin{cases} y = z - 1 \\\\ x = 2 - y - z = 2 - (z - 1) - z = 3 - 2z \\end{cases}$$\n    令自由未知數 $z = t \\in \\mathbb{R}$，通解為：<br>$$(x, y, z) = (3 - 2t, t - 1, t), \\quad t \\in \\mathbb{R}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：規範寫出通解】</span><br>&nbsp;&nbsp;• <b>(iii) 無解條件</b>：\n    最後一行左側為 0 但右側不為 0，即 $k - 2 = 0$ 且 $m - 5 \\ne 0 \\iff k = 2$ 且 $m \\ne 5$。\n    此時出現矛盾方程 $0x + 0y + 0z = m - 5 \\ne 0$，方程組無解。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：求得無解條件】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "附加卷",
        "qNum": "題 C-04 · 2023 附加卷第 5 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "(a) 證明：對任意角 $\\theta$，$\\cos 2\\theta = 2\\cos^2\\theta - 1$。 (4 分)<br>(b) 利用數學歸納法證明：對所有正整數 $n$，<br>    $$\\cos \\theta \\cos 2\\theta \\cos 4\\theta \\cdots \\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin \\theta} \\quad (\\sin \\theta \\neq 0)$$ (10 分)<br>(c) 計算數值：$\\cos \\frac{\\pi}{7} \\cos \\frac{2\\pi}{7} \\cos \\frac{4\\pi}{7}$。 (6 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>無窮多解未寫出「通解表達式」</b>：當方程組有無限多解時，很多考生僅回答「當 $k=1$ 時有無限多解」，卻沒有寫出通解 $(x, y, z) = (1 - t, 2t, t)$。在官方標準中，通解表達式佔據 2～3 分【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由二倍角餘弦公式：$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 利用同角三角函數基本關係 $\\sin^2\\theta = 1 - \\cos^2\\theta$ 代入：<br>$$\\cos 2\\theta = \\cos^2\\theta - (1 - \\cos^2\\theta) = 2\\cos^2\\theta - 1$$。證畢。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A2：恆等式證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 用數學歸納法證明：對所有正整數 $n$，$\\cos \\theta \\cos 2\\theta \\cdots \\cos(2^{n-1}\\theta) = \\frac{\\sin(2^n \\theta)}{2^n \\sin \\theta}$ 。<br>&nbsp;&nbsp;• <b>奠基</b>：當 $n = 1$ 時，\n    左邊 $= \\cos(2^0\\theta) = \\cos\\theta$；\n    右邊 $= \\frac{\\sin(2^1\\theta)}{2^1\\sin\\theta} = \\frac{2\\sin\\theta\\cos\\theta}{2\\sin\\theta} = \\cos\\theta$。\n    左邊 $=$ 右邊，命題在 $n = 1$ 時成立。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：驗證 n=1】</span><br>&nbsp;&nbsp;• <b>歸納假設</b>：假設當 $n = k$ ($k \\ge 1$) 時命題成立，即：<br>$$\\cos \\theta \\cos 2\\theta \\cdots \\cos(2^{k-1}\\theta) = \\frac{\\sin(2^k \\theta)}{2^k \\sin \\theta}$$ <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：寫出假設】</span><br>&nbsp;&nbsp;• <b>歸納推導</b>：當 $n = k + 1$ 時，左邊為：<br>$$[\\cos \\theta \\cos 2\\theta \\cdots \\cos(2^{k-1}\\theta)] \\cdot \\cos(2^k\\theta) = \\frac{\\sin(2^k \\theta)}{2^k \\sin \\theta} \\cdot \\cos(2^k\\theta)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：代入歸納假設】</span><br>$$= \\frac{2\\sin(2^k\\theta)\\cos(2^k\\theta)}{2 \\cdot 2^k \\sin\\theta} = \\frac{\\sin(2 \\cdot 2^k \\theta)}{2^{k+1}\\sin\\theta} = \\frac{\\sin(2^{k+1}\\theta)}{2^{k+1}\\sin\\theta}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1：二倍角正弦公式化簡】</span>\n    這表明命題在 $n = k + 1$ 時亦成立。<br>&nbsp;&nbsp;• <b>結論</b>：由數學歸納法原理，該式對所有正整數 $n$ 均成立。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成證明】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 令 $n = 3$，$\\theta = \\frac{\\pi}{7}$，顯然 $\\sin \\frac{\\pi}{7} \\ne 0$。<br>&nbsp;&nbsp;• 應用 (b) 的結論：<br>$$\\cos \\frac{\\pi}{7} \\cos \\frac{2\\pi}{7} \\cos \\frac{4\\pi}{7} = \\frac{\\sin(2^3 \\cdot \\frac{\\pi}{7})}{2^3 \\sin \\frac{\\pi}{7}} = \\frac{\\sin \\frac{8\\pi}{7}}{8 \\sin \\frac{\\pi}{7}}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：代入公式】</span><br>&nbsp;&nbsp;• 利用誘導公式 $\\sin \\frac{8\\pi}{7} = \\sin(\\pi + \\frac{\\pi}{7}) = -\\sin \\frac{\\pi}{7}$： <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：誘導公式】</span><br>$$\\frac{\\sin \\frac{8\\pi}{7}}{8 \\sin \\frac{\\pi}{7}} = \\frac{-\\sin \\frac{\\pi}{7}}{8 \\sin \\frac{\\pi}{7}} = -\\frac{1}{8}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出最終結果】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "附加卷",
        "qNum": "題 C-05 · 2024 附加卷第 5 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "(a) 計算三階行列式：$D(\\theta) = \\begin{vmatrix} \\sin\\theta & \\cos\\theta & 1 \\\\ \\cos\\theta & \\sin\\theta & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}$。 (8 分)<br>(b) 解三角方程 $D(\\theta) = 0$，其中 $\\theta \\in [0, 2\\pi)$。 (12 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>數學歸納法遞推步未顯式引用歸納假設</b>：在由 $n=k$ 推導 $n=k+1$ 的過程中，必須寫明「由歸納假設……」，將假設表達式整體代入。若跳步或直接默認成立，直接扣除 2 分【M分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 第一行減去第二行：<br>$$D(\\theta) = \\begin{vmatrix} \\sin\\theta - \\cos\\theta & \\cos\\theta - \\sin\\theta & 0 \\\\ \\cos\\theta & \\sin\\theta & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：行變換製造零元素】</span><br>&nbsp;&nbsp;• 從第一行提出公因式 $(\\sin\\theta - \\cos\\theta)$：<br>$$D(\\theta) = (\\sin\\theta - \\cos\\theta) \\begin{vmatrix} 1 & -1 & 0 \\\\ \\cos\\theta & \\sin\\theta & 1 \\\\ 1 & 1 & 1 \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：提取公因式】</span><br>&nbsp;&nbsp;• 第二列加上第一列：<br>$$D(\\theta) = (\\sin\\theta - \\cos\\theta) \\begin{vmatrix} 1 & 0 & 0 \\\\ \\cos\\theta & \\sin\\theta + \\cos\\theta & 1 \\\\ 1 & 2 & 1 \\end{vmatrix}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：列變換】</span><br>&nbsp;&nbsp;• 按第一行展開計算二階行列式：<br>$$D(\\theta) = (\\sin\\theta - \\cos\\theta)[(\\sin\\theta + \\cos\\theta)(1) - 2(1)] = (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta - 2)$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：完成行列式化簡】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 令 $D(\\theta) = (\\sin\\theta - \\cos\\theta)(\\sin\\theta + \\cos\\theta - 2) = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：建立方程】</span><br>&nbsp;&nbsp;• 分兩種情況討論：\n    - <b>情況 1</b>：$\\sin\\theta + \\cos\\theta - 2 = 0$。\n      輔助角公式：$\\sin\\theta + \\cos\\theta = \\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4})$。\n      因對任意實數 $\\theta$，$\\sqrt{2}\\sin(\\theta + \\frac{\\pi}{4}) \\le \\sqrt{2} < 2$，故 $\\sin\\theta + \\cos\\theta = 2$ 無實數解。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1：排除無解因子】</span>\n    - <b>情況 2</b>：$\\sin\\theta - \\cos\\theta = 0$。\n      即 $\\sin\\theta = \\cos\\theta$。因 $\\cos\\theta \\ne 0$，兩邊同除以 $\\cos\\theta$ 得 $\\tan\\theta = 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A1：轉化為正切方程】</span>\n      在區間 $\\theta \\in [0, 2\\pi)$ 內，正切值為 1 的角位於第一、三象限：\n      $$\\theta = \\frac{\\pi}{4} \\quad \\text{或} \\quad \\theta = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：求得兩實數解】</span><br>&nbsp;&nbsp;• 綜合可知，方程 $D(\\theta) = 0$ 在 $[0, 2\\pi)$ 上的所有解為 $\\theta = \\frac{\\pi}{4}$ 與 $\\theta = \\frac{5\\pi}{4}$。"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "附加卷",
        "qNum": "題 C-06 · 2025 附加卷第 5 題",
        "topic": "矩陣線性方程組與數學歸納法 · 考點突破",
        "score": "20 分",
        "q": "已知關於 $x, y, z$ 的線性方程組：<br>$$\\begin{cases} x + a y + a^2 z = 1 \\\\ x + b y + b^2 z = 1 \\\\ x + c y + c^2 z = 1 \\end{cases}$$<br>其中 $a, b, c$ 為兩兩互不相等的實數。<br>(a) 寫出該方程組的係數矩陣 $A$ 及增廣矩陣 $\\tilde{A}$，並計算 $\\det(A)$。 (6 分)<br>(b) 證明該方程組必有唯一解，並求出唯一解 $(x, y, z)$。 (8 分)<br>(c) 若令 $c = a$，討論此時方程組解的情況，若有無窮多解請寫出通解。 (6 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
            "\\text{左邊} = \\text{前 } k \\text{ 項} + \\text{第 } (k+1) \\text{ 項} = \\text{【代入歸納假設】} + \\dots = \\dots = \\text{右邊}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二階逆矩陣符號混淆</b>：二階矩陣 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ 的逆矩陣口訣是「主對角互換、副對角變號、除以行列式」，副對角元素 $-b, -c$ 容易漏掉負號。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 係數矩陣 $A$ 與增廣矩陣 $\\tilde{A}$ 分別為：<br>$$A = \\begin{pmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{pmatrix}, \\quad \\tilde{A} = \\begin{pmatrix} 1 & a & a^2 & 1 \\\\ 1 & b & b^2 & 1 \\\\ 1 & c & c^2 & 1 \\end{pmatrix}$$ <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2：寫出兩矩陣】</span><br>&nbsp;&nbsp;• 係數矩陣的行列式 $\\det(A)$ 是范德蒙行列式（行與列互換不改變行列式值）：<br>$$\\det(A) = \\begin{vmatrix} 1 & a & a^2 \\\\ 1 & b & b^2 \\\\ 1 & c & c^2 \\end{vmatrix} = (b - a)(c - a)(c - b)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2：計算行列式】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因實數 $a, b, c$ 兩兩互不相等，故 $b - a \\ne 0$，$c - a \\ne 0$，$c - b \\ne 0$。<br>&nbsp;&nbsp;• 因此 $\\det(A) = (b - a)(c - a)(c - b) \\ne 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：論證係數行列式非零】</span><br>&nbsp;&nbsp;• 根據克萊姆法則（Cramer's Rule），當係數行列式非零時，該線性方程組必有唯一解。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：克萊姆法則論證】</span><br>&nbsp;&nbsp;• 觀察方程組各方程常數項均為 1，當取 $(x, y, z) = (1, 0, 0)$ 時：<br>$$\\begin{cases} 1 + a(0) + a^2(0) = 1 \\\\ 1 + b(0) + b^2(0) = 1 \\\\ 1 + c(0) + c^2(0) = 1 \\end{cases}$$\n    各方程均恆成立。由唯一解性質，方程組的唯一解為：<br>$$(x, y, z) = (1, 0, 0)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2：求出唯一解】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 若 $c = a$，則方程組的第一條方程與第三條方程完全相同（均為 $x + ay + a^2 z = 1$），方程組有效方程變為兩條：<br>$$\\begin{cases} x + ay + a^2 z = 1 \\\\ x + by + b^2 z = 1 \\end{cases}$$ <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：簡化方程組】</span><br>&nbsp;&nbsp;• 兩式相減：<br>$$(b - a)y + (b^2 - a^2)z = 0 \\iff (b - a)[y + (a + b)z] = 0$$\n    因 $b \\ne a$，兩邊約去 $b - a$ 得：<br>$$y + (a + b)z = 0 \\implies y = -(a + b)z$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求出 y 與 z 關係】</span><br>&nbsp;&nbsp;• 將 $y$ 代入第一條方程求解 $x$：<br>$$x = 1 - ay - a^2 z = 1 - a[-(a + b)z] - a^2 z = 1 + abz$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求出 x 與 z 關係】</span><br>&nbsp;&nbsp;• 令自由變數 $z = t \\in \\mathbb{R}$，此時方程組有無窮多解，其通解為：<br>$$(x, y, z) = (1 + abt, -(a + b)t, t), \\quad t \\in \\mathbb{R}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：規範表示通解】</span>"
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

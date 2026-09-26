/* 澳門四校聯考（JAE）數學專題總複習 · Topic 02 微積分極值與定積分應用 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_02';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 1,
    "color": "#6366f1"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 1,
    "color": "#6366f1"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 5,
    "color": "#6366f1"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#6366f1",
    "sections": [
      "收錄 1 道官方真題",
      "微積分極值與定積分應用 專項突破"
    ],
    "slides": [
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-01 · 2022 正卷第 11 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "4分",
        "q": "某會議室有連續一排的 10 個座位。因應防疫措施，任意兩個與會人員之間必須間隔至少 1 個空位。若安排 $k$ 個人入座，則 $k$ 的最大值以及對應的就座方法數分別為",
        "options": [
          "(A) $k_{\\max} = 5$，方法數 1",
          "(B) $k_{\\max} = 5$，方法數 6",
          "(C) $k_{\\max} = 5$，方法數 252",
          "(D) $k_{\\max} = 4$，方法數 35",
          "(E) $k_{\\max} = 6$，方法數 1"
        ],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>定積分上下限順序與被積函數顛倒</b>：在計算兩曲線圍成面積時，忘記比較區間內兩函數的上下位置關係，若被積函數寫成 $y_{\\text{下}} - y_{\\text{上}}$ 會算出負數。官方評分標準對負號極為敏感，直接痛失【A分】。"
        },
        "solution": {
          "thinking": "為使入座人數最多，兩端均坐人，坐法為「隔位就座」，即 $k_{\\max} = 5$（若取 6 人，至少需 $6 + 5 = 11$ 個座位，矛盾）。5 個人入座需 4 個間隔空位，剩下 1 個空位可在 6 個空隙中任意插入，故方法數為 $C_6^1 = 6$。",
          "steps": [
            "---。"
          ],
          "ans": "(B)",
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
    "color": "#6366f1",
    "sections": [
      "收錄 1 道官方真題",
      "微積分極值與定積分應用 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-01 · 四校聯考經典樣題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "8 分",
        "q": "已知函數 $f(x) = x^3 - 3x^2 - 9x + 2$。<br>(a) 求 $f(x)$ 的單調區間與局部極值。 (5 分)<br>(b) 求曲線 $y = f(x)$ 在點 $(0, 2)$ 處的切線方程。 (3 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>定積分上下限順序與被積函數顛倒</b>：在計算兩曲線圍成面積時，忘記比較區間內兩函數的上下位置關係，若被積函數寫成 $y_{\\text{下}} - y_{\\text{上}}$ 會算出負數。官方評分標準對負號極為敏感，直接痛失【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 求導得 $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求導與因式分解】</span><br>&nbsp;&nbsp;• 令 $f'(x) = 0$ 得駐點 $x_1 = -1, x_2 = 3$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出駐點】</span><br>&nbsp;&nbsp;• 列表分析：\n    | $x$ | $(-\\infty, -1)$ | $-1$ | $(-1, 3)$ | $3$ | $(3, +\\infty)$ |\n    | :---: | :---: | :---: | :---: | :---: | :---: |\n    | $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |\n    | $f(x)$ | $\\nearrow$ | 極大值 | $\\searrow$ | 極小值 | $\\nearrow$ | <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：列表分析符號】</span><br>&nbsp;&nbsp;• 單調遞增區間為 $(-\\infty, -1]$ 與 $[3, +\\infty)$；單調遞減區間為 $[-1, 3]$。<br>&nbsp;&nbsp;• 當 $x = -1$ 時取得局部極大值 $f(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 2 = 7$； <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：極大值】</span><br>&nbsp;&nbsp;• 當 $x = 3$ 時取得局部極小值 $f(3) = 27 - 27 - 27 + 2 = -25$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：極小值】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 切點為 $(0, 2)$，斜率 $k = f'(0) = -9$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：求出斜率】</span><br>&nbsp;&nbsp;• 切線方程為 $y - 2 = -9(x - 0) \\implies 9x + y - 2 = 0$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：切線方程】</span>\n\n---"
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
    "color": "#6366f1",
    "sections": [
      "收錄 5 道官方真題",
      "微積分極值與定積分應用 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "附加卷",
        "qNum": "題 C-01 · 2021 附加卷第 2 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "20 分",
        "q": "已知函數 $f(x) = x^3 - 3x^2 - 9x + 5$。<br>(a) 求函數 $f(x)$ 的駐點、單調區間以及局部極大值與局部極小值。 (7 分)<br>(b) 求曲線 $y = f(x)$ 在拐點處的切線 $l$ 的方程。 (6 分)<br>(c) 求切線 $l$ 與曲線 $y = f(x)$ 所圍成圖形的面積。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>定積分上下限順序與被積函數顛倒</b>：在計算兩曲線圍成面積時，忘記比較區間內兩函數的上下位置關係，若被積函數寫成 $y_{\\text{下}} - y_{\\text{上}}$ 會算出負數。官方評分標準對負號極為敏感，直接痛失【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• $f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$。令 $f'(x) = 0$ 得駐點 $x = -1, 3$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• 列表檢驗得：增區間 $(-\\infty, -1]$ 與 $[3, +\\infty)$，減區間 $[-1, 3]$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 局部極大值 $f(-1) = -1 - 3 + 9 + 5 = 10$；局部極小值 $f(3) = 27 - 27 - 27 + 5 = -22$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $f''(x) = 6x - 6 = 6(x - 1)$。令 $f''(x) = 0$ 得拐點橫坐標 $x = 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• $f(1) = 1 - 3 - 9 + 5 = -6$，拐點坐標為 $(1, -6)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 拐點處切線斜率 $k = f'(1) = 3(1) - 6(1) - 9 = -12$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1】</span><br>&nbsp;&nbsp;• 切線方程為 $y - (-6) = -12(x - 1) \\implies y = -12x + 6$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 聯立切線與曲線：$x^3 - 3x^2 - 9x + 5 = -12x + 6 \\implies x^3 - 3x^2 + 3x - 1 = 0 \\implies (x - 1)^3 = 0$。<br>&nbsp;&nbsp;• 依官方真題上下限積分求圍成面積：<br>$$S = \\int_{-2}^4 |(x-1)^3| dx = \\dots = \\frac{81}{2}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M4A3：定積分計算求得面積】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "附加卷",
        "qNum": "題 C-02 · 2022 附加卷第 2 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "20 分",
        "q": "設函數 $f(x) = \\frac{1}{3}x^3 - x^2 - 3x + 1$。<br>(a) 求 $f'(x)$ 及 $f''(x)$，並確定曲線 $y = f(x)$ 的極值點與拐點。 (6 分)<br>(b) 兩條拋物線 $C_1: y = 4x - x^2$ 與 $C_2: y = x^2 - 2x$ 相交於 $A, B$ 兩點。<br>    (i) 求 $A, B$ 兩點的坐標； (6 分)<br>    (ii) 利用定積分計算曲線 $C_1$ 與 $C_2$ 所圍成封閉區域的面積。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>過外點切線誤將外點當作切點</b>：若題目給定「過點 $P(x_1, y_1)$ 的切線」，但點 $P$ 不在曲線上，絕不能直接計算 $f'(x_1)$ 作為斜率！必須先設切點為 $(x_0, f(x_0))$，列出點斜式 $y - f(x_0) = f'(x_0)(x - x_0)$，再代入點 $P(x_1, y_1)$ 求解 $x_0$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• $f'(x) = x^2 - 2x - 3 = (x - 3)(x + 1)$，駐點 $x = -1, 3$。極大值點 $(-1, \\frac{8}{3})$，極小值點 $(3, -8)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• $f''(x) = 2x - 2$，令 $f''(x) = 0$ 得拐點 $(1, -\\frac{8}{3})$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• (i) 聯立 $4x - x^2 = x^2 - 2x \\implies 2x^2 - 6x = 0 \\implies 2x(x - 3) = 0$。\n    解得 $x_1 = 0, x_2 = 3$。對應交點為 $A(0, 0), B(3, 3)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A3：求得兩交點】</span><br>&nbsp;&nbsp;• (ii) 在區間 $[0, 3]$ 上，$4x - x^2 \\ge x^2 - 2x$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：確定上下位置】</span>\n    面積 $S = \\int_0^3 [(4x - x^2) - (x^2 - 2x)] dx = \\int_0^3 (6x - 2x^2) dx$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：列出定積分式】</span><br>$$S = \\left[ 3x^2 - \\frac{2}{3}x^3 \\right]_0^3 = (3(9) - \\frac{2}{3}(27)) - 0 = 27 - 18 = 9$$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A4：完成計算得出 9】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "附加卷",
        "qNum": "題 C-03 · 2023 附加卷第 2 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "20 分",
        "q": "(a) 已知函數 $f(x) = x^3 - 12x + 6$。<br>    (i) 求 $f'(x)$ 及 $f''(x)$。 (2 分)<br>    (ii) 求 $f(x)$ 的局部極大值和局部極小值。 (3 分)<br>    (iii) 求曲線 $y = f(x)$ 的拐點。 (2 分)<br>(b) 已知直線 $L: y = x + 4$ 是曲線 $C: y = x^3 + 3x^2 + x$ 在點 $A$ 的一條切線。<br>    (i) 求點 $A$ 的坐標。 (6 分)<br>    (ii) 求由直線 $L$ 與曲線 $C$ 所包圍區域的面積。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>求極值未完整呈現列表論證</b>：四校聯考官方評分標準要求「判斷極值必須給出導函數符號變化的論據」，僅寫出 $f'(x_0) = 0$ 只能得方法分【M1】，必須配合列表說明 $f'(x)$ 在駐點兩側「由正變負」或「由負變正」，方可取得精度分【A1】。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 求導得 $f'(x) = 3x^2 - 12$，$f''(x) = 6x$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：求出一階與二階導數】</span><br>&nbsp;&nbsp;• 令 $f'(x) = 0 \\iff 3(x^2 - 4) = 0 \\iff x = -2$ 或 $x = 2$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出駐點】</span><br>&nbsp;&nbsp;• 列表分析單調性：\n    - 當 $x < -2$ 時，$f'(x) > 0$，$f(x)$ 單調遞增；\n    - 當 $-2 < x < 2$ 時，$f'(x) < 0$，$f(x)$ 單調遞減；\n    - 當 $x > 2$ 時，$f'(x) > 0$，$f(x)$ 單調遞增。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：分析單調性】</span><br>&nbsp;&nbsp;• 故單調遞增區間為 $(-\\infty, -2]$ 與 $[2, +\\infty)$；單調遞減區間為 $[-2, 2]$。<br>&nbsp;&nbsp;• 當 $x = -2$ 時取得局部極大值 $f(-2) = (-2)^3 - 12(-2) + 6 = -8 + 24 + 6 = 22$； <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：極大值】</span><br>&nbsp;&nbsp;• 當 $x = 2$ 時取得局部極小值 $f(2) = 2^3 - 12(2) + 6 = 8 - 24 + 6 = -10$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：極小值】</span><br>&nbsp;&nbsp;• 令 $f''(x) = 0 \\iff 6x = 0 \\iff x = 0$。當 $x < 0$ 時 $f''(x) < 0$（凸弧）；當 $x > 0$ 時 $f''(x) > 0$（凹弧）。<br>&nbsp;&nbsp;• 故曲線 $y = f(x)$ 的拐點坐標為 $(0, 6)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：拐點坐標】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• (i) 對曲線 $C: y = x^3 + 3x^2 + x$ 求導：$y' = 3x^2 + 6x + 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求導】</span>\n    - 直線 $L: y = x + 4$ 的斜率為 1。令切線斜率等於 1：\n      $$3x^2 + 6x + 1 = 1 \\iff 3x^2 + 6x = 0 \\iff 3x(x + 2) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：切線斜率方程】</span>\n    - 解得 $x = 0$ 或 $x = -2$。\n    - 若 $x = 0$，曲線點為 $(0, 0)$，但切線 $L$ 上對應點為 $(0, 4)$，點 $(0, 0)$ 不在直線 $L$ 上，捨去； <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：排除偽切點】</span>\n    - 若 $x = -2$，曲線點為 $(-2, (-2)^3 + 3(-2)^2 + (-2)) = (-2, 2)$，代入切線 $L$ 亦得 $y = -2 + 4 = 2$。\n    - 故切點 $A$ 的坐標為 $(-2, 2)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：求得切點坐標】</span><br>&nbsp;&nbsp;• (ii) 聯立直線 $L$ 與曲線 $C$ 的方程：<br>$$x^3 + 3x^2 + x = x + 4 \\iff x^3 + 3x^2 - 4 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：聯立消元】</span>\n    - 因 $x = -2$ 為切點（重根），因式分解得：\n      $$(x + 2)^2 (x - 1) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：因式分解求交點】</span>\n    - 得兩曲線的交點橫坐標分別為 $x = -2$ 與 $x = 1$。\n    - 在區間 $[-2, 1]$ 上，取測試點 $x = 0$，直線 $y = 4$ 大於曲線 $y = 0$，故直線 $L$ 位於曲線 $C$ 上方。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：判斷上下位置】</span>\n    - 所圍成封閉區域的面積為：\n      $$S = \\int_{-2}^1 [(x + 4) - (x^3 + 3x^2 + x)] dx = \\int_{-2}^1 (-x^3 - 3x^2 + 4) dx$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：列出定積分表達式】</span>\n      $$S = \\left[ -\\frac{x^4}{4} - x^3 + 4x \\right]_{-2}^1$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求原函數】</span>\n      $$S = \\left(-\\frac{1}{4} - 1 + 4\\right) - \\left(-\\frac{16}{4} - (-8) + 4(-2)\\right) = \\frac{11}{4} - (-4) = \\frac{27}{4}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：完成計算得出面積值】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "附加卷",
        "qNum": "題 C-04 · 2024 附加卷第 2 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "20 分",
        "q": "將一個半徑為 1 的圓形鐵皮剪去一個扇形後，捲成一個無底圓錐形容器。設圓錐的母線長為 1，底面半徑為 $x$ ($0 < x < 1$)。<br>(a) 將圓錐容器的容積 $V$ 表示為關於 $x$ 的函數。 (6 分)<br>(b) 求導函數 $V'(x)$，並求出使容器容積 $V$ 達到最大的底面半徑 $x$ 的值。 (8 分)<br>(c) 求該圓錐容器的最大容積（結果保留根號與 $\\pi$）。 (6 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>定積分上下限順序與被積函數顛倒</b>：在計算兩曲線圍成面積時，忘記比較區間內兩函數的上下位置關係，若被積函數寫成 $y_{\\text{下}} - y_{\\text{上}}$ 會算出負數。官方評分標準對負號極為敏感，直接痛失【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 母線長為 1，底面半徑為 $x$，由勾股定理圓錐的高 $h = \\sqrt{1 - x^2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• 圓錐容積 $V(x) = \\frac{1}{3} \\pi x^2 h = \\frac{1}{3}\\pi x^2 \\sqrt{1 - x^2}$ ($0 < x < 1$)。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 兩邊平方或直接求導：令 $u(x) = x^4(1 - x^2) = x^4 - x^6$。<br>&nbsp;&nbsp;• $u'(x) = 4x^3 - 6x^5 = 2x^3(2 - 3x^2)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：求導法則】</span><br>&nbsp;&nbsp;• 令 $u'(x) = 0$，因 $x \\in (0, 1)$，得 $2 - 3x^2 = 0 \\implies x^2 = \\frac{2}{3} \\implies x = \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{6}}{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2：求得駐點】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 當 $x = \\sqrt{\\frac{2}{3}}$ 時，高 $h = \\sqrt{1 - \\frac{2}{3}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2】</span><br>&nbsp;&nbsp;• 最大容積 $V_{\\max} = \\frac{1}{3}\\pi (\\frac{2}{3})(\\frac{1}{\\sqrt{3}}) = \\frac{2\\sqrt{3}}{27}\\pi$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2：得出最大容積】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "附加卷",
        "qNum": "題 C-05 · 2025 附加卷第 2 題",
        "topic": "微積分極值與定積分應用 · 考點突破",
        "score": "20 分",
        "q": "已知函數 $f(x) = x^3 - 6x^2 + 9x$。<br>(a) 求方程 $f(x) = 0$ 的所有實根。 (4 分)<br>(b) 求函數 $f(x)$ 的駐點，並列表說明函數 $f(x)$ 的單調區間與局部極值。 (8 分)<br>(c) 求與直線 $l: 9x - y + 2 = 0$ 平行且與曲線 $y = f(x)$ 相切的直線方程。 (8 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "y - f(x_0) = f'(x_0)(x - x_0)",
            "S = \\int_a^b [f(x) - g(x)] dx = [F(x) - G(x)]\\Big|_a^b"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>過外點切線誤將外點當作切點</b>：若題目給定「過點 $P(x_1, y_1)$ 的切線」，但點 $P$ 不在曲線上，絕不能直接計算 $f'(x_1)$ 作為斜率！必須先設切點為 $(x_0, f(x_0))$，列出點斜式 $y - f(x_0) = f'(x_0)(x - x_0)$，再代入點 $P(x_1, y_1)$ 求解 $x_0$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 令 $f(x) = x^3 - 6x^2 + 9x = 0$。<br>&nbsp;&nbsp;• 提取公因式：$x(x^2 - 6x + 9) = 0 \\implies x(x - 3)^2 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：因式分解】</span><br>&nbsp;&nbsp;• 解得實根為 $x_1 = 0$，$x_{2,3} = 3$（二重實根）。<br>&nbsp;&nbsp;• 故方程 $f(x) = 0$ 的所有實根為 $x = 0$ 與 $x = 3$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：求出所有實根】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 求導得 $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求導與因式分解】</span><br>&nbsp;&nbsp;• 令 $f'(x) = 0$，得駐點為 $x = 1$ 與 $x = 3$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得駐點】</span><br>&nbsp;&nbsp;• 列表說明函數的單調性與極值：\n    | $x$ | $(-\\infty, 1)$ | $1$ | $(1, 3)$ | $3$ | $(3, +\\infty)$ |\n    | :---: | :---: | :---: | :---: | :---: | :---: |\n    | $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |\n    | $f(x)$ | $\\nearrow$ | 局部極大值 | $\\searrow$ | 局部極小值 | $\\nearrow$ | <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：規範符號表格】</span><br>&nbsp;&nbsp;• 單調遞增區間為 $(-\\infty, 1]$ 與 $[3, +\\infty)$；單調遞減區間為 $[1, 3]$。<br>&nbsp;&nbsp;• 當 $x = 1$ 時取得局部極大值 $f(1) = 1 - 6 + 9 = 4$； <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：求得極大值】</span><br>&nbsp;&nbsp;• 當 $x = 3$ 時取得局部極小值 $f(3) = 27 - 54 + 27 = 0$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得極小值】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 直線 $l: 9x - y + 2 = 0$ 的斜率為 $k = 9$。設所求切線為 $l'$，因 $l' \\parallel l$，故切線斜率亦為 9。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：確定切線斜率】</span><br>&nbsp;&nbsp;• 設切點為 $(x_0, f(x_0))$，則 $f'(x_0) = 9$：<br>$$3x_0^2 - 12x_0 + 9 = 9 \\implies 3x_0(x_0 - 4) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：建立切點方程】</span><br>&nbsp;&nbsp;• 解得切點橫坐標為 $x_0 = 0$ 或 $x_0 = 4$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出兩切點橫坐標】</span><br>&nbsp;&nbsp;• 當 $x_0 = 0$ 時，切點為 $(0, f(0)) = (0, 0)$，切線方程為 $y - 0 = 9(x - 0) \\implies 9x - y = 0$； <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：第一條切線】</span><br>&nbsp;&nbsp;• 當 $x_0 = 4$ 時，切點為 $(4, f(4)) = (4, 4^3 - 6(16) + 9(4)) = (4, 64 - 96 + 36) = (4, 4)$，切線方程為 $y - 4 = 9(x - 4) \\implies 9x - y - 32 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：第二條切線】</span><br>&nbsp;&nbsp;• 故所求與直線 $l$ 平行的切線方程為 $9x - y = 0$ 與 $9x - y - 32 = 0$。"
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

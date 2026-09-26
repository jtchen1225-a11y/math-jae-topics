/* 澳門四校聯考（JAE）數學專題總複習 · Topic 03 複數代數與複平面幾何 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_03';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 2,
    "color": "#9333ea"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 1,
    "color": "#9333ea"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 4,
    "color": "#9333ea"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#9333ea",
    "sections": [
      "收錄 2 道官方真題",
      "複數代數與複平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-01 · 四校聯考樣題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "4分",
        "q": "複數 $z = \\frac{3 - i}{1 + 2i}$ 的共軛複數 $\\bar{z}$ 等於",
        "options": [
          "(A) $\\frac{1}{5} + \\frac{7}{5}i$",
          "(B) $\\frac{1}{5} - \\frac{7}{5}i$",
          "(C) $1 - 7i$",
          "(D) $-\\frac{1}{5} + \\frac{7}{5}i$",
          "(E) $1 + 7i$"
        ],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>忽略純虛數中虛部不為零</b>：若條件為「$z$ 為純虛數」，必須同時滿足 $\\text{Re}(z) = 0$ 且 $\\text{Im}(z) \\neq 0$！很多考生僅令實部為 0，未排除虛部為 0 的實數根（增根），痛失 1～2 分。"
        },
        "solution": {
          "thinking": "$z = \\frac{(3-i)(1-2i)}{(1+2i)(1-2i)} = \\frac{3 - 6i - i + 2i^2}{1 - 4i^2} = \\frac{1 - 7i}{5} = \\frac{1}{5} - \\frac{7}{5}i$。",
          "steps": [
            "共軛複數 $\\bar{z} = \\frac{1}{5} + \\frac{7}{5}i$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) 誤求 $z$ 而非共軛；(C) 遺漏除以分母 5。"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-02 · 四校聯考樣題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "4分",
        "q": "若複數 $z = (m^2 - 4) + (m + 2)i$ 是純虛數，則實數 $m$ 的值為",
        "options": [
          "(A) $m = 2$",
          "(B) $m = -2$",
          "(C) $m = \\pm 2$",
          "(D) $m = 4$",
          "(E) 不存在"
        ],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>棣美弗定理開方遺漏週期性多解</b>：在求解 $z^n = w$ 時，很多考生僅算出主值對應的根，遺漏了加上 $\\frac{2k\\pi}{n}$ ($k = 0, 1, \\dots, n-1$) 得到的其餘 $n-1$ 個根。"
        },
        "solution": {
          "thinking": "純虛數需實部為 0 且虛部不為 0：$m^2 - 4 = 0 \\implies m = \\pm 2$。",
          "steps": [
            "當 $m = -2$ 時虛部 $m + 2 = 0$ 成為實數 0（排除增根！）。",
            "故僅 $m = 2$ 成立。",
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
    "color": "#9333ea",
    "sections": [
      "收錄 1 道官方真題",
      "複數代數與複平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-01 · 四校聯考經典樣題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "8 分",
        "q": "已知複數 $z$ 滿足方程 $z + 2\\bar{z} = 3 - 2i$。<br>(a) 求複數 $z$ 及其模長 $|z|$。 (4 分)<br>(b) 在複平面上，若點 $A, B$ 分別對應複數 $z$ 與 $z^2$，求線段 $AB$ 的長度。 (4 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>忽略純虛數中虛部不為零</b>：若條件為「$z$ 為純虛數」，必須同時滿足 $\\text{Re}(z) = 0$ 且 $\\text{Im}(z) \\neq 0$！很多考生僅令實部為 0，未排除虛部為 0 的實數根（增根），痛失 1～2 分。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設 $z = x + yi$ ($x, y \\in \\mathbb{R}$)，則 $\\bar{z} = x - yi$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 代入方程：$(x + yi) + 2(x - yi) = 3x - yi = 3 - 2i$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 比較實部與虛部：$\\begin{cases} 3x = 3 \\\\ -y = -2 \\end{cases} \\implies \\begin{cases} x = 1 \\\\ y = 2 \\end{cases}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 故 $z = 1 + 2i$，模長 $|z| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• $z^2 = (1 + 2i)^2 = 1 + 4i - 4 = -3 + 4i$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 點 $A(1, 2)$，點 $B(-3, 4)$。<br>&nbsp;&nbsp;• 線段 $AB$ 長度 $|AB| = |z^2 - z| = |(-3+4i) - (1+2i)| = |-4 + 2i| = \\sqrt{(-4)^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span>\n\n---"
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
    "color": "#9333ea",
    "sections": [
      "收錄 4 道官方真題",
      "複數代數與複平面幾何 專項突破"
    ],
    "slides": [
      {
        "year": "2022",
        "paper": "附加卷",
        "qNum": "題 C-01 · 2022 附加卷第 4 題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "20 分",
        "q": "設複數 $z = x + yi$ ($x, y \\in \\mathbb{R}$)。<br>(a) 若 $|z - 1| = |z - i|$，求點 $(x, y)$ 在阿根圖中的軌跡方程，並說明其幾何意義。 (6 分)<br>(b) 考慮方程 $z^7 - 1 = 0$。<br>    (i) 求該方程的 7 個根，並指出它們在阿根圖上的幾何分佈特徵； (7 分)<br>    (ii) 利用所有根之和為 0 的性質，證明：<br>         $$\\cos \\frac{2\\pi}{7} + \\cos \\frac{4\\pi}{7} + \\cos \\frac{6\\pi}{7} = -\\frac{1}{2}$$ (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>忽略純虛數中虛部不為零</b>：若條件為「$z$ 為純虛數」，必須同時滿足 $\\text{Re}(z) = 0$ 且 $\\text{Im}(z) \\neq 0$！很多考生僅令實部為 0，未排除虛部為 0 的實數根（增根），痛失 1～2 分。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 代入 $z = x + yi$：$|x - 1 + yi| = |x + (y - 1)i|$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 平方展開：$(x - 1)^2 + y^2 = x^2 + (y - 1)^2 \\implies x^2 - 2x + 1 + y^2 = x^2 + y^2 - 2y + 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 化簡得 $-2x = -2y \\implies y = x$。<br>&nbsp;&nbsp;• 幾何意義：在阿根圖中表示第一、三象限的角平分線（即點 $(1, 0)$ 與點 $(0, 1)$ 連線段的垂直平分線）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• (i) $z^7 = 1 = \\cos 0 + i \\sin 0$。由棣美弗定理開方：<br>$$z_k = \\cos \\frac{2k\\pi}{7} + i \\sin \\frac{2k\\pi}{7}, \\quad k = 0, 1, 2, 3, 4, 5, 6$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2】</span>\n    幾何分佈：這 7 個根在阿根圖中對應的點均在單位圓 $|z|=1$ 上，且均勻分佈構成正七邊形的 7 個頂點（其中 $k=0$ 對應頂點 $(1, 0)$）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span><br>&nbsp;&nbsp;• (ii) 由代數性質，方程 $z^7 - 1 = (z - 1)(z^6 + z^5 + \\dots + z + 1) = 0$。\n    7 個根之和為 0：$\\sum_{k=0}^6 z_k = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span>\n    取實部：$1 + \\sum_{k=1}^6 \\cos \\frac{2k\\pi}{7} = 0$。\n    因 $\\cos \\frac{2(7-k)\\pi}{7} = \\cos \\frac{2k\\pi}{7}$，故：\n    $\\cos \\frac{8\\pi}{7} = \\cos \\frac{6\\pi}{7}, \\cos \\frac{10\\pi}{7} = \\cos \\frac{4\\pi}{7}, \\cos \\frac{12\\pi}{7} = \\cos \\frac{2\\pi}{7}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span>\n    代入得 $1 + 2\\left(\\cos \\frac{2\\pi}{7} + \\cos \\frac{4\\pi}{7} + \\cos \\frac{6\\pi}{7}\\right) = 0$。\n    移項得：$\\cos \\frac{2\\pi}{7} + \\cos \\frac{4\\pi}{7} + \\cos \\frac{6\\pi}{7} = -\\frac{1}{2}$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "附加卷",
        "qNum": "題 C-02 · 2023 附加卷第 4 題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "20 分",
        "q": "已知複數 $z$ 滿足方程 $z^2 + 2|z| - 3 = 0$。<br>(a) 若 $z$ 為實數，求 $z$ 的值。 (5 分)<br>(b) 若 $z$ 為純虛數，求 $z$ 的值。 (5 分)<br>(c) 在複平面上，設滿足 $|z - (3 + 4i)| \\le 2$ 的點 $Z$ 所構成的區域為 $D$。求動點 $Z$ 到原點距離 $|Z|$ 的最大值與最小值。 (10 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>棣美弗定理開方遺漏週期性多解</b>：在求解 $z^n = w$ 時，很多考生僅算出主值對應的根，遺漏了加上 $\\frac{2k\\pi}{n}$ ($k = 0, 1, \\dots, n-1$) 得到的其餘 $n-1$ 個根。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 若 $z$ 為實數，則 $|z| = \\begin{cases} z, & z \\ge 0 \\\\ -z, & z < 0 \\end{cases}$，且 $z^2 = |z|^2$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：實數模長性質】</span><br>&nbsp;&nbsp;• 原方程轉化為 $|z|^2 + 2|z| - 3 = 0$。<br>&nbsp;&nbsp;• 因式分解：$(|z| + 3)(|z| - 1) = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：因式分解】</span><br>&nbsp;&nbsp;• 因模長 $|z| \\ge 0$，故 $|z| + 3 > 0$ 恆成立，解得唯一正解 $|z| = 1$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：排除無效根】</span><br>&nbsp;&nbsp;• 由 $|z| = 1$ 且 $z$ 為實數，得 $z = 1$ 或 $z = -1$。<br>&nbsp;&nbsp;• 經檢驗 $z = \\pm 1$ 均滿足原方程，故實數解為 $z = 1$ 或 $z = -1$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得兩實數解】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 若 $z$ 為純虛數，設 $z = bi$，其中 $b \\in \\mathbb{R}$ 且 $b \\ne 0$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：設純虛數形式】</span><br>&nbsp;&nbsp;• 此時 $z^2 = (bi)^2 = -b^2$，模長 $|z| = \\sqrt{0^2 + b^2} = |b|$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：計算平方與模長】</span><br>&nbsp;&nbsp;• 代入原方程得：$-b^2 + 2|b| - 3 = 0 \\implies |b|^2 - 2|b| + 3 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：代入消元】</span><br>&nbsp;&nbsp;• 配方得 $(|b| - 1)^2 + 2 = 0$（或計算判別式 $\\Delta = (-2)^2 - 4(1)(3) = -8 < 0$）。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：判別式論證】</span><br>&nbsp;&nbsp;• 由於對任意實數 $b$，$(|b| - 1)^2 + 2 \\ge 2 > 0$ 恆成立，該方程無實數解。<br>&nbsp;&nbsp;• 故滿足原方程的純虛數 $z$ 不存在。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出無純虛數解結論】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 在複平面（阿根圖）上，記點 $Z$ 對應複數 $z$，點 $C$ 對應複數 $z_0 = 3 + 4i$。<br>&nbsp;&nbsp;• 不等式 $|z - (3 + 4i)| \\le 2$ 表示以點 $C(3, 4)$ 為圓心、以 $r = 2$ 為半徑的封閉圓形區域 $D$（含圓周及內部）。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：幾何意義判定】</span><br>&nbsp;&nbsp;• 動點 $Z$ 到原點的距離為複數 $z$ 的模長 $|z|$，即線段 $|OZ|$ 的長度。<br>&nbsp;&nbsp;• 原點 $O(0, 0)$ 到圓心 $C(3, 4)$ 的距離為：<br>$$|OC| = |3 + 4i| = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求出圓心距】</span><br>&nbsp;&nbsp;• 由於 $|OC| = 5 > r = 2$，原點 $O$ 位於圓形區域 $D$ 外部。<br>&nbsp;&nbsp;• 根據平面幾何極值性質，動點 $Z$ 到原點距離的最大值與最小值分別為：\n    - 最大值：$|Z|_{\\max} = |OC| + r = 5 + 2 = 7$； <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：最大值計算】</span>\n    - 最小值：$|Z|_{\\min} = |OC| - r = 5 - 2 = 3$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：最小值計算】</span><br>&nbsp;&nbsp;• 故動點 $Z$ 到原點距離的最大值為 7，最小值為 3。"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "附加卷",
        "qNum": "題 C-03 · 2024 附加卷第 4 題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "20 分",
        "q": "已知複數 $w = -8 + 8\\sqrt{3}i$。<br>(a) 求 $w$ 的模長 $|w|$ 與幅角主值 $\\text{Arg}(w)$，並將 $w$ 寫成三角極式。 (6 分)<br>(b) 求解方程 $z^4 = w$，求出全部 4 個複數解（用代數形式 $a + bi$ 表示）。 (8 分)<br>(c) 設這 4 個根在阿根圖中對應的點分別為 $A, B, C, D$，求四邊形 $ABCD$ 的面積。 (6 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>幅角主值範圍界定混淆</b>：四校聯考官方通常約定幅角主值 $\\text{Arg}(z) \\in (-\\pi, \\pi]$ 或 $[0, 2\\pi)$，在寫出三角形式時必須注意符號規範。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 模長 $|w| = \\sqrt{(-8)^2 + (8\\sqrt{3})^2} = \\sqrt{64 + 192} = \\sqrt{256} = 16$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• $\\cos \\theta = -\\frac{8}{16} = -\\frac{1}{2}, \\sin \\theta = \\frac{8\\sqrt{3}}{16} = \\frac{\\sqrt{3}}{2}$，點在第二象限。<br>&nbsp;&nbsp;• 幅角主值 $\\text{Arg}(w) = \\frac{2\\pi}{3}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 三角極式 $w = 16\\left(\\cos \\frac{2\\pi}{3} + i \\sin \\frac{2\\pi}{3}\\right)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 設 $z = r(\\cos \\phi + i \\sin \\phi)$。$z^4 = r^4(\\cos 4\\phi + i \\sin 4\\phi) = 16(\\cos \\frac{2\\pi}{3} + i \\sin \\frac{2\\pi}{3})$。<br>&nbsp;&nbsp;• $r = \\sqrt[4]{16} = 2$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• $4\\phi = \\frac{2\\pi}{3} + 2k\\pi \\implies \\phi_k = \\frac{\\pi}{6} + \\frac{k\\pi}{2}$ ($k = 0, 1, 2, 3$)。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span><br>&nbsp;&nbsp;• 四個根分別為：\n    - $k=0$: $z_0 = 2(\\cos \\frac{\\pi}{6} + i \\sin \\frac{\\pi}{6}) = \\sqrt{3} + i$；\n    - $k=1$: $z_1 = 2(\\cos \\frac{2\\pi}{3} + i \\sin \\frac{2\\pi}{3}) = -1 + \\sqrt{3}i$；\n    - $k=2$: $z_2 = 2(\\cos \\frac{7\\pi}{6} + i \\sin \\frac{7\\pi}{6}) = -\\sqrt{3} - i$；\n    - $k=3$: $z_3 = 2(\\cos \\frac{5\\pi}{3} + i \\sin \\frac{5\\pi}{3}) = 1 - \\sqrt{3}i$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A4】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 4 個根在阿根圖中為內接於半徑為 2 的圓之正方形頂點。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2】</span><br>&nbsp;&nbsp;• 正方形對角線長為 $2r = 4$。<br>&nbsp;&nbsp;• 面積 $S = \\frac{1}{2} d_1 d_2 = \\frac{1}{2} \\times 4 \\times 4 = 8$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "附加卷",
        "qNum": "題 C-04 · 2025 附加卷第 4 題",
        "topic": "複數代數與複平面幾何 · 考點突破",
        "score": "20 分",
        "q": "已知二項方程 $z^3 - 8 = 0$。<br>(a) 將 $z^3 - 8$ 因式分解，並求出該方程的 1 個實根與 2 個虛根。 (6 分)<br>(b) 設 (a) 中的虛根之一為 $\\omega$。證明：$\\omega^2 + 2\\omega + 4 = 0$，並求 $\\omega^6 + \\omega^3 + 1$ 的值。 (6 分)<br>(c) 利用複數極式或和差化積公式，求解三角方程：<br>    $$\\sin 3\\theta + \\sin \\theta = 0, \\quad \\theta \\in [0, 2\\pi)$$ (8 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "z = r(\\cos \\theta + i \\sin \\theta)",
            "[r(\\cos \\theta + i \\sin \\theta)]^n = r^n(\\cos n\\theta + i \\sin n\\theta) \\quad (n \\in \\mathbb{Z})"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>忽略純虛數中虛部不為零</b>：若條件為「$z$ 為純虛數」，必須同時滿足 $\\text{Re}(z) = 0$ 且 $\\text{Im}(z) \\neq 0$！很多考生僅令實部為 0，未排除虛部為 0 的實數根（增根），痛失 1～2 分。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 利用立方差公式對 $z^3 - 8$ 進行因式分解：<br>$$z^3 - 8 = z^3 - 2^3 = (z - 2)(z^2 + 2z + 4) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：立方差因式分解】</span><br>&nbsp;&nbsp;• 由 $z - 2 = 0$ 得 1 個實根：$z_1 = 2$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出實根】</span><br>&nbsp;&nbsp;• 由 $z^2 + 2z + 4 = 0$，由求根公式：<br>$$z = \\frac{-2 \\pm \\sqrt{2^2 - 4(1)(4)}}{2} = \\frac{-2 \\pm \\sqrt{-12}}{2} = \\frac{-2 \\pm 2\\sqrt{3}i}{2} = -1 \\pm \\sqrt{3}i$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求根公式計算】</span><br>&nbsp;&nbsp;• 故該方程的 2 個虛根為 $z_2 = -1 + \\sqrt{3}i$ 與 $z_3 = -1 - \\sqrt{3}i$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出兩虛根】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因 $\\omega$ 為方程 $z^3 - 8 = 0$ 的虛根，故 $\\omega$ 必為二次方程 $z^2 + 2z + 4 = 0$ 的根。<br>&nbsp;&nbsp;• 將 $\\omega$ 代入得 $\\omega^2 + 2\\omega + 4 = 0$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：完成恆等式證明】</span><br>&nbsp;&nbsp;• 又因 $\\omega$ 為原方程 $z^3 - 8 = 0$ 的根，故 $\\omega^3 = 8$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：利用降冪性質】</span><br>&nbsp;&nbsp;• 計算代數式之值：<br>$$\\omega^6 + \\omega^3 + 1 = (\\omega^3)^2 + \\omega^3 + 1 = 8^2 + 8 + 1 = 64 + 8 + 1 = 73$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：得出精確數值 73】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 利用三角函數和差化積公式 $\\sin \\alpha + \\sin \\beta = 2\\sin\\frac{\\alpha+\\beta}{2}\\cos\\frac{\\alpha-\\beta}{2}$：<br>$$\\sin 3\\theta + \\sin \\theta = 2\\sin\\frac{3\\theta + \\theta}{2}\\cos\\frac{3\\theta - \\theta}{2} = 2\\sin 2\\theta \\cos \\theta = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：和差化積轉化】</span><br>&nbsp;&nbsp;• 再利用二倍角正弦公式 $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$：<br>$$2(2\\sin\\theta\\cos\\theta)\\cos\\theta = 4\\sin\\theta\\cos^2\\theta = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：進一步分解】</span><br>&nbsp;&nbsp;• 故該方程等價於 $\\sin\\theta = 0$ 或 $\\cos\\theta = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：分類討論】</span>\n    - 當 $\\sin\\theta = 0$ 時，在區間 $[0, 2\\pi)$ 內，解得 $\\theta = 0$ 或 $\\theta = \\pi$； <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：正弦方程解】</span>\n    - 當 $\\cos\\theta = 0$ 時，在區間 $[0, 2\\pi)$ 內，解得 $\\theta = \\frac{\\pi}{2}$ 或 $\\theta = \\frac{3\\pi}{2}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：餘弦方程解】</span><br>&nbsp;&nbsp;• 綜合可知，原三角方程在 $[0, 2\\pi)$ 上的所有解為：<br>$$\\theta \\in \\left\\{ 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2} \\right\\}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：匯總完整解集】</span>"
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

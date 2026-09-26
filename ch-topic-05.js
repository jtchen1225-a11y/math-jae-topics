/* 澳門四校聯考（JAE）數學專題總複習 · Topic 05 立體幾何與空間向量建系 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_05';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 2,
    "color": "#0284c7"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 1,
    "color": "#0284c7"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 5,
    "color": "#0284c7"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#0284c7",
    "sections": [
      "收錄 2 道官方真題",
      "立體幾何與空間向量建系 專項突破"
    ],
    "slides": [
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-01 · 2023 正卷第 9 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "4分",
        "q": "一個圓柱形容器的底面半徑為 4 cm，內裝有適量的水。現將一個半徑為 3 cm 的實心鐵球完全浸沒在水中（水未溢出），則容器中的水面將升高",
        "options": [
          "(A) $\\frac{9}{16}$ cm",
          "(B) $\\frac{9}{4}$ cm",
          "(C) $\\frac{27}{16}$ cm",
          "(D) $\\frac{3}{4}$ cm",
          "(E) $\\frac{27}{64}$ cm"
        ],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二面角鈍角問題</b>：在應用空間向量法求二面角時，公式 $\\cos \\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$ 默認輸出銳角。如果幾何體內部該二面角張開超過 $90^\\circ$（鈍二面角），必須依據幾何直觀取負值 $\\cos \\theta = -\\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$，否則扣 1～2 分【A分】。"
        },
        "solution": {
          "thinking": "鐵球體積 $V_{\\text{球}} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi (3)^3 = 36\\pi$。",
          "steps": [
            "容器底面積 $S = \\pi r^2 = \\pi (4)^2 = 16\\pi$。",
            "水面上升高度 $h = \\frac{V_{\\text{球}}}{S} = \\frac{36\\pi}{16\\pi} = \\frac{9}{4}$ cm。"
          ],
          "ans": "(B)",
          "quickTip": "干擾項 (A) 漏乘係數 4；(C) 誤將球表面積計算。"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-02 · 2025 正卷第 3 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "4分",
        "q": "若一個圓柱的底面半徑增加 20%，高減少 20%，則該圓柱的體積",
        "options": [
          "(A) 增加 15.2%",
          "(B) 減少 15.2%",
          "(C) 保持不變",
          "(D) 增加 4%",
          "(E) 減少 4%"
        ],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>空間建系未論證軸向互相垂直</b>：直接設立坐標系而不說明「因 $PA \\perp AB, PA \\perp AD, AB \\perp AD$，故以 $A$ 為原點建立空間直角坐標系」，會被嚴格扣除 1 分【M分】。"
        },
        "solution": {
          "thinking": "新半徑 $r' = 1.2r$，新高 $h' = 0.8h$。",
          "steps": [
            "新體積 $V' = \\pi (1.2r)^2 (0.8h) = 1.44 \\times 0.8 V = 1.152 V$。",
            "體積增加 $(1.152 - 1) \\times 100\\% = 15.2\\%$。",
            "---。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (C) 誤以為增減 20% 抵消；(D) 僅計算 $1.2 \\times 0.8 = 0.96$。"
        }
      }
    ]
  },
  {
    "ch": "Part B",
    "title": "Part B · 正卷解答大題 (8~10分)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#0284c7",
    "sections": [
      "收錄 1 道官方真題",
      "立體幾何與空間向量建系 專項突破"
    ],
    "slides": [
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-01 · 四校聯考經典樣題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "8 分",
        "q": "在正方體 $ABCD-A_1B_1C_1D_1$ 中，點 $E$ 為棱 $DD_1$ 的中點。<br>(a) 證明：$BD_1 \\perp$ 平面 $A_1C_1D$。 (4 分)<br>(b) 求直線 $AE$ 與平面 $ABCD$ 所成角的正切值。 (4 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二面角鈍角問題</b>：在應用空間向量法求二面角時，公式 $\\cos \\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$ 默認輸出銳角。如果幾何體內部該二面角張開超過 $90^\\circ$（鈍二面角），必須依據幾何直觀取負值 $\\cos \\theta = -\\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$，否則扣 1～2 分【A分】。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 證明</b>：<br>&nbsp;&nbsp;• 建立空間直角坐標系，設正方體棱長為 1。$A(0,0,0), B(1,0,0), C(1,1,0), D(0,1,0), D_1(0,1,1), A_1(0,0,1), C_1(1,1,1)$。<br>&nbsp;&nbsp;• $\\vec{BD_1} = (-1, 1, 1)$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：標註向量】</span><br>&nbsp;&nbsp;• $\\vec{A_1C_1} = (1, 1, 0)$，$\\vec{A_1D} = (0, 1, -1)$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 計算數量積：$\\vec{BD_1} \\cdot \\vec{A_1C_1} = (-1)(1) + (1)(1) + (1)(0) = 0 \\implies BD_1 \\perp A_1C_1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• $\\vec{BD_1} \\cdot \\vec{A_1D} = (-1)(0) + (1)(1) + (1)(-1) = 0 \\implies BD_1 \\perp A_1D$。<br>&nbsp;&nbsp;• 因 $A_1C_1 \\cap A_1D = A_1$，故 $BD_1 \\perp$ 平面 $A_1C_1D$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成定理證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 点 $E$ 為 $DD_1$ 中點，坐標為 $(0, 1, \\frac{1}{2})$。点 $A(0, 0, 0)$。<br>&nbsp;&nbsp;• 向量 $\\vec{AE} = (0, 1, \\frac{1}{2})$。点 $E$ 在底面的投影為 $D(0, 1, 0)$。<br>&nbsp;&nbsp;• 直線 $AE$ 在底面 $ABCD$ 上的射影為 $AD$。<br>&nbsp;&nbsp;• 直線 $AE$ 與底面所成角為 $\\angle EAD$。在 Rt$\\triangle ADE$ 中，$AD = 1, DE = \\frac{1}{2}$。<br>&nbsp;&nbsp;• $\\tan \\angle EAD = \\frac{DE}{AD} = \\frac{1/2}{1} = \\frac{1}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2：得出正切值】</span>\n\n---"
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
    "color": "#0284c7",
    "sections": [
      "收錄 5 道官方真題",
      "立體幾何與空間向量建系 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "附加卷",
        "qNum": "題 C-01 · 2021 附加卷第 1 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "20 分",
        "q": "在四棱錐 $P-ABCD$ 中，底面 $ABCD$ 是一直角梯形，$\\angle DAB = \\angle ABC = \\frac{\\pi}{2}$，且 $PA \\perp$ 底面 $ABCD$。已知 $|AD| = 1$，$|PA| = |AB| = |BC| = 2$，$M$ 為棱 $PC$ 的中點。<br>(a) (i) 求 $\\triangle PBD$ 的面積； (6 分)<br>    (ii) 求三棱錐 $P-ABD$ 的體積，並求點 $A$ 到平面 $PBD$ 的距離； (4 分)<br>(b) 證明：<br>    (i) $CB \\perp$ 平面 $PAB$； (3 分)<br>    (ii) 直線 $DM \\parallel$ 平面 $PAB$。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二面角鈍角問題</b>：在應用空間向量法求二面角時，公式 $\\cos \\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$ 默認輸出銳角。如果幾何體內部該二面角張開超過 $90^\\circ$（鈍二面角），必須依據幾何直觀取負值 $\\cos \\theta = -\\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$，否則扣 1～2 分【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a)(i) 解</b>：<br>&nbsp;&nbsp;• $|AD|=1, |AB|=2, |PA|=2$。底面直角梯形中：\n    $|BD| = \\sqrt{AB^2 + AD^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span>\n    $|PB| = \\sqrt{PA^2 + AB^2} = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span>\n    $|PD| = \\sqrt{PA^2 + AD^2} = \\sqrt{2^2 + 1^2} = \\sqrt{5}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 因 $|PD| = |BD| = \\sqrt{5}$，$\\triangle PBD$ 為等腰三角形。<br>&nbsp;&nbsp;• 取 $PB$ 中點 $H$，底邊 $PB = 2\\sqrt{2}$，高 $DH = \\sqrt{PD^2 - PH^2} = \\sqrt{5 - (\\sqrt{2})^2} = \\sqrt{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 面積 $S_{\\triangle PBD} = \\frac{1}{2} |PB| \\cdot DH = \\frac{1}{2} \\times 2\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出面積】</span>",
            "- <b>(a)(ii) 解</b>：<br>&nbsp;&nbsp;• 底面 $\\triangle ABD$ 面積 $S_{\\triangle ABD} = \\frac{1}{2} \\times 2 \\times 1 = 1$。<br>&nbsp;&nbsp;• 體積 $V_{P-ABD} = \\frac{1}{3} S_{\\triangle ABD} \\cdot PA = \\frac{1}{3} \\times 1 \\times 2 = \\frac{2}{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：求得體積】</span><br>&nbsp;&nbsp;• 設點 $A$ 到平面 $PBD$ 的距離為 $d$。由等體積法：\n    $V_{A-PBD} = \\frac{1}{3} S_{\\triangle PBD} \\cdot d = \\frac{2}{3} \\implies \\frac{1}{3} \\sqrt{6} d = \\frac{2}{3} \\implies d = \\frac{2}{\\sqrt{6}} = \\frac{\\sqrt{6}}{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：求出距離】</span>",
            "- <b>(b)(i) 證明</b>：<br>&nbsp;&nbsp;• 因 $PA \\perp$ 底面 $ABCD$，且 $CB \\subset$ 底面，故 $PA \\perp CB$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 又已知 $\\angle ABC = 90^\\circ$，即 $AB \\perp CB$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 因 $PA \\cap AB = A$，故 $CB \\perp$ 平面 $PAB$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成線面垂直證明】</span>",
            "- <b>(b)(ii) 證明</b>：<br>&nbsp;&nbsp;• 取 $PB$ 的中點 $N$，連接 $AN, MN$。<br>&nbsp;&nbsp;• 在 $\\triangle PBC$ 中，$M$ 為 $PC$ 中點，$N$ 為 $PB$ 中點，故 $MN \\parallel CB$ 且 $MN = \\frac{1}{2} CB$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2】</span><br>&nbsp;&nbsp;• 已知梯形中 $AD \\parallel BC$ 且 $AD = 1, BC = 2$，故 $AD = \\frac{1}{2} BC$ 且 $AD \\parallel BC$。<br>&nbsp;&nbsp;• 故 $AD \\parallel MN$ 且 $AD = MN$。因此四邊形 $ADMN$ 為平行四邊形。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1】</span><br>&nbsp;&nbsp;• 故 $DM \\parallel AN$。因 $AN \\subset$ 平面 $PAB$，$DM \\not\\subset$ 平面 $PAB$，故 $DM \\parallel$ 平面 $PAB$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：完成線面平行證明】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "附加卷",
        "qNum": "題 C-02 · 2022 附加卷第 1 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "20 分",
        "q": "已知四面體 $P-ABC$ 中，$PA \\perp AB$，$PA \\perp AC$，且 $AB \\perp BC$。設 $PA = 2$，$AB = 1$，$BC = \\sqrt{3}$。<br>(a) 證明：$BC \\perp$ 平面 $PAB$。 (6 分)<br>(b) 求異面直線 $PB$ 與 $AC$ 所成角的餘弦值。 (7 分)<br>(c) 求二面角 $P-BC-A$ 的大小。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>空間建系未論證軸向互相垂直</b>：直接設立坐標系而不說明「因 $PA \\perp AB, PA \\perp AD, AB \\perp AD$，故以 $A$ 為原點建立空間直角坐標系」，會被嚴格扣除 1 分【M分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 已知 $PA \\perp AB$ 且 $PA \\perp AC$，又 $AB \\cap AC = A$，$AB, AC \\subset$ 平面 $ABC$。<br>&nbsp;&nbsp;• 由直線與平面垂直的判定定理，得 $PA \\perp$ 平面 $ABC$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：線面垂直判定】</span><br>&nbsp;&nbsp;• 又因 $BC \\subset$ 平面 $ABC$，故 $PA \\perp BC$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：線線垂直】</span><br>&nbsp;&nbsp;• 題目已知 $AB \\perp BC$，且 $PA \\cap AB = A$，$PA, AB \\subset$ 平面 $PAB$。<br>&nbsp;&nbsp;• 再次應用線面垂直判定定理，得 $BC \\perp$ 平面 $PAB$。證畢。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：完成垂直證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 建立空間直角坐標系：以 $A$ 為坐標原點，以射線 $AB$ 為 $x$ 軸正方向，在平面 $ABC$ 內過 $A$ 作垂直於 $AB$ 的射線為 $y$ 軸正方向，以射線 $AP$ 為 $z$ 軸正方向。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：空間建系】</span><br>&nbsp;&nbsp;• 各頂點坐標為：$A(0, 0, 0)$，$B(1, 0, 0)$，$P(0, 0, 2)$。<br>&nbsp;&nbsp;• 因 $AB \\perp BC$ 且 $BC = \\sqrt{3}$，點 $C$ 的坐標為 $(1, \\sqrt{3}, 0)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出頂點坐標】</span><br>&nbsp;&nbsp;• 計算向量坐標：<br>$$\\vec{PB} = B - P = (1 - 0, 0 - 0, 0 - 2) = (1, 0, -2)$$<br>$$\\vec{AC} = C - A = (1 - 0, \\sqrt{3} - 0, 0 - 0) = (1, \\sqrt{3}, 0)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：寫出兩直線方向向量】</span><br>&nbsp;&nbsp;• 計算模長與數量積：<br>$$|\\vec{PB}| = \\sqrt{1^2 + 0^2 + (-2)^2} = \\sqrt{5}$$<br>$$|\\vec{AC}| = \\sqrt{1^2 + (\\sqrt{3})^2 + 0^2} = \\sqrt{4} = 2$$<br>$$\\vec{PB} \\cdot \\vec{AC} = 1(1) + 0(\\sqrt{3}) + (-2)(0) = 1$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：計算模與數量積】</span><br>&nbsp;&nbsp;• 設異面直線 $PB$ 與 $AC$ 所成角為 $\\theta$ ($0 < \\theta \\le \\frac{\\pi}{2}$)，則：<br>$$\\cos\\theta = \\frac{|\\vec{PB} \\cdot \\vec{AC}|}{|\\vec{PB}| |\\vec{AC}|} = \\frac{1}{\\sqrt{5} \\times 2} = \\frac{\\sqrt{5}}{10}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：得出餘弦值】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 由 (a) 知 $BC \\perp$ 平面 $PAB$，又 $PB, AB \\subset$ 平面 $PAB$。<br>&nbsp;&nbsp;• 故 $BC \\perp PB$ 且 $BC \\perp AB$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：二面角平面角識別】</span><br>&nbsp;&nbsp;• 根據二面角平面角的定義，$\\angle PBA$ 即為二面角 $P-BC-A$ 的平面角。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：確定平面角】</span><br>&nbsp;&nbsp;• 在直角 $\\triangle PAB$ 中，$\\angle PAB = 90^\\circ$，$PA = 2$，$AB = 1$：<br>$$\\tan \\angle PBA = \\frac{PA}{AB} = \\frac{2}{1} = 2$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：計算正切值】</span><br>&nbsp;&nbsp;• 故二面角 $P-BC-A$ 的大小為 $\\arctan(2)$（或其餘弦值為 $\\cos\\angle PBA = \\frac{1}{\\sqrt{1^2+2^2}} = \\frac{\\sqrt{5}}{5}$）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成二面角求解】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "附加卷",
        "qNum": "題 C-03 · 2023 附加卷第 1 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "20 分",
        "q": "如圖所示，四棱錐 $E-ABCD$ 的底面 $ABCD$ 為菱形，$\\angle ABC = 60^\\circ$，且 $EA = EC$，$EB = ED$。設 $AC$ 與 $BD$ 交於點 $O$。<br>(a) 證明：$EO \\perp$ 底面 $ABCD$。 (6 分)<br>(b) 若 $AB = 2$，$EO = \\sqrt{3}$，求直線 $EC$ 與底面 $ABCD$ 所成角的正切值。 (7 分)<br>(c) 在 (b) 的條件下，求二面角 $E-AB-C$ 的餘弦值。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>等體積法底面積計算出錯</b>：在使用等體積法求高時，忘記錐體體積公式中的 $\\frac{1}{3}$，或者斜面三角形面積用錯底與高。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 底面 $ABCD$ 為菱形，其對角線互相垂直且平分於點 $O$，即 $AC \\perp BD$ 且 $O$ 為 $AC$ 及 $BD$ 的中點。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：菱形對角線性質】</span><br>&nbsp;&nbsp;• 在 $\\triangle EAC$ 中，因 $EA = EC$ 且 $O$ 為底邊 $AC$ 的中點，由等腰三角形性質得 $EO \\perp AC$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：線線垂直 1】</span><br>&nbsp;&nbsp;• 在 $\\triangle EBD$ 中，因 $EB = ED$ 且 $O$ 為底邊 $BD$ 的中點，同理得 $EO \\perp BD$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：線線垂直 2】</span><br>&nbsp;&nbsp;• 又 $AC \\cap BD = O$，$AC, BD \\subset$ 底面 $ABCD$。<br>&nbsp;&nbsp;• 根據直線與平面垂直的判定定理，$EO \\perp$ 底面 $ABCD$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成線面垂直證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因 $EO \\perp$ 底面 $ABCD$，點 $O$ 為頂點 $E$ 在底面上的正射影，故線段 $OC$ 為直線 $EC$ 在底面上的正射影。<br>&nbsp;&nbsp;• 因此 $\\angle ECO$ 即為直線 $EC$ 與底面 $ABCD$ 所成的線面角。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：確定線面角】</span><br>&nbsp;&nbsp;• 在菱形 $ABCD$ 中，$AB = 2$，$\\angle ABC = 60^\\circ$，$\\triangle ABC$ 是邊長為 2 的等邊三角形。<br>&nbsp;&nbsp;• 故對角線 $AC = AB = 2$，半長 $OC = \\frac{1}{2}AC = 1$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：求得 OC 長度】</span><br>&nbsp;&nbsp;• 在直角 $\\triangle EOC$ 中，已知 $EO = \\sqrt{3}$：<br>$$\\tan \\angle ECO = \\frac{EO}{OC} = \\frac{\\sqrt{3}}{1} = \\sqrt{3}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求得正切值】</span><br>&nbsp;&nbsp;• 故直線 $EC$ 與底面所成角為 $60^\\circ$（正切值為 $\\sqrt{3}$）。",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 建立空間直角坐標系：以菱形對角線交點 $O$ 為坐標原點，以射線 $OC$ 為 $x$ 軸正方向，以射線 $OB$ 為 $y$ 軸正方向，以射線 $OE$ 為 $z$ 軸正方向。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：建系】</span><br>&nbsp;&nbsp;• 由幾何尺寸：$OC = 1$，$OA = 1$；在等邊 $\\triangle ABC$ 中，中線 $OB = AB \\sin 60^\\circ = 2 \\times \\frac{\\sqrt{3}}{2} = \\sqrt{3}$。<br>&nbsp;&nbsp;• 各點坐標為：$O(0, 0, 0)$，$A(-1, 0, 0)$，$B(0, \\sqrt{3}, 0)$，$C(1, 0, 0)$，$E(0, 0, \\sqrt{3})$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：坐標確定】</span><br>&nbsp;&nbsp;• 底面 $ABCD$ 的法向量為 $\\vec{n}_1 = (0, 0, 1)$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 平面 $EAB$ 的向量：$\\vec{AB} = (1, \\sqrt{3}, 0)$，$\\vec{AE} = (1, 0, \\sqrt{3})$。<br>&nbsp;&nbsp;• 設平面 $EAB$ 的法向量為 $\\vec{n}_2 = (x, y, z)$：<br>$$\\begin{cases} \\vec{n}_2 \\cdot \\vec{AB} = x + \\sqrt{3}y = 0 \\\\ \\vec{n}_2 \\cdot \\vec{AE} = x + \\sqrt{3}z = 0 \\end{cases}$$\n    取 $x = \\sqrt{3}$，解得 $y = -1$，$z = -1$，得 $\\vec{n}_2 = (\\sqrt{3}, -1, -1)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求解法向量】</span><br>&nbsp;&nbsp;• 計算二面角 $\\theta$ 的餘弦值：<br>$$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{|-1|}{1 \\times \\sqrt{(\\sqrt{3})^2 + (-1)^2 + (-1)^2}} = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：得出二面角餘弦值】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "附加卷",
        "qNum": "題 C-04 · 2024 附加卷第 1 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "20 分",
        "q": "在三棱錐 $P-ABC$ 中，$PA \\perp$ 平面 $ABC$，$\\triangle ABC$ 是以 $B$ 為直角頂點的等腰直角三角形，$AB = BC = 2$。已知 $PA = 2\\sqrt{2}$。<br>(a) 證明：平面 $PBC \\perp$ 平面 $PAB$。 (6 分)<br>(b) 求三棱錐 $P-ABC$ 的外接球半徑。 (6 分)<br>(c) 求平面 $PAC$ 與平面 $PBC$ 所成二面角的餘弦值。 (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二面角鈍角問題</b>：在應用空間向量法求二面角時，公式 $\\cos \\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$ 默認輸出銳角。如果幾何體內部該二面角張開超過 $90^\\circ$（鈍二面角），必須依據幾何直觀取負值 $\\cos \\theta = -\\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1||\\vec{n}_2|}$，否則扣 1～2 分【A分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 因 $PA \\perp$ 平面 $ABC$ 且 $BC \\subset$ 平面 $ABC$，故 $PA \\perp BC$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：線面垂直推導】</span><br>&nbsp;&nbsp;• 又已知 $\\triangle ABC$ 是以 $B$ 為直角頂點的等腰直角三角形，故 $AB \\perp BC$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 因 $PA \\cap AB = A$ 且 $PA, AB \\subset$ 平面 $PAB$，由線面垂直判定定理得 $BC \\perp$ 平面 $PAB$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：判定 BC 垂直平面 PAB】</span><br>&nbsp;&nbsp;• 又因 $BC \\subset$ 平面 $PBC$，根據面面垂直判定定理，平面 $PBC \\perp$ 平面 $PAB$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：完成面面垂直證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 在三棱錐 $P-ABC$ 中，$PA \\perp AB$，$PA \\perp BC$，$AB \\perp BC$。<br>&nbsp;&nbsp;• 這表示三條稜 $PA, AB, BC$ 兩兩互相垂直。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：識別長方體角錐特徵】</span><br>&nbsp;&nbsp;• 將三棱錐 $P-ABC$ 補形為以 $PA, AB, BC$ 為長、寬、高的長方體，該長方體的外接球即為三棱錐 $P-ABC$ 的外接球。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：補形法】</span><br>&nbsp;&nbsp;• 設長方體的體對角線長為 $D$，外接球半徑為 $R$，則：<br>$$D^2 = PA^2 + AB^2 + BC^2 = (2\\sqrt{2})^2 + 2^2 + 2^2 = 8 + 4 + 4 = 16$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：計算對角線長度】</span><br>&nbsp;&nbsp;• 解得 $D = 4$，故外接球半徑為 $R = \\frac{D}{2} = 2$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得外接球半徑】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 建立空間直角坐標系：以直角頂點 $B$ 為坐標原點，以射線 $BC$ 為 $x$ 軸正方向，以射線 $BA$ 為 $y$ 軸正方向，過 $B$ 作垂直於底面向上為 $z$ 軸正方向。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：空間建系】</span><br>&nbsp;&nbsp;• 各頂點坐標為：$B(0, 0, 0)$，$C(2, 0, 0)$，$A(0, 2, 0)$，$P(0, 2, 2\\sqrt{2})$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：頂點坐標】</span><br>&nbsp;&nbsp;• 平面 $PBC$ 位於 $xz$ 平面內，其法向量為 $\\vec{n}_1 = (0, 1, 0)$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：直接寫出平面 PBC 法向量】</span><br>&nbsp;&nbsp;• 平面 $PAC$ 的向量：$\\vec{AC} = C - A = (2, -2, 0)$，$\\vec{AP} = P - A = (0, 0, 2\\sqrt{2})$。<br>&nbsp;&nbsp;• 設平面 $PAC$ 的法向量為 $\\vec{n}_2 = (x, y, z)$：<br>$$\\begin{cases} 2x - 2y = 0 \\\\ 2\\sqrt{2}z = 0 \\end{cases} \\implies \\begin{cases} x = y \\\\ z = 0 \\end{cases}$$\n    取 $x = 1$，得 $\\vec{n}_2 = (1, 1, 0)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求解法向量 n2】</span><br>&nbsp;&nbsp;• 設平面 $PAC$ 與平面 $PBC$ 所成二面角為 $\\theta$，則：<br>$$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{|0(1) + 1(1) + 0(0)|}{1 \\times \\sqrt{1^2 + 1^2 + 0}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：得出二面角餘弦值】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "附加卷",
        "qNum": "題 C-05 · 2025 附加卷第 1 題",
        "topic": "立體幾何與空間向量建系 · 考點突破",
        "score": "20 分",
        "q": "在四棱錐 $V-ABCD$ 中，底面 $ABCD$ 為矩形，$AB = 2$，$AD = a$。側面 $VAD$ 是一邊長為 $a$ 的正三角形，且平面 $VAD \\perp$ 底面 $ABCD$。設 $M$ 為 $AD$ 的中點。<br>(a) 證明：$VM \\perp$ 平面 $ABCD$，並求線段 $VM$ 的長度（用 $a$ 表示）。 (6 分)<br>(b) 求點 $A$ 到平面 $VBC$ 的距離。 (7 分)<br>(c) 若側面 $VBC$ 與底面 $ABCD$ 所成的二面角為 $45^\\circ$，求常數 $a$ 的值。 (7 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "V = \\frac{1}{3} S_{\\text{底}} \\cdot h",
            "V_{A-BCD} = V_{D-ABC} \\iff \\frac{1}{3} S_{\\triangle BCD} \\cdot d = \\frac{1}{3} S_{\\triangle ABC} \\cdot h_D \\implies d = \\frac{S_{\\triangle ABC} \\cdot h_D}{S_{\\triangle BCD}}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>空間建系未論證軸向互相垂直</b>：直接設立坐標系而不說明「因 $PA \\perp AB, PA \\perp AD, AB \\perp AD$，故以 $A$ 為原點建立空間直角坐標系」，會被嚴格扣除 1 分【M分】。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 因 $\\triangle VAD$ 是等邊三角形，$M$ 為 $AD$ 中點，故 $VM \\perp AD$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 又平面 $VAD \\perp$ 平面 $ABCD$，且交線為 $AD$，$VM \\subset$ 平面 $VAD$ 且 $VM \\perp AD$。<br>&nbsp;&nbsp;• 由面面垂直性質定理，必有 $VM \\perp$ 平面 $ABCD$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：規範面面垂直性質】</span><br>&nbsp;&nbsp;• 等邊三角形高 $VM = a \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}a$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：長度】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 矩形中 $AD \\parallel BC$，且 $AD \\subset$ 平面 $VAD$。點 $A$ 到平面 $VBC$ 的距離即為線段 $AD$ 上任意點到平面 $VBC$ 的距離，等於點 $M$ 到平面 $VBC$ 的距離。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2】</span><br>&nbsp;&nbsp;• 以 $M$ 為原點，$MD$ 為 $x$ 軸，$MN \\parallel AB$ 為 $y$ 軸，$MV$ 為 $z$ 軸建系或利用等體積法：\n    $V_{M-VBC} = \\frac{1}{3} S_{\\triangle VBC} \\cdot d$。<br>&nbsp;&nbsp;• 底面中 $BC = a$，到 $M$ 的距離為 2。側面斜高 $h_{eff} = \\sqrt{VM^2 + 2^2} = \\sqrt{\\frac{3}{4}a^2 + 4}$。<br>&nbsp;&nbsp;• 計算求得距離 $d = \\frac{\\sqrt{3} a}{\\sqrt{\\frac{3}{4}a^2 + 4}}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3A2：求出距離】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 二面角平面角為 $\\angle VNM$，其中 $N$ 為 $BC$ 中點，$MN \\perp BC$ 且 $VN \\perp BC$。<br>&nbsp;&nbsp;• 在 Rt$\\triangle VMN$ 中，$\\tan \\angle VNM = \\frac{VM}{MN} = \\frac{\\frac{\\sqrt{3}}{2}a}{2} = \\frac{\\sqrt{3}a}{4}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3】</span><br>&nbsp;&nbsp;• 依題意二面角為 $45^\\circ$，故 $\\tan 45^\\circ = 1 \\implies \\frac{\\sqrt{3}a}{4} = 1 \\implies a = \\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2：求出常數 a】</span>"
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

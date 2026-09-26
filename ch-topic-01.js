/* 澳門四校聯考（JAE）數學專題總複習 · Topic 01 解析幾何與圓錐曲線 */
(function() {
  window.DECK = window.DECK || [];
  window.STORAGE_KEY = 'jae_topic_01';
  window.PAPER_REGISTRY = [
  {
    "id": "part-a",
    "year": "Part A",
    "paper": "正卷",
    "name": "Part A · 基礎客觀題 (選擇題)",
    "ch": "Part A",
    "count": 10,
    "color": "#2563eb"
  },
  {
    "id": "part-b",
    "year": "Part B",
    "paper": "正卷",
    "name": "Part B · 正卷解答大題 (8~10分)",
    "ch": "Part B",
    "count": 5,
    "color": "#2563eb"
  },
  {
    "id": "part-c",
    "year": "Part C",
    "paper": "附加卷",
    "name": "Part C · 附加卷壓軸大題 (20分)",
    "ch": "Part C",
    "count": 5,
    "color": "#2563eb"
  }
];

  const chapters = [
  {
    "ch": "Part A",
    "title": "Part A · 基礎客觀題 (選擇題)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#2563eb",
    "sections": [
      "收錄 10 道官方真題",
      "解析幾何與圓錐曲線 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 A-01 · 2021 正卷第 12 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "已知點 $P(-1, -3)$ 與點 $Q(5, -1)$。線段 $PQ$ 的垂直平分線方程為",
        "options": [
          "(A) $3x + y - 4 = 0$",
          "(B) $3x + y + 8 = 0$",
          "(C) $x + 3y + 4 = 0$",
          "(D) $3x - y - 8 = 0$",
          "(E) $x - 3y - 8 = 0$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "中點 $M(2, -2)$，斜率 $k_{PQ} = \\frac{-1 - (-3)}{5 - (-1)} = \\frac{2}{6} = \\frac{1}{3}$。",
          "steps": [
            "垂直平分線斜率 $k = -3$。",
            "點斜式 $y - (-2) = -3(x - 2) \\implies 3x + y - 4 = 0$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) 常數項計算符號錯誤；(C) 誤將斜率算為負倒數倒置；(D) 垂線斜率正負號弄反；(E) 誤用原直線斜率。"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-02 · 2022 正卷第 9 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "直線 $l: x - y + 1 = 0$ 被圓 $C: x^2 + y^2 - 4x - 2y + 1 = 0$ 所截得的弦長為",
        "options": [
          "(A) $\\sqrt{2}$",
          "(B) 2",
          "(C) $2\\sqrt{2}$",
          "(D) 4",
          "(E) $2\\sqrt{3}$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "圓心 $(2, 1)$，半徑 $r = \\sqrt{4 + 1 - 1} = 2$。",
          "steps": [
            "圓心到直線距離 $d = \\frac{|2 - 1 + 1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$。",
            "弦長 $L = 2\\sqrt{r^2 - d^2} = 2\\sqrt{4 - 2} = 2\\sqrt{2}$。"
          ],
          "ans": "(C)",
          "quickTip": "干擾項 (A) 為半弦長（遺漏乘 2）；(B) 誤將半徑當作弦長；(D) 直徑；(E) 誤算弦心距 $d = 1$。"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 A-03 · 2022 正卷第 10 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "拋物線 $y^2 = -8x$ 的焦點坐標與準線方程分別為",
        "options": [
          "(A) $(2, 0)$，$x = -2$",
          "(B) $(-2, 0)$，$x = 2$",
          "(C) $(0, -2)$，$y = 2$",
          "(D) $(0, 2)$，$y = -2$",
          "(E) $(-4, 0)$，$x = 4$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>判別式檢驗遺漏</b>：設直線 $y = kx + m$ 聯立曲線後，未先驗證 $\\Delta > 0$ 便盲目使用韋達定理，常引入虛數增根導致扣分（M分扣除）。\n\n---"
        },
        "solution": {
          "thinking": "由標準式 $y^2 = -2px = -8x$ 得 $2p = 8 \\implies p = 4 \\implies \\frac{p}{2} = 2$。",
          "steps": [
            "拋物線開口向左，焦點坐標為 $(-\\frac{p}{2}, 0) = (-2, 0)$，準線方程為 $x = \\frac{p}{2} = 2$。"
          ],
          "ans": "(B)",
          "quickTip": "干擾項 (A) 開口向右符號顛倒；(C)(D) 開口方向誤認在 $y$ 軸；(E) 誤將參數 $p$ 當作 $\\frac{p}{2}$。"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-04 · 2023 正卷第 11 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "若直線 $l_1: 2x + ay - 1 = 0$ 與直線 $l_2: (a - 1)x + y + 3 = 0$ 互相垂直，則實數 $a$ 的值為",
        "options": [
          "(A) $\\frac{2}{3}$",
          "(B) $-\\frac{2}{3}$",
          "(C) 2",
          "(D) $-2$",
          "(E) $\\frac{1}{2}$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "兩直線一般式垂直條件為 $A_1 A_2 + B_1 B_2 = 0$。",
          "steps": [
            "代入得 $2(a - 1) + a(1) = 0 \\implies 2a - 2 + a = 0 \\implies 3a = 2 \\implies a = \\frac{2}{3}$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) 移項符號錯誤；(C) 誤用平行條件 $A_1 B_2 - A_2 B_1 = 0$；(D) 符號弄反；(E) 計算失誤。"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-05 · 2023 正卷第 12 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "圓心在 $(1, -2)$ 且與直線 $3x - 4y + 4 = 0$ 相切的圓方程為",
        "options": [
          "(A) $(x - 1)^2 + (y + 2)^2 = 9$",
          "(B) $(x - 1)^2 + (y + 2)^2 = 25$",
          "(C) $(x + 1)^2 + (y - 2)^2 = 9$",
          "(D) $(x - 1)^2 + (y + 2)^2 = 3$",
          "(E) $(x + 1)^2 + (y - 2)^2 = 25$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "半徑等於圓心 $(1, -2)$ 到切線距離：$r = \\frac{|3(1) - 4(-2) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 8 + 4|}{5} = \\frac{15}{5} = 3$。",
          "steps": [
            "圓方程為 $(x - 1)^2 + (y + 2)^2 = r^2 = 9$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) 誤將 $r^2$ 算為 25；(C) 圓心正負號顛倒；(D) 圓方程右側誤寫半徑 $r$ 而未平方；(E) 圓心與半徑雙重錯誤。"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 A-06 · 2023 正卷第 15 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "點 $P$ 在拋物線 $y^2 = 4x$ 上運動，$F$ 為拋物線的焦點，點 $A(4, 3)$，則 $|PA| + |PF|$ 的最小值為",
        "options": [
          "(A) 4",
          "(B) 5",
          "(C) 6",
          "(D) $\\sqrt{17}$",
          "(E) $3\\sqrt{2}$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>判別式檢驗遺漏</b>：設直線 $y = kx + m$ 聯立曲線後，未先驗證 $\\Delta > 0$ 便盲目使用韋達定理，常引入虛數增根導致扣分（M分扣除）。\n\n---"
        },
        "solution": {
          "thinking": "拋物線 $y^2 = 4x$ 準線為 $L: x = -1$，焦點 $F(1, 0)$。",
          "steps": [
            "由拋物線定義可知，拋物線上任一點 $P$ 到焦點的距離等於其到準線的距離，即 $|PF| = d(P, L) = x_P + 1$。",
            "故 $|PA| + |PF| = |PA| + d(P, L) \\ge$ 定點 $A(4, 3)$ 到準線 $x = -1$ 的水平距離 $= 4 - (-1) = 5$。",
            "當過點 $A$ 作準線垂線與拋物線交於點 $P(\\frac{9}{4}, 3)$ 時取得最小值 5。"
          ],
          "ans": "(B)",
          "quickTip": "干擾項 (A) 誤取點 $A$ 到 $y$ 軸距離；(C) 誤算 $4 + 2 = 6$；(D) 點 $A$ 到原點距離；(E) 誤將點 $A$ 到焦點距離 $|AF| = \\sqrt{(4-1)^2+3^2} = 3\\sqrt{2}$ 當作最小值。"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 A-07 · 2024 正卷第 5 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "過點 $(2, 1)$ 且在兩坐標軸上的截距相等的直線條數為",
        "options": [
          "(A) 1",
          "(B) 2",
          "(C) 3",
          "(D) 4",
          "(E) 0"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "分兩類討論：(1) 截距均為 0，直線過原點 $(0, 0)$ 與 $(2, 1)$，斜率 $k = \\frac{1}{2}$，直線方程為 $x - 2y = 0$，在兩軸截距均為 0，符合題意；(2) 截距 $a \\neq 0$，設截距式 $\\frac{x}{a} + \\frac{y}{a} = 1 \\implies x + y = a$。",
          "steps": [
            "將 $(2, 1)$ 代入得 $a = 2 + 1 = 3$，直線為 $x + y - 3 = 0$。",
            "共 2 條。"
          ],
          "ans": "(B)",
          "quickTip": "干擾項 (A) 最常見錯誤，遺漏截距為 0（過原點）的情形；(C) 誤將截距互為相反數算入；(D)(E) 概念混淆。"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-08 · 2025 正卷第 10 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "已知圓 $C: x^2 + y^2 - 4x - 6y + 4 = 0$。過點 $P(3, 4)$ 的所有弦中，弦長最短的弦所在的直線方程為",
        "options": [
          "(A) $x + y - 7 = 0$",
          "(B) $x - y + 1 = 0$",
          "(C) $2x + y - 10 = 0$",
          "(D) $x + 2y - 11 = 0$",
          "(E) $3x - 4y + 7 = 0$"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "圓方程配方得 $(x - 2)^2 + (y - 3)^2 = 9$，圓心 $C(2, 3)$，半徑 $r = 3$。",
          "steps": [
            "點 $P(3, 4)$ 與圓心距離平方為 $(3-2)^2 + (4-3)^2 = 2 < 9$，故 $P$ 為圓內點。",
            "過圓內點的最短弦必與直徑 $CP$ 垂直。",
            "向量 $\\vec{CP} = (3-2, 4-3) = (1, 1)$，斜率 $k_{CP} = 1$。",
            "因此最短弦所在直線斜率為 $k = -1$。",
            "由點斜式：$y - 4 = -(x - 3) \\implies x + y - 7 = 0$。"
          ],
          "ans": "(A)",
          "quickTip": "干擾項 (B) $x - y + 1 = 0$ 為直徑所在直線（最長弦）；(C)(D)(E) 斜率計算失誤。"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-09 · 2025 正卷第 11 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "設拋物線 $x^2 = 4y$ 的焦點為 $F$，點 $P$ 為該拋物線上的一點。若點 $P$ 到 $x$ 軸的距離為 3，則 $|PF|$ 等於",
        "options": [
          "(A) 2",
          "(B) 3",
          "(C) 4",
          "(D) 5",
          "(E) 6"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>判別式檢驗遺漏</b>：設直線 $y = kx + m$ 聯立曲線後，未先驗證 $\\Delta > 0$ 便盲目使用韋達定理，常引入虛數增根導致扣分（M分扣除）。\n\n---"
        },
        "solution": {
          "thinking": "拋物線 $x^2 = 4y$ 標準式為 $x^2 = 2py$，故 $2p = 4 \\implies p = 2$。",
          "steps": [
            "開口向上，焦點為 $F(0, 1)$，準線方程為 $y = -\\frac{p}{2} = -1$。",
            "點 $P$ 在拋物線上，其縱坐標 $y_P = \\frac{x_P^2}{4} \\ge 0$。",
            "點 $P$ 到 $x$ 軸距離為 3 $\\implies y_P = 3$。",
            "由拋物線定義，$|PF| = d(P, L) = y_P - (-1) = 3 + 1 = 4$。"
          ],
          "ans": "(C)",
          "quickTip": "干擾項 (B) 誤將縱坐標 3 直接當作焦半徑（忘記加準線距離）；(D) 誤將參數 $p=2$ 加在縱坐標上得 $3 + 2 = 5$；(E) 計算錯誤。"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 A-10 · 2025 正卷第 14 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "4分",
        "q": "若 $x, y$ 滿足約束條件 $\\begin{cases} 3x + 4y \\le 7 \\\\ x - 2y \\ge -1 \\\\ y \\ge -1 \\end{cases}$，則 $z = 3x + y$ 的最大值是",
        "options": [
          "(A) 4",
          "(B) 6",
          "(C) 7",
          "(D) 10",
          "(E) 11"
        ],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "約束條件表示的可行域為平面閉三角形區域，其三條邊界直線分別為 $l_1: 3x + 4y = 7$、$l_2: x - 2y = -1$、$l_3: y = -1$。",
          "steps": [
            "求解兩兩交點：\n  1. 聯立 $l_1, l_2$：由 $x = 2y - 1$ 代入 $3(2y - 1) + 4y = 7 \\implies 10y = 10 \\implies y = 1, x = 1$。",
            "交點為 $A(1, 1)$。",
            "2. 聯立 $l_2, l_3$：將 $y = -1$ 代入 $x - 2(-1) = -1 \\implies x = -3$。",
            "交點為 $B(-3, -1)$。",
            "3. 聯立 $l_1, l_3$：將 $y = -1$ 代入 $3x + 4(-1) = 7 \\implies 3x = 11 \\implies x = \\frac{11}{3}$。",
            "交點為 $C(\\frac{11}{3}, -1)$。",
            "線性目標函數 $z = 3x + y$ 的最大值必在可行域頂點取得：\n  - $z(A) = 3(1) + 1 = 4$\n  - $z(B) = 3(-3) + (-1) = -10$\n  - $z(C) = 3(\\frac{11}{3}) + (-1) = 11 - 1 = 10$。",
            "故 $z$ 的最大值為 10，選 (D)。",
            "---。"
          ],
          "ans": "(D)",
          "quickTip": "干擾項 (A) 誤在頂點 $A(1, 1)$ 處取值；(C) 為直線常數項 7 的干擾；(E) 計算 $3x + y$ 時誤將 $y = -1$ 算為 $+1$ 得 $11 + 1 = 12$。"
        }
      }
    ]
  },
  {
    "ch": "Part B",
    "title": "Part B · 正卷解答大題 (8~10分)",
    "year": "2021-2025",
    "paper": "正卷",
    "color": "#2563eb",
    "sections": [
      "收錄 5 道官方真題",
      "解析幾何與圓錐曲線 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "正卷",
        "qNum": "題 B-01 · 2021 正卷第 17 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "8 分",
        "q": "平面直角坐標系中，圓 $C$ 的圓心為 $M(4, 4)$，且圓 $C$ 與直線 $l_1: 2x - y = 0$ 相切。<br>(a) 求圓 $C$ 的半徑及標準方程。 (4 分)<br>(b) 若過原點 $O(0, 0)$ 的另一條直線 $l_2: mx - y = 0$ ($m \\neq 2$) 亦與圓 $C$ 相切，求實數 $m$ 的值。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 圓心 $M(4, 4)$ 到直線 $2x - y = 0$ 的距離為半徑：<br>$$r = \\frac{|2(4) - 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{4}{\\sqrt{5}}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：點到直線距離公式代入】</span><span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得 $r = \\frac{4}{\\sqrt{5}}$】</span><br>&nbsp;&nbsp;• 圓 $C$ 的標準方程為：<br>$$(x - 4)^2 + (y - 4)^2 = \\frac{16}{5}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：正確寫出圓標準方程】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 直線 $mx - y = 0$ 亦與圓相切，圓心到直線距離等於 $r$：<br>$$\\frac{|4m - 4|}{\\sqrt{m^2 + 1}} = \\frac{4}{\\sqrt{5}}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：建立切線距離方程】</span><br>&nbsp;&nbsp;• 兩邊約去 4 並平方：<br>$$\\frac{(m - 1)^2}{m^2 + 1} = \\frac{1}{5} \\implies 5(m^2 - 2m + 1) = m^2 + 1$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：去分母與展開】</span><br>&nbsp;&nbsp;• 整理得 $4m^2 - 10m + 4 = 0 \\implies 2m^2 - 5m + 2 = 0$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1】</span><br>&nbsp;&nbsp;• 因式分解 $(2m - 1)(m - 2) = 0$。已知 $m \\neq 2$，故 $m = \\frac{1}{2}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：排除增根得正解】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "正卷",
        "qNum": "題 B-02 · 2022 正卷第 18 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "8 分",
        "q": "已知雙曲線 $C: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a > 0, b > 0$) 的離心率 $e = 2$，且點 $P(2, \\sqrt{3})$ 在雙曲線 $C$ 上。<br>(a) 求雙曲線 $C$ 的標準方程。 (4 分)<br>(b) 求雙曲線 $C$ 的兩條漸近線方程及兩漸近線的夾角。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 離心率 $e = \\frac{c}{a} = 2 \\implies c = 2a$。因 $c^2 = a^2 + b^2$，故 $4a^2 = a^2 + b^2 \\implies b^2 = 3a^2$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：利用離心率確定 $b^2 = 3a^2$】</span><br>&nbsp;&nbsp;• 將 $P(2, \\sqrt{3})$ 代入方程 $\\frac{x^2}{a^2} - \\frac{y^2}{3a^2} = 1$：<br>$$\\frac{4}{a^2} - \\frac{3}{3a^2} = 1 \\implies \\frac{4}{a^2} - \\frac{1}{a^2} = 1 \\implies \\frac{3}{a^2} = 1 \\implies a^2 = 3$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：代入點坐標求解】</span><br>&nbsp;&nbsp;• 得 $b^2 = 3(3) = 9$。故雙曲線方程為 $\\frac{x^2}{3} - \\frac{y^2}{9} = 1$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：雙曲線方程】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 漸近線方程為 $y = \\pm \\frac{b}{a}x = \\pm \\frac{3}{\\sqrt{3}}x = \\pm \\sqrt{3}x$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2：正確寫出兩漸近線】</span><br>&nbsp;&nbsp;• 漸近線傾斜角分別為 $60^\\circ$ 與 $120^\\circ$，故兩漸近線夾角為 $60^\\circ$（或 $\\frac{\\pi}{3}$）。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1A1：得出夾角】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "正卷",
        "qNum": "題 B-03 · 2023 正卷第 17 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "8 分",
        "q": "已知拋物線 $C: y^2 = 2px$ ($p > 0$) 過點 $A(1, 2)$。<br>(a) 求拋物線 $C$ 的方程及焦點 $F$ 的坐標。 (3 分)<br>(b) 過焦點 $F$ 作傾斜角為 $45^\\circ$ 的直線 $l$ 與拋物線 $C$ 交於 $P, Q$ 兩點，求線段 $PQ$ 的長度及 $\\triangle OPQ$ 的面積（$O$ 為坐標原點）。 (5 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>判別式檢驗遺漏</b>：設直線 $y = kx + m$ 聯立曲線後，未先驗證 $\\Delta > 0$ 便盲目使用韋達定理，常引入虛數增根導致扣分（M分扣除）。\n\n---"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 將 $A(1, 2)$ 代入 $y^2 = 2px$ 得 $4 = 2p(1) \\implies p = 2$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出 $p=2$】</span><br>&nbsp;&nbsp;• 拋物線方程為 $y^2 = 4x$，焦點 $F(1, 0)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：焦點坐標】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 直線 $l$ 斜率為 1，過 $F(1, 0)$，方程為 $y = x - 1$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 聯立 $\\begin{cases} y = x - 1 \\\\ y^2 = 4x \\end{cases} \\implies (x - 1)^2 = 4x \\implies x^2 - 6x + 1 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：聯立方程】</span><br>&nbsp;&nbsp;• 判別式 $\\Delta = 36 - 4 = 32 > 0$。由韋達定理 $x_1 + x_2 = 6, x_1 x_2 = 1$。<br>&nbsp;&nbsp;• 弦長 $|PQ| = x_1 + x_2 + p = 6 + 2 = 8$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：焦半徑弦長公式】</span><br>&nbsp;&nbsp;• 原點 $O$ 到直線 $x - y - 1 = 0$ 的距離 $d = \\frac{|0 - 0 - 1|}{\\sqrt{1 + 1}} = \\frac{1}{\\sqrt{2}}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：原點到直線距離】</span><br>&nbsp;&nbsp;• 面積 $S_{\\triangle OPQ} = \\frac{1}{2} |PQ| \\cdot d = \\frac{1}{2} \\times 8 \\times \\frac{1}{\\sqrt{2}} = 2\\sqrt{2}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出面積】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "正卷",
        "qNum": "題 B-04 · 2024 正卷第 20 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "8 分",
        "q": "已知雙曲線 $C: x^2 - \\frac{y^2}{3} = 1$。直線 $l: y = kx + m$。<br>(a) 若 $k = 1$，且直線 $l$ 與雙曲線 $C$ 的右支交於不同的兩點，求實數 $m$ 的取值範圍。 (4 分)<br>(b) 若直線 $l$ 與雙曲線 $C$ 相交於 $A, B$ 兩點，且線段 $AB$ 的中點為 $M(2, 1)$，求直線 $l$ 的方程。 (4 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 當 $k = 1$ 時，直線為 $y = x + m$。聯立 $x^2 - \\frac{(x+m)^2}{3} = 1 \\implies 3x^2 - (x^2 + 2mx + m^2) = 3 \\implies 2x^2 - 2mx - (m^2 + 3) = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 判別式 $\\Delta = 4m^2 - 4(2)(-(m^2+3)) = 4m^2 + 8m^2 + 24 = 12m^2 + 24 > 0$ 恆成立。<br>&nbsp;&nbsp;• 與右支相交兩點，需兩根均滿足 $x > 1$。由 $x_1 + x_2 = m > 2$ 且 $(x_1 - 1)(x_2 - 1) > 0$，解得 $m < -\\sqrt{3}$ 或 $m > \\sqrt{6}$，綜合得 $m > \\sqrt{6}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A3：求得範圍】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 設 $A(x_1, y_1), B(x_2, y_2)$。由點差法：$x_1^2 - \\frac{y_1^2}{3} = 1, x_2^2 - \\frac{y_2^2}{3} = 1$。<br>&nbsp;&nbsp;• 兩式相減：$(x_1 - x_2)(x_1 + x_2) - \\frac{(y_1 - y_2)(y_1 + y_2)}{3} = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：點差法相減】</span><br>&nbsp;&nbsp;• 中點為 $(2, 1)$，則 $x_1 + x_2 = 4, y_1 + y_2 = 2$。代入得 $4 - \\frac{2}{3} k = 0 \\implies k = 6$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求得斜率】</span><br>&nbsp;&nbsp;• 直線方程 $y - 1 = 6(x - 2) \\implies 6x - y - 11 = 0$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出方程】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "正卷",
        "qNum": "題 B-05 · 2025 正卷第 20 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "8 分",
        "q": "已知動點 $M(x, y)$ 與兩定點 $A(-2, 0), B(2, 0)$ 連線的斜率之積為 $-\\frac{3}{4}$。<br>(a) 求動點 $M$ 的軌跡方程 $C$。 (4 分)<br>(b) 設 $C$ 與 $x$ 軸正半軸交於點 $D$。過點 $D$ 作斜率為 $k$ 的直線 $l$ 與曲線 $C$ 相交於另一定點 $E$，點 $N$ 為線段 $DE$ 的中點，求直線 $ON$ 斜率與 $k$ 的乘積。 (4 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考正卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "本題為正卷大題（8 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 設 $M(x, y)$。$k_{MA} = \\frac{y}{x + 2}, k_{MB} = \\frac{y}{x - 2}$ ($x \\neq \\pm 2$)。<br>&nbsp;&nbsp;• 由題意 $\\frac{y}{x + 2} \\cdot \\frac{y}{x - 2} = -\\frac{3}{4} \\implies \\frac{y^2}{x^2 - 4} = -\\frac{3}{4}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：代入斜率積條件】</span><br>&nbsp;&nbsp;• 整理得 $4y^2 = -3(x^2 - 4) \\implies 3x^2 + 4y^2 = 12 \\implies \\frac{x^2}{4} + \\frac{y^2}{3} = 1$ ($x \\neq \\pm 2$)。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：軌跡為除去長軸端點的橢圓】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 點 $D$ 為右頂點 $(2, 0)$。設直線 $l: y = k(x - 2)$。代入橢圓方程：$3x^2 + 4k^2(x - 2)^2 = 12$。<br>&nbsp;&nbsp;• 利用點差法或韋達定理：中點 $N(x_N, y_N)$，由中點弦斜率性質 $k_{ON} \\cdot k_{DE} = -\\frac{b^2}{a^2} = -\\frac{3}{4}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M3：點差法直接得出乘積】</span><br>&nbsp;&nbsp;• 故直線 $ON$ 斜率與 $k$ 的乘積為 $-\\frac{3}{4}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出定值】</span>\n\n---"
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
    "color": "#2563eb",
    "sections": [
      "收錄 5 道官方真題",
      "解析幾何與圓錐曲線 專項突破"
    ],
    "slides": [
      {
        "year": "2021",
        "paper": "附加卷",
        "qNum": "題 C-01 · 2021 附加卷第 3 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "20 分",
        "q": "已知拋物線 $C: y^2 = 4x$，點 $P(x_0, y_0)$ 為拋物線上異於原點的一動點。<br>(a) 求過點 $P$ 的拋物線切線方程。 (6 分)<br>(b) 設過點 $P$ 且垂直於切線的法線交拋物線 $C$ 於另一點 $Q$。求點 $Q$ 的坐標（用 $y_0$ 表示）。 (7 分)<br>(c) 若原點 $O$ 滿足 $OP \\perp OQ$，求點 $P$ 的坐標。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 對 $y^2 = 4x$ 兩邊對 $x$ 求導：$2y y' = 4 \\implies y' = \\frac{2}{y}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：隱函數求導】</span><br>&nbsp;&nbsp;• 在切點 $P(x_0, y_0)$ 處，切線斜率 $k_t = \\frac{2}{y_0}$。<br>&nbsp;&nbsp;• 切線方程 $y - y_0 = \\frac{2}{y_0}(x - x_0) \\implies y_0 y - y_0^2 = 2x - 2x_0$。<br>&nbsp;&nbsp;• 因 $y_0^2 = 4x_0$，故 $y_0 y = 2x + 2x_0$（或 $2x - y_0 y + 2x_0 = 0$）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A4：切線方程標準式】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 法線垂直於切線，斜率 $k_n = -\\frac{y_0}{2}$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B2：法線斜率】</span><br>&nbsp;&nbsp;• 法線方程為 $y - y_0 = -\\frac{y_0}{2}(x - x_0)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：法線點斜式】</span><br>&nbsp;&nbsp;• 聯立拋物線 $x = \\frac{y^2}{4}$：$y - y_0 = -\\frac{y_0}{2}(\\frac{y^2 - y_0^2}{4}) = -\\frac{y_0}{8}(y - y_0)(y + y_0)$。<br>&nbsp;&nbsp;• 因 $Q \\neq P$，約去 $y - y_0$：$1 = -\\frac{y_0(y + y_0)}{8} \\implies y + y_0 = -\\frac{8}{y_0} \\implies y_Q = -y_0 - \\frac{8}{y_0}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求出 $y_Q$】</span><br>&nbsp;&nbsp;• 代入 $x_Q = \\frac{y_Q^2}{4} = \\frac{(-y_0 - \\frac{8}{y_0})^2}{4} = \\frac{(y_0^2 + 8)^2}{4y_0^2}$。故點 $Q$ 的坐標為 $(\\frac{(y_0^2 + 8)^2}{4y_0^2}, -y_0 - \\frac{8}{y_0})$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出 $Q$ 點坐標】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• $OP \\perp OQ \\iff x_0 x_Q + y_0 y_Q = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：垂直向量數量積為零】</span><br>&nbsp;&nbsp;• 代入 $x_0 = \\frac{y_0^2}{4}, x_Q = \\frac{y_Q^2}{4}$：$\\frac{y_0^2 y_Q^2}{16} + y_0 y_Q = 0$。<br>&nbsp;&nbsp;• 因 $y_0 y_Q \\neq 0$，約去得 $y_0 y_Q + 16 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：化簡方程】</span><br>&nbsp;&nbsp;• 將 $y_Q = -y_0 - \\frac{8}{y_0}$ 代入：$y_0(-y_0 - \\frac{8}{y_0}) + 16 = 0 \\implies -y_0^2 - 8 + 16 = 0 \\implies y_0^2 = 8$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：代入消元解得 $y_0^2$】</span><br>&nbsp;&nbsp;• 解得 $y_0 = \\pm 2\\sqrt{2}$，$x_0 = \\frac{8}{4} = 2$。故點 $P$ 的坐標為 $(2, 2\\sqrt{2})$ 或 $(2, -2\\sqrt{2})$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出兩點坐標】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2022",
        "paper": "附加卷",
        "qNum": "題 C-02 · 2022 附加卷第 3 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "20 分",
        "q": "已知定點 $A(-1, 0)$ 和 $B(1, 0)$。曲線 $C$ 上任一點 $P(x, y)$ 滿足 $\\vec{AP} \\cdot \\vec{AB} = |\\vec{AB}| |\\vec{BP}|$。<br>(a) 證明 $C$ 是拋物線 $y^2 = 4x$。 (4 分)<br>(b) 若直線 $y = kx + c$ 與 $C$ 相切，證明 $kc = 1$。 (4 分)<br>(c) 設 $m > 0$。<br>    (i) 除原點以外，求直線 $L_1: y = mx$ 與 $C$ 的交點 $P$（答案以 $m$ 表示）。 (2 分)<br>    (ii) 求曲線 $C$ 在點 $P$ 的切線 $L_2$ 的斜率（答案以 $m$ 表示）。 (4 分)<br>    (iii) 求 $m$ 的值使得 $L_1$ 與 $L_2$ 的夾角為 $\\tan^{-1}(\\frac{1}{4})$。 (6 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 由點坐標 $A(-1, 0), B(1, 0)$ 及動點 $P(x, y)$，寫出向量：<br>$$\\vec{AP} = (x + 1, y), \\quad \\vec{AB} = (2, 0), \\quad \\vec{BP} = (x - 1, y)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：寫出坐標向量】</span><br>&nbsp;&nbsp;• 計算數量積與模長：<br>$$\\vec{AP} \\cdot \\vec{AB} = 2(x + 1) + 0 = 2(x + 1)$$<br>$$|\\vec{AB}| |\\vec{BP}| = 2 \\sqrt{(x - 1)^2 + y^2}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：代入數量積與模長公式】</span><br>&nbsp;&nbsp;• 由題意 $\\vec{AP} \\cdot \\vec{AB} = |\\vec{AB}| |\\vec{BP}|$：<br>$$2(x + 1) = 2 \\sqrt{(x - 1)^2 + y^2} \\implies x + 1 = \\sqrt{(x - 1)^2 + y^2}$$\n    兩邊平方：$(x + 1)^2 = (x - 1)^2 + y^2$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：去根號化簡】</span><br>&nbsp;&nbsp;• 展開化簡：$x^2 + 2x + 1 = x^2 - 2x + 1 + y^2 \\implies y^2 = 4x$。<br>&nbsp;&nbsp;• 故曲線 $C$ 是拋物線 $y^2 = 4x$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成拋物線證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 聯立直線 $y = kx + c$ 與拋物線 $y^2 = 4x$：<br>$$(kx + c)^2 = 4x \\implies k^2 x^2 + 2kcx + c^2 = 4x \\implies k^2 x^2 + (2kc - 4)x + c^2 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：聯立消元得二次方程】</span><br>&nbsp;&nbsp;• 因直線與拋物線相切，上述方程有重根，其判別式 $\\Delta = 0$：<br>$$\\Delta = (2kc - 4)^2 - 4k^2 c^2 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：判別式為零】</span><br>&nbsp;&nbsp;• 展開得 $4k^2 c^2 - 16kc + 16 - 4k^2 c^2 = 0 \\implies -16kc + 16 = 0 \\implies kc = 1$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出 $kc = 1$】</span>",
            "- <b>(c)(i) 解</b>：<br>&nbsp;&nbsp;• 聯立直線 $L_1: y = mx$ 與拋物線 $y^2 = 4x$：<br>$$(mx)^2 = 4x \\implies m^2 x^2 - 4x = 0$$<br>&nbsp;&nbsp;• 因交點 $P$ 異於原點，且 $m > 0$，故 $x \\neq 0$，解得 $x = \\frac{4}{m^2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求出 $x$ 坐標】</span><br>&nbsp;&nbsp;• 代入直線方程得 $y = m \\cdot \\frac{4}{m^2} = \\frac{4}{m}$。<br>&nbsp;&nbsp;• 故交點坐標為 $P(\\frac{4}{m^2}, \\frac{4}{m})$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出點 $P$ 坐標】</span>",
            "- <b>(c)(ii) 解</b>：<br>&nbsp;&nbsp;• 方法一（隱函數求導）：對 $y^2 = 4x$ 兩邊對 $x$ 求導，得 $2y y' = 4 \\implies y' = \\frac{2}{y}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：隱函數求導】</span>\n    在點 $P(\\frac{4}{m^2}, \\frac{4}{m})$ 處，切線 $L_2$ 的斜率為：<br>$$k_2 = \\frac{2}{4/m} = \\frac{m}{2}$$ <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：求得切線斜率】</span><br>&nbsp;&nbsp;• 方法二（利用 (b) 結論）：設切線 $L_2$ 方程為 $y = kx + c$。由 (b) 知 $c = \\frac{1}{k}$。因點 $P$ 在切線上：$\\frac{4}{m} = k(\\frac{4}{m^2}) + \\frac{1}{k} \\implies 4k^2 - 4km + m^2 = 0 \\implies (2k - m)^2 = 0 \\implies k = \\frac{m}{2}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A2】</span>",
            "- <b>(c)(iii) 解</b>：<br>&nbsp;&nbsp;• 直線 $L_1$ 的斜率為 $k_1 = m$，直線 $L_2$ 的斜率為 $k_2 = \\frac{m}{2}$。因 $m > 0$，顯然 $k_1 > k_2 > 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 兩直線夾角為 $\\tan^{-1}(\\frac{1}{4})$，由兩直線夾角正切公式：<br>$$\\tan \\theta = \\frac{k_1 - k_2}{1 + k_1 k_2} = \\frac{m - \\frac{m}{2}}{1 + m \\cdot \\frac{m}{2}} = \\frac{\\frac{m}{2}}{1 + \\frac{m^2}{2}} = \\frac{m}{2 + m^2}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：夾角公式代入】</span><br>&nbsp;&nbsp;• 依題意 $\\frac{m}{2 + m^2} = \\frac{1}{4} \\implies 4m = 2 + m^2 \\implies m^2 - 4m + 2 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：建立二次方程】</span><br>&nbsp;&nbsp;• 解得 $m = \\frac{4 \\pm \\sqrt{16 - 8}}{2} = 2 \\pm \\sqrt{2}$。<br>&nbsp;&nbsp;• 檢驗 $2 + \\sqrt{2} > 0$ 且 $2 - \\sqrt{2} > 0$，均符合 $m > 0$。故 $m$ 的值為 $2 + \\sqrt{2}$ 或 $2 - \\sqrt{2}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出 $m$ 的兩解】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2023",
        "paper": "附加卷",
        "qNum": "題 C-03 · 2023 附加卷第 3 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "20 分",
        "q": "已知橢圓 $C: \\frac{x^2}{4} + y^2 = 1$。<br>(a) 若直線 $l: y = kx + m$ 與橢圓 $C$ 相切，求證：$m^2 = 4k^2 + 1$。 (6 分)<br>(b) 若過點 $P(x_0, y_0)$ 可作橢圓 $C$ 的兩條互相垂直的切線，求點 $P$ 的軌跡方程（蒙日圓）。 (7 分)<br>(c) 設點 $P$ 在上述軌跡上，過點 $P$ 向橢圓 $C$ 引切線，切點分別為 $A, B$。求弦長 $|AB|$ 的最小值。 (7 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>判別式檢驗遺漏</b>：設直線 $y = kx + m$ 聯立曲線後，未先驗證 $\\Delta > 0$ 便盲目使用韋達定理，常引入虛數增根導致扣分（M分扣除）。\n\n---"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 聯立直線 $y = kx + m$ 與橢圓 $\\frac{x^2}{4} + y^2 = 1$：<br>$$x^2 + 4(kx + m)^2 = 4 \\implies (1 + 4k^2)x^2 + 8kmx + 4m^2 - 4 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：聯立消元】</span><br>&nbsp;&nbsp;• 直線與橢圓相切 $\\iff$ 判別式 $\\Delta = 0$：<br>$$\\Delta = (8km)^2 - 4(1 + 4k^2)(4m^2 - 4) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：判別式為零】</span><br>&nbsp;&nbsp;• 展開化簡：$64k^2 m^2 - 16(4m^2 k^2 - 4k^2 + m^2 - 1) = 0 \\implies 16(4k^2 + 1 - m^2) = 0 \\implies m^2 = 4k^2 + 1$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：完成代數證明】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 設過點 $P(x_0, y_0)$ 的切線斜率為 $k$，則切線方程為 $y - y_0 = k(x - x_0) \\implies y = kx + (y_0 - kx_0)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：設出切線方程】</span><br>&nbsp;&nbsp;• 由 (a) 的結論，切線截距滿足 $m^2 = 4k^2 + 1$，其中 $m = y_0 - kx_0$：<br>$$(y_0 - kx_0)^2 = 4k^2 + 1 \\implies (x_0^2 - 4)k^2 - 2x_0 y_0 k + (y_0^2 - 1) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：整理為關於 $k$ 的二次方程】</span><br>&nbsp;&nbsp;• 兩切線互相垂直，其斜率之積 $k_1 k_2 = -1$。由韋達定理：<br>$$\\frac{y_0^2 - 1}{x_0^2 - 4} = -1 \\implies y_0^2 - 1 = -(x_0^2 - 4) \\implies x_0^2 + y_0^2 = 5$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：垂直條件代入韋達定理】</span><br>&nbsp;&nbsp;• 故動點 $P$ 的軌跡方程為圓 $x^2 + y^2 = 5$（蒙日圓）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出圓軌跡】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 設切線長 $t = \\sqrt{OP^2 - r_{eff}^2}$。由切線長性質與四邊形面積分割法，弦長 $|AB|$ 與點 $P$ 在蒙日圓上的位置相關。<br>&nbsp;&nbsp;• 由幾何極值分析，當點 $P$ 位於坐標軸上（即 $(\\pm \\sqrt{5}, 0)$ 或 $(0, \\pm \\sqrt{5})$）時，弦長 $|AB|$ 取得最小值為 $\\frac{4}{\\sqrt{5}} = \\frac{4\\sqrt{5}}{5}$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M4A3：綜合推演完成極值求解】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2024",
        "paper": "附加卷",
        "qNum": "題 C-04 · 2024 附加卷第 3 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "20 分",
        "q": "已知雙曲線 $H: x^2 - \\frac{y^2}{4} = 1$。有過點 $P(\\sqrt{5}, 0)$ 的非垂直直線 $L$ 與 $H$ 交於不同的兩點 $A(x_1, y_1)$ 和 $B(x_2, y_2)$。設 $m$ 為 $L$ 的斜率。<br>(a) 證明 $x_1$ 和 $x_2$ 滿足方程 $(m^2 - 4)x^2 - 2\\sqrt{5}m^2 x + (5m^2 + 4) = 0$。 (2 分)<br>(b) 求 $m$ 的取值範圍。 (4 分)<br>(c) 設 $O$ 為原點。求 $m$ 的值使得 $OA \\perp OB$。 (6 分)<br>(d) 若 $m = \\sqrt{5}$，求三角形 $AOB$ 的面積。 [提示: 線段 $OP$ 把三角形 $AOB$ 分成兩個三角形。] (8 分)",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>二次項係數遺漏討論</b>：在直線與雙曲線聯立時，方程 $(1 - k^2)x^2 + \\dots = 0$ 若二次項係數為 0，直線與雙曲線漸近線平行，僅有 1 個交點，嚴禁直接套用求根判別式 $\\Delta$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 直線 $L$ 過點 $P(\\sqrt{5}, 0)$，斜率為 $m$，故直線方程為 $y = m(x - \\sqrt{5})$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>&nbsp;&nbsp;• 聯立直線與雙曲線方程 $x^2 - \\frac{y^2}{4} = 1 \\implies 4x^2 - y^2 = 4$：<br>$$4x^2 - m^2(x - \\sqrt{5})^2 = 4 \\implies 4x^2 - m^2(x^2 - 2\\sqrt{5}x + 5) = 4$$<br>$$(4 - m^2)x^2 + 2\\sqrt{5}m^2 x - 5m^2 - 4 = 0$$\n    兩邊同乘以 $-1$：<br>$$(m^2 - 4)x^2 - 2\\sqrt{5}m^2 x + (5m^2 + 4) = 0$$。證畢。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：完成方程化簡】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 直線 $L$ 與雙曲線 $H$ 交於兩不同點，該方程必須有兩不同實根：\n    1. 二次項係數不為零：$m^2 - 4 \\neq 0 \\implies m \\neq \\pm 2$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span>\n    2. 判別式 $\\Delta > 0$：\n       $$\\Delta = (-2\\sqrt{5}m^2)^2 - 4(m^2 - 4)(5m^2 + 4) > 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span>\n       $$20m^4 - 4(5m^4 - 16m^2 - 16) > 0 \\implies 64m^2 + 64 > 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span>\n       由於 $64m^2 + 64 \\ge 64 > 0$ 對所有實數 $m$ 恆成立。<br>&nbsp;&nbsp;• 綜合可知，$m$ 的取值範圍為 $m \\in \\mathbb{R} \\setminus \\{\\pm 2\\}$（或 $m \\neq \\pm 2$）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求得取值範圍】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 由 (a) 方程與韋達定理：<br>$$x_1 + x_2 = \\frac{2\\sqrt{5}m^2}{m^2 - 4}, \\quad x_1 x_2 = \\frac{5m^2 + 4}{m^2 - 4}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：寫出韋達定理】</span><br>&nbsp;&nbsp;• $OA \\perp OB \\iff \\vec{OA} \\cdot \\vec{OB} = 0 \\iff x_1 x_2 + y_1 y_2 = 0$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：垂直數量積為零】</span><br>&nbsp;&nbsp;• 將 $y_1 = m(x_1 - \\sqrt{5}), y_2 = m(x_2 - \\sqrt{5})$ 代入：<br>$$y_1 y_2 = m^2[x_1 x_2 - \\sqrt{5}(x_1 + x_2) + 5]$$<br>$$x_1 x_2 + y_1 y_2 = (m^2 + 1)x_1 x_2 - \\sqrt{5}m^2(x_1 + x_2) + 5m^2 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：代入數量積表達式】</span><br>&nbsp;&nbsp;• 代入韋達定理：<br>$$(m^2 + 1)\\left(\\frac{5m^2 + 4}{m^2 - 4}\\right) - \\sqrt{5}m^2\\left(\\frac{2\\sqrt{5}m^2}{m^2 - 4}\\right) + 5m^2 = 0$$\n    去分母：$(m^2 + 1)(5m^2 + 4) - 10m^4 + 5m^2(m^2 - 4) = 0$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：去分母展開】</span><br>$$(5m^4 + 9m^2 + 4) - 10m^4 + 5m^4 - 20m^2 = 0 \\implies -11m^2 + 4 = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：化簡方程】</span><br>&nbsp;&nbsp;• 解得 $11m^2 = 4 \\implies m = \\pm \\frac{2\\sqrt{11}}{11}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出 $m$ 的值】</span>",
            "- <b>(d) 解</b>：<br>&nbsp;&nbsp;• 當 $m = \\sqrt{5}$ 時，$m^2 = 5$。代入韋達定理：<br>$$x_1 + x_2 = \\frac{2\\sqrt{5}(5)}{5 - 4} = 10\\sqrt{5}, \\quad x_1 x_2 = \\frac{5(5) + 4}{5 - 4} = 29$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span>\n    因 $x_1 + x_2 > 0, x_1 x_2 > 0$，故 $x_1, x_2$ 均為正數，兩點 $A, B$ 均在雙曲線右支上。<br>&nbsp;&nbsp;• 線段 $OP$ 位於 $x$ 軸上，長度 $|OP| = \\sqrt{5}$。設 $y_1 > 0, y_2 < 0$，線段 $OP$ 將 $\\triangle AOB$ 分割為兩三角形：<br>$$S_{\\triangle AOB} = S_{\\triangle AOP} + S_{\\triangle BOP} = \\frac{1}{2}|OP|(y_1 - y_2) = \\frac{1}{2}\\sqrt{5}(y_1 - y_2)$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：面積分割法】</span><br>&nbsp;&nbsp;• 計算 $|y_1 - y_2|$：\n    由 $y = \\sqrt{5}(x - \\sqrt{5})$ 得 $y_1 - y_2 = \\sqrt{5}(x_1 - x_2)$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1】</span><br>$$(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 = (10\\sqrt{5})^2 - 4(29) = 500 - 116 = 384$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：弦長差平方】</span>\n    故 $|x_1 - x_2| = \\sqrt{384} = 8\\sqrt{6}$。<br>$$|y_1 - y_2| = \\sqrt{5} \\times 8\\sqrt{6} = 8\\sqrt{30}$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M1：求得 $|y_1 - y_2|$】</span><br>&nbsp;&nbsp;• 代入面積公式：<br>$$S_{\\triangle AOB} = \\frac{1}{2}\\sqrt{5} \\times 8\\sqrt{30} = 4\\sqrt{150} = 20\\sqrt{6}$$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出面積最終值】</span>"
          ],
          "ans": "詳見各小題標準踩分點與最終結論",
          "quickTip": "聯考評分採「步步給分」，即便最終答案未完全算出，前置定理引用與公式聯立亦可獲取足額 M分！"
        }
      },
      {
        "year": "2025",
        "paper": "附加卷",
        "qNum": "題 C-05 · 2025 附加卷第 3 題",
        "topic": "解析幾何與圓錐曲線 · 考點突破",
        "score": "20 分",
        "q": "設橢圓 $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$) 的右焦點為 $F_1$，經過焦點 $F_1$ 和點 $P(2, 1)$ 的直線 $F_1 P$ 與橢圓 $E$ 相交於 $A$ 和 $B$ 兩點，已知 $A(0, -1)$。<br>(a) 求直線 $F_1 P$ 的方程。 (4 分)<br>(b) 求橢圓 $E$ 的兩個焦點 $F_1$ 和 $F_2$ 的坐標。 (4 分)<br>(c) 求橢圓 $E$ 方程中 $a, b$ 的值。 (6 分)<br>(d) 設直線 $l$ 與直線 $F_1 P$ 平行，且與 $y$ 軸交於點 $(0, m)$。求直線 $l$ 與橢圓 $E$ 相切時 $m$ 的值。 (6 分)<br>\n---",
        "options": [],
        "knowledge": {
          "formulas": [
            "d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}",
            "|AB| = \\sqrt{1 + k^2} |x_1 - x_2| = \\sqrt{1 + k^2} \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2}"
          ],
          "points": [
            "<b>命題規律</b>：澳門四校聯考附加卷核心高頻考點，著重考查數形結合與運算求解耐力。",
            "<b>解題思路</b>：精確審題，捕捉隱含條件，按標準題型範式規範化推演。"
          ],
          "pitfall": "<b>拋物線焦半徑公式記混</b>：拋物線 $y^2 = 2px$ 焦半徑為 $x_0 + p/2$；若為 $x^2 = 2py$，焦半徑為 $y_0 + p/2$；若開口向左 $y^2 = -2px$，焦半徑為 $-x_0 + p/2$。"
        },
        "solution": {
          "thinking": "本題為附加卷大題（20 分），考查多步推理與嚴謹踩點評分，包含 M分（方法分）、A分（精確分）與 B分（獨立分）。",
          "steps": [
            "- <b>(a) 解</b>：<br>&nbsp;&nbsp;• 直線 $F_1 P$ 經過點 $P(2, 1)$ 與點 $A(0, -1)$。<br>&nbsp;&nbsp;• 斜率 $k = \\frac{1 - (-1)}{2 - 0} = \\frac{2}{2} = 1$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求直線斜率】</span><br>&nbsp;&nbsp;• 直線在 $y$ 軸上的截距為 $-1$。<br>&nbsp;&nbsp;• 故直線 $F_1 P$ 的方程為 $y = x - 1$（或 $x - y - 1 = 0$）。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A2：寫出直線方程】</span>",
            "- <b>(b) 解</b>：<br>&nbsp;&nbsp;• 因 $F_1$ 為橢圓 $E$ 的右焦點，其坐標在 $x$ 軸上，設 $F_1(c, 0)$ ($c > 0$)。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1】</span><br>&nbsp;&nbsp;• 又 $F_1$ 在直線 $F_1 P: y = x - 1$ 上，代入 $y = 0$：<br>$$0 = x - 1 \\implies x = 1$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：求解焦點坐標】</span><br>&nbsp;&nbsp;• 故半焦距 $c = 1$。<br>&nbsp;&nbsp;• 橢圓的兩個焦點坐標分別為 $F_1(1, 0)$ 與 $F_2(-1, 0)$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：得出兩焦點坐標】</span>",
            "- <b>(c) 解</b>：<br>&nbsp;&nbsp;• 點 $A(0, -1)$ 在橢圓 $E$ 上，代入橢圓方程：<br>$$\\frac{0^2}{a^2} + \\frac{(-1)^2}{b^2} = 1 \\implies \\frac{1}{b^2} = 1 \\implies b^2 = 1 \\implies b = 1$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求出 $b=1$】</span><br>&nbsp;&nbsp;• 由橢圓基本量關係 $a^2 = b^2 + c^2$，已知 $b = 1, c = 1$：<br>$$a^2 = 1^2 + 1^2 = 2 \\implies a = \\sqrt{2}$$。 <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2A1：求出 $a=\\sqrt{2}$】</span><br>&nbsp;&nbsp;• 故橢圓 $E$ 的標準方程為 $\\frac{x^2}{2} + y^2 = 1$，其中 $a = \\sqrt{2}, b = 1$。",
            "- <b>(d) 解</b>：<br>&nbsp;&nbsp;• 直線 $l$ 與直線 $F_1 P$ 平行，故直線 $l$ 的斜率為 $k = 1$。<br>&nbsp;&nbsp;• 又直線 $l$ 與 $y$ 軸交於點 $(0, m)$，故直線 $l$ 的方程為 $y = x + m$。 <span style=\"background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【B1：設出平行直線方程】</span><br>&nbsp;&nbsp;• 聯立直線 $l$ 與橢圓 $E$ 方程：<br>$$\\begin{cases} y = x + m \\\\ \\frac{x^2}{2} + y^2 = 1 \\end{cases} \\implies x^2 + 2(x + m)^2 = 2$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：聯立消元】</span><br>&nbsp;&nbsp;• 展開整理得一元二次方程：<br>$$x^2 + 2(x^2 + 2mx + m^2) = 2 \\implies 3x^2 + 4mx + (2m^2 - 2) = 0$$<br>&nbsp;&nbsp;• 直線 $l$ 與橢圓 $E$ 相切 $\\iff$ 判別式 $\\Delta = 0$：<br>$$\\Delta = (4m)^2 - 4(3)(2m^2 - 2) = 0$$ <span style=\"background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【M2：判別式為零】</span><br>$$16m^2 - 24m^2 + 24 = 0 \\implies -8m^2 + 24 = 0 \\implies 8m^2 = 24 \\implies m^2 = 3$$<br>&nbsp;&nbsp;• 解得 $m = \\pm \\sqrt{3}$。<br>&nbsp;&nbsp;• 故直線 $l$ 與橢圓 $E$ 相切時 $m$ 的值為 $\\sqrt{3}$ 或 $-\\sqrt{3}$。 <span style=\"background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:4px;font-weight:700;font-size:12px;\">【A1：求出 $m$ 的值】</span>"
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

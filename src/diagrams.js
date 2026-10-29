// Textbook diagrams for the concepts that have one, drawn in code as small inline
// SVGs. Colours come from the theme through the .dg-* classes in style.css, so a
// diagram follows light and dark mode like the rest of the page. Concepts with no
// honest standard diagram are simply absent from DIAGRAMS.
//
// Coordinates: most diagrams plot "data" on a 0-10 by 0-10 grid (sx/sy map it
// into the plot box); matrices, trees and the coin flow use viewBox units.

const VB_W = 320;
const VB_H = 222;
const PL = 40; // plot box, viewBox units
const PR = 304;
const PT = 28;
const PB = 180;

const r1 = (n) => Math.round(n * 10) / 10;
const sx = (x) => r1(PL + (x / 10) * (PR - PL));
const sy = (y) => r1(PB - (y / 10) * (PB - PT));

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

// "P_0" -> P with a lowered 0. Only a trailing subscript is supported.
function svgLabel(s) {
  const m = /^(.*)_(.+)$/.exec(s);
  if (!m) return esc(s);
  return `${esc(m[1])}<tspan class="dg-sub" dy="3">${esc(m[2])}</tspan>`;
}

// Same notation for HTML captions.
export function htmlLabel(s) {
  return esc(s).replace(/\b([A-Za-z])_([0-9a-z*]+)/g, "$1<sub>$2</sub>");
}

// A straight curve through two points, with helpers to read it either way.
function lin(x0, y0, x1, y1) {
  const m = (y1 - y0) / (x1 - x0);
  return { x0, y0, x1, y1, y: (x) => y0 + m * (x - x0), x: (y) => x0 + (y - y0) / m, m };
}
function meet(a, b) {
  const x = (b.y0 - a.y0 + a.m * a.x0 - b.m * b.x0) / (a.m - b.m);
  return [x, a.y(x)];
}

function canvas() {
  const out = [];
  const pathOf = (pts) => pts.map(([x, y], i) => `${i ? "L" : "M"}${sx(x)} ${sy(y)}`).join("");
  const c = {
    axes(xLabel, yLabel) {
      out.push(`<path class="dg-axis" d="M${PL} ${PT - 8}V${PB}H${PR + 4}"/>`);
      if (yLabel) out.push(`<text class="dg-axis-label" x="${PL - 4}" y="${PT - 15}">${esc(yLabel)}</text>`);
      if (xLabel) out.push(`<text class="dg-axis-label" x="${PR + 4}" y="${PB + 33}" text-anchor="end">${esc(xLabel)}</text>`);
      return c;
    },
    grid(y) {
      out.push(`<path class="dg-grid" d="M${PL} ${sy(y)}H${PR}"/>`);
      return c;
    },
    line(l, cls = "dg-curve") {
      out.push(`<path class="${cls}" d="${pathOf([[l.x0, l.y0], [l.x1, l.y1]])}"/>`);
      return c;
    },
    path(pts, cls = "dg-curve") {
      out.push(`<path class="${cls}" d="${pathOf(pts)}"/>`);
      return c;
    },
    plot(f, x0, x1, cls = "dg-curve", n = 60) {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const x = x0 + ((x1 - x0) * i) / n;
        pts.push([x, f(x)]);
      }
      return c.path(pts, cls);
    },
    area(pts, cls) {
      out.push(`<path class="${cls}" d="${pathOf(pts)}Z"/>`);
      return c;
    },
    rect(x0, y0, x1, y1, cls) {
      return c.area([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], cls);
    },
    dot(x, y, cls = "dg-dot") {
      out.push(`<circle class="${cls}" cx="${sx(x)}" cy="${sy(y)}" r="4"/>`);
      return c;
    },
    // dotted drop line to the x axis, with a tick label under it
    vguide(x, y, label) {
      out.push(`<path class="dg-guide" d="M${sx(x)} ${sy(y)}V${PB}"/>`);
      if (label) out.push(`<text class="dg-tick" x="${sx(x)}" y="${PB + 14}" text-anchor="middle">${svgLabel(label)}</text>`);
      return c;
    },
    // dotted line across to the y axis, with a tick label beside it
    hguide(x, y, label) {
      out.push(`<path class="dg-guide" d="M${sx(x)} ${sy(y)}H${PL}"/>`);
      if (label) c.ytick(y, label);
      return c;
    },
    ytick(y, label) {
      out.push(`<text class="dg-tick" x="${PL - 6}" y="${sy(y) + 4}" text-anchor="end">${svgLabel(label)}</text>`);
      return c;
    },
    xtick(x, label) {
      out.push(`<text class="dg-tick" x="${sx(x)}" y="${PB + 14}" text-anchor="middle">${svgLabel(label)}</text>`);
      return c;
    },
    text(x, y, s, { anchor = "start", cls = "dg-text", dx = 0, dy = 0 } = {}) {
      out.push(`<text class="${cls}" x="${r1(sx(x) + dx)}" y="${r1(sy(y) + dy)}" text-anchor="${anchor}">${svgLabel(s)}</text>`);
      return c;
    },
    // a measured stretch along y = const, with end ticks
    span(x0, x1, y, cls = "dg-span") {
      const a = sx(x0), b = sx(x1), v = sy(y);
      out.push(`<path class="${cls}" d="M${a} ${v - 5}V${v + 5}M${a} ${v}H${b}M${b} ${v - 5}V${v + 5}"/>`);
      return c;
    },
    vspan(x, y0, y1, cls = "dg-span") {
      const h = sx(x), a = sy(y0), b = sy(y1);
      out.push(`<path class="${cls}" d="M${h - 5} ${a}H${h + 5}M${h} ${a}V${b}M${h - 5} ${b}H${h + 5}"/>`);
      return c;
    },
    arrow(x0, y0, x1, y1, cls = "dg-arrow") {
      const ax = sx(x0), ay = sy(y0), bx = sx(x1), by = sy(y1);
      const ang = Math.atan2(by - ay, bx - ax);
      const h = (d) => `${r1(bx - 7 * Math.cos(ang + d))} ${r1(by - 7 * Math.sin(ang + d))}`;
      out.push(`<path class="${cls}" d="M${ax} ${ay}L${bx} ${by}"/>`);
      out.push(`<path class="${cls}-head" d="M${h(0.45)}L${bx} ${by}L${h(-0.45)}Z"/>`);
      return c;
    },
    // a swatch key for shaded areas, one row per entry
    key(x, y, rows) {
      rows.forEach(([cls, s], i) => {
        const ty = sy(y) + i * 15;
        out.push(`<rect class="${cls}" x="${sx(x)}" y="${ty - 8}" width="10" height="10"/>`);
        out.push(`<text class="dg-text dg-small" x="${sx(x) + 15}" y="${ty + 1}">${esc(s)}</text>`);
      });
      return c;
    },
    raw(s) {
      out.push(s);
      return c;
    },
    svg(alt) {
      return (
        `<svg class="dg" viewBox="0 0 ${VB_W} ${VB_H}" role="img" aria-label="${esc(alt)}" focusable="false">` +
        out.join("") +
        `</svg>`
      );
    },
  };
  return c;
}

// --- Shared shapes ---------------------------------------------------------

const DEMAND = lin(0.8, 9.2, 8.8, 1.2); // y = 10 - x
const SUPPLY = lin(0.8, 0.8, 8.8, 8.8); // y = x

// A supply curve moving left. Used for any sudden loss of supply.
function supplyShift({ xLabel, yLabel, s, s2, d, p, q }) {
  const S2 = lin(0.8, 3.8, 5.8, 8.8); // y = x + 3
  const [q1, p1] = meet(S2, DEMAND);
  return canvas()
    .axes(xLabel, yLabel)
    .line(SUPPLY)
    .line(S2, "dg-accent")
    .line(DEMAND)
    .arrow(7.4, 7.4, 4.9, 7.4)
    .hguide(5, 5, `${p}_0`)
    .hguide(q1, p1, `${p}_1`)
    .vguide(5, 5, `${q}_0`)
    .vguide(q1, p1, `${q}_1`)
    .dot(5, 5)
    .dot(q1, p1)
    .text(8.8, 8.8, s, { dx: 5, dy: 4 })
    .text(5.8, 8.8, s2, { anchor: "end", dx: -6, dy: -4 })
    .text(8.8, 1.2, d, { dx: 5, dy: 4 });
}

// A wedge between what buyers pay and what sellers keep (a tax or a cost of
// dealing), on any pair of straight curves.
function wedge(S, D, gap) {
  const lifted = lin(S.x0, S.y0 + gap, S.x1, S.y1 + gap);
  const [q1, pb] = meet(lifted, D);
  return { lifted, q1, pb, ps: pb - gap };
}

// External costs or benefits: the private curve and the social one differ.
function externality({ xLabel, yLabel, cost, privateB, socialB, privateLabel, socialLabel, costLabel, keyLabel, keyAt = [5.0, 9.9], under }) {
  const [qm, pm] = meet(cost, privateB);
  const [qs, ps] = meet(cost, socialB);
  // the triangle between the social benefit and the cost, from the market amount to the right one
  const tri = under
    ? [[qm, cost.y(qm)], [qm, socialB.y(qm)], [qs, ps]]
    : [[qs, ps], [qm, socialB.y(qm)], [qm, pm]];
  return canvas()
    .axes(xLabel, yLabel)
    .area(tri, "dg-loss")
    .line(cost)
    .line(privateB)
    .line(socialB, "dg-accent")
    .vguide(qm, pm, "Q_m")
    .vguide(qs, ps, "Q*")
    .dot(qm, pm)
    .dot(qs, ps)
    .text(cost.x1, cost.y1, costLabel, { dx: 5, dy: 4 })
    .text(privateLabel[0], privateLabel[1], privateLabel[2], privateLabel[3] || {})
    .text(socialLabel[0], socialLabel[1], socialLabel[2], socialLabel[3] || {})
    .key(keyAt[0], keyAt[1], [["dg-loss", keyLabel]]);
}

// A two-by-two table drawn in viewBox units.
function matrix({ rowHead, colHead, rows, cols, cells, mark = {}, note }) {
  const x0 = 118, y0 = 54, cw = 92, ch = 56;
  const parts = [];
  parts.push(`<text class="dg-axis-label" x="${x0 + cw}" y="${y0 - 28}" text-anchor="middle">${esc(colHead)}</text>`);
  cols.forEach((s, i) => parts.push(`<text class="dg-text dg-small" x="${x0 + cw / 2 + i * cw}" y="${y0 - 8}" text-anchor="middle">${esc(s)}</text>`));
  parts.push(`<text class="dg-axis-label" x="${x0 - 8}" y="${y0 - 28}" text-anchor="end">${esc(rowHead)}</text>`);
  rows.forEach((s, j) => parts.push(`<text class="dg-text dg-small" x="${x0 - 8}" y="${y0 + ch / 2 + j * ch + 4}" text-anchor="end">${esc(s)}</text>`));
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      const k = `${j}${i}`;
      const x = x0 + i * cw, y = y0 + j * ch;
      const m = mark[k];
      parts.push(`<rect class="dg-cell${m ? " " + m.cls : ""}" x="${x}" y="${y}" width="${cw}" height="${ch}"/>`);
      const [main, sub] = cells[j][i];
      parts.push(`<text class="dg-text dg-strong" x="${x + cw / 2}" y="${y + ch / 2 + (sub ? -2 : 5)}" text-anchor="middle">${esc(main)}</text>`);
      if (sub) parts.push(`<text class="dg-text dg-small dg-dim" x="${x + cw / 2}" y="${y + ch / 2 + 14}" text-anchor="middle">${esc(sub)}</text>`);
      if (m && m.tag) parts.push(`<text class="dg-tag" x="${x + 6}" y="${y + 12}">${esc(m.tag)}</text>`);
    }
  }
  if (note) parts.push(`<text class="dg-text dg-small dg-dim" x="${x0 + cw}" y="${y0 + 2 * ch + 22}" text-anchor="middle">${esc(note)}</text>`);
  return canvas().raw(parts.join(""));
}

// A two-stage game tree: the first mover commits or not, then the second mover
// keeps faith or squeezes. Payoffs are (first, second).
function tree({ first, second, enter, out, keep, squeeze, struck }) {
  const P = (x, y) => [x, y];
  const root = P(64, 112), mid = P(164, 70), stay = P(164, 168), good = P(270, 34), bad = P(270, 112);
  const seg = ([ax, ay], [bx, by], cls) => `<path class="${cls}" d="M${ax} ${ay}L${bx} ${by}"/>`;
  const node = ([x, y]) => `<circle class="dg-node" cx="${x}" cy="${y}" r="4.5"/>`;
  const leaf = ([x, y]) => `<circle class="dg-leaf" cx="${x}" cy="${y}" r="3"/>`;
  const t = (x, y, s, cls = "dg-text dg-small", anchor = "start") =>
    `<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}">${esc(s)}</text>`;
  const bold = "dg-curve dg-chosen";
  const thin = "dg-branch";
  const parts = [
    seg(root, mid, struck ? bold : thin),
    seg(root, stay, struck ? thin : bold),
    seg(mid, good, struck ? bold : thin),
    seg(mid, bad, struck ? "dg-branch dg-struck" : bold),
    node(root), node(mid), leaf(stay), leaf(good), leaf(bad),
    t(root[0] - 9, root[1] + 4, first, "dg-axis-label", "end"),
    t(mid[0] - 7, mid[1] - 10, second, "dg-axis-label", "end"),
    t(110, 86, enter, "dg-text dg-small", "end"),
    t(110, 156, out, "dg-text dg-small", "end"),
    t(214, 44, keep, "dg-text dg-small", "end"),
    t(struck ? 200 : 214, struck ? 110 : 106, squeeze, "dg-text dg-small", "end"),
    t(good[0] + 9, good[1] + 4, "2, 2", struck ? "dg-text dg-strong" : "dg-text"),
    t(bad[0] + 9, bad[1] + 4, "−1, 3", struck ? "dg-text dg-dim" : "dg-text"),
    t(stay[0] + 9, stay[1] + 4, "0, 0", struck ? "dg-text" : "dg-text dg-strong"),
    t(VB_W / 2, 208, `Payoffs: ${first.toLowerCase()}, ${second.toLowerCase()}`, "dg-text dg-small dg-dim", "middle"),
  ];
  if (struck) {
    const mx = (mid[0] + bad[0]) / 2, my = (mid[1] + bad[1]) / 2;
    parts.push(`<path class="dg-strike" d="M${mx - 8} ${my - 8}L${mx + 8} ${my + 8}M${mx + 8} ${my - 8}L${mx - 8} ${my + 8}"/>`);
    parts.push(t(mx, my + 37, struck, "dg-tag", "middle"));
  }
  return canvas().raw(parts.join(""));
}

// --- The diagrams -----------------------------------------------------------

const DIAGRAMS = {
  "Price ceilings": () => {
    const cap = 3;
    const qs = SUPPLY.x(cap), qd = DEMAND.x(cap);
    return {
      svg: canvas()
        .axes("Loaves", "Price")
        .line(SUPPLY)
        .line(DEMAND)
        .path([[0, cap], [9.7, cap]], "dg-policy")
        .span(qs, qd, cap, "dg-span dg-span-loss")
        .text((qs + qd) / 2, cap, "Shortage", { anchor: "middle", dy: 17 })
        .hguide(5, 5, "P*")
        .vguide(qs, cap, "Q_s")
        .vguide(qd, cap, "Q_d")
        .dot(5, 5)
        .text(9.7, cap, "Price cap", { anchor: "end", dy: -6 })
        .text(8.8, 8.8, "Supply", { dx: 5, dy: 4 })
        .text(8.8, 1.2, "Demand", { dx: 5, dy: 4 })
        .svg("Supply and demand for loaves. A price cap is drawn below the point where the curves cross. At the cap, bakers supply Qs and buyers want Qd, a larger amount; the gap is marked as the shortage."),
      caption: "Cap the price below where supply meets demand and the bakers offer fewer loaves (Q_s) while buyers want more (Q_d). The gap between the two is the shortage, and it shows up as queues and empty shelves.",
    };
  },

  "Tax incidence": () => {
    const D = lin(1.0, 9.6, 5.89, 0.8); // steep: salt has few substitutes
    const S = lin(0.6, 1.6, 8.0, 6.04); // flatter
    const [q0, p0] = meet(S, D);
    const { lifted, q1, pb, ps } = wedge(S, D, 3.6);
    return {
      svg: canvas()
        .axes("Salt", "Price")
        .rect(0, p0, q1, pb, "dg-loss")
        .rect(0, ps, q1, p0, "dg-zone")
        .line(S)
        .line(lifted, "dg-accent")
        .line(D)
        .hguide(q1, pb, "P_b")
        .hguide(q0, p0, "P_0")
        .hguide(q1, ps, "P_s")
        .dot(q0, p0)
        .dot(q1, pb)
        .text(8.0, 6.04, "Supply", { dx: 5, dy: 4 })
        .text(8.0, 9.64, "Supply + tax", { dx: -2, dy: -8, anchor: "end" })
        .text(5.89, 0.8, "Demand", { dx: 5, dy: 4 })
        .key(6.3, 3.6, [["dg-loss", "Paid by buyers"], ["dg-zone", "Paid by sellers"]])
        .svg("Supply and demand for salt, with steep demand and flatter supply. A tax lifts the supply curve. Buyers' price rises from P0 to Pb, a large step; sellers' price falls from P0 to Ps, a small one. The buyers' share is the larger shaded band."),
      caption: "The tax opens a gap between what buyers pay (P_b) and what sellers keep (P_s). Demand for salt is steep because nobody can do without it, so buyers carry most of the tax, whoever hands it to your collectors.",
    };
  },

  "Transaction costs": () => {
    const { lifted, q1, pb, ps } = wedge(SUPPLY, DEMAND, 2.6);
    return {
      svg: canvas()
        .axes("Bargains struck", "Price")
        .area([[q1, pb], [q1, ps], [5, 5]], "dg-loss")
        .line(SUPPLY)
        .line(DEMAND)
        .vspan(q1, ps, pb, "dg-span dg-span-accent")
        .text(q1, (pb + ps) / 2, "Cost of the deal", { anchor: "end", dx: -8, dy: 4 })
        .hguide(q1, pb, "P_b")
        .hguide(q1, ps, "P_s")
        .vguide(q1, ps, "Q_1")
        .vguide(5, 5, "Q*")
        .dot(5, 5)
        .text(8.8, 8.8, "Supply", { dx: 5, dy: 4 })
        .text(8.8, 1.2, "Demand", { dx: 5, dy: 4 })
        .key(5.6, 9.9, [["dg-loss", "Bargains never struck"]])
        .svg("Supply and demand with a gap between the price buyers pay, Pb, and the price sellers keep, Ps. The gap is the cost of making the deal. Trade falls from Q* to Q1, and the lost trades form a shaded triangle."),
      caption: "Searching, haggling and enforcing a bargain open a gap between what the buyer pays (P_b) and what the seller keeps (P_s). Trades worth less than that gap never happen, so trade stops at Q_1 instead of Q*. A common law shrinks the gap.",
    };
  },

  "Price elasticity": () => {
    const bread = lin(3.35, 9.4, 6.25, 0.7); // through (5, 4.45), steep
    const silk = lin(0.3, 6.6, 9.9, 2.28); // through (5, 4.49), flat
    const p0 = 4.47, p1 = 6.0;
    const qb = bread.x(p1), qs = silk.x(p1), q0b = bread.x(p0), q0s = silk.x(p0);
    return {
      svg: canvas()
        .axes("Amount bought", "Price")
        .line(silk)
        .line(bread, "dg-accent")
        .path([[0, p1], [Math.max(qb, qs) + 0.2, p1]], "dg-guide")
        .ytick(p1, "P_1")
        .hguide(Math.min(q0b, q0s), p0, "P_0")
        .dot((q0b + q0s) / 2, p0)
        .dot(qb, p1)
        .dot(qs, p1)
        .path([[qs, p1], [qs, 2.0]], "dg-guide")
        .path([[qb, p1], [qb, 0.8]], "dg-guide")
        .span(qs, 5, 2.0, "dg-span")
        .span(qb, 5, 0.8, "dg-span dg-span-accent")
        .text(3.0, 2.0, "Silk: big fall", { anchor: "middle", dy: -8 })
        .text(qb, 0.8, "Bread: small fall", { anchor: "end", dx: -7, dy: 4 })
        .text(3.35, 9.4, "Bread (inelastic)", { dx: 6, dy: 4 })
        .text(9.9, 2.28, "Silk (elastic)", { anchor: "end", dy: 17 })
        .svg("Two demand curves through the same point: a steep one for bread and a flat one for silk. The same price rise from P0 to P1 cuts bread purchases a little and silk purchases a lot."),
      caption: "Raise both prices by the same amount, from P_0 to P_1. People keep buying bread because they must eat, so sales barely move; silk buyers can go without or buy elsewhere, so sales collapse. A tax raises more where demand is inelastic.",
    };
  },

  "Supply shocks": () => ({
    svg: supplyShift({ xLabel: "Naphtha", yLabel: "Price", s: "Supply", s2: "After the seeps fail", d: "Demand", p: "P", q: "Q" })
      .svg("Supply and demand for naphtha. The supply curve shifts left. The price rises from P0 to P1 and the quantity sold falls from Q0 to Q1."),
    caption: "With the seeps running dry, sellers bring less naphtha to market at every price, so the supply curve moves left. Buyers bid against each other for what is left: the price rises from P_0 to P_1 and less is sold.",
  }),

  "Labour supply shock": () => ({
    svg: supplyShift({ xLabel: "Workers", yLabel: "Wage", s: "Supply", s2: "After the plague", d: "Demand", p: "W", q: "L" })
      .svg("The market for farm labour. The plague shifts the labour supply curve left. The wage rises from W0 to W1 and the number of workers falls from L0 to L1."),
    caption: "The plague takes workers, so the labour supply curve moves left. Landowners now compete for the hands that remain, and the wage rises from W_0 to W_1. At the old penny, landowners would want more hands than they could find.",
  }),

  "Wage rigidity": () => {
    const D2 = lin(0.4, 6.6, 6.6, 0.4); // y = 7 - x
    const w0 = 5;
    const ld = D2.x(w0);
    return {
      svg: canvas()
        .axes("Soldiers", "Pay")
        .line(SUPPLY)
        .line(lin(0.8, 9.2, 8.3, 1.7))
        .line(D2, "dg-accent")
        .arrow(6.9, 3.1, 4.3, 3.1)
        .path([[0, w0], [9.7, w0]], "dg-policy")
        .ytick(w0, "W_0")
        .span(ld, 5, w0, "dg-span dg-span-loss")
        .text(2.75, w0, "Not hired", { anchor: "middle", dy: -9, cls: "dg-text dg-small" })
        .vguide(ld, w0, "L_d")
        .vguide(5, w0, "L_s")
        .dot(ld, w0)
        .dot(5, w0)
        .text(9.7, w0, "Pay stays here", { anchor: "end", dy: -6 })
        .text(8.8, 8.8, "Supply", { dx: 5, dy: 4 })
        .text(8.3, 1.7, "Demand", { dx: 5, dy: 4 })
        .text(6.6, 0.4, "Lower demand", { dx: 5, dy: 4 })
        .svg("A labour market. Demand for labour falls, but the wage stays at W0. At that wage employers want Ld workers while Ls want work; the gap is marked as those not hired."),
      caption: "When the money to pay soldiers falls, demand for them falls with it, but the pay rate does not. At W_0 the treasury can afford only L_d of the L_s men who want the work, and the rest go unhired until pay comes down.",
    };
  },

  "Domestic price vs export": () => {
    const pw = 7;
    const qd = DEMAND.x(pw), qs = SUPPLY.x(pw);
    return {
      svg: canvas()
        .axes("Jars of naphtha", "Price")
        .line(SUPPLY)
        .line(DEMAND)
        .path([[0, pw], [9.7, pw]], "dg-policy")
        .span(qd, qs, pw, "dg-span dg-span-accent")
        .text((qd + qs) / 2, pw, "Exported", { anchor: "middle", dy: -9 })
        .text(0.2, pw, "World price", { dy: 15 })
        .hguide(5, 5, "P*")
        .ytick(pw, "P_w")
        .vguide(qd, pw, "Q_d")
        .vguide(qs, pw, "Q_s")
        .dot(5, 5)
        .dot(qd, pw)
        .dot(qs, pw)
        .text(8.8, 8.8, "Supply", { dx: 5, dy: 4 })
        .text(8.8, 1.2, "Demand", { dx: 5, dy: 4 })
        .svg("Supply and local demand for naphtha. Without trade the price is P*. Once jars can be sold abroad at the higher world price Pw, producers supply Qs, local buyers take only Qd, and the gap between them is exported."),
      caption: "Once the jars can sell abroad at the world price (P_w), the local price climbs to match it. The wells pump more (Q_s), the lamps of Baku use less (Q_d), and the gap between the two leaves on the galleys.",
    };
  },

  "Crowding out": () => {
    const D = lin(0.8, 9.2, 8.0, 2.0);
    const DG = lin(3.4, 9.6, 9.6, 3.4); // y = 13 - x
    const [q1, r] = meet(DG, SUPPLY);
    const qp = D.x(r);
    return {
      svg: canvas()
        .axes("Loans", "Interest rate")
        .line(SUPPLY)
        .line(D)
        .line(DG, "dg-accent")
        .arrow(6.2, 3.8, 8.9, 3.8)
        .hguide(q1, r, "r_1")
        .hguide(5, 5, "r_0")
        .vguide(qp, r, "Q_p")
        .vguide(5, 5, "Q_0")
        .span(qp, 5, 0.75, "dg-span dg-span-loss")
        .text(5, 0.75, "Crowded out", { dx: 8, dy: 4 })
        .dot(5, 5)
        .dot(q1, r)
        .dot(qp, r)
        .text(8.8, 8.8, "Savings", { dx: 5, dy: 4 })
        .text(8.0, 2.0, "Private", { dx: 5, dy: 4 })
        .text(3.4, 9.6, "Private + state", { dx: 6, dy: 4 })
        .svg("The market for loans. Savings slope up; private demand for loans slopes down. State borrowing shifts total demand right, so the interest rate rises from r0 to r1, and private borrowing falls from Q0 to Qp."),
      caption: "The state and private borrowers draw on the same merchants' savings. When the state borrows, demand for loans moves right and the interest rate rises from r_0 to r_1. At that rate private borrowers take only Q_p instead of Q_0.",
    };
  },

  "Negative externalities": () => {
    const cost = lin(0.8, 0.8, 7.6, 7.6);
    const social = lin(0.8, 3.8, 6.0, 9.0);
    const qm = 5, qs = meet(social, DEMAND)[0];
    return {
      svg: canvas()
        .axes("Hides tanned", "Cost and value")
        .area([[qs, DEMAND.y(qs)], [qm, social.y(qm)], [qm, qm]], "dg-loss")
        .line(cost)
        .line(social, "dg-accent")
        .line(DEMAND)
        .vguide(qs, DEMAND.y(qs), "Q*")
        .vguide(qm, qm, "Q_m")
        .dot(qs, DEMAND.y(qs))
        .dot(qm, qm)
        .text(7.6, 7.6, "Tanners' cost", { dx: 5, dy: 4 })
        .text(6.0, 9.0, "Cost to the city", { dx: 6, dy: 4 })
        .text(8.8, 1.2, "Demand", { dx: 5, dy: 4 })
        .key(2.2, 9.9, [["dg-loss", "Harm nobody pays for"]])
        .svg("A market for tanned hides. The tanners' own cost curve lies below the full cost to the city, which includes the fouled canal. The market tans Qm hides; the right amount is the smaller Q*. The extra harm is a shaded triangle."),
      caption: "The tanners pay only their own costs, so they work up to Q_m. Count the fouled canal and the dead fish and the right amount is Q*. The shaded triangle is the harm from every hide tanned past that point.",
    };
  },

  "Merit goods": () => {
    const cost = lin(0.8, 0.8, 8.8, 8.8);
    return {
      svg: externality({
        xLabel: "Pupils taught",
        yLabel: "Cost and value",
        cost,
        privateB: lin(0.6, 7.4, 7.4, 0.6),
        socialB: lin(1.4, 9.6, 9.6, 1.4),
        under: true,
        costLabel: "Cost",
        privateLabel: [7.4, 0.6, "To the family", { dx: 5, dy: 4 }],
        socialLabel: [1.4, 9.6, "To the realm", { dx: 2, dy: -7 }],
        keyLabel: "Value lost",
      }).svg("Schooling. Families pay for it up to Qm, where their own benefit meets the cost. Its value to the realm is higher, so the right amount is the larger Q*. The lost value is a shaded triangle."),
      caption: "A baker's family pays for schooling only as far as it helps the family, so too few boys are taught (Q_m). An educated city gains more than the families do, and the shaded area is the value lost by stopping short of Q*.",
    };
  },

  "Demerit goods": () => ({
    svg: externality({
      xLabel: "Wine drunk",
      yLabel: "Cost and value",
      cost: lin(0.8, 0.8, 8.8, 8.8),
      privateB: lin(1.4, 9.6, 9.6, 1.4),
      socialB: lin(0.6, 7.4, 7.4, 0.6),
      under: false,
      costLabel: "Cost",
      privateLabel: [1.4, 9.6, "To the drinker", { dx: 2, dy: -7 }],
      socialLabel: [7.4, 0.6, "To the city", { dx: 5, dy: 4 }],
      keyLabel: "Harm from the excess",
    }).svg("Wine. Drinkers buy up to Qm, where its appeal to them meets the cost. Its value to the city, after brawls and lost work, is lower, so the right amount is the smaller Q*. The harm from the excess is a shaded triangle."),
    caption: "The drinker counts only the pleasure of the night. Its value to the city is lower once the brawls and the lost mornings are counted, so wine is drunk to Q_m instead of Q*, and the shaded area is the harm from the difference.",
  }),

  "Knowledge spillovers": () => ({
    svg: externality({
      xLabel: "Research done",
      yLabel: "Cost and return",
      cost: lin(0.8, 0.8, 8.8, 8.8),
      privateB: lin(0.6, 7.4, 7.4, 0.6),
      socialB: lin(1.4, 9.6, 9.6, 1.4),
      under: true,
      costLabel: "Cost",
      privateLabel: [7.4, 0.6, "To the scholar", { dx: 5, dy: 4 }],
      socialLabel: [1.4, 9.6, "To everyone", { dx: 2, dy: -7 }],
      keyLabel: "Return never earned",
    }).svg("Research. A private patron funds it up to Qm, where the return they keep meets the cost. Others gain from the knowledge too, so the right amount is the larger Q*. The unearned return is a shaded triangle."),
    caption: "A scholar or patron funds research only as far as the return they can keep (Q_m). Calendars, maps and methods spread to everyone else for free, so the realm would want Q*, and the shaded area is what is lost in between.",
  }),

  Monopoly: () => {
    const MR = lin(0, 10, 5, 0);
    const mc = 2, qm = 4, pm = DEMAND.y(qm), qc = DEMAND.x(mc);
    return {
      svg: canvas()
        .axes("Silk shipped", "Price")
        .rect(0, mc, qm, pm, "dg-gain")
        .area([[qm, pm], [qm, mc], [qc, mc]], "dg-loss")
        .line(lin(0, 10, 9.6, 0.4))
        .line(MR, "dg-accent")
        .path([[0, mc], [9.7, mc]], "dg-policy")
        .hguide(qm, pm, "P_m")
        .ytick(mc, "P_c")
        .vguide(qm, pm, "Q_m")
        .vguide(qc, mc, "Q_c")
        .dot(qm, pm)
        .dot(qm, mc)
        .dot(qc, mc)
        .text(1.0, 9.0, "Demand", { dx: 9, dy: -5 })
        .text(5.0, 0.9, "Marginal", { dx: 6, dy: -2 })
        .text(5.0, 0.9, "revenue", { dx: 6, dy: 10 })
        .text(9.9, mc, "Marginal", { anchor: "end", dy: -18 })
        .text(9.9, mc, "cost", { anchor: "end", dy: -6 })
        .key(5.4, 9.9, [["dg-gain", "Monopoly profit"], ["dg-loss", "Trade that never happens"]])
        .svg("A single seller facing a downward-sloping demand curve. It ships Qm, where marginal revenue meets marginal cost, and charges Pm. Competition would ship Qc at Pc. The seller's extra profit is a rectangle and the lost trade a triangle."),
      caption: "The sole shipper sends silk until one more bale would add less revenue than it costs (Q_m) and charges what demand will bear (P_m). Competing shippers would carry up to Q_c at P_c. The triangle is cargo that never sails.",
    };
  },

  "Barriers to entry": () => {
    const q1 = 3.5, p1 = DEMAND.y(q1);
    return {
      svg: canvas()
        .axes("Cloth woven", "Price")
        .rect(0, SUPPLY.y(q1), q1, p1, "dg-gain")
        .area([[q1, p1], [q1, SUPPLY.y(q1)], [5, 5]], "dg-loss")
        .line(SUPPLY)
        .line(DEMAND)
        .path([[q1, 0], [q1, 9.6]], "dg-policy")
        .hguide(q1, p1, "P_1")
        .hguide(5, 5, "P*")
        .vguide(5, 5, "Q*")
        .xtick(q1, "Q_1")
        .dot(q1, p1)
        .dot(5, 5)
        .text(q1, 9.6, "Looms licensed", { anchor: "end", dx: -6, dy: 4 })
        .text(8.8, 8.8, "Supply", { dx: 5, dy: 4 })
        .text(8.8, 1.2, "Demand", { dx: 5, dy: 4 })
        .key(4.2, 9.9, [["dg-gain", "Guild's extra profit"], ["dg-loss", "Cloth never woven"]])
        .svg("Supply and demand for cloth with a cap on licensed looms at Q1, below the market amount Q*. The price rises from P* to P1. The guild's extra profit is a shaded rectangle and the cloth never woven a triangle."),
      caption: "License fewer looms than the market would support and cloth becomes scarcer and dearer (P_1 instead of P*). The guild keeps the rectangle as profit; the triangle is cloth people would have paid for that is never woven.",
    };
  },

  "Price discrimination": () => {
    const y = (dinars) => dinars * 1.75;
    const qg = DEMAND.x(y(4)), qs = DEMAND.x(y(2));
    const D = lin(0, 10, 9.7, 0.3);
    return {
      svg: canvas()
        .axes("Loads through the gate", "Toll (dinars)")
        .rect(0, 0, qg, y(4), "dg-gain")
        .rect(qg, 0, qs, y(2), "dg-zone")
        .line(D)
        .ytick(y(4), "4")
        .ytick(y(2), "2")
        .dot(qg, y(4))
        .dot(qs, y(2))
        .text(qg / 2, y(2), "Genoese", { anchor: "middle" })
        .text((qg + qs) / 2, y(1), "Shirvanis", { anchor: "middle" })
        .text(0.4, 9.6, "Demand", { dx: 8, dy: -6 })
        .svg("Demand for passage through the gate. The Genoese, who value it most, pay a toll of 4 dinars; Shirvani merchants pay 2. The two shaded blocks are the toll collected from each group."),
      caption: "One toll for everyone either turns the Shirvani carts away or lets the Genoese pay less than they would. Charging each group close to what it will bear keeps both coming and fills the shaded blocks, more in total than any single toll.",
    };
  },

  "Laffer curve": () => {
    const f = (x) => {
      const t = x / 10;
      return 28.4 * t * Math.pow(1 - t, 0.75);
    };
    const peak = 10 / 1.75;
    return {
      svg: canvas()
        .axes("Toll rate", "Revenue")
        .plot(f, 0, 10, "dg-accent")
        .vguide(peak, f(peak), "t*")
        .dot(peak, f(peak))
        .xtick(0, "0%")
        .xtick(10, "100%")
        .text(peak, f(peak), "Most revenue", { anchor: "middle", dy: -11 })
        .text(2.1, 3.0, "Raising the toll", { cls: "dg-text dg-small dg-dim" })
        .text(2.1, 2.25, "brings in more", { cls: "dg-text dg-small dg-dim" })
        .text(6.3, 3.0, "Raising the toll", { cls: "dg-text dg-small dg-dim" })
        .text(6.3, 2.25, "brings in less", { cls: "dg-text dg-small dg-dim" })
        .svg("Revenue against the toll rate. Revenue is zero at 0% and at 100%, and rises to a single peak at t* in between."),
      caption: "At a toll of 0% you collect nothing, and at 100% the merchants sail to Derbent and you collect nothing again. Revenue peaks somewhere between, at t*; past that point a higher toll brings in less.",
    };
  },

  "Economies of scale": () => {
    const ac = (q) => 2.2 + 10 / (q + 0.6);
    const small = 1.8, big = 5.4;
    return {
      svg: canvas()
        .axes("Coins struck", "Cost per coin")
        .plot(ac, 0.9, 9.7)
        .hguide(small, ac(small))
        .hguide(big, ac(big))
        .vguide(small, ac(small), "q")
        .vguide(big, ac(big), "3q")
        .dot(small, ac(small))
        .dot(big, ac(big))
        .text(small, ac(small), "Each of three mints", { dx: 9, dy: -6 })
        .text(big, ac(big), "One mint, triple output", { dx: 7, dy: 20 })
        .svg("Average cost per coin falls as a mint strikes more coins. A small mint striking q coins has a high cost per coin; one mint striking 3q coins has a much lower one."),
      caption: "A mint carries heavy fixed costs, its building and its assayers among them. Striking three times the coin in one mint spreads those costs over more coins, so each one costs less to make.",
    };
  },

  "Opportunity cost": () => {
    const ppf = (x) => 9 * Math.sqrt(Math.max(0, 1 - (x / 9.2) ** 2));
    const ax = 2.5, bx = 6;
    return {
      svg: canvas()
        .axes("Grain", "Arms")
        .plot(ppf, 0, 9.2)
        .path([[ax, ppf(ax)], [bx, ppf(ax)], [bx, ppf(bx)]], "dg-guide")
        .span(ax, bx, ppf(ax) + 0.55, "dg-span")
        .text((ax + bx) / 2, ppf(ax) + 0.55, "More grain", { anchor: "middle", dy: -8 })
        .vspan(bx + 0.35, ppf(bx), ppf(ax), "dg-span dg-span-accent")
        .text(bx + 0.35, (ppf(ax) + ppf(bx)) / 2, "Arms given up", { dx: 9, dy: 4 })
        .dot(ax, ppf(ax))
        .dot(bx, ppf(bx))
        .text(ax, ppf(ax), "A", { anchor: "end", dx: -5, dy: -7, cls: "dg-text dg-strong" })
        .text(bx, ppf(bx), "B", { anchor: "end", dx: -8, dy: 12, cls: "dg-text dg-strong" })
        .text(1.0, 2.4, "Everything the realm can make", { cls: "dg-text dg-small dg-dim" })
        .svg("A production possibility curve between grain and arms. Moving along it from A to B gains grain and gives up arms; the arms given up are the opportunity cost."),
      caption: "The curve marks everything the realm can produce with the land and people it has. Moving from A to B buys more grain, and the arms you give up on the way are its opportunity cost. Silver paid as tribute has the same cost: whatever else it would have bought.",
    };
  },

  "Comparative advantage": () => {
    const you = lin(0, 5, 10, 0);
    const them = lin(0, 8.6, 4.3, 0);
    return {
      svg: canvas()
        .axes("Bales of silk", "Sacks of barley")
        .line(them)
        .line(you, "dg-accent")
        .text(6.6, you.y(6.6), "Shirvan", { dy: -22 })
        .text(6.6, you.y(6.6), "1 silk = ½ barley", { cls: "dg-text dg-small dg-dim", dy: -9 })
        .text(0.6, 8.6, "Grain lands", { dx: 4, dy: -3 })
        .text(0.6, 8.6, "1 silk = 2 barley", { cls: "dg-text dg-small dg-dim", dx: 4, dy: 10 })
        .svg("Two straight production lines. Shirvan can make up to 10 bales of silk or 5 sacks of barley; the grain lands up to 4.3 bales or 8.6 sacks. A bale of silk costs Shirvan half a sack of barley and costs the grain lands two."),
      caption: "Each line is everything one side can grow on its land. A bale of silk costs Shirvan half a sack of barley and costs the grain lands two, so each gains by growing what is cheap for it and trading for the rest.",
    };
  },

  "Quantity theory of money": () => {
    const p = (m) => 0.8 * m;
    return {
      svg: canvas()
        .axes("Silver in circulation", "Price level")
        .path([[0, 0], [9.8, p(9.8)]], "dg-accent")
        .hguide(4, p(4), "P")
        .hguide(8, p(8), "2P")
        .vguide(4, p(4), "M")
        .vguide(8, p(8), "2M")
        .dot(4, p(4))
        .dot(8, p(8))
        .text(0.5, 9.2, "MV = PY", { cls: "dg-text dg-strong dg-eq" })
        .svg("A straight line through the origin: with velocity and output held fixed, the price level is proportional to the money in circulation. Doubling money from M to 2M doubles prices from P to 2P."),
      caption: "In MV = PY, M is the money, V how often each coin changes hands, P the price level and Y the goods traded. Hold V and Y steady and doubling the silver in circulation doubles prices.",
    };
  },

  "Debasement & inflation": () => {
    const xs = [0.8, 3, 5.2, 7.4, 9.6];
    const silver = [100, 80, 60, 50, 40];
    const prices = silver.map((s) => (100 * 100) / s);
    const y = (v) => v / 26;
    const c = canvas().axes("Recoinages", "Index, start = 100").grid(y(100)).grid(y(200));
    c.ytick(y(100), "100").ytick(y(200), "200");
    ["Start", "1st", "2nd", "3rd", "4th"].forEach((s, i) => c.xtick(xs[i], s));
    c.path(xs.map((x, i) => [x, y(silver[i])]))
      .path(xs.map((x, i) => [x, y(prices[i])]), "dg-accent");
    xs.forEach((x, i) => c.dot(x, y(silver[i])).dot(x, y(prices[i])));
    c.text(9.2, y(250), "Prices", { anchor: "end", dy: 2 }).text(9.6, y(40), "Silver in each dinar", { anchor: "end", dy: 17 });
    return {
      svg: c.svg("An illustration with round numbers. Over four recoinages the silver in each dinar falls from 100 to 40 on an index, while prices rise from 100 to 250, so halving the silver doubles prices."),
      caption: "Round numbers, for illustration. Each recoinage puts less silver in the dinar. If traders price goods by the silver they receive, prices rise in step: when the silver is halved, prices double.",
    };
  },

  "Gresham's law": () => {
    const coin = (x, y, clipped) =>
      clipped
        ? `<path class="dg-coin" d="M${x - 16} ${y - 15}L${x + 9} ${y - 20}L${x + 21} ${y - 4}L${x + 18} ${y + 13}L${x + 2} ${y + 21}L${x - 17} ${y + 12}L${x - 21} ${y - 3}Z"/>`
        : `<circle class="dg-coin" cx="${x}" cy="${y}" r="22"/><circle class="dg-coin-ring" cx="${x}" cy="${y}" r="16"/>`;
    const box = (x, y, w, h, lines, cls) =>
      `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}"/>` +
      lines.map((s, i) => `<text class="dg-text dg-small" x="${x + w / 2}" y="${y + h / 2 + 4 + (i - (lines.length - 1) / 2) * 14}" text-anchor="middle">${esc(s)}</text>`).join("");
    const arrow = (x0, y0, x1, y1) =>
      `<path class="dg-arrow" d="M${x0} ${y0}L${x1} ${y1}"/><path class="dg-arrow-head" d="M${x1 - 7} ${y1 - 4}L${x1} ${y1}L${x1 - 7} ${y1 + 4}Z"/>`;
    return {
      svg: canvas()
        .raw(
          `<text class="dg-axis-label" x="62" y="22" text-anchor="middle">Both pass for one dinar</text>` +
            coin(62, 66, false) +
            `<text class="dg-text dg-small" x="62" y="106" text-anchor="middle">Full weight</text>` +
            coin(62, 150, true) +
            `<text class="dg-text dg-small" x="62" y="190" text-anchor="middle">Clipped</text>` +
            arrow(96, 66, 168, 66) +
            arrow(96, 150, 168, 150) +
            box(174, 40, 136, 52, ["Kept, melted down,", "or carried abroad"], "dg-cell") +
            box(174, 124, 136, 52, ["Spent in the market"], "dg-cell dg-cell-mark") +
            `<text class="dg-text dg-small dg-dim" x="242" y="198" text-anchor="middle">Only clipped coin circulates</text>`,
        )
        .svg("Two coins that pass for the same face value. The full-weight dinar is kept, melted down or carried abroad; the clipped dinar is spent. Only clipped coin is left in circulation."),
      caption: "While both coins pass for one dinar, anyone holding a full-weight coin does better to keep it or melt it, and spends the clipped one. Soon only clipped coin is left in the market.",
    };
  },

  "Game theory": () => ({
    svg: matrix({
      rowHead: "You",
      colHead: "The other king",
      rows: ["Cooperate", "Defect"],
      cols: ["Cooperate", "Defect"],
      cells: [
        [["3, 3"], ["0, 5"]],
        [["5, 0"], ["1, 1"]],
      ],
      mark: { "00": { cls: "dg-cell-good", tag: "Best for both" }, "11": { cls: "dg-cell-mark", tag: "Where it ends" } },
      note: "Payoffs: you, the other king",
    }).svg("A two-by-two payoff table. Both cooperating gives 3 each. Defecting against a cooperator gives 5 against 0. Both defecting gives 1 each, and that is where two self-interested players end up."),
    caption: "Whatever the other king does, you score more by defecting (5 beats 3, and 1 beats 0), and the same holds for him. So both defect and get 1 each, when both cooperating would have given 3.",
  }),

  "Coordination problem": () => ({
    svg: matrix({
      rowHead: "Your collectors",
      colHead: "The villages",
      rows: ["Old months", "Solar count"],
      cols: ["Old months", "Solar count"],
      cells: [
        [["2, 2"], ["0, 0"]],
        [["0, 0"], ["4, 4"]],
      ],
      mark: { "00": { cls: "dg-cell-mark", tag: "Stuck here" }, "11": { cls: "dg-cell-good", tag: "Better" } },
      note: "Payoffs: collectors, villages",
    }).svg("A two-by-two payoff table. Both on the old months gives 2 each; both on the solar count gives 4 each; mismatched calendars give 0. Both matched cells are stable, but the old one is worse."),
    caption: "Everyone does best by keeping the same calendar. All would gain if everyone moved to the solar count, but whoever moves alone ends up worse off, so the old months stay unless an order moves everyone at once.",
  }),

  "Collective action problem": () => ({
    svg: matrix({
      rowHead: "You",
      colHead: "The other nobles",
      rows: ["Hold back", "Grab"],
      cols: ["All hold back", "All grab"],
      cells: [
        [["10"], ["1"]],
        [["11"], ["2"]],
      ],
      mark: { "00": { cls: "dg-cell-good", tag: "Best for all" }, "11": { cls: "dg-cell-mark", tag: "Where it ends" } },
      note: "Your gain in each case",
    }).svg("A two-by-two table of your gain. If all other nobles hold back, you get 10 by holding back and 11 by grabbing. If all grab, you get 1 by holding back and 2 by grabbing. Every noble faces the same choice, so all grab and each gets 2."),
    caption: "Whatever the other nobles do, you gain a little more by grabbing (11 beats 10, and 2 beats 1). Every noble faces the same sums, so all of them grab and each ends with 2, when all holding back would have left each with 10.",
  }),

  "Public goods": () => ({
    svg: matrix({
      rowHead: "Can you charge?",
      colHead: "Does one use leave less?",
      rows: ["Yes", "No"],
      cols: ["Yes", "No"],
      cells: [
        [["Private good", "a bale of silk"], ["Club good", "a toll bridge"]],
        [["Common resource", "Caspian sturgeon"], ["Public good", "a road kept safe"]],
      ],
      mark: { "11": { cls: "dg-cell-mark" } },
    }).svg("A two-by-two table of goods by whether non-payers can be excluded and whether one person's use reduces another's. A road kept safe is non-excludable and non-rival: a public good."),
    caption: "A public good is open to everyone, and one caravan's use takes nothing from the next. Nobody can be charged for it, so no single merchant pays to provide it and the state usually has to.",
  }),

  "Tragedy of the commons": () => {
    const free = (x) => 100 / (1 + Math.exp((2 * x - 9) / 1.6));
    const y = (v) => v / 11;
    return {
      svg: canvas()
        .axes("Years", "Sturgeon in the sea")
        .path([[0, y(98)], [10, y(98)]])
        .plot((x) => y(free(x)), 0, 10, "dg-accent")
        .text(10, y(98), "Catch capped at what regrows", { anchor: "end", dy: -8 })
        .text(4.6, y(free(4.6)), "Every boat takes freely", { dx: 8, dy: 0 })
        .xtick(0, "0")
        .xtick(10, "20")
        .svg("An illustration of a fish stock over twenty years. With each boat taking freely, the stock holds for a few years and then collapses toward zero. With the catch capped at what regrows, it stays level."),
      caption: "Round numbers, for illustration. When each boat takes freely, every fisher gains from the extra catch while the loss is shared, so the catch outruns regrowth and the stock collapses. A cap at what regrows keeps it level.",
    };
  },

  "Optimal extraction": () => {
    const slow = (x) => 5.28 * Math.exp(-0.24 * x); // same total as the fast path
    return {
      svg: canvas()
        .axes("Years", "Jars a year")
        .area([[0, 0], [0, 8], [2.5, 8], [2.5, 0]], "dg-zone")
        .path([[0, 8], [2.5, 8], [2.5, 0]], "dg-accent")
        .plot(slow, 0, 10)
        .text(2.5, 8, "Every hand on the seeps", { dx: 8, dy: 4 })
        .text(5.2, slow(5.2), "Spread over the years", { dx: 4, dy: -10 })
        .xtick(0, "0")
        .xtick(2.5, "5")
        .xtick(10, "20")
        .svg("Two ways to extract the same finite stock. Pumping at full speed takes it all in five years and then nothing. The other path starts lower and declines slowly over twenty years. The areas under both are equal."),
      caption: "Both paths empty the same seeps. Pumping flat out sells everything in a few years at this season's price; the slower path keeps jars in the ground for later years, when what is left will be scarcer and dearer.",
    };
  },

  "Risk pooling": () => {
    const pdf = (x, m, s) => Math.exp(-0.5 * ((x - m) / s) ** 2) / (s * Math.sqrt(2 * Math.PI));
    const scale = 15.5;
    return {
      svg: canvas()
        .axes("A house's losses in a season", "Likelihood")
        .plot((x) => scale * pdf(x, 5, 2.1), 0, 10)
        .plot((x) => scale * pdf(x, 5, 0.7), 2, 8, "dg-accent", 80)
        .vguide(5, scale * pdf(5, 5, 0.7), "Average")
        .text(5.6, scale * pdf(5.6, 5, 0.7), "With a common purse", { dx: 8, dy: -2 })
        .text(8.0, scale * pdf(8.0, 5, 2.1), "Alone", { dx: 6, dy: -6 })
        .xtick(0.4, "Little")
        .xtick(9.6, "Ruin")
        .svg("Two bell curves with the same average loss. A merchant house alone faces a wide spread, from little to ruin. Sharing losses through a common purse narrows the spread around the average."),
      caption: "A house carrying its own risk might lose almost nothing in a season, or everything. Pooling losses across all the merchant houses leaves the average loss where it was but makes each house's share close to it, every season.",
    };
  },

  "Network effects": () => {
    const v = (n) => 0.9 + 0.85 * n;
    return {
      svg: canvas()
        .axes("Districts using one ratl", "Worth to each merchant")
        .path([[1, v(1)], [10, v(10)]], "dg-accent")
        .dot(1, v(1))
        .dot(10, v(10))
        .text(1, v(1), "Every district its own measure", { dx: 9, dy: 16 })
        .text(10, v(10), "One measure everywhere", { anchor: "end", dx: -10, dy: -10 })
        .xtick(1, "1")
        .xtick(10, "All")
        .svg("The worth of a weight standard to each merchant rises with the number of districts that use it."),
      caption: "A standard weight is worth more to each merchant for every district that adopts it, because more of their bargains then need only one weighing. The first districts to switch gain little until the others follow.",
    };
  },

  "Hold-up problem": () => ({
    svg: tree({
      first: "You",
      second: "Partner",
      enter: "Depend on them",
      out: "Keep options open",
      keep: "Keep the terms",
      squeeze: "Squeeze",
    }).svg("A game tree. You choose whether to depend on a partner. If you do, the partner chooses to keep the terms, giving 2 each, or squeeze, giving you minus 1 and them 3. Expecting the squeeze, you keep your options open and both get 0."),
    caption: "Before you commit, the partner promises fair terms. Once you depend on them, squeezing pays them 3 instead of 2. Anyone who sees that coming holds back, and both lose the gains from working together.",
  }),

  "Credible commitment": () => ({
    svg: tree({
      first: "Merchant",
      second: "You",
      enter: "Build looms",
      out: "Keep silver buried",
      keep: "Keep the tax",
      squeeze: "Raise it",
      struck: "Ruled out by oath",
    }).svg("A game tree. The merchant chooses whether to build looms; then you choose whether to keep the tax or raise it. Raising it is struck out by the oath, so the merchant builds and both get 2."),
    caption: "Without an oath, raising the tax once the looms are built pays you more, and the merchant knows it. Swearing removes that branch, so building becomes safe and both of you end with 2 instead of nothing.",
  }),

  "Emergency transfers": () => {
    const u = (w) => 9.6 * (1 - Math.exp(-w / 2.6));
    const a = 1, b = 7, gift = 2;
    return {
      svg: canvas()
        .axes("Bread a household has", "Wellbeing")
        .plot(u, 0, 10)
        .path([[a, u(a)], [a + gift, u(a)]], "dg-guide")
        .path([[b, u(b)], [b + gift, u(b)]], "dg-guide")
        .vspan(a + gift, u(a), u(a + gift), "dg-span dg-span-accent")
        .vspan(b + gift, u(b), u(b + gift), "dg-span dg-span-accent")
        .dot(a, u(a))
        .dot(a + gift, u(a + gift))
        .dot(b, u(b))
        .dot(b + gift, u(b + gift))
        .text(a + gift, (u(a) + u(a + gift)) / 2, "Large gain", { dx: 9, dy: 4 })
        .text(b + gift, u(b + gift), "Small gain", { anchor: "end", dx: -6, dy: 22 })
        .text(a, u(a), "Hungry", { dx: 4, dy: 16 })
        .text(b, u(b), "Fed", { anchor: "end", dx: -8, dy: -6 })
        .svg("Wellbeing rises with bread but flattens out. The same gift of bread raises a hungry household's wellbeing a lot and a fed household's very little."),
      caption: "The same loaves add far more to the wellbeing of a hungry household than to a fed one, because each extra loaf matters less the more you already have. Bread handed out in a famine does more good than its price suggests.",
    };
  },
};

// Returns { svg, caption } for a concept, or null when it has no diagram.
const cache = new Map();
export function conceptDiagram(name) {
  if (!DIAGRAMS[name]) return null;
  if (!cache.has(name)) cache.set(name, DIAGRAMS[name]());
  return cache.get(name);
}

export const diagramConcepts = Object.keys(DIAGRAMS);

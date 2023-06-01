import { s as Hs } from "./index-d475d2ea.js";
import { R as st, r as et } from "./index-0e95cdc0.js";
import { u as Gr, r as Qs } from "./react-18-ad1337c2.js";
import {
  u as Xs,
  _ as En,
  a as Js,
  i as wn,
  b as Ks,
  e as Ys,
  S as $s,
  c as Zs,
  d as be,
  g as ea,
  f as Wr,
  h as zr,
  j as $t,
  k as ta,
  l as ia,
  T as Hr,
  m as ra,
} from "./index-a517a563.js";
import { g as na, c as Rt } from "./_commonjsHelpers-725317a4.js";
import { d as sa } from "./index-356e4a49.js";
var { FRAMEWORK_OPTIONS: qi } = Hs,
  Nh = (e, i) => {
    let { id: r, component: s } = i;
    if (!s)
      throw new Error(
        `Unable to render story ${r} as the component annotation is missing from the default export`
      );
    return st.createElement(s, { ...e });
  },
  aa = class extends et.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidMount() {
      let { hasError: e } = this.state,
        { showMain: i } = this.props;
      e || i();
    }
    componentDidCatch(e) {
      let { showException: i } = this.props;
      i(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: i } = this.props;
      return e ? null : i;
    }
  },
  Qr = qi != null && qi.strictMode ? et.StrictMode : et.Fragment;
async function Lh(
  {
    storyContext: e,
    unboundStoryFn: i,
    showMain: r,
    showException: s,
    forceRemount: o,
  },
  l
) {
  let m = st.createElement(
      aa,
      { showMain: r, showException: s },
      st.createElement(i, { ...e })
    ),
    x = Qr ? st.createElement(Qr, null, m) : m;
  return o && Gr(l), await Qs(x, l), () => Gr(l);
}
var xi = {},
  oa = {
    get exports() {
      return xi;
    },
    set exports(e) {
      xi = e;
    },
  },
  ua = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ha = ua,
  la = ha;
function kn() {}
function An() {}
An.resetWarningCache = kn;
var ca = function () {
  function e(s, o, l, m, x, v) {
    if (v !== la) {
      var C = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((C.name = "Invariant Violation"), C);
    }
  }
  e.isRequired = e;
  function i() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: i,
    element: e,
    elementType: e,
    instanceOf: i,
    node: e,
    objectOf: i,
    oneOf: i,
    oneOfType: i,
    shape: i,
    exact: i,
    checkPropTypes: An,
    resetWarningCache: kn,
  };
  return (r.PropTypes = r), r;
};
oa.exports = ca();
var $i = {},
  pa = {
    get exports() {
      return $i;
    },
    set exports(e) {
      $i = e;
    },
  };
const fa = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];
(function (e) {
  e.exports = fa;
})(pa);
const da = na($i);
var In = {},
  Pn = {};
(function (e) {
  (function i(r) {
    var s, o, l, m, x, v;
    function C(y) {
      var u = {},
        w,
        V;
      for (w in y)
        y.hasOwnProperty(w) &&
          ((V = y[w]),
          typeof V == "object" && V !== null ? (u[w] = C(V)) : (u[w] = V));
      return u;
    }
    function _(y, u) {
      var w, V, H, W;
      for (V = y.length, H = 0; V; )
        (w = V >>> 1),
          (W = H + w),
          u(y[W]) ? (V = w) : ((H = W + 1), (V -= w + 1));
      return H;
    }
    (s = {
      AssignmentExpression: "AssignmentExpression",
      AssignmentPattern: "AssignmentPattern",
      ArrayExpression: "ArrayExpression",
      ArrayPattern: "ArrayPattern",
      ArrowFunctionExpression: "ArrowFunctionExpression",
      AwaitExpression: "AwaitExpression",
      BlockStatement: "BlockStatement",
      BinaryExpression: "BinaryExpression",
      BreakStatement: "BreakStatement",
      CallExpression: "CallExpression",
      CatchClause: "CatchClause",
      ChainExpression: "ChainExpression",
      ClassBody: "ClassBody",
      ClassDeclaration: "ClassDeclaration",
      ClassExpression: "ClassExpression",
      ComprehensionBlock: "ComprehensionBlock",
      ComprehensionExpression: "ComprehensionExpression",
      ConditionalExpression: "ConditionalExpression",
      ContinueStatement: "ContinueStatement",
      DebuggerStatement: "DebuggerStatement",
      DirectiveStatement: "DirectiveStatement",
      DoWhileStatement: "DoWhileStatement",
      EmptyStatement: "EmptyStatement",
      ExportAllDeclaration: "ExportAllDeclaration",
      ExportDefaultDeclaration: "ExportDefaultDeclaration",
      ExportNamedDeclaration: "ExportNamedDeclaration",
      ExportSpecifier: "ExportSpecifier",
      ExpressionStatement: "ExpressionStatement",
      ForStatement: "ForStatement",
      ForInStatement: "ForInStatement",
      ForOfStatement: "ForOfStatement",
      FunctionDeclaration: "FunctionDeclaration",
      FunctionExpression: "FunctionExpression",
      GeneratorExpression: "GeneratorExpression",
      Identifier: "Identifier",
      IfStatement: "IfStatement",
      ImportExpression: "ImportExpression",
      ImportDeclaration: "ImportDeclaration",
      ImportDefaultSpecifier: "ImportDefaultSpecifier",
      ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
      ImportSpecifier: "ImportSpecifier",
      Literal: "Literal",
      LabeledStatement: "LabeledStatement",
      LogicalExpression: "LogicalExpression",
      MemberExpression: "MemberExpression",
      MetaProperty: "MetaProperty",
      MethodDefinition: "MethodDefinition",
      ModuleSpecifier: "ModuleSpecifier",
      NewExpression: "NewExpression",
      ObjectExpression: "ObjectExpression",
      ObjectPattern: "ObjectPattern",
      PrivateIdentifier: "PrivateIdentifier",
      Program: "Program",
      Property: "Property",
      PropertyDefinition: "PropertyDefinition",
      RestElement: "RestElement",
      ReturnStatement: "ReturnStatement",
      SequenceExpression: "SequenceExpression",
      SpreadElement: "SpreadElement",
      Super: "Super",
      SwitchStatement: "SwitchStatement",
      SwitchCase: "SwitchCase",
      TaggedTemplateExpression: "TaggedTemplateExpression",
      TemplateElement: "TemplateElement",
      TemplateLiteral: "TemplateLiteral",
      ThisExpression: "ThisExpression",
      ThrowStatement: "ThrowStatement",
      TryStatement: "TryStatement",
      UnaryExpression: "UnaryExpression",
      UpdateExpression: "UpdateExpression",
      VariableDeclaration: "VariableDeclaration",
      VariableDeclarator: "VariableDeclarator",
      WhileStatement: "WhileStatement",
      WithStatement: "WithStatement",
      YieldExpression: "YieldExpression",
    }),
      (l = {
        AssignmentExpression: ["left", "right"],
        AssignmentPattern: ["left", "right"],
        ArrayExpression: ["elements"],
        ArrayPattern: ["elements"],
        ArrowFunctionExpression: ["params", "body"],
        AwaitExpression: ["argument"],
        BlockStatement: ["body"],
        BinaryExpression: ["left", "right"],
        BreakStatement: ["label"],
        CallExpression: ["callee", "arguments"],
        CatchClause: ["param", "body"],
        ChainExpression: ["expression"],
        ClassBody: ["body"],
        ClassDeclaration: ["id", "superClass", "body"],
        ClassExpression: ["id", "superClass", "body"],
        ComprehensionBlock: ["left", "right"],
        ComprehensionExpression: ["blocks", "filter", "body"],
        ConditionalExpression: ["test", "consequent", "alternate"],
        ContinueStatement: ["label"],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ["body", "test"],
        EmptyStatement: [],
        ExportAllDeclaration: ["source"],
        ExportDefaultDeclaration: ["declaration"],
        ExportNamedDeclaration: ["declaration", "specifiers", "source"],
        ExportSpecifier: ["exported", "local"],
        ExpressionStatement: ["expression"],
        ForStatement: ["init", "test", "update", "body"],
        ForInStatement: ["left", "right", "body"],
        ForOfStatement: ["left", "right", "body"],
        FunctionDeclaration: ["id", "params", "body"],
        FunctionExpression: ["id", "params", "body"],
        GeneratorExpression: ["blocks", "filter", "body"],
        Identifier: [],
        IfStatement: ["test", "consequent", "alternate"],
        ImportExpression: ["source"],
        ImportDeclaration: ["specifiers", "source"],
        ImportDefaultSpecifier: ["local"],
        ImportNamespaceSpecifier: ["local"],
        ImportSpecifier: ["imported", "local"],
        Literal: [],
        LabeledStatement: ["label", "body"],
        LogicalExpression: ["left", "right"],
        MemberExpression: ["object", "property"],
        MetaProperty: ["meta", "property"],
        MethodDefinition: ["key", "value"],
        ModuleSpecifier: [],
        NewExpression: ["callee", "arguments"],
        ObjectExpression: ["properties"],
        ObjectPattern: ["properties"],
        PrivateIdentifier: [],
        Program: ["body"],
        Property: ["key", "value"],
        PropertyDefinition: ["key", "value"],
        RestElement: ["argument"],
        ReturnStatement: ["argument"],
        SequenceExpression: ["expressions"],
        SpreadElement: ["argument"],
        Super: [],
        SwitchStatement: ["discriminant", "cases"],
        SwitchCase: ["test", "consequent"],
        TaggedTemplateExpression: ["tag", "quasi"],
        TemplateElement: [],
        TemplateLiteral: ["quasis", "expressions"],
        ThisExpression: [],
        ThrowStatement: ["argument"],
        TryStatement: ["block", "handler", "finalizer"],
        UnaryExpression: ["argument"],
        UpdateExpression: ["argument"],
        VariableDeclaration: ["declarations"],
        VariableDeclarator: ["id", "init"],
        WhileStatement: ["test", "body"],
        WithStatement: ["object", "body"],
        YieldExpression: ["argument"],
      }),
      (m = {}),
      (x = {}),
      (v = {}),
      (o = { Break: m, Skip: x, Remove: v });
    function A(y, u) {
      (this.parent = y), (this.key = u);
    }
    (A.prototype.replace = function (u) {
      this.parent[this.key] = u;
    }),
      (A.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function I(y, u, w, V) {
      (this.node = y), (this.path = u), (this.wrap = w), (this.ref = V);
    }
    function k() {}
    (k.prototype.path = function () {
      var u, w, V, H, W, ee;
      function J(X, he) {
        if (Array.isArray(he))
          for (V = 0, H = he.length; V < H; ++V) X.push(he[V]);
        else X.push(he);
      }
      if (!this.__current.path) return null;
      for (W = [], u = 2, w = this.__leavelist.length; u < w; ++u)
        (ee = this.__leavelist[u]), J(W, ee.path);
      return J(W, this.__current.path), W;
    }),
      (k.prototype.type = function () {
        var y = this.current();
        return y.type || this.__current.wrap;
      }),
      (k.prototype.parents = function () {
        var u, w, V;
        for (V = [], u = 1, w = this.__leavelist.length; u < w; ++u)
          V.push(this.__leavelist[u].node);
        return V;
      }),
      (k.prototype.current = function () {
        return this.__current.node;
      }),
      (k.prototype.__execute = function (u, w) {
        var V, H;
        return (
          (H = void 0),
          (V = this.__current),
          (this.__current = w),
          (this.__state = null),
          u &&
            (H = u.call(
              this,
              w.node,
              this.__leavelist[this.__leavelist.length - 1].node
            )),
          (this.__current = V),
          H
        );
      }),
      (k.prototype.notify = function (u) {
        this.__state = u;
      }),
      (k.prototype.skip = function () {
        this.notify(x);
      }),
      (k.prototype.break = function () {
        this.notify(m);
      }),
      (k.prototype.remove = function () {
        this.notify(v);
      }),
      (k.prototype.__initialize = function (y, u) {
        (this.visitor = u),
          (this.root = y),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          u.fallback === "iteration"
            ? (this.__fallback = Object.keys)
            : typeof u.fallback == "function" && (this.__fallback = u.fallback),
          (this.__keys = l),
          u.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), u.keys));
      });
    function P(y) {
      return y == null ? !1 : typeof y == "object" && typeof y.type == "string";
    }
    function E(y, u) {
      return (
        (y === s.ObjectExpression || y === s.ObjectPattern) &&
        u === "properties"
      );
    }
    function R(y, u) {
      for (var w = y.length - 1; w >= 0; --w) if (y[w].node === u) return !0;
      return !1;
    }
    (k.prototype.traverse = function (u, w) {
      var V, H, W, ee, J, X, he, Ce, Se, ye, te, Ae;
      for (
        this.__initialize(u, w),
          Ae = {},
          V = this.__worklist,
          H = this.__leavelist,
          V.push(new I(u, null, null, null)),
          H.push(new I(null, null, null, null));
        V.length;

      ) {
        if (((W = V.pop()), W === Ae)) {
          if (
            ((W = H.pop()),
            (X = this.__execute(w.leave, W)),
            this.__state === m || X === m)
          )
            return;
          continue;
        }
        if (W.node) {
          if (((X = this.__execute(w.enter, W)), this.__state === m || X === m))
            return;
          if ((V.push(Ae), H.push(W), this.__state === x || X === x)) continue;
          if (
            ((ee = W.node), (J = ee.type || W.wrap), (ye = this.__keys[J]), !ye)
          )
            if (this.__fallback) ye = this.__fallback(ee);
            else throw new Error("Unknown node type " + J + ".");
          for (Ce = ye.length; (Ce -= 1) >= 0; )
            if (((he = ye[Ce]), (te = ee[he]), !!te)) {
              if (Array.isArray(te)) {
                for (Se = te.length; (Se -= 1) >= 0; )
                  if (te[Se] && !R(H, te[Se])) {
                    if (E(J, ye[Ce]))
                      W = new I(te[Se], [he, Se], "Property", null);
                    else if (P(te[Se])) W = new I(te[Se], [he, Se], null, null);
                    else continue;
                    V.push(W);
                  }
              } else if (P(te)) {
                if (R(H, te)) continue;
                V.push(new I(te, he, null, null));
              }
            }
        }
      }
    }),
      (k.prototype.replace = function (u, w) {
        var V, H, W, ee, J, X, he, Ce, Se, ye, te, Ae, Ue;
        function z(Be) {
          var tt, Ye, fe, Fe;
          if (Be.ref.remove()) {
            for (Ye = Be.ref.key, Fe = Be.ref.parent, tt = V.length; tt--; )
              if (((fe = V[tt]), fe.ref && fe.ref.parent === Fe)) {
                if (fe.ref.key < Ye) break;
                --fe.ref.key;
              }
          }
        }
        for (
          this.__initialize(u, w),
            te = {},
            V = this.__worklist,
            H = this.__leavelist,
            Ae = { root: u },
            X = new I(u, null, null, new A(Ae, "root")),
            V.push(X),
            H.push(X);
          V.length;

        ) {
          if (((X = V.pop()), X === te)) {
            if (
              ((X = H.pop()),
              (J = this.__execute(w.leave, X)),
              J !== void 0 && J !== m && J !== x && J !== v && X.ref.replace(J),
              (this.__state === v || J === v) && z(X),
              this.__state === m || J === m)
            )
              return Ae.root;
            continue;
          }
          if (
            ((J = this.__execute(w.enter, X)),
            J !== void 0 &&
              J !== m &&
              J !== x &&
              J !== v &&
              (X.ref.replace(J), (X.node = J)),
            (this.__state === v || J === v) && (z(X), (X.node = null)),
            this.__state === m || J === m)
          )
            return Ae.root;
          if (
            ((W = X.node),
            !!W && (V.push(te), H.push(X), !(this.__state === x || J === x)))
          ) {
            if (((ee = W.type || X.wrap), (Se = this.__keys[ee]), !Se))
              if (this.__fallback) Se = this.__fallback(W);
              else throw new Error("Unknown node type " + ee + ".");
            for (he = Se.length; (he -= 1) >= 0; )
              if (((Ue = Se[he]), (ye = W[Ue]), !!ye))
                if (Array.isArray(ye)) {
                  for (Ce = ye.length; (Ce -= 1) >= 0; )
                    if (ye[Ce]) {
                      if (E(ee, Se[he]))
                        X = new I(ye[Ce], [Ue, Ce], "Property", new A(ye, Ce));
                      else if (P(ye[Ce]))
                        X = new I(ye[Ce], [Ue, Ce], null, new A(ye, Ce));
                      else continue;
                      V.push(X);
                    }
                } else P(ye) && V.push(new I(ye, Ue, null, new A(W, Ue)));
          }
        }
        return Ae.root;
      });
    function j(y, u) {
      var w = new k();
      return w.traverse(y, u);
    }
    function B(y, u) {
      var w = new k();
      return w.replace(y, u);
    }
    function G(y, u) {
      var w;
      return (
        (w = _(u, function (H) {
          return H.range[0] > y.range[0];
        })),
        (y.extendedRange = [y.range[0], y.range[1]]),
        w !== u.length && (y.extendedRange[1] = u[w].range[0]),
        (w -= 1),
        w >= 0 && (y.extendedRange[0] = u[w].range[1]),
        y
      );
    }
    function N(y, u, w) {
      var V = [],
        H,
        W,
        ee,
        J;
      if (!y.range) throw new Error("attachComments needs range information");
      if (!w.length) {
        if (u.length) {
          for (ee = 0, W = u.length; ee < W; ee += 1)
            (H = C(u[ee])), (H.extendedRange = [0, y.range[0]]), V.push(H);
          y.leadingComments = V;
        }
        return y;
      }
      for (ee = 0, W = u.length; ee < W; ee += 1) V.push(G(C(u[ee]), w));
      return (
        (J = 0),
        j(y, {
          enter: function (X) {
            for (
              var he;
              J < V.length &&
              ((he = V[J]), !(he.extendedRange[1] > X.range[0]));

            )
              he.extendedRange[1] === X.range[0]
                ? (X.leadingComments || (X.leadingComments = []),
                  X.leadingComments.push(he),
                  V.splice(J, 1))
                : (J += 1);
            if (J === V.length) return o.Break;
            if (V[J].extendedRange[0] > X.range[1]) return o.Skip;
          },
        }),
        (J = 0),
        j(y, {
          leave: function (X) {
            for (
              var he;
              J < V.length &&
              ((he = V[J]), !(X.range[1] < he.extendedRange[0]));

            )
              X.range[1] === he.extendedRange[0]
                ? (X.trailingComments || (X.trailingComments = []),
                  X.trailingComments.push(he),
                  V.splice(J, 1))
                : (J += 1);
            if (J === V.length) return o.Break;
            if (V[J].extendedRange[0] > X.range[1]) return o.Skip;
          },
        }),
        y
      );
    }
    return (
      (r.Syntax = s),
      (r.traverse = j),
      (r.replace = B),
      (r.attachComments = N),
      (r.VisitorKeys = l),
      (r.VisitorOption = o),
      (r.Controller = k),
      (r.cloneEnvironment = function () {
        return i({});
      }),
      r
    );
  })(e);
})(Pn);
var Ut = {},
  Ui = {},
  fi = {},
  di = {},
  Xr;
function ma() {
  if (Xr) return di;
  Xr = 1;
  var e =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
      ""
    );
  return (
    (di.encode = function (i) {
      if (0 <= i && i < e.length) return e[i];
      throw new TypeError("Must be between 0 and 63: " + i);
    }),
    (di.decode = function (i) {
      var r = 65,
        s = 90,
        o = 97,
        l = 122,
        m = 48,
        x = 57,
        v = 43,
        C = 47,
        _ = 26,
        A = 52;
      return r <= i && i <= s
        ? i - r
        : o <= i && i <= l
        ? i - o + _
        : m <= i && i <= x
        ? i - m + A
        : i == v
        ? 62
        : i == C
        ? 63
        : -1;
    }),
    di
  );
}
var Jr;
function Tn() {
  if (Jr) return fi;
  Jr = 1;
  var e = ma(),
    i = 5,
    r = 1 << i,
    s = r - 1,
    o = r;
  function l(x) {
    return x < 0 ? (-x << 1) + 1 : (x << 1) + 0;
  }
  function m(x) {
    var v = (x & 1) === 1,
      C = x >> 1;
    return v ? -C : C;
  }
  return (
    (fi.encode = function (v) {
      var C = "",
        _,
        A = l(v);
      do (_ = A & s), (A >>>= i), A > 0 && (_ |= o), (C += e.encode(_));
      while (A > 0);
      return C;
    }),
    (fi.decode = function (v, C, _) {
      var A = v.length,
        I = 0,
        k = 0,
        P,
        E;
      do {
        if (C >= A)
          throw new Error("Expected more digits in base 64 VLQ value.");
        if (((E = e.decode(v.charCodeAt(C++))), E === -1))
          throw new Error("Invalid base64 digit: " + v.charAt(C - 1));
        (P = !!(E & o)), (E &= s), (I = I + (E << k)), (k += i);
      } while (P);
      (_.value = m(I)), (_.rest = C);
    }),
    fi
  );
}
var Gi = {},
  Kr;
function Zt() {
  return (
    Kr ||
      ((Kr = 1),
      (function (e) {
        function i(N, y, u) {
          if (y in N) return N[y];
          if (arguments.length === 3) return u;
          throw new Error('"' + y + '" is a required argument.');
        }
        e.getArg = i;
        var r =
            /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
          s = /^data:.+\,.+$/;
        function o(N) {
          var y = N.match(r);
          return y
            ? { scheme: y[1], auth: y[2], host: y[3], port: y[4], path: y[5] }
            : null;
        }
        e.urlParse = o;
        function l(N) {
          var y = "";
          return (
            N.scheme && (y += N.scheme + ":"),
            (y += "//"),
            N.auth && (y += N.auth + "@"),
            N.host && (y += N.host),
            N.port && (y += ":" + N.port),
            N.path && (y += N.path),
            y
          );
        }
        e.urlGenerate = l;
        function m(N) {
          var y = N,
            u = o(N);
          if (u) {
            if (!u.path) return N;
            y = u.path;
          }
          for (
            var w = e.isAbsolute(y),
              V = y.split(/\/+/),
              H,
              W = 0,
              ee = V.length - 1;
            ee >= 0;
            ee--
          )
            (H = V[ee]),
              H === "."
                ? V.splice(ee, 1)
                : H === ".."
                ? W++
                : W > 0 &&
                  (H === ""
                    ? (V.splice(ee + 1, W), (W = 0))
                    : (V.splice(ee, 2), W--));
          return (
            (y = V.join("/")),
            y === "" && (y = w ? "/" : "."),
            u ? ((u.path = y), l(u)) : y
          );
        }
        e.normalize = m;
        function x(N, y) {
          N === "" && (N = "."), y === "" && (y = ".");
          var u = o(y),
            w = o(N);
          if ((w && (N = w.path || "/"), u && !u.scheme))
            return w && (u.scheme = w.scheme), l(u);
          if (u || y.match(s)) return y;
          if (w && !w.host && !w.path) return (w.host = y), l(w);
          var V = y.charAt(0) === "/" ? y : m(N.replace(/\/+$/, "") + "/" + y);
          return w ? ((w.path = V), l(w)) : V;
        }
        (e.join = x),
          (e.isAbsolute = function (N) {
            return N.charAt(0) === "/" || r.test(N);
          });
        function v(N, y) {
          N === "" && (N = "."), (N = N.replace(/\/$/, ""));
          for (var u = 0; y.indexOf(N + "/") !== 0; ) {
            var w = N.lastIndexOf("/");
            if (w < 0 || ((N = N.slice(0, w)), N.match(/^([^\/]+:\/)?\/*$/)))
              return y;
            ++u;
          }
          return Array(u + 1).join("../") + y.substr(N.length + 1);
        }
        e.relative = v;
        var C = (function () {
          var N = Object.create(null);
          return !("__proto__" in N);
        })();
        function _(N) {
          return N;
        }
        function A(N) {
          return k(N) ? "$" + N : N;
        }
        e.toSetString = C ? _ : A;
        function I(N) {
          return k(N) ? N.slice(1) : N;
        }
        e.fromSetString = C ? _ : I;
        function k(N) {
          if (!N) return !1;
          var y = N.length;
          if (
            y < 9 ||
            N.charCodeAt(y - 1) !== 95 ||
            N.charCodeAt(y - 2) !== 95 ||
            N.charCodeAt(y - 3) !== 111 ||
            N.charCodeAt(y - 4) !== 116 ||
            N.charCodeAt(y - 5) !== 111 ||
            N.charCodeAt(y - 6) !== 114 ||
            N.charCodeAt(y - 7) !== 112 ||
            N.charCodeAt(y - 8) !== 95 ||
            N.charCodeAt(y - 9) !== 95
          )
            return !1;
          for (var u = y - 10; u >= 0; u--)
            if (N.charCodeAt(u) !== 36) return !1;
          return !0;
        }
        function P(N, y, u) {
          var w = R(N.source, y.source);
          return w !== 0 ||
            ((w = N.originalLine - y.originalLine), w !== 0) ||
            ((w = N.originalColumn - y.originalColumn), w !== 0 || u) ||
            ((w = N.generatedColumn - y.generatedColumn), w !== 0) ||
            ((w = N.generatedLine - y.generatedLine), w !== 0)
            ? w
            : R(N.name, y.name);
        }
        e.compareByOriginalPositions = P;
        function E(N, y, u) {
          var w = N.generatedLine - y.generatedLine;
          return w !== 0 ||
            ((w = N.generatedColumn - y.generatedColumn), w !== 0 || u) ||
            ((w = R(N.source, y.source)), w !== 0) ||
            ((w = N.originalLine - y.originalLine), w !== 0) ||
            ((w = N.originalColumn - y.originalColumn), w !== 0)
            ? w
            : R(N.name, y.name);
        }
        e.compareByGeneratedPositionsDeflated = E;
        function R(N, y) {
          return N === y
            ? 0
            : N === null
            ? 1
            : y === null
            ? -1
            : N > y
            ? 1
            : -1;
        }
        function j(N, y) {
          var u = N.generatedLine - y.generatedLine;
          return u !== 0 ||
            ((u = N.generatedColumn - y.generatedColumn), u !== 0) ||
            ((u = R(N.source, y.source)), u !== 0) ||
            ((u = N.originalLine - y.originalLine), u !== 0) ||
            ((u = N.originalColumn - y.originalColumn), u !== 0)
            ? u
            : R(N.name, y.name);
        }
        e.compareByGeneratedPositionsInflated = j;
        function B(N) {
          return JSON.parse(N.replace(/^\)]}'[^\n]*\n/, ""));
        }
        e.parseSourceMapInput = B;
        function G(N, y, u) {
          if (
            ((y = y || ""),
            N &&
              (N[N.length - 1] !== "/" && y[0] !== "/" && (N += "/"),
              (y = N + y)),
            u)
          ) {
            var w = o(u);
            if (!w) throw new Error("sourceMapURL could not be parsed");
            if (w.path) {
              var V = w.path.lastIndexOf("/");
              V >= 0 && (w.path = w.path.substring(0, V + 1));
            }
            y = x(l(w), y);
          }
          return m(y);
        }
        e.computeSourceURL = G;
      })(Gi)),
    Gi
  );
}
var Wi = {},
  Yr;
function Nn() {
  if (Yr) return Wi;
  Yr = 1;
  var e = Zt(),
    i = Object.prototype.hasOwnProperty,
    r = typeof Map < "u";
  function s() {
    (this._array = []), (this._set = r ? new Map() : Object.create(null));
  }
  return (
    (s.fromArray = function (l, m) {
      for (var x = new s(), v = 0, C = l.length; v < C; v++) x.add(l[v], m);
      return x;
    }),
    (s.prototype.size = function () {
      return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }),
    (s.prototype.add = function (l, m) {
      var x = r ? l : e.toSetString(l),
        v = r ? this.has(l) : i.call(this._set, x),
        C = this._array.length;
      (!v || m) && this._array.push(l),
        v || (r ? this._set.set(l, C) : (this._set[x] = C));
    }),
    (s.prototype.has = function (l) {
      if (r) return this._set.has(l);
      var m = e.toSetString(l);
      return i.call(this._set, m);
    }),
    (s.prototype.indexOf = function (l) {
      if (r) {
        var m = this._set.get(l);
        if (m >= 0) return m;
      } else {
        var x = e.toSetString(l);
        if (i.call(this._set, x)) return this._set[x];
      }
      throw new Error('"' + l + '" is not in the set.');
    }),
    (s.prototype.at = function (l) {
      if (l >= 0 && l < this._array.length) return this._array[l];
      throw new Error("No element indexed by " + l);
    }),
    (s.prototype.toArray = function () {
      return this._array.slice();
    }),
    (Wi.ArraySet = s),
    Wi
  );
}
var zi = {},
  $r;
function ga() {
  if ($r) return zi;
  $r = 1;
  var e = Zt();
  function i(s, o) {
    var l = s.generatedLine,
      m = o.generatedLine,
      x = s.generatedColumn,
      v = o.generatedColumn;
    return (
      m > l ||
      (m == l && v >= x) ||
      e.compareByGeneratedPositionsInflated(s, o) <= 0
    );
  }
  function r() {
    (this._array = []),
      (this._sorted = !0),
      (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  return (
    (r.prototype.unsortedForEach = function (o, l) {
      this._array.forEach(o, l);
    }),
    (r.prototype.add = function (o) {
      i(this._last, o)
        ? ((this._last = o), this._array.push(o))
        : ((this._sorted = !1), this._array.push(o));
    }),
    (r.prototype.toArray = function () {
      return (
        this._sorted ||
          (this._array.sort(e.compareByGeneratedPositionsInflated),
          (this._sorted = !0)),
        this._array
      );
    }),
    (zi.MappingList = r),
    zi
  );
}
var Zr;
function Ln() {
  if (Zr) return Ui;
  Zr = 1;
  var e = Tn(),
    i = Zt(),
    r = Nn().ArraySet,
    s = ga().MappingList;
  function o(l) {
    l || (l = {}),
      (this._file = i.getArg(l, "file", null)),
      (this._sourceRoot = i.getArg(l, "sourceRoot", null)),
      (this._skipValidation = i.getArg(l, "skipValidation", !1)),
      (this._sources = new r()),
      (this._names = new r()),
      (this._mappings = new s()),
      (this._sourcesContents = null);
  }
  return (
    (o.prototype._version = 3),
    (o.fromSourceMap = function (m) {
      var x = m.sourceRoot,
        v = new o({ file: m.file, sourceRoot: x });
      return (
        m.eachMapping(function (C) {
          var _ = {
            generated: { line: C.generatedLine, column: C.generatedColumn },
          };
          C.source != null &&
            ((_.source = C.source),
            x != null && (_.source = i.relative(x, _.source)),
            (_.original = { line: C.originalLine, column: C.originalColumn }),
            C.name != null && (_.name = C.name)),
            v.addMapping(_);
        }),
        m.sources.forEach(function (C) {
          var _ = C;
          x !== null && (_ = i.relative(x, C)),
            v._sources.has(_) || v._sources.add(_);
          var A = m.sourceContentFor(C);
          A != null && v.setSourceContent(C, A);
        }),
        v
      );
    }),
    (o.prototype.addMapping = function (m) {
      var x = i.getArg(m, "generated"),
        v = i.getArg(m, "original", null),
        C = i.getArg(m, "source", null),
        _ = i.getArg(m, "name", null);
      this._skipValidation || this._validateMapping(x, v, C, _),
        C != null &&
          ((C = String(C)), this._sources.has(C) || this._sources.add(C)),
        _ != null &&
          ((_ = String(_)), this._names.has(_) || this._names.add(_)),
        this._mappings.add({
          generatedLine: x.line,
          generatedColumn: x.column,
          originalLine: v != null && v.line,
          originalColumn: v != null && v.column,
          source: C,
          name: _,
        });
    }),
    (o.prototype.setSourceContent = function (m, x) {
      var v = m;
      this._sourceRoot != null && (v = i.relative(this._sourceRoot, v)),
        x != null
          ? (this._sourcesContents ||
              (this._sourcesContents = Object.create(null)),
            (this._sourcesContents[i.toSetString(v)] = x))
          : this._sourcesContents &&
            (delete this._sourcesContents[i.toSetString(v)],
            Object.keys(this._sourcesContents).length === 0 &&
              (this._sourcesContents = null));
    }),
    (o.prototype.applySourceMap = function (m, x, v) {
      var C = x;
      if (x == null) {
        if (m.file == null)
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        C = m.file;
      }
      var _ = this._sourceRoot;
      _ != null && (C = i.relative(_, C));
      var A = new r(),
        I = new r();
      this._mappings.unsortedForEach(function (k) {
        if (k.source === C && k.originalLine != null) {
          var P = m.originalPositionFor({
            line: k.originalLine,
            column: k.originalColumn,
          });
          P.source != null &&
            ((k.source = P.source),
            v != null && (k.source = i.join(v, k.source)),
            _ != null && (k.source = i.relative(_, k.source)),
            (k.originalLine = P.line),
            (k.originalColumn = P.column),
            P.name != null && (k.name = P.name));
        }
        var E = k.source;
        E != null && !A.has(E) && A.add(E);
        var R = k.name;
        R != null && !I.has(R) && I.add(R);
      }, this),
        (this._sources = A),
        (this._names = I),
        m.sources.forEach(function (k) {
          var P = m.sourceContentFor(k);
          P != null &&
            (v != null && (k = i.join(v, k)),
            _ != null && (k = i.relative(_, k)),
            this.setSourceContent(k, P));
        }, this);
    }),
    (o.prototype._validateMapping = function (m, x, v, C) {
      if (x && typeof x.line != "number" && typeof x.column != "number")
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      if (
        !(
          m &&
          "line" in m &&
          "column" in m &&
          m.line > 0 &&
          m.column >= 0 &&
          !x &&
          !v &&
          !C
        )
      ) {
        if (
          m &&
          "line" in m &&
          "column" in m &&
          x &&
          "line" in x &&
          "column" in x &&
          m.line > 0 &&
          m.column >= 0 &&
          x.line > 0 &&
          x.column >= 0 &&
          v
        )
          return;
        throw new Error(
          "Invalid mapping: " +
            JSON.stringify({ generated: m, source: v, original: x, name: C })
        );
      }
    }),
    (o.prototype._serializeMappings = function () {
      for (
        var m = 0,
          x = 1,
          v = 0,
          C = 0,
          _ = 0,
          A = 0,
          I = "",
          k,
          P,
          E,
          R,
          j = this._mappings.toArray(),
          B = 0,
          G = j.length;
        B < G;
        B++
      ) {
        if (((P = j[B]), (k = ""), P.generatedLine !== x))
          for (m = 0; P.generatedLine !== x; ) (k += ";"), x++;
        else if (B > 0) {
          if (!i.compareByGeneratedPositionsInflated(P, j[B - 1])) continue;
          k += ",";
        }
        (k += e.encode(P.generatedColumn - m)),
          (m = P.generatedColumn),
          P.source != null &&
            ((R = this._sources.indexOf(P.source)),
            (k += e.encode(R - A)),
            (A = R),
            (k += e.encode(P.originalLine - 1 - C)),
            (C = P.originalLine - 1),
            (k += e.encode(P.originalColumn - v)),
            (v = P.originalColumn),
            P.name != null &&
              ((E = this._names.indexOf(P.name)),
              (k += e.encode(E - _)),
              (_ = E))),
          (I += k);
      }
      return I;
    }),
    (o.prototype._generateSourcesContent = function (m, x) {
      return m.map(function (v) {
        if (!this._sourcesContents) return null;
        x != null && (v = i.relative(x, v));
        var C = i.toSetString(v);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, C)
          ? this._sourcesContents[C]
          : null;
      }, this);
    }),
    (o.prototype.toJSON = function () {
      var m = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings(),
      };
      return (
        this._file != null && (m.file = this._file),
        this._sourceRoot != null && (m.sourceRoot = this._sourceRoot),
        this._sourcesContents &&
          (m.sourcesContent = this._generateSourcesContent(
            m.sources,
            m.sourceRoot
          )),
        m
      );
    }),
    (o.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }),
    (Ui.SourceMapGenerator = o),
    Ui
  );
}
var Gt = {},
  Hi = {},
  en;
function xa() {
  return (
    en ||
      ((en = 1),
      (function (e) {
        (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
        function i(r, s, o, l, m, x) {
          var v = Math.floor((s - r) / 2) + r,
            C = m(o, l[v], !0);
          return C === 0
            ? v
            : C > 0
            ? s - v > 1
              ? i(v, s, o, l, m, x)
              : x == e.LEAST_UPPER_BOUND
              ? s < l.length
                ? s
                : -1
              : v
            : v - r > 1
            ? i(r, v, o, l, m, x)
            : x == e.LEAST_UPPER_BOUND
            ? v
            : r < 0
            ? -1
            : r;
        }
        e.search = function (s, o, l, m) {
          if (o.length === 0) return -1;
          var x = i(-1, o.length, s, o, l, m || e.GREATEST_LOWER_BOUND);
          if (x < 0) return -1;
          for (; x - 1 >= 0 && l(o[x], o[x - 1], !0) === 0; ) --x;
          return x;
        };
      })(Hi)),
    Hi
  );
}
var Qi = {},
  tn;
function va() {
  if (tn) return Qi;
  tn = 1;
  function e(s, o, l) {
    var m = s[o];
    (s[o] = s[l]), (s[l] = m);
  }
  function i(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function r(s, o, l, m) {
    if (l < m) {
      var x = i(l, m),
        v = l - 1;
      e(s, x, m);
      for (var C = s[m], _ = l; _ < m; _++)
        o(s[_], C) <= 0 && ((v += 1), e(s, v, _));
      e(s, v + 1, _);
      var A = v + 1;
      r(s, o, l, A - 1), r(s, o, A + 1, m);
    }
  }
  return (
    (Qi.quickSort = function (s, o) {
      r(s, o, 0, s.length - 1);
    }),
    Qi
  );
}
var rn;
function ya() {
  if (rn) return Gt;
  rn = 1;
  var e = Zt(),
    i = xa(),
    r = Nn().ArraySet,
    s = Tn(),
    o = va().quickSort;
  function l(C, _) {
    var A = C;
    return (
      typeof C == "string" && (A = e.parseSourceMapInput(C)),
      A.sections != null ? new v(A, _) : new m(A, _)
    );
  }
  (l.fromSourceMap = function (C, _) {
    return m.fromSourceMap(C, _);
  }),
    (l.prototype._version = 3),
    (l.prototype.__generatedMappings = null),
    Object.defineProperty(l.prototype, "_generatedMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__generatedMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__generatedMappings
        );
      },
    }),
    (l.prototype.__originalMappings = null),
    Object.defineProperty(l.prototype, "_originalMappings", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return (
          this.__originalMappings ||
            this._parseMappings(this._mappings, this.sourceRoot),
          this.__originalMappings
        );
      },
    }),
    (l.prototype._charIsMappingSeparator = function (_, A) {
      var I = _.charAt(A);
      return I === ";" || I === ",";
    }),
    (l.prototype._parseMappings = function (_, A) {
      throw new Error("Subclasses must implement _parseMappings");
    }),
    (l.GENERATED_ORDER = 1),
    (l.ORIGINAL_ORDER = 2),
    (l.GREATEST_LOWER_BOUND = 1),
    (l.LEAST_UPPER_BOUND = 2),
    (l.prototype.eachMapping = function (_, A, I) {
      var k = A || null,
        P = I || l.GENERATED_ORDER,
        E;
      switch (P) {
        case l.GENERATED_ORDER:
          E = this._generatedMappings;
          break;
        case l.ORIGINAL_ORDER:
          E = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var R = this.sourceRoot;
      E.map(function (j) {
        var B = j.source === null ? null : this._sources.at(j.source);
        return (
          (B = e.computeSourceURL(R, B, this._sourceMapURL)),
          {
            source: B,
            generatedLine: j.generatedLine,
            generatedColumn: j.generatedColumn,
            originalLine: j.originalLine,
            originalColumn: j.originalColumn,
            name: j.name === null ? null : this._names.at(j.name),
          }
        );
      }, this).forEach(_, k);
    }),
    (l.prototype.allGeneratedPositionsFor = function (_) {
      var A = e.getArg(_, "line"),
        I = {
          source: e.getArg(_, "source"),
          originalLine: A,
          originalColumn: e.getArg(_, "column", 0),
        };
      if (((I.source = this._findSourceIndex(I.source)), I.source < 0))
        return [];
      var k = [],
        P = this._findMapping(
          I,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          i.LEAST_UPPER_BOUND
        );
      if (P >= 0) {
        var E = this._originalMappings[P];
        if (_.column === void 0)
          for (var R = E.originalLine; E && E.originalLine === R; )
            k.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++P]);
        else
          for (
            var j = E.originalColumn;
            E && E.originalLine === A && E.originalColumn == j;

          )
            k.push({
              line: e.getArg(E, "generatedLine", null),
              column: e.getArg(E, "generatedColumn", null),
              lastColumn: e.getArg(E, "lastGeneratedColumn", null),
            }),
              (E = this._originalMappings[++P]);
      }
      return k;
    }),
    (Gt.SourceMapConsumer = l);
  function m(C, _) {
    var A = C;
    typeof C == "string" && (A = e.parseSourceMapInput(C));
    var I = e.getArg(A, "version"),
      k = e.getArg(A, "sources"),
      P = e.getArg(A, "names", []),
      E = e.getArg(A, "sourceRoot", null),
      R = e.getArg(A, "sourcesContent", null),
      j = e.getArg(A, "mappings"),
      B = e.getArg(A, "file", null);
    if (I != this._version) throw new Error("Unsupported version: " + I);
    E && (E = e.normalize(E)),
      (k = k
        .map(String)
        .map(e.normalize)
        .map(function (G) {
          return E && e.isAbsolute(E) && e.isAbsolute(G) ? e.relative(E, G) : G;
        })),
      (this._names = r.fromArray(P.map(String), !0)),
      (this._sources = r.fromArray(k, !0)),
      (this._absoluteSources = this._sources.toArray().map(function (G) {
        return e.computeSourceURL(E, G, _);
      })),
      (this.sourceRoot = E),
      (this.sourcesContent = R),
      (this._mappings = j),
      (this._sourceMapURL = _),
      (this.file = B);
  }
  (m.prototype = Object.create(l.prototype)),
    (m.prototype.consumer = l),
    (m.prototype._findSourceIndex = function (C) {
      var _ = C;
      if (
        (this.sourceRoot != null && (_ = e.relative(this.sourceRoot, _)),
        this._sources.has(_))
      )
        return this._sources.indexOf(_);
      var A;
      for (A = 0; A < this._absoluteSources.length; ++A)
        if (this._absoluteSources[A] == C) return A;
      return -1;
    }),
    (m.fromSourceMap = function (_, A) {
      var I = Object.create(m.prototype),
        k = (I._names = r.fromArray(_._names.toArray(), !0)),
        P = (I._sources = r.fromArray(_._sources.toArray(), !0));
      (I.sourceRoot = _._sourceRoot),
        (I.sourcesContent = _._generateSourcesContent(
          I._sources.toArray(),
          I.sourceRoot
        )),
        (I.file = _._file),
        (I._sourceMapURL = A),
        (I._absoluteSources = I._sources.toArray().map(function (u) {
          return e.computeSourceURL(I.sourceRoot, u, A);
        }));
      for (
        var E = _._mappings.toArray().slice(),
          R = (I.__generatedMappings = []),
          j = (I.__originalMappings = []),
          B = 0,
          G = E.length;
        B < G;
        B++
      ) {
        var N = E[B],
          y = new x();
        (y.generatedLine = N.generatedLine),
          (y.generatedColumn = N.generatedColumn),
          N.source &&
            ((y.source = P.indexOf(N.source)),
            (y.originalLine = N.originalLine),
            (y.originalColumn = N.originalColumn),
            N.name && (y.name = k.indexOf(N.name)),
            j.push(y)),
          R.push(y);
      }
      return o(I.__originalMappings, e.compareByOriginalPositions), I;
    }),
    (m.prototype._version = 3),
    Object.defineProperty(m.prototype, "sources", {
      get: function () {
        return this._absoluteSources.slice();
      },
    });
  function x() {
    (this.generatedLine = 0),
      (this.generatedColumn = 0),
      (this.source = null),
      (this.originalLine = null),
      (this.originalColumn = null),
      (this.name = null);
  }
  (m.prototype._parseMappings = function (_, A) {
    for (
      var I = 1,
        k = 0,
        P = 0,
        E = 0,
        R = 0,
        j = 0,
        B = _.length,
        G = 0,
        N = {},
        y = {},
        u = [],
        w = [],
        V,
        H,
        W,
        ee,
        J;
      G < B;

    )
      if (_.charAt(G) === ";") I++, G++, (k = 0);
      else if (_.charAt(G) === ",") G++;
      else {
        for (
          V = new x(), V.generatedLine = I, ee = G;
          ee < B && !this._charIsMappingSeparator(_, ee);
          ee++
        );
        if (((H = _.slice(G, ee)), (W = N[H]), W)) G += H.length;
        else {
          for (W = []; G < ee; )
            s.decode(_, G, y), (J = y.value), (G = y.rest), W.push(J);
          if (W.length === 2)
            throw new Error("Found a source, but no line and column");
          if (W.length === 3)
            throw new Error("Found a source and line, but no column");
          N[H] = W;
        }
        (V.generatedColumn = k + W[0]),
          (k = V.generatedColumn),
          W.length > 1 &&
            ((V.source = R + W[1]),
            (R += W[1]),
            (V.originalLine = P + W[2]),
            (P = V.originalLine),
            (V.originalLine += 1),
            (V.originalColumn = E + W[3]),
            (E = V.originalColumn),
            W.length > 4 && ((V.name = j + W[4]), (j += W[4]))),
          w.push(V),
          typeof V.originalLine == "number" && u.push(V);
      }
    o(w, e.compareByGeneratedPositionsDeflated),
      (this.__generatedMappings = w),
      o(u, e.compareByOriginalPositions),
      (this.__originalMappings = u);
  }),
    (m.prototype._findMapping = function (_, A, I, k, P, E) {
      if (_[I] <= 0)
        throw new TypeError(
          "Line must be greater than or equal to 1, got " + _[I]
        );
      if (_[k] < 0)
        throw new TypeError(
          "Column must be greater than or equal to 0, got " + _[k]
        );
      return i.search(_, A, P, E);
    }),
    (m.prototype.computeColumnSpans = function () {
      for (var _ = 0; _ < this._generatedMappings.length; ++_) {
        var A = this._generatedMappings[_];
        if (_ + 1 < this._generatedMappings.length) {
          var I = this._generatedMappings[_ + 1];
          if (A.generatedLine === I.generatedLine) {
            A.lastGeneratedColumn = I.generatedColumn - 1;
            continue;
          }
        }
        A.lastGeneratedColumn = 1 / 0;
      }
    }),
    (m.prototype.originalPositionFor = function (_) {
      var A = {
          generatedLine: e.getArg(_, "line"),
          generatedColumn: e.getArg(_, "column"),
        },
        I = this._findMapping(
          A,
          this._generatedMappings,
          "generatedLine",
          "generatedColumn",
          e.compareByGeneratedPositionsDeflated,
          e.getArg(_, "bias", l.GREATEST_LOWER_BOUND)
        );
      if (I >= 0) {
        var k = this._generatedMappings[I];
        if (k.generatedLine === A.generatedLine) {
          var P = e.getArg(k, "source", null);
          P !== null &&
            ((P = this._sources.at(P)),
            (P = e.computeSourceURL(this.sourceRoot, P, this._sourceMapURL)));
          var E = e.getArg(k, "name", null);
          return (
            E !== null && (E = this._names.at(E)),
            {
              source: P,
              line: e.getArg(k, "originalLine", null),
              column: e.getArg(k, "originalColumn", null),
              name: E,
            }
          );
        }
      }
      return { source: null, line: null, column: null, name: null };
    }),
    (m.prototype.hasContentsOfAllSources = function () {
      return this.sourcesContent
        ? this.sourcesContent.length >= this._sources.size() &&
            !this.sourcesContent.some(function (_) {
              return _ == null;
            })
        : !1;
    }),
    (m.prototype.sourceContentFor = function (_, A) {
      if (!this.sourcesContent) return null;
      var I = this._findSourceIndex(_);
      if (I >= 0) return this.sourcesContent[I];
      var k = _;
      this.sourceRoot != null && (k = e.relative(this.sourceRoot, k));
      var P;
      if (this.sourceRoot != null && (P = e.urlParse(this.sourceRoot))) {
        var E = k.replace(/^file:\/\//, "");
        if (P.scheme == "file" && this._sources.has(E))
          return this.sourcesContent[this._sources.indexOf(E)];
        if ((!P.path || P.path == "/") && this._sources.has("/" + k))
          return this.sourcesContent[this._sources.indexOf("/" + k)];
      }
      if (A) return null;
      throw new Error('"' + k + '" is not in the SourceMap.');
    }),
    (m.prototype.generatedPositionFor = function (_) {
      var A = e.getArg(_, "source");
      if (((A = this._findSourceIndex(A)), A < 0))
        return { line: null, column: null, lastColumn: null };
      var I = {
          source: A,
          originalLine: e.getArg(_, "line"),
          originalColumn: e.getArg(_, "column"),
        },
        k = this._findMapping(
          I,
          this._originalMappings,
          "originalLine",
          "originalColumn",
          e.compareByOriginalPositions,
          e.getArg(_, "bias", l.GREATEST_LOWER_BOUND)
        );
      if (k >= 0) {
        var P = this._originalMappings[k];
        if (P.source === I.source)
          return {
            line: e.getArg(P, "generatedLine", null),
            column: e.getArg(P, "generatedColumn", null),
            lastColumn: e.getArg(P, "lastGeneratedColumn", null),
          };
      }
      return { line: null, column: null, lastColumn: null };
    }),
    (Gt.BasicSourceMapConsumer = m);
  function v(C, _) {
    var A = C;
    typeof C == "string" && (A = e.parseSourceMapInput(C));
    var I = e.getArg(A, "version"),
      k = e.getArg(A, "sections");
    if (I != this._version) throw new Error("Unsupported version: " + I);
    (this._sources = new r()), (this._names = new r());
    var P = { line: -1, column: 0 };
    this._sections = k.map(function (E) {
      if (E.url)
        throw new Error("Support for url field in sections not implemented.");
      var R = e.getArg(E, "offset"),
        j = e.getArg(R, "line"),
        B = e.getArg(R, "column");
      if (j < P.line || (j === P.line && B < P.column))
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return (
        (P = R),
        {
          generatedOffset: { generatedLine: j + 1, generatedColumn: B + 1 },
          consumer: new l(e.getArg(E, "map"), _),
        }
      );
    });
  }
  return (
    (v.prototype = Object.create(l.prototype)),
    (v.prototype.constructor = l),
    (v.prototype._version = 3),
    Object.defineProperty(v.prototype, "sources", {
      get: function () {
        for (var C = [], _ = 0; _ < this._sections.length; _++)
          for (var A = 0; A < this._sections[_].consumer.sources.length; A++)
            C.push(this._sections[_].consumer.sources[A]);
        return C;
      },
    }),
    (v.prototype.originalPositionFor = function (_) {
      var A = {
          generatedLine: e.getArg(_, "line"),
          generatedColumn: e.getArg(_, "column"),
        },
        I = i.search(A, this._sections, function (P, E) {
          var R = P.generatedLine - E.generatedOffset.generatedLine;
          return R || P.generatedColumn - E.generatedOffset.generatedColumn;
        }),
        k = this._sections[I];
      return k
        ? k.consumer.originalPositionFor({
            line: A.generatedLine - (k.generatedOffset.generatedLine - 1),
            column:
              A.generatedColumn -
              (k.generatedOffset.generatedLine === A.generatedLine
                ? k.generatedOffset.generatedColumn - 1
                : 0),
            bias: _.bias,
          })
        : { source: null, line: null, column: null, name: null };
    }),
    (v.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (_) {
        return _.consumer.hasContentsOfAllSources();
      });
    }),
    (v.prototype.sourceContentFor = function (_, A) {
      for (var I = 0; I < this._sections.length; I++) {
        var k = this._sections[I],
          P = k.consumer.sourceContentFor(_, !0);
        if (P) return P;
      }
      if (A) return null;
      throw new Error('"' + _ + '" is not in the SourceMap.');
    }),
    (v.prototype.generatedPositionFor = function (_) {
      for (var A = 0; A < this._sections.length; A++) {
        var I = this._sections[A];
        if (I.consumer._findSourceIndex(e.getArg(_, "source")) !== -1) {
          var k = I.consumer.generatedPositionFor(_);
          if (k) {
            var P = {
              line: k.line + (I.generatedOffset.generatedLine - 1),
              column:
                k.column +
                (I.generatedOffset.generatedLine === k.line
                  ? I.generatedOffset.generatedColumn - 1
                  : 0),
            };
            return P;
          }
        }
      }
      return { line: null, column: null };
    }),
    (v.prototype._parseMappings = function (_, A) {
      (this.__generatedMappings = []), (this.__originalMappings = []);
      for (var I = 0; I < this._sections.length; I++)
        for (
          var k = this._sections[I], P = k.consumer._generatedMappings, E = 0;
          E < P.length;
          E++
        ) {
          var R = P[E],
            j = k.consumer._sources.at(R.source);
          (j = e.computeSourceURL(
            k.consumer.sourceRoot,
            j,
            this._sourceMapURL
          )),
            this._sources.add(j),
            (j = this._sources.indexOf(j));
          var B = null;
          R.name &&
            ((B = k.consumer._names.at(R.name)),
            this._names.add(B),
            (B = this._names.indexOf(B)));
          var G = {
            source: j,
            generatedLine:
              R.generatedLine + (k.generatedOffset.generatedLine - 1),
            generatedColumn:
              R.generatedColumn +
              (k.generatedOffset.generatedLine === R.generatedLine
                ? k.generatedOffset.generatedColumn - 1
                : 0),
            originalLine: R.originalLine,
            originalColumn: R.originalColumn,
            name: B,
          };
          this.__generatedMappings.push(G),
            typeof G.originalLine == "number" &&
              this.__originalMappings.push(G);
        }
      o(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
        o(this.__originalMappings, e.compareByOriginalPositions);
    }),
    (Gt.IndexedSourceMapConsumer = v),
    Gt
  );
}
var Xi = {},
  nn;
function ba() {
  if (nn) return Xi;
  nn = 1;
  var e = Ln().SourceMapGenerator,
    i = Zt(),
    r = /(\r?\n)/,
    s = 10,
    o = "$$$isSourceNode$$$";
  function l(m, x, v, C, _) {
    (this.children = []),
      (this.sourceContents = {}),
      (this.line = m ?? null),
      (this.column = x ?? null),
      (this.source = v ?? null),
      (this.name = _ ?? null),
      (this[o] = !0),
      C != null && this.add(C);
  }
  return (
    (l.fromStringWithSourceMap = function (x, v, C) {
      var _ = new l(),
        A = x.split(r),
        I = 0,
        k = function () {
          var B = N(),
            G = N() || "";
          return B + G;
          function N() {
            return I < A.length ? A[I++] : void 0;
          }
        },
        P = 1,
        E = 0,
        R = null;
      return (
        v.eachMapping(function (B) {
          if (R !== null)
            if (P < B.generatedLine) j(R, k()), P++, (E = 0);
            else {
              var G = A[I] || "",
                N = G.substr(0, B.generatedColumn - E);
              (A[I] = G.substr(B.generatedColumn - E)),
                (E = B.generatedColumn),
                j(R, N),
                (R = B);
              return;
            }
          for (; P < B.generatedLine; ) _.add(k()), P++;
          if (E < B.generatedColumn) {
            var G = A[I] || "";
            _.add(G.substr(0, B.generatedColumn)),
              (A[I] = G.substr(B.generatedColumn)),
              (E = B.generatedColumn);
          }
          R = B;
        }, this),
        I < A.length && (R && j(R, k()), _.add(A.splice(I).join(""))),
        v.sources.forEach(function (B) {
          var G = v.sourceContentFor(B);
          G != null &&
            (C != null && (B = i.join(C, B)), _.setSourceContent(B, G));
        }),
        _
      );
      function j(B, G) {
        if (B === null || B.source === void 0) _.add(G);
        else {
          var N = C ? i.join(C, B.source) : B.source;
          _.add(new l(B.originalLine, B.originalColumn, N, G, B.name));
        }
      }
    }),
    (l.prototype.add = function (x) {
      if (Array.isArray(x))
        x.forEach(function (v) {
          this.add(v);
        }, this);
      else if (x[o] || typeof x == "string") x && this.children.push(x);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            x
        );
      return this;
    }),
    (l.prototype.prepend = function (x) {
      if (Array.isArray(x))
        for (var v = x.length - 1; v >= 0; v--) this.prepend(x[v]);
      else if (x[o] || typeof x == "string") this.children.unshift(x);
      else
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " +
            x
        );
      return this;
    }),
    (l.prototype.walk = function (x) {
      for (var v, C = 0, _ = this.children.length; C < _; C++)
        (v = this.children[C]),
          v[o]
            ? v.walk(x)
            : v !== "" &&
              x(v, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name,
              });
    }),
    (l.prototype.join = function (x) {
      var v,
        C,
        _ = this.children.length;
      if (_ > 0) {
        for (v = [], C = 0; C < _ - 1; C++) v.push(this.children[C]), v.push(x);
        v.push(this.children[C]), (this.children = v);
      }
      return this;
    }),
    (l.prototype.replaceRight = function (x, v) {
      var C = this.children[this.children.length - 1];
      return (
        C[o]
          ? C.replaceRight(x, v)
          : typeof C == "string"
          ? (this.children[this.children.length - 1] = C.replace(x, v))
          : this.children.push("".replace(x, v)),
        this
      );
    }),
    (l.prototype.setSourceContent = function (x, v) {
      this.sourceContents[i.toSetString(x)] = v;
    }),
    (l.prototype.walkSourceContents = function (x) {
      for (var v = 0, C = this.children.length; v < C; v++)
        this.children[v][o] && this.children[v].walkSourceContents(x);
      for (
        var _ = Object.keys(this.sourceContents), v = 0, C = _.length;
        v < C;
        v++
      )
        x(i.fromSetString(_[v]), this.sourceContents[_[v]]);
    }),
    (l.prototype.toString = function () {
      var x = "";
      return (
        this.walk(function (v) {
          x += v;
        }),
        x
      );
    }),
    (l.prototype.toStringWithSourceMap = function (x) {
      var v = { code: "", line: 1, column: 0 },
        C = new e(x),
        _ = !1,
        A = null,
        I = null,
        k = null,
        P = null;
      return (
        this.walk(function (E, R) {
          (v.code += E),
            R.source !== null && R.line !== null && R.column !== null
              ? ((A !== R.source ||
                  I !== R.line ||
                  k !== R.column ||
                  P !== R.name) &&
                  C.addMapping({
                    source: R.source,
                    original: { line: R.line, column: R.column },
                    generated: { line: v.line, column: v.column },
                    name: R.name,
                  }),
                (A = R.source),
                (I = R.line),
                (k = R.column),
                (P = R.name),
                (_ = !0))
              : _ &&
                (C.addMapping({
                  generated: { line: v.line, column: v.column },
                }),
                (A = null),
                (_ = !1));
          for (var j = 0, B = E.length; j < B; j++)
            E.charCodeAt(j) === s
              ? (v.line++,
                (v.column = 0),
                j + 1 === B
                  ? ((A = null), (_ = !1))
                  : _ &&
                    C.addMapping({
                      source: R.source,
                      original: { line: R.line, column: R.column },
                      generated: { line: v.line, column: v.column },
                      name: R.name,
                    }))
              : v.column++;
        }),
        this.walkSourceContents(function (E, R) {
          C.setSourceContent(E, R);
        }),
        { code: v.code, map: C }
      );
    }),
    (Xi.SourceNode = l),
    Xi
  );
}
var sn;
function Sa() {
  return (
    sn ||
      ((sn = 1),
      (Ut.SourceMapGenerator = Ln().SourceMapGenerator),
      (Ut.SourceMapConsumer = ya().SourceMapConsumer),
      (Ut.SourceNode = ba().SourceNode)),
    Ut
  );
}
const _a = "escodegen",
  Ca = "ECMAScript code generator",
  Ea = "http://github.com/estools/escodegen",
  wa = "escodegen.js",
  ka = { esgenerate: "./bin/esgenerate.js", escodegen: "./bin/escodegen.js" },
  Aa = ["LICENSE.BSD", "README.md", "bin", "escodegen.js", "package.json"],
  Ia = "2.0.0",
  Pa = { node: ">=6.0" },
  Ta = [
    {
      name: "Yusuke Suzuki",
      email: "utatane.tea@gmail.com",
      web: "http://github.com/Constellation",
    },
  ],
  Na = { type: "git", url: "http://github.com/estools/escodegen.git" },
  La = {
    estraverse: "^5.2.0",
    esutils: "^2.0.2",
    esprima: "^4.0.1",
    optionator: "^0.8.1",
  },
  Ra = { "source-map": "~0.6.1" },
  Oa = {
    acorn: "^7.3.1",
    bluebird: "^3.4.7",
    "bower-registry-client": "^1.0.0",
    chai: "^4.2.0",
    "chai-exclude": "^2.0.2",
    "commonjs-everywhere": "^0.9.7",
    gulp: "^3.8.10",
    "gulp-eslint": "^3.0.1",
    "gulp-mocha": "^3.0.1",
    semver: "^5.1.0",
  },
  Va = "BSD-2-Clause",
  Fa = {
    test: "gulp travis",
    "unit-test": "gulp test",
    lint: "gulp lint",
    release: "node tools/release.js",
    "build-min":
      "./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js",
    build:
      "./node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js",
  },
  Ma = {
    name: _a,
    description: Ca,
    homepage: Ea,
    main: wa,
    bin: ka,
    files: Aa,
    version: Ia,
    engines: Pa,
    maintainers: Ta,
    repository: Na,
    dependencies: La,
    optionalDependencies: Ra,
    devDependencies: Oa,
    license: Va,
    scripts: Fa,
  };
(function (e) {
  (function () {
    var i,
      r,
      s,
      o,
      l,
      m,
      x,
      v,
      C,
      _,
      A,
      I,
      k,
      P,
      E,
      R,
      j,
      B,
      G,
      N,
      y,
      u,
      w,
      V,
      H,
      W;
    (l = Pn), (m = Xs), (i = l.Syntax);
    function ee(a) {
      return we.Expression.hasOwnProperty(a.type);
    }
    function J(a) {
      return we.Statement.hasOwnProperty(a.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      LogicalOR: 3,
      LogicalAND: 4,
      BitwiseOR: 5,
      BitwiseXOR: 6,
      BitwiseAND: 7,
      Equality: 8,
      Relational: 9,
      BitwiseSHIFT: 10,
      Additive: 11,
      Multiplicative: 12,
      Exponentiation: 13,
      Await: 14,
      Unary: 14,
      Postfix: 15,
      OptionalChaining: 16,
      Call: 17,
      New: 18,
      TaggedTemplate: 19,
      Member: 20,
      Primary: 21,
    }),
      (s = {
        "||": r.LogicalOR,
        "&&": r.LogicalAND,
        "|": r.BitwiseOR,
        "^": r.BitwiseXOR,
        "&": r.BitwiseAND,
        "==": r.Equality,
        "!=": r.Equality,
        "===": r.Equality,
        "!==": r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        "<": r.Relational,
        ">": r.Relational,
        "<=": r.Relational,
        ">=": r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        "<<": r.BitwiseSHIFT,
        ">>": r.BitwiseSHIFT,
        ">>>": r.BitwiseSHIFT,
        "+": r.Additive,
        "-": r.Additive,
        "*": r.Multiplicative,
        "%": r.Multiplicative,
        "/": r.Multiplicative,
        "**": r.Exponentiation,
      });
    var X = 1,
      he = 1 << 1,
      Ce = 1 << 2,
      Se = 1 << 3,
      ye = 1 << 4,
      te = 1 << 5,
      Ae = he | Ce,
      Ue = X | he,
      z = X | he | Ce,
      Be = X,
      tt = Ce,
      Ye = X | Ce,
      fe = X,
      Fe = X | te,
      Ct = 0,
      gt = X | ye,
      ht = X | Se;
    function Et() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: "    ", base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: " ",
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: "single",
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1,
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1,
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null,
      };
    }
    function $e(a, d) {
      var c = "";
      for (d |= 0; d > 0; d >>>= 1, a += a) d & 1 && (c += a);
      return c;
    }
    function ni(a) {
      return /[\r\n]/g.test(a);
    }
    function Pe(a) {
      var d = a.length;
      return d && m.code.isLineTerminator(a.charCodeAt(d - 1));
    }
    function wt(a, d) {
      var c;
      for (c in d) d.hasOwnProperty(c) && (a[c] = d[c]);
      return a;
    }
    function xt(a, d) {
      var c, p;
      function b(L) {
        return (
          typeof L == "object" && L instanceof Object && !(L instanceof RegExp)
        );
      }
      for (c in d)
        d.hasOwnProperty(c) &&
          ((p = d[c]),
          b(p) ? (b(a[c]) ? xt(a[c], p) : (a[c] = xt({}, p))) : (a[c] = p));
      return a;
    }
    function vt(a) {
      var d, c, p, b, L;
      if (a !== a) throw new Error("Numeric literal whose value is NaN");
      if (a < 0 || (a === 0 && 1 / a < 0))
        throw new Error("Numeric literal whose value is negative");
      if (a === 1 / 0) return C ? "null" : _ ? "1e400" : "1e+400";
      if (((d = "" + a), !_ || d.length < 3)) return d;
      for (
        c = d.indexOf("."),
          !C &&
            d.charCodeAt(0) === 48 &&
            c === 1 &&
            ((c = 0), (d = d.slice(1))),
          p = d,
          d = d.replace("e+", "e"),
          b = 0,
          (L = p.indexOf("e")) > 0 &&
            ((b = +p.slice(L + 1)), (p = p.slice(0, L))),
          c >= 0 &&
            ((b -= p.length - c - 1),
            (p = +(p.slice(0, c) + p.slice(c + 1)) + "")),
          L = 0;
        p.charCodeAt(p.length + L - 1) === 48;

      )
        --L;
      return (
        L !== 0 && ((b -= L), (p = p.slice(0, L))),
        b !== 0 && (p += "e" + b),
        (p.length < d.length ||
          (A &&
            a > 1e12 &&
            Math.floor(a) === a &&
            (p = "0x" + a.toString(16)).length < d.length)) &&
          +p === a &&
          (d = p),
        d
      );
    }
    function kt(a, d) {
      return (a & -2) === 8232
        ? (d ? "u" : "\\u") + (a === 8232 ? "2028" : "2029")
        : a === 10 || a === 13
        ? (d ? "" : "\\") + (a === 10 ? "n" : "r")
        : String.fromCharCode(a);
    }
    function Bt(a) {
      var d, c, p, b, L, F, M, Q;
      if (((c = a.toString()), a.source)) {
        if (((d = c.match(/\/([^/]*)$/)), !d)) return c;
        for (
          p = d[1], c = "", M = !1, Q = !1, b = 0, L = a.source.length;
          b < L;
          ++b
        )
          (F = a.source.charCodeAt(b)),
            Q
              ? ((c += kt(F, Q)), (Q = !1))
              : (M
                  ? F === 93 && (M = !1)
                  : F === 47
                  ? (c += "\\")
                  : F === 91 && (M = !0),
                (c += kt(F, Q)),
                (Q = F === 92));
        return "/" + c + "/" + p;
      }
      return c;
    }
    function At(a, d) {
      var c;
      return a === 8
        ? "\\b"
        : a === 12
        ? "\\f"
        : a === 9
        ? "\\t"
        : ((c = a.toString(16).toUpperCase()),
          C || a > 255
            ? "\\u" + "0000".slice(c.length) + c
            : a === 0 && !m.code.isDecimalDigit(d)
            ? "\\0"
            : a === 11
            ? "\\x0B"
            : "\\x" + "00".slice(c.length) + c);
    }
    function Dt(a) {
      if (a === 92) return "\\\\";
      if (a === 10) return "\\n";
      if (a === 13) return "\\r";
      if (a === 8232) return "\\u2028";
      if (a === 8233) return "\\u2029";
      throw new Error("Incorrectly classified character");
    }
    function Je(a) {
      var d, c, p, b;
      for (b = I === "double" ? '"' : "'", d = 0, c = a.length; d < c; ++d)
        if (((p = a.charCodeAt(d)), p === 39)) {
          b = '"';
          break;
        } else if (p === 34) {
          b = "'";
          break;
        } else p === 92 && ++d;
      return b + a + b;
    }
    function si(a) {
      var d = "",
        c,
        p,
        b,
        L = 0,
        F = 0,
        M,
        Q;
      for (c = 0, p = a.length; c < p; ++c) {
        if (((b = a.charCodeAt(c)), b === 39)) ++L;
        else if (b === 34) ++F;
        else if (b === 47 && C) d += "\\";
        else if (m.code.isLineTerminator(b) || b === 92) {
          d += Dt(b);
          continue;
        } else if (
          !m.code.isIdentifierPartES5(b) &&
          ((C && b < 32) || (!C && !k && (b < 32 || b > 126)))
        ) {
          d += At(b, a.charCodeAt(c + 1));
          continue;
        }
        d += String.fromCharCode(b);
      }
      if (
        ((M = !(I === "double" || (I === "auto" && F < L))),
        (Q = M ? "'" : '"'),
        !(M ? L : F))
      )
        return Q + d + Q;
      for (a = d, d = Q, c = 0, p = a.length; c < p; ++c)
        (b = a.charCodeAt(c)),
          ((b === 39 && M) || (b === 34 && !M)) && (d += "\\"),
          (d += String.fromCharCode(b));
      return d + Q;
    }
    function jt(a) {
      var d,
        c,
        p,
        b = "";
      for (d = 0, c = a.length; d < c; ++d)
        (p = a[d]), (b += Array.isArray(p) ? jt(p) : p);
      return b;
    }
    function de(a, d) {
      if (!u) return Array.isArray(a) ? jt(a) : a;
      if (d == null) {
        if (a instanceof o) return a;
        d = {};
      }
      return d.loc == null
        ? new o(null, null, u, a, d.name || null)
        : new o(
            d.loc.start.line,
            d.loc.start.column,
            u === !0 ? d.loc.source || null : u,
            a,
            d.name || null
          );
    }
    function se() {
      return E || " ";
    }
    function K(a, d) {
      var c, p, b, L;
      return (
        (c = de(a).toString()),
        c.length === 0
          ? [d]
          : ((p = de(d).toString()),
            p.length === 0
              ? [a]
              : ((b = c.charCodeAt(c.length - 1)),
                (L = p.charCodeAt(0)),
                ((b === 43 || b === 45) && b === L) ||
                (m.code.isIdentifierPartES5(b) &&
                  m.code.isIdentifierPartES5(L)) ||
                (b === 47 && L === 105)
                  ? [a, se(), d]
                  : m.code.isWhiteSpace(b) ||
                    m.code.isLineTerminator(b) ||
                    m.code.isWhiteSpace(L) ||
                    m.code.isLineTerminator(L)
                  ? [a, d]
                  : [a, E, d]))
      );
    }
    function me(a) {
      return [x, a];
    }
    function Ee(a) {
      var d;
      (d = x), (x += v), a(x), (x = d);
    }
    function It(a) {
      var d;
      for (
        d = a.length - 1;
        d >= 0 && !m.code.isLineTerminator(a.charCodeAt(d));
        --d
      );
      return a.length - 1 - d;
    }
    function Z(a, d) {
      var c, p, b, L, F, M, Q, oe;
      for (
        c = a.split(/\r\n|[\r\n]/), M = Number.MAX_VALUE, p = 1, b = c.length;
        p < b;
        ++p
      ) {
        for (
          L = c[p], F = 0;
          F < L.length && m.code.isWhiteSpace(L.charCodeAt(F));

        )
          ++F;
        M > F && (M = F);
      }
      for (
        typeof d < "u"
          ? ((Q = x), c[1][M] === "*" && (d += " "), (x = d))
          : (M & 1 && --M, (Q = x)),
          p = 1,
          b = c.length;
        p < b;
        ++p
      )
        (oe = de(me(c[p].slice(M)))), (c[p] = u ? oe.join("") : oe);
      return (
        (x = Q),
        c.join(`
`)
      );
    }
    function De(a, d) {
      if (a.type === "Line") {
        if (Pe(a.value)) return "//" + a.value;
        var c = "//" + a.value;
        return (
          V ||
            (c += `
`),
          c
        );
      }
      return N.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value)
        ? Z("/*" + a.value + "*/", d)
        : "/*" + a.value + "*/";
    }
    function ai(a, d) {
      var c, p, b, L, F, M, Q, oe, ke, Ze, it, ui, hi, je;
      if (a.leadingComments && a.leadingComments.length > 0) {
        if (((L = d), V)) {
          for (
            b = a.leadingComments[0],
              d = [],
              oe = b.extendedRange,
              ke = b.range,
              it = w.substring(oe[0], ke[0]),
              je = (it.match(/\n/g) || []).length,
              je > 0
                ? (d.push(
                    $e(
                      `
`,
                      je
                    )
                  ),
                  d.push(me(De(b))))
                : (d.push(it), d.push(De(b))),
              Ze = ke,
              c = 1,
              p = a.leadingComments.length;
            c < p;
            c++
          )
            (b = a.leadingComments[c]),
              (ke = b.range),
              (ui = w.substring(Ze[1], ke[0])),
              (je = (ui.match(/\n/g) || []).length),
              d.push(
                $e(
                  `
`,
                  je
                )
              ),
              d.push(me(De(b))),
              (Ze = ke);
          (hi = w.substring(ke[1], oe[1])),
            (je = (hi.match(/\n/g) || []).length),
            d.push(
              $e(
                `
`,
                je
              )
            );
        } else
          for (
            b = a.leadingComments[0],
              d = [],
              B &&
                a.type === i.Program &&
                a.body.length === 0 &&
                d.push(`
`),
              d.push(De(b)),
              Pe(de(d).toString()) ||
                d.push(`
`),
              c = 1,
              p = a.leadingComments.length;
            c < p;
            ++c
          )
            (b = a.leadingComments[c]),
              (Q = [De(b)]),
              Pe(de(Q).toString()) ||
                Q.push(`
`),
              d.push(me(Q));
        d.push(me(L));
      }
      if (a.trailingComments)
        if (V)
          (b = a.trailingComments[0]),
            (oe = b.extendedRange),
            (ke = b.range),
            (it = w.substring(oe[0], ke[0])),
            (je = (it.match(/\n/g) || []).length),
            je > 0
              ? (d.push(
                  $e(
                    `
`,
                    je
                  )
                ),
                d.push(me(De(b))))
              : (d.push(it), d.push(De(b)));
        else
          for (
            F = !Pe(de(d).toString()),
              M = $e(" ", It(de([x, d, v]).toString())),
              c = 0,
              p = a.trailingComments.length;
            c < p;
            ++c
          )
            (b = a.trailingComments[c]),
              F
                ? (c === 0 ? (d = [d, v]) : (d = [d, M]), d.push(De(b, M)))
                : (d = [d, me(De(b))]),
              c !== p - 1 &&
                !Pe(de(d).toString()) &&
                (d = [
                  d,
                  `
`,
                ]);
      return d;
    }
    function lt(a, d, c) {
      var p,
        b = 0;
      for (p = a; p < d; p++)
        w[p] ===
          `
` && b++;
      for (p = 1; p < b; p++) c.push(P);
    }
    function _e(a, d, c) {
      return d < c ? ["(", a, ")"] : a;
    }
    function Pt(a) {
      var d, c, p;
      for (p = a.split(/\r\n|\n/), d = 1, c = p.length; d < c; d++)
        p[d] = P + x + p[d];
      return p;
    }
    function oi(a, d) {
      var c, p, b;
      return (
        (c = a[N.verbatim]),
        typeof c == "string"
          ? (p = _e(Pt(c), r.Sequence, d))
          : ((p = Pt(c.content)),
            (b = c.precedence != null ? c.precedence : r.Sequence),
            (p = _e(p, b, d))),
        de(p, a)
      );
    }
    function we() {}
    (we.prototype.maybeBlock = function (a, d) {
      var c,
        p,
        b = this;
      return (
        (p = !N.comment || !a.leadingComments),
        a.type === i.BlockStatement && p
          ? [E, this.generateStatement(a, d)]
          : a.type === i.EmptyStatement && p
          ? ";"
          : (Ee(function () {
              c = [P, me(b.generateStatement(a, d))];
            }),
            c)
      );
    }),
      (we.prototype.maybeBlockSuffix = function (a, d) {
        var c = Pe(de(d).toString());
        return a.type === i.BlockStatement &&
          (!N.comment || !a.leadingComments) &&
          !c
          ? [d, E]
          : c
          ? [d, x]
          : [d, P, x];
      });
    function Ne(a) {
      return de(a.name, a);
    }
    function Le(a, d) {
      return a.async ? "async" + (d ? se() : E) : "";
    }
    function Re(a) {
      var d = a.generator && !N.moz.starlessGenerator;
      return d ? "*" + E : "";
    }
    function ve(a) {
      var d = a.value,
        c = "";
      return (
        d.async && (c += Le(d, !a.computed)),
        d.generator && (c += Re(d) ? "*" : ""),
        c
      );
    }
    (we.prototype.generatePattern = function (a, d, c) {
      return a.type === i.Identifier ? Ne(a) : this.generateExpression(a, d, c);
    }),
      (we.prototype.generateFunctionParams = function (a) {
        var d, c, p, b;
        if (
          ((b = !1),
          a.type === i.ArrowFunctionExpression &&
            !a.rest &&
            (!a.defaults || a.defaults.length === 0) &&
            a.params.length === 1 &&
            a.params[0].type === i.Identifier)
        )
          p = [Le(a, !0), Ne(a.params[0])];
        else {
          for (
            p = a.type === i.ArrowFunctionExpression ? [Le(a, !1)] : [],
              p.push("("),
              a.defaults && (b = !0),
              d = 0,
              c = a.params.length;
            d < c;
            ++d
          )
            b && a.defaults[d]
              ? p.push(
                  this.generateAssignment(
                    a.params[d],
                    a.defaults[d],
                    "=",
                    r.Assignment,
                    z
                  )
                )
              : p.push(this.generatePattern(a.params[d], r.Assignment, z)),
              d + 1 < c && p.push("," + E);
          a.rest &&
            (a.params.length && p.push("," + E),
            p.push("..."),
            p.push(Ne(a.rest))),
            p.push(")");
        }
        return p;
      }),
      (we.prototype.generateFunctionBody = function (a) {
        var d, c;
        return (
          (d = this.generateFunctionParams(a)),
          a.type === i.ArrowFunctionExpression && (d.push(E), d.push("=>")),
          a.expression
            ? (d.push(E),
              (c = this.generateExpression(a.body, r.Assignment, z)),
              c.toString().charAt(0) === "{" && (c = ["(", c, ")"]),
              d.push(c))
            : d.push(this.maybeBlock(a.body, ht)),
          d
        );
      }),
      (we.prototype.generateIterationForStatement = function (a, d, c) {
        var p = ["for" + (d.await ? se() + "await" : "") + E + "("],
          b = this;
        return (
          Ee(function () {
            d.left.type === i.VariableDeclaration
              ? Ee(function () {
                  p.push(d.left.kind + se()),
                    p.push(b.generateStatement(d.left.declarations[0], Ct));
                })
              : p.push(b.generateExpression(d.left, r.Call, z)),
              (p = K(p, a)),
              (p = [K(p, b.generateExpression(d.right, r.Assignment, z)), ")"]);
          }),
          p.push(this.maybeBlock(d.body, c)),
          p
        );
      }),
      (we.prototype.generatePropertyKey = function (a, d) {
        var c = [];
        return (
          d && c.push("["),
          c.push(this.generateExpression(a, r.Assignment, z)),
          d && c.push("]"),
          c
        );
      }),
      (we.prototype.generateAssignment = function (a, d, c, p, b) {
        return (
          r.Assignment < p && (b |= X),
          _e(
            [
              this.generateExpression(a, r.Call, b),
              E + c + E,
              this.generateExpression(d, r.Assignment, b),
            ],
            r.Assignment,
            p
          )
        );
      }),
      (we.prototype.semicolon = function (a) {
        return !j && a & te ? "" : ";";
      }),
      (we.Statement = {
        BlockStatement: function (a, d) {
          var c,
            p,
            b = ["{", P],
            L = this;
          return (
            Ee(function () {
              a.body.length === 0 &&
                V &&
                ((c = a.range),
                c[1] - c[0] > 2 &&
                  ((p = w.substring(c[0] + 1, c[1] - 1)),
                  p[0] ===
                    `
` && (b = ["{"]),
                  b.push(p)));
              var F, M, Q, oe;
              for (
                oe = fe, d & Se && (oe |= ye), F = 0, M = a.body.length;
                F < M;
                ++F
              )
                V &&
                  (F === 0 &&
                    (a.body[0].leadingComments &&
                      ((c = a.body[0].leadingComments[0].extendedRange),
                      (p = w.substring(c[0], c[1])),
                      p[0] ===
                        `
` && (b = ["{"])),
                    a.body[0].leadingComments ||
                      lt(a.range[0], a.body[0].range[0], b)),
                  F > 0 &&
                    !a.body[F - 1].trailingComments &&
                    !a.body[F].leadingComments &&
                    lt(a.body[F - 1].range[1], a.body[F].range[0], b)),
                  F === M - 1 && (oe |= te),
                  a.body[F].leadingComments && V
                    ? (Q = L.generateStatement(a.body[F], oe))
                    : (Q = me(L.generateStatement(a.body[F], oe))),
                  b.push(Q),
                  Pe(de(Q).toString()) ||
                    (V && F < M - 1 && a.body[F + 1].leadingComments) ||
                    b.push(P),
                  V &&
                    F === M - 1 &&
                    (a.body[F].trailingComments ||
                      lt(a.body[F].range[1], a.range[1], b));
            }),
            b.push(me("}")),
            b
          );
        },
        BreakStatement: function (a, d) {
          return a.label
            ? "break " + a.label.name + this.semicolon(d)
            : "break" + this.semicolon(d);
        },
        ContinueStatement: function (a, d) {
          return a.label
            ? "continue " + a.label.name + this.semicolon(d)
            : "continue" + this.semicolon(d);
        },
        ClassBody: function (a, d) {
          var c = ["{", P],
            p = this;
          return (
            Ee(function (b) {
              var L, F;
              for (L = 0, F = a.body.length; L < F; ++L)
                c.push(b),
                  c.push(p.generateExpression(a.body[L], r.Sequence, z)),
                  L + 1 < F && c.push(P);
            }),
            Pe(de(c).toString()) || c.push(P),
            c.push(x),
            c.push("}"),
            c
          );
        },
        ClassDeclaration: function (a, d) {
          var c, p;
          return (
            (c = ["class"]),
            a.id && (c = K(c, this.generateExpression(a.id, r.Sequence, z))),
            a.superClass &&
              ((p = K(
                "extends",
                this.generateExpression(a.superClass, r.Unary, z)
              )),
              (c = K(c, p))),
            c.push(E),
            c.push(this.generateStatement(a.body, Fe)),
            c
          );
        },
        DirectiveStatement: function (a, d) {
          return N.raw && a.raw
            ? a.raw + this.semicolon(d)
            : Je(a.directive) + this.semicolon(d);
        },
        DoWhileStatement: function (a, d) {
          var c = K("do", this.maybeBlock(a.body, fe));
          return (
            (c = this.maybeBlockSuffix(a.body, c)),
            K(c, [
              "while" + E + "(",
              this.generateExpression(a.test, r.Sequence, z),
              ")" + this.semicolon(d),
            ])
          );
        },
        CatchClause: function (a, d) {
          var c,
            p = this;
          return (
            Ee(function () {
              var b;
              a.param
                ? ((c = [
                    "catch" + E + "(",
                    p.generateExpression(a.param, r.Sequence, z),
                    ")",
                  ]),
                  a.guard &&
                    ((b = p.generateExpression(a.guard, r.Sequence, z)),
                    c.splice(2, 0, " if ", b)))
                : (c = ["catch"]);
            }),
            c.push(this.maybeBlock(a.body, fe)),
            c
          );
        },
        DebuggerStatement: function (a, d) {
          return "debugger" + this.semicolon(d);
        },
        EmptyStatement: function (a, d) {
          return ";";
        },
        ExportDefaultDeclaration: function (a, d) {
          var c = ["export"],
            p;
          return (
            (p = d & te ? Fe : fe),
            (c = K(c, "default")),
            J(a.declaration)
              ? (c = K(c, this.generateStatement(a.declaration, p)))
              : (c = K(
                  c,
                  this.generateExpression(a.declaration, r.Assignment, z) +
                    this.semicolon(d)
                )),
            c
          );
        },
        ExportNamedDeclaration: function (a, d) {
          var c = ["export"],
            p,
            b = this;
          return (
            (p = d & te ? Fe : fe),
            a.declaration
              ? K(c, this.generateStatement(a.declaration, p))
              : (a.specifiers &&
                  (a.specifiers.length === 0
                    ? (c = K(c, "{" + E + "}"))
                    : a.specifiers[0].type === i.ExportBatchSpecifier
                    ? (c = K(
                        c,
                        this.generateExpression(a.specifiers[0], r.Sequence, z)
                      ))
                    : ((c = K(c, "{")),
                      Ee(function (L) {
                        var F, M;
                        for (
                          c.push(P), F = 0, M = a.specifiers.length;
                          F < M;
                          ++F
                        )
                          c.push(L),
                            c.push(
                              b.generateExpression(
                                a.specifiers[F],
                                r.Sequence,
                                z
                              )
                            ),
                            F + 1 < M && c.push("," + P);
                      }),
                      Pe(de(c).toString()) || c.push(P),
                      c.push(x + "}")),
                  a.source
                    ? (c = K(c, [
                        "from" + E,
                        this.generateExpression(a.source, r.Sequence, z),
                        this.semicolon(d),
                      ]))
                    : c.push(this.semicolon(d))),
                c)
          );
        },
        ExportAllDeclaration: function (a, d) {
          return [
            "export" + E,
            "*" + E,
            "from" + E,
            this.generateExpression(a.source, r.Sequence, z),
            this.semicolon(d),
          ];
        },
        ExpressionStatement: function (a, d) {
          var c, p;
          function b(M) {
            var Q;
            return M.slice(0, 5) !== "class"
              ? !1
              : ((Q = M.charCodeAt(5)),
                Q === 123 ||
                  m.code.isWhiteSpace(Q) ||
                  m.code.isLineTerminator(Q));
          }
          function L(M) {
            var Q;
            return M.slice(0, 8) !== "function"
              ? !1
              : ((Q = M.charCodeAt(8)),
                Q === 40 ||
                  m.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  m.code.isLineTerminator(Q));
          }
          function F(M) {
            var Q, oe, ke;
            if (
              M.slice(0, 5) !== "async" ||
              !m.code.isWhiteSpace(M.charCodeAt(5))
            )
              return !1;
            for (
              oe = 6, ke = M.length;
              oe < ke && m.code.isWhiteSpace(M.charCodeAt(oe));
              ++oe
            );
            return oe === ke || M.slice(oe, oe + 8) !== "function"
              ? !1
              : ((Q = M.charCodeAt(oe + 8)),
                Q === 40 ||
                  m.code.isWhiteSpace(Q) ||
                  Q === 42 ||
                  m.code.isLineTerminator(Q));
          }
          return (
            (c = [this.generateExpression(a.expression, r.Sequence, z)]),
            (p = de(c).toString()),
            p.charCodeAt(0) === 123 ||
            b(p) ||
            L(p) ||
            F(p) ||
            (G &&
              d & ye &&
              a.expression.type === i.Literal &&
              typeof a.expression.value == "string")
              ? (c = ["(", c, ")" + this.semicolon(d)])
              : c.push(this.semicolon(d)),
            c
          );
        },
        ImportDeclaration: function (a, d) {
          var c,
            p,
            b = this;
          return a.specifiers.length === 0
            ? [
                "import",
                E,
                this.generateExpression(a.source, r.Sequence, z),
                this.semicolon(d),
              ]
            : ((c = ["import"]),
              (p = 0),
              a.specifiers[p].type === i.ImportDefaultSpecifier &&
                ((c = K(c, [
                  this.generateExpression(a.specifiers[p], r.Sequence, z),
                ])),
                ++p),
              a.specifiers[p] &&
                (p !== 0 && c.push(","),
                a.specifiers[p].type === i.ImportNamespaceSpecifier
                  ? (c = K(c, [
                      E,
                      this.generateExpression(a.specifiers[p], r.Sequence, z),
                    ]))
                  : (c.push(E + "{"),
                    a.specifiers.length - p === 1
                      ? (c.push(E),
                        c.push(
                          this.generateExpression(
                            a.specifiers[p],
                            r.Sequence,
                            z
                          )
                        ),
                        c.push(E + "}" + E))
                      : (Ee(function (L) {
                          var F, M;
                          for (
                            c.push(P), F = p, M = a.specifiers.length;
                            F < M;
                            ++F
                          )
                            c.push(L),
                              c.push(
                                b.generateExpression(
                                  a.specifiers[F],
                                  r.Sequence,
                                  z
                                )
                              ),
                              F + 1 < M && c.push("," + P);
                        }),
                        Pe(de(c).toString()) || c.push(P),
                        c.push(x + "}" + E)))),
              (c = K(c, [
                "from" + E,
                this.generateExpression(a.source, r.Sequence, z),
                this.semicolon(d),
              ])),
              c);
        },
        VariableDeclarator: function (a, d) {
          var c = d & X ? z : Ae;
          return a.init
            ? [
                this.generateExpression(a.id, r.Assignment, c),
                E,
                "=",
                E,
                this.generateExpression(a.init, r.Assignment, c),
              ]
            : this.generatePattern(a.id, r.Assignment, c);
        },
        VariableDeclaration: function (a, d) {
          var c,
            p,
            b,
            L,
            F,
            M = this;
          (c = [a.kind]), (F = d & X ? fe : Ct);
          function Q() {
            for (
              L = a.declarations[0],
                N.comment && L.leadingComments
                  ? (c.push(`
`),
                    c.push(me(M.generateStatement(L, F))))
                  : (c.push(se()), c.push(M.generateStatement(L, F))),
                p = 1,
                b = a.declarations.length;
              p < b;
              ++p
            )
              (L = a.declarations[p]),
                N.comment && L.leadingComments
                  ? (c.push("," + P), c.push(me(M.generateStatement(L, F))))
                  : (c.push("," + E), c.push(M.generateStatement(L, F)));
          }
          return (
            a.declarations.length > 1 ? Ee(Q) : Q(),
            c.push(this.semicolon(d)),
            c
          );
        },
        ThrowStatement: function (a, d) {
          return [
            K("throw", this.generateExpression(a.argument, r.Sequence, z)),
            this.semicolon(d),
          ];
        },
        TryStatement: function (a, d) {
          var c, p, b, L;
          if (
            ((c = ["try", this.maybeBlock(a.block, fe)]),
            (c = this.maybeBlockSuffix(a.block, c)),
            a.handlers)
          )
            for (p = 0, b = a.handlers.length; p < b; ++p)
              (c = K(c, this.generateStatement(a.handlers[p], fe))),
                (a.finalizer || p + 1 !== b) &&
                  (c = this.maybeBlockSuffix(a.handlers[p].body, c));
          else {
            for (L = a.guardedHandlers || [], p = 0, b = L.length; p < b; ++p)
              (c = K(c, this.generateStatement(L[p], fe))),
                (a.finalizer || p + 1 !== b) &&
                  (c = this.maybeBlockSuffix(L[p].body, c));
            if (a.handler)
              if (Array.isArray(a.handler))
                for (p = 0, b = a.handler.length; p < b; ++p)
                  (c = K(c, this.generateStatement(a.handler[p], fe))),
                    (a.finalizer || p + 1 !== b) &&
                      (c = this.maybeBlockSuffix(a.handler[p].body, c));
              else
                (c = K(c, this.generateStatement(a.handler, fe))),
                  a.finalizer && (c = this.maybeBlockSuffix(a.handler.body, c));
          }
          return (
            a.finalizer &&
              (c = K(c, ["finally", this.maybeBlock(a.finalizer, fe)])),
            c
          );
        },
        SwitchStatement: function (a, d) {
          var c,
            p,
            b,
            L,
            F,
            M = this;
          if (
            (Ee(function () {
              c = [
                "switch" + E + "(",
                M.generateExpression(a.discriminant, r.Sequence, z),
                ")" + E + "{" + P,
              ];
            }),
            a.cases)
          )
            for (F = fe, b = 0, L = a.cases.length; b < L; ++b)
              b === L - 1 && (F |= te),
                (p = me(this.generateStatement(a.cases[b], F))),
                c.push(p),
                Pe(de(p).toString()) || c.push(P);
          return c.push(me("}")), c;
        },
        SwitchCase: function (a, d) {
          var c,
            p,
            b,
            L,
            F,
            M = this;
          return (
            Ee(function () {
              for (
                a.test
                  ? (c = [
                      K("case", M.generateExpression(a.test, r.Sequence, z)),
                      ":",
                    ])
                  : (c = ["default:"]),
                  b = 0,
                  L = a.consequent.length,
                  L &&
                    a.consequent[0].type === i.BlockStatement &&
                    ((p = M.maybeBlock(a.consequent[0], fe)),
                    c.push(p),
                    (b = 1)),
                  b !== L && !Pe(de(c).toString()) && c.push(P),
                  F = fe;
                b < L;
                ++b
              )
                b === L - 1 && d & te && (F |= te),
                  (p = me(M.generateStatement(a.consequent[b], F))),
                  c.push(p),
                  b + 1 !== L && !Pe(de(p).toString()) && c.push(P);
            }),
            c
          );
        },
        IfStatement: function (a, d) {
          var c,
            p,
            b,
            L = this;
          return (
            Ee(function () {
              c = [
                "if" + E + "(",
                L.generateExpression(a.test, r.Sequence, z),
                ")",
              ];
            }),
            (b = d & te),
            (p = fe),
            b && (p |= te),
            a.alternate
              ? (c.push(this.maybeBlock(a.consequent, fe)),
                (c = this.maybeBlockSuffix(a.consequent, c)),
                a.alternate.type === i.IfStatement
                  ? (c = K(c, [
                      "else ",
                      this.generateStatement(a.alternate, p),
                    ]))
                  : (c = K(c, K("else", this.maybeBlock(a.alternate, p)))))
              : c.push(this.maybeBlock(a.consequent, p)),
            c
          );
        },
        ForStatement: function (a, d) {
          var c,
            p = this;
          return (
            Ee(function () {
              (c = ["for" + E + "("]),
                a.init
                  ? a.init.type === i.VariableDeclaration
                    ? c.push(p.generateStatement(a.init, Ct))
                    : (c.push(p.generateExpression(a.init, r.Sequence, Ae)),
                      c.push(";"))
                  : c.push(";"),
                a.test &&
                  (c.push(E),
                  c.push(p.generateExpression(a.test, r.Sequence, z))),
                c.push(";"),
                a.update &&
                  (c.push(E),
                  c.push(p.generateExpression(a.update, r.Sequence, z))),
                c.push(")");
            }),
            c.push(this.maybeBlock(a.body, d & te ? Fe : fe)),
            c
          );
        },
        ForInStatement: function (a, d) {
          return this.generateIterationForStatement("in", a, d & te ? Fe : fe);
        },
        ForOfStatement: function (a, d) {
          return this.generateIterationForStatement("of", a, d & te ? Fe : fe);
        },
        LabeledStatement: function (a, d) {
          return [
            a.label.name + ":",
            this.maybeBlock(a.body, d & te ? Fe : fe),
          ];
        },
        Program: function (a, d) {
          var c, p, b, L, F;
          for (
            L = a.body.length,
              c = [
                B && L > 0
                  ? `
`
                  : "",
              ],
              F = gt,
              b = 0;
            b < L;
            ++b
          )
            !B && b === L - 1 && (F |= te),
              V &&
                (b === 0 &&
                  (a.body[0].leadingComments ||
                    lt(a.range[0], a.body[b].range[0], c)),
                b > 0 &&
                  !a.body[b - 1].trailingComments &&
                  !a.body[b].leadingComments &&
                  lt(a.body[b - 1].range[1], a.body[b].range[0], c)),
              (p = me(this.generateStatement(a.body[b], F))),
              c.push(p),
              b + 1 < L &&
                !Pe(de(p).toString()) &&
                ((V && a.body[b + 1].leadingComments) || c.push(P)),
              V &&
                b === L - 1 &&
                (a.body[b].trailingComments ||
                  lt(a.body[b].range[1], a.range[1], c));
          return c;
        },
        FunctionDeclaration: function (a, d) {
          return [
            Le(a, !0),
            "function",
            Re(a) || se(),
            a.id ? Ne(a.id) : "",
            this.generateFunctionBody(a),
          ];
        },
        ReturnStatement: function (a, d) {
          return a.argument
            ? [
                K("return", this.generateExpression(a.argument, r.Sequence, z)),
                this.semicolon(d),
              ]
            : ["return" + this.semicolon(d)];
        },
        WhileStatement: function (a, d) {
          var c,
            p = this;
          return (
            Ee(function () {
              c = [
                "while" + E + "(",
                p.generateExpression(a.test, r.Sequence, z),
                ")",
              ];
            }),
            c.push(this.maybeBlock(a.body, d & te ? Fe : fe)),
            c
          );
        },
        WithStatement: function (a, d) {
          var c,
            p = this;
          return (
            Ee(function () {
              c = [
                "with" + E + "(",
                p.generateExpression(a.object, r.Sequence, z),
                ")",
              ];
            }),
            c.push(this.maybeBlock(a.body, d & te ? Fe : fe)),
            c
          );
        },
      }),
      wt(we.prototype, we.Statement),
      (we.Expression = {
        SequenceExpression: function (a, d, c) {
          var p, b, L;
          for (
            r.Sequence < d && (c |= X), p = [], b = 0, L = a.expressions.length;
            b < L;
            ++b
          )
            p.push(this.generateExpression(a.expressions[b], r.Assignment, c)),
              b + 1 < L && p.push("," + E);
          return _e(p, r.Sequence, d);
        },
        AssignmentExpression: function (a, d, c) {
          return this.generateAssignment(a.left, a.right, a.operator, d, c);
        },
        ArrowFunctionExpression: function (a, d, c) {
          return _e(this.generateFunctionBody(a), r.ArrowFunction, d);
        },
        ConditionalExpression: function (a, d, c) {
          return (
            r.Conditional < d && (c |= X),
            _e(
              [
                this.generateExpression(a.test, r.LogicalOR, c),
                E + "?" + E,
                this.generateExpression(a.consequent, r.Assignment, c),
                E + ":" + E,
                this.generateExpression(a.alternate, r.Assignment, c),
              ],
              r.Conditional,
              d
            )
          );
        },
        LogicalExpression: function (a, d, c) {
          return this.BinaryExpression(a, d, c);
        },
        BinaryExpression: function (a, d, c) {
          var p, b, L, F, M, Q;
          return (
            (F = s[a.operator]),
            (b = a.operator === "**" ? r.Postfix : F),
            (L = a.operator === "**" ? F : F + 1),
            F < d && (c |= X),
            (M = this.generateExpression(a.left, b, c)),
            (Q = M.toString()),
            Q.charCodeAt(Q.length - 1) === 47 &&
            m.code.isIdentifierPartES5(a.operator.charCodeAt(0))
              ? (p = [M, se(), a.operator])
              : (p = K(M, a.operator)),
            (M = this.generateExpression(a.right, L, c)),
            (a.operator === "/" && M.toString().charAt(0) === "/") ||
            (a.operator.slice(-1) === "<" && M.toString().slice(0, 3) === "!--")
              ? (p.push(se()), p.push(M))
              : (p = K(p, M)),
            a.operator === "in" && !(c & X) ? ["(", p, ")"] : _e(p, F, d)
          );
        },
        CallExpression: function (a, d, c) {
          var p, b, L;
          for (
            p = [this.generateExpression(a.callee, r.Call, Ue)],
              a.optional && p.push("?."),
              p.push("("),
              b = 0,
              L = a.arguments.length;
            b < L;
            ++b
          )
            p.push(this.generateExpression(a.arguments[b], r.Assignment, z)),
              b + 1 < L && p.push("," + E);
          return p.push(")"), c & he ? _e(p, r.Call, d) : ["(", p, ")"];
        },
        ChainExpression: function (a, d, c) {
          r.OptionalChaining < d && (c |= he);
          var p = this.generateExpression(a.expression, r.OptionalChaining, c);
          return _e(p, r.OptionalChaining, d);
        },
        NewExpression: function (a, d, c) {
          var p, b, L, F, M;
          if (
            ((b = a.arguments.length),
            (M = c & Ce && !R && b === 0 ? Ye : Be),
            (p = K("new", this.generateExpression(a.callee, r.New, M))),
            !(c & Ce) || R || b > 0)
          ) {
            for (p.push("("), L = 0, F = b; L < F; ++L)
              p.push(this.generateExpression(a.arguments[L], r.Assignment, z)),
                L + 1 < F && p.push("," + E);
            p.push(")");
          }
          return _e(p, r.New, d);
        },
        MemberExpression: function (a, d, c) {
          var p, b;
          return (
            (p = [this.generateExpression(a.object, r.Call, c & he ? Ue : Be)]),
            a.computed
              ? (a.optional && p.push("?."),
                p.push("["),
                p.push(
                  this.generateExpression(
                    a.property,
                    r.Sequence,
                    c & he ? z : Ye
                  )
                ),
                p.push("]"))
              : (!a.optional &&
                  a.object.type === i.Literal &&
                  typeof a.object.value == "number" &&
                  ((b = de(p).toString()),
                  b.indexOf(".") < 0 &&
                    !/[eExX]/.test(b) &&
                    m.code.isDecimalDigit(b.charCodeAt(b.length - 1)) &&
                    !(b.length >= 2 && b.charCodeAt(0) === 48) &&
                    p.push(" ")),
                p.push(a.optional ? "?." : "."),
                p.push(Ne(a.property))),
            _e(p, r.Member, d)
          );
        },
        MetaProperty: function (a, d, c) {
          var p;
          return (
            (p = []),
            p.push(typeof a.meta == "string" ? a.meta : Ne(a.meta)),
            p.push("."),
            p.push(typeof a.property == "string" ? a.property : Ne(a.property)),
            _e(p, r.Member, d)
          );
        },
        UnaryExpression: function (a, d, c) {
          var p, b, L, F, M;
          return (
            (b = this.generateExpression(a.argument, r.Unary, z)),
            E === ""
              ? (p = K(a.operator, b))
              : ((p = [a.operator]),
                a.operator.length > 2
                  ? (p = K(p, b))
                  : ((F = de(p).toString()),
                    (M = F.charCodeAt(F.length - 1)),
                    (L = b.toString().charCodeAt(0)),
                    (((M === 43 || M === 45) && M === L) ||
                      (m.code.isIdentifierPartES5(M) &&
                        m.code.isIdentifierPartES5(L))) &&
                      p.push(se()),
                    p.push(b))),
            _e(p, r.Unary, d)
          );
        },
        YieldExpression: function (a, d, c) {
          var p;
          return (
            a.delegate ? (p = "yield*") : (p = "yield"),
            a.argument &&
              (p = K(p, this.generateExpression(a.argument, r.Yield, z))),
            _e(p, r.Yield, d)
          );
        },
        AwaitExpression: function (a, d, c) {
          var p = K(
            a.all ? "await*" : "await",
            this.generateExpression(a.argument, r.Await, z)
          );
          return _e(p, r.Await, d);
        },
        UpdateExpression: function (a, d, c) {
          return a.prefix
            ? _e(
                [a.operator, this.generateExpression(a.argument, r.Unary, z)],
                r.Unary,
                d
              )
            : _e(
                [this.generateExpression(a.argument, r.Postfix, z), a.operator],
                r.Postfix,
                d
              );
        },
        FunctionExpression: function (a, d, c) {
          var p = [Le(a, !0), "function"];
          return (
            a.id
              ? (p.push(Re(a) || se()), p.push(Ne(a.id)))
              : p.push(Re(a) || E),
            p.push(this.generateFunctionBody(a)),
            p
          );
        },
        ArrayPattern: function (a, d, c) {
          return this.ArrayExpression(a, d, c, !0);
        },
        ArrayExpression: function (a, d, c, p) {
          var b,
            L,
            F = this;
          return a.elements.length
            ? ((L = p ? !1 : a.elements.length > 1),
              (b = ["[", L ? P : ""]),
              Ee(function (M) {
                var Q, oe;
                for (Q = 0, oe = a.elements.length; Q < oe; ++Q)
                  a.elements[Q]
                    ? (b.push(L ? M : ""),
                      b.push(
                        F.generateExpression(a.elements[Q], r.Assignment, z)
                      ))
                    : (L && b.push(M), Q + 1 === oe && b.push(",")),
                    Q + 1 < oe && b.push("," + (L ? P : E));
              }),
              L && !Pe(de(b).toString()) && b.push(P),
              b.push(L ? x : ""),
              b.push("]"),
              b)
            : "[]";
        },
        RestElement: function (a, d, c) {
          return "..." + this.generatePattern(a.argument);
        },
        ClassExpression: function (a, d, c) {
          var p, b;
          return (
            (p = ["class"]),
            a.id && (p = K(p, this.generateExpression(a.id, r.Sequence, z))),
            a.superClass &&
              ((b = K(
                "extends",
                this.generateExpression(a.superClass, r.Unary, z)
              )),
              (p = K(p, b))),
            p.push(E),
            p.push(this.generateStatement(a.body, Fe)),
            p
          );
        },
        MethodDefinition: function (a, d, c) {
          var p, b;
          return (
            a.static ? (p = ["static" + E]) : (p = []),
            a.kind === "get" || a.kind === "set"
              ? (b = [
                  K(a.kind, this.generatePropertyKey(a.key, a.computed)),
                  this.generateFunctionBody(a.value),
                ])
              : (b = [
                  ve(a),
                  this.generatePropertyKey(a.key, a.computed),
                  this.generateFunctionBody(a.value),
                ]),
            K(p, b)
          );
        },
        Property: function (a, d, c) {
          return a.kind === "get" || a.kind === "set"
            ? [
                a.kind,
                se(),
                this.generatePropertyKey(a.key, a.computed),
                this.generateFunctionBody(a.value),
              ]
            : a.shorthand
            ? a.value.type === "AssignmentPattern"
              ? this.AssignmentPattern(a.value, r.Sequence, z)
              : this.generatePropertyKey(a.key, a.computed)
            : a.method
            ? [
                ve(a),
                this.generatePropertyKey(a.key, a.computed),
                this.generateFunctionBody(a.value),
              ]
            : [
                this.generatePropertyKey(a.key, a.computed),
                ":" + E,
                this.generateExpression(a.value, r.Assignment, z),
              ];
        },
        ObjectExpression: function (a, d, c) {
          var p,
            b,
            L,
            F = this;
          return a.properties.length
            ? ((p = a.properties.length > 1),
              Ee(function () {
                L = F.generateExpression(a.properties[0], r.Sequence, z);
              }),
              !p && !ni(de(L).toString())
                ? ["{", E, L, E, "}"]
                : (Ee(function (M) {
                    var Q, oe;
                    if (((b = ["{", P, M, L]), p))
                      for (
                        b.push("," + P), Q = 1, oe = a.properties.length;
                        Q < oe;
                        ++Q
                      )
                        b.push(M),
                          b.push(
                            F.generateExpression(a.properties[Q], r.Sequence, z)
                          ),
                          Q + 1 < oe && b.push("," + P);
                  }),
                  Pe(de(b).toString()) || b.push(P),
                  b.push(x),
                  b.push("}"),
                  b))
            : "{}";
        },
        AssignmentPattern: function (a, d, c) {
          return this.generateAssignment(a.left, a.right, "=", d, c);
        },
        ObjectPattern: function (a, d, c) {
          var p,
            b,
            L,
            F,
            M,
            Q = this;
          if (!a.properties.length) return "{}";
          if (((F = !1), a.properties.length === 1))
            (M = a.properties[0]),
              M.type === i.Property &&
                M.value.type !== i.Identifier &&
                (F = !0);
          else
            for (b = 0, L = a.properties.length; b < L; ++b)
              if (
                ((M = a.properties[b]), M.type === i.Property && !M.shorthand)
              ) {
                F = !0;
                break;
              }
          return (
            (p = ["{", F ? P : ""]),
            Ee(function (oe) {
              var ke, Ze;
              for (ke = 0, Ze = a.properties.length; ke < Ze; ++ke)
                p.push(F ? oe : ""),
                  p.push(Q.generateExpression(a.properties[ke], r.Sequence, z)),
                  ke + 1 < Ze && p.push("," + (F ? P : E));
            }),
            F && !Pe(de(p).toString()) && p.push(P),
            p.push(F ? x : ""),
            p.push("}"),
            p
          );
        },
        ThisExpression: function (a, d, c) {
          return "this";
        },
        Super: function (a, d, c) {
          return "super";
        },
        Identifier: function (a, d, c) {
          return Ne(a);
        },
        ImportDefaultSpecifier: function (a, d, c) {
          return Ne(a.id || a.local);
        },
        ImportNamespaceSpecifier: function (a, d, c) {
          var p = ["*"],
            b = a.id || a.local;
          return b && p.push(E + "as" + se() + Ne(b)), p;
        },
        ImportSpecifier: function (a, d, c) {
          var p = a.imported,
            b = [p.name],
            L = a.local;
          return (
            L && L.name !== p.name && b.push(se() + "as" + se() + Ne(L)), b
          );
        },
        ExportSpecifier: function (a, d, c) {
          var p = a.local,
            b = [p.name],
            L = a.exported;
          return (
            L && L.name !== p.name && b.push(se() + "as" + se() + Ne(L)), b
          );
        },
        Literal: function (a, d, c) {
          var p;
          if (a.hasOwnProperty("raw") && y && N.raw)
            try {
              if (
                ((p = y(a.raw).body[0].expression),
                p.type === i.Literal && p.value === a.value)
              )
                return a.raw;
            } catch {}
          return a.regex
            ? "/" + a.regex.pattern + "/" + a.regex.flags
            : a.value === null
            ? "null"
            : typeof a.value == "string"
            ? si(a.value)
            : typeof a.value == "number"
            ? vt(a.value)
            : typeof a.value == "boolean"
            ? a.value
              ? "true"
              : "false"
            : Bt(a.value);
        },
        GeneratorExpression: function (a, d, c) {
          return this.ComprehensionExpression(a, d, c);
        },
        ComprehensionExpression: function (a, d, c) {
          var p,
            b,
            L,
            F,
            M = this;
          return (
            (p = a.type === i.GeneratorExpression ? ["("] : ["["]),
            N.moz.comprehensionExpressionStartsWithAssignment &&
              ((F = this.generateExpression(a.body, r.Assignment, z)),
              p.push(F)),
            a.blocks &&
              Ee(function () {
                for (b = 0, L = a.blocks.length; b < L; ++b)
                  (F = M.generateExpression(a.blocks[b], r.Sequence, z)),
                    b > 0 || N.moz.comprehensionExpressionStartsWithAssignment
                      ? (p = K(p, F))
                      : p.push(F);
              }),
            a.filter &&
              ((p = K(p, "if" + E)),
              (F = this.generateExpression(a.filter, r.Sequence, z)),
              (p = K(p, ["(", F, ")"]))),
            N.moz.comprehensionExpressionStartsWithAssignment ||
              ((F = this.generateExpression(a.body, r.Assignment, z)),
              (p = K(p, F))),
            p.push(a.type === i.GeneratorExpression ? ")" : "]"),
            p
          );
        },
        ComprehensionBlock: function (a, d, c) {
          var p;
          return (
            a.left.type === i.VariableDeclaration
              ? (p = [
                  a.left.kind,
                  se(),
                  this.generateStatement(a.left.declarations[0], Ct),
                ])
              : (p = this.generateExpression(a.left, r.Call, z)),
            (p = K(p, a.of ? "of" : "in")),
            (p = K(p, this.generateExpression(a.right, r.Sequence, z))),
            ["for" + E + "(", p, ")"]
          );
        },
        SpreadElement: function (a, d, c) {
          return ["...", this.generateExpression(a.argument, r.Assignment, z)];
        },
        TaggedTemplateExpression: function (a, d, c) {
          var p = Ue;
          c & he || (p = Be);
          var b = [
            this.generateExpression(a.tag, r.Call, p),
            this.generateExpression(a.quasi, r.Primary, tt),
          ];
          return _e(b, r.TaggedTemplate, d);
        },
        TemplateElement: function (a, d, c) {
          return a.value.raw;
        },
        TemplateLiteral: function (a, d, c) {
          var p, b, L;
          for (p = ["`"], b = 0, L = a.quasis.length; b < L; ++b)
            p.push(this.generateExpression(a.quasis[b], r.Primary, z)),
              b + 1 < L &&
                (p.push("${" + E),
                p.push(
                  this.generateExpression(a.expressions[b], r.Sequence, z)
                ),
                p.push(E + "}"));
          return p.push("`"), p;
        },
        ModuleSpecifier: function (a, d, c) {
          return this.Literal(a, d, c);
        },
        ImportExpression: function (a, d, c) {
          return _e(
            [
              "import(",
              this.generateExpression(a.source, r.Assignment, z),
              ")",
            ],
            r.Call,
            d
          );
        },
      }),
      wt(we.prototype, we.Expression),
      (we.prototype.generateExpression = function (a, d, c) {
        var p, b;
        return (
          (b = a.type || i.Property),
          N.verbatim && a.hasOwnProperty(N.verbatim)
            ? oi(a, d)
            : ((p = this[b](a, d, c)), N.comment && (p = ai(a, p)), de(p, a))
        );
      }),
      (we.prototype.generateStatement = function (a, d) {
        var c, p;
        return (
          (c = this[a.type](a, d)),
          N.comment && (c = ai(a, c)),
          (p = de(c).toString()),
          a.type === i.Program &&
            !B &&
            P === "" &&
            p.charAt(p.length - 1) ===
              `
` &&
            (c = u ? de(c).replaceRight(/\s+$/, "") : p.replace(/\s+$/, "")),
          de(c, a)
        );
      });
    function ct(a) {
      var d;
      if (((d = new we()), J(a))) return d.generateStatement(a, fe);
      if (ee(a)) return d.generateExpression(a, r.Sequence, z);
      throw new Error("Unknown node type: " + a.type);
    }
    function ie(a, d) {
      var c = Et(),
        p,
        b;
      return (
        d != null
          ? (typeof d.indent == "string" && (c.format.indent.style = d.indent),
            typeof d.base == "number" && (c.format.indent.base = d.base),
            (d = xt(c, d)),
            (v = d.format.indent.style),
            typeof d.base == "string"
              ? (x = d.base)
              : (x = $e(v, d.format.indent.base)))
          : ((d = c),
            (v = d.format.indent.style),
            (x = $e(v, d.format.indent.base))),
        (C = d.format.json),
        (_ = d.format.renumber),
        (A = C ? !1 : d.format.hexadecimal),
        (I = C ? "double" : d.format.quotes),
        (k = d.format.escapeless),
        (P = d.format.newline),
        (E = d.format.space),
        d.format.compact && (P = E = v = x = ""),
        (R = d.format.parentheses),
        (j = d.format.semicolons),
        (B = d.format.safeConcatenation),
        (G = d.directive),
        (y = C ? null : d.parse),
        (u = d.sourceMap),
        (w = d.sourceCode),
        (V = d.format.preserveBlankLines && w !== null),
        (N = d),
        u &&
          (e.browser ? (o = Rt.sourceMap.SourceNode) : (o = Sa().SourceNode)),
        (p = ct(a)),
        u
          ? ((b = p.toStringWithSourceMap({
              file: d.file,
              sourceRoot: d.sourceMapRoot,
            })),
            d.sourceContent &&
              b.map.setSourceContent(d.sourceMap, d.sourceContent),
            d.sourceMapWithCode ? b : b.map.toString())
          : ((b = { code: p.toString(), map: null }),
            d.sourceMapWithCode ? b : b.code)
      );
    }
    (H = {
      indent: { style: "", base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: "auto",
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1,
    }),
      (W = Et().format),
      (e.version = Ma.version),
      (e.generate = ie),
      (e.attachComments = l.attachComments),
      (e.Precedence = xt({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = H),
      (e.FORMAT_DEFAULTS = W);
  })();
})(In);
var Ji = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict:
      "implements interface let package private protected public static yield",
    strictBind: "eval arguments",
  },
  Ki =
    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
  Ba = {
    5: Ki,
    "5module": Ki + " export import",
    6: Ki + " const class extends export import super",
  },
  Da = /^in(stanceof)?$/,
  hr =
    "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
  Rn =
    "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
  ja = new RegExp("[" + hr + "]"),
  qa = new RegExp("[" + hr + Rn + "]");
hr = Rn = null;
var On = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20,
    28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47,
    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
    39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3,
    21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
    72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95,
    7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
    264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
    31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129,
    74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2,
    18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3,
    1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2,
    0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0,
    1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0,
    2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2,
    6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
  ],
  Ua = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9,
    7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
    161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193,
    17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12,
    9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9,
    120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
    17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
    4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
  ];
function Zi(e, i) {
  for (var r = 65536, s = 0; s < i.length; s += 2) {
    if (((r += i[s]), r > e)) return !1;
    if (((r += i[s + 1]), r >= e)) return !0;
  }
}
function ft(e, i) {
  return e < 65
    ? e === 36
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && ja.test(String.fromCharCode(e))
    : i === !1
    ? !1
    : Zi(e, On);
}
function Ot(e, i) {
  return e < 48
    ? e === 36
    : e < 58
    ? !0
    : e < 65
    ? !1
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && qa.test(String.fromCharCode(e))
    : i === !1
    ? !1
    : Zi(e, On) || Zi(e, Ua);
}
var ge = function (i, r) {
  r === void 0 && (r = {}),
    (this.label = i),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function Ge(e, i) {
  return new ge(e, { beforeExpr: !0, binop: i });
}
var We = { beforeExpr: !0 },
  qe = { startsExpr: !0 },
  lr = {};
function pe(e, i) {
  return i === void 0 && (i = {}), (i.keyword = e), (lr[e] = new ge(e, i));
}
var g = {
    num: new ge("num", qe),
    regexp: new ge("regexp", qe),
    string: new ge("string", qe),
    name: new ge("name", qe),
    eof: new ge("eof"),
    bracketL: new ge("[", { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new ge("]"),
    braceL: new ge("{", { beforeExpr: !0, startsExpr: !0 }),
    braceR: new ge("}"),
    parenL: new ge("(", { beforeExpr: !0, startsExpr: !0 }),
    parenR: new ge(")"),
    comma: new ge(",", We),
    semi: new ge(";", We),
    colon: new ge(":", We),
    dot: new ge("."),
    question: new ge("?", We),
    questionDot: new ge("?."),
    arrow: new ge("=>", We),
    template: new ge("template"),
    invalidTemplate: new ge("invalidTemplate"),
    ellipsis: new ge("...", We),
    backQuote: new ge("`", qe),
    dollarBraceL: new ge("${", { beforeExpr: !0, startsExpr: !0 }),
    eq: new ge("=", { beforeExpr: !0, isAssign: !0 }),
    assign: new ge("_=", { beforeExpr: !0, isAssign: !0 }),
    incDec: new ge("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new ge("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: Ge("||", 1),
    logicalAND: Ge("&&", 2),
    bitwiseOR: Ge("|", 3),
    bitwiseXOR: Ge("^", 4),
    bitwiseAND: Ge("&", 5),
    equality: Ge("==/!=/===/!==", 6),
    relational: Ge("</>/<=/>=", 7),
    bitShift: Ge("<</>>/>>>", 8),
    plusMin: new ge("+/-", {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0,
    }),
    modulo: Ge("%", 10),
    star: Ge("*", 10),
    slash: Ge("/", 10),
    starstar: new ge("**", { beforeExpr: !0 }),
    coalesce: Ge("??", 1),
    _break: pe("break"),
    _case: pe("case", We),
    _catch: pe("catch"),
    _continue: pe("continue"),
    _debugger: pe("debugger"),
    _default: pe("default", We),
    _do: pe("do", { isLoop: !0, beforeExpr: !0 }),
    _else: pe("else", We),
    _finally: pe("finally"),
    _for: pe("for", { isLoop: !0 }),
    _function: pe("function", qe),
    _if: pe("if"),
    _return: pe("return", We),
    _switch: pe("switch"),
    _throw: pe("throw", We),
    _try: pe("try"),
    _var: pe("var"),
    _const: pe("const"),
    _while: pe("while", { isLoop: !0 }),
    _with: pe("with"),
    _new: pe("new", { beforeExpr: !0, startsExpr: !0 }),
    _this: pe("this", qe),
    _super: pe("super", qe),
    _class: pe("class", qe),
    _extends: pe("extends", We),
    _export: pe("export"),
    _import: pe("import", qe),
    _null: pe("null", qe),
    _true: pe("true", qe),
    _false: pe("false", qe),
    _in: pe("in", { beforeExpr: !0, binop: 7 }),
    _instanceof: pe("instanceof", { beforeExpr: !0, binop: 7 }),
    _typeof: pe("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: pe("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: pe("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
  },
  Qe = /\r\n?|\n|\u2028|\u2029/,
  Xt = new RegExp(Qe.source, "g");
function ei(e, i) {
  return e === 10 || e === 13 || (!i && (e === 8232 || e === 8233));
}
var Vn = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  He = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Fn = Object.prototype,
  Ga = Fn.hasOwnProperty,
  Wa = Fn.toString;
function _i(e, i) {
  return Ga.call(e, i);
}
var an =
  Array.isArray ||
  function (e) {
    return Wa.call(e) === "[object Array]";
  };
function bt(e) {
  return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
}
var Jt = function (i, r) {
  (this.line = i), (this.column = r);
};
Jt.prototype.offset = function (i) {
  return new Jt(this.line, this.column + i);
};
var Ci = function (i, r, s) {
  (this.start = r),
    (this.end = s),
    i.sourceFile !== null && (this.source = i.sourceFile);
};
function Mn(e, i) {
  for (var r = 1, s = 0; ; ) {
    Xt.lastIndex = s;
    var o = Xt.exec(e);
    if (o && o.index < i) ++r, (s = o.index + o[0].length);
    else return new Jt(r, i - s);
  }
}
var er = {
  ecmaVersion: 10,
  sourceType: "script",
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1,
};
function za(e) {
  var i = {};
  for (var r in er) i[r] = e && _i(e, r) ? e[r] : er[r];
  if (
    (i.ecmaVersion >= 2015 && (i.ecmaVersion -= 2009),
    i.allowReserved == null && (i.allowReserved = i.ecmaVersion < 5),
    an(i.onToken))
  ) {
    var s = i.onToken;
    i.onToken = function (o) {
      return s.push(o);
    };
  }
  return an(i.onComment) && (i.onComment = Ha(i, i.onComment)), i;
}
function Ha(e, i) {
  return function (r, s, o, l, m, x) {
    var v = { type: r ? "Block" : "Line", value: s, start: o, end: l };
    e.locations && (v.loc = new Ci(this, m, x)),
      e.ranges && (v.range = [o, l]),
      i.push(v);
  };
}
var Kt = 1,
  ti = 2,
  cr = Kt | ti,
  Bn = 4,
  Dn = 8,
  jn = 16,
  qn = 32,
  Un = 64,
  Gn = 128;
function pr(e, i) {
  return ti | (e ? Bn : 0) | (i ? Dn : 0);
}
var on = 0,
  fr = 1,
  at = 2,
  Wn = 3,
  zn = 4,
  Hn = 5,
  Te = function (i, r, s) {
    (this.options = i = za(i)),
      (this.sourceFile = i.sourceFile),
      (this.keywords = bt(
        Ba[i.ecmaVersion >= 6 ? 6 : i.sourceType === "module" ? "5module" : 5]
      ));
    var o = "";
    if (i.allowReserved !== !0) {
      for (var l = i.ecmaVersion; !(o = Ji[l]); l--);
      i.sourceType === "module" && (o += " await");
    }
    this.reservedWords = bt(o);
    var m = (o ? o + " " : "") + Ji.strict;
    (this.reservedWordsStrict = bt(m)),
      (this.reservedWordsStrictBind = bt(m + " " + Ji.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      s
        ? ((this.pos = s),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              s - 1
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Qe).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = g.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = i.sourceType === "module"),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        i.allowHashBang &&
        this.input.slice(0, 2) === "#!" &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(Kt),
      (this.regexpState = null);
  },
  St = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 },
  };
Te.prototype.parse = function () {
  var i = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(i);
};
St.inFunction.get = function () {
  return (this.currentVarScope().flags & ti) > 0;
};
St.inGenerator.get = function () {
  return (this.currentVarScope().flags & Dn) > 0;
};
St.inAsync.get = function () {
  return (this.currentVarScope().flags & Bn) > 0;
};
St.allowSuper.get = function () {
  return (this.currentThisScope().flags & Un) > 0;
};
St.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & Gn) > 0;
};
St.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
Te.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & ti) > 0;
};
Te.extend = function () {
  for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
  for (var s = this, o = 0; o < i.length; o++) s = i[o](s);
  return s;
};
Te.parse = function (i, r) {
  return new this(r, i).parse();
};
Te.parseExpressionAt = function (i, r, s) {
  var o = new this(s, i, r);
  return o.nextToken(), o.parseExpression();
};
Te.tokenizer = function (i, r) {
  return new this(r, i);
};
Object.defineProperties(Te.prototype, St);
var Me = Te.prototype,
  Qa = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Me.strictDirective = function (e) {
  for (;;) {
    (He.lastIndex = e), (e += He.exec(this.input)[0].length);
    var i = Qa.exec(this.input.slice(e));
    if (!i) return !1;
    if ((i[1] || i[2]) === "use strict") {
      He.lastIndex = e + i[0].length;
      var r = He.exec(this.input),
        s = r.index + r[0].length,
        o = this.input.charAt(s);
      return (
        o === ";" ||
        o === "}" ||
        (Qe.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(o) ||
            (o === "!" && this.input.charAt(s + 1) === "=")
          ))
      );
    }
    (e += i[0].length),
      (He.lastIndex = e),
      (e += He.exec(this.input)[0].length),
      this.input[e] === ";" && e++;
  }
};
Me.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Me.isContextual = function (e) {
  return this.type === g.name && this.value === e && !this.containsEsc;
};
Me.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Me.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
Me.canInsertSemicolon = function () {
  return (
    this.type === g.eof ||
    this.type === g.braceR ||
    Qe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
Me.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
Me.semicolon = function () {
  !this.eat(g.semi) && !this.insertSemicolon() && this.unexpected();
};
Me.afterTrailingComma = function (e, i) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      i || this.next(),
      !0
    );
};
Me.expect = function (e) {
  this.eat(e) || this.unexpected();
};
Me.unexpected = function (e) {
  this.raise(e ?? this.start, "Unexpected token");
};
function Ei() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
Me.checkPatternErrors = function (e, i) {
  if (e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(
        e.trailingComma,
        "Comma is not permitted after the rest element"
      );
    var r = i ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, "Parenthesized pattern");
  }
};
Me.checkExpressionErrors = function (e, i) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    s = e.doubleProto;
  if (!i) return r >= 0 || s >= 0;
  r >= 0 &&
    this.raise(
      r,
      "Shorthand property assignments are valid only in destructuring patterns"
    ),
    s >= 0 && this.raiseRecoverable(s, "Redefinition of __proto__ property");
};
Me.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, "Yield expression cannot be a default value"),
    this.awaitPos &&
      this.raise(this.awaitPos, "Await expression cannot be a default value");
};
Me.isSimpleAssignTarget = function (e) {
  return e.type === "ParenthesizedExpression"
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === "Identifier" || e.type === "MemberExpression";
};
var ne = Te.prototype;
ne.parseTopLevel = function (e) {
  var i = {};
  for (e.body || (e.body = []); this.type !== g.eof; ) {
    var r = this.parseStatement(null, !0, i);
    e.body.push(r);
  }
  if (this.inModule)
    for (
      var s = 0, o = Object.keys(this.undefinedExports);
      s < o.length;
      s += 1
    ) {
      var l = o[s];
      this.raiseRecoverable(
        this.undefinedExports[l].start,
        "Export '" + l + "' is not defined"
      );
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, "Program")
  );
};
var dr = { kind: "loop" },
  Xa = { kind: "switch" };
ne.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
  He.lastIndex = this.pos;
  var i = He.exec(this.input),
    r = this.pos + i[0].length,
    s = this.input.charCodeAt(r);
  if (s === 91) return !0;
  if (e) return !1;
  if (s === 123) return !0;
  if (ft(s, !0)) {
    for (var o = r + 1; Ot(this.input.charCodeAt(o), !0); ) ++o;
    var l = this.input.slice(r, o);
    if (!Da.test(l)) return !0;
  }
  return !1;
};
ne.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
  He.lastIndex = this.pos;
  var e = He.exec(this.input),
    i = this.pos + e[0].length;
  return (
    !Qe.test(this.input.slice(this.pos, i)) &&
    this.input.slice(i, i + 8) === "function" &&
    (i + 8 === this.input.length || !Ot(this.input.charAt(i + 8)))
  );
};
ne.parseStatement = function (e, i, r) {
  var s = this.type,
    o = this.startNode(),
    l;
  switch ((this.isLet(e) && ((s = g._var), (l = "let")), s)) {
    case g._break:
    case g._continue:
      return this.parseBreakContinueStatement(o, s.keyword);
    case g._debugger:
      return this.parseDebuggerStatement(o);
    case g._do:
      return this.parseDoStatement(o);
    case g._for:
      return this.parseForStatement(o);
    case g._function:
      return (
        e &&
          (this.strict || (e !== "if" && e !== "label")) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(o, !1, !e)
      );
    case g._class:
      return e && this.unexpected(), this.parseClass(o, !0);
    case g._if:
      return this.parseIfStatement(o);
    case g._return:
      return this.parseReturnStatement(o);
    case g._switch:
      return this.parseSwitchStatement(o);
    case g._throw:
      return this.parseThrowStatement(o);
    case g._try:
      return this.parseTryStatement(o);
    case g._const:
    case g._var:
      return (
        (l = l || this.value),
        e && l !== "var" && this.unexpected(),
        this.parseVarStatement(o, l)
      );
    case g._while:
      return this.parseWhileStatement(o);
    case g._with:
      return this.parseWithStatement(o);
    case g.braceL:
      return this.parseBlock(!0, o);
    case g.semi:
      return this.parseEmptyStatement(o);
    case g._export:
    case g._import:
      if (this.options.ecmaVersion > 10 && s === g._import) {
        He.lastIndex = this.pos;
        var m = He.exec(this.input),
          x = this.pos + m[0].length,
          v = this.input.charCodeAt(x);
        if (v === 40 || v === 46)
          return this.parseExpressionStatement(o, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (i ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level"
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'"
            )),
        s === g._import ? this.parseImport(o) : this.parseExport(o, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          e && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(o, !0, !e)
        );
      var C = this.value,
        _ = this.parseExpression();
      return s === g.name && _.type === "Identifier" && this.eat(g.colon)
        ? this.parseLabeledStatement(o, C, _, e)
        : this.parseExpressionStatement(o, _);
  }
};
ne.parseBreakContinueStatement = function (e, i) {
  var r = i === "break";
  this.next(),
    this.eat(g.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== g.name
      ? this.unexpected()
      : ((e.label = this.parseIdent()), this.semicolon());
  for (var s = 0; s < this.labels.length; ++s) {
    var o = this.labels[s];
    if (
      (e.label == null || o.name === e.label.name) &&
      ((o.kind != null && (r || o.kind === "loop")) || (e.label && r))
    )
      break;
  }
  return (
    s === this.labels.length && this.raise(e.start, "Unsyntactic " + i),
    this.finishNode(e, r ? "BreakStatement" : "ContinueStatement")
  );
};
ne.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
};
ne.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(dr),
    (e.body = this.parseStatement("do")),
    this.labels.pop(),
    this.expect(g._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(g.semi) : this.semicolon(),
    this.finishNode(e, "DoWhileStatement")
  );
};
ne.parseForStatement = function (e) {
  this.next();
  var i =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual("await")
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(dr),
    this.enterScope(0),
    this.expect(g.parenL),
    this.type === g.semi)
  )
    return i > -1 && this.unexpected(i), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === g._var || this.type === g._const || r) {
    var s = this.startNode(),
      o = r ? "let" : this.value;
    return (
      this.next(),
      this.parseVar(s, !0, o),
      this.finishNode(s, "VariableDeclaration"),
      (this.type === g._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
      s.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === g._in
              ? i > -1 && this.unexpected(i)
              : (e.await = i > -1)),
          this.parseForIn(e, s))
        : (i > -1 && this.unexpected(i), this.parseFor(e, s))
    );
  }
  var l = new Ei(),
    m = this.parseExpression(!0, l);
  return this.type === g._in ||
    (this.options.ecmaVersion >= 6 && this.isContextual("of"))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === g._in
          ? i > -1 && this.unexpected(i)
          : (e.await = i > -1)),
      this.toAssignable(m, !1, l),
      this.checkLVal(m),
      this.parseForIn(e, m))
    : (this.checkExpressionErrors(l, !0),
      i > -1 && this.unexpected(i),
      this.parseFor(e, m));
};
ne.parseFunctionStatement = function (e, i, r) {
  return this.next(), this.parseFunction(e, zt | (r ? 0 : tr), !1, i);
};
ne.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement("if")),
    (e.alternate = this.eat(g._else) ? this.parseStatement("if") : null),
    this.finishNode(e, "IfStatement")
  );
};
ne.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(g.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, "ReturnStatement")
  );
};
ne.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(g.braceL),
    this.labels.push(Xa),
    this.enterScope(0);
  for (var i, r = !1; this.type !== g.braceR; )
    if (this.type === g._case || this.type === g._default) {
      var s = this.type === g._case;
      i && this.finishNode(i, "SwitchCase"),
        e.cases.push((i = this.startNode())),
        (i.consequent = []),
        this.next(),
        s
          ? (i.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                "Multiple default clauses"
              ),
            (r = !0),
            (i.test = null)),
        this.expect(g.colon);
    } else i || this.unexpected(), i.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    i && this.finishNode(i, "SwitchCase"),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, "SwitchStatement")
  );
};
ne.parseThrowStatement = function (e) {
  return (
    this.next(),
    Qe.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, "Illegal newline after throw"),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, "ThrowStatement")
  );
};
var Ja = [];
ne.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === g._catch)
  ) {
    var i = this.startNode();
    if ((this.next(), this.eat(g.parenL))) {
      i.param = this.parseBindingAtom();
      var r = i.param.type === "Identifier";
      this.enterScope(r ? qn : 0),
        this.checkLVal(i.param, r ? zn : at),
        this.expect(g.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (i.param = null),
        this.enterScope(0);
    (i.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(i, "CatchClause"));
  }
  return (
    (e.finalizer = this.eat(g._finally) ? this.parseBlock() : null),
    !e.handler &&
      !e.finalizer &&
      this.raise(e.start, "Missing catch or finally clause"),
    this.finishNode(e, "TryStatement")
  );
};
ne.parseVarStatement = function (e, i) {
  return (
    this.next(),
    this.parseVar(e, !1, i),
    this.semicolon(),
    this.finishNode(e, "VariableDeclaration")
  );
};
ne.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(dr),
    (e.body = this.parseStatement("while")),
    this.labels.pop(),
    this.finishNode(e, "WhileStatement")
  );
};
ne.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement("with")),
    this.finishNode(e, "WithStatement")
  );
};
ne.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, "EmptyStatement");
};
ne.parseLabeledStatement = function (e, i, r, s) {
  for (var o = 0, l = this.labels; o < l.length; o += 1) {
    var m = l[o];
    m.name === i &&
      this.raise(r.start, "Label '" + i + "' is already declared");
  }
  for (
    var x = this.type.isLoop
        ? "loop"
        : this.type === g._switch
        ? "switch"
        : null,
      v = this.labels.length - 1;
    v >= 0;
    v--
  ) {
    var C = this.labels[v];
    if (C.statementStart === e.start)
      (C.statementStart = this.start), (C.kind = x);
    else break;
  }
  return (
    this.labels.push({ name: i, kind: x, statementStart: this.start }),
    (e.body = this.parseStatement(
      s ? (s.indexOf("label") === -1 ? s + "label" : s) : "label"
    )),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, "LabeledStatement")
  );
};
ne.parseExpressionStatement = function (e, i) {
  return (
    (e.expression = i),
    this.semicolon(),
    this.finishNode(e, "ExpressionStatement")
  );
};
ne.parseBlock = function (e, i, r) {
  for (
    e === void 0 && (e = !0),
      i === void 0 && (i = this.startNode()),
      i.body = [],
      this.expect(g.braceL),
      e && this.enterScope(0);
    this.type !== g.braceR;

  ) {
    var s = this.parseStatement(null);
    i.body.push(s);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(i, "BlockStatement")
  );
};
ne.parseFor = function (e, i) {
  return (
    (e.init = i),
    this.expect(g.semi),
    (e.test = this.type === g.semi ? null : this.parseExpression()),
    this.expect(g.semi),
    (e.update = this.type === g.parenR ? null : this.parseExpression()),
    this.expect(g.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, "ForStatement")
  );
};
ne.parseForIn = function (e, i) {
  var r = this.type === g._in;
  return (
    this.next(),
    i.type === "VariableDeclaration" &&
    i.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      i.kind !== "var" ||
      i.declarations[0].id.type !== "Identifier")
      ? this.raise(
          i.start,
          (r ? "for-in" : "for-of") +
            " loop variable declaration may not have an initializer"
        )
      : i.type === "AssignmentPattern" &&
        this.raise(i.start, "Invalid left-hand side in for-loop"),
    (e.left = i),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(g.parenR),
    (e.body = this.parseStatement("for")),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? "ForInStatement" : "ForOfStatement")
  );
};
ne.parseVar = function (e, i, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var s = this.startNode();
    if (
      (this.parseVarId(s, r),
      this.eat(g.eq)
        ? (s.init = this.parseMaybeAssign(i))
        : r === "const" &&
          !(
            this.type === g._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual("of"))
          )
        ? this.unexpected()
        : s.id.type !== "Identifier" &&
          !(i && (this.type === g._in || this.isContextual("of")))
        ? this.raise(
            this.lastTokEnd,
            "Complex binding patterns require an initialization value"
          )
        : (s.init = null),
      e.declarations.push(this.finishNode(s, "VariableDeclarator")),
      !this.eat(g.comma))
    )
      break;
  }
  return e;
};
ne.parseVarId = function (e, i) {
  (e.id = this.parseBindingAtom()),
    this.checkLVal(e.id, i === "var" ? fr : at, !1);
};
var zt = 1,
  tr = 2,
  Qn = 4;
ne.parseFunction = function (e, i, r, s) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !s)) &&
      (this.type === g.star && i & tr && this.unexpected(),
      (e.generator = this.eat(g.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!s),
    i & zt &&
      ((e.id = i & Qn && this.type !== g.name ? null : this.parseIdent()),
      e.id &&
        !(i & tr) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? fr
              : at
            : Wn
        ));
  var o = this.yieldPos,
    l = this.awaitPos,
    m = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(pr(e.async, e.generator)),
    i & zt || (e.id = this.type === g.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = o),
    (this.awaitPos = l),
    (this.awaitIdentPos = m),
    this.finishNode(e, i & zt ? "FunctionDeclaration" : "FunctionExpression")
  );
};
ne.parseFunctionParams = function (e) {
  this.expect(g.parenL),
    (e.params = this.parseBindingList(
      g.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams();
};
ne.parseClass = function (e, i) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, i), this.parseClassSuper(e);
  var s = this.startNode(),
    o = !1;
  for (s.body = [], this.expect(g.braceL); this.type !== g.braceR; ) {
    var l = this.parseClassElement(e.superClass !== null);
    l &&
      (s.body.push(l),
      l.type === "MethodDefinition" &&
        l.kind === "constructor" &&
        (o && this.raise(l.start, "Duplicate constructor in the same class"),
        (o = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(s, "ClassBody")),
    this.finishNode(e, i ? "ClassDeclaration" : "ClassExpression")
  );
};
ne.parseClassElement = function (e) {
  var i = this;
  if (this.eat(g.semi)) return null;
  var r = this.startNode(),
    s = function (v, C) {
      C === void 0 && (C = !1);
      var _ = i.start,
        A = i.startLoc;
      return i.eatContextual(v)
        ? i.type !== g.parenL && (!C || !i.canInsertSemicolon())
          ? !0
          : (r.key && i.unexpected(),
            (r.computed = !1),
            (r.key = i.startNodeAt(_, A)),
            (r.key.name = v),
            i.finishNode(r.key, "Identifier"),
            !1)
        : !1;
    };
  (r.kind = "method"), (r.static = s("static"));
  var o = this.eat(g.star),
    l = !1;
  o ||
    (this.options.ecmaVersion >= 8 && s("async", !0)
      ? ((l = !0), (o = this.options.ecmaVersion >= 9 && this.eat(g.star)))
      : s("get")
      ? (r.kind = "get")
      : s("set") && (r.kind = "set")),
    r.key || this.parsePropertyName(r);
  var m = r.key,
    x = !1;
  return (
    !r.computed &&
    !r.static &&
    ((m.type === "Identifier" && m.name === "constructor") ||
      (m.type === "Literal" && m.value === "constructor"))
      ? (r.kind !== "method" &&
          this.raise(m.start, "Constructor can't have get/set modifier"),
        o && this.raise(m.start, "Constructor can't be a generator"),
        l && this.raise(m.start, "Constructor can't be an async method"),
        (r.kind = "constructor"),
        (x = e))
      : r.static &&
        m.type === "Identifier" &&
        m.name === "prototype" &&
        this.raise(
          m.start,
          "Classes may not have a static property named prototype"
        ),
    this.parseClassMethod(r, o, l, x),
    r.kind === "get" &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, "getter should have no params"),
    r.kind === "set" &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(
        r.value.start,
        "setter should have exactly one param"
      ),
    r.kind === "set" &&
      r.value.params[0].type === "RestElement" &&
      this.raiseRecoverable(
        r.value.params[0].start,
        "Setter cannot use rest params"
      ),
    r
  );
};
ne.parseClassMethod = function (e, i, r, s) {
  return (
    (e.value = this.parseMethod(i, r, s)),
    this.finishNode(e, "MethodDefinition")
  );
};
ne.parseClassId = function (e, i) {
  this.type === g.name
    ? ((e.id = this.parseIdent()), i && this.checkLVal(e.id, at, !1))
    : (i === !0 && this.unexpected(), (e.id = null));
};
ne.parseClassSuper = function (e) {
  e.superClass = this.eat(g._extends) ? this.parseExprSubscripts() : null;
};
ne.parseExport = function (e, i) {
  if ((this.next(), this.eat(g.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual("as")
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(i, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual("from"),
      this.type !== g.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, "ExportAllDeclaration")
    );
  if (this.eat(g._default)) {
    this.checkExport(i, "default", this.lastTokStart);
    var r;
    if (this.type === g._function || (r = this.isAsyncFunction())) {
      var s = this.startNode();
      this.next(),
        r && this.next(),
        (e.declaration = this.parseFunction(s, zt | Qn, !1, r));
    } else if (this.type === g._class) {
      var o = this.startNode();
      e.declaration = this.parseClass(o, "nullableID");
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, "ExportDefaultDeclaration");
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === "VariableDeclaration"
        ? this.checkVariableExport(i, e.declaration.declarations)
        : this.checkExport(i, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(i)),
      this.eatContextual("from"))
    )
      this.type !== g.string && this.unexpected(),
        (e.source = this.parseExprAtom());
    else {
      for (var l = 0, m = e.specifiers; l < m.length; l += 1) {
        var x = m[l];
        this.checkUnreserved(x.local), this.checkLocalExport(x.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, "ExportNamedDeclaration");
};
ne.checkExport = function (e, i, r) {
  e &&
    (_i(e, i) && this.raiseRecoverable(r, "Duplicate export '" + i + "'"),
    (e[i] = !0));
};
ne.checkPatternExport = function (e, i) {
  var r = i.type;
  if (r === "Identifier") this.checkExport(e, i.name, i.start);
  else if (r === "ObjectPattern")
    for (var s = 0, o = i.properties; s < o.length; s += 1) {
      var l = o[s];
      this.checkPatternExport(e, l);
    }
  else if (r === "ArrayPattern")
    for (var m = 0, x = i.elements; m < x.length; m += 1) {
      var v = x[m];
      v && this.checkPatternExport(e, v);
    }
  else
    r === "Property"
      ? this.checkPatternExport(e, i.value)
      : r === "AssignmentPattern"
      ? this.checkPatternExport(e, i.left)
      : r === "RestElement"
      ? this.checkPatternExport(e, i.argument)
      : r === "ParenthesizedExpression" &&
        this.checkPatternExport(e, i.expression);
};
ne.checkVariableExport = function (e, i) {
  if (e)
    for (var r = 0, s = i; r < s.length; r += 1) {
      var o = s[r];
      this.checkPatternExport(e, o.id);
    }
};
ne.shouldParseExportStatement = function () {
  return (
    this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
ne.parseExportSpecifiers = function (e) {
  var i = [],
    r = !0;
  for (this.expect(g.braceL); !this.eat(g.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(g.comma), this.afterTrailingComma(g.braceR))) break;
    var s = this.startNode();
    (s.local = this.parseIdent(!0)),
      (s.exported = this.eatContextual("as") ? this.parseIdent(!0) : s.local),
      this.checkExport(e, s.exported.name, s.exported.start),
      i.push(this.finishNode(s, "ExportSpecifier"));
  }
  return i;
};
ne.parseImport = function (e) {
  return (
    this.next(),
    this.type === g.string
      ? ((e.specifiers = Ja), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual("from"),
        (e.source =
          this.type === g.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, "ImportDeclaration")
  );
};
ne.parseImportSpecifiers = function () {
  var e = [],
    i = !0;
  if (this.type === g.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, at),
      e.push(this.finishNode(r, "ImportDefaultSpecifier")),
      !this.eat(g.comma))
    )
      return e;
  }
  if (this.type === g.star) {
    var s = this.startNode();
    return (
      this.next(),
      this.expectContextual("as"),
      (s.local = this.parseIdent()),
      this.checkLVal(s.local, at),
      e.push(this.finishNode(s, "ImportNamespaceSpecifier")),
      e
    );
  }
  for (this.expect(g.braceL); !this.eat(g.braceR); ) {
    if (i) i = !1;
    else if ((this.expect(g.comma), this.afterTrailingComma(g.braceR))) break;
    var o = this.startNode();
    (o.imported = this.parseIdent(!0)),
      this.eatContextual("as")
        ? (o.local = this.parseIdent())
        : (this.checkUnreserved(o.imported), (o.local = o.imported)),
      this.checkLVal(o.local, at),
      e.push(this.finishNode(o, "ImportSpecifier"));
  }
  return e;
};
ne.adaptDirectivePrologue = function (e) {
  for (var i = 0; i < e.length && this.isDirectiveCandidate(e[i]); ++i)
    e[i].directive = e[i].expression.raw.slice(1, -1);
};
ne.isDirectiveCandidate = function (e) {
  return (
    e.type === "ExpressionStatement" &&
    e.expression.type === "Literal" &&
    typeof e.expression.value == "string" &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var ot = Te.prototype;
ot.toAssignable = function (e, i, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case "Identifier":
        this.inAsync &&
          e.name === "await" &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function"
          );
        break;
      case "ObjectPattern":
      case "ArrayPattern":
      case "RestElement":
        break;
      case "ObjectExpression":
        (e.type = "ObjectPattern"), r && this.checkPatternErrors(r, !0);
        for (var s = 0, o = e.properties; s < o.length; s += 1) {
          var l = o[s];
          this.toAssignable(l, i),
            l.type === "RestElement" &&
              (l.argument.type === "ArrayPattern" ||
                l.argument.type === "ObjectPattern") &&
              this.raise(l.argument.start, "Unexpected token");
        }
        break;
      case "Property":
        e.kind !== "init" &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter"
          ),
          this.toAssignable(e.value, i);
        break;
      case "ArrayExpression":
        (e.type = "ArrayPattern"),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, i);
        break;
      case "SpreadElement":
        (e.type = "RestElement"),
          this.toAssignable(e.argument, i),
          e.argument.type === "AssignmentPattern" &&
            this.raise(
              e.argument.start,
              "Rest elements cannot have a default value"
            );
        break;
      case "AssignmentExpression":
        e.operator !== "=" &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value."
          ),
          (e.type = "AssignmentPattern"),
          delete e.operator,
          this.toAssignable(e.left, i);
      case "AssignmentPattern":
        break;
      case "ParenthesizedExpression":
        this.toAssignable(e.expression, i, r);
        break;
      case "ChainExpression":
        this.raiseRecoverable(
          e.start,
          "Optional chaining cannot appear in left-hand side"
        );
        break;
      case "MemberExpression":
        if (!i) break;
      default:
        this.raise(e.start, "Assigning to rvalue");
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
ot.toAssignableList = function (e, i) {
  for (var r = e.length, s = 0; s < r; s++) {
    var o = e[s];
    o && this.toAssignable(o, i);
  }
  if (r) {
    var l = e[r - 1];
    this.options.ecmaVersion === 6 &&
      i &&
      l &&
      l.type === "RestElement" &&
      l.argument.type !== "Identifier" &&
      this.unexpected(l.argument.start);
  }
  return e;
};
ot.parseSpread = function (e) {
  var i = this.startNode();
  return (
    this.next(),
    (i.argument = this.parseMaybeAssign(!1, e)),
    this.finishNode(i, "SpreadElement")
  );
};
ot.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== g.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, "RestElement")
  );
};
ot.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case g.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(g.bracketR, !0, !0)),
          this.finishNode(e, "ArrayPattern")
        );
      case g.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
ot.parseBindingList = function (e, i, r) {
  for (var s = [], o = !0; !this.eat(e); )
    if ((o ? (o = !1) : this.expect(g.comma), i && this.type === g.comma))
      s.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === g.ellipsis) {
        var l = this.parseRestBinding();
        this.parseBindingListItem(l),
          s.push(l),
          this.type === g.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            ),
          this.expect(e);
        break;
      } else {
        var m = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(m), s.push(m);
      }
    }
  return s;
};
ot.parseBindingListItem = function (e) {
  return e;
};
ot.parseMaybeDefault = function (e, i, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(g.eq))
  )
    return r;
  var s = this.startNodeAt(e, i);
  return (
    (s.left = r),
    (s.right = this.parseMaybeAssign()),
    this.finishNode(s, "AssignmentPattern")
  );
};
ot.checkLVal = function (e, i, r) {
  switch ((i === void 0 && (i = on), e.type)) {
    case "Identifier":
      i === at &&
        e.name === "let" &&
        this.raiseRecoverable(
          e.start,
          "let is disallowed as a lexically bound name"
        ),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (i ? "Binding " : "Assigning to ") + e.name + " in strict mode"
          ),
        r &&
          (_i(r, e.name) &&
            this.raiseRecoverable(e.start, "Argument name clash"),
          (r[e.name] = !0)),
        i !== on && i !== Hn && this.declareName(e.name, i, e.start);
      break;
    case "ChainExpression":
      this.raiseRecoverable(
        e.start,
        "Optional chaining cannot appear in left-hand side"
      );
      break;
    case "MemberExpression":
      i && this.raiseRecoverable(e.start, "Binding member expression");
      break;
    case "ObjectPattern":
      for (var s = 0, o = e.properties; s < o.length; s += 1) {
        var l = o[s];
        this.checkLVal(l, i, r);
      }
      break;
    case "Property":
      this.checkLVal(e.value, i, r);
      break;
    case "ArrayPattern":
      for (var m = 0, x = e.elements; m < x.length; m += 1) {
        var v = x[m];
        v && this.checkLVal(v, i, r);
      }
      break;
    case "AssignmentPattern":
      this.checkLVal(e.left, i, r);
      break;
    case "RestElement":
      this.checkLVal(e.argument, i, r);
      break;
    case "ParenthesizedExpression":
      this.checkLVal(e.expression, i, r);
      break;
    default:
      this.raise(e.start, (i ? "Binding" : "Assigning to") + " rvalue");
  }
};
var ae = Te.prototype;
ae.checkPropClash = function (e, i, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === "SpreadElement") &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var s = e.key,
      o;
    switch (s.type) {
      case "Identifier":
        o = s.name;
        break;
      case "Literal":
        o = String(s.value);
        break;
      default:
        return;
    }
    var l = e.kind;
    if (this.options.ecmaVersion >= 6) {
      o === "__proto__" &&
        l === "init" &&
        (i.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = s.start)
            : this.raiseRecoverable(
                s.start,
                "Redefinition of __proto__ property"
              )),
        (i.proto = !0));
      return;
    }
    o = "$" + o;
    var m = i[o];
    if (m) {
      var x;
      l === "init"
        ? (x = (this.strict && m.init) || m.get || m.set)
        : (x = m.init || m[l]),
        x && this.raiseRecoverable(s.start, "Redefinition of property");
    } else m = i[o] = { init: !1, get: !1, set: !1 };
    m[l] = !0;
  }
};
ae.parseExpression = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseMaybeAssign(e, i);
  if (this.type === g.comma) {
    var l = this.startNodeAt(r, s);
    for (l.expressions = [o]; this.eat(g.comma); )
      l.expressions.push(this.parseMaybeAssign(e, i));
    return this.finishNode(l, "SequenceExpression");
  }
  return o;
};
ae.parseMaybeAssign = function (e, i, r) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var s = !1,
    o = -1,
    l = -1;
  i
    ? ((o = i.parenthesizedAssign),
      (l = i.trailingComma),
      (i.parenthesizedAssign = i.trailingComma = -1))
    : ((i = new Ei()), (s = !0));
  var m = this.start,
    x = this.startLoc;
  (this.type === g.parenL || this.type === g.name) &&
    (this.potentialArrowAt = this.start);
  var v = this.parseMaybeConditional(e, i);
  if ((r && (v = r.call(this, v, m, x)), this.type.isAssign)) {
    var C = this.startNodeAt(m, x);
    return (
      (C.operator = this.value),
      (C.left = this.type === g.eq ? this.toAssignable(v, !1, i) : v),
      s || (i.parenthesizedAssign = i.trailingComma = i.doubleProto = -1),
      i.shorthandAssign >= C.left.start && (i.shorthandAssign = -1),
      this.checkLVal(v),
      this.next(),
      (C.right = this.parseMaybeAssign(e)),
      this.finishNode(C, "AssignmentExpression")
    );
  } else s && this.checkExpressionErrors(i, !0);
  return (
    o > -1 && (i.parenthesizedAssign = o), l > -1 && (i.trailingComma = l), v
  );
};
ae.parseMaybeConditional = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseExprOps(e, i);
  if (this.checkExpressionErrors(i)) return o;
  if (this.eat(g.question)) {
    var l = this.startNodeAt(r, s);
    return (
      (l.test = o),
      (l.consequent = this.parseMaybeAssign()),
      this.expect(g.colon),
      (l.alternate = this.parseMaybeAssign(e)),
      this.finishNode(l, "ConditionalExpression")
    );
  }
  return o;
};
ae.parseExprOps = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o = this.parseMaybeUnary(i, !1);
  return this.checkExpressionErrors(i) ||
    (o.start === r && o.type === "ArrowFunctionExpression")
    ? o
    : this.parseExprOp(o, r, s, -1, e);
};
ae.parseExprOp = function (e, i, r, s, o) {
  var l = this.type.binop;
  if (l != null && (!o || this.type !== g._in) && l > s) {
    var m = this.type === g.logicalOR || this.type === g.logicalAND,
      x = this.type === g.coalesce;
    x && (l = g.logicalAND.binop);
    var v = this.value;
    this.next();
    var C = this.start,
      _ = this.startLoc,
      A = this.parseExprOp(this.parseMaybeUnary(null, !1), C, _, l, o),
      I = this.buildBinary(i, r, e, A, v, m || x);
    return (
      ((m && this.type === g.coalesce) ||
        (x && (this.type === g.logicalOR || this.type === g.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
        ),
      this.parseExprOp(I, i, r, s, o)
    );
  }
  return e;
};
ae.buildBinary = function (e, i, r, s, o, l) {
  var m = this.startNodeAt(e, i);
  return (
    (m.left = r),
    (m.operator = o),
    (m.right = s),
    this.finishNode(m, l ? "LogicalExpression" : "BinaryExpression")
  );
};
ae.parseMaybeUnary = function (e, i) {
  var r = this.start,
    s = this.startLoc,
    o;
  if (
    this.isContextual("await") &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (o = this.parseAwait()), (i = !0);
  else if (this.type.prefix) {
    var l = this.startNode(),
      m = this.type === g.incDec;
    (l.operator = this.value),
      (l.prefix = !0),
      this.next(),
      (l.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      m
        ? this.checkLVal(l.argument)
        : this.strict &&
          l.operator === "delete" &&
          l.argument.type === "Identifier"
        ? this.raiseRecoverable(
            l.start,
            "Deleting local variable in strict mode"
          )
        : (i = !0),
      (o = this.finishNode(l, m ? "UpdateExpression" : "UnaryExpression"));
  } else {
    if (((o = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
      return o;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var x = this.startNodeAt(r, s);
      (x.operator = this.value),
        (x.prefix = !1),
        (x.argument = o),
        this.checkLVal(o),
        this.next(),
        (o = this.finishNode(x, "UpdateExpression"));
    }
  }
  return !i && this.eat(g.starstar)
    ? this.buildBinary(r, s, o, this.parseMaybeUnary(null, !1), "**", !1)
    : o;
};
ae.parseExprSubscripts = function (e) {
  var i = this.start,
    r = this.startLoc,
    s = this.parseExprAtom(e);
  if (
    s.type === "ArrowFunctionExpression" &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
  )
    return s;
  var o = this.parseSubscripts(s, i, r);
  return (
    e &&
      o.type === "MemberExpression" &&
      (e.parenthesizedAssign >= o.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= o.start && (e.parenthesizedBind = -1)),
    o
  );
};
ae.parseSubscripts = function (e, i, r, s) {
  for (
    var o =
        this.options.ecmaVersion >= 8 &&
        e.type === "Identifier" &&
        e.name === "async" &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      l = !1;
    ;

  ) {
    var m = this.parseSubscript(e, i, r, s, o, l);
    if (
      (m.optional && (l = !0), m === e || m.type === "ArrowFunctionExpression")
    ) {
      if (l) {
        var x = this.startNodeAt(i, r);
        (x.expression = m), (m = this.finishNode(x, "ChainExpression"));
      }
      return m;
    }
    e = m;
  }
};
ae.parseSubscript = function (e, i, r, s, o, l) {
  var m = this.options.ecmaVersion >= 11,
    x = m && this.eat(g.questionDot);
  s &&
    x &&
    this.raise(
      this.lastTokStart,
      "Optional chaining cannot appear in the callee of new expressions"
    );
  var v = this.eat(g.bracketL);
  if (
    v ||
    (x && this.type !== g.parenL && this.type !== g.backQuote) ||
    this.eat(g.dot)
  ) {
    var C = this.startNodeAt(i, r);
    (C.object = e),
      (C.property = v
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== "never")),
      (C.computed = !!v),
      v && this.expect(g.bracketR),
      m && (C.optional = x),
      (e = this.finishNode(C, "MemberExpression"));
  } else if (!s && this.eat(g.parenL)) {
    var _ = new Ei(),
      A = this.yieldPos,
      I = this.awaitPos,
      k = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var P = this.parseExprList(g.parenR, this.options.ecmaVersion >= 8, !1, _);
    if (o && !x && !this.canInsertSemicolon() && this.eat(g.arrow))
      return (
        this.checkPatternErrors(_, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function"
          ),
        (this.yieldPos = A),
        (this.awaitPos = I),
        (this.awaitIdentPos = k),
        this.parseArrowExpression(this.startNodeAt(i, r), P, !0)
      );
    this.checkExpressionErrors(_, !0),
      (this.yieldPos = A || this.yieldPos),
      (this.awaitPos = I || this.awaitPos),
      (this.awaitIdentPos = k || this.awaitIdentPos);
    var E = this.startNodeAt(i, r);
    (E.callee = e),
      (E.arguments = P),
      m && (E.optional = x),
      (e = this.finishNode(E, "CallExpression"));
  } else if (this.type === g.backQuote) {
    (x || l) &&
      this.raise(
        this.start,
        "Optional chaining cannot appear in the tag of tagged template expressions"
      );
    var R = this.startNodeAt(i, r);
    (R.tag = e),
      (R.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(R, "TaggedTemplateExpression"));
  }
  return e;
};
ae.parseExprAtom = function (e) {
  this.type === g.slash && this.readRegexp();
  var i,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case g._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (i = this.startNode()),
        this.next(),
        this.type === g.parenL &&
          !this.allowDirectSuper &&
          this.raise(i.start, "super() call outside constructor of a subclass"),
        this.type !== g.dot &&
          this.type !== g.bracketL &&
          this.type !== g.parenL &&
          this.unexpected(),
        this.finishNode(i, "Super")
      );
    case g._this:
      return (
        (i = this.startNode()),
        this.next(),
        this.finishNode(i, "ThisExpression")
      );
    case g.name:
      var s = this.start,
        o = this.startLoc,
        l = this.containsEsc,
        m = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !l &&
        m.name === "async" &&
        !this.canInsertSemicolon() &&
        this.eat(g._function)
      )
        return this.parseFunction(this.startNodeAt(s, o), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(g.arrow))
          return this.parseArrowExpression(this.startNodeAt(s, o), [m], !1);
        if (
          this.options.ecmaVersion >= 8 &&
          m.name === "async" &&
          this.type === g.name &&
          !l
        )
          return (
            (m = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(g.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(s, o), [m], !0)
          );
      }
      return m;
    case g.regexp:
      var x = this.value;
      return (
        (i = this.parseLiteral(x.value)),
        (i.regex = { pattern: x.pattern, flags: x.flags }),
        i
      );
    case g.num:
    case g.string:
      return this.parseLiteral(this.value);
    case g._null:
    case g._true:
    case g._false:
      return (
        (i = this.startNode()),
        (i.value = this.type === g._null ? null : this.type === g._true),
        (i.raw = this.type.keyword),
        this.next(),
        this.finishNode(i, "Literal")
      );
    case g.parenL:
      var v = this.start,
        C = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(C) &&
            (e.parenthesizedAssign = v),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = v)),
        C
      );
    case g.bracketL:
      return (
        (i = this.startNode()),
        this.next(),
        (i.elements = this.parseExprList(g.bracketR, !0, !0, e)),
        this.finishNode(i, "ArrayExpression")
      );
    case g.braceL:
      return this.parseObj(!1, e);
    case g._function:
      return (i = this.startNode()), this.next(), this.parseFunction(i, 0);
    case g._class:
      return this.parseClass(this.startNode(), !1);
    case g._new:
      return this.parseNew();
    case g.backQuote:
      return this.parseTemplate();
    case g._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
ae.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword import");
  var i = this.parseIdent(!0);
  switch (this.type) {
    case g.parenL:
      return this.parseDynamicImport(e);
    case g.dot:
      return (e.meta = i), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
ae.parseDynamicImport = function (e) {
  if (
    (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(g.parenR))
  ) {
    var i = this.start;
    this.eat(g.comma) && this.eat(g.parenR)
      ? this.raiseRecoverable(i, "Trailing comma is not allowed in import()")
      : this.unexpected(i);
  }
  return this.finishNode(e, "ImportExpression");
};
ae.parseImportMeta = function (e) {
  this.next();
  var i = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== "meta" &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'"
      ),
    i &&
      this.raiseRecoverable(
        e.start,
        "'import.meta' must not contain escaped characters"
      ),
    this.options.sourceType !== "module" &&
      this.raiseRecoverable(
        e.start,
        "Cannot use 'import.meta' outside a module"
      ),
    this.finishNode(e, "MetaProperty")
  );
};
ae.parseLiteral = function (e) {
  var i = this.startNode();
  return (
    (i.value = e),
    (i.raw = this.input.slice(this.start, this.end)),
    i.raw.charCodeAt(i.raw.length - 1) === 110 &&
      (i.bigint = i.raw.slice(0, -1).replace(/_/g, "")),
    this.next(),
    this.finishNode(i, "Literal")
  );
};
ae.parseParenExpression = function () {
  this.expect(g.parenL);
  var e = this.parseExpression();
  return this.expect(g.parenR), e;
};
ae.parseParenAndDistinguishExpression = function (e) {
  var i = this.start,
    r = this.startLoc,
    s,
    o = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var l = this.start,
      m = this.startLoc,
      x = [],
      v = !0,
      C = !1,
      _ = new Ei(),
      A = this.yieldPos,
      I = this.awaitPos,
      k;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== g.parenR; )
      if (
        (v ? (v = !1) : this.expect(g.comma),
        o && this.afterTrailingComma(g.parenR, !0))
      ) {
        C = !0;
        break;
      } else if (this.type === g.ellipsis) {
        (k = this.start),
          x.push(this.parseParenItem(this.parseRestBinding())),
          this.type === g.comma &&
            this.raise(
              this.start,
              "Comma is not permitted after the rest element"
            );
        break;
      } else x.push(this.parseMaybeAssign(!1, _, this.parseParenItem));
    var P = this.start,
      E = this.startLoc;
    if (
      (this.expect(g.parenR),
      e && !this.canInsertSemicolon() && this.eat(g.arrow))
    )
      return (
        this.checkPatternErrors(_, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = A),
        (this.awaitPos = I),
        this.parseParenArrowList(i, r, x)
      );
    (!x.length || C) && this.unexpected(this.lastTokStart),
      k && this.unexpected(k),
      this.checkExpressionErrors(_, !0),
      (this.yieldPos = A || this.yieldPos),
      (this.awaitPos = I || this.awaitPos),
      x.length > 1
        ? ((s = this.startNodeAt(l, m)),
          (s.expressions = x),
          this.finishNodeAt(s, "SequenceExpression", P, E))
        : (s = x[0]);
  } else s = this.parseParenExpression();
  if (this.options.preserveParens) {
    var R = this.startNodeAt(i, r);
    return (R.expression = s), this.finishNode(R, "ParenthesizedExpression");
  } else return s;
};
ae.parseParenItem = function (e) {
  return e;
};
ae.parseParenArrowList = function (e, i, r) {
  return this.parseArrowExpression(this.startNodeAt(e, i), r);
};
var Ka = [];
ae.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, "Escape sequence in keyword new");
  var e = this.startNode(),
    i = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(g.dot)) {
    e.meta = i;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== "target" &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'"
        ),
      r &&
        this.raiseRecoverable(
          e.start,
          "'new.target' must not contain escaped characters"
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          "'new.target' can only be used in functions"
        ),
      this.finishNode(e, "MetaProperty")
    );
  }
  var s = this.start,
    o = this.startLoc,
    l = this.type === g._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), s, o, !0)),
    l &&
      e.callee.type === "ImportExpression" &&
      this.raise(s, "Cannot use new with import()"),
    this.eat(g.parenL)
      ? (e.arguments = this.parseExprList(
          g.parenR,
          this.options.ecmaVersion >= 8,
          !1
        ))
      : (e.arguments = Ka),
    this.finishNode(e, "NewExpression")
  );
};
ae.parseTemplateElement = function (e) {
  var i = e.isTagged,
    r = this.startNode();
  return (
    this.type === g.invalidTemplate
      ? (i ||
          this.raiseRecoverable(
            this.start,
            "Bad escape sequence in untagged template literal"
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.value,
        }),
    this.next(),
    (r.tail = this.type === g.backQuote),
    this.finishNode(r, "TemplateElement")
  );
};
ae.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var i = e.isTagged;
  i === void 0 && (i = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var s = this.parseTemplateElement({ isTagged: i });
  for (r.quasis = [s]; !s.tail; )
    this.type === g.eof &&
      this.raise(this.pos, "Unterminated template literal"),
      this.expect(g.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(g.braceR),
      r.quasis.push((s = this.parseTemplateElement({ isTagged: i })));
  return this.next(), this.finishNode(r, "TemplateLiteral");
};
ae.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === "Identifier" &&
    e.key.name === "async" &&
    (this.type === g.name ||
      this.type === g.num ||
      this.type === g.string ||
      this.type === g.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === g.star)) &&
    !Qe.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
ae.parseObj = function (e, i) {
  var r = this.startNode(),
    s = !0,
    o = {};
  for (r.properties = [], this.next(); !this.eat(g.braceR); ) {
    if (s) s = !1;
    else if (
      (this.expect(g.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(g.braceR))
    )
      break;
    var l = this.parseProperty(e, i);
    e || this.checkPropClash(l, o, i), r.properties.push(l);
  }
  return this.finishNode(r, e ? "ObjectPattern" : "ObjectExpression");
};
ae.parseProperty = function (e, i) {
  var r = this.startNode(),
    s,
    o,
    l,
    m;
  if (this.options.ecmaVersion >= 9 && this.eat(g.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === g.comma &&
          this.raise(
            this.start,
            "Comma is not permitted after the rest element"
          ),
        this.finishNode(r, "RestElement"))
      : (this.type === g.parenL &&
          i &&
          (i.parenthesizedAssign < 0 && (i.parenthesizedAssign = this.start),
          i.parenthesizedBind < 0 && (i.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, i)),
        this.type === g.comma &&
          i &&
          i.trailingComma < 0 &&
          (i.trailingComma = this.start),
        this.finishNode(r, "SpreadElement"));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || i) && ((l = this.start), (m = this.startLoc)),
    e || (s = this.eat(g.star)));
  var x = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !x && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(r)
      ? ((o = !0),
        (s = this.options.ecmaVersion >= 9 && this.eat(g.star)),
        this.parsePropertyName(r, i))
      : (o = !1),
    this.parsePropertyValue(r, e, s, o, l, m, i, x),
    this.finishNode(r, "Property")
  );
};
ae.parsePropertyValue = function (e, i, r, s, o, l, m, x) {
  if (
    ((r || s) && this.type === g.colon && this.unexpected(), this.eat(g.colon))
  )
    (e.value = i
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, m)),
      (e.kind = "init");
  else if (this.options.ecmaVersion >= 6 && this.type === g.parenL)
    i && this.unexpected(),
      (e.kind = "init"),
      (e.method = !0),
      (e.value = this.parseMethod(r, s));
  else if (
    !i &&
    !x &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === "Identifier" &&
    (e.key.name === "get" || e.key.name === "set") &&
    this.type !== g.comma &&
    this.type !== g.braceR &&
    this.type !== g.eq
  ) {
    (r || s) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var v = e.kind === "get" ? 0 : 1;
    if (e.value.params.length !== v) {
      var C = e.value.start;
      e.kind === "get"
        ? this.raiseRecoverable(C, "getter should have no params")
        : this.raiseRecoverable(C, "setter should have exactly one param");
    } else
      e.kind === "set" &&
        e.value.params[0].type === "RestElement" &&
        this.raiseRecoverable(
          e.value.params[0].start,
          "Setter cannot use rest params"
        );
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier"
      ? ((r || s) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === "await" &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = o),
        (e.kind = "init"),
        i
          ? (e.value = this.parseMaybeDefault(o, l, e.key))
          : this.type === g.eq && m
          ? (m.shorthandAssign < 0 && (m.shorthandAssign = this.start),
            (e.value = this.parseMaybeDefault(o, l, e.key)))
          : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
ae.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(g.bracketL))
      return (
        (e.computed = !0),
        (e.key = this.parseMaybeAssign()),
        this.expect(g.bracketR),
        e.key
      );
    e.computed = !1;
  }
  return (e.key =
    this.type === g.num || this.type === g.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== "never"));
};
ae.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
ae.parseMethod = function (e, i, r) {
  var s = this.startNode(),
    o = this.yieldPos,
    l = this.awaitPos,
    m = this.awaitIdentPos;
  return (
    this.initFunction(s),
    this.options.ecmaVersion >= 6 && (s.generator = e),
    this.options.ecmaVersion >= 8 && (s.async = !!i),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(pr(i, s.generator) | Un | (r ? Gn : 0)),
    this.expect(g.parenL),
    (s.params = this.parseBindingList(
      g.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(s, !1, !0),
    (this.yieldPos = o),
    (this.awaitPos = l),
    (this.awaitIdentPos = m),
    this.finishNode(s, "FunctionExpression")
  );
};
ae.parseArrowExpression = function (e, i, r) {
  var s = this.yieldPos,
    o = this.awaitPos,
    l = this.awaitIdentPos;
  return (
    this.enterScope(pr(r, !1) | jn),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(i, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = s),
    (this.awaitPos = o),
    (this.awaitIdentPos = l),
    this.finishNode(e, "ArrowFunctionExpression")
  );
};
ae.parseFunctionBody = function (e, i, r) {
  var s = i && this.type !== g.braceL,
    o = this.strict,
    l = !1;
  if (s)
    (e.body = this.parseMaybeAssign()),
      (e.expression = !0),
      this.checkParams(e, !1);
  else {
    var m = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!o || m) &&
      ((l = this.strictDirective(this.end)),
      l &&
        m &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list"
        ));
    var x = this.labels;
    (this.labels = []),
      l && (this.strict = !0),
      this.checkParams(
        e,
        !o && !l && !i && !r && this.isSimpleParamList(e.params)
      ),
      this.strict && e.id && this.checkLVal(e.id, Hn),
      (e.body = this.parseBlock(!1, void 0, l && !o)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = x);
  }
  this.exitScope();
};
ae.isSimpleParamList = function (e) {
  for (var i = 0, r = e; i < r.length; i += 1) {
    var s = r[i];
    if (s.type !== "Identifier") return !1;
  }
  return !0;
};
ae.checkParams = function (e, i) {
  for (var r = {}, s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    this.checkLVal(l, fr, i ? null : r);
  }
};
ae.parseExprList = function (e, i, r, s) {
  for (var o = [], l = !0; !this.eat(e); ) {
    if (l) l = !1;
    else if ((this.expect(g.comma), i && this.afterTrailingComma(e))) break;
    var m = void 0;
    r && this.type === g.comma
      ? (m = null)
      : this.type === g.ellipsis
      ? ((m = this.parseSpread(s)),
        s &&
          this.type === g.comma &&
          s.trailingComma < 0 &&
          (s.trailingComma = this.start))
      : (m = this.parseMaybeAssign(!1, s)),
      o.push(m);
  }
  return o;
};
ae.checkUnreserved = function (e) {
  var i = e.start,
    r = e.end,
    s = e.name;
  if (
    (this.inGenerator &&
      s === "yield" &&
      this.raiseRecoverable(
        i,
        "Cannot use 'yield' as identifier inside a generator"
      ),
    this.inAsync &&
      s === "await" &&
      this.raiseRecoverable(
        i,
        "Cannot use 'await' as identifier inside an async function"
      ),
    this.keywords.test(s) && this.raise(i, "Unexpected keyword '" + s + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(i, r).indexOf("\\") !== -1
    ))
  ) {
    var o = this.strict ? this.reservedWordsStrict : this.reservedWords;
    o.test(s) &&
      (!this.inAsync &&
        s === "await" &&
        this.raiseRecoverable(
          i,
          "Cannot use keyword 'await' outside an async function"
        ),
      this.raiseRecoverable(i, "The keyword '" + s + "' is reserved"));
  }
};
ae.parseIdent = function (e, i) {
  var r = this.startNode();
  return (
    this.type === g.name
      ? (r.name = this.value)
      : this.type.keyword
      ? ((r.name = this.type.keyword),
        (r.name === "class" || r.name === "function") &&
          (this.lastTokEnd !== this.lastTokStart + 1 ||
            this.input.charCodeAt(this.lastTokStart) !== 46) &&
          this.context.pop())
      : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, "Identifier"),
    e ||
      (this.checkUnreserved(r),
      r.name === "await" &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
ae.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var i = this.startNode();
  return (
    this.next(),
    this.type === g.semi ||
    this.canInsertSemicolon() ||
    (this.type !== g.star && !this.type.startsExpr)
      ? ((i.delegate = !1), (i.argument = null))
      : ((i.delegate = this.eat(g.star)),
        (i.argument = this.parseMaybeAssign(e))),
    this.finishNode(i, "YieldExpression")
  );
};
ae.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, "AwaitExpression")
  );
};
var vi = Te.prototype;
vi.raise = function (e, i) {
  var r = Mn(this.input, e);
  i += " (" + r.line + ":" + r.column + ")";
  var s = new SyntaxError(i);
  throw ((s.pos = e), (s.loc = r), (s.raisedAt = this.pos), s);
};
vi.raiseRecoverable = vi.raise;
vi.curPosition = function () {
  if (this.options.locations)
    return new Jt(this.curLine, this.pos - this.lineStart);
};
var mt = Te.prototype,
  Ya = function (i) {
    (this.flags = i),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []);
  };
mt.enterScope = function (e) {
  this.scopeStack.push(new Ya(e));
};
mt.exitScope = function () {
  this.scopeStack.pop();
};
mt.treatFunctionsAsVarInScope = function (e) {
  return e.flags & ti || (!this.inModule && e.flags & Kt);
};
mt.declareName = function (e, i, r) {
  var s = !1;
  if (i === at) {
    var o = this.currentScope();
    (s =
      o.lexical.indexOf(e) > -1 ||
      o.functions.indexOf(e) > -1 ||
      o.var.indexOf(e) > -1),
      o.lexical.push(e),
      this.inModule && o.flags & Kt && delete this.undefinedExports[e];
  } else if (i === zn) {
    var l = this.currentScope();
    l.lexical.push(e);
  } else if (i === Wn) {
    var m = this.currentScope();
    this.treatFunctionsAsVar
      ? (s = m.lexical.indexOf(e) > -1)
      : (s = m.lexical.indexOf(e) > -1 || m.var.indexOf(e) > -1),
      m.functions.push(e);
  } else
    for (var x = this.scopeStack.length - 1; x >= 0; --x) {
      var v = this.scopeStack[x];
      if (
        (v.lexical.indexOf(e) > -1 && !(v.flags & qn && v.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(v) && v.functions.indexOf(e) > -1)
      ) {
        s = !0;
        break;
      }
      if (
        (v.var.push(e),
        this.inModule && v.flags & Kt && delete this.undefinedExports[e],
        v.flags & cr)
      )
        break;
    }
  s &&
    this.raiseRecoverable(
      r,
      "Identifier '" + e + "' has already been declared"
    );
};
mt.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
mt.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
mt.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & cr) return i;
  }
};
mt.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var i = this.scopeStack[e];
    if (i.flags & cr && !(i.flags & jn)) return i;
  }
};
var mr = function (i, r, s) {
    (this.type = ""),
      (this.start = r),
      (this.end = 0),
      i.options.locations && (this.loc = new Ci(i, s)),
      i.options.directSourceFile &&
        (this.sourceFile = i.options.directSourceFile),
      i.options.ranges && (this.range = [r, 0]);
  },
  wi = Te.prototype;
wi.startNode = function () {
  return new mr(this, this.start, this.startLoc);
};
wi.startNodeAt = function (e, i) {
  return new mr(this, e, i);
};
function Xn(e, i, r, s) {
  return (
    (e.type = i),
    (e.end = r),
    this.options.locations && (e.loc.end = s),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
wi.finishNode = function (e, i) {
  return Xn.call(this, e, i, this.lastTokEnd, this.lastTokEndLoc);
};
wi.finishNodeAt = function (e, i, r, s) {
  return Xn.call(this, e, i, r, s);
};
var Ke = function (i, r, s, o, l) {
    (this.token = i),
      (this.isExpr = !!r),
      (this.preserveSpace = !!s),
      (this.override = o),
      (this.generator = !!l);
  },
  Ie = {
    b_stat: new Ke("{", !1),
    b_expr: new Ke("{", !0),
    b_tmpl: new Ke("${", !1),
    p_stat: new Ke("(", !1),
    p_expr: new Ke("(", !0),
    q_tmpl: new Ke("`", !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new Ke("function", !1),
    f_expr: new Ke("function", !0),
    f_expr_gen: new Ke("function", !0, !1, null, !0),
    f_gen: new Ke("function", !1, !1, null, !0),
  },
  ki = Te.prototype;
ki.initialContext = function () {
  return [Ie.b_stat];
};
ki.braceIsBlock = function (e) {
  var i = this.curContext();
  return i === Ie.f_expr || i === Ie.f_stat
    ? !0
    : e === g.colon && (i === Ie.b_stat || i === Ie.b_expr)
    ? !i.isExpr
    : e === g._return || (e === g.name && this.exprAllowed)
    ? Qe.test(this.input.slice(this.lastTokEnd, this.start))
    : e === g._else ||
      e === g.semi ||
      e === g.eof ||
      e === g.parenR ||
      e === g.arrow
    ? !0
    : e === g.braceL
    ? i === Ie.b_stat
    : e === g._var || e === g._const || e === g.name
    ? !1
    : !this.exprAllowed;
};
ki.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var i = this.context[e];
    if (i.token === "function") return i.generator;
  }
  return !1;
};
ki.updateContext = function (e) {
  var i,
    r = this.type;
  r.keyword && e === g.dot
    ? (this.exprAllowed = !1)
    : (i = r.updateContext)
    ? i.call(this, e)
    : (this.exprAllowed = r.beforeExpr);
};
g.parenR.updateContext = g.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === Ie.b_stat &&
    this.curContext().token === "function" &&
    (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
g.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? Ie.b_stat : Ie.b_expr),
    (this.exprAllowed = !0);
};
g.dollarBraceL.updateContext = function () {
  this.context.push(Ie.b_tmpl), (this.exprAllowed = !0);
};
g.parenL.updateContext = function (e) {
  var i = e === g._if || e === g._for || e === g._with || e === g._while;
  this.context.push(i ? Ie.p_stat : Ie.p_expr), (this.exprAllowed = !0);
};
g.incDec.updateContext = function () {};
g._function.updateContext = g._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== g.semi &&
  e !== g._else &&
  !(
    e === g._return && Qe.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((e === g.colon || e === g.braceL) && this.curContext() === Ie.b_stat)
    ? this.context.push(Ie.f_expr)
    : this.context.push(Ie.f_stat),
    (this.exprAllowed = !1);
};
g.backQuote.updateContext = function () {
  this.curContext() === Ie.q_tmpl
    ? this.context.pop()
    : this.context.push(Ie.q_tmpl),
    (this.exprAllowed = !1);
};
g.star.updateContext = function (e) {
  if (e === g._function) {
    var i = this.context.length - 1;
    this.context[i] === Ie.f_expr
      ? (this.context[i] = Ie.f_expr_gen)
      : (this.context[i] = Ie.f_gen);
  }
  this.exprAllowed = !0;
};
g.name.updateContext = function (e) {
  var i = !1;
  this.options.ecmaVersion >= 6 &&
    e !== g.dot &&
    ((this.value === "of" && !this.exprAllowed) ||
      (this.value === "yield" && this.inGeneratorContext())) &&
    (i = !0),
    (this.exprAllowed = i);
};
var Jn =
    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
  Kn = Jn + " Extended_Pictographic",
  $a = Kn,
  Za = { 9: Jn, 10: Kn, 11: $a },
  un =
    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
  Yn =
    "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
  $n =
    Yn +
    " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
  eo =
    $n +
    " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
  to = { 9: Yn, 10: $n, 11: eo },
  Zn = {};
function gr(e) {
  var i = (Zn[e] = {
    binary: bt(Za[e] + " " + un),
    nonBinary: { General_Category: bt(un), Script: bt(to[e]) },
  });
  (i.nonBinary.Script_Extensions = i.nonBinary.Script),
    (i.nonBinary.gc = i.nonBinary.General_Category),
    (i.nonBinary.sc = i.nonBinary.Script),
    (i.nonBinary.scx = i.nonBinary.Script_Extensions);
}
gr(9);
gr(10);
gr(11);
var $ = Te.prototype,
  ut = function (i) {
    (this.parser = i),
      (this.validFlags =
        "gim" +
        (i.options.ecmaVersion >= 6 ? "uy" : "") +
        (i.options.ecmaVersion >= 9 ? "s" : "")),
      (this.unicodeProperties =
        Zn[i.options.ecmaVersion >= 11 ? 11 : i.options.ecmaVersion]),
      (this.source = ""),
      (this.flags = ""),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ""),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
ut.prototype.reset = function (i, r, s) {
  var o = s.indexOf("u") !== -1;
  (this.start = i | 0),
    (this.source = r + ""),
    (this.flags = s),
    (this.switchU = o && this.parser.options.ecmaVersion >= 6),
    (this.switchN = o && this.parser.options.ecmaVersion >= 9);
};
ut.prototype.raise = function (i) {
  this.parser.raiseRecoverable(
    this.start,
    "Invalid regular expression: /" + this.source + "/: " + i
  );
};
ut.prototype.at = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    o = s.length;
  if (i >= o) return -1;
  var l = s.charCodeAt(i);
  if (!(r || this.switchU) || l <= 55295 || l >= 57344 || i + 1 >= o) return l;
  var m = s.charCodeAt(i + 1);
  return m >= 56320 && m <= 57343 ? (l << 10) + m - 56613888 : l;
};
ut.prototype.nextIndex = function (i, r) {
  r === void 0 && (r = !1);
  var s = this.source,
    o = s.length;
  if (i >= o) return o;
  var l = s.charCodeAt(i),
    m;
  return !(r || this.switchU) ||
    l <= 55295 ||
    l >= 57344 ||
    i + 1 >= o ||
    (m = s.charCodeAt(i + 1)) < 56320 ||
    m > 57343
    ? i + 1
    : i + 2;
};
ut.prototype.current = function (i) {
  return i === void 0 && (i = !1), this.at(this.pos, i);
};
ut.prototype.lookahead = function (i) {
  return i === void 0 && (i = !1), this.at(this.nextIndex(this.pos, i), i);
};
ut.prototype.advance = function (i) {
  i === void 0 && (i = !1), (this.pos = this.nextIndex(this.pos, i));
};
ut.prototype.eat = function (i, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === i ? (this.advance(r), !0) : !1
  );
};
function yi(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
$.validateRegExpFlags = function (e) {
  for (var i = e.validFlags, r = e.flags, s = 0; s < r.length; s++) {
    var o = r.charAt(s);
    i.indexOf(o) === -1 &&
      this.raise(e.start, "Invalid regular expression flag"),
      r.indexOf(o, s + 1) > -1 &&
        this.raise(e.start, "Duplicate regular expression flag");
  }
};
$.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
$.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ""),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")),
    e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");
  for (var i = 0, r = e.backReferenceNames; i < r.length; i += 1) {
    var s = r[i];
    e.groupNames.indexOf(s) === -1 &&
      e.raise("Invalid named capture referenced");
  }
};
$.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"),
    e.eat(123) && e.raise("Lone quantifier brackets");
};
$.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
$.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise("Invalid quantifier"),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
    ? (this.regexp_eatQuantifier(e), !0)
    : !1;
};
$.regexp_eatAssertion = function (e) {
  var i = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = i;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
    )
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise("Unterminated group"),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = i), !1;
};
$.regexp_eatQuantifier = function (e, i) {
  return (
    i === void 0 && (i = !1),
    this.regexp_eatQuantifierPrefix(e, i) ? (e.eat(63), !0) : !1
  );
};
$.regexp_eatQuantifierPrefix = function (e, i) {
  return (
    e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, i)
  );
};
$.regexp_eatBracedQuantifier = function (e, i) {
  var r = e.pos;
  if (e.eat(123)) {
    var s = 0,
      o = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((s = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (o = e.lastIntValue),
      e.eat(125))
    )
      return (
        o !== -1 &&
          o < s &&
          !i &&
          e.raise("numbers out of order in {} quantifier"),
        !0
      );
    e.switchU && !i && e.raise("Incomplete quantifier"), (e.pos = r);
  }
  return !1;
};
$.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
$.regexp_eatReverseSolidusAtomEscape = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = i;
  }
  return !1;
};
$.regexp_eatUncapturingGroup = function (e) {
  var i = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise("Unterminated group");
    }
    e.pos = i;
  }
  return !1;
};
$.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise("Invalid group"),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise("Unterminated group");
  }
  return !1;
};
$.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
$.regexp_eatInvalidBracedQuantifier = function (e) {
  return (
    this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1
  );
};
$.regexp_eatSyntaxCharacter = function (e) {
  var i = e.current();
  return es(i) ? ((e.lastIntValue = i), e.advance(), !0) : !1;
};
function es(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
$.regexp_eatPatternCharacters = function (e) {
  for (var i = e.pos, r = 0; (r = e.current()) !== -1 && !es(r); ) e.advance();
  return e.pos !== i;
};
$.regexp_eatExtendedPatternCharacter = function (e) {
  var i = e.current();
  return i !== -1 &&
    i !== 36 &&
    !(i >= 40 && i <= 43) &&
    i !== 46 &&
    i !== 63 &&
    i !== 91 &&
    i !== 94 &&
    i !== 124
    ? (e.advance(), !0)
    : !1;
};
$.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 &&
        e.raise("Duplicate capture group name"),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise("Invalid group");
  }
};
$.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ""), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise("Invalid capture group name");
  }
  return !1;
};
$.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(e))) {
    for (
      e.lastStringValue += yi(e.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(e);

    )
      e.lastStringValue += yi(e.lastIntValue);
    return !0;
  }
  return !1;
};
$.regexp_eatRegExpIdentifierStart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    io(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function io(e) {
  return ft(e, !0) || e === 36 || e === 95;
}
$.regexp_eatRegExpIdentifierPart = function (e) {
  var i = e.pos,
    r = this.options.ecmaVersion >= 11,
    s = e.current(r);
  return (
    e.advance(r),
    s === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (s = e.lastIntValue),
    ro(s) ? ((e.lastIntValue = s), !0) : ((e.pos = i), !1)
  );
};
function ro(e) {
  return Ot(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
$.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise("Invalid unicode escape"),
        e.raise("Invalid escape")),
      !1);
};
$.regexp_eatBackReference = function (e) {
  var i = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = i;
  }
  return !1;
};
$.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise("Invalid named reference");
  }
  return !1;
};
$.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
$.regexp_eatCControlLetter = function (e) {
  var i = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = i;
  }
  return !1;
};
$.regexp_eatZero = function (e) {
  return e.current() === 48 && !Ai(e.lookahead())
    ? ((e.lastIntValue = 0), e.advance(), !0)
    : !1;
};
$.regexp_eatControlEscape = function (e) {
  var i = e.current();
  return i === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : i === 110
    ? ((e.lastIntValue = 10), e.advance(), !0)
    : i === 118
    ? ((e.lastIntValue = 11), e.advance(), !0)
    : i === 102
    ? ((e.lastIntValue = 12), e.advance(), !0)
    : i === 114
    ? ((e.lastIntValue = 13), e.advance(), !0)
    : !1;
};
$.regexp_eatControlLetter = function (e) {
  var i = e.current();
  return ts(i) ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
function ts(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
$.regexp_eatRegExpUnicodeEscapeSequence = function (e, i) {
  i === void 0 && (i = !1);
  var r = e.pos,
    s = i || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var o = e.lastIntValue;
      if (s && o >= 55296 && o <= 56319) {
        var l = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var m = e.lastIntValue;
          if (m >= 56320 && m <= 57343)
            return (
              (e.lastIntValue = (o - 55296) * 1024 + (m - 56320) + 65536), !0
            );
        }
        (e.pos = l), (e.lastIntValue = o);
      }
      return !0;
    }
    if (
      s &&
      e.eat(123) &&
      this.regexp_eatHexDigits(e) &&
      e.eat(125) &&
      no(e.lastIntValue)
    )
      return !0;
    s && e.raise("Invalid unicode escape"), (e.pos = r);
  }
  return !1;
};
function no(e) {
  return e >= 0 && e <= 1114111;
}
$.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e)
      ? !0
      : e.eat(47)
      ? ((e.lastIntValue = 47), !0)
      : !1;
  var i = e.current();
  return i !== 99 && (!e.switchN || i !== 107)
    ? ((e.lastIntValue = i), e.advance(), !0)
    : !1;
};
$.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var i = e.current();
  if (i >= 49 && i <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (i - 48)), e.advance();
    while ((i = e.current()) >= 48 && i <= 57);
    return !0;
  }
  return !1;
};
$.regexp_eatCharacterClassEscape = function (e) {
  var i = e.current();
  if (so(i)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (i === 80 || i === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(e) &&
        e.eat(125))
    )
      return !0;
    e.raise("Invalid property name");
  }
  return !1;
};
function so(e) {
  return (
    e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
  );
}
$.regexp_eatUnicodePropertyValueExpression = function (e) {
  var i = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var s = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, s), !0;
    }
  }
  if (((e.pos = i), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var o = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, o), !0;
  }
  return !1;
};
$.regexp_validateUnicodePropertyNameAndValue = function (e, i, r) {
  _i(e.unicodeProperties.nonBinary, i) || e.raise("Invalid property name"),
    e.unicodeProperties.nonBinary[i].test(r) ||
      e.raise("Invalid property value");
};
$.regexp_validateUnicodePropertyNameOrValue = function (e, i) {
  e.unicodeProperties.binary.test(i) || e.raise("Invalid property name");
};
$.regexp_eatUnicodePropertyName = function (e) {
  var i = 0;
  for (e.lastStringValue = ""; is((i = e.current())); )
    (e.lastStringValue += yi(i)), e.advance();
  return e.lastStringValue !== "";
};
function is(e) {
  return ts(e) || e === 95;
}
$.regexp_eatUnicodePropertyValue = function (e) {
  var i = 0;
  for (e.lastStringValue = ""; ao((i = e.current())); )
    (e.lastStringValue += yi(i)), e.advance();
  return e.lastStringValue !== "";
};
function ao(e) {
  return is(e) || Ai(e);
}
$.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
$.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise("Unterminated character class");
  }
  return !1;
};
$.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var i = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (i === -1 || r === -1) && e.raise("Invalid character class"),
        i !== -1 &&
          r !== -1 &&
          i > r &&
          e.raise("Range out of order in character class");
    }
  }
};
$.regexp_eatClassAtom = function (e) {
  var i = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || ss(r)) && e.raise("Invalid class escape"),
        e.raise("Invalid escape");
    }
    e.pos = i;
  }
  var s = e.current();
  return s !== 93 ? ((e.lastIntValue = s), e.advance(), !0) : !1;
};
$.regexp_eatClassEscape = function (e) {
  var i = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = i;
  }
  return (
    this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  );
};
$.regexp_eatClassControlLetter = function (e) {
  var i = e.current();
  return Ai(i) || i === 95 ? ((e.lastIntValue = i % 32), e.advance(), !0) : !1;
};
$.regexp_eatHexEscapeSequence = function (e) {
  var i = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise("Invalid escape"), (e.pos = i);
  }
  return !1;
};
$.regexp_eatDecimalDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; Ai((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== i;
};
function Ai(e) {
  return e >= 48 && e <= 57;
}
$.regexp_eatHexDigits = function (e) {
  var i = e.pos,
    r = 0;
  for (e.lastIntValue = 0; rs((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + ns(r)), e.advance();
  return e.pos !== i;
};
function rs(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function ns(e) {
  return e >= 65 && e <= 70
    ? 10 + (e - 65)
    : e >= 97 && e <= 102
    ? 10 + (e - 97)
    : e - 48;
}
$.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var i = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      i <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = i * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = i * 8 + r);
    } else e.lastIntValue = i;
    return !0;
  }
  return !1;
};
$.regexp_eatOctalDigit = function (e) {
  var i = e.current();
  return ss(i)
    ? ((e.lastIntValue = i - 48), e.advance(), !0)
    : ((e.lastIntValue = 0), !1);
};
function ss(e) {
  return e >= 48 && e <= 55;
}
$.regexp_eatFixedHexDigits = function (e, i) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var s = 0; s < i; ++s) {
    var o = e.current();
    if (!rs(o)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + ns(o)), e.advance();
  }
  return !0;
};
var xr = function (i) {
    (this.type = i.type),
      (this.value = i.value),
      (this.start = i.start),
      (this.end = i.end),
      i.options.locations && (this.loc = new Ci(i, i.startLoc, i.endLoc)),
      i.options.ranges && (this.range = [i.start, i.end]);
  },
  ce = Te.prototype;
ce.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      "Escape sequence in keyword " + this.type.keyword
    ),
    this.options.onToken && this.options.onToken(new xr(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
ce.getToken = function () {
  return this.next(), new xr(this);
};
typeof Symbol < "u" &&
  (ce[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var i = e.getToken();
        return { done: i.type === g.eof, value: i };
      },
    };
  });
ce.curContext = function () {
  return this.context[this.context.length - 1];
};
ce.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(g.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
ce.readToken = function (e) {
  return ft(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
ce.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var i = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + i - 56613888;
};
ce.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    i = this.pos,
    r = this.input.indexOf("*/", (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, "Unterminated comment"),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Xt.lastIndex = i;
    for (var s; (s = Xt.exec(this.input)) && s.index < this.pos; )
      ++this.curLine, (this.lineStart = s.index + s[0].length);
  }
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(i + 2, r),
      i,
      this.pos,
      e,
      this.curPosition()
    );
};
ce.skipLineComment = function (e) {
  for (
    var i = this.pos,
      r = this.options.onComment && this.curPosition(),
      s = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !ei(s);

  )
    s = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(i + e, this.pos),
      i,
      this.pos,
      r,
      this.curPosition()
    );
};
ce.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && Vn.test(String.fromCharCode(e))))
          ++this.pos;
        else break e;
    }
  }
};
ce.finishToken = function (e, i) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = i), this.updateContext(r);
};
ce.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var i = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && i === 46
    ? ((this.pos += 3), this.finishToken(g.ellipsis))
    : (++this.pos, this.finishToken(g.dot));
};
ce.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(g.slash, 1);
};
ce.readToken_mult_modulo_exp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1,
    s = e === 42 ? g.star : g.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      i === 42 &&
      (++r, (s = g.starstar), (i = this.input.charCodeAt(this.pos + 2))),
    i === 61 ? this.finishOp(g.assign, r + 1) : this.finishOp(s, r)
  );
};
ce.readToken_pipe_amp = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  if (i === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(g.assign, 3);
    }
    return this.finishOp(e === 124 ? g.logicalOR : g.logicalAND, 2);
  }
  return i === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(e === 124 ? g.bitwiseOR : g.bitwiseAND, 1);
};
ce.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(g.assign, 2) : this.finishOp(g.bitwiseXOR, 1);
};
ce.readToken_plus_min = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === e
    ? i === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        Qe.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(g.incDec, 2)
    : i === 61
    ? this.finishOp(g.assign, 2)
    : this.finishOp(g.plusMin, 1);
};
ce.readToken_lt_gt = function (e) {
  var i = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return i === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(g.assign, r + 1)
        : this.finishOp(g.bitShift, r))
    : i === 33 &&
      e === 60 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45
    ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    : (i === 61 && (r = 2), this.finishOp(g.relational, r));
};
ce.readToken_eq_excl = function (e) {
  var i = this.input.charCodeAt(this.pos + 1);
  return i === 61
    ? this.finishOp(
        g.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
      )
    : e === 61 && i === 62 && this.options.ecmaVersion >= 6
    ? ((this.pos += 2), this.finishToken(g.arrow))
    : this.finishOp(e === 61 ? g.eq : g.prefix, 1);
};
ce.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var i = this.input.charCodeAt(this.pos + 1);
    if (i === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(g.questionDot, 2);
    }
    if (i === 63) {
      if (e >= 12) {
        var s = this.input.charCodeAt(this.pos + 2);
        if (s === 61) return this.finishOp(g.assign, 3);
      }
      return this.finishOp(g.coalesce, 2);
    }
  }
  return this.finishOp(g.question, 1);
};
ce.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(g.parenL);
    case 41:
      return ++this.pos, this.finishToken(g.parenR);
    case 59:
      return ++this.pos, this.finishToken(g.semi);
    case 44:
      return ++this.pos, this.finishToken(g.comma);
    case 91:
      return ++this.pos, this.finishToken(g.bracketL);
    case 93:
      return ++this.pos, this.finishToken(g.bracketR);
    case 123:
      return ++this.pos, this.finishToken(g.braceL);
    case 125:
      return ++this.pos, this.finishToken(g.braceR);
    case 58:
      return ++this.pos, this.finishToken(g.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(g.backQuote);
    case 48:
      var i = this.input.charCodeAt(this.pos + 1);
      if (i === 120 || i === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (i === 111 || i === 79) return this.readRadixNumber(8);
        if (i === 98 || i === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(g.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + vr(e) + "'");
};
ce.finishOp = function (e, i) {
  var r = this.input.slice(this.pos, this.pos + i);
  return (this.pos += i), this.finishToken(e, r);
};
ce.readRegexp = function () {
  for (var e, i, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, "Unterminated regular expression");
    var s = this.input.charAt(this.pos);
    if ((Qe.test(s) && this.raise(r, "Unterminated regular expression"), e))
      e = !1;
    else {
      if (s === "[") i = !0;
      else if (s === "]" && i) i = !1;
      else if (s === "/" && !i) break;
      e = s === "\\";
    }
    ++this.pos;
  }
  var o = this.input.slice(r, this.pos);
  ++this.pos;
  var l = this.pos,
    m = this.readWord1();
  this.containsEsc && this.unexpected(l);
  var x = this.regexpState || (this.regexpState = new ut(this));
  x.reset(r, o, m), this.validateRegExpFlags(x), this.validateRegExpPattern(x);
  var v = null;
  try {
    v = new RegExp(o, m);
  } catch {}
  return this.finishToken(g.regexp, { pattern: o, flags: m, value: v });
};
ce.readInt = function (e, i, r) {
  for (
    var s = this.options.ecmaVersion >= 12 && i === void 0,
      o = r && this.input.charCodeAt(this.pos) === 48,
      l = this.pos,
      m = 0,
      x = 0,
      v = 0,
      C = i ?? 1 / 0;
    v < C;
    ++v, ++this.pos
  ) {
    var _ = this.input.charCodeAt(this.pos),
      A = void 0;
    if (s && _ === 95) {
      o &&
        this.raiseRecoverable(
          this.pos,
          "Numeric separator is not allowed in legacy octal numeric literals"
        ),
        x === 95 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator must be exactly one underscore"
          ),
        v === 0 &&
          this.raiseRecoverable(
            this.pos,
            "Numeric separator is not allowed at the first of digits"
          ),
        (x = _);
      continue;
    }
    if (
      (_ >= 97
        ? (A = _ - 97 + 10)
        : _ >= 65
        ? (A = _ - 65 + 10)
        : _ >= 48 && _ <= 57
        ? (A = _ - 48)
        : (A = 1 / 0),
      A >= e)
    )
      break;
    (x = _), (m = m * e + A);
  }
  return (
    s &&
      x === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        "Numeric separator is not allowed at the last of digits"
      ),
    this.pos === l || (i != null && this.pos - l !== i) ? null : m
  );
};
function oo(e, i) {
  return i ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ""));
}
function as(e) {
  return typeof BigInt != "function" ? null : BigInt(e.replace(/_/g, ""));
}
ce.readRadixNumber = function (e) {
  var i = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, "Expected number in radix " + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = as(this.input.slice(i, this.pos))), ++this.pos)
      : ft(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
    this.finishToken(g.num, r)
  );
};
ce.readNumber = function (e) {
  var i = this.pos;
  !e &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(i, "Invalid number");
  var r = this.pos - i >= 2 && this.input.charCodeAt(i) === 48;
  r && this.strict && this.raise(i, "Invalid number");
  var s = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && s === 110) {
    var o = as(this.input.slice(i, this.pos));
    return (
      ++this.pos,
      ft(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, "Identifier directly after number"),
      this.finishToken(g.num, o)
    );
  }
  r && /[89]/.test(this.input.slice(i, this.pos)) && (r = !1),
    s === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (s = this.input.charCodeAt(this.pos))),
    (s === 69 || s === 101) &&
      !r &&
      ((s = this.input.charCodeAt(++this.pos)),
      (s === 43 || s === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(i, "Invalid number")),
    ft(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, "Identifier directly after number");
  var l = oo(this.input.slice(i, this.pos), r);
  return this.finishToken(g.num, l);
};
ce.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    i;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (i = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
      ++this.pos,
      i > 1114111 && this.invalidStringToken(r, "Code point out of bounds");
  } else i = this.readHexChar(4);
  return i;
};
function vr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
ce.readString = function (e) {
  for (var i = "", r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated string constant");
    var s = this.input.charCodeAt(this.pos);
    if (s === e) break;
    s === 92
      ? ((i += this.input.slice(r, this.pos)),
        (i += this.readEscapedChar(!1)),
        (r = this.pos))
      : (ei(s, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, "Unterminated string constant"),
        ++this.pos);
  }
  return (i += this.input.slice(r, this.pos++)), this.finishToken(g.string, i);
};
var os = {};
ce.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === os) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
ce.invalidStringToken = function (e, i) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw os;
  this.raise(e, i);
};
ce.readTmplToken = function () {
  for (var e = "", i = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, "Unterminated template");
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === g.template || this.type === g.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(g.dollarBraceL))
          : (++this.pos, this.finishToken(g.backQuote))
        : ((e += this.input.slice(i, this.pos)),
          this.finishToken(g.template, e));
    if (r === 92)
      (e += this.input.slice(i, this.pos)),
        (e += this.readEscapedChar(!0)),
        (i = this.pos);
    else if (ei(r)) {
      switch (((e += this.input.slice(i, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (i = this.pos);
    } else ++this.pos;
  }
};
ce.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if (this.input[this.pos + 1] !== "{") break;
      case "`":
        return this.finishToken(
          g.invalidTemplate,
          this.input.slice(this.start, this.pos)
        );
    }
  this.raise(this.start, "Unterminated template");
};
ce.readEscapedChar = function (e) {
  var i = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, i)) {
    case 110:
      return `
`;
    case 114:
      return "\r";
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return vr(this.readCodePoint());
    case 116:
      return "	";
    case 98:
      return "\b";
    case 118:
      return "\v";
    case 102:
      return "\f";
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ""
      );
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            "Invalid escape sequence in template string"
          ),
          null
        );
      }
    default:
      if (i >= 48 && i <= 55) {
        var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          o = parseInt(s, 8);
        return (
          o > 255 && ((s = s.slice(0, -1)), (o = parseInt(s, 8))),
          (this.pos += s.length - 1),
          (i = this.input.charCodeAt(this.pos)),
          (s !== "0" || i === 56 || i === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - s.length,
              e
                ? "Octal literal in template string"
                : "Octal literal in strict mode"
            ),
          String.fromCharCode(o)
        );
      }
      return ei(i) ? "" : String.fromCharCode(i);
  }
};
ce.readHexChar = function (e) {
  var i = this.pos,
    r = this.readInt(16, e);
  return (
    r === null && this.invalidStringToken(i, "Bad character escape sequence"), r
  );
};
ce.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = "", i = !0, r = this.pos, s = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var o = this.fullCharCodeAtPos();
    if (Ot(o, s)) this.pos += o <= 65535 ? 1 : 2;
    else if (o === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var l = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          "Expecting Unicode escape sequence \\uXXXX"
        ),
        ++this.pos;
      var m = this.readCodePoint();
      (i ? ft : Ot)(m, s) ||
        this.invalidStringToken(l, "Invalid Unicode escape"),
        (e += vr(m)),
        (r = this.pos);
    } else break;
    i = !1;
  }
  return e + this.input.slice(r, this.pos);
};
ce.readWord = function () {
  var e = this.readWord1(),
    i = g.name;
  return this.keywords.test(e) && (i = lr[e]), this.finishToken(i, e);
};
var uo = "7.4.1";
Te.acorn = {
  Parser: Te,
  version: uo,
  defaultOptions: er,
  Position: Jt,
  SourceLocation: Ci,
  getLineInfo: Mn,
  Node: mr,
  TokenType: ge,
  tokTypes: g,
  keywordTypes: lr,
  TokContext: Ke,
  tokContexts: Ie,
  isIdentifierChar: Ot,
  isIdentifierStart: ft,
  Token: xr,
  isNewLine: ei,
  lineBreak: Qe,
  lineBreakG: Xt,
  nonASCIIwhitespace: Vn,
};
var ir = {},
  ho = {
    get exports() {
      return ir;
    },
    set exports(e) {
      ir = e;
    },
  },
  lo = {
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦",
  },
  Ht = {},
  co = {
    get exports() {
      return Ht;
    },
    set exports(e) {
      Ht = e;
    },
  },
  hn;
function ln() {
  return (
    hn ||
      ((hn = 1),
      (function (e, i) {
        (function (r, s) {
          s(i);
        })(Rt, function (r) {
          var s = [
              509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0,
              166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54,
              14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9,
              6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158,
              11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4,
              193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16,
              16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1,
              3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3,
              9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5,
              4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10,
              1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39,
              4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1,
              4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418,
              49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3,
              6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13,
              983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239,
            ],
            o = [
              0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28,
              4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157,
              19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2,
              14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5,
              3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11,
              21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4,
              28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50,
              14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47,
              20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3,
              0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1,
              64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
              2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21,
              1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38,
              6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0,
              95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20,
              0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22,
              0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125,
              0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026,
              582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6,
              18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9,
              1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15,
              3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3,
              0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27,
              2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30,
              2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61,
              147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2,
              1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0,
              2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0,
              3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3,
              2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7,
              221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938, 6, 4191,
            ],
            l =
              "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
            m =
              "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
            x = {
              3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
              5: "class enum extends super const export import",
              6: "enum",
              strict:
                "implements interface let package private protected public static yield",
              strictBind: "eval arguments",
            },
            v =
              "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
            C = {
              5: v,
              "5module": v + " export import",
              6: v + " const class extends export import super",
            },
            _ = /^in(stanceof)?$/,
            A = new RegExp("[" + m + "]"),
            I = new RegExp("[" + m + l + "]");
          function k(t, n) {
            for (var h = 65536, f = 0; f < n.length; f += 2) {
              if (((h += n[f]), h > t)) return !1;
              if (((h += n[f + 1]), h >= t)) return !0;
            }
            return !1;
          }
          function P(t, n) {
            return t < 65
              ? t === 36
              : t < 91
              ? !0
              : t < 97
              ? t === 95
              : t < 123
              ? !0
              : t <= 65535
              ? t >= 170 && A.test(String.fromCharCode(t))
              : n === !1
              ? !1
              : k(t, o);
          }
          function E(t, n) {
            return t < 48
              ? t === 36
              : t < 58
              ? !0
              : t < 65
              ? !1
              : t < 91
              ? !0
              : t < 97
              ? t === 95
              : t < 123
              ? !0
              : t <= 65535
              ? t >= 170 && I.test(String.fromCharCode(t))
              : n === !1
              ? !1
              : k(t, o) || k(t, s);
          }
          var R = function (n, h) {
            h === void 0 && (h = {}),
              (this.label = n),
              (this.keyword = h.keyword),
              (this.beforeExpr = !!h.beforeExpr),
              (this.startsExpr = !!h.startsExpr),
              (this.isLoop = !!h.isLoop),
              (this.isAssign = !!h.isAssign),
              (this.prefix = !!h.prefix),
              (this.postfix = !!h.postfix),
              (this.binop = h.binop || null),
              (this.updateContext = null);
          };
          function j(t, n) {
            return new R(t, { beforeExpr: !0, binop: n });
          }
          var B = { beforeExpr: !0 },
            G = { startsExpr: !0 },
            N = {};
          function y(t, n) {
            return (
              n === void 0 && (n = {}), (n.keyword = t), (N[t] = new R(t, n))
            );
          }
          var u = {
              num: new R("num", G),
              regexp: new R("regexp", G),
              string: new R("string", G),
              name: new R("name", G),
              privateId: new R("privateId", G),
              eof: new R("eof"),
              bracketL: new R("[", { beforeExpr: !0, startsExpr: !0 }),
              bracketR: new R("]"),
              braceL: new R("{", { beforeExpr: !0, startsExpr: !0 }),
              braceR: new R("}"),
              parenL: new R("(", { beforeExpr: !0, startsExpr: !0 }),
              parenR: new R(")"),
              comma: new R(",", B),
              semi: new R(";", B),
              colon: new R(":", B),
              dot: new R("."),
              question: new R("?", B),
              questionDot: new R("?."),
              arrow: new R("=>", B),
              template: new R("template"),
              invalidTemplate: new R("invalidTemplate"),
              ellipsis: new R("...", B),
              backQuote: new R("`", G),
              dollarBraceL: new R("${", { beforeExpr: !0, startsExpr: !0 }),
              eq: new R("=", { beforeExpr: !0, isAssign: !0 }),
              assign: new R("_=", { beforeExpr: !0, isAssign: !0 }),
              incDec: new R("++/--", {
                prefix: !0,
                postfix: !0,
                startsExpr: !0,
              }),
              prefix: new R("!/~", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              logicalOR: j("||", 1),
              logicalAND: j("&&", 2),
              bitwiseOR: j("|", 3),
              bitwiseXOR: j("^", 4),
              bitwiseAND: j("&", 5),
              equality: j("==/!=/===/!==", 6),
              relational: j("</>/<=/>=", 7),
              bitShift: j("<</>>/>>>", 8),
              plusMin: new R("+/-", {
                beforeExpr: !0,
                binop: 9,
                prefix: !0,
                startsExpr: !0,
              }),
              modulo: j("%", 10),
              star: j("*", 10),
              slash: j("/", 10),
              starstar: new R("**", { beforeExpr: !0 }),
              coalesce: j("??", 1),
              _break: y("break"),
              _case: y("case", B),
              _catch: y("catch"),
              _continue: y("continue"),
              _debugger: y("debugger"),
              _default: y("default", B),
              _do: y("do", { isLoop: !0, beforeExpr: !0 }),
              _else: y("else", B),
              _finally: y("finally"),
              _for: y("for", { isLoop: !0 }),
              _function: y("function", G),
              _if: y("if"),
              _return: y("return", B),
              _switch: y("switch"),
              _throw: y("throw", B),
              _try: y("try"),
              _var: y("var"),
              _const: y("const"),
              _while: y("while", { isLoop: !0 }),
              _with: y("with"),
              _new: y("new", { beforeExpr: !0, startsExpr: !0 }),
              _this: y("this", G),
              _super: y("super", G),
              _class: y("class", G),
              _extends: y("extends", B),
              _export: y("export"),
              _import: y("import", G),
              _null: y("null", G),
              _true: y("true", G),
              _false: y("false", G),
              _in: y("in", { beforeExpr: !0, binop: 7 }),
              _instanceof: y("instanceof", { beforeExpr: !0, binop: 7 }),
              _typeof: y("typeof", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
              _void: y("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
              _delete: y("delete", {
                beforeExpr: !0,
                prefix: !0,
                startsExpr: !0,
              }),
            },
            w = /\r\n?|\n|\u2028|\u2029/,
            V = new RegExp(w.source, "g");
          function H(t) {
            return t === 10 || t === 13 || t === 8232 || t === 8233;
          }
          function W(t, n, h) {
            h === void 0 && (h = t.length);
            for (var f = n; f < h; f++) {
              var S = t.charCodeAt(f);
              if (H(S))
                return f < h - 1 && S === 13 && t.charCodeAt(f + 1) === 10
                  ? f + 2
                  : f + 1;
            }
            return -1;
          }
          var ee = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
            J = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
            X = Object.prototype,
            he = X.hasOwnProperty,
            Ce = X.toString,
            Se =
              Object.hasOwn ||
              function (t, n) {
                return he.call(t, n);
              },
            ye =
              Array.isArray ||
              function (t) {
                return Ce.call(t) === "[object Array]";
              };
          function te(t) {
            return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$");
          }
          function Ae(t) {
            return t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode((t >> 10) + 55296, (t & 1023) + 56320));
          }
          var Ue =
              /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
            z = function (n, h) {
              (this.line = n), (this.column = h);
            };
          z.prototype.offset = function (n) {
            return new z(this.line, this.column + n);
          };
          var Be = function (n, h, f) {
            (this.start = h),
              (this.end = f),
              n.sourceFile !== null && (this.source = n.sourceFile);
          };
          function tt(t, n) {
            for (var h = 1, f = 0; ; ) {
              var S = W(t, f, n);
              if (S < 0) return new z(h, n - f);
              ++h, (f = S);
            }
          }
          var Ye = {
              ecmaVersion: null,
              sourceType: "script",
              onInsertedSemicolon: null,
              onTrailingComma: null,
              allowReserved: null,
              allowReturnOutsideFunction: !1,
              allowImportExportEverywhere: !1,
              allowAwaitOutsideFunction: null,
              allowSuperOutsideMethod: null,
              allowHashBang: !1,
              locations: !1,
              onToken: null,
              onComment: null,
              ranges: !1,
              program: null,
              sourceFile: null,
              directSourceFile: null,
              preserveParens: !1,
            },
            fe = !1;
          function Fe(t) {
            var n = {};
            for (var h in Ye) n[h] = t && Se(t, h) ? t[h] : Ye[h];
            if (
              (n.ecmaVersion === "latest"
                ? (n.ecmaVersion = 1e8)
                : n.ecmaVersion == null
                ? (!fe &&
                    typeof console == "object" &&
                    console.warn &&
                    ((fe = !0),
                    console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`)),
                  (n.ecmaVersion = 11))
                : n.ecmaVersion >= 2015 && (n.ecmaVersion -= 2009),
              n.allowReserved == null && (n.allowReserved = n.ecmaVersion < 5),
              (!t || t.allowHashBang == null) &&
                (n.allowHashBang = n.ecmaVersion >= 14),
              ye(n.onToken))
            ) {
              var f = n.onToken;
              n.onToken = function (S) {
                return f.push(S);
              };
            }
            return ye(n.onComment) && (n.onComment = Ct(n, n.onComment)), n;
          }
          function Ct(t, n) {
            return function (h, f, S, T, O, D) {
              var U = {
                type: h ? "Block" : "Line",
                value: f,
                start: S,
                end: T,
              };
              t.locations && (U.loc = new Be(this, O, D)),
                t.ranges && (U.range = [S, T]),
                n.push(U);
            };
          }
          var gt = 1,
            ht = 2,
            Et = 4,
            $e = 8,
            ni = 16,
            Pe = 32,
            wt = 64,
            xt = 128,
            vt = 256,
            kt = gt | ht | vt;
          function Bt(t, n) {
            return ht | (t ? Et : 0) | (n ? $e : 0);
          }
          var At = 0,
            Dt = 1,
            Je = 2,
            si = 3,
            jt = 4,
            de = 5,
            se = function (n, h, f) {
              (this.options = n = Fe(n)),
                (this.sourceFile = n.sourceFile),
                (this.keywords = te(
                  C[
                    n.ecmaVersion >= 6
                      ? 6
                      : n.sourceType === "module"
                      ? "5module"
                      : 5
                  ]
                ));
              var S = "";
              n.allowReserved !== !0 &&
                ((S = x[n.ecmaVersion >= 6 ? 6 : n.ecmaVersion === 5 ? 5 : 3]),
                n.sourceType === "module" && (S += " await")),
                (this.reservedWords = te(S));
              var T = (S ? S + " " : "") + x.strict;
              (this.reservedWordsStrict = te(T)),
                (this.reservedWordsStrictBind = te(T + " " + x.strictBind)),
                (this.input = String(h)),
                (this.containsEsc = !1),
                f
                  ? ((this.pos = f),
                    (this.lineStart =
                      this.input.lastIndexOf(
                        `
`,
                        f - 1
                      ) + 1),
                    (this.curLine = this.input
                      .slice(0, this.lineStart)
                      .split(w).length))
                  : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                (this.type = u.eof),
                (this.value = null),
                (this.start = this.end = this.pos),
                (this.startLoc = this.endLoc = this.curPosition()),
                (this.lastTokEndLoc = this.lastTokStartLoc = null),
                (this.lastTokStart = this.lastTokEnd = this.pos),
                (this.context = this.initialContext()),
                (this.exprAllowed = !0),
                (this.inModule = n.sourceType === "module"),
                (this.strict = this.inModule || this.strictDirective(this.pos)),
                (this.potentialArrowAt = -1),
                (this.potentialArrowInForAwait = !1),
                (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                (this.labels = []),
                (this.undefinedExports = Object.create(null)),
                this.pos === 0 &&
                  n.allowHashBang &&
                  this.input.slice(0, 2) === "#!" &&
                  this.skipLineComment(2),
                (this.scopeStack = []),
                this.enterScope(gt),
                (this.regexpState = null),
                (this.privateNameStack = []);
            },
            K = {
              inFunction: { configurable: !0 },
              inGenerator: { configurable: !0 },
              inAsync: { configurable: !0 },
              canAwait: { configurable: !0 },
              allowSuper: { configurable: !0 },
              allowDirectSuper: { configurable: !0 },
              treatFunctionsAsVar: { configurable: !0 },
              allowNewDotTarget: { configurable: !0 },
              inClassStaticBlock: { configurable: !0 },
            };
          (se.prototype.parse = function () {
            var n = this.options.program || this.startNode();
            return this.nextToken(), this.parseTopLevel(n);
          }),
            (K.inFunction.get = function () {
              return (this.currentVarScope().flags & ht) > 0;
            }),
            (K.inGenerator.get = function () {
              return (
                (this.currentVarScope().flags & $e) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (K.inAsync.get = function () {
              return (
                (this.currentVarScope().flags & Et) > 0 &&
                !this.currentVarScope().inClassFieldInit
              );
            }),
            (K.canAwait.get = function () {
              for (var t = this.scopeStack.length - 1; t >= 0; t--) {
                var n = this.scopeStack[t];
                if (n.inClassFieldInit || n.flags & vt) return !1;
                if (n.flags & ht) return (n.flags & Et) > 0;
              }
              return (
                (this.inModule && this.options.ecmaVersion >= 13) ||
                this.options.allowAwaitOutsideFunction
              );
            }),
            (K.allowSuper.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                h = t.inClassFieldInit;
              return (n & wt) > 0 || h || this.options.allowSuperOutsideMethod;
            }),
            (K.allowDirectSuper.get = function () {
              return (this.currentThisScope().flags & xt) > 0;
            }),
            (K.treatFunctionsAsVar.get = function () {
              return this.treatFunctionsAsVarInScope(this.currentScope());
            }),
            (K.allowNewDotTarget.get = function () {
              var t = this.currentThisScope(),
                n = t.flags,
                h = t.inClassFieldInit;
              return (n & (ht | vt)) > 0 || h;
            }),
            (K.inClassStaticBlock.get = function () {
              return (this.currentVarScope().flags & vt) > 0;
            }),
            (se.extend = function () {
              for (var n = [], h = arguments.length; h--; ) n[h] = arguments[h];
              for (var f = this, S = 0; S < n.length; S++) f = n[S](f);
              return f;
            }),
            (se.parse = function (n, h) {
              return new this(h, n).parse();
            }),
            (se.parseExpressionAt = function (n, h, f) {
              var S = new this(f, n, h);
              return S.nextToken(), S.parseExpression();
            }),
            (se.tokenizer = function (n, h) {
              return new this(h, n);
            }),
            Object.defineProperties(se.prototype, K);
          var me = se.prototype,
            Ee = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
          (me.strictDirective = function (t) {
            if (this.options.ecmaVersion < 5) return !1;
            for (;;) {
              (J.lastIndex = t), (t += J.exec(this.input)[0].length);
              var n = Ee.exec(this.input.slice(t));
              if (!n) return !1;
              if ((n[1] || n[2]) === "use strict") {
                J.lastIndex = t + n[0].length;
                var h = J.exec(this.input),
                  f = h.index + h[0].length,
                  S = this.input.charAt(f);
                return (
                  S === ";" ||
                  S === "}" ||
                  (w.test(h[0]) &&
                    !(
                      /[(`.[+\-/*%<>=,?^&]/.test(S) ||
                      (S === "!" && this.input.charAt(f + 1) === "=")
                    ))
                );
              }
              (t += n[0].length),
                (J.lastIndex = t),
                (t += J.exec(this.input)[0].length),
                this.input[t] === ";" && t++;
            }
          }),
            (me.eat = function (t) {
              return this.type === t ? (this.next(), !0) : !1;
            }),
            (me.isContextual = function (t) {
              return (
                this.type === u.name && this.value === t && !this.containsEsc
              );
            }),
            (me.eatContextual = function (t) {
              return this.isContextual(t) ? (this.next(), !0) : !1;
            }),
            (me.expectContextual = function (t) {
              this.eatContextual(t) || this.unexpected();
            }),
            (me.canInsertSemicolon = function () {
              return (
                this.type === u.eof ||
                this.type === u.braceR ||
                w.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (me.insertSemicolon = function () {
              if (this.canInsertSemicolon())
                return (
                  this.options.onInsertedSemicolon &&
                    this.options.onInsertedSemicolon(
                      this.lastTokEnd,
                      this.lastTokEndLoc
                    ),
                  !0
                );
            }),
            (me.semicolon = function () {
              !this.eat(u.semi) && !this.insertSemicolon() && this.unexpected();
            }),
            (me.afterTrailingComma = function (t, n) {
              if (this.type === t)
                return (
                  this.options.onTrailingComma &&
                    this.options.onTrailingComma(
                      this.lastTokStart,
                      this.lastTokStartLoc
                    ),
                  n || this.next(),
                  !0
                );
            }),
            (me.expect = function (t) {
              this.eat(t) || this.unexpected();
            }),
            (me.unexpected = function (t) {
              this.raise(t ?? this.start, "Unexpected token");
            });
          var It = function () {
            this.shorthandAssign =
              this.trailingComma =
              this.parenthesizedAssign =
              this.parenthesizedBind =
              this.doubleProto =
                -1;
          };
          (me.checkPatternErrors = function (t, n) {
            if (t) {
              t.trailingComma > -1 &&
                this.raiseRecoverable(
                  t.trailingComma,
                  "Comma is not permitted after the rest element"
                );
              var h = n ? t.parenthesizedAssign : t.parenthesizedBind;
              h > -1 &&
                this.raiseRecoverable(
                  h,
                  n ? "Assigning to rvalue" : "Parenthesized pattern"
                );
            }
          }),
            (me.checkExpressionErrors = function (t, n) {
              if (!t) return !1;
              var h = t.shorthandAssign,
                f = t.doubleProto;
              if (!n) return h >= 0 || f >= 0;
              h >= 0 &&
                this.raise(
                  h,
                  "Shorthand property assignments are valid only in destructuring patterns"
                ),
                f >= 0 &&
                  this.raiseRecoverable(
                    f,
                    "Redefinition of __proto__ property"
                  );
            }),
            (me.checkYieldAwaitInDefaultParams = function () {
              this.yieldPos &&
                (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                this.raise(
                  this.yieldPos,
                  "Yield expression cannot be a default value"
                ),
                this.awaitPos &&
                  this.raise(
                    this.awaitPos,
                    "Await expression cannot be a default value"
                  );
            }),
            (me.isSimpleAssignTarget = function (t) {
              return t.type === "ParenthesizedExpression"
                ? this.isSimpleAssignTarget(t.expression)
                : t.type === "Identifier" || t.type === "MemberExpression";
            });
          var Z = se.prototype;
          Z.parseTopLevel = function (t) {
            var n = Object.create(null);
            for (t.body || (t.body = []); this.type !== u.eof; ) {
              var h = this.parseStatement(null, !0, n);
              t.body.push(h);
            }
            if (this.inModule)
              for (
                var f = 0, S = Object.keys(this.undefinedExports);
                f < S.length;
                f += 1
              ) {
                var T = S[f];
                this.raiseRecoverable(
                  this.undefinedExports[T].start,
                  "Export '" + T + "' is not defined"
                );
              }
            return (
              this.adaptDirectivePrologue(t.body),
              this.next(),
              (t.sourceType = this.options.sourceType),
              this.finishNode(t, "Program")
            );
          };
          var De = { kind: "loop" },
            ai = { kind: "switch" };
          (Z.isLet = function (t) {
            if (this.options.ecmaVersion < 6 || !this.isContextual("let"))
              return !1;
            J.lastIndex = this.pos;
            var n = J.exec(this.input),
              h = this.pos + n[0].length,
              f = this.input.charCodeAt(h);
            if (f === 91 || f === 92) return !0;
            if (t) return !1;
            if (f === 123 || (f > 55295 && f < 56320)) return !0;
            if (P(f, !0)) {
              for (var S = h + 1; E((f = this.input.charCodeAt(S)), !0); ) ++S;
              if (f === 92 || (f > 55295 && f < 56320)) return !0;
              var T = this.input.slice(h, S);
              if (!_.test(T)) return !0;
            }
            return !1;
          }),
            (Z.isAsyncFunction = function () {
              if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
                return !1;
              J.lastIndex = this.pos;
              var t = J.exec(this.input),
                n = this.pos + t[0].length,
                h;
              return (
                !w.test(this.input.slice(this.pos, n)) &&
                this.input.slice(n, n + 8) === "function" &&
                (n + 8 === this.input.length ||
                  !(
                    E((h = this.input.charCodeAt(n + 8))) ||
                    (h > 55295 && h < 56320)
                  ))
              );
            }),
            (Z.parseStatement = function (t, n, h) {
              var f = this.type,
                S = this.startNode(),
                T;
              switch ((this.isLet(t) && ((f = u._var), (T = "let")), f)) {
                case u._break:
                case u._continue:
                  return this.parseBreakContinueStatement(S, f.keyword);
                case u._debugger:
                  return this.parseDebuggerStatement(S);
                case u._do:
                  return this.parseDoStatement(S);
                case u._for:
                  return this.parseForStatement(S);
                case u._function:
                  return (
                    t &&
                      (this.strict || (t !== "if" && t !== "label")) &&
                      this.options.ecmaVersion >= 6 &&
                      this.unexpected(),
                    this.parseFunctionStatement(S, !1, !t)
                  );
                case u._class:
                  return t && this.unexpected(), this.parseClass(S, !0);
                case u._if:
                  return this.parseIfStatement(S);
                case u._return:
                  return this.parseReturnStatement(S);
                case u._switch:
                  return this.parseSwitchStatement(S);
                case u._throw:
                  return this.parseThrowStatement(S);
                case u._try:
                  return this.parseTryStatement(S);
                case u._const:
                case u._var:
                  return (
                    (T = T || this.value),
                    t && T !== "var" && this.unexpected(),
                    this.parseVarStatement(S, T)
                  );
                case u._while:
                  return this.parseWhileStatement(S);
                case u._with:
                  return this.parseWithStatement(S);
                case u.braceL:
                  return this.parseBlock(!0, S);
                case u.semi:
                  return this.parseEmptyStatement(S);
                case u._export:
                case u._import:
                  if (this.options.ecmaVersion > 10 && f === u._import) {
                    J.lastIndex = this.pos;
                    var O = J.exec(this.input),
                      D = this.pos + O[0].length,
                      U = this.input.charCodeAt(D);
                    if (U === 40 || U === 46)
                      return this.parseExpressionStatement(
                        S,
                        this.parseExpression()
                      );
                  }
                  return (
                    this.options.allowImportExportEverywhere ||
                      (n ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may only appear at the top level"
                        ),
                      this.inModule ||
                        this.raise(
                          this.start,
                          "'import' and 'export' may appear only with 'sourceType: module'"
                        )),
                    f === u._import
                      ? this.parseImport(S)
                      : this.parseExport(S, h)
                  );
                default:
                  if (this.isAsyncFunction())
                    return (
                      t && this.unexpected(),
                      this.next(),
                      this.parseFunctionStatement(S, !0, !t)
                    );
                  var re = this.value,
                    ue = this.parseExpression();
                  return f === u.name &&
                    ue.type === "Identifier" &&
                    this.eat(u.colon)
                    ? this.parseLabeledStatement(S, re, ue, t)
                    : this.parseExpressionStatement(S, ue);
              }
            }),
            (Z.parseBreakContinueStatement = function (t, n) {
              var h = n === "break";
              this.next(),
                this.eat(u.semi) || this.insertSemicolon()
                  ? (t.label = null)
                  : this.type !== u.name
                  ? this.unexpected()
                  : ((t.label = this.parseIdent()), this.semicolon());
              for (var f = 0; f < this.labels.length; ++f) {
                var S = this.labels[f];
                if (
                  (t.label == null || S.name === t.label.name) &&
                  ((S.kind != null && (h || S.kind === "loop")) ||
                    (t.label && h))
                )
                  break;
              }
              return (
                f === this.labels.length &&
                  this.raise(t.start, "Unsyntactic " + n),
                this.finishNode(t, h ? "BreakStatement" : "ContinueStatement")
              );
            }),
            (Z.parseDebuggerStatement = function (t) {
              return (
                this.next(),
                this.semicolon(),
                this.finishNode(t, "DebuggerStatement")
              );
            }),
            (Z.parseDoStatement = function (t) {
              return (
                this.next(),
                this.labels.push(De),
                (t.body = this.parseStatement("do")),
                this.labels.pop(),
                this.expect(u._while),
                (t.test = this.parseParenExpression()),
                this.options.ecmaVersion >= 6
                  ? this.eat(u.semi)
                  : this.semicolon(),
                this.finishNode(t, "DoWhileStatement")
              );
            }),
            (Z.parseForStatement = function (t) {
              this.next();
              var n =
                this.options.ecmaVersion >= 9 &&
                this.canAwait &&
                this.eatContextual("await")
                  ? this.lastTokStart
                  : -1;
              if (
                (this.labels.push(De),
                this.enterScope(0),
                this.expect(u.parenL),
                this.type === u.semi)
              )
                return n > -1 && this.unexpected(n), this.parseFor(t, null);
              var h = this.isLet();
              if (this.type === u._var || this.type === u._const || h) {
                var f = this.startNode(),
                  S = h ? "let" : this.value;
                return (
                  this.next(),
                  this.parseVar(f, !0, S),
                  this.finishNode(f, "VariableDeclaration"),
                  (this.type === u._in ||
                    (this.options.ecmaVersion >= 6 &&
                      this.isContextual("of"))) &&
                  f.declarations.length === 1
                    ? (this.options.ecmaVersion >= 9 &&
                        (this.type === u._in
                          ? n > -1 && this.unexpected(n)
                          : (t.await = n > -1)),
                      this.parseForIn(t, f))
                    : (n > -1 && this.unexpected(n), this.parseFor(t, f))
                );
              }
              var T = this.isContextual("let"),
                O = !1,
                D = new It(),
                U = this.parseExpression(n > -1 ? "await" : !0, D);
              return this.type === u._in ||
                (O = this.options.ecmaVersion >= 6 && this.isContextual("of"))
                ? (this.options.ecmaVersion >= 9 &&
                    (this.type === u._in
                      ? n > -1 && this.unexpected(n)
                      : (t.await = n > -1)),
                  T &&
                    O &&
                    this.raise(
                      U.start,
                      "The left-hand side of a for-of loop may not start with 'let'."
                    ),
                  this.toAssignable(U, !1, D),
                  this.checkLValPattern(U),
                  this.parseForIn(t, U))
                : (this.checkExpressionErrors(D, !0),
                  n > -1 && this.unexpected(n),
                  this.parseFor(t, U));
            }),
            (Z.parseFunctionStatement = function (t, n, h) {
              return (
                this.next(), this.parseFunction(t, _e | (h ? 0 : Pt), !1, n)
              );
            }),
            (Z.parseIfStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                (t.consequent = this.parseStatement("if")),
                (t.alternate = this.eat(u._else)
                  ? this.parseStatement("if")
                  : null),
                this.finishNode(t, "IfStatement")
              );
            }),
            (Z.parseReturnStatement = function (t) {
              return (
                !this.inFunction &&
                  !this.options.allowReturnOutsideFunction &&
                  this.raise(this.start, "'return' outside of function"),
                this.next(),
                this.eat(u.semi) || this.insertSemicolon()
                  ? (t.argument = null)
                  : ((t.argument = this.parseExpression()), this.semicolon()),
                this.finishNode(t, "ReturnStatement")
              );
            }),
            (Z.parseSwitchStatement = function (t) {
              this.next(),
                (t.discriminant = this.parseParenExpression()),
                (t.cases = []),
                this.expect(u.braceL),
                this.labels.push(ai),
                this.enterScope(0);
              for (var n, h = !1; this.type !== u.braceR; )
                if (this.type === u._case || this.type === u._default) {
                  var f = this.type === u._case;
                  n && this.finishNode(n, "SwitchCase"),
                    t.cases.push((n = this.startNode())),
                    (n.consequent = []),
                    this.next(),
                    f
                      ? (n.test = this.parseExpression())
                      : (h &&
                          this.raiseRecoverable(
                            this.lastTokStart,
                            "Multiple default clauses"
                          ),
                        (h = !0),
                        (n.test = null)),
                    this.expect(u.colon);
                } else
                  n || this.unexpected(),
                    n.consequent.push(this.parseStatement(null));
              return (
                this.exitScope(),
                n && this.finishNode(n, "SwitchCase"),
                this.next(),
                this.labels.pop(),
                this.finishNode(t, "SwitchStatement")
              );
            }),
            (Z.parseThrowStatement = function (t) {
              return (
                this.next(),
                w.test(this.input.slice(this.lastTokEnd, this.start)) &&
                  this.raise(this.lastTokEnd, "Illegal newline after throw"),
                (t.argument = this.parseExpression()),
                this.semicolon(),
                this.finishNode(t, "ThrowStatement")
              );
            });
          var lt = [];
          (Z.parseTryStatement = function (t) {
            if (
              (this.next(),
              (t.block = this.parseBlock()),
              (t.handler = null),
              this.type === u._catch)
            ) {
              var n = this.startNode();
              if ((this.next(), this.eat(u.parenL))) {
                n.param = this.parseBindingAtom();
                var h = n.param.type === "Identifier";
                this.enterScope(h ? Pe : 0),
                  this.checkLValPattern(n.param, h ? jt : Je),
                  this.expect(u.parenR);
              } else
                this.options.ecmaVersion < 10 && this.unexpected(),
                  (n.param = null),
                  this.enterScope(0);
              (n.body = this.parseBlock(!1)),
                this.exitScope(),
                (t.handler = this.finishNode(n, "CatchClause"));
            }
            return (
              (t.finalizer = this.eat(u._finally) ? this.parseBlock() : null),
              !t.handler &&
                !t.finalizer &&
                this.raise(t.start, "Missing catch or finally clause"),
              this.finishNode(t, "TryStatement")
            );
          }),
            (Z.parseVarStatement = function (t, n) {
              return (
                this.next(),
                this.parseVar(t, !1, n),
                this.semicolon(),
                this.finishNode(t, "VariableDeclaration")
              );
            }),
            (Z.parseWhileStatement = function (t) {
              return (
                this.next(),
                (t.test = this.parseParenExpression()),
                this.labels.push(De),
                (t.body = this.parseStatement("while")),
                this.labels.pop(),
                this.finishNode(t, "WhileStatement")
              );
            }),
            (Z.parseWithStatement = function (t) {
              return (
                this.strict && this.raise(this.start, "'with' in strict mode"),
                this.next(),
                (t.object = this.parseParenExpression()),
                (t.body = this.parseStatement("with")),
                this.finishNode(t, "WithStatement")
              );
            }),
            (Z.parseEmptyStatement = function (t) {
              return this.next(), this.finishNode(t, "EmptyStatement");
            }),
            (Z.parseLabeledStatement = function (t, n, h, f) {
              for (var S = 0, T = this.labels; S < T.length; S += 1) {
                var O = T[S];
                O.name === n &&
                  this.raise(h.start, "Label '" + n + "' is already declared");
              }
              for (
                var D = this.type.isLoop
                    ? "loop"
                    : this.type === u._switch
                    ? "switch"
                    : null,
                  U = this.labels.length - 1;
                U >= 0;
                U--
              ) {
                var re = this.labels[U];
                if (re.statementStart === t.start)
                  (re.statementStart = this.start), (re.kind = D);
                else break;
              }
              return (
                this.labels.push({
                  name: n,
                  kind: D,
                  statementStart: this.start,
                }),
                (t.body = this.parseStatement(
                  f ? (f.indexOf("label") === -1 ? f + "label" : f) : "label"
                )),
                this.labels.pop(),
                (t.label = h),
                this.finishNode(t, "LabeledStatement")
              );
            }),
            (Z.parseExpressionStatement = function (t, n) {
              return (
                (t.expression = n),
                this.semicolon(),
                this.finishNode(t, "ExpressionStatement")
              );
            }),
            (Z.parseBlock = function (t, n, h) {
              for (
                t === void 0 && (t = !0),
                  n === void 0 && (n = this.startNode()),
                  n.body = [],
                  this.expect(u.braceL),
                  t && this.enterScope(0);
                this.type !== u.braceR;

              ) {
                var f = this.parseStatement(null);
                n.body.push(f);
              }
              return (
                h && (this.strict = !1),
                this.next(),
                t && this.exitScope(),
                this.finishNode(n, "BlockStatement")
              );
            }),
            (Z.parseFor = function (t, n) {
              return (
                (t.init = n),
                this.expect(u.semi),
                (t.test = this.type === u.semi ? null : this.parseExpression()),
                this.expect(u.semi),
                (t.update =
                  this.type === u.parenR ? null : this.parseExpression()),
                this.expect(u.parenR),
                (t.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, "ForStatement")
              );
            }),
            (Z.parseForIn = function (t, n) {
              var h = this.type === u._in;
              return (
                this.next(),
                n.type === "VariableDeclaration" &&
                  n.declarations[0].init != null &&
                  (!h ||
                    this.options.ecmaVersion < 8 ||
                    this.strict ||
                    n.kind !== "var" ||
                    n.declarations[0].id.type !== "Identifier") &&
                  this.raise(
                    n.start,
                    (h ? "for-in" : "for-of") +
                      " loop variable declaration may not have an initializer"
                  ),
                (t.left = n),
                (t.right = h
                  ? this.parseExpression()
                  : this.parseMaybeAssign()),
                this.expect(u.parenR),
                (t.body = this.parseStatement("for")),
                this.exitScope(),
                this.labels.pop(),
                this.finishNode(t, h ? "ForInStatement" : "ForOfStatement")
              );
            }),
            (Z.parseVar = function (t, n, h) {
              for (t.declarations = [], t.kind = h; ; ) {
                var f = this.startNode();
                if (
                  (this.parseVarId(f, h),
                  this.eat(u.eq)
                    ? (f.init = this.parseMaybeAssign(n))
                    : h === "const" &&
                      !(
                        this.type === u._in ||
                        (this.options.ecmaVersion >= 6 &&
                          this.isContextual("of"))
                      )
                    ? this.unexpected()
                    : f.id.type !== "Identifier" &&
                      !(n && (this.type === u._in || this.isContextual("of")))
                    ? this.raise(
                        this.lastTokEnd,
                        "Complex binding patterns require an initialization value"
                      )
                    : (f.init = null),
                  t.declarations.push(this.finishNode(f, "VariableDeclarator")),
                  !this.eat(u.comma))
                )
                  break;
              }
              return t;
            }),
            (Z.parseVarId = function (t, n) {
              (t.id = this.parseBindingAtom()),
                this.checkLValPattern(t.id, n === "var" ? Dt : Je, !1);
            });
          var _e = 1,
            Pt = 2,
            oi = 4;
          (Z.parseFunction = function (t, n, h, f, S) {
            this.initFunction(t),
              (this.options.ecmaVersion >= 9 ||
                (this.options.ecmaVersion >= 6 && !f)) &&
                (this.type === u.star && n & Pt && this.unexpected(),
                (t.generator = this.eat(u.star))),
              this.options.ecmaVersion >= 8 && (t.async = !!f),
              n & _e &&
                ((t.id =
                  n & oi && this.type !== u.name ? null : this.parseIdent()),
                t.id &&
                  !(n & Pt) &&
                  this.checkLValSimple(
                    t.id,
                    this.strict || t.generator || t.async
                      ? this.treatFunctionsAsVar
                        ? Dt
                        : Je
                      : si
                  ));
            var T = this.yieldPos,
              O = this.awaitPos,
              D = this.awaitIdentPos;
            return (
              (this.yieldPos = 0),
              (this.awaitPos = 0),
              (this.awaitIdentPos = 0),
              this.enterScope(Bt(t.async, t.generator)),
              n & _e ||
                (t.id = this.type === u.name ? this.parseIdent() : null),
              this.parseFunctionParams(t),
              this.parseFunctionBody(t, h, !1, S),
              (this.yieldPos = T),
              (this.awaitPos = O),
              (this.awaitIdentPos = D),
              this.finishNode(
                t,
                n & _e ? "FunctionDeclaration" : "FunctionExpression"
              )
            );
          }),
            (Z.parseFunctionParams = function (t) {
              this.expect(u.parenL),
                (t.params = this.parseBindingList(
                  u.parenR,
                  !1,
                  this.options.ecmaVersion >= 8
                )),
                this.checkYieldAwaitInDefaultParams();
            }),
            (Z.parseClass = function (t, n) {
              this.next();
              var h = this.strict;
              (this.strict = !0),
                this.parseClassId(t, n),
                this.parseClassSuper(t);
              var f = this.enterClassBody(),
                S = this.startNode(),
                T = !1;
              for (
                S.body = [], this.expect(u.braceL);
                this.type !== u.braceR;

              ) {
                var O = this.parseClassElement(t.superClass !== null);
                O &&
                  (S.body.push(O),
                  O.type === "MethodDefinition" && O.kind === "constructor"
                    ? (T &&
                        this.raise(
                          O.start,
                          "Duplicate constructor in the same class"
                        ),
                      (T = !0))
                    : O.key &&
                      O.key.type === "PrivateIdentifier" &&
                      we(f, O) &&
                      this.raiseRecoverable(
                        O.key.start,
                        "Identifier '#" +
                          O.key.name +
                          "' has already been declared"
                      ));
              }
              return (
                (this.strict = h),
                this.next(),
                (t.body = this.finishNode(S, "ClassBody")),
                this.exitClassBody(),
                this.finishNode(t, n ? "ClassDeclaration" : "ClassExpression")
              );
            }),
            (Z.parseClassElement = function (t) {
              if (this.eat(u.semi)) return null;
              var n = this.options.ecmaVersion,
                h = this.startNode(),
                f = "",
                S = !1,
                T = !1,
                O = "method",
                D = !1;
              if (this.eatContextual("static")) {
                if (n >= 13 && this.eat(u.braceL))
                  return this.parseClassStaticBlock(h), h;
                this.isClassElementNameStart() || this.type === u.star
                  ? (D = !0)
                  : (f = "static");
              }
              if (
                ((h.static = D),
                !f &&
                  n >= 8 &&
                  this.eatContextual("async") &&
                  ((this.isClassElementNameStart() || this.type === u.star) &&
                  !this.canInsertSemicolon()
                    ? (T = !0)
                    : (f = "async")),
                !f && (n >= 9 || !T) && this.eat(u.star) && (S = !0),
                !f && !T && !S)
              ) {
                var U = this.value;
                (this.eatContextual("get") || this.eatContextual("set")) &&
                  (this.isClassElementNameStart() ? (O = U) : (f = U));
              }
              if (
                (f
                  ? ((h.computed = !1),
                    (h.key = this.startNodeAt(
                      this.lastTokStart,
                      this.lastTokStartLoc
                    )),
                    (h.key.name = f),
                    this.finishNode(h.key, "Identifier"))
                  : this.parseClassElementName(h),
                n < 13 || this.type === u.parenL || O !== "method" || S || T)
              ) {
                var re = !h.static && Ne(h, "constructor"),
                  ue = re && t;
                re &&
                  O !== "method" &&
                  this.raise(
                    h.key.start,
                    "Constructor can't have get/set modifier"
                  ),
                  (h.kind = re ? "constructor" : O),
                  this.parseClassMethod(h, S, T, ue);
              } else this.parseClassField(h);
              return h;
            }),
            (Z.isClassElementNameStart = function () {
              return (
                this.type === u.name ||
                this.type === u.privateId ||
                this.type === u.num ||
                this.type === u.string ||
                this.type === u.bracketL ||
                this.type.keyword
              );
            }),
            (Z.parseClassElementName = function (t) {
              this.type === u.privateId
                ? (this.value === "constructor" &&
                    this.raise(
                      this.start,
                      "Classes can't have an element named '#constructor'"
                    ),
                  (t.computed = !1),
                  (t.key = this.parsePrivateIdent()))
                : this.parsePropertyName(t);
            }),
            (Z.parseClassMethod = function (t, n, h, f) {
              var S = t.key;
              t.kind === "constructor"
                ? (n && this.raise(S.start, "Constructor can't be a generator"),
                  h &&
                    this.raise(S.start, "Constructor can't be an async method"))
                : t.static &&
                  Ne(t, "prototype") &&
                  this.raise(
                    S.start,
                    "Classes may not have a static property named prototype"
                  );
              var T = (t.value = this.parseMethod(n, h, f));
              return (
                t.kind === "get" &&
                  T.params.length !== 0 &&
                  this.raiseRecoverable(
                    T.start,
                    "getter should have no params"
                  ),
                t.kind === "set" &&
                  T.params.length !== 1 &&
                  this.raiseRecoverable(
                    T.start,
                    "setter should have exactly one param"
                  ),
                t.kind === "set" &&
                  T.params[0].type === "RestElement" &&
                  this.raiseRecoverable(
                    T.params[0].start,
                    "Setter cannot use rest params"
                  ),
                this.finishNode(t, "MethodDefinition")
              );
            }),
            (Z.parseClassField = function (t) {
              if (
                (Ne(t, "constructor")
                  ? this.raise(
                      t.key.start,
                      "Classes can't have a field named 'constructor'"
                    )
                  : t.static &&
                    Ne(t, "prototype") &&
                    this.raise(
                      t.key.start,
                      "Classes can't have a static field named 'prototype'"
                    ),
                this.eat(u.eq))
              ) {
                var n = this.currentThisScope(),
                  h = n.inClassFieldInit;
                (n.inClassFieldInit = !0),
                  (t.value = this.parseMaybeAssign()),
                  (n.inClassFieldInit = h);
              } else t.value = null;
              return this.semicolon(), this.finishNode(t, "PropertyDefinition");
            }),
            (Z.parseClassStaticBlock = function (t) {
              t.body = [];
              var n = this.labels;
              for (
                this.labels = [], this.enterScope(vt | wt);
                this.type !== u.braceR;

              ) {
                var h = this.parseStatement(null);
                t.body.push(h);
              }
              return (
                this.next(),
                this.exitScope(),
                (this.labels = n),
                this.finishNode(t, "StaticBlock")
              );
            }),
            (Z.parseClassId = function (t, n) {
              this.type === u.name
                ? ((t.id = this.parseIdent()),
                  n && this.checkLValSimple(t.id, Je, !1))
                : (n === !0 && this.unexpected(), (t.id = null));
            }),
            (Z.parseClassSuper = function (t) {
              t.superClass = this.eat(u._extends)
                ? this.parseExprSubscripts(null, !1)
                : null;
            }),
            (Z.enterClassBody = function () {
              var t = { declared: Object.create(null), used: [] };
              return this.privateNameStack.push(t), t.declared;
            }),
            (Z.exitClassBody = function () {
              for (
                var t = this.privateNameStack.pop(),
                  n = t.declared,
                  h = t.used,
                  f = this.privateNameStack.length,
                  S = f === 0 ? null : this.privateNameStack[f - 1],
                  T = 0;
                T < h.length;
                ++T
              ) {
                var O = h[T];
                Se(n, O.name) ||
                  (S
                    ? S.used.push(O)
                    : this.raiseRecoverable(
                        O.start,
                        "Private field '#" +
                          O.name +
                          "' must be declared in an enclosing class"
                      ));
              }
            });
          function we(t, n) {
            var h = n.key.name,
              f = t[h],
              S = "true";
            return (
              n.type === "MethodDefinition" &&
                (n.kind === "get" || n.kind === "set") &&
                (S = (n.static ? "s" : "i") + n.kind),
              (f === "iget" && S === "iset") ||
              (f === "iset" && S === "iget") ||
              (f === "sget" && S === "sset") ||
              (f === "sset" && S === "sget")
                ? ((t[h] = "true"), !1)
                : f
                ? !0
                : ((t[h] = S), !1)
            );
          }
          function Ne(t, n) {
            var h = t.computed,
              f = t.key;
            return (
              !h &&
              ((f.type === "Identifier" && f.name === n) ||
                (f.type === "Literal" && f.value === n))
            );
          }
          (Z.parseExport = function (t, n) {
            if ((this.next(), this.eat(u.star)))
              return (
                this.options.ecmaVersion >= 11 &&
                  (this.eatContextual("as")
                    ? ((t.exported = this.parseModuleExportName()),
                      this.checkExport(n, t.exported, this.lastTokStart))
                    : (t.exported = null)),
                this.expectContextual("from"),
                this.type !== u.string && this.unexpected(),
                (t.source = this.parseExprAtom()),
                this.semicolon(),
                this.finishNode(t, "ExportAllDeclaration")
              );
            if (this.eat(u._default)) {
              this.checkExport(n, "default", this.lastTokStart);
              var h;
              if (this.type === u._function || (h = this.isAsyncFunction())) {
                var f = this.startNode();
                this.next(),
                  h && this.next(),
                  (t.declaration = this.parseFunction(f, _e | oi, !1, h));
              } else if (this.type === u._class) {
                var S = this.startNode();
                t.declaration = this.parseClass(S, "nullableID");
              } else
                (t.declaration = this.parseMaybeAssign()), this.semicolon();
              return this.finishNode(t, "ExportDefaultDeclaration");
            }
            if (this.shouldParseExportStatement())
              (t.declaration = this.parseStatement(null)),
                t.declaration.type === "VariableDeclaration"
                  ? this.checkVariableExport(n, t.declaration.declarations)
                  : this.checkExport(
                      n,
                      t.declaration.id,
                      t.declaration.id.start
                    ),
                (t.specifiers = []),
                (t.source = null);
            else {
              if (
                ((t.declaration = null),
                (t.specifiers = this.parseExportSpecifiers(n)),
                this.eatContextual("from"))
              )
                this.type !== u.string && this.unexpected(),
                  (t.source = this.parseExprAtom());
              else {
                for (var T = 0, O = t.specifiers; T < O.length; T += 1) {
                  var D = O[T];
                  this.checkUnreserved(D.local),
                    this.checkLocalExport(D.local),
                    D.local.type === "Literal" &&
                      this.raise(
                        D.local.start,
                        "A string literal cannot be used as an exported binding without `from`."
                      );
                }
                t.source = null;
              }
              this.semicolon();
            }
            return this.finishNode(t, "ExportNamedDeclaration");
          }),
            (Z.checkExport = function (t, n, h) {
              t &&
                (typeof n != "string" &&
                  (n = n.type === "Identifier" ? n.name : n.value),
                Se(t, n) &&
                  this.raiseRecoverable(h, "Duplicate export '" + n + "'"),
                (t[n] = !0));
            }),
            (Z.checkPatternExport = function (t, n) {
              var h = n.type;
              if (h === "Identifier") this.checkExport(t, n, n.start);
              else if (h === "ObjectPattern")
                for (var f = 0, S = n.properties; f < S.length; f += 1) {
                  var T = S[f];
                  this.checkPatternExport(t, T);
                }
              else if (h === "ArrayPattern")
                for (var O = 0, D = n.elements; O < D.length; O += 1) {
                  var U = D[O];
                  U && this.checkPatternExport(t, U);
                }
              else
                h === "Property"
                  ? this.checkPatternExport(t, n.value)
                  : h === "AssignmentPattern"
                  ? this.checkPatternExport(t, n.left)
                  : h === "RestElement"
                  ? this.checkPatternExport(t, n.argument)
                  : h === "ParenthesizedExpression" &&
                    this.checkPatternExport(t, n.expression);
            }),
            (Z.checkVariableExport = function (t, n) {
              if (t)
                for (var h = 0, f = n; h < f.length; h += 1) {
                  var S = f[h];
                  this.checkPatternExport(t, S.id);
                }
            }),
            (Z.shouldParseExportStatement = function () {
              return (
                this.type.keyword === "var" ||
                this.type.keyword === "const" ||
                this.type.keyword === "class" ||
                this.type.keyword === "function" ||
                this.isLet() ||
                this.isAsyncFunction()
              );
            }),
            (Z.parseExportSpecifiers = function (t) {
              var n = [],
                h = !0;
              for (this.expect(u.braceL); !this.eat(u.braceR); ) {
                if (h) h = !1;
                else if (
                  (this.expect(u.comma), this.afterTrailingComma(u.braceR))
                )
                  break;
                var f = this.startNode();
                (f.local = this.parseModuleExportName()),
                  (f.exported = this.eatContextual("as")
                    ? this.parseModuleExportName()
                    : f.local),
                  this.checkExport(t, f.exported, f.exported.start),
                  n.push(this.finishNode(f, "ExportSpecifier"));
              }
              return n;
            }),
            (Z.parseImport = function (t) {
              return (
                this.next(),
                this.type === u.string
                  ? ((t.specifiers = lt), (t.source = this.parseExprAtom()))
                  : ((t.specifiers = this.parseImportSpecifiers()),
                    this.expectContextual("from"),
                    (t.source =
                      this.type === u.string
                        ? this.parseExprAtom()
                        : this.unexpected())),
                this.semicolon(),
                this.finishNode(t, "ImportDeclaration")
              );
            }),
            (Z.parseImportSpecifiers = function () {
              var t = [],
                n = !0;
              if (this.type === u.name) {
                var h = this.startNode();
                if (
                  ((h.local = this.parseIdent()),
                  this.checkLValSimple(h.local, Je),
                  t.push(this.finishNode(h, "ImportDefaultSpecifier")),
                  !this.eat(u.comma))
                )
                  return t;
              }
              if (this.type === u.star) {
                var f = this.startNode();
                return (
                  this.next(),
                  this.expectContextual("as"),
                  (f.local = this.parseIdent()),
                  this.checkLValSimple(f.local, Je),
                  t.push(this.finishNode(f, "ImportNamespaceSpecifier")),
                  t
                );
              }
              for (this.expect(u.braceL); !this.eat(u.braceR); ) {
                if (n) n = !1;
                else if (
                  (this.expect(u.comma), this.afterTrailingComma(u.braceR))
                )
                  break;
                var S = this.startNode();
                (S.imported = this.parseModuleExportName()),
                  this.eatContextual("as")
                    ? (S.local = this.parseIdent())
                    : (this.checkUnreserved(S.imported),
                      (S.local = S.imported)),
                  this.checkLValSimple(S.local, Je),
                  t.push(this.finishNode(S, "ImportSpecifier"));
              }
              return t;
            }),
            (Z.parseModuleExportName = function () {
              if (this.options.ecmaVersion >= 13 && this.type === u.string) {
                var t = this.parseLiteral(this.value);
                return (
                  Ue.test(t.value) &&
                    this.raise(
                      t.start,
                      "An export name cannot include a lone surrogate."
                    ),
                  t
                );
              }
              return this.parseIdent(!0);
            }),
            (Z.adaptDirectivePrologue = function (t) {
              for (
                var n = 0;
                n < t.length && this.isDirectiveCandidate(t[n]);
                ++n
              )
                t[n].directive = t[n].expression.raw.slice(1, -1);
            }),
            (Z.isDirectiveCandidate = function (t) {
              return (
                this.options.ecmaVersion >= 5 &&
                t.type === "ExpressionStatement" &&
                t.expression.type === "Literal" &&
                typeof t.expression.value == "string" &&
                (this.input[t.start] === '"' || this.input[t.start] === "'")
              );
            });
          var Le = se.prototype;
          (Le.toAssignable = function (t, n, h) {
            if (this.options.ecmaVersion >= 6 && t)
              switch (t.type) {
                case "Identifier":
                  this.inAsync &&
                    t.name === "await" &&
                    this.raise(
                      t.start,
                      "Cannot use 'await' as identifier inside an async function"
                    );
                  break;
                case "ObjectPattern":
                case "ArrayPattern":
                case "AssignmentPattern":
                case "RestElement":
                  break;
                case "ObjectExpression":
                  (t.type = "ObjectPattern"),
                    h && this.checkPatternErrors(h, !0);
                  for (var f = 0, S = t.properties; f < S.length; f += 1) {
                    var T = S[f];
                    this.toAssignable(T, n),
                      T.type === "RestElement" &&
                        (T.argument.type === "ArrayPattern" ||
                          T.argument.type === "ObjectPattern") &&
                        this.raise(T.argument.start, "Unexpected token");
                  }
                  break;
                case "Property":
                  t.kind !== "init" &&
                    this.raise(
                      t.key.start,
                      "Object pattern can't contain getter or setter"
                    ),
                    this.toAssignable(t.value, n);
                  break;
                case "ArrayExpression":
                  (t.type = "ArrayPattern"),
                    h && this.checkPatternErrors(h, !0),
                    this.toAssignableList(t.elements, n);
                  break;
                case "SpreadElement":
                  (t.type = "RestElement"),
                    this.toAssignable(t.argument, n),
                    t.argument.type === "AssignmentPattern" &&
                      this.raise(
                        t.argument.start,
                        "Rest elements cannot have a default value"
                      );
                  break;
                case "AssignmentExpression":
                  t.operator !== "=" &&
                    this.raise(
                      t.left.end,
                      "Only '=' operator can be used for specifying default value."
                    ),
                    (t.type = "AssignmentPattern"),
                    delete t.operator,
                    this.toAssignable(t.left, n);
                  break;
                case "ParenthesizedExpression":
                  this.toAssignable(t.expression, n, h);
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(
                    t.start,
                    "Optional chaining cannot appear in left-hand side"
                  );
                  break;
                case "MemberExpression":
                  if (!n) break;
                default:
                  this.raise(t.start, "Assigning to rvalue");
              }
            else h && this.checkPatternErrors(h, !0);
            return t;
          }),
            (Le.toAssignableList = function (t, n) {
              for (var h = t.length, f = 0; f < h; f++) {
                var S = t[f];
                S && this.toAssignable(S, n);
              }
              if (h) {
                var T = t[h - 1];
                this.options.ecmaVersion === 6 &&
                  n &&
                  T &&
                  T.type === "RestElement" &&
                  T.argument.type !== "Identifier" &&
                  this.unexpected(T.argument.start);
              }
              return t;
            }),
            (Le.parseSpread = function (t) {
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeAssign(!1, t)),
                this.finishNode(n, "SpreadElement")
              );
            }),
            (Le.parseRestBinding = function () {
              var t = this.startNode();
              return (
                this.next(),
                this.options.ecmaVersion === 6 &&
                  this.type !== u.name &&
                  this.unexpected(),
                (t.argument = this.parseBindingAtom()),
                this.finishNode(t, "RestElement")
              );
            }),
            (Le.parseBindingAtom = function () {
              if (this.options.ecmaVersion >= 6)
                switch (this.type) {
                  case u.bracketL:
                    var t = this.startNode();
                    return (
                      this.next(),
                      (t.elements = this.parseBindingList(u.bracketR, !0, !0)),
                      this.finishNode(t, "ArrayPattern")
                    );
                  case u.braceL:
                    return this.parseObj(!0);
                }
              return this.parseIdent();
            }),
            (Le.parseBindingList = function (t, n, h) {
              for (var f = [], S = !0; !this.eat(t); )
                if (
                  (S ? (S = !1) : this.expect(u.comma),
                  n && this.type === u.comma)
                )
                  f.push(null);
                else {
                  if (h && this.afterTrailingComma(t)) break;
                  if (this.type === u.ellipsis) {
                    var T = this.parseRestBinding();
                    this.parseBindingListItem(T),
                      f.push(T),
                      this.type === u.comma &&
                        this.raise(
                          this.start,
                          "Comma is not permitted after the rest element"
                        ),
                      this.expect(t);
                    break;
                  } else {
                    var O = this.parseMaybeDefault(this.start, this.startLoc);
                    this.parseBindingListItem(O), f.push(O);
                  }
                }
              return f;
            }),
            (Le.parseBindingListItem = function (t) {
              return t;
            }),
            (Le.parseMaybeDefault = function (t, n, h) {
              if (
                ((h = h || this.parseBindingAtom()),
                this.options.ecmaVersion < 6 || !this.eat(u.eq))
              )
                return h;
              var f = this.startNodeAt(t, n);
              return (
                (f.left = h),
                (f.right = this.parseMaybeAssign()),
                this.finishNode(f, "AssignmentPattern")
              );
            }),
            (Le.checkLValSimple = function (t, n, h) {
              n === void 0 && (n = At);
              var f = n !== At;
              switch (t.type) {
                case "Identifier":
                  this.strict &&
                    this.reservedWordsStrictBind.test(t.name) &&
                    this.raiseRecoverable(
                      t.start,
                      (f ? "Binding " : "Assigning to ") +
                        t.name +
                        " in strict mode"
                    ),
                    f &&
                      (n === Je &&
                        t.name === "let" &&
                        this.raiseRecoverable(
                          t.start,
                          "let is disallowed as a lexically bound name"
                        ),
                      h &&
                        (Se(h, t.name) &&
                          this.raiseRecoverable(t.start, "Argument name clash"),
                        (h[t.name] = !0)),
                      n !== de && this.declareName(t.name, n, t.start));
                  break;
                case "ChainExpression":
                  this.raiseRecoverable(
                    t.start,
                    "Optional chaining cannot appear in left-hand side"
                  );
                  break;
                case "MemberExpression":
                  f &&
                    this.raiseRecoverable(t.start, "Binding member expression");
                  break;
                case "ParenthesizedExpression":
                  return (
                    f &&
                      this.raiseRecoverable(
                        t.start,
                        "Binding parenthesized expression"
                      ),
                    this.checkLValSimple(t.expression, n, h)
                  );
                default:
                  this.raise(
                    t.start,
                    (f ? "Binding" : "Assigning to") + " rvalue"
                  );
              }
            }),
            (Le.checkLValPattern = function (t, n, h) {
              switch ((n === void 0 && (n = At), t.type)) {
                case "ObjectPattern":
                  for (var f = 0, S = t.properties; f < S.length; f += 1) {
                    var T = S[f];
                    this.checkLValInnerPattern(T, n, h);
                  }
                  break;
                case "ArrayPattern":
                  for (var O = 0, D = t.elements; O < D.length; O += 1) {
                    var U = D[O];
                    U && this.checkLValInnerPattern(U, n, h);
                  }
                  break;
                default:
                  this.checkLValSimple(t, n, h);
              }
            }),
            (Le.checkLValInnerPattern = function (t, n, h) {
              switch ((n === void 0 && (n = At), t.type)) {
                case "Property":
                  this.checkLValInnerPattern(t.value, n, h);
                  break;
                case "AssignmentPattern":
                  this.checkLValPattern(t.left, n, h);
                  break;
                case "RestElement":
                  this.checkLValPattern(t.argument, n, h);
                  break;
                default:
                  this.checkLValPattern(t, n, h);
              }
            });
          var Re = function (n, h, f, S, T) {
              (this.token = n),
                (this.isExpr = !!h),
                (this.preserveSpace = !!f),
                (this.override = S),
                (this.generator = !!T);
            },
            ve = {
              b_stat: new Re("{", !1),
              b_expr: new Re("{", !0),
              b_tmpl: new Re("${", !1),
              p_stat: new Re("(", !1),
              p_expr: new Re("(", !0),
              q_tmpl: new Re("`", !0, !0, function (t) {
                return t.tryReadTemplateToken();
              }),
              f_stat: new Re("function", !1),
              f_expr: new Re("function", !0),
              f_expr_gen: new Re("function", !0, !1, null, !0),
              f_gen: new Re("function", !1, !1, null, !0),
            },
            ct = se.prototype;
          (ct.initialContext = function () {
            return [ve.b_stat];
          }),
            (ct.curContext = function () {
              return this.context[this.context.length - 1];
            }),
            (ct.braceIsBlock = function (t) {
              var n = this.curContext();
              return n === ve.f_expr || n === ve.f_stat
                ? !0
                : t === u.colon && (n === ve.b_stat || n === ve.b_expr)
                ? !n.isExpr
                : t === u._return || (t === u.name && this.exprAllowed)
                ? w.test(this.input.slice(this.lastTokEnd, this.start))
                : t === u._else ||
                  t === u.semi ||
                  t === u.eof ||
                  t === u.parenR ||
                  t === u.arrow
                ? !0
                : t === u.braceL
                ? n === ve.b_stat
                : t === u._var || t === u._const || t === u.name
                ? !1
                : !this.exprAllowed;
            }),
            (ct.inGeneratorContext = function () {
              for (var t = this.context.length - 1; t >= 1; t--) {
                var n = this.context[t];
                if (n.token === "function") return n.generator;
              }
              return !1;
            }),
            (ct.updateContext = function (t) {
              var n,
                h = this.type;
              h.keyword && t === u.dot
                ? (this.exprAllowed = !1)
                : (n = h.updateContext)
                ? n.call(this, t)
                : (this.exprAllowed = h.beforeExpr);
            }),
            (ct.overrideContext = function (t) {
              this.curContext() !== t &&
                (this.context[this.context.length - 1] = t);
            }),
            (u.parenR.updateContext = u.braceR.updateContext =
              function () {
                if (this.context.length === 1) {
                  this.exprAllowed = !0;
                  return;
                }
                var t = this.context.pop();
                t === ve.b_stat &&
                  this.curContext().token === "function" &&
                  (t = this.context.pop()),
                  (this.exprAllowed = !t.isExpr);
              }),
            (u.braceL.updateContext = function (t) {
              this.context.push(this.braceIsBlock(t) ? ve.b_stat : ve.b_expr),
                (this.exprAllowed = !0);
            }),
            (u.dollarBraceL.updateContext = function () {
              this.context.push(ve.b_tmpl), (this.exprAllowed = !0);
            }),
            (u.parenL.updateContext = function (t) {
              var n =
                t === u._if || t === u._for || t === u._with || t === u._while;
              this.context.push(n ? ve.p_stat : ve.p_expr),
                (this.exprAllowed = !0);
            }),
            (u.incDec.updateContext = function () {}),
            (u._function.updateContext = u._class.updateContext =
              function (t) {
                t.beforeExpr &&
                t !== u._else &&
                !(t === u.semi && this.curContext() !== ve.p_stat) &&
                !(
                  t === u._return &&
                  w.test(this.input.slice(this.lastTokEnd, this.start))
                ) &&
                !(
                  (t === u.colon || t === u.braceL) &&
                  this.curContext() === ve.b_stat
                )
                  ? this.context.push(ve.f_expr)
                  : this.context.push(ve.f_stat),
                  (this.exprAllowed = !1);
              }),
            (u.backQuote.updateContext = function () {
              this.curContext() === ve.q_tmpl
                ? this.context.pop()
                : this.context.push(ve.q_tmpl),
                (this.exprAllowed = !1);
            }),
            (u.star.updateContext = function (t) {
              if (t === u._function) {
                var n = this.context.length - 1;
                this.context[n] === ve.f_expr
                  ? (this.context[n] = ve.f_expr_gen)
                  : (this.context[n] = ve.f_gen);
              }
              this.exprAllowed = !0;
            }),
            (u.name.updateContext = function (t) {
              var n = !1;
              this.options.ecmaVersion >= 6 &&
                t !== u.dot &&
                ((this.value === "of" && !this.exprAllowed) ||
                  (this.value === "yield" && this.inGeneratorContext())) &&
                (n = !0),
                (this.exprAllowed = n);
            });
          var ie = se.prototype;
          (ie.checkPropClash = function (t, n, h) {
            if (
              !(this.options.ecmaVersion >= 9 && t.type === "SpreadElement") &&
              !(
                this.options.ecmaVersion >= 6 &&
                (t.computed || t.method || t.shorthand)
              )
            ) {
              var f = t.key,
                S;
              switch (f.type) {
                case "Identifier":
                  S = f.name;
                  break;
                case "Literal":
                  S = String(f.value);
                  break;
                default:
                  return;
              }
              var T = t.kind;
              if (this.options.ecmaVersion >= 6) {
                S === "__proto__" &&
                  T === "init" &&
                  (n.proto &&
                    (h
                      ? h.doubleProto < 0 && (h.doubleProto = f.start)
                      : this.raiseRecoverable(
                          f.start,
                          "Redefinition of __proto__ property"
                        )),
                  (n.proto = !0));
                return;
              }
              S = "$" + S;
              var O = n[S];
              if (O) {
                var D;
                T === "init"
                  ? (D = (this.strict && O.init) || O.get || O.set)
                  : (D = O.init || O[T]),
                  D &&
                    this.raiseRecoverable(f.start, "Redefinition of property");
              } else O = n[S] = { init: !1, get: !1, set: !1 };
              O[T] = !0;
            }
          }),
            (ie.parseExpression = function (t, n) {
              var h = this.start,
                f = this.startLoc,
                S = this.parseMaybeAssign(t, n);
              if (this.type === u.comma) {
                var T = this.startNodeAt(h, f);
                for (T.expressions = [S]; this.eat(u.comma); )
                  T.expressions.push(this.parseMaybeAssign(t, n));
                return this.finishNode(T, "SequenceExpression");
              }
              return S;
            }),
            (ie.parseMaybeAssign = function (t, n, h) {
              if (this.isContextual("yield")) {
                if (this.inGenerator) return this.parseYield(t);
                this.exprAllowed = !1;
              }
              var f = !1,
                S = -1,
                T = -1,
                O = -1;
              n
                ? ((S = n.parenthesizedAssign),
                  (T = n.trailingComma),
                  (O = n.doubleProto),
                  (n.parenthesizedAssign = n.trailingComma = -1))
                : ((n = new It()), (f = !0));
              var D = this.start,
                U = this.startLoc;
              (this.type === u.parenL || this.type === u.name) &&
                ((this.potentialArrowAt = this.start),
                (this.potentialArrowInForAwait = t === "await"));
              var re = this.parseMaybeConditional(t, n);
              if ((h && (re = h.call(this, re, D, U)), this.type.isAssign)) {
                var ue = this.startNodeAt(D, U);
                return (
                  (ue.operator = this.value),
                  this.type === u.eq && (re = this.toAssignable(re, !1, n)),
                  f ||
                    (n.parenthesizedAssign =
                      n.trailingComma =
                      n.doubleProto =
                        -1),
                  n.shorthandAssign >= re.start && (n.shorthandAssign = -1),
                  this.type === u.eq
                    ? this.checkLValPattern(re)
                    : this.checkLValSimple(re),
                  (ue.left = re),
                  this.next(),
                  (ue.right = this.parseMaybeAssign(t)),
                  O > -1 && (n.doubleProto = O),
                  this.finishNode(ue, "AssignmentExpression")
                );
              } else f && this.checkExpressionErrors(n, !0);
              return (
                S > -1 && (n.parenthesizedAssign = S),
                T > -1 && (n.trailingComma = T),
                re
              );
            }),
            (ie.parseMaybeConditional = function (t, n) {
              var h = this.start,
                f = this.startLoc,
                S = this.parseExprOps(t, n);
              if (this.checkExpressionErrors(n)) return S;
              if (this.eat(u.question)) {
                var T = this.startNodeAt(h, f);
                return (
                  (T.test = S),
                  (T.consequent = this.parseMaybeAssign()),
                  this.expect(u.colon),
                  (T.alternate = this.parseMaybeAssign(t)),
                  this.finishNode(T, "ConditionalExpression")
                );
              }
              return S;
            }),
            (ie.parseExprOps = function (t, n) {
              var h = this.start,
                f = this.startLoc,
                S = this.parseMaybeUnary(n, !1, !1, t);
              return this.checkExpressionErrors(n) ||
                (S.start === h && S.type === "ArrowFunctionExpression")
                ? S
                : this.parseExprOp(S, h, f, -1, t);
            }),
            (ie.parseExprOp = function (t, n, h, f, S) {
              var T = this.type.binop;
              if (T != null && (!S || this.type !== u._in) && T > f) {
                var O = this.type === u.logicalOR || this.type === u.logicalAND,
                  D = this.type === u.coalesce;
                D && (T = u.logicalAND.binop);
                var U = this.value;
                this.next();
                var re = this.start,
                  ue = this.startLoc,
                  Oe = this.parseExprOp(
                    this.parseMaybeUnary(null, !1, !1, S),
                    re,
                    ue,
                    T,
                    S
                  ),
                  yt = this.buildBinary(n, h, t, Oe, U, O || D);
                return (
                  ((O && this.type === u.coalesce) ||
                    (D &&
                      (this.type === u.logicalOR ||
                        this.type === u.logicalAND))) &&
                    this.raiseRecoverable(
                      this.start,
                      "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"
                    ),
                  this.parseExprOp(yt, n, h, f, S)
                );
              }
              return t;
            }),
            (ie.buildBinary = function (t, n, h, f, S, T) {
              f.type === "PrivateIdentifier" &&
                this.raise(
                  f.start,
                  "Private identifier can only be left side of binary expression"
                );
              var O = this.startNodeAt(t, n);
              return (
                (O.left = h),
                (O.operator = S),
                (O.right = f),
                this.finishNode(O, T ? "LogicalExpression" : "BinaryExpression")
              );
            }),
            (ie.parseMaybeUnary = function (t, n, h, f) {
              var S = this.start,
                T = this.startLoc,
                O;
              if (this.isContextual("await") && this.canAwait)
                (O = this.parseAwait(f)), (n = !0);
              else if (this.type.prefix) {
                var D = this.startNode(),
                  U = this.type === u.incDec;
                (D.operator = this.value),
                  (D.prefix = !0),
                  this.next(),
                  (D.argument = this.parseMaybeUnary(null, !0, U, f)),
                  this.checkExpressionErrors(t, !0),
                  U
                    ? this.checkLValSimple(D.argument)
                    : this.strict &&
                      D.operator === "delete" &&
                      D.argument.type === "Identifier"
                    ? this.raiseRecoverable(
                        D.start,
                        "Deleting local variable in strict mode"
                      )
                    : D.operator === "delete" && a(D.argument)
                    ? this.raiseRecoverable(
                        D.start,
                        "Private fields can not be deleted"
                      )
                    : (n = !0),
                  (O = this.finishNode(
                    D,
                    U ? "UpdateExpression" : "UnaryExpression"
                  ));
              } else if (!n && this.type === u.privateId)
                (f || this.privateNameStack.length === 0) && this.unexpected(),
                  (O = this.parsePrivateIdent()),
                  this.type !== u._in && this.unexpected();
              else {
                if (
                  ((O = this.parseExprSubscripts(t, f)),
                  this.checkExpressionErrors(t))
                )
                  return O;
                for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                  var re = this.startNodeAt(S, T);
                  (re.operator = this.value),
                    (re.prefix = !1),
                    (re.argument = O),
                    this.checkLValSimple(O),
                    this.next(),
                    (O = this.finishNode(re, "UpdateExpression"));
                }
              }
              if (!h && this.eat(u.starstar))
                if (n) this.unexpected(this.lastTokStart);
                else
                  return this.buildBinary(
                    S,
                    T,
                    O,
                    this.parseMaybeUnary(null, !1, !1, f),
                    "**",
                    !1
                  );
              else return O;
            });
          function a(t) {
            return (
              (t.type === "MemberExpression" &&
                t.property.type === "PrivateIdentifier") ||
              (t.type === "ChainExpression" && a(t.expression))
            );
          }
          (ie.parseExprSubscripts = function (t, n) {
            var h = this.start,
              f = this.startLoc,
              S = this.parseExprAtom(t, n);
            if (
              S.type === "ArrowFunctionExpression" &&
              this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")"
            )
              return S;
            var T = this.parseSubscripts(S, h, f, !1, n);
            return (
              t &&
                T.type === "MemberExpression" &&
                (t.parenthesizedAssign >= T.start &&
                  (t.parenthesizedAssign = -1),
                t.parenthesizedBind >= T.start && (t.parenthesizedBind = -1),
                t.trailingComma >= T.start && (t.trailingComma = -1)),
              T
            );
          }),
            (ie.parseSubscripts = function (t, n, h, f, S) {
              for (
                var T =
                    this.options.ecmaVersion >= 8 &&
                    t.type === "Identifier" &&
                    t.name === "async" &&
                    this.lastTokEnd === t.end &&
                    !this.canInsertSemicolon() &&
                    t.end - t.start === 5 &&
                    this.potentialArrowAt === t.start,
                  O = !1;
                ;

              ) {
                var D = this.parseSubscript(t, n, h, f, T, O, S);
                if (
                  (D.optional && (O = !0),
                  D === t || D.type === "ArrowFunctionExpression")
                ) {
                  if (O) {
                    var U = this.startNodeAt(n, h);
                    (U.expression = D),
                      (D = this.finishNode(U, "ChainExpression"));
                  }
                  return D;
                }
                t = D;
              }
            }),
            (ie.parseSubscript = function (t, n, h, f, S, T, O) {
              var D = this.options.ecmaVersion >= 11,
                U = D && this.eat(u.questionDot);
              f &&
                U &&
                this.raise(
                  this.lastTokStart,
                  "Optional chaining cannot appear in the callee of new expressions"
                );
              var re = this.eat(u.bracketL);
              if (
                re ||
                (U && this.type !== u.parenL && this.type !== u.backQuote) ||
                this.eat(u.dot)
              ) {
                var ue = this.startNodeAt(n, h);
                (ue.object = t),
                  re
                    ? ((ue.property = this.parseExpression()),
                      this.expect(u.bracketR))
                    : this.type === u.privateId && t.type !== "Super"
                    ? (ue.property = this.parsePrivateIdent())
                    : (ue.property = this.parseIdent(
                        this.options.allowReserved !== "never"
                      )),
                  (ue.computed = !!re),
                  D && (ue.optional = U),
                  (t = this.finishNode(ue, "MemberExpression"));
              } else if (!f && this.eat(u.parenL)) {
                var Oe = new It(),
                  yt = this.yieldPos,
                  qt = this.awaitPos,
                  Tt = this.awaitIdentPos;
                (this.yieldPos = 0),
                  (this.awaitPos = 0),
                  (this.awaitIdentPos = 0);
                var pi = this.parseExprList(
                  u.parenR,
                  this.options.ecmaVersion >= 8,
                  !1,
                  Oe
                );
                if (S && !U && !this.canInsertSemicolon() && this.eat(u.arrow))
                  return (
                    this.checkPatternErrors(Oe, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    this.awaitIdentPos > 0 &&
                      this.raise(
                        this.awaitIdentPos,
                        "Cannot use 'await' as identifier inside an async function"
                      ),
                    (this.yieldPos = yt),
                    (this.awaitPos = qt),
                    (this.awaitIdentPos = Tt),
                    this.parseArrowExpression(this.startNodeAt(n, h), pi, !0, O)
                  );
                this.checkExpressionErrors(Oe, !0),
                  (this.yieldPos = yt || this.yieldPos),
                  (this.awaitPos = qt || this.awaitPos),
                  (this.awaitIdentPos = Tt || this.awaitIdentPos);
                var Nt = this.startNodeAt(n, h);
                (Nt.callee = t),
                  (Nt.arguments = pi),
                  D && (Nt.optional = U),
                  (t = this.finishNode(Nt, "CallExpression"));
              } else if (this.type === u.backQuote) {
                (U || T) &&
                  this.raise(
                    this.start,
                    "Optional chaining cannot appear in the tag of tagged template expressions"
                  );
                var Lt = this.startNodeAt(n, h);
                (Lt.tag = t),
                  (Lt.quasi = this.parseTemplate({ isTagged: !0 })),
                  (t = this.finishNode(Lt, "TaggedTemplateExpression"));
              }
              return t;
            }),
            (ie.parseExprAtom = function (t, n) {
              this.type === u.slash && this.readRegexp();
              var h,
                f = this.potentialArrowAt === this.start;
              switch (this.type) {
                case u._super:
                  return (
                    this.allowSuper ||
                      this.raise(
                        this.start,
                        "'super' keyword outside a method"
                      ),
                    (h = this.startNode()),
                    this.next(),
                    this.type === u.parenL &&
                      !this.allowDirectSuper &&
                      this.raise(
                        h.start,
                        "super() call outside constructor of a subclass"
                      ),
                    this.type !== u.dot &&
                      this.type !== u.bracketL &&
                      this.type !== u.parenL &&
                      this.unexpected(),
                    this.finishNode(h, "Super")
                  );
                case u._this:
                  return (
                    (h = this.startNode()),
                    this.next(),
                    this.finishNode(h, "ThisExpression")
                  );
                case u.name:
                  var S = this.start,
                    T = this.startLoc,
                    O = this.containsEsc,
                    D = this.parseIdent(!1);
                  if (
                    this.options.ecmaVersion >= 8 &&
                    !O &&
                    D.name === "async" &&
                    !this.canInsertSemicolon() &&
                    this.eat(u._function)
                  )
                    return (
                      this.overrideContext(ve.f_expr),
                      this.parseFunction(this.startNodeAt(S, T), 0, !1, !0, n)
                    );
                  if (f && !this.canInsertSemicolon()) {
                    if (this.eat(u.arrow))
                      return this.parseArrowExpression(
                        this.startNodeAt(S, T),
                        [D],
                        !1,
                        n
                      );
                    if (
                      this.options.ecmaVersion >= 8 &&
                      D.name === "async" &&
                      this.type === u.name &&
                      !O &&
                      (!this.potentialArrowInForAwait ||
                        this.value !== "of" ||
                        this.containsEsc)
                    )
                      return (
                        (D = this.parseIdent(!1)),
                        (this.canInsertSemicolon() || !this.eat(u.arrow)) &&
                          this.unexpected(),
                        this.parseArrowExpression(
                          this.startNodeAt(S, T),
                          [D],
                          !0,
                          n
                        )
                      );
                  }
                  return D;
                case u.regexp:
                  var U = this.value;
                  return (
                    (h = this.parseLiteral(U.value)),
                    (h.regex = { pattern: U.pattern, flags: U.flags }),
                    h
                  );
                case u.num:
                case u.string:
                  return this.parseLiteral(this.value);
                case u._null:
                case u._true:
                case u._false:
                  return (
                    (h = this.startNode()),
                    (h.value =
                      this.type === u._null ? null : this.type === u._true),
                    (h.raw = this.type.keyword),
                    this.next(),
                    this.finishNode(h, "Literal")
                  );
                case u.parenL:
                  var re = this.start,
                    ue = this.parseParenAndDistinguishExpression(f, n);
                  return (
                    t &&
                      (t.parenthesizedAssign < 0 &&
                        !this.isSimpleAssignTarget(ue) &&
                        (t.parenthesizedAssign = re),
                      t.parenthesizedBind < 0 && (t.parenthesizedBind = re)),
                    ue
                  );
                case u.bracketL:
                  return (
                    (h = this.startNode()),
                    this.next(),
                    (h.elements = this.parseExprList(u.bracketR, !0, !0, t)),
                    this.finishNode(h, "ArrayExpression")
                  );
                case u.braceL:
                  return this.overrideContext(ve.b_expr), this.parseObj(!1, t);
                case u._function:
                  return (
                    (h = this.startNode()),
                    this.next(),
                    this.parseFunction(h, 0)
                  );
                case u._class:
                  return this.parseClass(this.startNode(), !1);
                case u._new:
                  return this.parseNew();
                case u.backQuote:
                  return this.parseTemplate();
                case u._import:
                  return this.options.ecmaVersion >= 11
                    ? this.parseExprImport()
                    : this.unexpected();
                default:
                  this.unexpected();
              }
            }),
            (ie.parseExprImport = function () {
              var t = this.startNode();
              this.containsEsc &&
                this.raiseRecoverable(
                  this.start,
                  "Escape sequence in keyword import"
                );
              var n = this.parseIdent(!0);
              switch (this.type) {
                case u.parenL:
                  return this.parseDynamicImport(t);
                case u.dot:
                  return (t.meta = n), this.parseImportMeta(t);
                default:
                  this.unexpected();
              }
            }),
            (ie.parseDynamicImport = function (t) {
              if (
                (this.next(),
                (t.source = this.parseMaybeAssign()),
                !this.eat(u.parenR))
              ) {
                var n = this.start;
                this.eat(u.comma) && this.eat(u.parenR)
                  ? this.raiseRecoverable(
                      n,
                      "Trailing comma is not allowed in import()"
                    )
                  : this.unexpected(n);
              }
              return this.finishNode(t, "ImportExpression");
            }),
            (ie.parseImportMeta = function (t) {
              this.next();
              var n = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== "meta" &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for import is 'import.meta'"
                  ),
                n &&
                  this.raiseRecoverable(
                    t.start,
                    "'import.meta' must not contain escaped characters"
                  ),
                this.options.sourceType !== "module" &&
                  !this.options.allowImportExportEverywhere &&
                  this.raiseRecoverable(
                    t.start,
                    "Cannot use 'import.meta' outside a module"
                  ),
                this.finishNode(t, "MetaProperty")
              );
            }),
            (ie.parseLiteral = function (t) {
              var n = this.startNode();
              return (
                (n.value = t),
                (n.raw = this.input.slice(this.start, this.end)),
                n.raw.charCodeAt(n.raw.length - 1) === 110 &&
                  (n.bigint = n.raw.slice(0, -1).replace(/_/g, "")),
                this.next(),
                this.finishNode(n, "Literal")
              );
            }),
            (ie.parseParenExpression = function () {
              this.expect(u.parenL);
              var t = this.parseExpression();
              return this.expect(u.parenR), t;
            }),
            (ie.parseParenAndDistinguishExpression = function (t, n) {
              var h = this.start,
                f = this.startLoc,
                S,
                T = this.options.ecmaVersion >= 8;
              if (this.options.ecmaVersion >= 6) {
                this.next();
                var O = this.start,
                  D = this.startLoc,
                  U = [],
                  re = !0,
                  ue = !1,
                  Oe = new It(),
                  yt = this.yieldPos,
                  qt = this.awaitPos,
                  Tt;
                for (
                  this.yieldPos = 0, this.awaitPos = 0;
                  this.type !== u.parenR;

                )
                  if (
                    (re ? (re = !1) : this.expect(u.comma),
                    T && this.afterTrailingComma(u.parenR, !0))
                  ) {
                    ue = !0;
                    break;
                  } else if (this.type === u.ellipsis) {
                    (Tt = this.start),
                      U.push(this.parseParenItem(this.parseRestBinding())),
                      this.type === u.comma &&
                        this.raise(
                          this.start,
                          "Comma is not permitted after the rest element"
                        );
                    break;
                  } else
                    U.push(this.parseMaybeAssign(!1, Oe, this.parseParenItem));
                var pi = this.lastTokEnd,
                  Nt = this.lastTokEndLoc;
                if (
                  (this.expect(u.parenR),
                  t && !this.canInsertSemicolon() && this.eat(u.arrow))
                )
                  return (
                    this.checkPatternErrors(Oe, !1),
                    this.checkYieldAwaitInDefaultParams(),
                    (this.yieldPos = yt),
                    (this.awaitPos = qt),
                    this.parseParenArrowList(h, f, U, n)
                  );
                (!U.length || ue) && this.unexpected(this.lastTokStart),
                  Tt && this.unexpected(Tt),
                  this.checkExpressionErrors(Oe, !0),
                  (this.yieldPos = yt || this.yieldPos),
                  (this.awaitPos = qt || this.awaitPos),
                  U.length > 1
                    ? ((S = this.startNodeAt(O, D)),
                      (S.expressions = U),
                      this.finishNodeAt(S, "SequenceExpression", pi, Nt))
                    : (S = U[0]);
              } else S = this.parseParenExpression();
              if (this.options.preserveParens) {
                var Lt = this.startNodeAt(h, f);
                return (
                  (Lt.expression = S),
                  this.finishNode(Lt, "ParenthesizedExpression")
                );
              } else return S;
            }),
            (ie.parseParenItem = function (t) {
              return t;
            }),
            (ie.parseParenArrowList = function (t, n, h, f) {
              return this.parseArrowExpression(
                this.startNodeAt(t, n),
                h,
                !1,
                f
              );
            });
          var d = [];
          (ie.parseNew = function () {
            this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                "Escape sequence in keyword new"
              );
            var t = this.startNode(),
              n = this.parseIdent(!0);
            if (this.options.ecmaVersion >= 6 && this.eat(u.dot)) {
              t.meta = n;
              var h = this.containsEsc;
              return (
                (t.property = this.parseIdent(!0)),
                t.property.name !== "target" &&
                  this.raiseRecoverable(
                    t.property.start,
                    "The only valid meta property for new is 'new.target'"
                  ),
                h &&
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' must not contain escaped characters"
                  ),
                this.allowNewDotTarget ||
                  this.raiseRecoverable(
                    t.start,
                    "'new.target' can only be used in functions and class static block"
                  ),
                this.finishNode(t, "MetaProperty")
              );
            }
            var f = this.start,
              S = this.startLoc,
              T = this.type === u._import;
            return (
              (t.callee = this.parseSubscripts(
                this.parseExprAtom(),
                f,
                S,
                !0,
                !1
              )),
              T &&
                t.callee.type === "ImportExpression" &&
                this.raise(f, "Cannot use new with import()"),
              this.eat(u.parenL)
                ? (t.arguments = this.parseExprList(
                    u.parenR,
                    this.options.ecmaVersion >= 8,
                    !1
                  ))
                : (t.arguments = d),
              this.finishNode(t, "NewExpression")
            );
          }),
            (ie.parseTemplateElement = function (t) {
              var n = t.isTagged,
                h = this.startNode();
              return (
                this.type === u.invalidTemplate
                  ? (n ||
                      this.raiseRecoverable(
                        this.start,
                        "Bad escape sequence in untagged template literal"
                      ),
                    (h.value = { raw: this.value, cooked: null }))
                  : (h.value = {
                      raw: this.input.slice(this.start, this.end).replace(
                        /\r\n?/g,
                        `
`
                      ),
                      cooked: this.value,
                    }),
                this.next(),
                (h.tail = this.type === u.backQuote),
                this.finishNode(h, "TemplateElement")
              );
            }),
            (ie.parseTemplate = function (t) {
              t === void 0 && (t = {});
              var n = t.isTagged;
              n === void 0 && (n = !1);
              var h = this.startNode();
              this.next(), (h.expressions = []);
              var f = this.parseTemplateElement({ isTagged: n });
              for (h.quasis = [f]; !f.tail; )
                this.type === u.eof &&
                  this.raise(this.pos, "Unterminated template literal"),
                  this.expect(u.dollarBraceL),
                  h.expressions.push(this.parseExpression()),
                  this.expect(u.braceR),
                  h.quasis.push(
                    (f = this.parseTemplateElement({ isTagged: n }))
                  );
              return this.next(), this.finishNode(h, "TemplateLiteral");
            }),
            (ie.isAsyncProp = function (t) {
              return (
                !t.computed &&
                t.key.type === "Identifier" &&
                t.key.name === "async" &&
                (this.type === u.name ||
                  this.type === u.num ||
                  this.type === u.string ||
                  this.type === u.bracketL ||
                  this.type.keyword ||
                  (this.options.ecmaVersion >= 9 && this.type === u.star)) &&
                !w.test(this.input.slice(this.lastTokEnd, this.start))
              );
            }),
            (ie.parseObj = function (t, n) {
              var h = this.startNode(),
                f = !0,
                S = {};
              for (h.properties = [], this.next(); !this.eat(u.braceR); ) {
                if (f) f = !1;
                else if (
                  (this.expect(u.comma),
                  this.options.ecmaVersion >= 5 &&
                    this.afterTrailingComma(u.braceR))
                )
                  break;
                var T = this.parseProperty(t, n);
                t || this.checkPropClash(T, S, n), h.properties.push(T);
              }
              return this.finishNode(
                h,
                t ? "ObjectPattern" : "ObjectExpression"
              );
            }),
            (ie.parseProperty = function (t, n) {
              var h = this.startNode(),
                f,
                S,
                T,
                O;
              if (this.options.ecmaVersion >= 9 && this.eat(u.ellipsis))
                return t
                  ? ((h.argument = this.parseIdent(!1)),
                    this.type === u.comma &&
                      this.raise(
                        this.start,
                        "Comma is not permitted after the rest element"
                      ),
                    this.finishNode(h, "RestElement"))
                  : ((h.argument = this.parseMaybeAssign(!1, n)),
                    this.type === u.comma &&
                      n &&
                      n.trailingComma < 0 &&
                      (n.trailingComma = this.start),
                    this.finishNode(h, "SpreadElement"));
              this.options.ecmaVersion >= 6 &&
                ((h.method = !1),
                (h.shorthand = !1),
                (t || n) && ((T = this.start), (O = this.startLoc)),
                t || (f = this.eat(u.star)));
              var D = this.containsEsc;
              return (
                this.parsePropertyName(h),
                !t &&
                !D &&
                this.options.ecmaVersion >= 8 &&
                !f &&
                this.isAsyncProp(h)
                  ? ((S = !0),
                    (f = this.options.ecmaVersion >= 9 && this.eat(u.star)),
                    this.parsePropertyName(h))
                  : (S = !1),
                this.parsePropertyValue(h, t, f, S, T, O, n, D),
                this.finishNode(h, "Property")
              );
            }),
            (ie.parsePropertyValue = function (t, n, h, f, S, T, O, D) {
              if (
                ((h || f) && this.type === u.colon && this.unexpected(),
                this.eat(u.colon))
              )
                (t.value = n
                  ? this.parseMaybeDefault(this.start, this.startLoc)
                  : this.parseMaybeAssign(!1, O)),
                  (t.kind = "init");
              else if (this.options.ecmaVersion >= 6 && this.type === u.parenL)
                n && this.unexpected(),
                  (t.kind = "init"),
                  (t.method = !0),
                  (t.value = this.parseMethod(h, f));
              else if (
                !n &&
                !D &&
                this.options.ecmaVersion >= 5 &&
                !t.computed &&
                t.key.type === "Identifier" &&
                (t.key.name === "get" || t.key.name === "set") &&
                this.type !== u.comma &&
                this.type !== u.braceR &&
                this.type !== u.eq
              ) {
                (h || f) && this.unexpected(),
                  (t.kind = t.key.name),
                  this.parsePropertyName(t),
                  (t.value = this.parseMethod(!1));
                var U = t.kind === "get" ? 0 : 1;
                if (t.value.params.length !== U) {
                  var re = t.value.start;
                  t.kind === "get"
                    ? this.raiseRecoverable(re, "getter should have no params")
                    : this.raiseRecoverable(
                        re,
                        "setter should have exactly one param"
                      );
                } else
                  t.kind === "set" &&
                    t.value.params[0].type === "RestElement" &&
                    this.raiseRecoverable(
                      t.value.params[0].start,
                      "Setter cannot use rest params"
                    );
              } else
                this.options.ecmaVersion >= 6 &&
                !t.computed &&
                t.key.type === "Identifier"
                  ? ((h || f) && this.unexpected(),
                    this.checkUnreserved(t.key),
                    t.key.name === "await" &&
                      !this.awaitIdentPos &&
                      (this.awaitIdentPos = S),
                    (t.kind = "init"),
                    n
                      ? (t.value = this.parseMaybeDefault(
                          S,
                          T,
                          this.copyNode(t.key)
                        ))
                      : this.type === u.eq && O
                      ? (O.shorthandAssign < 0 &&
                          (O.shorthandAssign = this.start),
                        (t.value = this.parseMaybeDefault(
                          S,
                          T,
                          this.copyNode(t.key)
                        )))
                      : (t.value = this.copyNode(t.key)),
                    (t.shorthand = !0))
                  : this.unexpected();
            }),
            (ie.parsePropertyName = function (t) {
              if (this.options.ecmaVersion >= 6) {
                if (this.eat(u.bracketL))
                  return (
                    (t.computed = !0),
                    (t.key = this.parseMaybeAssign()),
                    this.expect(u.bracketR),
                    t.key
                  );
                t.computed = !1;
              }
              return (t.key =
                this.type === u.num || this.type === u.string
                  ? this.parseExprAtom()
                  : this.parseIdent(this.options.allowReserved !== "never"));
            }),
            (ie.initFunction = function (t) {
              (t.id = null),
                this.options.ecmaVersion >= 6 &&
                  (t.generator = t.expression = !1),
                this.options.ecmaVersion >= 8 && (t.async = !1);
            }),
            (ie.parseMethod = function (t, n, h) {
              var f = this.startNode(),
                S = this.yieldPos,
                T = this.awaitPos,
                O = this.awaitIdentPos;
              return (
                this.initFunction(f),
                this.options.ecmaVersion >= 6 && (f.generator = t),
                this.options.ecmaVersion >= 8 && (f.async = !!n),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                this.enterScope(Bt(n, f.generator) | wt | (h ? xt : 0)),
                this.expect(u.parenL),
                (f.params = this.parseBindingList(
                  u.parenR,
                  !1,
                  this.options.ecmaVersion >= 8
                )),
                this.checkYieldAwaitInDefaultParams(),
                this.parseFunctionBody(f, !1, !0, !1),
                (this.yieldPos = S),
                (this.awaitPos = T),
                (this.awaitIdentPos = O),
                this.finishNode(f, "FunctionExpression")
              );
            }),
            (ie.parseArrowExpression = function (t, n, h, f) {
              var S = this.yieldPos,
                T = this.awaitPos,
                O = this.awaitIdentPos;
              return (
                this.enterScope(Bt(h, !1) | ni),
                this.initFunction(t),
                this.options.ecmaVersion >= 8 && (t.async = !!h),
                (this.yieldPos = 0),
                (this.awaitPos = 0),
                (this.awaitIdentPos = 0),
                (t.params = this.toAssignableList(n, !0)),
                this.parseFunctionBody(t, !0, !1, f),
                (this.yieldPos = S),
                (this.awaitPos = T),
                (this.awaitIdentPos = O),
                this.finishNode(t, "ArrowFunctionExpression")
              );
            }),
            (ie.parseFunctionBody = function (t, n, h, f) {
              var S = n && this.type !== u.braceL,
                T = this.strict,
                O = !1;
              if (S)
                (t.body = this.parseMaybeAssign(f)),
                  (t.expression = !0),
                  this.checkParams(t, !1);
              else {
                var D =
                  this.options.ecmaVersion >= 7 &&
                  !this.isSimpleParamList(t.params);
                (!T || D) &&
                  ((O = this.strictDirective(this.end)),
                  O &&
                    D &&
                    this.raiseRecoverable(
                      t.start,
                      "Illegal 'use strict' directive in function with non-simple parameter list"
                    ));
                var U = this.labels;
                (this.labels = []),
                  O && (this.strict = !0),
                  this.checkParams(
                    t,
                    !T && !O && !n && !h && this.isSimpleParamList(t.params)
                  ),
                  this.strict && t.id && this.checkLValSimple(t.id, de),
                  (t.body = this.parseBlock(!1, void 0, O && !T)),
                  (t.expression = !1),
                  this.adaptDirectivePrologue(t.body.body),
                  (this.labels = U);
              }
              this.exitScope();
            }),
            (ie.isSimpleParamList = function (t) {
              for (var n = 0, h = t; n < h.length; n += 1) {
                var f = h[n];
                if (f.type !== "Identifier") return !1;
              }
              return !0;
            }),
            (ie.checkParams = function (t, n) {
              for (
                var h = Object.create(null), f = 0, S = t.params;
                f < S.length;
                f += 1
              ) {
                var T = S[f];
                this.checkLValInnerPattern(T, Dt, n ? null : h);
              }
            }),
            (ie.parseExprList = function (t, n, h, f) {
              for (var S = [], T = !0; !this.eat(t); ) {
                if (T) T = !1;
                else if (
                  (this.expect(u.comma), n && this.afterTrailingComma(t))
                )
                  break;
                var O = void 0;
                h && this.type === u.comma
                  ? (O = null)
                  : this.type === u.ellipsis
                  ? ((O = this.parseSpread(f)),
                    f &&
                      this.type === u.comma &&
                      f.trailingComma < 0 &&
                      (f.trailingComma = this.start))
                  : (O = this.parseMaybeAssign(!1, f)),
                  S.push(O);
              }
              return S;
            }),
            (ie.checkUnreserved = function (t) {
              var n = t.start,
                h = t.end,
                f = t.name;
              if (
                (this.inGenerator &&
                  f === "yield" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'yield' as identifier inside a generator"
                  ),
                this.inAsync &&
                  f === "await" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'await' as identifier inside an async function"
                  ),
                this.currentThisScope().inClassFieldInit &&
                  f === "arguments" &&
                  this.raiseRecoverable(
                    n,
                    "Cannot use 'arguments' in class field initializer"
                  ),
                this.inClassStaticBlock &&
                  (f === "arguments" || f === "await") &&
                  this.raise(
                    n,
                    "Cannot use " + f + " in class static initialization block"
                  ),
                this.keywords.test(f) &&
                  this.raise(n, "Unexpected keyword '" + f + "'"),
                !(
                  this.options.ecmaVersion < 6 &&
                  this.input.slice(n, h).indexOf("\\") !== -1
                ))
              ) {
                var S = this.strict
                  ? this.reservedWordsStrict
                  : this.reservedWords;
                S.test(f) &&
                  (!this.inAsync &&
                    f === "await" &&
                    this.raiseRecoverable(
                      n,
                      "Cannot use keyword 'await' outside an async function"
                    ),
                  this.raiseRecoverable(
                    n,
                    "The keyword '" + f + "' is reserved"
                  ));
              }
            }),
            (ie.parseIdent = function (t) {
              var n = this.startNode();
              return (
                this.type === u.name
                  ? (n.name = this.value)
                  : this.type.keyword
                  ? ((n.name = this.type.keyword),
                    (n.name === "class" || n.name === "function") &&
                      (this.lastTokEnd !== this.lastTokStart + 1 ||
                        this.input.charCodeAt(this.lastTokStart) !== 46) &&
                      this.context.pop())
                  : this.unexpected(),
                this.next(!!t),
                this.finishNode(n, "Identifier"),
                t ||
                  (this.checkUnreserved(n),
                  n.name === "await" &&
                    !this.awaitIdentPos &&
                    (this.awaitIdentPos = n.start)),
                n
              );
            }),
            (ie.parsePrivateIdent = function () {
              var t = this.startNode();
              return (
                this.type === u.privateId
                  ? (t.name = this.value)
                  : this.unexpected(),
                this.next(),
                this.finishNode(t, "PrivateIdentifier"),
                this.privateNameStack.length === 0
                  ? this.raise(
                      t.start,
                      "Private field '#" +
                        t.name +
                        "' must be declared in an enclosing class"
                    )
                  : this.privateNameStack[
                      this.privateNameStack.length - 1
                    ].used.push(t),
                t
              );
            }),
            (ie.parseYield = function (t) {
              this.yieldPos || (this.yieldPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                this.type === u.semi ||
                this.canInsertSemicolon() ||
                (this.type !== u.star && !this.type.startsExpr)
                  ? ((n.delegate = !1), (n.argument = null))
                  : ((n.delegate = this.eat(u.star)),
                    (n.argument = this.parseMaybeAssign(t))),
                this.finishNode(n, "YieldExpression")
              );
            }),
            (ie.parseAwait = function (t) {
              this.awaitPos || (this.awaitPos = this.start);
              var n = this.startNode();
              return (
                this.next(),
                (n.argument = this.parseMaybeUnary(null, !0, !1, t)),
                this.finishNode(n, "AwaitExpression")
              );
            });
          var c = se.prototype;
          (c.raise = function (t, n) {
            var h = tt(this.input, t);
            n += " (" + h.line + ":" + h.column + ")";
            var f = new SyntaxError(n);
            throw ((f.pos = t), (f.loc = h), (f.raisedAt = this.pos), f);
          }),
            (c.raiseRecoverable = c.raise),
            (c.curPosition = function () {
              if (this.options.locations)
                return new z(this.curLine, this.pos - this.lineStart);
            });
          var p = se.prototype,
            b = function (n) {
              (this.flags = n),
                (this.var = []),
                (this.lexical = []),
                (this.functions = []),
                (this.inClassFieldInit = !1);
            };
          (p.enterScope = function (t) {
            this.scopeStack.push(new b(t));
          }),
            (p.exitScope = function () {
              this.scopeStack.pop();
            }),
            (p.treatFunctionsAsVarInScope = function (t) {
              return t.flags & ht || (!this.inModule && t.flags & gt);
            }),
            (p.declareName = function (t, n, h) {
              var f = !1;
              if (n === Je) {
                var S = this.currentScope();
                (f =
                  S.lexical.indexOf(t) > -1 ||
                  S.functions.indexOf(t) > -1 ||
                  S.var.indexOf(t) > -1),
                  S.lexical.push(t),
                  this.inModule &&
                    S.flags & gt &&
                    delete this.undefinedExports[t];
              } else if (n === jt) {
                var T = this.currentScope();
                T.lexical.push(t);
              } else if (n === si) {
                var O = this.currentScope();
                this.treatFunctionsAsVar
                  ? (f = O.lexical.indexOf(t) > -1)
                  : (f = O.lexical.indexOf(t) > -1 || O.var.indexOf(t) > -1),
                  O.functions.push(t);
              } else
                for (var D = this.scopeStack.length - 1; D >= 0; --D) {
                  var U = this.scopeStack[D];
                  if (
                    (U.lexical.indexOf(t) > -1 &&
                      !(U.flags & Pe && U.lexical[0] === t)) ||
                    (!this.treatFunctionsAsVarInScope(U) &&
                      U.functions.indexOf(t) > -1)
                  ) {
                    f = !0;
                    break;
                  }
                  if (
                    (U.var.push(t),
                    this.inModule &&
                      U.flags & gt &&
                      delete this.undefinedExports[t],
                    U.flags & kt)
                  )
                    break;
                }
              f &&
                this.raiseRecoverable(
                  h,
                  "Identifier '" + t + "' has already been declared"
                );
            }),
            (p.checkLocalExport = function (t) {
              this.scopeStack[0].lexical.indexOf(t.name) === -1 &&
                this.scopeStack[0].var.indexOf(t.name) === -1 &&
                (this.undefinedExports[t.name] = t);
            }),
            (p.currentScope = function () {
              return this.scopeStack[this.scopeStack.length - 1];
            }),
            (p.currentVarScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & kt) return n;
              }
            }),
            (p.currentThisScope = function () {
              for (var t = this.scopeStack.length - 1; ; t--) {
                var n = this.scopeStack[t];
                if (n.flags & kt && !(n.flags & ni)) return n;
              }
            });
          var L = function (n, h, f) {
              (this.type = ""),
                (this.start = h),
                (this.end = 0),
                n.options.locations && (this.loc = new Be(n, f)),
                n.options.directSourceFile &&
                  (this.sourceFile = n.options.directSourceFile),
                n.options.ranges && (this.range = [h, 0]);
            },
            F = se.prototype;
          (F.startNode = function () {
            return new L(this, this.start, this.startLoc);
          }),
            (F.startNodeAt = function (t, n) {
              return new L(this, t, n);
            });
          function M(t, n, h, f) {
            return (
              (t.type = n),
              (t.end = h),
              this.options.locations && (t.loc.end = f),
              this.options.ranges && (t.range[1] = h),
              t
            );
          }
          (F.finishNode = function (t, n) {
            return M.call(this, t, n, this.lastTokEnd, this.lastTokEndLoc);
          }),
            (F.finishNodeAt = function (t, n, h, f) {
              return M.call(this, t, n, h, f);
            }),
            (F.copyNode = function (t) {
              var n = new L(this, t.start, this.startLoc);
              for (var h in t) n[h] = t[h];
              return n;
            });
          var Q =
              "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
            oe = Q + " Extended_Pictographic",
            ke = oe,
            Ze = ke + " EBase EComp EMod EPres ExtPict",
            it = Ze,
            ui = it,
            hi = { 9: Q, 10: oe, 11: ke, 12: Ze, 13: it, 14: ui },
            je =
              "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
            Ar =
              "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
            Ir =
              Ar +
              " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
            Pr =
              Ir +
              " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
            Tr =
              Pr +
              " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
            Nr =
              Tr +
              " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
            Rs = Nr + " Kawi Nag_Mundari Nagm",
            Os = { 9: Ar, 10: Ir, 11: Pr, 12: Tr, 13: Nr, 14: Rs },
            Lr = {};
          function Vs(t) {
            var n = (Lr[t] = {
              binary: te(hi[t] + " " + je),
              nonBinary: { General_Category: te(je), Script: te(Os[t]) },
            });
            (n.nonBinary.Script_Extensions = n.nonBinary.Script),
              (n.nonBinary.gc = n.nonBinary.General_Category),
              (n.nonBinary.sc = n.nonBinary.Script),
              (n.nonBinary.scx = n.nonBinary.Script_Extensions);
          }
          for (
            var ji = 0, Rr = [9, 10, 11, 12, 13, 14];
            ji < Rr.length;
            ji += 1
          ) {
            var Fs = Rr[ji];
            Vs(Fs);
          }
          var Y = se.prototype,
            rt = function (n) {
              (this.parser = n),
                (this.validFlags =
                  "gim" +
                  (n.options.ecmaVersion >= 6 ? "uy" : "") +
                  (n.options.ecmaVersion >= 9 ? "s" : "") +
                  (n.options.ecmaVersion >= 13 ? "d" : "")),
                (this.unicodeProperties =
                  Lr[n.options.ecmaVersion >= 14 ? 14 : n.options.ecmaVersion]),
                (this.source = ""),
                (this.flags = ""),
                (this.start = 0),
                (this.switchU = !1),
                (this.switchN = !1),
                (this.pos = 0),
                (this.lastIntValue = 0),
                (this.lastStringValue = ""),
                (this.lastAssertionIsQuantifiable = !1),
                (this.numCapturingParens = 0),
                (this.maxBackReference = 0),
                (this.groupNames = []),
                (this.backReferenceNames = []);
            };
          (rt.prototype.reset = function (n, h, f) {
            var S = f.indexOf("u") !== -1;
            (this.start = n | 0),
              (this.source = h + ""),
              (this.flags = f),
              (this.switchU = S && this.parser.options.ecmaVersion >= 6),
              (this.switchN = S && this.parser.options.ecmaVersion >= 9);
          }),
            (rt.prototype.raise = function (n) {
              this.parser.raiseRecoverable(
                this.start,
                "Invalid regular expression: /" + this.source + "/: " + n
              );
            }),
            (rt.prototype.at = function (n, h) {
              h === void 0 && (h = !1);
              var f = this.source,
                S = f.length;
              if (n >= S) return -1;
              var T = f.charCodeAt(n);
              if (
                !(h || this.switchU) ||
                T <= 55295 ||
                T >= 57344 ||
                n + 1 >= S
              )
                return T;
              var O = f.charCodeAt(n + 1);
              return O >= 56320 && O <= 57343 ? (T << 10) + O - 56613888 : T;
            }),
            (rt.prototype.nextIndex = function (n, h) {
              h === void 0 && (h = !1);
              var f = this.source,
                S = f.length;
              if (n >= S) return S;
              var T = f.charCodeAt(n),
                O;
              return !(h || this.switchU) ||
                T <= 55295 ||
                T >= 57344 ||
                n + 1 >= S ||
                (O = f.charCodeAt(n + 1)) < 56320 ||
                O > 57343
                ? n + 1
                : n + 2;
            }),
            (rt.prototype.current = function (n) {
              return n === void 0 && (n = !1), this.at(this.pos, n);
            }),
            (rt.prototype.lookahead = function (n) {
              return (
                n === void 0 && (n = !1),
                this.at(this.nextIndex(this.pos, n), n)
              );
            }),
            (rt.prototype.advance = function (n) {
              n === void 0 && (n = !1),
                (this.pos = this.nextIndex(this.pos, n));
            }),
            (rt.prototype.eat = function (n, h) {
              return (
                h === void 0 && (h = !1),
                this.current(h) === n ? (this.advance(h), !0) : !1
              );
            }),
            (Y.validateRegExpFlags = function (t) {
              for (
                var n = t.validFlags, h = t.flags, f = 0;
                f < h.length;
                f++
              ) {
                var S = h.charAt(f);
                n.indexOf(S) === -1 &&
                  this.raise(t.start, "Invalid regular expression flag"),
                  h.indexOf(S, f + 1) > -1 &&
                    this.raise(t.start, "Duplicate regular expression flag");
              }
            }),
            (Y.validateRegExpPattern = function (t) {
              this.regexp_pattern(t),
                !t.switchN &&
                  this.options.ecmaVersion >= 9 &&
                  t.groupNames.length > 0 &&
                  ((t.switchN = !0), this.regexp_pattern(t));
            }),
            (Y.regexp_pattern = function (t) {
              (t.pos = 0),
                (t.lastIntValue = 0),
                (t.lastStringValue = ""),
                (t.lastAssertionIsQuantifiable = !1),
                (t.numCapturingParens = 0),
                (t.maxBackReference = 0),
                (t.groupNames.length = 0),
                (t.backReferenceNames.length = 0),
                this.regexp_disjunction(t),
                t.pos !== t.source.length &&
                  (t.eat(41) && t.raise("Unmatched ')'"),
                  (t.eat(93) || t.eat(125)) &&
                    t.raise("Lone quantifier brackets")),
                t.maxBackReference > t.numCapturingParens &&
                  t.raise("Invalid escape");
              for (var n = 0, h = t.backReferenceNames; n < h.length; n += 1) {
                var f = h[n];
                t.groupNames.indexOf(f) === -1 &&
                  t.raise("Invalid named capture referenced");
              }
            }),
            (Y.regexp_disjunction = function (t) {
              for (this.regexp_alternative(t); t.eat(124); )
                this.regexp_alternative(t);
              this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
                t.eat(123) && t.raise("Lone quantifier brackets");
            }),
            (Y.regexp_alternative = function (t) {
              for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
            }),
            (Y.regexp_eatTerm = function (t) {
              return this.regexp_eatAssertion(t)
                ? (t.lastAssertionIsQuantifiable &&
                    this.regexp_eatQuantifier(t) &&
                    t.switchU &&
                    t.raise("Invalid quantifier"),
                  !0)
                : (
                    t.switchU
                      ? this.regexp_eatAtom(t)
                      : this.regexp_eatExtendedAtom(t)
                  )
                ? (this.regexp_eatQuantifier(t), !0)
                : !1;
            }),
            (Y.regexp_eatAssertion = function (t) {
              var n = t.pos;
              if (
                ((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))
              )
                return !0;
              if (t.eat(92)) {
                if (t.eat(66) || t.eat(98)) return !0;
                t.pos = n;
              }
              if (t.eat(40) && t.eat(63)) {
                var h = !1;
                if (
                  (this.options.ecmaVersion >= 9 && (h = t.eat(60)),
                  t.eat(61) || t.eat(33))
                )
                  return (
                    this.regexp_disjunction(t),
                    t.eat(41) || t.raise("Unterminated group"),
                    (t.lastAssertionIsQuantifiable = !h),
                    !0
                  );
              }
              return (t.pos = n), !1;
            }),
            (Y.regexp_eatQuantifier = function (t, n) {
              return (
                n === void 0 && (n = !1),
                this.regexp_eatQuantifierPrefix(t, n) ? (t.eat(63), !0) : !1
              );
            }),
            (Y.regexp_eatQuantifierPrefix = function (t, n) {
              return (
                t.eat(42) ||
                t.eat(43) ||
                t.eat(63) ||
                this.regexp_eatBracedQuantifier(t, n)
              );
            }),
            (Y.regexp_eatBracedQuantifier = function (t, n) {
              var h = t.pos;
              if (t.eat(123)) {
                var f = 0,
                  S = -1;
                if (
                  this.regexp_eatDecimalDigits(t) &&
                  ((f = t.lastIntValue),
                  t.eat(44) &&
                    this.regexp_eatDecimalDigits(t) &&
                    (S = t.lastIntValue),
                  t.eat(125))
                )
                  return (
                    S !== -1 &&
                      S < f &&
                      !n &&
                      t.raise("numbers out of order in {} quantifier"),
                    !0
                  );
                t.switchU && !n && t.raise("Incomplete quantifier"),
                  (t.pos = h);
              }
              return !1;
            }),
            (Y.regexp_eatAtom = function (t) {
              return (
                this.regexp_eatPatternCharacters(t) ||
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t)
              );
            }),
            (Y.regexp_eatReverseSolidusAtomEscape = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatAtomEscape(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (Y.regexp_eatUncapturingGroup = function (t) {
              var n = t.pos;
              if (t.eat(40)) {
                if (t.eat(63) && t.eat(58)) {
                  if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                  t.raise("Unterminated group");
                }
                t.pos = n;
              }
              return !1;
            }),
            (Y.regexp_eatCapturingGroup = function (t) {
              if (t.eat(40)) {
                if (
                  (this.options.ecmaVersion >= 9
                    ? this.regexp_groupSpecifier(t)
                    : t.current() === 63 && t.raise("Invalid group"),
                  this.regexp_disjunction(t),
                  t.eat(41))
                )
                  return (t.numCapturingParens += 1), !0;
                t.raise("Unterminated group");
              }
              return !1;
            }),
            (Y.regexp_eatExtendedAtom = function (t) {
              return (
                t.eat(46) ||
                this.regexp_eatReverseSolidusAtomEscape(t) ||
                this.regexp_eatCharacterClass(t) ||
                this.regexp_eatUncapturingGroup(t) ||
                this.regexp_eatCapturingGroup(t) ||
                this.regexp_eatInvalidBracedQuantifier(t) ||
                this.regexp_eatExtendedPatternCharacter(t)
              );
            }),
            (Y.regexp_eatInvalidBracedQuantifier = function (t) {
              return (
                this.regexp_eatBracedQuantifier(t, !0) &&
                  t.raise("Nothing to repeat"),
                !1
              );
            }),
            (Y.regexp_eatSyntaxCharacter = function (t) {
              var n = t.current();
              return Or(n) ? ((t.lastIntValue = n), t.advance(), !0) : !1;
            });
          function Or(t) {
            return (
              t === 36 ||
              (t >= 40 && t <= 43) ||
              t === 46 ||
              t === 63 ||
              (t >= 91 && t <= 94) ||
              (t >= 123 && t <= 125)
            );
          }
          (Y.regexp_eatPatternCharacters = function (t) {
            for (var n = t.pos, h = 0; (h = t.current()) !== -1 && !Or(h); )
              t.advance();
            return t.pos !== n;
          }),
            (Y.regexp_eatExtendedPatternCharacter = function (t) {
              var n = t.current();
              return n !== -1 &&
                n !== 36 &&
                !(n >= 40 && n <= 43) &&
                n !== 46 &&
                n !== 63 &&
                n !== 91 &&
                n !== 94 &&
                n !== 124
                ? (t.advance(), !0)
                : !1;
            }),
            (Y.regexp_groupSpecifier = function (t) {
              if (t.eat(63)) {
                if (this.regexp_eatGroupName(t)) {
                  t.groupNames.indexOf(t.lastStringValue) !== -1 &&
                    t.raise("Duplicate capture group name"),
                    t.groupNames.push(t.lastStringValue);
                  return;
                }
                t.raise("Invalid group");
              }
            }),
            (Y.regexp_eatGroupName = function (t) {
              if (((t.lastStringValue = ""), t.eat(60))) {
                if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62))
                  return !0;
                t.raise("Invalid capture group name");
              }
              return !1;
            }),
            (Y.regexp_eatRegExpIdentifierName = function (t) {
              if (
                ((t.lastStringValue = ""),
                this.regexp_eatRegExpIdentifierStart(t))
              ) {
                for (
                  t.lastStringValue += Ae(t.lastIntValue);
                  this.regexp_eatRegExpIdentifierPart(t);

                )
                  t.lastStringValue += Ae(t.lastIntValue);
                return !0;
              }
              return !1;
            }),
            (Y.regexp_eatRegExpIdentifierStart = function (t) {
              var n = t.pos,
                h = this.options.ecmaVersion >= 11,
                f = t.current(h);
              return (
                t.advance(h),
                f === 92 &&
                  this.regexp_eatRegExpUnicodeEscapeSequence(t, h) &&
                  (f = t.lastIntValue),
                Ms(f) ? ((t.lastIntValue = f), !0) : ((t.pos = n), !1)
              );
            });
          function Ms(t) {
            return P(t, !0) || t === 36 || t === 95;
          }
          Y.regexp_eatRegExpIdentifierPart = function (t) {
            var n = t.pos,
              h = this.options.ecmaVersion >= 11,
              f = t.current(h);
            return (
              t.advance(h),
              f === 92 &&
                this.regexp_eatRegExpUnicodeEscapeSequence(t, h) &&
                (f = t.lastIntValue),
              Bs(f) ? ((t.lastIntValue = f), !0) : ((t.pos = n), !1)
            );
          };
          function Bs(t) {
            return E(t, !0) || t === 36 || t === 95 || t === 8204 || t === 8205;
          }
          (Y.regexp_eatAtomEscape = function (t) {
            return this.regexp_eatBackReference(t) ||
              this.regexp_eatCharacterClassEscape(t) ||
              this.regexp_eatCharacterEscape(t) ||
              (t.switchN && this.regexp_eatKGroupName(t))
              ? !0
              : (t.switchU &&
                  (t.current() === 99 && t.raise("Invalid unicode escape"),
                  t.raise("Invalid escape")),
                !1);
          }),
            (Y.regexp_eatBackReference = function (t) {
              var n = t.pos;
              if (this.regexp_eatDecimalEscape(t)) {
                var h = t.lastIntValue;
                if (t.switchU)
                  return h > t.maxBackReference && (t.maxBackReference = h), !0;
                if (h <= t.numCapturingParens) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (Y.regexp_eatKGroupName = function (t) {
              if (t.eat(107)) {
                if (this.regexp_eatGroupName(t))
                  return t.backReferenceNames.push(t.lastStringValue), !0;
                t.raise("Invalid named reference");
              }
              return !1;
            }),
            (Y.regexp_eatCharacterEscape = function (t) {
              return (
                this.regexp_eatControlEscape(t) ||
                this.regexp_eatCControlLetter(t) ||
                this.regexp_eatZero(t) ||
                this.regexp_eatHexEscapeSequence(t) ||
                this.regexp_eatRegExpUnicodeEscapeSequence(t, !1) ||
                (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
                this.regexp_eatIdentityEscape(t)
              );
            }),
            (Y.regexp_eatCControlLetter = function (t) {
              var n = t.pos;
              if (t.eat(99)) {
                if (this.regexp_eatControlLetter(t)) return !0;
                t.pos = n;
              }
              return !1;
            }),
            (Y.regexp_eatZero = function (t) {
              return t.current() === 48 && !li(t.lookahead())
                ? ((t.lastIntValue = 0), t.advance(), !0)
                : !1;
            }),
            (Y.regexp_eatControlEscape = function (t) {
              var n = t.current();
              return n === 116
                ? ((t.lastIntValue = 9), t.advance(), !0)
                : n === 110
                ? ((t.lastIntValue = 10), t.advance(), !0)
                : n === 118
                ? ((t.lastIntValue = 11), t.advance(), !0)
                : n === 102
                ? ((t.lastIntValue = 12), t.advance(), !0)
                : n === 114
                ? ((t.lastIntValue = 13), t.advance(), !0)
                : !1;
            }),
            (Y.regexp_eatControlLetter = function (t) {
              var n = t.current();
              return Vr(n) ? ((t.lastIntValue = n % 32), t.advance(), !0) : !1;
            });
          function Vr(t) {
            return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
          }
          Y.regexp_eatRegExpUnicodeEscapeSequence = function (t, n) {
            n === void 0 && (n = !1);
            var h = t.pos,
              f = n || t.switchU;
            if (t.eat(117)) {
              if (this.regexp_eatFixedHexDigits(t, 4)) {
                var S = t.lastIntValue;
                if (f && S >= 55296 && S <= 56319) {
                  var T = t.pos;
                  if (
                    t.eat(92) &&
                    t.eat(117) &&
                    this.regexp_eatFixedHexDigits(t, 4)
                  ) {
                    var O = t.lastIntValue;
                    if (O >= 56320 && O <= 57343)
                      return (
                        (t.lastIntValue =
                          (S - 55296) * 1024 + (O - 56320) + 65536),
                        !0
                      );
                  }
                  (t.pos = T), (t.lastIntValue = S);
                }
                return !0;
              }
              if (
                f &&
                t.eat(123) &&
                this.regexp_eatHexDigits(t) &&
                t.eat(125) &&
                Ds(t.lastIntValue)
              )
                return !0;
              f && t.raise("Invalid unicode escape"), (t.pos = h);
            }
            return !1;
          };
          function Ds(t) {
            return t >= 0 && t <= 1114111;
          }
          (Y.regexp_eatIdentityEscape = function (t) {
            if (t.switchU)
              return this.regexp_eatSyntaxCharacter(t)
                ? !0
                : t.eat(47)
                ? ((t.lastIntValue = 47), !0)
                : !1;
            var n = t.current();
            return n !== 99 && (!t.switchN || n !== 107)
              ? ((t.lastIntValue = n), t.advance(), !0)
              : !1;
          }),
            (Y.regexp_eatDecimalEscape = function (t) {
              t.lastIntValue = 0;
              var n = t.current();
              if (n >= 49 && n <= 57) {
                do
                  (t.lastIntValue = 10 * t.lastIntValue + (n - 48)),
                    t.advance();
                while ((n = t.current()) >= 48 && n <= 57);
                return !0;
              }
              return !1;
            }),
            (Y.regexp_eatCharacterClassEscape = function (t) {
              var n = t.current();
              if (js(n)) return (t.lastIntValue = -1), t.advance(), !0;
              if (
                t.switchU &&
                this.options.ecmaVersion >= 9 &&
                (n === 80 || n === 112)
              ) {
                if (
                  ((t.lastIntValue = -1),
                  t.advance(),
                  t.eat(123) &&
                    this.regexp_eatUnicodePropertyValueExpression(t) &&
                    t.eat(125))
                )
                  return !0;
                t.raise("Invalid property name");
              }
              return !1;
            });
          function js(t) {
            return (
              t === 100 ||
              t === 68 ||
              t === 115 ||
              t === 83 ||
              t === 119 ||
              t === 87
            );
          }
          (Y.regexp_eatUnicodePropertyValueExpression = function (t) {
            var n = t.pos;
            if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
              var h = t.lastStringValue;
              if (this.regexp_eatUnicodePropertyValue(t)) {
                var f = t.lastStringValue;
                return (
                  this.regexp_validateUnicodePropertyNameAndValue(t, h, f), !0
                );
              }
            }
            if (
              ((t.pos = n), this.regexp_eatLoneUnicodePropertyNameOrValue(t))
            ) {
              var S = t.lastStringValue;
              return this.regexp_validateUnicodePropertyNameOrValue(t, S), !0;
            }
            return !1;
          }),
            (Y.regexp_validateUnicodePropertyNameAndValue = function (t, n, h) {
              Se(t.unicodeProperties.nonBinary, n) ||
                t.raise("Invalid property name"),
                t.unicodeProperties.nonBinary[n].test(h) ||
                  t.raise("Invalid property value");
            }),
            (Y.regexp_validateUnicodePropertyNameOrValue = function (t, n) {
              t.unicodeProperties.binary.test(n) ||
                t.raise("Invalid property name");
            }),
            (Y.regexp_eatUnicodePropertyName = function (t) {
              var n = 0;
              for (t.lastStringValue = ""; Fr((n = t.current())); )
                (t.lastStringValue += Ae(n)), t.advance();
              return t.lastStringValue !== "";
            });
          function Fr(t) {
            return Vr(t) || t === 95;
          }
          Y.regexp_eatUnicodePropertyValue = function (t) {
            var n = 0;
            for (t.lastStringValue = ""; qs((n = t.current())); )
              (t.lastStringValue += Ae(n)), t.advance();
            return t.lastStringValue !== "";
          };
          function qs(t) {
            return Fr(t) || li(t);
          }
          (Y.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
            return this.regexp_eatUnicodePropertyValue(t);
          }),
            (Y.regexp_eatCharacterClass = function (t) {
              if (t.eat(91)) {
                if ((t.eat(94), this.regexp_classRanges(t), t.eat(93)))
                  return !0;
                t.raise("Unterminated character class");
              }
              return !1;
            }),
            (Y.regexp_classRanges = function (t) {
              for (; this.regexp_eatClassAtom(t); ) {
                var n = t.lastIntValue;
                if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                  var h = t.lastIntValue;
                  t.switchU &&
                    (n === -1 || h === -1) &&
                    t.raise("Invalid character class"),
                    n !== -1 &&
                      h !== -1 &&
                      n > h &&
                      t.raise("Range out of order in character class");
                }
              }
            }),
            (Y.regexp_eatClassAtom = function (t) {
              var n = t.pos;
              if (t.eat(92)) {
                if (this.regexp_eatClassEscape(t)) return !0;
                if (t.switchU) {
                  var h = t.current();
                  (h === 99 || Dr(h)) && t.raise("Invalid class escape"),
                    t.raise("Invalid escape");
                }
                t.pos = n;
              }
              var f = t.current();
              return f !== 93 ? ((t.lastIntValue = f), t.advance(), !0) : !1;
            }),
            (Y.regexp_eatClassEscape = function (t) {
              var n = t.pos;
              if (t.eat(98)) return (t.lastIntValue = 8), !0;
              if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
              if (!t.switchU && t.eat(99)) {
                if (this.regexp_eatClassControlLetter(t)) return !0;
                t.pos = n;
              }
              return (
                this.regexp_eatCharacterClassEscape(t) ||
                this.regexp_eatCharacterEscape(t)
              );
            }),
            (Y.regexp_eatClassControlLetter = function (t) {
              var n = t.current();
              return li(n) || n === 95
                ? ((t.lastIntValue = n % 32), t.advance(), !0)
                : !1;
            }),
            (Y.regexp_eatHexEscapeSequence = function (t) {
              var n = t.pos;
              if (t.eat(120)) {
                if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                t.switchU && t.raise("Invalid escape"), (t.pos = n);
              }
              return !1;
            }),
            (Y.regexp_eatDecimalDigits = function (t) {
              var n = t.pos,
                h = 0;
              for (t.lastIntValue = 0; li((h = t.current())); )
                (t.lastIntValue = 10 * t.lastIntValue + (h - 48)), t.advance();
              return t.pos !== n;
            });
          function li(t) {
            return t >= 48 && t <= 57;
          }
          Y.regexp_eatHexDigits = function (t) {
            var n = t.pos,
              h = 0;
            for (t.lastIntValue = 0; Mr((h = t.current())); )
              (t.lastIntValue = 16 * t.lastIntValue + Br(h)), t.advance();
            return t.pos !== n;
          };
          function Mr(t) {
            return (
              (t >= 48 && t <= 57) ||
              (t >= 65 && t <= 70) ||
              (t >= 97 && t <= 102)
            );
          }
          function Br(t) {
            return t >= 65 && t <= 70
              ? 10 + (t - 65)
              : t >= 97 && t <= 102
              ? 10 + (t - 97)
              : t - 48;
          }
          (Y.regexp_eatLegacyOctalEscapeSequence = function (t) {
            if (this.regexp_eatOctalDigit(t)) {
              var n = t.lastIntValue;
              if (this.regexp_eatOctalDigit(t)) {
                var h = t.lastIntValue;
                n <= 3 && this.regexp_eatOctalDigit(t)
                  ? (t.lastIntValue = n * 64 + h * 8 + t.lastIntValue)
                  : (t.lastIntValue = n * 8 + h);
              } else t.lastIntValue = n;
              return !0;
            }
            return !1;
          }),
            (Y.regexp_eatOctalDigit = function (t) {
              var n = t.current();
              return Dr(n)
                ? ((t.lastIntValue = n - 48), t.advance(), !0)
                : ((t.lastIntValue = 0), !1);
            });
          function Dr(t) {
            return t >= 48 && t <= 55;
          }
          Y.regexp_eatFixedHexDigits = function (t, n) {
            var h = t.pos;
            t.lastIntValue = 0;
            for (var f = 0; f < n; ++f) {
              var S = t.current();
              if (!Mr(S)) return (t.pos = h), !1;
              (t.lastIntValue = 16 * t.lastIntValue + Br(S)), t.advance();
            }
            return !0;
          };
          var ci = function (n) {
              (this.type = n.type),
                (this.value = n.value),
                (this.start = n.start),
                (this.end = n.end),
                n.options.locations &&
                  (this.loc = new Be(n, n.startLoc, n.endLoc)),
                n.options.ranges && (this.range = [n.start, n.end]);
            },
            le = se.prototype;
          (le.next = function (t) {
            !t &&
              this.type.keyword &&
              this.containsEsc &&
              this.raiseRecoverable(
                this.start,
                "Escape sequence in keyword " + this.type.keyword
              ),
              this.options.onToken && this.options.onToken(new ci(this)),
              (this.lastTokEnd = this.end),
              (this.lastTokStart = this.start),
              (this.lastTokEndLoc = this.endLoc),
              (this.lastTokStartLoc = this.startLoc),
              this.nextToken();
          }),
            (le.getToken = function () {
              return this.next(), new ci(this);
            }),
            typeof Symbol < "u" &&
              (le[Symbol.iterator] = function () {
                var t = this;
                return {
                  next: function () {
                    var n = t.getToken();
                    return { done: n.type === u.eof, value: n };
                  },
                };
              }),
            (le.nextToken = function () {
              var t = this.curContext();
              if (
                ((!t || !t.preserveSpace) && this.skipSpace(),
                (this.start = this.pos),
                this.options.locations && (this.startLoc = this.curPosition()),
                this.pos >= this.input.length)
              )
                return this.finishToken(u.eof);
              if (t.override) return t.override(this);
              this.readToken(this.fullCharCodeAtPos());
            }),
            (le.readToken = function (t) {
              return P(t, this.options.ecmaVersion >= 6) || t === 92
                ? this.readWord()
                : this.getTokenFromCode(t);
            }),
            (le.fullCharCodeAtPos = function () {
              var t = this.input.charCodeAt(this.pos);
              if (t <= 55295 || t >= 56320) return t;
              var n = this.input.charCodeAt(this.pos + 1);
              return n <= 56319 || n >= 57344 ? t : (t << 10) + n - 56613888;
            }),
            (le.skipBlockComment = function () {
              var t = this.options.onComment && this.curPosition(),
                n = this.pos,
                h = this.input.indexOf("*/", (this.pos += 2));
              if (
                (h === -1 && this.raise(this.pos - 2, "Unterminated comment"),
                (this.pos = h + 2),
                this.options.locations)
              )
                for (
                  var f = void 0, S = n;
                  (f = W(this.input, S, this.pos)) > -1;

                )
                  ++this.curLine, (S = this.lineStart = f);
              this.options.onComment &&
                this.options.onComment(
                  !0,
                  this.input.slice(n + 2, h),
                  n,
                  this.pos,
                  t,
                  this.curPosition()
                );
            }),
            (le.skipLineComment = function (t) {
              for (
                var n = this.pos,
                  h = this.options.onComment && this.curPosition(),
                  f = this.input.charCodeAt((this.pos += t));
                this.pos < this.input.length && !H(f);

              )
                f = this.input.charCodeAt(++this.pos);
              this.options.onComment &&
                this.options.onComment(
                  !1,
                  this.input.slice(n + t, this.pos),
                  n,
                  this.pos,
                  h,
                  this.curPosition()
                );
            }),
            (le.skipSpace = function () {
              e: for (; this.pos < this.input.length; ) {
                var t = this.input.charCodeAt(this.pos);
                switch (t) {
                  case 32:
                  case 160:
                    ++this.pos;
                    break;
                  case 13:
                    this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++this.pos,
                      this.options.locations &&
                        (++this.curLine, (this.lineStart = this.pos));
                    break;
                  case 47:
                    switch (this.input.charCodeAt(this.pos + 1)) {
                      case 42:
                        this.skipBlockComment();
                        break;
                      case 47:
                        this.skipLineComment(2);
                        break;
                      default:
                        break e;
                    }
                    break;
                  default:
                    if (
                      (t > 8 && t < 14) ||
                      (t >= 5760 && ee.test(String.fromCharCode(t)))
                    )
                      ++this.pos;
                    else break e;
                }
              }
            }),
            (le.finishToken = function (t, n) {
              (this.end = this.pos),
                this.options.locations && (this.endLoc = this.curPosition());
              var h = this.type;
              (this.type = t), (this.value = n), this.updateContext(h);
            }),
            (le.readToken_dot = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              if (t >= 48 && t <= 57) return this.readNumber(!0);
              var n = this.input.charCodeAt(this.pos + 2);
              return this.options.ecmaVersion >= 6 && t === 46 && n === 46
                ? ((this.pos += 3), this.finishToken(u.ellipsis))
                : (++this.pos, this.finishToken(u.dot));
            }),
            (le.readToken_slash = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return this.exprAllowed
                ? (++this.pos, this.readRegexp())
                : t === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.slash, 1);
            }),
            (le.readToken_mult_modulo_exp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                h = 1,
                f = t === 42 ? u.star : u.modulo;
              return (
                this.options.ecmaVersion >= 7 &&
                  t === 42 &&
                  n === 42 &&
                  (++h,
                  (f = u.starstar),
                  (n = this.input.charCodeAt(this.pos + 2))),
                n === 61 ? this.finishOp(u.assign, h + 1) : this.finishOp(f, h)
              );
            }),
            (le.readToken_pipe_amp = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              if (n === t) {
                if (this.options.ecmaVersion >= 12) {
                  var h = this.input.charCodeAt(this.pos + 2);
                  if (h === 61) return this.finishOp(u.assign, 3);
                }
                return this.finishOp(t === 124 ? u.logicalOR : u.logicalAND, 2);
              }
              return n === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(t === 124 ? u.bitwiseOR : u.bitwiseAND, 1);
            }),
            (le.readToken_caret = function () {
              var t = this.input.charCodeAt(this.pos + 1);
              return t === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.bitwiseXOR, 1);
            }),
            (le.readToken_plus_min = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === t
                ? n === 45 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 62 &&
                  (this.lastTokEnd === 0 ||
                    w.test(this.input.slice(this.lastTokEnd, this.pos)))
                  ? (this.skipLineComment(3),
                    this.skipSpace(),
                    this.nextToken())
                  : this.finishOp(u.incDec, 2)
                : n === 61
                ? this.finishOp(u.assign, 2)
                : this.finishOp(u.plusMin, 1);
            }),
            (le.readToken_lt_gt = function (t) {
              var n = this.input.charCodeAt(this.pos + 1),
                h = 1;
              return n === t
                ? ((h =
                    t === 62 && this.input.charCodeAt(this.pos + 2) === 62
                      ? 3
                      : 2),
                  this.input.charCodeAt(this.pos + h) === 61
                    ? this.finishOp(u.assign, h + 1)
                    : this.finishOp(u.bitShift, h))
                : n === 33 &&
                  t === 60 &&
                  !this.inModule &&
                  this.input.charCodeAt(this.pos + 2) === 45 &&
                  this.input.charCodeAt(this.pos + 3) === 45
                ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
                : (n === 61 && (h = 2), this.finishOp(u.relational, h));
            }),
            (le.readToken_eq_excl = function (t) {
              var n = this.input.charCodeAt(this.pos + 1);
              return n === 61
                ? this.finishOp(
                    u.equality,
                    this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
                  )
                : t === 61 && n === 62 && this.options.ecmaVersion >= 6
                ? ((this.pos += 2), this.finishToken(u.arrow))
                : this.finishOp(t === 61 ? u.eq : u.prefix, 1);
            }),
            (le.readToken_question = function () {
              var t = this.options.ecmaVersion;
              if (t >= 11) {
                var n = this.input.charCodeAt(this.pos + 1);
                if (n === 46) {
                  var h = this.input.charCodeAt(this.pos + 2);
                  if (h < 48 || h > 57) return this.finishOp(u.questionDot, 2);
                }
                if (n === 63) {
                  if (t >= 12) {
                    var f = this.input.charCodeAt(this.pos + 2);
                    if (f === 61) return this.finishOp(u.assign, 3);
                  }
                  return this.finishOp(u.coalesce, 2);
                }
              }
              return this.finishOp(u.question, 1);
            }),
            (le.readToken_numberSign = function () {
              var t = this.options.ecmaVersion,
                n = 35;
              if (
                t >= 13 &&
                (++this.pos,
                (n = this.fullCharCodeAtPos()),
                P(n, !0) || n === 92)
              )
                return this.finishToken(u.privateId, this.readWord1());
              this.raise(this.pos, "Unexpected character '" + Ae(n) + "'");
            }),
            (le.getTokenFromCode = function (t) {
              switch (t) {
                case 46:
                  return this.readToken_dot();
                case 40:
                  return ++this.pos, this.finishToken(u.parenL);
                case 41:
                  return ++this.pos, this.finishToken(u.parenR);
                case 59:
                  return ++this.pos, this.finishToken(u.semi);
                case 44:
                  return ++this.pos, this.finishToken(u.comma);
                case 91:
                  return ++this.pos, this.finishToken(u.bracketL);
                case 93:
                  return ++this.pos, this.finishToken(u.bracketR);
                case 123:
                  return ++this.pos, this.finishToken(u.braceL);
                case 125:
                  return ++this.pos, this.finishToken(u.braceR);
                case 58:
                  return ++this.pos, this.finishToken(u.colon);
                case 96:
                  if (this.options.ecmaVersion < 6) break;
                  return ++this.pos, this.finishToken(u.backQuote);
                case 48:
                  var n = this.input.charCodeAt(this.pos + 1);
                  if (n === 120 || n === 88) return this.readRadixNumber(16);
                  if (this.options.ecmaVersion >= 6) {
                    if (n === 111 || n === 79) return this.readRadixNumber(8);
                    if (n === 98 || n === 66) return this.readRadixNumber(2);
                  }
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  return this.readNumber(!1);
                case 34:
                case 39:
                  return this.readString(t);
                case 47:
                  return this.readToken_slash();
                case 37:
                case 42:
                  return this.readToken_mult_modulo_exp(t);
                case 124:
                case 38:
                  return this.readToken_pipe_amp(t);
                case 94:
                  return this.readToken_caret();
                case 43:
                case 45:
                  return this.readToken_plus_min(t);
                case 60:
                case 62:
                  return this.readToken_lt_gt(t);
                case 61:
                case 33:
                  return this.readToken_eq_excl(t);
                case 63:
                  return this.readToken_question();
                case 126:
                  return this.finishOp(u.prefix, 1);
                case 35:
                  return this.readToken_numberSign();
              }
              this.raise(this.pos, "Unexpected character '" + Ae(t) + "'");
            }),
            (le.finishOp = function (t, n) {
              var h = this.input.slice(this.pos, this.pos + n);
              return (this.pos += n), this.finishToken(t, h);
            }),
            (le.readRegexp = function () {
              for (var t, n, h = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(h, "Unterminated regular expression");
                var f = this.input.charAt(this.pos);
                if (
                  (w.test(f) &&
                    this.raise(h, "Unterminated regular expression"),
                  t)
                )
                  t = !1;
                else {
                  if (f === "[") n = !0;
                  else if (f === "]" && n) n = !1;
                  else if (f === "/" && !n) break;
                  t = f === "\\";
                }
                ++this.pos;
              }
              var S = this.input.slice(h, this.pos);
              ++this.pos;
              var T = this.pos,
                O = this.readWord1();
              this.containsEsc && this.unexpected(T);
              var D = this.regexpState || (this.regexpState = new rt(this));
              D.reset(h, S, O),
                this.validateRegExpFlags(D),
                this.validateRegExpPattern(D);
              var U = null;
              try {
                U = new RegExp(S, O);
              } catch {}
              return this.finishToken(u.regexp, {
                pattern: S,
                flags: O,
                value: U,
              });
            }),
            (le.readInt = function (t, n, h) {
              for (
                var f = this.options.ecmaVersion >= 12 && n === void 0,
                  S = h && this.input.charCodeAt(this.pos) === 48,
                  T = this.pos,
                  O = 0,
                  D = 0,
                  U = 0,
                  re = n ?? 1 / 0;
                U < re;
                ++U, ++this.pos
              ) {
                var ue = this.input.charCodeAt(this.pos),
                  Oe = void 0;
                if (f && ue === 95) {
                  S &&
                    this.raiseRecoverable(
                      this.pos,
                      "Numeric separator is not allowed in legacy octal numeric literals"
                    ),
                    D === 95 &&
                      this.raiseRecoverable(
                        this.pos,
                        "Numeric separator must be exactly one underscore"
                      ),
                    U === 0 &&
                      this.raiseRecoverable(
                        this.pos,
                        "Numeric separator is not allowed at the first of digits"
                      ),
                    (D = ue);
                  continue;
                }
                if (
                  (ue >= 97
                    ? (Oe = ue - 97 + 10)
                    : ue >= 65
                    ? (Oe = ue - 65 + 10)
                    : ue >= 48 && ue <= 57
                    ? (Oe = ue - 48)
                    : (Oe = 1 / 0),
                  Oe >= t)
                )
                  break;
                (D = ue), (O = O * t + Oe);
              }
              return (
                f &&
                  D === 95 &&
                  this.raiseRecoverable(
                    this.pos - 1,
                    "Numeric separator is not allowed at the last of digits"
                  ),
                this.pos === T || (n != null && this.pos - T !== n) ? null : O
              );
            });
          function Us(t, n) {
            return n ? parseInt(t, 8) : parseFloat(t.replace(/_/g, ""));
          }
          function jr(t) {
            return typeof BigInt != "function"
              ? null
              : BigInt(t.replace(/_/g, ""));
          }
          (le.readRadixNumber = function (t) {
            var n = this.pos;
            this.pos += 2;
            var h = this.readInt(t);
            return (
              h == null &&
                this.raise(this.start + 2, "Expected number in radix " + t),
              this.options.ecmaVersion >= 11 &&
              this.input.charCodeAt(this.pos) === 110
                ? ((h = jr(this.input.slice(n, this.pos))), ++this.pos)
                : P(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number"),
              this.finishToken(u.num, h)
            );
          }),
            (le.readNumber = function (t) {
              var n = this.pos;
              !t &&
                this.readInt(10, void 0, !0) === null &&
                this.raise(n, "Invalid number");
              var h = this.pos - n >= 2 && this.input.charCodeAt(n) === 48;
              h && this.strict && this.raise(n, "Invalid number");
              var f = this.input.charCodeAt(this.pos);
              if (!h && !t && this.options.ecmaVersion >= 11 && f === 110) {
                var S = jr(this.input.slice(n, this.pos));
                return (
                  ++this.pos,
                  P(this.fullCharCodeAtPos()) &&
                    this.raise(this.pos, "Identifier directly after number"),
                  this.finishToken(u.num, S)
                );
              }
              h && /[89]/.test(this.input.slice(n, this.pos)) && (h = !1),
                f === 46 &&
                  !h &&
                  (++this.pos,
                  this.readInt(10),
                  (f = this.input.charCodeAt(this.pos))),
                (f === 69 || f === 101) &&
                  !h &&
                  ((f = this.input.charCodeAt(++this.pos)),
                  (f === 43 || f === 45) && ++this.pos,
                  this.readInt(10) === null && this.raise(n, "Invalid number")),
                P(this.fullCharCodeAtPos()) &&
                  this.raise(this.pos, "Identifier directly after number");
              var T = Us(this.input.slice(n, this.pos), h);
              return this.finishToken(u.num, T);
            }),
            (le.readCodePoint = function () {
              var t = this.input.charCodeAt(this.pos),
                n;
              if (t === 123) {
                this.options.ecmaVersion < 6 && this.unexpected();
                var h = ++this.pos;
                (n = this.readHexChar(
                  this.input.indexOf("}", this.pos) - this.pos
                )),
                  ++this.pos,
                  n > 1114111 &&
                    this.invalidStringToken(h, "Code point out of bounds");
              } else n = this.readHexChar(4);
              return n;
            }),
            (le.readString = function (t) {
              for (var n = "", h = ++this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, "Unterminated string constant");
                var f = this.input.charCodeAt(this.pos);
                if (f === t) break;
                f === 92
                  ? ((n += this.input.slice(h, this.pos)),
                    (n += this.readEscapedChar(!1)),
                    (h = this.pos))
                  : f === 8232 || f === 8233
                  ? (this.options.ecmaVersion < 10 &&
                      this.raise(this.start, "Unterminated string constant"),
                    ++this.pos,
                    this.options.locations &&
                      (this.curLine++, (this.lineStart = this.pos)))
                  : (H(f) &&
                      this.raise(this.start, "Unterminated string constant"),
                    ++this.pos);
              }
              return (
                (n += this.input.slice(h, this.pos++)),
                this.finishToken(u.string, n)
              );
            });
          var qr = {};
          (le.tryReadTemplateToken = function () {
            this.inTemplateElement = !0;
            try {
              this.readTmplToken();
            } catch (t) {
              if (t === qr) this.readInvalidTemplateToken();
              else throw t;
            }
            this.inTemplateElement = !1;
          }),
            (le.invalidStringToken = function (t, n) {
              if (this.inTemplateElement && this.options.ecmaVersion >= 9)
                throw qr;
              this.raise(t, n);
            }),
            (le.readTmplToken = function () {
              for (var t = "", n = this.pos; ; ) {
                this.pos >= this.input.length &&
                  this.raise(this.start, "Unterminated template");
                var h = this.input.charCodeAt(this.pos);
                if (
                  h === 96 ||
                  (h === 36 && this.input.charCodeAt(this.pos + 1) === 123)
                )
                  return this.pos === this.start &&
                    (this.type === u.template ||
                      this.type === u.invalidTemplate)
                    ? h === 36
                      ? ((this.pos += 2), this.finishToken(u.dollarBraceL))
                      : (++this.pos, this.finishToken(u.backQuote))
                    : ((t += this.input.slice(n, this.pos)),
                      this.finishToken(u.template, t));
                if (h === 92)
                  (t += this.input.slice(n, this.pos)),
                    (t += this.readEscapedChar(!0)),
                    (n = this.pos);
                else if (H(h)) {
                  switch (
                    ((t += this.input.slice(n, this.pos)), ++this.pos, h)
                  ) {
                    case 13:
                      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                    case 10:
                      t += `
`;
                      break;
                    default:
                      t += String.fromCharCode(h);
                      break;
                  }
                  this.options.locations &&
                    (++this.curLine, (this.lineStart = this.pos)),
                    (n = this.pos);
                } else ++this.pos;
              }
            }),
            (le.readInvalidTemplateToken = function () {
              for (; this.pos < this.input.length; this.pos++)
                switch (this.input[this.pos]) {
                  case "\\":
                    ++this.pos;
                    break;
                  case "$":
                    if (this.input[this.pos + 1] !== "{") break;
                  case "`":
                    return this.finishToken(
                      u.invalidTemplate,
                      this.input.slice(this.start, this.pos)
                    );
                }
              this.raise(this.start, "Unterminated template");
            }),
            (le.readEscapedChar = function (t) {
              var n = this.input.charCodeAt(++this.pos);
              switch ((++this.pos, n)) {
                case 110:
                  return `
`;
                case 114:
                  return "\r";
                case 120:
                  return String.fromCharCode(this.readHexChar(2));
                case 117:
                  return Ae(this.readCodePoint());
                case 116:
                  return "	";
                case 98:
                  return "\b";
                case 118:
                  return "\v";
                case 102:
                  return "\f";
                case 13:
                  this.input.charCodeAt(this.pos) === 10 && ++this.pos;
                case 10:
                  return (
                    this.options.locations &&
                      ((this.lineStart = this.pos), ++this.curLine),
                    ""
                  );
                case 56:
                case 57:
                  if (
                    (this.strict &&
                      this.invalidStringToken(
                        this.pos - 1,
                        "Invalid escape sequence"
                      ),
                    t)
                  ) {
                    var h = this.pos - 1;
                    this.invalidStringToken(
                      h,
                      "Invalid escape sequence in template string"
                    );
                  }
                default:
                  if (n >= 48 && n <= 55) {
                    var f = this.input
                        .substr(this.pos - 1, 3)
                        .match(/^[0-7]+/)[0],
                      S = parseInt(f, 8);
                    return (
                      S > 255 && ((f = f.slice(0, -1)), (S = parseInt(f, 8))),
                      (this.pos += f.length - 1),
                      (n = this.input.charCodeAt(this.pos)),
                      (f !== "0" || n === 56 || n === 57) &&
                        (this.strict || t) &&
                        this.invalidStringToken(
                          this.pos - 1 - f.length,
                          t
                            ? "Octal literal in template string"
                            : "Octal literal in strict mode"
                        ),
                      String.fromCharCode(S)
                    );
                  }
                  return H(n) ? "" : String.fromCharCode(n);
              }
            }),
            (le.readHexChar = function (t) {
              var n = this.pos,
                h = this.readInt(16, t);
              return (
                h === null &&
                  this.invalidStringToken(n, "Bad character escape sequence"),
                h
              );
            }),
            (le.readWord1 = function () {
              this.containsEsc = !1;
              for (
                var t = "",
                  n = !0,
                  h = this.pos,
                  f = this.options.ecmaVersion >= 6;
                this.pos < this.input.length;

              ) {
                var S = this.fullCharCodeAtPos();
                if (E(S, f)) this.pos += S <= 65535 ? 1 : 2;
                else if (S === 92) {
                  (this.containsEsc = !0), (t += this.input.slice(h, this.pos));
                  var T = this.pos;
                  this.input.charCodeAt(++this.pos) !== 117 &&
                    this.invalidStringToken(
                      this.pos,
                      "Expecting Unicode escape sequence \\uXXXX"
                    ),
                    ++this.pos;
                  var O = this.readCodePoint();
                  (n ? P : E)(O, f) ||
                    this.invalidStringToken(T, "Invalid Unicode escape"),
                    (t += Ae(O)),
                    (h = this.pos);
                } else break;
                n = !1;
              }
              return t + this.input.slice(h, this.pos);
            }),
            (le.readWord = function () {
              var t = this.readWord1(),
                n = u.name;
              return (
                this.keywords.test(t) && (n = N[t]), this.finishToken(n, t)
              );
            });
          var Ur = "8.8.2";
          se.acorn = {
            Parser: se,
            version: Ur,
            defaultOptions: Ye,
            Position: z,
            SourceLocation: Be,
            getLineInfo: tt,
            Node: L,
            TokenType: R,
            tokTypes: u,
            keywordTypes: N,
            TokContext: Re,
            tokContexts: ve,
            isIdentifierChar: E,
            isIdentifierStart: P,
            Token: ci,
            isNewLine: H,
            lineBreak: w,
            lineBreakG: V,
            nonASCIIwhitespace: ee,
          };
          function Gs(t, n) {
            return se.parse(t, n);
          }
          function Ws(t, n, h) {
            return se.parseExpressionAt(t, n, h);
          }
          function zs(t, n) {
            return se.tokenizer(t, n);
          }
          (r.Node = L),
            (r.Parser = se),
            (r.Position = z),
            (r.SourceLocation = Be),
            (r.TokContext = Re),
            (r.Token = ci),
            (r.TokenType = R),
            (r.defaultOptions = Ye),
            (r.getLineInfo = tt),
            (r.isIdentifierChar = E),
            (r.isIdentifierStart = P),
            (r.isNewLine = H),
            (r.keywordTypes = N),
            (r.lineBreak = w),
            (r.lineBreakG = V),
            (r.nonASCIIwhitespace = ee),
            (r.parse = Gs),
            (r.parseExpressionAt = Ws),
            (r.tokContexts = ve),
            (r.tokTypes = u),
            (r.tokenizer = zs),
            (r.version = Ur);
        });
      })(co, Ht)),
    Ht
  );
}
(function (e) {
  const i = lo,
    r = /^[\da-fA-F]+$/,
    s = /^\d+$/,
    o = new WeakMap();
  function l(v) {
    v = v.Parser.acorn || v;
    let C = o.get(v);
    if (!C) {
      const _ = v.tokTypes,
        A = v.TokContext,
        I = v.TokenType,
        k = new A("<tag", !1),
        P = new A("</tag", !1),
        E = new A("<tag>...</tag>", !0, !0),
        R = { tc_oTag: k, tc_cTag: P, tc_expr: E },
        j = {
          jsxName: new I("jsxName"),
          jsxText: new I("jsxText", { beforeExpr: !0 }),
          jsxTagStart: new I("jsxTagStart", { startsExpr: !0 }),
          jsxTagEnd: new I("jsxTagEnd"),
        };
      (j.jsxTagStart.updateContext = function () {
        this.context.push(E), this.context.push(k), (this.exprAllowed = !1);
      }),
        (j.jsxTagEnd.updateContext = function (B) {
          let G = this.context.pop();
          (G === k && B === _.slash) || G === P
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === E))
            : (this.exprAllowed = !0);
        }),
        (C = { tokContexts: R, tokTypes: j }),
        o.set(v, C);
    }
    return C;
  }
  function m(v) {
    if (!v) return v;
    if (v.type === "JSXIdentifier") return v.name;
    if (v.type === "JSXNamespacedName")
      return v.namespace.name + ":" + v.name.name;
    if (v.type === "JSXMemberExpression")
      return m(v.object) + "." + m(v.property);
  }
  (e.exports = function (v) {
    return (
      (v = v || {}),
      function (C) {
        return x(
          {
            allowNamespaces: v.allowNamespaces !== !1,
            allowNamespacedObjects: !!v.allowNamespacedObjects,
          },
          C
        );
      }
    );
  }),
    Object.defineProperty(e.exports, "tokTypes", {
      get: function () {
        return l(ln()).tokTypes;
      },
      configurable: !0,
      enumerable: !0,
    });
  function x(v, C) {
    const _ = C.acorn || ln(),
      A = l(_),
      I = _.tokTypes,
      k = A.tokTypes,
      P = _.tokContexts,
      E = A.tokContexts.tc_oTag,
      R = A.tokContexts.tc_cTag,
      j = A.tokContexts.tc_expr,
      B = _.isNewLine,
      G = _.isIdentifierStart,
      N = _.isIdentifierChar;
    return class extends C {
      static get acornJsx() {
        return A;
      }
      jsx_readToken() {
        let y = "",
          u = this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated JSX contents");
          let w = this.input.charCodeAt(this.pos);
          switch (w) {
            case 60:
            case 123:
              return this.pos === this.start
                ? w === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(k.jsxTagStart))
                  : this.getTokenFromCode(w)
                : ((y += this.input.slice(u, this.pos)),
                  this.finishToken(k.jsxText, y));
            case 38:
              (y += this.input.slice(u, this.pos)),
                (y += this.jsx_readEntity()),
                (u = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                "Unexpected token `" +
                  this.input[this.pos] +
                  "`. Did you mean `" +
                  (w === 62 ? "&gt;" : "&rbrace;") +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?'
              );
            default:
              B(w)
                ? ((y += this.input.slice(u, this.pos)),
                  (y += this.jsx_readNewLine(!0)),
                  (u = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(y) {
        let u = this.input.charCodeAt(this.pos),
          w;
        return (
          ++this.pos,
          u === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (w = y
                ? `
`
                : `\r
`))
            : (w = String.fromCharCode(u)),
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos)),
          w
        );
      }
      jsx_readString(y) {
        let u = "",
          w = ++this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, "Unterminated string constant");
          let V = this.input.charCodeAt(this.pos);
          if (V === y) break;
          V === 38
            ? ((u += this.input.slice(w, this.pos)),
              (u += this.jsx_readEntity()),
              (w = this.pos))
            : B(V)
            ? ((u += this.input.slice(w, this.pos)),
              (u += this.jsx_readNewLine(!1)),
              (w = this.pos))
            : ++this.pos;
        }
        return (
          (u += this.input.slice(w, this.pos++)), this.finishToken(I.string, u)
        );
      }
      jsx_readEntity() {
        let y = "",
          u = 0,
          w,
          V = this.input[this.pos];
        V !== "&" &&
          this.raise(this.pos, "Entity must start with an ampersand");
        let H = ++this.pos;
        for (; this.pos < this.input.length && u++ < 10; ) {
          if (((V = this.input[this.pos++]), V === ";")) {
            y[0] === "#"
              ? y[1] === "x"
                ? ((y = y.substr(2)),
                  r.test(y) && (w = String.fromCharCode(parseInt(y, 16))))
                : ((y = y.substr(1)),
                  s.test(y) && (w = String.fromCharCode(parseInt(y, 10))))
              : (w = i[y]);
            break;
          }
          y += V;
        }
        return w || ((this.pos = H), "&");
      }
      jsx_readWord() {
        let y,
          u = this.pos;
        do y = this.input.charCodeAt(++this.pos);
        while (N(y) || y === 45);
        return this.finishToken(k.jsxName, this.input.slice(u, this.pos));
      }
      jsx_parseIdentifier() {
        let y = this.startNode();
        return (
          this.type === k.jsxName
            ? (y.name = this.value)
            : this.type.keyword
            ? (y.name = this.type.keyword)
            : this.unexpected(),
          this.next(),
          this.finishNode(y, "JSXIdentifier")
        );
      }
      jsx_parseNamespacedName() {
        let y = this.start,
          u = this.startLoc,
          w = this.jsx_parseIdentifier();
        if (!v.allowNamespaces || !this.eat(I.colon)) return w;
        var V = this.startNodeAt(y, u);
        return (
          (V.namespace = w),
          (V.name = this.jsx_parseIdentifier()),
          this.finishNode(V, "JSXNamespacedName")
        );
      }
      jsx_parseElementName() {
        if (this.type === k.jsxTagEnd) return "";
        let y = this.start,
          u = this.startLoc,
          w = this.jsx_parseNamespacedName();
        for (
          this.type === I.dot &&
          w.type === "JSXNamespacedName" &&
          !v.allowNamespacedObjects &&
          this.unexpected();
          this.eat(I.dot);

        ) {
          let V = this.startNodeAt(y, u);
          (V.object = w),
            (V.property = this.jsx_parseIdentifier()),
            (w = this.finishNode(V, "JSXMemberExpression"));
        }
        return w;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case I.braceL:
            let y = this.jsx_parseExpressionContainer();
            return (
              y.expression.type === "JSXEmptyExpression" &&
                this.raise(
                  y.start,
                  "JSX attributes must only be assigned a non-empty expression"
                ),
              y
            );
          case k.jsxTagStart:
          case I.string:
            return this.parseExprAtom();
          default:
            this.raise(
              this.start,
              "JSX value should be either an expression or a quoted JSX text"
            );
        }
      }
      jsx_parseEmptyExpression() {
        let y = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(
          y,
          "JSXEmptyExpression",
          this.start,
          this.startLoc
        );
      }
      jsx_parseExpressionContainer() {
        let y = this.startNode();
        return (
          this.next(),
          (y.expression =
            this.type === I.braceR
              ? this.jsx_parseEmptyExpression()
              : this.parseExpression()),
          this.expect(I.braceR),
          this.finishNode(y, "JSXExpressionContainer")
        );
      }
      jsx_parseAttribute() {
        let y = this.startNode();
        return this.eat(I.braceL)
          ? (this.expect(I.ellipsis),
            (y.argument = this.parseMaybeAssign()),
            this.expect(I.braceR),
            this.finishNode(y, "JSXSpreadAttribute"))
          : ((y.name = this.jsx_parseNamespacedName()),
            (y.value = this.eat(I.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(y, "JSXAttribute"));
      }
      jsx_parseOpeningElementAt(y, u) {
        let w = this.startNodeAt(y, u);
        w.attributes = [];
        let V = this.jsx_parseElementName();
        for (
          V && (w.name = V);
          this.type !== I.slash && this.type !== k.jsxTagEnd;

        )
          w.attributes.push(this.jsx_parseAttribute());
        return (
          (w.selfClosing = this.eat(I.slash)),
          this.expect(k.jsxTagEnd),
          this.finishNode(w, V ? "JSXOpeningElement" : "JSXOpeningFragment")
        );
      }
      jsx_parseClosingElementAt(y, u) {
        let w = this.startNodeAt(y, u),
          V = this.jsx_parseElementName();
        return (
          V && (w.name = V),
          this.expect(k.jsxTagEnd),
          this.finishNode(w, V ? "JSXClosingElement" : "JSXClosingFragment")
        );
      }
      jsx_parseElementAt(y, u) {
        let w = this.startNodeAt(y, u),
          V = [],
          H = this.jsx_parseOpeningElementAt(y, u),
          W = null;
        if (!H.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case k.jsxTagStart:
                if (
                  ((y = this.start),
                  (u = this.startLoc),
                  this.next(),
                  this.eat(I.slash))
                ) {
                  W = this.jsx_parseClosingElementAt(y, u);
                  break e;
                }
                V.push(this.jsx_parseElementAt(y, u));
                break;
              case k.jsxText:
                V.push(this.parseExprAtom());
                break;
              case I.braceL:
                V.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          m(W.name) !== m(H.name) &&
            this.raise(
              W.start,
              "Expected corresponding JSX closing tag for <" + m(H.name) + ">"
            );
        }
        let ee = H.name ? "Element" : "Fragment";
        return (
          (w["opening" + ee] = H),
          (w["closing" + ee] = W),
          (w.children = V),
          this.type === I.relational &&
            this.value === "<" &&
            this.raise(
              this.start,
              "Adjacent JSX elements must be wrapped in an enclosing tag"
            ),
          this.finishNode(w, "JSX" + ee)
        );
      }
      jsx_parseText() {
        let y = this.parseLiteral(this.value);
        return (y.type = "JSXText"), y;
      }
      jsx_parseElement() {
        let y = this.start,
          u = this.startLoc;
        return this.next(), this.jsx_parseElementAt(y, u);
      }
      parseExprAtom(y) {
        return this.type === k.jsxText
          ? this.jsx_parseText()
          : this.type === k.jsxTagStart
          ? this.jsx_parseElement()
          : super.parseExprAtom(y);
      }
      readToken(y) {
        let u = this.curContext();
        if (u === j) return this.jsx_readToken();
        if (u === E || u === R) {
          if (G(y)) return this.jsx_readWord();
          if (y == 62) return ++this.pos, this.finishToken(k.jsxTagEnd);
          if ((y === 34 || y === 39) && u == E) return this.jsx_readString(y);
        }
        return y === 60 &&
          this.exprAllowed &&
          this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(k.jsxTagStart))
          : super.readToken(y);
      }
      updateContext(y) {
        if (this.type == I.braceL) {
          var u = this.curContext();
          u == E
            ? this.context.push(P.b_expr)
            : u == j
            ? this.context.push(P.b_tmpl)
            : super.updateContext(y),
            (this.exprAllowed = !0);
        } else if (this.type === I.slash && y === k.jsxTagStart)
          (this.context.length -= 2),
            this.context.push(R),
            (this.exprAllowed = !1);
        else return super.updateContext(y);
      }
    };
  }
})(ho);
const po = ir;
function us(e, i, r, s, o) {
  r || (r = q),
    (function l(m, x, v) {
      var C = v || m.type,
        _ = i[C];
      r[C](m, x, l), _ && _(m, x);
    })(e, s, o);
}
function fo(e, i, r, s, o) {
  var l = [];
  r || (r = q),
    (function m(x, v, C) {
      var _ = C || x.type,
        A = i[_],
        I = x !== l[l.length - 1];
      I && l.push(x), r[_](x, v, m), A && A(x, v || l, l), I && l.pop();
    })(e, s, o);
}
function yr(e, i, r) {
  r(e, i);
}
function _t(e, i, r) {}
var q = {};
q.Program = q.BlockStatement = function (e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
q.Statement = yr;
q.EmptyStatement = _t;
q.ExpressionStatement =
  q.ParenthesizedExpression =
  q.ChainExpression =
    function (e, i, r) {
      return r(e.expression, i, "Expression");
    };
q.IfStatement = function (e, i, r) {
  r(e.test, i, "Expression"),
    r(e.consequent, i, "Statement"),
    e.alternate && r(e.alternate, i, "Statement");
};
q.LabeledStatement = function (e, i, r) {
  return r(e.body, i, "Statement");
};
q.BreakStatement = q.ContinueStatement = _t;
q.WithStatement = function (e, i, r) {
  r(e.object, i, "Expression"), r(e.body, i, "Statement");
};
q.SwitchStatement = function (e, i, r) {
  r(e.discriminant, i, "Expression");
  for (var s = 0, o = e.cases; s < o.length; s += 1) {
    var l = o[s];
    l.test && r(l.test, i, "Expression");
    for (var m = 0, x = l.consequent; m < x.length; m += 1) {
      var v = x[m];
      r(v, i, "Statement");
    }
  }
};
q.SwitchCase = function (e, i, r) {
  e.test && r(e.test, i, "Expression");
  for (var s = 0, o = e.consequent; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Statement");
  }
};
q.ReturnStatement =
  q.YieldExpression =
  q.AwaitExpression =
    function (e, i, r) {
      e.argument && r(e.argument, i, "Expression");
    };
q.ThrowStatement = q.SpreadElement = function (e, i, r) {
  return r(e.argument, i, "Expression");
};
q.TryStatement = function (e, i, r) {
  r(e.block, i, "Statement"),
    e.handler && r(e.handler, i),
    e.finalizer && r(e.finalizer, i, "Statement");
};
q.CatchClause = function (e, i, r) {
  e.param && r(e.param, i, "Pattern"), r(e.body, i, "Statement");
};
q.WhileStatement = q.DoWhileStatement = function (e, i, r) {
  r(e.test, i, "Expression"), r(e.body, i, "Statement");
};
q.ForStatement = function (e, i, r) {
  e.init && r(e.init, i, "ForInit"),
    e.test && r(e.test, i, "Expression"),
    e.update && r(e.update, i, "Expression"),
    r(e.body, i, "Statement");
};
q.ForInStatement = q.ForOfStatement = function (e, i, r) {
  r(e.left, i, "ForInit"),
    r(e.right, i, "Expression"),
    r(e.body, i, "Statement");
};
q.ForInit = function (e, i, r) {
  e.type === "VariableDeclaration" ? r(e, i) : r(e, i, "Expression");
};
q.DebuggerStatement = _t;
q.FunctionDeclaration = function (e, i, r) {
  return r(e, i, "Function");
};
q.VariableDeclaration = function (e, i, r) {
  for (var s = 0, o = e.declarations; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.VariableDeclarator = function (e, i, r) {
  r(e.id, i, "Pattern"), e.init && r(e.init, i, "Expression");
};
q.Function = function (e, i, r) {
  e.id && r(e.id, i, "Pattern");
  for (var s = 0, o = e.params; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Pattern");
  }
  r(e.body, i, e.expression ? "Expression" : "Statement");
};
q.Pattern = function (e, i, r) {
  e.type === "Identifier"
    ? r(e, i, "VariablePattern")
    : e.type === "MemberExpression"
    ? r(e, i, "MemberPattern")
    : r(e, i);
};
q.VariablePattern = _t;
q.MemberPattern = yr;
q.RestElement = function (e, i, r) {
  return r(e.argument, i, "Pattern");
};
q.ArrayPattern = function (e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Pattern");
  }
};
q.ObjectPattern = function (e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    l.type === "Property"
      ? (l.computed && r(l.key, i, "Expression"), r(l.value, i, "Pattern"))
      : l.type === "RestElement" && r(l.argument, i, "Pattern");
  }
};
q.Expression = yr;
q.ThisExpression = q.Super = q.MetaProperty = _t;
q.ArrayExpression = function (e, i, r) {
  for (var s = 0, o = e.elements; s < o.length; s += 1) {
    var l = o[s];
    l && r(l, i, "Expression");
  }
};
q.ObjectExpression = function (e, i, r) {
  for (var s = 0, o = e.properties; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.FunctionExpression = q.ArrowFunctionExpression = q.FunctionDeclaration;
q.SequenceExpression = function (e, i, r) {
  for (var s = 0, o = e.expressions; s < o.length; s += 1) {
    var l = o[s];
    r(l, i, "Expression");
  }
};
q.TemplateLiteral = function (e, i, r) {
  for (var s = 0, o = e.quasis; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  for (var m = 0, x = e.expressions; m < x.length; m += 1) {
    var v = x[m];
    r(v, i, "Expression");
  }
};
q.TemplateElement = _t;
q.UnaryExpression = q.UpdateExpression = function (e, i, r) {
  r(e.argument, i, "Expression");
};
q.BinaryExpression = q.LogicalExpression = function (e, i, r) {
  r(e.left, i, "Expression"), r(e.right, i, "Expression");
};
q.AssignmentExpression = q.AssignmentPattern = function (e, i, r) {
  r(e.left, i, "Pattern"), r(e.right, i, "Expression");
};
q.ConditionalExpression = function (e, i, r) {
  r(e.test, i, "Expression"),
    r(e.consequent, i, "Expression"),
    r(e.alternate, i, "Expression");
};
q.NewExpression = q.CallExpression = function (e, i, r) {
  if ((r(e.callee, i, "Expression"), e.arguments))
    for (var s = 0, o = e.arguments; s < o.length; s += 1) {
      var l = o[s];
      r(l, i, "Expression");
    }
};
q.MemberExpression = function (e, i, r) {
  r(e.object, i, "Expression"), e.computed && r(e.property, i, "Expression");
};
q.ExportNamedDeclaration = q.ExportDefaultDeclaration = function (e, i, r) {
  e.declaration &&
    r(
      e.declaration,
      i,
      e.type === "ExportNamedDeclaration" || e.declaration.id
        ? "Statement"
        : "Expression"
    ),
    e.source && r(e.source, i, "Expression");
};
q.ExportAllDeclaration = function (e, i, r) {
  e.exported && r(e.exported, i), r(e.source, i, "Expression");
};
q.ImportDeclaration = function (e, i, r) {
  for (var s = 0, o = e.specifiers; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
  r(e.source, i, "Expression");
};
q.ImportExpression = function (e, i, r) {
  r(e.source, i, "Expression");
};
q.ImportSpecifier =
  q.ImportDefaultSpecifier =
  q.ImportNamespaceSpecifier =
  q.Identifier =
  q.Literal =
    _t;
q.TaggedTemplateExpression = function (e, i, r) {
  r(e.tag, i, "Expression"), r(e.quasi, i, "Expression");
};
q.ClassDeclaration = q.ClassExpression = function (e, i, r) {
  return r(e, i, "Class");
};
q.Class = function (e, i, r) {
  e.id && r(e.id, i, "Pattern"),
    e.superClass && r(e.superClass, i, "Expression"),
    r(e.body, i);
};
q.ClassBody = function (e, i, r) {
  for (var s = 0, o = e.body; s < o.length; s += 1) {
    var l = o[s];
    r(l, i);
  }
};
q.MethodDefinition = q.Property = function (e, i, r) {
  e.computed && r(e.key, i, "Expression"), r(e.value, i, "Expression");
};
var mo = En,
  go = Js,
  xo = wn,
  vo = "[object Object]",
  yo = Function.prototype,
  bo = Object.prototype,
  hs = yo.toString,
  So = bo.hasOwnProperty,
  _o = hs.call(Object);
function Co(e) {
  if (!xo(e) || mo(e) != vo) return !1;
  var i = go(e);
  if (i === null) return !0;
  var r = So.call(i, "constructor") && i.constructor;
  return typeof r == "function" && r instanceof r && hs.call(r) == _o;
}
var Eo = Co,
  wo = En,
  ko = Ks,
  Ao = wn,
  Io = "[object String]";
function Po(e) {
  return typeof e == "string" || (!ko(e) && Ao(e) && wo(e) == Io);
}
var To = Po;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function cn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function No(e) {
  var i, r;
  return cn(e) === !1
    ? !1
    : ((i = e.constructor),
      i === void 0
        ? !0
        : ((r = i.prototype),
          !(cn(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var ls = {},
  bi =
    (Rt && Rt.__assign) ||
    function () {
      return (
        (bi =
          Object.assign ||
          function (e) {
            for (var i, r = 1, s = arguments.length; r < s; r++) {
              i = arguments[r];
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
            }
            return e;
          }),
        bi.apply(this, arguments)
      );
    },
  Lo =
    (Rt && Rt.__spreadArrays) ||
    function () {
      for (var e = 0, i = 0, r = arguments.length; i < r; i++)
        e += arguments[i].length;
      for (var s = Array(e), o = 0, i = 0; i < r; i++)
        for (var l = arguments[i], m = 0, x = l.length; m < x; m++, o++)
          s[o] = l[m];
      return s;
    };
Object.defineProperty(ls, "__esModule", { value: !0 });
var Wt = [];
function Ro(e) {
  var i = typeof e;
  return e !== null && (i === "object" || i === "function");
}
function Oo(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Vo(e) {
  return Object.getOwnPropertySymbols(e).filter(function (i) {
    return Object.prototype.propertyIsEnumerable.call(e, i);
  });
}
function gi(e, i, r) {
  r === void 0 && (r = "");
  var s = { indent: "	", singleQuotes: !0 },
    o = bi(bi({}, s), i),
    l;
  o.inlineCharacterLimit === void 0
    ? (l = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + o.indent,
      })
    : (l = {
        newLine: "@@__PRETTY_PRINT_NEW_LINE__@@",
        newLineOrSpace: "@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",
        pad: "@@__PRETTY_PRINT_PAD__@@",
        indent: "@@__PRETTY_PRINT_INDENT__@@",
      });
  var m = function (C) {
    if (o.inlineCharacterLimit === void 0) return C;
    var _ = C.replace(new RegExp(l.newLine, "g"), "")
      .replace(new RegExp(l.newLineOrSpace, "g"), " ")
      .replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
    return _.length <= o.inlineCharacterLimit
      ? _
      : C.replace(
          new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"),
          `
`
        )
          .replace(new RegExp(l.pad, "g"), r)
          .replace(new RegExp(l.indent, "g"), r + o.indent);
  };
  if (Wt.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    typeof e == "function" ||
    typeof e == "symbol" ||
    Oo(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    Wt.push(e);
    var x =
      "[" +
      l.newLine +
      e
        .map(function (C, _) {
          var A = e.length - 1 === _ ? l.newLine : "," + l.newLineOrSpace,
            I = gi(C, o, r + o.indent);
          return o.transform && (I = o.transform(e, _, I)), l.indent + I + A;
        })
        .join("") +
      l.pad +
      "]";
    return Wt.pop(), m(x);
  }
  if (Ro(e)) {
    var v = Lo(Object.keys(e), Vo(e));
    if (
      (o.filter &&
        (v = v.filter(function (_) {
          return o.filter && o.filter(e, _);
        })),
      v.length === 0)
    )
      return "{}";
    Wt.push(e);
    var x =
      "{" +
      l.newLine +
      v
        .map(function (_, A) {
          var I = v.length - 1 === A ? l.newLine : "," + l.newLineOrSpace,
            k = typeof _ == "symbol",
            P = !k && /^[a-z$_][a-z$_0-9]*$/i.test(_.toString()),
            E = k || P ? _ : gi(_, o),
            R = gi(e[_], o, r + o.indent);
          return (
            o.transform && (R = o.transform(e, _, R)),
            l.indent + String(E) + ": " + R + I
          );
        })
        .join("") +
      l.pad +
      "}";
    return Wt.pop(), m(x);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (C) {
      return C ===
        `
`
        ? "\\n"
        : "\\r";
    })),
    o.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var Fo = (ls.prettyPrint = gi),
  ze = {},
  Mo = {
    get exports() {
      return ze;
    },
    set exports(e) {
      ze = e;
    },
  },
  xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  Sr = Symbol.for("react.portal"),
  Ii = Symbol.for("react.fragment"),
  Pi = Symbol.for("react.strict_mode"),
  Ti = Symbol.for("react.profiler"),
  Ni = Symbol.for("react.provider"),
  Li = Symbol.for("react.context"),
  Bo = Symbol.for("react.server_context"),
  Ri = Symbol.for("react.forward_ref"),
  Oi = Symbol.for("react.suspense"),
  Vi = Symbol.for("react.suspense_list"),
  Fi = Symbol.for("react.memo"),
  Mi = Symbol.for("react.lazy"),
  Do = Symbol.for("react.offscreen"),
  cs;
cs = Symbol.for("react.module.reference");
function Xe(e) {
  if (typeof e == "object" && e !== null) {
    var i = e.$$typeof;
    switch (i) {
      case br:
        switch (((e = e.type), e)) {
          case Ii:
          case Ti:
          case Pi:
          case Oi:
          case Vi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Bo:
              case Li:
              case Ri:
              case Mi:
              case Fi:
              case Ni:
                return e;
              default:
                return i;
            }
        }
      case Sr:
        return i;
    }
  }
}
xe.ContextConsumer = Li;
xe.ContextProvider = Ni;
xe.Element = br;
xe.ForwardRef = Ri;
xe.Fragment = Ii;
xe.Lazy = Mi;
xe.Memo = Fi;
xe.Portal = Sr;
xe.Profiler = Ti;
xe.StrictMode = Pi;
xe.Suspense = Oi;
xe.SuspenseList = Vi;
xe.isAsyncMode = function () {
  return !1;
};
xe.isConcurrentMode = function () {
  return !1;
};
xe.isContextConsumer = function (e) {
  return Xe(e) === Li;
};
xe.isContextProvider = function (e) {
  return Xe(e) === Ni;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
};
xe.isForwardRef = function (e) {
  return Xe(e) === Ri;
};
xe.isFragment = function (e) {
  return Xe(e) === Ii;
};
xe.isLazy = function (e) {
  return Xe(e) === Mi;
};
xe.isMemo = function (e) {
  return Xe(e) === Fi;
};
xe.isPortal = function (e) {
  return Xe(e) === Sr;
};
xe.isProfiler = function (e) {
  return Xe(e) === Ti;
};
xe.isStrictMode = function (e) {
  return Xe(e) === Pi;
};
xe.isSuspense = function (e) {
  return Xe(e) === Oi;
};
xe.isSuspenseList = function (e) {
  return Xe(e) === Vi;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ii ||
    e === Ti ||
    e === Pi ||
    e === Oi ||
    e === Vi ||
    e === Do ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Mi ||
        e.$$typeof === Fi ||
        e.$$typeof === Ni ||
        e.$$typeof === Li ||
        e.$$typeof === Ri ||
        e.$$typeof === cs ||
        e.getModuleId !== void 0))
  );
};
xe.typeOf = Xe;
(function (e) {
  e.exports = xe;
})(Mo);
var nt = function (e, i) {
  return e === 0 ? "" : new Array(e * i).fill(" ").join("");
};
function Yt(e) {
  return (
    (Yt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (i) {
            return typeof i;
          }
        : function (i) {
            return i &&
              typeof Symbol == "function" &&
              i.constructor === Symbol &&
              i !== Symbol.prototype
              ? "symbol"
              : typeof i;
          }),
    Yt(e)
  );
}
function pn(e) {
  return jo(e) || qo(e) || Uo(e) || Go();
}
function jo(e) {
  if (Array.isArray(e)) return rr(e);
}
function qo(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Uo(e, i) {
  if (e) {
    if (typeof e == "string") return rr(e, i);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return rr(e, i);
  }
}
function rr(e, i) {
  (i == null || i > e.length) && (i = e.length);
  for (var r = 0, s = new Array(i); r < i; r++) s[r] = e[r];
  return s;
}
function Go() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nr(e, i) {
  return e === null ||
    Yt(e) !== "object" ||
    e instanceof Date ||
    e instanceof RegExp ||
    et.isValidElement(e)
    ? e
    : (i.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return nr(r, i);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, s) {
              return (
                s === "_owner" ||
                  (s === "current" || i.has(e[s])
                    ? (r[s] = "[Circular]")
                    : (r[s] = nr(e[s], i))),
                r
              );
            }, {}));
}
function Wo(e) {
  return nr(e, new WeakSet());
}
var ps = function (i) {
    return { type: "string", value: i };
  },
  zo = function (i) {
    return { type: "number", value: i };
  },
  Ho = function (i, r, s, o) {
    return {
      type: "ReactElement",
      displayName: i,
      props: r,
      defaultProps: s,
      childrens: o,
    };
  },
  Qo = function (i, r) {
    return { type: "ReactFragment", key: i, childrens: r };
  },
  Xo = !!et.Fragment,
  fs = function (i) {
    return !i.name || i.name === "_default" ? "No Display Name" : i.name;
  },
  Jo = function e(i) {
    switch (!0) {
      case !!i.displayName:
        return i.displayName;
      case i.$$typeof === ze.Memo:
        return e(i.type);
      case i.$$typeof === ze.ForwardRef:
        return e(i.render);
      default:
        return fs(i);
    }
  },
  Ko = function (i) {
    switch (!0) {
      case typeof i.type == "string":
        return i.type;
      case typeof i.type == "function":
        return i.type.displayName ? i.type.displayName : fs(i.type);
      case ze.isForwardRef(i):
      case ze.isMemo(i):
        return Jo(i.type);
      case ze.isContextConsumer(i):
        return "".concat(i.type._context.displayName || "Context", ".Consumer");
      case ze.isContextProvider(i):
        return "".concat(i.type._context.displayName || "Context", ".Provider");
      case ze.isLazy(i):
        return "Lazy";
      case ze.isProfiler(i):
        return "Profiler";
      case ze.isStrictMode(i):
        return "StrictMode";
      case ze.isSuspense(i):
        return "Suspense";
      default:
        return "UnknownElementType";
    }
  },
  fn = function (i, r) {
    return r !== "children";
  },
  Yo = function (i) {
    return i !== !0 && i !== !1 && i !== null && i !== "";
  },
  dn = function (i, r) {
    var s = {};
    return (
      Object.keys(i)
        .filter(function (o) {
          return r(i[o], o);
        })
        .forEach(function (o) {
          return (s[o] = i[o]);
        }),
      s
    );
  },
  _r = function e(i, r) {
    var s = r.displayName,
      o = s === void 0 ? Ko : s;
    if (typeof i == "string") return ps(i);
    if (typeof i == "number") return zo(i);
    if (!st.isValidElement(i))
      throw new Error(
        "react-element-to-jsx-string: Expected a React.Element, got `".concat(
          Yt(i),
          "`"
        )
      );
    var l = o(i),
      m = dn(i.props, fn);
    i.ref !== null && (m.ref = i.ref);
    var x = i.key;
    typeof x == "string" && x.search(/^\./) && (m.key = x);
    var v = dn(i.type.defaultProps || {}, fn),
      C = st.Children.toArray(i.props.children)
        .filter(Yo)
        .map(function (_) {
          return e(_, r);
        });
    return Xo && i.type === et.Fragment ? Qo(x, C) : Ho(l, m, v, C);
  };
function $o() {}
var Zo = function (i) {
    return i
      .toString()
      .split(
        `
`
      )
      .map(function (r) {
        return r.trim();
      })
      .join("");
  },
  mn = Zo,
  ds = function (e, i) {
    var r = i.functionValue,
      s = r === void 0 ? mn : r,
      o = i.showFunctions;
    return s(!o && s === mn ? $o : e);
  },
  eu = function (e, i, r, s) {
    var o = Wo(e),
      l = Fo(o, {
        transform: function (x, v, C) {
          var _ = x[v];
          return _ && et.isValidElement(_)
            ? Bi(_r(_, s), !0, r, s)
            : typeof _ == "function"
            ? ds(_, s)
            : C;
        },
      });
    return i
      ? l
          .replace(/\s+/g, " ")
          .replace(/{ /g, "{")
          .replace(/ }/g, "}")
          .replace(/\[ /g, "[")
          .replace(/ ]/g, "]")
      : l.replace(/\t/g, nt(1, s.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(nt(r + 1, s.tabStop), "$1")
        );
  },
  tu = function (i) {
    return i.replace(/"/g, "&quot;");
  },
  iu = function (i, r, s, o) {
    if (typeof i == "number") return "{".concat(String(i), "}");
    if (typeof i == "string") return '"'.concat(tu(i), '"');
    if (Yt(i) === "symbol") {
      var l = i
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, "$1");
      return l ? "{Symbol('".concat(l, "')}") : "{Symbol()}";
    }
    return typeof i == "function"
      ? "{".concat(ds(i, o), "}")
      : et.isValidElement(i)
      ? "{".concat(Bi(_r(i, o), !0, s, o), "}")
      : i instanceof Date
      ? isNaN(i.valueOf())
        ? "{new Date(NaN)}"
        : '{new Date("'.concat(i.toISOString(), '")}')
      : No(i) || Array.isArray(i)
      ? "{".concat(eu(i, r, s, o), "}")
      : "{".concat(String(i), "}");
  },
  ru = function (e, i, r, s, o, l, m, x) {
    if (!i && !s)
      throw new Error(
        'The prop "'.concat(
          e,
          '" has no value and no default: could not be formatted'
        )
      );
    var v = i ? r : o,
      C = x.useBooleanShorthandSyntax,
      _ = x.tabStop,
      A = iu(v, l, m, x),
      I = " ",
      k = `
`.concat(nt(m + 1, _)),
      P = A.includes(`
`);
    return (
      C && A === "{false}" && !s
        ? ((I = ""), (k = ""))
        : C && A === "{true}"
        ? ((I += "".concat(e)), (k += "".concat(e)))
        : ((I += "".concat(e, "=").concat(A)),
          (k += "".concat(e, "=").concat(A))),
      {
        attributeFormattedInline: I,
        attributeFormattedMultiline: k,
        isMultilineAttribute: P,
      }
    );
  },
  nu = function (e, i) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      s = e[e.length - 1];
    return (
      s &&
      (i.type === "string" || i.type === "number") &&
      (s.type === "string" || s.type === "number")
        ? r.push(ps(String(s.value) + String(i.value)))
        : (s && r.push(s), r.push(i)),
      r
    );
  },
  su = function (i) {
    return ["key", "ref"].includes(i);
  },
  au = function (e) {
    return function (i) {
      var r = i.includes("key"),
        s = i.includes("ref"),
        o = i.filter(function (m) {
          return !su(m);
        }),
        l = pn(e ? o.sort() : o);
      return s && l.unshift("ref"), r && l.unshift("key"), l;
    };
  };
function ou(e, i) {
  return Array.isArray(i)
    ? function (r) {
        return i.indexOf(r) === -1;
      }
    : function (r) {
        return i(e[r], r);
      };
}
var uu = function (i, r, s, o, l) {
    var m = l.tabStop;
    return i.type === "string"
      ? r
          .split(
            `
`
          )
          .map(function (x, v) {
            return v === 0 ? x : "".concat(nt(o, m)).concat(x);
          }).join(`
`)
      : r;
  },
  hu = function (i, r, s) {
    return function (o) {
      return uu(o, Bi(o, i, r, s), i, r, s);
    };
  },
  lu = function (i, r) {
    return function (s) {
      var o = Object.keys(i).includes(s);
      return !o || (o && i[s] !== r[s]);
    };
  },
  ms = function (i, r, s, o, l) {
    return l ? nt(s, o).length + r.length > l : i.length > 1;
  },
  cu = function (i, r, s, o, l, m, x) {
    return (ms(i, r, l, m, x) || s) && !o;
  },
  gs = function (e, i, r, s) {
    var o = e.type,
      l = e.displayName,
      m = l === void 0 ? "" : l,
      x = e.childrens,
      v = e.props,
      C = v === void 0 ? {} : v,
      _ = e.defaultProps,
      A = _ === void 0 ? {} : _;
    if (o !== "ReactElement")
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          o
        )
      );
    var I = s.filterProps,
      k = s.maxInlineAttributesLineLength,
      P = s.showDefaultProps,
      E = s.sortProps,
      R = s.tabStop,
      j = "<".concat(m),
      B = j,
      G = j,
      N = !1,
      y = [],
      u = ou(C, I);
    Object.keys(C)
      .filter(u)
      .filter(lu(A, C))
      .forEach(function (H) {
        return y.push(H);
      }),
      Object.keys(A)
        .filter(u)
        .filter(function () {
          return P;
        })
        .filter(function (H) {
          return !y.includes(H);
        })
        .forEach(function (H) {
          return y.push(H);
        });
    var w = au(E)(y);
    if (
      (w.forEach(function (H) {
        var W = ru(
            H,
            Object.keys(C).includes(H),
            C[H],
            Object.keys(A).includes(H),
            A[H],
            i,
            r,
            s
          ),
          ee = W.attributeFormattedInline,
          J = W.attributeFormattedMultiline,
          X = W.isMultilineAttribute;
        X && (N = !0), (B += ee), (G += J);
      }),
      (G += `
`.concat(nt(r, R))),
      cu(w, B, N, i, r, R, k) ? (j = G) : (j = B),
      x && x.length > 0)
    ) {
      var V = r + 1;
      (j += ">"),
        i ||
          ((j += `
`),
          (j += nt(V, R))),
        (j += x
          .reduce(nu, [])
          .map(hu(i, V, s))
          .join(
            i
              ? ""
              : `
`.concat(nt(V, R))
          )),
        i ||
          ((j += `
`),
          (j += nt(V - 1, R))),
        (j += "</".concat(m, ">"));
    } else ms(w, B, r, R, k) || (j += " "), (j += "/>");
    return j;
  },
  pu = "",
  gn = "React.Fragment",
  fu = function (i, r, s) {
    var o = {};
    return (
      r && (o = { key: r }),
      {
        type: "ReactElement",
        displayName: i,
        props: o,
        defaultProps: {},
        childrens: s,
      }
    );
  },
  du = function (i) {
    var r = i.key;
    return !!r;
  },
  mu = function (i) {
    var r = i.childrens;
    return r.length === 0;
  },
  gu = function (e, i, r, s) {
    var o = e.type,
      l = e.key,
      m = e.childrens;
    if (o !== "ReactFragment")
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          o
        )
      );
    var x = s.useFragmentShortSyntax,
      v;
    return (
      x ? (mu(e) || du(e) ? (v = gn) : (v = pu)) : (v = gn),
      gs(fu(v, l, m), i, r, s)
    );
  },
  xu = ["<", ">", "{", "}"],
  vu = function (i) {
    return xu.some(function (r) {
      return i.includes(r);
    });
  },
  yu = function (i) {
    return vu(i) ? "{`".concat(i, "`}") : i;
  },
  bu = function (i) {
    var r = i;
    return (
      r.endsWith(" ") && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(" ") && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  Bi = function (e, i, r, s) {
    if (e.type === "number") return String(e.value);
    if (e.type === "string")
      return e.value ? "".concat(bu(yu(String(e.value)))) : "";
    if (e.type === "ReactElement") return gs(e, i, r, s);
    if (e.type === "ReactFragment") return gu(e, i, r, s);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  Su = function (e, i) {
    return Bi(e, !1, 0, i);
  },
  Qt = function (i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s = r.filterProps,
      o = s === void 0 ? [] : s,
      l = r.showDefaultProps,
      m = l === void 0 ? !0 : l,
      x = r.showFunctions,
      v = x === void 0 ? !1 : x,
      C = r.functionValue,
      _ = r.tabStop,
      A = _ === void 0 ? 2 : _,
      I = r.useBooleanShorthandSyntax,
      k = I === void 0 ? !0 : I,
      P = r.useFragmentShortSyntax,
      E = P === void 0 ? !0 : P,
      R = r.sortProps,
      j = R === void 0 ? !0 : R,
      B = r.maxInlineAttributesLineLength,
      G = r.displayName;
    if (!i)
      throw new Error("react-element-to-jsx-string: Expected a ReactElement");
    var N = {
      filterProps: o,
      showDefaultProps: m,
      showFunctions: v,
      functionValue: C,
      tabStop: A,
      useBooleanShorthandSyntax: k,
      useFragmentShortSyntax: E,
      sortProps: j,
      maxInlineAttributesLineLength: B,
      displayName: G,
    };
    return Su(_r(i, N), N);
  };
const {
    defaultDecorateStory: _u,
    addons: Cu,
    useEffect: Eu,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  { logger: mi } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function wu(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return "";
  let o = [];
  if (r) {
    let l = e.map((m) => {
      let x = m.getPrettyName(),
        v = m.getTypeName();
      return v != null ? `${x}: ${v}` : x;
    });
    o.push(`(${l.join(", ")})`);
  } else o.push("()");
  return s && o.push(`=> ${i.getTypeName()}`), o.join(" ");
}
function ku(e, i) {
  let r = e != null,
    s = i != null;
  if (!r && !s) return "";
  let o = [];
  return (
    r ? o.push("( ... )") : o.push("()"),
    s && o.push(`=> ${i.getTypeName()}`),
    o.join(" ")
  );
}
function Au(e) {
  return e.replace(
    /,/g,
    `,\r
`
  );
}
var sr = "custom",
  ii = "object",
  Cr = "array",
  Iu = "class",
  Vt = "func",
  Mt = "element";
function Er(e) {
  return da.includes(e.toLowerCase());
}
var xs = { format: { indent: { style: "  " }, semicolons: !1 } },
  Pu = { ...xs, format: { newline: "" } },
  Tu = { ...xs };
function pt(e, i = !1) {
  return In.generate(e, i ? Pu : Tu);
}
function ar(e, i = !1) {
  return i ? Nu(e) : pt(e);
}
function Nu(e) {
  let i = pt(e, !0);
  return i.endsWith(" }") || (i = `${i.slice(0, -1)} }`), i;
}
function xn(e, i = !1) {
  return i ? Ru(e) : Lu(e);
}
function Lu(e) {
  let i = pt(e);
  return i.endsWith("  }]") && (i = sa(i)), i;
}
function Ru(e) {
  let i = pt(e, !0);
  return i.startsWith("[    ") && (i = i.replace("[    ", "[")), i;
}
var vs = (e) => e.$$typeof === Symbol.for("react.memo"),
  Ou = (e) => e.$$typeof === Symbol.for("react.forward_ref"),
  wr = { ...q, JSXElement: () => {} },
  Vu = Te.extend(po());
function ri(e) {
  return e != null ? e.name : null;
}
function vn(e) {
  return e.filter(
    (i) => i.type === "ObjectExpression" || i.type === "ArrayExpression"
  );
}
function ys(e) {
  let i = [];
  return (
    fo(
      e,
      {
        ObjectExpression(r, s) {
          i.push(vn(s).length);
        },
        ArrayExpression(r, s) {
          i.push(vn(s).length);
        },
      },
      wr
    ),
    Math.max(...i)
  );
}
function Fu(e) {
  return { inferredType: { type: "Identifier", identifier: ri(e) }, ast: e };
}
function Mu(e) {
  return { inferredType: { type: "Literal" }, ast: e };
}
function Bu(e) {
  let i;
  us(
    e.body,
    {
      JSXElement(o) {
        i = o;
      },
    },
    wr
  );
  let r = {
      type: i != null ? "Element" : "Function",
      params: e.params,
      hasParams: e.params.length !== 0,
    },
    s = ri(e.id);
  return s != null && (r.identifier = s), { inferredType: r, ast: e };
}
function Du(e) {
  let i;
  return (
    us(
      e.body,
      {
        JSXElement(r) {
          i = r;
        },
      },
      wr
    ),
    {
      inferredType: {
        type: i != null ? "Element" : "Class",
        identifier: ri(e.id),
      },
      ast: e,
    }
  );
}
function ju(e) {
  let i = { type: "Element" },
    r = ri(e.openingElement.name);
  return r != null && (i.identifier = r), { inferredType: i, ast: e };
}
function qu(e) {
  let i = e.callee.type === "MemberExpression" ? e.callee.property : e.callee;
  return ri(i) === "shape" ? bs(e.arguments[0]) : null;
}
function bs(e) {
  return { inferredType: { type: "Object", depth: ys(e) }, ast: e };
}
function Uu(e) {
  return { inferredType: { type: "Array", depth: ys(e) }, ast: e };
}
function Gu(e) {
  switch (e.type) {
    case "Identifier":
      return Fu(e);
    case "Literal":
      return Mu(e);
    case "FunctionExpression":
    case "ArrowFunctionExpression":
      return Bu(e);
    case "ClassExpression":
      return Du(e);
    case "JSXElement":
      return ju(e);
    case "CallExpression":
      return qu(e);
    case "ObjectExpression":
      return bs(e);
    case "ArrayExpression":
      return Uu(e);
    default:
      return null;
  }
}
function Wu(e) {
  let i = Vu.parse(`(${e})`),
    r = { inferredType: { type: "Unknown" }, ast: i };
  if (i.body[0] != null) {
    let s = i.body[0];
    switch (s.type) {
      case "ExpressionStatement": {
        let o = Gu(s.expression);
        o != null && (r = o);
        break;
      }
    }
  }
  return r;
}
function dt(e) {
  try {
    return { ...Wu(e) };
  } catch {}
  return { inferredType: { type: "Unknown" } };
}
var zu = 150;
function Ve({ name: e, short: i, compact: r, full: s, inferredType: o }) {
  return { name: e, short: i, compact: r, full: s ?? i, inferredType: o };
}
function Ss(e) {
  return e.replace(/PropTypes./g, "").replace(/.isRequired/g, "");
}
function yn(e) {
  return e.split(/\r?\n/);
}
function Si(e, i = !1) {
  return Ss(ar(e, i));
}
function bn(e, i = !1) {
  return Ss(pt(e, i));
}
function Hu(e) {
  switch (e) {
    case "Object":
      return ii;
    case "Array":
      return Cr;
    case "Class":
      return Iu;
    case "Function":
      return Vt;
    case "Element":
      return Mt;
    default:
      return sr;
  }
}
function _s(e, i) {
  let { inferredType: r, ast: s } = dt(e),
    { type: o } = r,
    l,
    m,
    x;
  switch (o) {
    case "Identifier":
    case "Literal":
      (l = e), (m = e);
      break;
    case "Object": {
      let { depth: v } = r;
      (l = ii), (m = v === 1 ? Si(s, !0) : null), (x = Si(s));
      break;
    }
    case "Element": {
      let { identifier: v } = r;
      (l = v != null && !Er(v) ? v : Mt),
        (m = yn(e).length === 1 ? e : null),
        (x = e);
      break;
    }
    case "Array": {
      let { depth: v } = r;
      (l = Cr), (m = v <= 2 ? bn(s, !0) : null), (x = bn(s));
      break;
    }
    default:
      (l = Hu(o)), (m = yn(e).length === 1 ? e : null), (x = e);
      break;
  }
  return Ve({ name: i, short: l, compact: m, full: x, inferredType: o });
}
function Qu({ raw: e }) {
  return e != null
    ? _s(e, "custom")
    : Ve({ name: "custom", short: sr, compact: sr });
}
function Xu(e) {
  let { jsDocTags: i } = e;
  return i != null && (i.params != null || i.returns != null)
    ? Ve({
        name: "func",
        short: ku(i.params, i.returns),
        compact: null,
        full: wu(i.params, i.returns),
      })
    : Ve({ name: "func", short: Vt, compact: Vt });
}
function Ju(e, i) {
  let r = Object.keys(e.value)
      .map((m) => `${m}: ${Ft(e.value[m], i).full}`)
      .join(", "),
    { inferredType: s, ast: o } = dt(`{ ${r} }`),
    { depth: l } = s;
  return Ve({
    name: "shape",
    short: ii,
    compact: l === 1 && o ? Si(o, !0) : null,
    full: o ? Si(o) : null,
  });
}
function Yi(e) {
  return `objectOf(${e})`;
}
function Ku(e, i) {
  let { short: r, compact: s, full: o } = Ft(e.value, i);
  return Ve({
    name: "objectOf",
    short: Yi(r),
    compact: s != null ? Yi(s) : null,
    full: o && Yi(o),
  });
}
function Yu(e, i) {
  if (Array.isArray(e.value)) {
    let r = e.value.reduce(
      (s, o) => {
        let { short: l, compact: m, full: x } = Ft(o, i);
        return s.short.push(l), s.compact.push(m), s.full.push(x), s;
      },
      { short: [], compact: [], full: [] }
    );
    return Ve({
      name: "union",
      short: r.short.join(" | "),
      compact: r.compact.every((s) => s != null) ? r.compact.join(" | ") : null,
      full: r.full.join(" | "),
    });
  }
  return Ve({ name: "union", short: e.value, compact: null });
}
function $u({ value: e, computed: i }) {
  return i
    ? _s(e, "enumvalue")
    : Ve({ name: "enumvalue", short: e, compact: e });
}
function Zu(e) {
  if (Array.isArray(e.value)) {
    let i = e.value.reduce(
      (r, s) => {
        let { short: o, compact: l, full: m } = $u(s);
        return r.short.push(o), r.compact.push(l), r.full.push(m), r;
      },
      { short: [], compact: [], full: [] }
    );
    return Ve({
      name: "enum",
      short: i.short.join(" | "),
      compact: i.compact.every((r) => r != null) ? i.compact.join(" | ") : null,
      full: i.full.join(" | "),
    });
  }
  return Ve({ name: "enum", short: e.value, compact: e.value });
}
function or(e) {
  return `${e}[]`;
}
function Sn(e) {
  return `[${e}]`;
}
function _n(e, i, r) {
  return Ve({
    name: "arrayOf",
    short: or(e),
    compact: i != null ? Sn(i) : null,
    full: r && Sn(r),
  });
}
function eh(e, i) {
  let {
    name: r,
    short: s,
    compact: o,
    full: l,
    inferredType: m,
  } = Ft(e.value, i);
  if (r === "custom") {
    if (m === "Object") return _n(s, o, l);
  } else if (r === "shape") return _n(s, o, l);
  return Ve({ name: "arrayOf", short: or(s), compact: or(s) });
}
function Ft(e, i) {
  try {
    switch (e.name) {
      case "custom":
        return Qu(e);
      case "func":
        return Xu(i);
      case "shape":
        return Ju(e, i);
      case "instanceOf":
        return Ve({ name: "instanceOf", short: e.value, compact: e.value });
      case "objectOf":
        return Ku(e, i);
      case "union":
        return Yu(e, i);
      case "enum":
        return Zu(e);
      case "arrayOf":
        return eh(e, i);
      default:
        return Ve({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Ve({ name: "unknown", short: "unknown", compact: "unknown" });
}
function th(e) {
  let { type: i } = e.docgenInfo;
  if (i == null) return null;
  try {
    switch (i.name) {
      case "custom":
      case "shape":
      case "instanceOf":
      case "objectOf":
      case "union":
      case "enum":
      case "arrayOf": {
        let { short: r, compact: s, full: o } = Ft(i, e);
        return s != null && !ra(s) ? be(s) : o ? be(r, o) : be(r);
      }
      case "func": {
        let { short: r, full: s } = Ft(i, e),
          o = r,
          l;
        return s && s.length < zu ? (o = s) : s && (l = Au(s)), be(o, l);
      }
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
function Cs({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r === 1) {
    let s = ar(i, !0);
    if (!$t(s)) return be(s);
  }
  return be(ii, ar(i));
}
function Es({ inferredType: e, ast: i }) {
  let { depth: r } = e;
  if (r <= 2) {
    let s = xn(i, !0);
    if (!$t(s)) return be(s);
  }
  return be(Cr, xn(i));
}
function kr(e, i) {
  return i ? `${e}( ... )` : `${e}()`;
}
function Di(e) {
  return `<${e} />`;
}
function ws(e) {
  let { type: i, identifier: r } = e;
  switch (i) {
    case "Function":
      return kr(r, e.hasParams);
    case "Element":
      return Di(r);
    default:
      return r;
  }
}
function ih({ inferredType: e, ast: i }) {
  let { identifier: r } = e;
  if (r != null) return be(ws(e), pt(i));
  let s = pt(i, !0);
  return $t(s) ? be(Vt, pt(i)) : be(s);
}
function rh(e, i) {
  let { inferredType: r } = i,
    { identifier: s } = r;
  if (s != null && !Er(s)) {
    let o = ws(r);
    return be(o, e);
  }
  return $t(e) ? be(Mt, e) : be(e);
}
function ks(e) {
  try {
    let i = dt(e);
    switch (i.inferredType.type) {
      case "Object":
        return Cs(i);
      case "Function":
        return ih(i);
      case "Element":
        return rh(e, i);
      case "Array":
        return Es(i);
      default:
        return null;
    }
  } catch (i) {
    console.error(i);
  }
  return null;
}
function As(e) {
  return e.$$typeof != null;
}
function Is(e, i) {
  let { name: r } = e;
  return r !== "" && r !== "anonymous" && r !== i ? r : null;
}
var nh = (e) => be(JSON.stringify(e));
function sh(e) {
  let { type: i } = e,
    { displayName: r } = i,
    s = Qt(e, {});
  if (r != null) {
    let o = Di(r);
    return be(o, s);
  }
  if (To(i) && Er(i)) {
    let o = Qt(e, { tabStop: 0 }).replace(/\r?\n|\r/g, "");
    if (!$t(o)) return be(o);
  }
  return be(Mt, s);
}
var ah = (e) => {
    if (As(e) && e.type != null) return sh(e);
    if (Eo(e)) {
      let i = dt(JSON.stringify(e));
      return Cs(i);
    }
    if (Array.isArray(e)) {
      let i = dt(JSON.stringify(e));
      return Es(i);
    }
    return be(ii);
  },
  oh = (e, i) => {
    let r = !1,
      s;
    if (zr(e.render)) r = !0;
    else if (e.prototype != null && zr(e.prototype.render)) r = !0;
    else {
      let l;
      try {
        s = dt(e.toString());
        let { hasParams: m, params: x } = s.inferredType;
        m
          ? x.length === 1 && x[0].type === "ObjectPattern" && (l = e({}))
          : (l = e()),
          l != null && As(l) && (r = !0);
      } catch {}
    }
    let o = Is(e, i.name);
    if (o != null) {
      if (r) return be(Di(o));
      s != null && (s = dt(e.toString()));
      let { hasParams: l } = s.inferredType;
      return be(kr(o, l));
    }
    return be(r ? Mt : Vt);
  },
  uh = (e) => be(e.toString()),
  Ps = { string: nh, object: ah, function: oh, default: uh };
function hh(e = {}) {
  return { ...Ps, ...e };
}
function Ts(e, i, r = Ps) {
  try {
    switch (typeof e) {
      case "string":
        return r.string(e, i);
      case "object":
        return r.object(e, i);
      case "function":
        return r.function(e, i);
      default:
        return r.default(e, i);
    }
  } catch (s) {
    console.error(s);
  }
  return null;
}
function lh(e, i) {
  let { propTypes: r } = i;
  return r != null
    ? Object.keys(r)
        .map((s) => e.find((o) => o.name === s))
        .filter(Boolean)
    : e;
}
var ch = (e, { name: i, type: r }) => {
    let s = r.summary === "element" || r.summary === "elementType",
      o = Is(e, i);
    if (o != null) {
      if (s) return be(Di(o));
      let { hasParams: l } = dt(e.toString()).inferredType;
      return be(kr(o, l));
    }
    return be(s ? Mt : Vt);
  },
  ph = hh({ function: ch });
function fh(e, i) {
  let { propDef: r } = e,
    s = th(e);
  s != null && (r.type = s);
  let { defaultValue: o } = e.docgenInfo;
  if (o != null && o.value != null) {
    let l = ks(o.value);
    l != null && (r.defaultValue = l);
  } else if (i != null) {
    let l = Ts(i, r, ph);
    l != null && (r.defaultValue = l);
  }
  return r;
}
function dh(e, i) {
  let r = i.defaultProps != null ? i.defaultProps : {},
    s = e.map((o) => fh(o, r[o.propDef.name]));
  return lh(s, i);
}
function mh(e, i) {
  let { propDef: r } = e,
    { defaultValue: s } = e.docgenInfo;
  if (s != null && s.value != null) {
    let o = ks(s.value);
    o != null && (r.defaultValue = o);
  } else if (i != null) {
    let o = Ts(i, r);
    o != null && (r.defaultValue = o);
  }
  return r;
}
function gh(e) {
  return e.map((i) => mh(i));
}
var Cn = new Map();
Object.keys(xi).forEach((e) => {
  let i = xi[e];
  Cn.set(i, e), Cn.set(i.isRequired, e);
});
function xh(e, i) {
  let r = e;
  !ta(e) && !e.propTypes && vs(e) && (r = e.type);
  let s = ia(r, i);
  if (s.length === 0) return [];
  switch (s[0].typeSystem) {
    case Hr.JAVASCRIPT:
      return dh(s, e);
    case Hr.TYPESCRIPT:
      return gh(s);
    default:
      return s.map((o) => o.propDef);
  }
}
var vh = (e) => ({ rows: xh(e, "props") }),
  yh = (e) => {
    if (e) {
      let { rows: i } = vh(e);
      if (i)
        return i.reduce((r, s) => {
          let {
            name: o,
            description: l,
            type: m,
            sbType: x,
            defaultValue: v,
            jsDocTags: C,
            required: _,
          } = s;
          return (
            (r[o] = {
              name: o,
              description: l,
              type: { required: _, ...x },
              table: { type: m, jsDocTags: C, defaultValue: v },
            }),
            r
          );
        }, {});
    }
    return null;
  };
function ur(e) {
  if (et.isValidElement(e)) {
    let i = Object.keys(e.props).reduce(
      (r, s) => ((r[s] = ur(e.props[s])), r),
      {}
    );
    return { ...e, props: i, _owner: null };
  }
  return Array.isArray(e) ? e.map(ur) : e;
}
var bh = (e, i) => {
    if (typeof e > "u")
      return mi.warn("Too many skip or undefined component"), null;
    let r = e,
      s = r.type;
    for (let l = 0; l < i.skip; l += 1) {
      if (typeof r > "u") return mi.warn("Cannot skip undefined element"), null;
      if (st.Children.count(r) > 1)
        return mi.warn("Trying to skip an array of elements"), null;
      typeof r.props.children > "u"
        ? (mi.warn("Not enough children to skip elements."),
          typeof r.type == "function" &&
            r.type.name === "" &&
            (r = st.createElement(s, { ...r.props })))
        : typeof r.props.children == "function"
        ? (r = r.props.children())
        : (r = r.props.children);
    }
    let o = {
      ...(typeof i.displayName == "string"
        ? { showFunctions: !0, displayName: () => i.displayName }
        : {
            displayName: (l) =>
              l.type.displayName ||
              (l.type === Symbol.for("react.profiler") ? "Profiler" : null) ||
              ea(l.type, "displayName") ||
              (l.type.name !== "_default" ? l.type.name : null) ||
              (typeof l.type == "function" ? "No Display Name" : null) ||
              (Ou(l.type) ? l.type.render.name : null) ||
              (vs(l.type) ? l.type.type.name : null) ||
              l.type,
          }),
      filterProps: (l, m) => l !== void 0,
      ...i,
    };
    return st.Children.map(e, (l) => {
      let m = typeof l == "number" ? l.toString() : l,
        x = (typeof Qt == "function" ? Qt : Qt.default)(ur(m), o);
      if (x.indexOf("&quot;") > -1) {
        let v = x.match(/\S+=\\"([^"]*)\\"/g);
        v &&
          v.forEach((C) => {
            x = x.replace(C, C.replace(/&quot;/g, "'"));
          });
      }
      return x;
    })
      .join(
        `
`
      )
      .replace(/function\s+noRefCheck\(\)\s+\{\}/g, "() => {}");
  },
  Sh = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  _h = (e) => {
    var s;
    let i =
        (s = e == null ? void 0 : e.parameters.docs) == null
          ? void 0
          : s.source,
      r = e == null ? void 0 : e.parameters.__isArgsStory;
    return (i == null ? void 0 : i.type) === Wr.DYNAMIC
      ? !1
      : !r ||
          (i == null ? void 0 : i.code) ||
          (i == null ? void 0 : i.type) === Wr.CODE;
  },
  Ch = (e) => {
    var i, r;
    return (
      ((i = e.type) == null ? void 0 : i.displayName) === "MDXCreateElement" &&
      !!((r = e.props) != null && r.mdxType)
    );
  },
  Ns = (e) => {
    if (!Ch(e)) return e;
    let { mdxType: i, originalType: r, children: s, ...o } = e.props,
      l = [];
    return (
      s && (l = (Array.isArray(s) ? s : [s]).map(Ns)),
      et.createElement(r, o, ...l)
    );
  },
  Ls = (e, i) => {
    var _, A;
    let r = Cu.getChannel(),
      s = _h(i),
      o = "";
    Eu(() => {
      if (!s) {
        let { id: I, unmappedArgs: k } = i;
        r.emit($s, { id: I, source: o, args: k });
      }
    });
    let l = e();
    if (s) return l;
    let m = { ...Sh, ...((i == null ? void 0 : i.parameters.jsx) || {}) },
      x =
        (A =
          (_ = i == null ? void 0 : i.parameters.docs) == null
            ? void 0
            : _.source) != null && A.excludeDecorators
          ? i.originalStoryFn(i.args, i)
          : l,
      v = Ns(x),
      C = bh(v, m);
    return C && (o = C), l;
  },
  Eh = {
    docs: {
      story: { inline: !0 },
      extractArgTypes: yh,
      extractComponentDescription: Zs,
    },
  },
  Rh = [Ls],
  Oh = [Ys],
  Vh = (e, i) => {
    let r = i.findIndex((o) => o.originalFn === Ls),
      s = r === -1 ? i : [...i.splice(r, 1), ...i];
    return _u(e, s);
  },
  Fh = { renderer: "react", ...Eh };
export {
  Vh as applyDecorators,
  Oh as argTypesEnhancers,
  Rh as decorators,
  Fh as parameters,
  Nh as render,
  Lh as renderToCanvas,
};
//# sourceMappingURL=config-0f481bd3.js.map

// Mermaid 渲染：与站点 CSS 令牌共用配色，并兼容 Material 的即时导航与亮暗切换。
// 颜色全部取自 stylesheets/extra.css 中定义的自定义属性，避免图表与页面风格脱节。

(function () {
    "use strict";

    var SELECTOR = ".mermaid";
    var sourceCache = new WeakMap();

    function cssVar(name, fallback) {
        var value = getComputedStyle(document.body).getPropertyValue(name).trim();
        return value || fallback;
    }

    function themeConfig() {
        return {
            startOnLoad: false,
            securityLevel: "loose",
            theme: "base",
            fontFamily: cssVar("--md-text-font", "sans-serif"),
            themeVariables: {
                background: cssVar("--md-default-bg-color", "#f5f5f3"),
                primaryColor: cssVar("--grc-surface", "#ecece9"),
                primaryTextColor: cssVar("--md-default-fg-color", "#2d3137"),
                primaryBorderColor: cssVar("--grc-border", "#d8dbdf"),
                secondaryColor: cssVar("--grc-surface-strong", "#e4e5e1"),
                tertiaryColor: cssVar("--md-default-bg-color", "#f5f5f3"),
                lineColor: cssVar("--md-default-fg-color--lighter", "#8a9099"),
                textColor: cssVar("--md-default-fg-color", "#2d3137"),
                mainBkg: cssVar("--grc-surface", "#ecece9"),
                nodeBorder: cssVar("--grc-border", "#d8dbdf"),
                clusterBkg: cssVar("--grc-surface", "#ecece9"),
                clusterBorder: cssVar("--grc-border", "#d8dbdf"),
                edgeLabelBackground: cssVar("--md-default-bg-color", "#f5f5f3"),
                fontSize: "14px"
            }
        };
    }

    // 首次渲染前记录源码，供亮暗切换时重绘
    function rememberSource(node) {
        if (!sourceCache.has(node) && !node.querySelector("svg")) {
            sourceCache.set(node, node.textContent);
        }
    }

    function render(force) {
        if (typeof mermaid === "undefined") {
            return;
        }

        var nodes = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
        nodes.forEach(rememberSource);

        if (force) {
            nodes.forEach(function (node) {
                var source = sourceCache.get(node);
                if (!source) {
                    return;
                }
                node.removeAttribute("data-processed");
                node.innerHTML = source;
            });
        }

        mermaid.initialize(themeConfig());

        var pending = nodes.filter(function (node) {
            return !node.querySelector("svg");
        });

        if (pending.length) {
            mermaid.run({ nodes: pending }).catch(function () {
                // 单个图表语法错误不应阻塞整页渲染
            });
        }
    }

    function setup() {
        render(false);

        var scheme = document.body.getAttribute("data-md-color-scheme");
        new MutationObserver(function () {
            var next = document.body.getAttribute("data-md-color-scheme");
            if (next !== scheme) {
                scheme = next;
                render(true);
            }
        }).observe(document.body, {
            attributes: true,
            attributeFilter: ["data-md-color-scheme"]
        });
    }

    if (typeof document$ !== "undefined" && typeof document$.subscribe === "function") {
        document$.subscribe(function () {
            render(false);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setup);
    } else {
        setup();
    }
})();

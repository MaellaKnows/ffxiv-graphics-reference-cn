// Mermaid 初始化 + Material 即时导航兼容
// Material 的 navigation.instant 会替换页面内容，DOMContentLoaded 只触发一次，
// 因此这里用 Material 暴露的 document$ 观察页面切换后重新渲染图表。

function grcRenderMermaid() {
    if (typeof mermaid === "undefined") {
        return;
    }

    mermaid.run({ querySelector: ".mermaid" }).catch(() => {
        // 单个图表语法错误不应阻塞整页渲染
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof mermaid === "undefined") {
        return;
    }

    mermaid.initialize({
        startOnLoad: false,
        theme: "neutral",
        securityLevel: "loose"
    });

    if (typeof document$ !== "undefined" && typeof document$.subscribe === "function") {
        document$.subscribe(grcRenderMermaid);
    } else {
        grcRenderMermaid();
    }
});

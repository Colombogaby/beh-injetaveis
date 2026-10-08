
/* =====================================================
   BEH INJETÁVEIS — JAVASCRIPT
   Menu mobile, imagens, animações e navegação
   ===================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#main-navigation");

    /* MENU PARA CELULARES */

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));

            const icon = menuButton.querySelector(".menu-icon");
            const label = menuButton.querySelector(".menu-label");

            if (icon) {
                icon.textContent = isOpen ? "✕" : "☰";
            }

            if (label) {
                label.textContent = isOpen ? "Fechar menu" : "Menu";
            }
        });

        // Fecha o menu após clicar em um link no celular.
        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                if (window.matchMedia("(max-width: 680px)").matches) {
                    navigation.classList.remove("is-open");
                    menuButton.setAttribute("aria-expanded", "false");

                    const icon = menuButton.querySelector(".menu-icon");
                    const label = menuButton.querySelector(".menu-label");

                    if (icon) icon.textContent = "☰";
                    if (label) label.textContent = "Menu";
                }
            });
        });

        // Fecha o menu com Escape.
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector(".menu-icon");
                const label = menuButton.querySelector(".menu-label");

                if (icon) icon.textContent = "☰";
                if (label) label.textContent = "Menu";

                menuButton.focus();
            }
        });

        // Garante que o menu volte ao estado normal ao ampliar a tela.
        window.addEventListener("resize", () => {
            if (window.innerWidth > 680) {
                navigation.classList.remove("is-open");
                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector(".menu-icon");
                const label = menuButton.querySelector(".menu-label");

                if (icon) icon.textContent = "☰";
                if (label) label.textContent = "Menu";
            }
        });
    }

    /* IMAGENS AINDA NÃO ADICIONADAS */

    document.querySelectorAll("img[data-placeholder='true']").forEach((img) => {
        const showPlaceholder = () => {
            const container = img.parentElement;

            if (!container || container.querySelector(".image-placeholder-content")) {
                img.style.display = "none";
                return;
            }

            img.style.display = "none";
            container.classList.add("has-image-placeholder");

            const placeholder = document.createElement("div");
            placeholder.className = "image-placeholder-content";

            const symbol = document.createElement("span");
            symbol.className = "placeholder-symbol";
            symbol.setAttribute("aria-hidden", "true");
            symbol.textContent = "✧";

            const message = document.createElement("span");
            message.textContent = "Espaço reservado para imagem";

            placeholder.append(symbol, message);
            container.appendChild(placeholder);
        };

        // Imagem ainda não existe ou não carregou.
        img.addEventListener("error", showPlaceholder);

        // Também verifica imagens que já falharam antes do evento.
        if (img.complete && img.naturalWidth === 0) {
            showPlaceholder();
        }
    });

    /* BOTÃO VOLTAR AO TOPO */

    const backToTop = document.querySelector("[data-back-to-top]");
    let floatingTopButton = null;

    if (backToTop) {
        // Cria um botão flutuante para telas longas.
        floatingTopButton = document.createElement("button");
        floatingTopButton.className = "back-to-top";
        floatingTopButton.type = "button";
        floatingTopButton.setAttribute("aria-label", "Voltar ao topo");
        floatingTopButton.title = "Voltar ao topo";
        floatingTopButton.textContent = "↑";

        document.body.appendChild(floatingTopButton);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth"
            });
        };

        backToTop.addEventListener("click", (event) => {
            event.preventDefault();
            scrollToTop();
        });

        floatingTopButton.addEventListener("click", scrollToTop);

        const updateTopButton = () => {
            floatingTopButton.classList.toggle(
                "is-visible",
                window.scrollY > 400
            );
        };

        window.addEventListener("scroll", updateTopButton, {
            passive: true
        });

        updateTopButton();
    }

    /* ANIMAÇÕES AO ROLAR A PÁGINA */

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = document.querySelectorAll(
        "main > section:not(.hero)"
    );

    if ("IntersectionObserver" in window && !reduceMotion) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.10
        });

        sections.forEach((section) => {
            section.classList.add("js-reveal");
            observer.observe(section);
        });
    }

    /* ANO AUTOMÁTICO NO RODAPÉ */

    const currentYear = document.querySelector("[data-current-year]");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* LINK ATIVO DA NAVEGAÇÃO */

    if (navigation) {
        const currentPath = window.location.pathname
            .replace(/\/+$/, "")
            .toLowerCase();

        navigation.querySelectorAll("a").forEach((link) => {
            const linkUrl = new URL(link.href, window.location.href);

            const linkPath = linkUrl.pathname
                .replace(/\/+$/, "")
                .toLowerCase();

            if (linkPath === currentPath) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    /* AVISO NO CONSOLE PARA FACILITAR A MANUTENÇÃO */

    console.info("Beh Injetáveis: JavaScript carregado com sucesso.");
});
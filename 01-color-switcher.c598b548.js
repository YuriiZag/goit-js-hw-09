const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function r(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function d(n){"start"===n?t.setAttribute("disabled",!0):e.setAttribute("disabled",!0)}function o(n){"start"===n?e.removeAttribute("disabled",!0):t.removeAttribute("disabled",!0)}e.setAttribute("disabled",!0),t.addEventListener("click",(function(){r(),o("start"),d("start"),n=setInterval((()=>{r()}),1e3)})),e.addEventListener("click",(function(){d("end"),o("end"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.c598b548.js.map
import { useState, createElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export const App = () => {
    // < Императивный
    const [count, setCount] = useState(0); // Декларативный >
    const currentDate = new Date();
    const viteLogoImg = createElement("img", {
        src: viteLogo,
        className: "logo",
        alt: "Vite logo",
    });
    const viteLink = createElement(
        "a",
        { href: "https://vite.dev", target: "_blank" },
        viteLogoImg
    );
    const reactLogoImg = createElement("img", {
        src: reactLogo,
        className: "logo react",
        alt: "React logo",
    });
    const reactLink = createElement(
        "a",
        { href: "https://react.dev", target: "_blank" },
        reactLogoImg
    );
    const images = createElement("div", {}, viteLink, reactLink);
    const header = createElement("h1", {}, "Vite + React");
    const card = createElement(
        "div",
        { className: "card" },
        createElement(
            "button",
            { onClick: () => setCount((count) => count + 1) },
            `count is ${count}`
        ),
        createElement(
            "p",
            {},
            "Edit ",
            createElement("code", {}, "src/App.jsx"),
            " and save to test HMR"
        )
    );

    const mainConteiner = createElement(
        "div",
        {},
        images,
        header,
        card,
        createElement(
            "p",
            { className: "read-the-docs" },
            "Click on the Vite and React logos to learn more"
        ),
        createElement("p", {}, currentDate.getFullYear())
    );

    return mainConteiner;
};

import Button from "../comps/Button";
import Head from "../comps/Head";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    alert(
      "The calculating functionality doesn't work, just the theme switcher."
    );
    const bod = document.querySelector("body"); // body-background
    const result = document.querySelector(".result"); // screen-background
    const two = document.querySelector(".two"); // double-background
    const buttonDiv = document.querySelector(".buttons"); // double-background
    const resetAndDel = document.querySelectorAll(".special-blue"); // double-key-background
    const equal = document.querySelector(".span2 .front"); // equal-background
    const toggle = document.querySelector(".two div"); // equal-background
    const resetAndDelShadow = document.querySelectorAll(".special-blue-shadow"); // double-key-shadow
    const equalShadow = document.querySelector(".special-red-shadow"); // equal-shadow
    const front = document.querySelectorAll(".front"); // keys-background, color
    const back = document.querySelectorAll(".back"); // keys-shadow
    const toggleDiv = document.querySelector(".two div");
    const asd = [
      ...document.querySelectorAll(".one p"),
      document.querySelector(".result"),
      document.querySelector("header > p"),
      document.querySelector(".theme"),
    ];

    toggleDiv.addEventListener("click", () => {
      if (toggle.classList.contains("on-one")) {
        toggleDiv.classList.replace("on-one", "on-two");

        bod.id = "body-2";
        result.id = "result-2";
        two.id = "two-2";
        buttonDiv.id = "buttons-2";
        toggle.id = "special-red-2";
        front.forEach((fro) => (fro.id = "front-2"));
        back.forEach((bck) => (bck.id = "back-2"));
        resetAndDel.forEach((res) => (res.id = "special-blue-2"));
        resetAndDelShadow.forEach((res) => (res.id = "special-blue-shadow-2"));
        equal.id = "special-red-2";
        equalShadow.id = "special-red-shadow-2";
        bod.style.background = "var(--theme-two-body-background)";

        asd.forEach((p) => (p.style.color = "var(--theme-two-color)"));
      } else if (toggle.classList.contains("on-two")) {
        toggleDiv.classList.replace("on-two", "on-three");
        bod.id = "body-2";
        result.id = "result-3";
        two.id = "two-3";
        buttonDiv.id = "buttons-3";
        toggle.id = "special-red-3";
        front.forEach((fro) => (fro.id = "front-3"));
        back.forEach((bck) => (bck.id = "back-3"));
        resetAndDel.forEach((res) => (res.id = "special-blue-3"));
        resetAndDelShadow.forEach((res) => (res.id = "special-blue-shadow-3"));
        equal.id = "special-red-3";
        equalShadow.id = "special-red-shadow-3";
        bod.style.background = "var(--theme-three-body-background)";

        asd.forEach((p) => (p.style.color = "var(--theme-three-color)"));
      } else if (toggle.classList.contains("on-three")) {
        toggleDiv.classList.replace("on-three", "on-one");

        result.id = "";
        two.id = "";
        buttonDiv.id = "";
        toggle.id = "";
        front.forEach((fro) => (fro.id = ""));
        back.forEach((bck) => (bck.id = ""));
        resetAndDel.forEach((res) => (res.id = ""));
        resetAndDelShadow.forEach((res) => (res.id = ""));
        equal.id = "";
        equalShadow.id = "";
        bod.style.background = "var(--theme-one-body-background)";

        asd.forEach((p) => (p.style.color = "white"));
      }
    });
  }, []);

  return (
    <main>
      <Head />
      <header>
        <p>calc</p>
        <div className="toggle-container">
          <p className="theme">THEME</p>
          <div className="toggle-sec">
            <div className="one">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="two">
              <div className="on-one"></div>
            </div>
          </div>
        </div>
      </header>
      <div className={"result"}>399,981</div>

      <div className={"buttons"}>
        <Button num={7} classes="wrapper" />
        <Button num={8} classes="wrapper" />
        <Button num={9} classes="wrapper" />
        <Button num="DEL" classes="wrapper special-blue" />
        <Button num={4} classes="wrapper" />
        <Button num={5} classes="wrapper" />
        <Button num={6} classes="wrapper" />
        <Button num="+" classes="wrapper" />
        <Button num={1} classes="wrapper" />
        <Button num={2} classes="wrapper" />
        <Button num={3} classes="wrapper" />
        <Button num="-" classes="wrapper" />
        <Button num="." classes="wrapper" />
        <Button num={0} classes="wrapper" />
        <Button num="/" classes="wrapper" />
        <Button num="x" classes="wrapper" />
        <Button num="RESET" classes="wrapper span1 special-blue" />
        <Button num="=" classes="wrapper span2 special-red" />
      </div>
    </main>
  );
};

export default Home;

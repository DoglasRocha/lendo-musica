import { useEffect } from "react";

function SetGradientBg() {
  useEffect(() => {
    document.body.classList.remove("light-bg");
    document.body.classList.add("gradient-bg");
  });
}

function SetLightBg() {
  useEffect(() => {
    document.body.classList.add("light-bg");
    document.body.classList.remove("gradient-bg");
  });
}

export { SetGradientBg, SetLightBg };

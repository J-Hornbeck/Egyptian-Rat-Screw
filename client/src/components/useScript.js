import React from "react";
import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    var thumbnails = document.getElementById("thumbnails");
    var imgs = thumbnails.getElementsByTagName("img");
    var main = document.getElementById("main");
    var counter = 0;

    for (let i = 0; i < imgs.length; i++) {
      let img = imgs[i];

      img.addEventListener("click", function () {
        main.src = this.src;
      });
    }
  }, [url]);
};

export default useScript;

// by MohammadRez Keikavousi https://codepen.io/keikaavousi/pen/dybXPzK

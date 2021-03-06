/**
 * Copyright (C) 2020 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement
 * under which you licensed this source code.
 *
 * This code was automatically generated by Crestron's code generation tool.
 */
/*jslint es6 */
/*global serviceModule */

var intercomPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/intercom-page/intercom-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }
  // do-not-disturb hanger animation

  var dndBtn = document.getElementById("dnd-btn-container");
  dndBtn.addEventListener("click", addAnimation);

  function addAnimation() {
    let dndImage = document.getElementById("dnd-img");
    dndImage.classList.toggle("invisible");
    dndImage.classList.toggle("animate__swing");
  }

  /**
   * All public or private methods which need to call onInit
   */
  const intercomPagePage = document.querySelector("#intercom-page-page");
  if (intercomPagePage !== null) {
    intercomPagePage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
  };
})();

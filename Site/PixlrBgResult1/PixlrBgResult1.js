/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PixlrBgResult1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pixlr-bg-result (1)",
        "./PixlrBgResult1/costumes/pixlr-bg-result (1).png",
        { x: 480, y: 288 }
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(30, 0);
    this.size = 30;
    yield* this.say("Clique em mim para obter ajuda");
  }

  *whenthisspriteclicked() {
    while (!(this.answer > 0 && this.answer < 4)) {
      yield* this.sayAndWait("Digite 1 para saber mais sobre o Arduino", 3);
      yield* this.sayAndWait(
        "Digite 2 para aprender a programar com Arduino",
        3
      );
      yield* this.sayAndWait("Digite 3 para descobrir mais sobre nós", 3);
      yield* this.askAndWait("Qual opção você deseja?");
      yield;

      if (this.answer == 1) {
        window.location.href = "/html/interesting-links.html";
      } else if (this.answer == 2) {
        window.location.href = "/html/tests.html";
      } else if (this.answer == 3) {
        window.location.href = "/html/about.html";
      } else {
        yield* this.sayAndWait("Opção inválida!", 2);
      }
    }
  }
}

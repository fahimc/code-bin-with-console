import CommandBus from "./command/commandBus";
import Editor from "./component/editor/editor";
import Console from "./component/console/console";
import Controls from "./component/control/controls";

let Main =
{
  init()
  {
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded()
  {
    CommandBus.init();
    let editor = new Editor();
    let consoleElement = new Console();
    let controls = new Controls();
    editor.init();
    consoleElement.init();
    controls.init();
  }
};

Main.init();





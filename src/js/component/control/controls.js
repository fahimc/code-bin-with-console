import EventDispatcher from '../../util/event';

class Controls {
  constructor(){
    this.runButton = null;
    this.clearButton = null;
  }
  init(){
    this.runButton = document.querySelector('#run-button');
    this.clearButton = document.querySelector('#clear-button');

    this.addListeners();
  }
  addListeners(){
    this.runButton.addEventListener('click',this.onRunClicked.bind(this));
    this.clearButton.addEventListener('click',this.onClearClicked.bind(this));
  }
  onRunClicked(event){
    EventDispatcher.dispatch('RUN_COMMAND');
  }
  onClearClicked(event){
     EventDispatcher.dispatch('CLEAR_CONSOLE_COMMAND');
  }
}

export default Controls;

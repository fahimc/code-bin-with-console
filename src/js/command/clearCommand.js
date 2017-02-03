import EventDispatcher from '../util/event';

const ClearCommand = {
  init(){
  },
  execute(){
    EventDispatcher.dispatch('CLEAR_CONSOLE');
  }
};

ClearCommand.init();

export default ClearCommand;

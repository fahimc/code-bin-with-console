import EventDispatcher from '../util/event';

const RunCommand = {
  init(){
    EventDispatcher.addListener('SEND_EDITOR_TEXT', this.onEditorText.bind(this));
  },
  execute(){
    EventDispatcher.dispatch('GET_EDITOR_TEXT');
  },
  onEditorText(data){
    eval(data);
  }
};

RunCommand.init();

export default RunCommand;

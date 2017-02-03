import EventDispatcher from '../../util/event';
class Editor {
  constructor(){
    this.editor = null;
  }
  init(){
    this.editor =  ace.edit("editor");
    this.editor.setTheme("ace/theme/twilight");
    var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
    this.editor.session.setMode(new JavaScriptMode());

    this.addListener();

    setTimeout(function(){
      this.editor.focus();
    }.bind(this),100);
  }
  addListener(){
    EventDispatcher.addListener('GET_EDITOR_TEXT',this.onGetText.bind(this));
  }
  onGetText(){
    EventDispatcher.dispatch('SEND_EDITOR_TEXT', this.editor.getValue());
  }  
};

export default Editor;

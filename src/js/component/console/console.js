import EventDispatcher from '../../util/event';
class Console {
    constructor() {
        this.consoleCollection = [];
        this.realConsole = console.log;
        this.errorConsole = console.error;
        this.warnConsole = console.warn;
        this.infoConsole = console.info;
        this.element = null;
        this.logHolder = null;
    }
    init() {
        this.element = document.querySelector('console');
        this.logHolder = document.querySelector('console ul');

        this.overrideConsole();
        this.addListener();
    }
    addListener() {
        EventDispatcher.addListener('CLEAR_CONSOLE', this.clear.bind(this));

        window.addEventListener("error", this.windowErrors.bind(this))
    }
    windowErrors(event){
      this.addToConsole([event.message],'error', this.errorConsole);
      return false;
    }
    overrideConsole() {
        console.log = this.log.bind(this);
        console.error = this.error.bind(this);
        console.warn = this.warn.bind(this);
        console.info = this.info.bind(this);
    }
    clear() {
        this.consoleCollection = [];
        this.logHolder.innerHTML = '';
    }
    log() {
       this.addToConsole(arguments);
    }
    error() {
        console.log('error');
       this.addToConsole(arguments,'error', this.errorConsole);
    }
    info() {
        console.log('info');
        this.addToConsole(arguments,'error', this.errorConsole);
    }
    warn() {
        console.log('warn');
        this.addToConsole(arguments, 'warn', this.warnConsole);
    }
    addToConsole(args,className, currentConsole){
       this.consoleCollection.push({ method: 'log', arguments: args });
        let collectionStr = this.convertArgumentsToString(args);
        this.createItems(collectionStr, className);
        if (!currentConsole) currentConsole = this.realConsole;
        return currentConsole.apply(currentConsole, args);
    }
    createItems(collectionStr, className) {
        let item = document.createElement('LI');
        if (className) item.classList.add(className);
        item.textContent = collectionStr;
        this.logHolder.appendChild(item);
    }
    convertArgumentsToString(args) {
        let collectionStr = '';
        for (let key in args) {
            let item = args[key];
            if (collectionStr !== '') collectionStr += ', ';
            collectionStr += JSON.stringify(item);

        }
        return collectionStr;
    }
};

export default Console;

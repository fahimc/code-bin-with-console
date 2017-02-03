import EventDispatcher from '../util/event';
import RunCommand from './runCommand';
import ClearCommand from './clearCommand';

const CommandBus = {
    init() {
        EventDispatcher.addListener('RUN_COMMAND', RunCommand.execute.bind(RunCommand));
        EventDispatcher.addListener('CLEAR_CONSOLE_COMMAND', ClearCommand.execute.bind(ClearCommand));
    }
};

export default CommandBus;

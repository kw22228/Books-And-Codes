import Store from './Store';
import actions from './actions/itemAction';
import mutations from './mutations/itemMutation';

export default Object.freeze(new Store({}, actions, mutations));

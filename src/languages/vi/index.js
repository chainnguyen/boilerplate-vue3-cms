import common from './common'
// Modules
import login from './modules/login'
import management_collection from './modules/management_collection'
import management_event from './modules/management_event'
import management_frame from './modules/management_frame'

export default {
  ...common,
  ...login,
  management_collection,
  management_event,
  management_frame
}

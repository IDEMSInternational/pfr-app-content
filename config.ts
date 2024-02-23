import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("pfr");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_id: "1NCaqs4T3sbFVV0jh_aTmbeSI517WchVv",
  assets_folder_id: "1gFEuVLP4r2FVLTuPSMMul5RxhGpYy8TU",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/pfr-app-content.git",
  content_tag_latest: "1.1.10",
};

config.error_logging = {
  dsn: "https://b28164f40cf444d5860c68ce3c66c362@app.glitchtip.com/2975",
};

config.api.db_name = "pfr"
config.app_data.output_path = "./app_data";

config.app_config.APP_THEMES.available = ["default", "pfr"];
config.app_config.APP_THEMES.defaultThemeName = "pfr";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "Parenting for Respectability";
config.app_config.APP_HEADER_DEFAULTS.title = "Parenting for Respectability";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from Parenting for Respectability";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from Parenting for Respectability";
config.app_config.TASKS.enabled = true;
config.app_config.TASKS.taskGroupsListName = "session_tasks"

export default config;

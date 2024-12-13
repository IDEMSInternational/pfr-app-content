import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("pfr");

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive.sheets_folder_ids = [ "1NCaqs4T3sbFVV0jh_aTmbeSI517WchVv" ]
config.google_drive.assets_folder_ids = [ "1gFEuVLP4r2FVLTuPSMMul5RxhGpYy8TU" ]

config.git = {
  content_repo: "https://github.com/IDEMSInternational/pfr-app-content.git",
  content_tag_latest: "1.1.12",
};

config.error_logging = {
  dsn: "https://b28164f40cf444d5860c68ce3c66c362@app.glitchtip.com/2975",
};

config.api.db_name = "pfr"
config.app_data.output_path = "./app_data"; 

//To reduce app size, exclude draft and uncompressed assets
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("draft") && !fileEntry.relativePath.includes("uncompressed")

//To reduce app size, exclude draft and uncompressed assets
config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("draft") && !fileEntry.relativePath.includes("uncompressed")

config.app_config.APP_THEMES.available = ["default", "pfr"];
config.app_config.APP_THEMES.defaultThemeName = "pfr";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "PfR Parenting App";
config.app_config.APP_HEADER_DEFAULTS.title = "PfR Parenting App";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from PfR Parenting App";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from PfR Parenting App";
config.app_config.TASKS.enabled = true;
config.app_config.TASKS.taskGroupsListName = "session_tasks"

export default config;

zarafa-webapp-notifications
===========================

Plugin to enable desktop like notifications for webapp (only tested in chrome and firefox in windows os)

## How to install
1. If you want to use this plugin with production / debug version of webapp then please download package from [community](https://community.zarafa.com/pg/plugins/project/22240/developer/silentsakky/webapp-desktop-notifications-plugin)
2. If you want to use this plugin with source copy of webapp then you can just download this whole project
3. Extract contents of this plugin to <webapp_path>/plugins directory
4. Give read permissions to apache for <webapp_path>/plugins/desktopnotifications directory
5. Restart apache, reload webapp after clearing cache
6. If you want to enable this plugin by default for all users then edit config.php file and change PLUGIN_DESKTOPNOTIFICATION_USER_DEFAULT_ENABLE setting to true

## How to enable
1. Go to settings section
2. Go to Plugins tab
3. Enable desktop notifications plugin and reload webapp
4. Go to Desktop Notifications tab of settings section
5. Click on request permission button
6. Click allow in popup that is shown by browser
7. One more step would be to select checkboxes for which you like to enable this functionality and then apply settings
8. Bingo! you are ready to use cool desktop notifications

## How to disable
1. If you ever intend not to use this plugin then perform below steps to restore normal process
2. Uncheck both checkboxes to revert to default notifications of webapp
3. Disable plugin from plugins tab of settings section, apply settings
4. Revoke permissions from browser for showing desktop notifications (check with google)

## Troubleshooting
- make sure to clear cache when upgrading this plugin

## Notes
- Currently only new mail & reminder notifications are supported
- Feedback/Bug Reports are welcome
- if anyone is good at creating icons then please help me add a good icon to desktop notifications tab (credits will be given)
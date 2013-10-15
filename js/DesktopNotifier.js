Ext.namespace('Zarafa.plugins.desktop_notifications.js');

/**
 * @class Zarafa.plugins.desktop_notifications.js.DesktopNotifier
 * @extends Zarafa.core.ui.notifier.NotifyPlugin
 *
 * A plugin for notification plugin to show desktop notifications instead of normal in browser
 * notifications for actions like new mail, reminder etc.
 */
Zarafa.plugins.desktop_notifications.js.DesktopNotifier = Ext.extend(Zarafa.core.ui.notifier.NotifyPlugin, {
	/**
	 * @constructor
	 * @param {Object} config Configuration object
	 */
	constructor : function(config)
	{
		config = config || {};

		Zarafa.plugins.desktop_notifications.js.DesktopNotifier.superclass.constructor.call(this, config);
	},

	/**
	 * Notify the user with a message.
	 *
	 * The category can be either  "error", "warning", "info" or "debug", or a subtype thereof (e.g. "info.newmail").
	 *
	 * @param {String} category The category which applies to the notification.
	 * @param {String} title The title which must be shown in the message.
	 * @param {String} message The message which should be displayed.
	 * @param {Object} config Configuration object which can be applied to the notifier
	 * This object can contain keys like:
	 * - autoclose: Auto close notification after sometime
	 * @return {Mixed} A reference to the message which was created, this can be used
	 * as value for 'reference' in the config argument.
	 */
	notify : function(category, title, message, config)
	{
		Zarafa.plugins.desktop_notifications.js.DesktopNotification.notify(title, {
			tag : category,
			body : message,
			//icon : '../resources/favicon.ico'
		});

		Zarafa.plugins.desktop_notifications.js.DesktopNotifier.superclass.notify.apply(this, arguments);
	}
});

Zarafa.onReady(function() {
	container.getNotifier().registerPlugin('desktopnotifier', new Zarafa.plugins.desktop_notifications.js.DesktopNotifier());
});

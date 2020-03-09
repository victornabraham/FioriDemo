/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"FIORI_DEMO/VictorFioriDemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
'use strict';

// modules
var util = require('util');
var Orchestrator = require('uipath-orchestrator');

// local configuration file
var config = require('./config');

/**
 * Note that SpecificContent is expected to be a flat map of basic types
 * @type {Object.<string|number|boolean|null>}
 */
var queueItemSpecificContent = {
    someStr: 'Example of string value 文字列テスト',
    someNumber: 1234567890,
    someBoolean: false,
    someNull: null
};

// For more details on how to create queue items, see the online documentation:
// https://orchestrator.uipath.com/v2018.1/reference#section-adding-a-queue-item

var orchestrator = new Orchestrator(config.orchestrator);
var queueItem = {itemData: {
    Name: config.queue,
    SpecificContent: Orchestrator.odataHelper.annotateStrings(queueItemSpecificContent)
}};
orchestrator.v2.odata.postAddQueueItem(
    queueItem,
    function (err, response) {
        if (err) {
            console.error(err.message);
        }
        console.log('Response: ' + util.inspect(response));
    }
);

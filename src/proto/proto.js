/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MessageRequest = (function() {

    /**
     * Properties of a MessageRequest.
     * @exports IMessageRequest
     * @interface IMessageRequest
     * @property {string|null} [name] MessageRequest name
     * @property {string|null} [msg] MessageRequest msg
     * @property {number|Long|null} [code] MessageRequest code
     */

    /**
     * Constructs a new MessageRequest.
     * @exports MessageRequest
     * @classdesc Represents a MessageRequest.
     * @implements IMessageRequest
     * @constructor
     * @param {IMessageRequest=} [properties] Properties to set
     */
    function MessageRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageRequest name.
     * @member {string} name
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.name = "";

    /**
     * MessageRequest msg.
     * @member {string} msg
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.msg = "";

    /**
     * MessageRequest code.
     * @member {number|Long} code
     * @memberof MessageRequest
     * @instance
     */
    MessageRequest.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new MessageRequest instance using the specified properties.
     * @function create
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest=} [properties] Properties to set
     * @returns {MessageRequest} MessageRequest instance
     */
    MessageRequest.create = function create(properties) {
        return new MessageRequest(properties);
    };

    /**
     * Encodes the specified MessageRequest message. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @function encode
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest} message MessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.code);
        return writer;
    };

    /**
     * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageRequest
     * @static
     * @param {IMessageRequest} message MessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageRequest} MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.msg = reader.string();
                break;
            case 3:
                message.code = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageRequest} MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageRequest message.
     * @function verify
     * @memberof MessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                return "code: integer|Long expected";
        return null;
    };

    /**
     * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageRequest} MessageRequest
     */
    MessageRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageRequest)
            return object;
        var message = new $root.MessageRequest();
        if (object.name != null)
            message.name = String(object.name);
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.code != null)
            if ($util.Long)
                (message.code = $util.Long.fromValue(object.code)).unsigned = false;
            else if (typeof object.code === "string")
                message.code = parseInt(object.code, 10);
            else if (typeof object.code === "number")
                message.code = object.code;
            else if (typeof object.code === "object")
                message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageRequest
     * @static
     * @param {MessageRequest} message MessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.msg = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.code = options.longs === String ? "0" : 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.code != null && message.hasOwnProperty("code"))
            if (typeof message.code === "number")
                object.code = options.longs === String ? String(message.code) : message.code;
            else
                object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
        return object;
    };

    /**
     * Converts this MessageRequest to JSON.
     * @function toJSON
     * @memberof MessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageRequest;
})();

$root.MessageResponse = (function() {

    /**
     * Properties of a MessageResponse.
     * @exports IMessageResponse
     * @interface IMessageResponse
     * @property {string|null} [name] MessageResponse name
     * @property {string|null} [msg] MessageResponse msg
     * @property {number|Long|null} [code] MessageResponse code
     * @property {string|null} [time] MessageResponse time
     */

    /**
     * Constructs a new MessageResponse.
     * @exports MessageResponse
     * @classdesc Represents a MessageResponse.
     * @implements IMessageResponse
     * @constructor
     * @param {IMessageResponse=} [properties] Properties to set
     */
    function MessageResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageResponse name.
     * @member {string} name
     * @memberof MessageResponse
     * @instance
     */
    MessageResponse.prototype.name = "";

    /**
     * MessageResponse msg.
     * @member {string} msg
     * @memberof MessageResponse
     * @instance
     */
    MessageResponse.prototype.msg = "";

    /**
     * MessageResponse code.
     * @member {number|Long} code
     * @memberof MessageResponse
     * @instance
     */
    MessageResponse.prototype.code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * MessageResponse time.
     * @member {string} time
     * @memberof MessageResponse
     * @instance
     */
    MessageResponse.prototype.time = "";

    /**
     * Creates a new MessageResponse instance using the specified properties.
     * @function create
     * @memberof MessageResponse
     * @static
     * @param {IMessageResponse=} [properties] Properties to set
     * @returns {MessageResponse} MessageResponse instance
     */
    MessageResponse.create = function create(properties) {
        return new MessageResponse(properties);
    };

    /**
     * Encodes the specified MessageResponse message. Does not implicitly {@link MessageResponse.verify|verify} messages.
     * @function encode
     * @memberof MessageResponse
     * @static
     * @param {IMessageResponse} message MessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.code);
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.time);
        return writer;
    };

    /**
     * Encodes the specified MessageResponse message, length delimited. Does not implicitly {@link MessageResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageResponse
     * @static
     * @param {IMessageResponse} message MessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageResponse} MessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.msg = reader.string();
                break;
            case 3:
                message.code = reader.int64();
                break;
            case 4:
                message.time = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageResponse} MessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageResponse message.
     * @function verify
     * @memberof MessageResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.msg != null && message.hasOwnProperty("msg"))
            if (!$util.isString(message.msg))
                return "msg: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                return "code: integer|Long expected";
        if (message.time != null && message.hasOwnProperty("time"))
            if (!$util.isString(message.time))
                return "time: string expected";
        return null;
    };

    /**
     * Creates a MessageResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageResponse} MessageResponse
     */
    MessageResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageResponse)
            return object;
        var message = new $root.MessageResponse();
        if (object.name != null)
            message.name = String(object.name);
        if (object.msg != null)
            message.msg = String(object.msg);
        if (object.code != null)
            if ($util.Long)
                (message.code = $util.Long.fromValue(object.code)).unsigned = false;
            else if (typeof object.code === "string")
                message.code = parseInt(object.code, 10);
            else if (typeof object.code === "number")
                message.code = object.code;
            else if (typeof object.code === "object")
                message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber();
        if (object.time != null)
            message.time = String(object.time);
        return message;
    };

    /**
     * Creates a plain object from a MessageResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageResponse
     * @static
     * @param {MessageResponse} message MessageResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.msg = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.code = options.longs === String ? "0" : 0;
            object.time = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.msg != null && message.hasOwnProperty("msg"))
            object.msg = message.msg;
        if (message.code != null && message.hasOwnProperty("code"))
            if (typeof message.code === "number")
                object.code = options.longs === String ? String(message.code) : message.code;
            else
                object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber() : message.code;
        if (message.time != null && message.hasOwnProperty("time"))
            object.time = message.time;
        return object;
    };

    /**
     * Converts this MessageResponse to JSON.
     * @function toJSON
     * @memberof MessageResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageResponse;
})();

module.exports = $root;

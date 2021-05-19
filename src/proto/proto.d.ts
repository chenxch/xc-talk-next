import * as $protobuf from "protobufjs";
/** Properties of a MessageRequest. */
export interface IMessageRequest {

    /** MessageRequest name */
    name?: (string|null);

    /** MessageRequest msg */
    msg?: (string|null);

    /** MessageRequest code */
    code?: (number|Long|null);
}

/** Represents a MessageRequest. */
export class MessageRequest implements IMessageRequest {

    /**
     * Constructs a new MessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageRequest);

    /** MessageRequest name. */
    public name: string;

    /** MessageRequest msg. */
    public msg: string;

    /** MessageRequest code. */
    public code: (number|Long);

    /**
     * Creates a new MessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageRequest instance
     */
    public static create(properties?: IMessageRequest): MessageRequest;

    /**
     * Encodes the specified MessageRequest message. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @param message MessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link MessageRequest.verify|verify} messages.
     * @param message MessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageRequest;

    /**
     * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageRequest;

    /**
     * Verifies a MessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageRequest
     */
    public static fromObject(object: { [k: string]: any }): MessageRequest;

    /**
     * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
     * @param message MessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MessageResponse. */
export interface IMessageResponse {

    /** MessageResponse name */
    name?: (string|null);

    /** MessageResponse msg */
    msg?: (string|null);

    /** MessageResponse code */
    code?: (number|Long|null);

    /** MessageResponse time */
    time?: (string|null);
}

/** Represents a MessageResponse. */
export class MessageResponse implements IMessageResponse {

    /**
     * Constructs a new MessageResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageResponse);

    /** MessageResponse name. */
    public name: string;

    /** MessageResponse msg. */
    public msg: string;

    /** MessageResponse code. */
    public code: (number|Long);

    /** MessageResponse time. */
    public time: string;

    /**
     * Creates a new MessageResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageResponse instance
     */
    public static create(properties?: IMessageResponse): MessageResponse;

    /**
     * Encodes the specified MessageResponse message. Does not implicitly {@link MessageResponse.verify|verify} messages.
     * @param message MessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageResponse message, length delimited. Does not implicitly {@link MessageResponse.verify|verify} messages.
     * @param message MessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageResponse;

    /**
     * Decodes a MessageResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageResponse;

    /**
     * Verifies a MessageResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageResponse
     */
    public static fromObject(object: { [k: string]: any }): MessageResponse;

    /**
     * Creates a plain object from a MessageResponse message. Also converts values to other types if specified.
     * @param message MessageResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

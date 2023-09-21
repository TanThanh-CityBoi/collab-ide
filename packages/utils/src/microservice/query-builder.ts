/**
 * Make all properties in T optional
 */
export type QueryPartialEntity<T> = {
    [P in keyof T]?: T[P] | (() => string);
};

/**
 * Make all properties in T optional. Deep version.
 */
export type QueryDeepPartialEntity<T> = {
    [P in keyof T]?:
        | (T[P] extends Array<infer U>
              ? Array<QueryDeepPartialEntity<U>>
              : T[P] extends ReadonlyArray<infer U>
              ? ReadonlyArray<QueryDeepPartialEntity<U>>
              : QueryDeepPartialEntity<T[P]>)
        | (() => string);
};

/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]> | T[P];
};

/**
 * Query parser
 */
export type MessParser<T> = {
    [P in keyof T]?:
        | {
              type: string;
              value: any;
          }
        | T[P];
};

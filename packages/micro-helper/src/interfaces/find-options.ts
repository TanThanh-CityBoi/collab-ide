/**
 * Interface of the simple literal object with any string keys.
 */
interface ObjectLiteral {
    [key: string]: any;
}

export interface FindOneOptions<Entity = any> {
    /**
     * Specifies what columns should be retrieved.
     */
    select?: (keyof Entity)[];

    /**
     * Simple condition that should be applied to match entities.
     */
    where?:
        | FindConditions<Entity>[]
        | FindConditions<Entity>
        | ObjectLiteral
        | string;

    /**
     * Indicates what relations of entity should be loaded (simplified left join form).
     */
    relations?: string[];

    /**
     * Order, in which entities should be ordered.
     */
    order?: { [P in keyof Entity]?: "ASC" | "DESC" | 1 | -1 };
}

/**
 * Defines a special criteria to find specific entities.
 */
export interface FindManyOptions<Entity = any> extends FindOneOptions<Entity> {
    /**
     * Offset (paginated) where from entities should be taken.
     */
    skip?: number;

    /**
     * Limit (paginated) - max number of entities should be taken.
     */
    take?: number;
}

/**
 * Used for find operations.
 */
export type FindConditions<T> =
    | T
    | {
          [P in keyof T]?: T[P] extends Promise<infer U>
              ? FindConditions<U>
              : FindConditions<T[P]>;
      };

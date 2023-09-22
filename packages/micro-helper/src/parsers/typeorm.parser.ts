export const TypeOrmParser = {
    In: (value: Array<any>) => ({ type: "in", value }),
    NotIn: (value: Array<any>) => ({ type: "notin", value }),
    IsNull: () => ({ type: "isnull" }),
    Between: (from: any, to: any) => ({ type: "between", value: { from, to } }),
    MoreThanOrEqual: (value: any) => ({ type: "moreThanOrEqual", value }),
    LessThanOrEqual: (value: any) => ({ type: "lessThanOrEqual", value }),
    Like: (value: any) => ({ type: "like", value }),
};

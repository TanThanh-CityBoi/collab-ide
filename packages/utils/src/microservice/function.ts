export const generateRequestId = () => {
    const time = Date.now().toString();
    const randomNumbers = Math.floor(Math.random() * (1000 - 100) + 100);
    return time + randomNumbers.toString();
};

export const TypeOrmParser = {
    In: (value: Array<any>) => ({ type: "in", value }),
    NotIn: (value: Array<any>) => ({ type: "notin", value }),
    IsNull: () => ({ type: "isnull" }),
    Between: (from: any, to: any) => ({ type: "between", value: { from, to } }),
    MoreThanOrEqual: (value: any) => ({ type: "moreThanOrEqual", value }),
    LessThanOrEqual: (value: any) => ({ type: "lessThanOrEqual", value }),
    Like: (value: any) => ({ type: "like", value }),
};

export const MongooseParser = {
    In: (value: Array<any>) => ({}),
    NotIn: (value: Array<any>) => ({}),
    IsNull: () => ({}),
    Between: (from: any, to: any) => ({}),
    MoreThanOrEqual: (value: any) => ({}),
    LessThanOrEqual: (value: any) => ({}),
    Like: (value: any) => ({}),
};

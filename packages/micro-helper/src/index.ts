import { Transporter } from "./transporter";

type ObjectType<T> = { new (): T } | Function;
type EntityTarget<Entity> =
    | ObjectType<Entity>
    | string
    | { type: Entity; name: string };

type IService<Entity> = [string, string, EntityTarget<Entity>];

export function _microTcp<Entity>([
    service,
    entityName,
    _,
]: IService<Entity>): Transporter<Entity> {
    const host = process.env[`${service}_SERVICE_HOST`];
    const port = Number(process.env[`${service}_SERVICE_PORT`]);
    return new Transporter({ host, port }, entityName);
}

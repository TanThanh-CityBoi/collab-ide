import { ClientService } from "./client.service";

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
]: IService<Entity>): ClientService<Entity> {
    const host = process.env[`${service}_SERVICE_HOST`];
    const port = Number(process.env[`${service}_SERVICE_PORT`]);
    return new ClientService({ host, port }, entityName);
}

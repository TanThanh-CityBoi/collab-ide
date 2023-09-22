import { HttpStatus } from "@nestjs/common";
import { IResponse } from "@micro/common";

export const _response = ({
    status = HttpStatus.OK,
    data = null,
    message = "success",
}): IResponse => ({
    status,
    data,
    message,
});

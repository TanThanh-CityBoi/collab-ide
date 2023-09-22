import { HttpStatus } from "@nestjs/common";

export const _response = ({
    status = HttpStatus.OK,
    data = null,
    message = "success",
}) => ({
    status,
    data,
    message,
});

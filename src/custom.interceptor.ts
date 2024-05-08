import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";
import { data } from "./data";


export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler) {
        console.log("THIS IS INTERCEPTING THE REQUEST")

        {
            return handler.handle().pipe(
                map((data) => {
                    const response = {
                        ...data,
                        createdAt: data.created_at,
                    };
                    delete response.updated_at;
                    delete response.created_at;
                    return response;
                })
            )
        }
    }
}


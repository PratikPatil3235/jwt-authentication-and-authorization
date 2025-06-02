import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";


export class RoleGuard implements CanActivate{

    private roalPass: string;

    constructor(role:string) {
        this.roalPass = role;
    }
    canActivate(context: ExecutionContext): boolean  {
        const ctx = context.switchToHttp();
        const request:any = ctx.getRequest<Request>();

        return this.roalPass==request.user.roal;
    }
}
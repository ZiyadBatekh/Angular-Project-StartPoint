import { inject, Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "avatarUrl",
  standalone: true,
})
export class AvatarUrlPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error("Method not implemented.");
  }
  
}

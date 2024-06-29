import { inject, Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "summary",
  standalone: true,
})
export class SummaryPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error("Method not implemented.");
  }
 
}

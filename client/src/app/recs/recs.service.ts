import { Injectable, EventEmitter, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecsService {
  rectype: number;
  title: string;
  @Output() find = new EventEmitter<{ rectype: number; title: string }>();

  constructor() {}
}

export interface ClientEvent {
  "game:play": (callback: (res: Response))
}

export interface ServerEvent {
  "game:foo": (foo: string) => void;
}

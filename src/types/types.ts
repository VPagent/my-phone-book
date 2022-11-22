export type State = {
    token: null | string,
    user: null | {name: string, email: string},
    items: null | [],
    filter: null | string
}

export type User = {
    name: string,
    email: string
}


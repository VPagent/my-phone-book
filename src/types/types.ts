export type State = {
    token: null | string,
    user: null | {name: string, email: string},
    items: [] | Item[],
    filter: null | string
}

export type User = {
    name: string,
    email: string
}

export type Item = {
    name: string,
    number: string,
    id: string
}

export type Todo = {
    name: string,
    id: string,
    text: string,
    done: boolean
}


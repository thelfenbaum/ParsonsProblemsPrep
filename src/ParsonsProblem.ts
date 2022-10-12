import { BlockState } from "./Block"

export type ParsonsProblemState = {
    id: string

    blocks: {[id: string]: BlockState}
    spaces: {[id: string]: SpaceState}
    tests: {[id: string]: TestCaseState}
    solved: boolean
}

export type SpaceState = {
    id: string
    blockIds: (string | null)[]
}

export type TestCaseState = {
    id: string

    expected: string
    recieved: string

    // L = [1, 2, 0]; insertion_sort(L); print(L)
    prompt: string
}


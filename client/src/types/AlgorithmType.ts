export type Algorithm = {
    _id: string,
    sequence: number,
    slug: string,
    level: string
    title: string,
    description: keyof JSX.IntrinsicElements,
    example: string,
    constrain: string,
    answer: string,
    date: string,
    day: number
}
export type ValueChanged<T> = (value: T) => void;
export type VoidCallback = () => void;
export type TextInputValidator = (text: string) => string;
export type ImagesInputValidator = (images: string[]) => string;
export type ScoreValidator = (score: number | undefined) => string;

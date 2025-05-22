export interface CustomApiResponse extends Response {
    errors?: string[];
    message?: string;
}

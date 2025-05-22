export async function fetchGet<T>(endpoint: string) {
    try {
        const response = await fetch(endpoint, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = (await response.json()) as T;

        return data;
    } catch (error) {
        console.error("Error in fetchGet:", error);
        throw error;
    }
}

export async function fetchPost<T, R extends object>(endpoint: string, body?: R) {
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        const json = await response.json();

        if (!response.ok) {
            throw json;
        }

        const data = json as T;

        return data;
    } catch (error) {
        console.error("Error in fetchPost:", error);
        throw error;
    }
}

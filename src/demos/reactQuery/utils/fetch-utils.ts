/**
 * Fetches JSON data from an endpoint and throws an error if the network response is not OK.
 *
 * @param {string} endpoint - The URL of the endpoint to fetch JSON data from.
 * @param {object} settings - Optional settings object to configure the fetch request.
 * @return {Promise<object>} - A promise that resolves to the fetched JSON data.
 * @throws {Error} - If the network response is not OK, an error is thrown with the corresponding response status and status text.
 */
export async function fetchJsonThrowingErrors<T>(endpoint: string, settings?: any): Promise<T> {
    const response = await fetch(endpoint, { ...(settings || {}) });
    if (!response.ok) {
        throw new Error(`Network response problem - ${response.status} - ${response.statusText})`);
    }
    return (await response.json()) as T;
}

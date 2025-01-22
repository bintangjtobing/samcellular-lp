

export const clientApiRequest = async ({ url, method, body, parameter }) => {
    try {

        const fullUrl = parameter
            ? `${process.env.NEXT_PUBLIC_API_URL_INTERNAL}api/proxy?url=${url}&parameter=${parameter}`
            : `${process.env.NEXT_PUBLIC_API_URL_INTERNAL}api/proxy?url=${url}`;


        const response = await fetch(fullUrl, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : undefined,
        })

        if (!response.ok) {
            console.error(`API request failed: ${response.status} ${response.statusText}`);
            throw new Error(`API request failed with status ${response.status}`);
          }

        const data = await response.json();
        return data

    } catch (error) {
        console.error('Error in transactionServices:', error);
        throw error;
    }
}
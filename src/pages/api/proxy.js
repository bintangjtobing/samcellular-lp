export default async function handler(req, res) {
    try {
        // Access `url` and `parameter` from query
        const url = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
        const parameter = Array.isArray(req.query.parameter) ? req.query.parameter[0] : req.query.parameter;

        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Invalid URL' });
        }

        // Build the API URL dynamically
        const apiUrl = parameter
            ? `${process.env.NEXT_PUBLIC_API_URL}/${url}?${parameter}`
            : `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

        // Make the API request
        const apiResponse = await fetch(apiUrl, {
            method: req.method,
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
        });

        const responseData = await apiResponse.json();
        res.status(apiResponse.status).json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
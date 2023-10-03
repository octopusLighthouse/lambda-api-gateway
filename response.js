function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Author': 'RB',
        },
        body: JSON.stringify(body),
    }
}

export { buildResponse }
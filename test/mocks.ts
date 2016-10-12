export function fetchMock (path) {
    return new Promise((resolve) => {
    })
}

declare var global;
global.fetch = fetchMock;

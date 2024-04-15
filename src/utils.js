export const getImageUrl = (path) => {
    // Constructs a URL using the provided path relative to the `/assets` directory
    return new URL(`/assets/${path}`, import.meta.url).href;
};

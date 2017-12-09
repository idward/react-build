export function increment(captionLabel) {
    return {
        type: 'INCREMENT',
        payload: {caption:captionLabel}
    };
}

export function decrement(captionLabel) {
    return {
        type: 'DECREMENT',
        payload: {caption:captionLabel}
    };
}
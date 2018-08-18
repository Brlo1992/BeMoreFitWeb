import Guid from 'guid';

const defaultOptions = {
    color: "#6796e6"
}

export default function Create(options) {
    return {
        ...defaultOptions,
        ...options,
        id: Guid.create()
    }
}
const baseUrl = "https://8mt40pkdvi.execute-api.us-east-1.amazonaws.com/dev"

export const searchTrack = (key: string): string => {
    return `${baseUrl}/track?q=${key}`
}

export const getArtist = (id: string): string => {
    return `${baseUrl}/artist/${id}`
}
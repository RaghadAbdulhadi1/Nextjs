export const extractHexCode = (color) => {
    return color.thumbnailUrl.substring(color.thumbnailUrl.lastIndexOf("/") + 1)
}

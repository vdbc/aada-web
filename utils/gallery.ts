import { GalleryModel } from "../models/GalleryModel";

export function getGalleryImages(gallery: GalleryModel) {
    return gallery?.images || [];
}
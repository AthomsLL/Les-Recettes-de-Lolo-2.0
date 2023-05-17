import {v2 as _cloudinary} from "cloudinary"

const cloudinary = (upload_folder) => {
  const config = useRuntimeConfig()

  _cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
    upload_preset: upload_folder
  })

  return _cloudinary
}

export const uploadToCloudinary = (image, upload_folder) => {
  return new Promise((resolve, reject) => {
    cloudinary(upload_folder).uploader.upload(image, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}
import {v2 as _cloudinary} from "cloudinary"

const cloudinary = () => {
  const config = useRuntimeConfig()

  _cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  })

  return _cloudinary
}

export const uploadToCloudinary = (image, upload_folder) => {
  return new Promise((resolve, reject) => {
    cloudinary().uploader.upload(image, {
      upload_preset: upload_folder,
      allowed_formats: 'jpg, png'
    }, (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}
export const userTransformer = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    username: user.username,
    avatar: user.avatar,
    avatarPublicId: user.avatarPublicId,
    isAdmin: user.isAdmin
  }
}
export default async (req, res) => {
  res.setHeader('Set-Cookie', [
    `token=deleted; Max-Age=0; path=/`
  ])
  res.redirect('/')
  res.end()
}

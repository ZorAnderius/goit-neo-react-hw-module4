const filterData = data => ({
  images: data?.results.map(
    ({
      id,
      alt_description,
      likes,
      urls: { small, regular },
      user: {
        name: username,
        profile_image: { medium: profile_img },
        links: { html },
      },
    }) => ({
      id,
      alt_description,
      likes,
      small_img: small,
      big_image: regular,
      username: username,
      profile_img,
      portfolio_link: html,
    })
  ),
  total_pages: data?.total_pages,
});

export default filterData;

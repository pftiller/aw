export const schemaData = ()=> {
    let data =  {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ArtWrite Productions",
        "url": "https://artwriteproductions.com",
        "logo": "https://artwriteproductions.com/images/artwrite-logo.png",
        "sameAs": [
          "https://www.facebook.com/artwriteproductions",
          "https://www.youtube.com/channel/UC6o8IqLRgzen5uyGt8NP_Yw",
          "https://www.linkedin.com/company/9729956",
          "https://artwriteproductions.com"
        ]
      }
    return JSON.stringify(data);  
}

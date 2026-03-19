CMS.registerPreviewTemplate("pages", ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return `
    <div style="padding:20px; font-family:sans-serif;">
      <h1>${data.hero?.title || "Preview Title"}</h1>
      <p>${data.hero?.subtitle || "Preview subtitle"}</p>
    </div>
  `;
});
